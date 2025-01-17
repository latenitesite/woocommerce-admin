/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Card, CardBody } from '@wordpress/components';
import { useEffect, useMemo } from '@wordpress/element';
import {
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	pluginNames,
} from '@woocommerce/data';
import { Plugins, Stepper, WooRemotePayment } from '@woocommerce/components';

import { recordEvent } from '@woocommerce/tracks';
import { useSelect } from '@wordpress/data';
import { useSlot } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '~/lib/notices';
import { PaymentConnect } from './PaymentConnect';

export const PaymentMethod = ( {
	markConfigured,
	method,
	recordConnectStartEvent,
} ) => {
	const {
		key,
		plugins,
		title,
		post_install_script: postInstallScript,
	} = method;
	const slot = useSlot( `woocommerce_remote_payment_${ key }` );
	const hasFills = Boolean( slot?.fills?.length );

	useEffect( () => {
		recordEvent( 'payments_task_stepper_view', {
			payment_method: key,
		} );
	}, [] );

	const { activePlugins } = useSelect( ( select ) => {
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );

		return {
			activePlugins: getActivePlugins(),
		};
	} );

	const isOptionsRequesting = useSelect( ( select ) => {
		const { isOptionsUpdating } = select( OPTIONS_STORE_NAME );

		return isOptionsUpdating();
	} );

	const installStep = useMemo( () => {
		if ( ! plugins || ! plugins.length ) {
			return;
		}

		const pluginsToInstall = plugins.filter(
			( m ) => ! activePlugins.includes( m )
		);
		const pluginNamesString = plugins
			.map( ( pluginSlug ) => pluginNames[ pluginSlug ] )
			.join( ' ' + __( 'and', 'woocommerce-admin' ) + ' ' );

		return {
			key: 'install',
			label: sprintf(
				/* translators: %s = one or more plugin names joined by "and" */
				__( 'Install %s', 'woocommerce-admin' ),
				pluginNamesString
			),
			content: (
				<Plugins
					onComplete={ ( installedPlugins, response ) => {
						createNoticesFromResponse( response );
						recordEvent( 'tasklist_payment_install_method', {
							plugins,
						} );

						if ( postInstallScript ) {
							const script = document.createElement( 'script' );
							script.src = postInstallScript;
							document.body.append( script );
						}
					} }
					onError={ ( errors, response ) =>
						createNoticesFromResponse( response )
					}
					autoInstall
					pluginSlugs={ plugins }
				/>
			),
			isComplete: ! pluginsToInstall.length,
		};
	}, [ activePlugins, plugins ] );

	const connectStep = useMemo( () => {
		return {
			key: 'connect',
			label: sprintf(
				__( 'Connect your %(title)s account', 'woocommerce-admin' ),
				{
					title,
				}
			),
			content: (
				<PaymentConnect
					method={ method }
					markConfigured={ markConfigured }
					recordConnectStartEvent={ recordConnectStartEvent }
				/>
			),
		};
	}, [ title ] );

	const DefaultStepper = ( props ) => (
		<Stepper
			isVertical
			isPending={ ! installStep.isComplete || isOptionsRequesting }
			currentStep={ installStep.isComplete ? 'connect' : 'install' }
			steps={ [ installStep, connectStep ] }
			{ ...props }
		/>
	);

	return (
		<Card className="woocommerce-task-payment-method woocommerce-task-card">
			<CardBody>
				{ hasFills ? (
					<WooRemotePayment.Slot
						fillProps={ {
							defaultStepper: DefaultStepper,
							defaultInstallStep: installStep,
							defaultConnectStep: connectStep,
						} }
						id={ key }
					/>
				) : (
					<DefaultStepper />
				) }
			</CardBody>
		</Card>
	);
};

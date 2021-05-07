/**
 * External dependencies
 */

import { __, sprintf } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import { Fragment } from '@wordpress/element';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import Appearance from './tasks/appearance';
import { getCategorizedOnboardingProducts } from '../dashboard/utils';
import { Products } from './tasks/products';
import Shipping from './tasks/shipping';
import Tax from './tasks/tax';
import Payments from './tasks/payments';
import {
	installActivateAndConnectWcpay,
	isWCPaySupported,
} from './tasks/payments/methods/wcpay';
import { groupListOfObjectsBy } from '../lib/collections';
import { getLinkTypeAndHref } from '~/store-management-links';

export function recordTaskViewEvent(
	taskName,
	isJetpackConnected,
	activePlugins,
	installedPlugins
) {
	recordEvent( 'task_view', {
		task_name: taskName,
		wcs_installed: installedPlugins.includes( 'woocommerce-services' ),
		wcs_active: activePlugins.includes( 'woocommerce-services' ),
		jetpack_installed: installedPlugins.includes( 'jetpack' ),
		jetpack_active: activePlugins.includes( 'jetpack' ),
		jetpack_connected: isJetpackConnected,
	} );
}

export function getAllTasks( {
	activePlugins,
	countryCode,
	createNotice,
	installAndActivatePlugins,
	installedPlugins,
	isJetpackConnected,
	onboardingStatus,
	profileItems,
	query,
	toggleCartModal,
	onTaskSelect,
} ) {
	const {
		hasPaymentGateway,
		hasPhysicalProducts,
		hasProducts,
		isAppearanceComplete,
		isTaxComplete,
		shippingZonesCount,
		wcPayIsConnected,
	} = {
		hasPaymentGateway: false,
		hasPhysicalProducts: false,
		hasProducts: false,
		isAppearanceComplete: false,
		isTaxComplete: false,
		shippingZonesCount: 0,
		wcPayIsConnected: false,
		...onboardingStatus,
	};

	const groupedProducts = getCategorizedOnboardingProducts(
		profileItems,
		installedPlugins
	);
	const { products, remainingProducts, uniqueItemsList } = groupedProducts;

	const woocommercePaymentsInstalled =
		installedPlugins.indexOf( 'woocommerce-payments' ) !== -1;
	const {
		completed: profilerCompleted,
		product_types: productTypes,
		business_extensions: businessExtensions,
	} = profileItems;

	const woocommercePaymentsSelectedInProfiler = (
		businessExtensions || []
	).includes( 'woocommerce-payments' );

	let purchaseAndInstallText = __(
		'Add paid extensions to your store',
		'woocommerce-admin'
	);

	if ( uniqueItemsList.length === 1 ) {
		const { name: itemName } = uniqueItemsList[ 0 ];
		const purchaseAndInstallFormat = __(
			'Add %s to your store',
			'woocommerce-admin'
		);
		purchaseAndInstallText = sprintf( purchaseAndInstallFormat, itemName );
	}

	const tasks = [
		{
			key: 'store_details',
			title: __( 'Complete your store details', 'woocommerce-admin' ),
			content: __(
				'Your store address is required to set the origin country for shipping, currencies, and payment options.',
				'woocommerce-admin'
			),
			container: null,
			action: __( "Let's go", 'woocommerce-admin' ),
			onClick: () => {
				onTaskSelect( 'store_details' );
				getHistory().push( getNewPath( {}, '/setup-wizard', {} ) );
			},
			completed: profilerCompleted,
			visible: true,
			time: __( '4 minutes', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'purchase',
			title: purchaseAndInstallText,
			content: __( '', 'woocommerce-admin' ),
			container: null,
			onClick: () => {
				onTaskSelect( 'purchase' );
				return remainingProducts.length ? toggleCartModal() : null;
			},
			visible: products.length,
			completed: products.length && ! remainingProducts.length,
			time: __( '2 minutes', 'woocommerce-admin' ),
			isDismissable: true,
			type: 'setup',
		},
		{
			key: 'products',
			title: __( 'Add products', 'woocommerce-admin' ),
			content: __(
				'Start by adding the first product to your store. You can add your products manually, via CSV, or import them from another service.',
				'woocommerce-admin'
			),
			container: <Products />,
			onClick: () => {
				onTaskSelect( 'products' );
				updateQueryString( { task: 'products' } );
			},
			completed: hasProducts,
			visible: true,
			time: __( '1 minute per product', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'woocommerce-payments',
			title: __(
				'Get paid with WooCommerce Payments',
				'woocommerce-admin'
			),
			content: __(
				"You're only one step away from getting paid. Verify your business details to start managing transactions with WooCommerce Payments.",
				'woocommerce-admin'
			),
			action: __( 'Finish setup', 'woocommmerce-admin' ),
			expanded: true,
			container: <Fragment />,
			completed: wcPayIsConnected,
			onClick: async ( e ) => {
				if ( e.target.nodeName === 'A' ) {
					// This is a nested link, so don't activate the task.
					return false;
				}

				await new Promise( ( resolve, reject ) => {
					// This task doesn't have a view, so the recordEvent call
					// in TaskDashboard.recordTaskView() is never called. So
					// record it here.
					recordTaskViewEvent(
						'wcpay',
						isJetpackConnected,
						activePlugins,
						installedPlugins
					);
					onTaskSelect( 'woocommerce-payments' );
					return installActivateAndConnectWcpay(
						reject,
						createNotice,
						installAndActivatePlugins
					);
				} );
			},
			visible:
				window.wcAdminFeatures.wcpay &&
				woocommercePaymentsSelectedInProfiler &&
				woocommercePaymentsInstalled &&
				isWCPaySupported( countryCode ),
			additionalInfo: __(
				'By setting up, you are agreeing to the <a href="https://wordpress.com/tos/" target="_blank">Terms of Service</a>',
				'woocommerce-admin'
			),
			time: __( '2 minutes', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'payments',
			title: __( 'Choose payment methods', 'woocommerce-admin' ),
			content: __(
				'Simplify transactions with WooCommerce Payments, and you can also add Stripe, PayPal, or other payment options to your store.',
				'woocommerce-admin'
			),
			container: <Payments />,
			completed: hasPaymentGateway,
			onClick: () => {
				onTaskSelect( 'payments' );
				updateQueryString( { task: 'payments' } );
			},
			visible:
				! woocommercePaymentsInstalled ||
				! woocommercePaymentsSelectedInProfiler ||
				! isWCPaySupported( countryCode ),
			time: __( '2 minutes', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'tax',
			title: __( 'Add tax rates', 'woocommerce-admin' ),
			content: __(
				'Good news! WooCommerce Services and Jetpack can automate your sales tax calculations for you.',
				'woocommerce-admin'
			),
			container: <Tax />,
			action: __( 'Yes please', 'woocommerce-admin' ),
			onClick: () => {
				onTaskSelect( 'tax' );
				updateQueryString( { task: 'tax' } );
			},
			completed: isTaxComplete,
			visible: true,
			time: __( '1 minute', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'shipping',
			title: __( 'Add shipping costs', 'woocommerce-admin' ),
			content: __(
				"Set your store location and where you'll ship to.",
				'woocommerce-admin'
			),
			container: <Shipping />,
			action: __( "Let's go", 'woocommerce-admin' ),
			onClick: () => {
				if ( shippingZonesCount > 0 ) {
					window.location = getLinkTypeAndHref( {
						type: 'wc-settings',
						tab: 'shipping',
					} ).href;
				} else {
					onTaskSelect( 'shipping' );
					updateQueryString( { task: 'shipping' } );
				}
			},
			completed: shippingZonesCount > 0,
			visible:
				( productTypes && productTypes.includes( 'physical' ) ) ||
				hasPhysicalProducts,
			time: __( '1 minute', 'woocommerce-admin' ),
			type: 'setup',
		},
		{
			key: 'appearance',
			title: __( 'Personalize your store', 'woocommerce-admin' ),
			content: __(
				'Add your logo, create a homepage, and start designing your storefront.',
				'woocommerce-admin'
			),
			container: <Appearance />,
			action: __( "Let's go", 'woocommerce-admin' ),
			onClick: () => {
				onTaskSelect( 'appearance' );
				updateQueryString( { task: 'appearance' } );
			},
			completed: isAppearanceComplete,
			visible: true,
			time: __( '2 minutes', 'woocommerce-admin' ),
			type: 'setup',
		},
	];
	const filteredTasks = applyFilters(
		'woocommerce_admin_onboarding_task_list',
		tasks,
		query
	);
	for ( const task of filteredTasks ) {
		task.level = task.level ? parseInt( task.level, 10 ) : 3;
	}
	return groupListOfObjectsBy( filteredTasks, 'type', 'extension' );
}

export function taskSort( a, b ) {
	if ( a.completed || b.completed ) {
		return a.completed ? 1 : -1;
	}
	// Three is the lowest level.
	const aLevel = a.level || 3;
	const bLevel = b.level || 3;
	if ( aLevel === bLevel ) {
		return 0;
	}
	return aLevel > bLevel ? 1 : -1;
}

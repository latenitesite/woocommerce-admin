/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './action-types';
import { API_NAMESPACE } from './constants';
import { PaymentGateway, RestApiError, SelectorKeysWithActions } from './types';

export function getPaymentGatewaysSuccess(
	paymentGateways: PaymentGateway[]
): {
	type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS;
	paymentGateways: PaymentGateway[];
} {
	return {
		type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS,
		paymentGateways,
	};
}

export function updatePaymentGatewaySuccess(
	paymentGateway: PaymentGateway
): {
	type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS;
	paymentGateway: PaymentGateway;
} {
	return {
		type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS,
		paymentGateway,
	};
}

export function setError(
	selector: SelectorKeysWithActions,
	error: RestApiError
): {
	type: ACTION_TYPES.SET_ERROR;
	selector: SelectorKeysWithActions;
	error: RestApiError;
} {
	return {
		type: ACTION_TYPES.SET_ERROR,
		selector,
		error,
	};
}

export function setIsRequesting(
	selector: SelectorKeysWithActions,
	isRequesting: boolean
): {
	type: ACTION_TYPES.SET_IS_REQUESTING;
	selector: SelectorKeysWithActions;
	isRequesting: boolean;
} {
	return {
		type: ACTION_TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function* updatePaymentGateway(
	id: string,
	data: Partial< PaymentGateway >
) {
	yield setIsRequesting( 'updatePaymentGateway', true );

	try {
		const response: PaymentGateway = yield apiFetch( {
			method: 'PUT',
			path: API_NAMESPACE + '/payment_gateways/' + id,
			body: JSON.stringify( data ),
		} );

		if ( response && response.id === id ) {
			// Update the already loaded payment gateway list with the new data
			yield updatePaymentGatewaySuccess( response );
			return response;
		}
	} catch ( e ) {
		yield setError( 'updatePaymentGateway', e );
	}
}

export type Actions =
	| ReturnType< typeof updatePaymentGateway >
	| ReturnType< typeof updatePaymentGatewaySuccess >
	| ReturnType< typeof getPaymentGatewaysSuccess >
	| ReturnType< typeof setError >
	| ReturnType< typeof setIsRequesting >;

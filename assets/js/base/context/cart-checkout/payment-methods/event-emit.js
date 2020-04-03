/**
 * Internal dependencies
 */
import {
	reducer,
	emitEvent,
	emitEventWithAbort,
	emitterCallback,
} from '../event-emit';

const EMIT_TYPES = {
	PAYMENT_PROCESSING: 'payment_processing',
	PAYMENT_SUCCESS: 'payment_success',
	PAYMENT_FAIL: 'payment_fail',
	PAYMENT_HAS_ERROR: 'payment_has_error',
};

/**
 * Receives a reducer dispatcher and returns an object with the
 * various event emitters for the payment processing events.
 *
 * Calling the event registration function with the callback will register it
 * for the event emitter and will return a dispatcher for removing the
 * registered callback (useful for implementation in `useEffect`).
 *
 * @param {Function} dispatcher The emitter reducer dispatcher.
 *
 * @return {Object} An object with the various payment event emitter
 *                  registration functions
 */
const emitterSubscribers = ( dispatcher ) => ( {
	onPaymentProcessing: emitterCallback(
		EMIT_TYPES.PAYMENT_PROCESSING,
		dispatcher
	),
	onPaymentSuccess: emitterCallback( EMIT_TYPES.PAYMENT_SUCCESS, dispatcher ),
	onPaymentFail: emitterCallback( EMIT_TYPES.PAYMENT_FAIL, dispatcher ),
	onPaymentError: emitterCallback( EMIT_TYPES.PAYMENT_ERROR, dispatcher ),
} );

export {
	EMIT_TYPES,
	emitterSubscribers,
	reducer,
	emitEvent,
	emitEventWithAbort,
};

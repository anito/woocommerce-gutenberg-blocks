/**
 * External dependencies
 */
import { withRestApiHydration } from '@woocommerce/block-hocs';
<<<<<<< HEAD
import { useStoreCart } from '@woocommerce/base-hooks';
import { RawHTML } from '@wordpress/element';
=======
>>>>>>> init

/**
 * Internal dependencies
 */
import FullCart from './full-cart';
import renderFrontend from '../../../utils/render-frontend.js';

<<<<<<< HEAD
/**
 * Wrapper component to supply API data and show empty cart view as needed.
 */
const CartFrontend = ( { emptyCart } ) => {
	const { cartData, isLoading } = useStoreCart();

	if ( isLoading ) {
		return null;
	}

	const cartItems = cartData.items;
	const isCartEmpty = cartItems.length <= 0;

	return isCartEmpty ? (
		<RawHTML>{ emptyCart }</RawHTML>
	) : (
		<FullCart cartItems={ cartItems } cartTotals={ cartData.totals } />
	);
};

const getProps = ( el ) => ( {
	emptyCart: el.innerHTML,
} );

renderFrontend(
	'.wp-block-woocommerce-cart',
	withRestApiHydration( CartFrontend ),
	getProps
);
=======
const isCartEmpty = false; // @todo check if the cart has some products
const selector = '.wp-block-woocommerce-cart';

if ( ! isCartEmpty ) {
	const getProps = () => {
		return {
			attributes: {},
		};
	};

	renderFrontend( selector, withRestApiHydration( FullCart ), getProps );
} else {
	const containers = document.querySelectorAll( selector );

	if ( containers.length ) {
		// Use Array.forEach for IE11 compatibility.
		Array.prototype.forEach.call( containers, ( el ) => {
			el.classList.remove( 'is-loading' );
		} );
	}
}
>>>>>>> init

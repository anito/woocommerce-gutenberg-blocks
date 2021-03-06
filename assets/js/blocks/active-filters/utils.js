/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { formatPrice } from '@woocommerce/base-utils';
import { Fragment } from '@wordpress/element';

/**
 * Format a min/max price range to display.
 *
 * @param {number} minPrice The min price, if set.
 * @param {number} maxPrice The max price, if set.
 */
export const formatPriceRange = ( minPrice, maxPrice ) => {
	if ( Number.isFinite( minPrice ) && Number.isFinite( maxPrice ) ) {
		return sprintf(
			/* translators: %s min price, %s max price */
			__( 'Between %s and %s', 'woo-gutenberg-products-block' ),
			formatPrice( minPrice ),
			formatPrice( maxPrice )
		);
	}

	if ( Number.isFinite( minPrice ) ) {
		return sprintf(
			/* translators: %s min price */
			__( 'From %s', 'woo-gutenberg-products-block' ),
			formatPrice( minPrice )
		);
	}

	return sprintf(
		/* translators: %s max price */
		__( 'Up to %s', 'woo-gutenberg-products-block' ),
		formatPrice( maxPrice )
	);
};

/**
 * Render a removable item in the active filters block list.
 *
 * @param {string} type Type string.
 * @param {string} name Name string.
 * @param {string} prefix Prefix shown before item name.
 * @param {Function} removeCallback Callback to remove item.
 * @param {boolean} [showLabel=true] Should the label be shown for this item?
 */
export const renderRemovableListItem = ( {
	type,
	name,
	prefix,
	removeCallback = () => {},
	showLabel = true,
} ) => {
	return (
		<li
			className="wc-block-active-filters__list-item"
			key={ type + ':' + name }
		>
			{ showLabel && (
				<span className="wc-block-active-filters__list-item-type">
					{ type + ': ' }
				</span>
			) }
			<span className="wc-block-active-filters__list-item-name">
				{ prefix ? (
					<Fragment>
						{ prefix }
						&nbsp;
						{ name }
					</Fragment>
				) : (
					name
				) }
				<button onClick={ removeCallback }>
					{ sprintf(
						/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
						__(
							'Remove %s filter',
							'woo-gutenberg-products-block'
						),
						name
					) }
				</button>
			</span>
		</li>
	);
};

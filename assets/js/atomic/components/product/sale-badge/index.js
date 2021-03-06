/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useProductLayoutContext } from '@woocommerce/base-context/product-layout-context';
import Label from '@woocommerce/base-components/label';

const ProductSaleBadge = ( { className, product, align } ) => {
	const { layoutStyleClassPrefix } = useProductLayoutContext();
	const alignClass =
		typeof align === 'string'
			? `${ layoutStyleClassPrefix }__product-onsale--align${ align }`
			: '';

	if ( product && product.on_sale ) {
		return (
			<div
				className={ classnames(
					className,
					alignClass,
					`${ layoutStyleClassPrefix }__product-onsale`
				) }
			>
				<Label
					label={ __( 'Sale', 'woo-gutenberg-products-block' ) }
					screenReaderLabel={ __(
						'Product on sale',
						'woo-gutenberg-products-block'
					) }
				/>
			</div>
		);
	}

	return null;
};

export default ProductSaleBadge;

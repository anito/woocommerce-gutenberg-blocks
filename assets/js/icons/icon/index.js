/**
 * External dependencies
 */
import { cloneElement, isValidElement } from '@wordpress/element';
<<<<<<< HEAD
=======
import { SVG } from '@wordpress/components';
>>>>>>> init
import PropTypes from 'prop-types';

function Icon( { srcElement, size = 24, ...props } ) {
	return (
		isValidElement( srcElement ) &&
		cloneElement( srcElement, {
			width: size,
			height: size,
			...props,
		} )
	);
}

Icon.propTypes = {
<<<<<<< HEAD
	srcElement: PropTypes.element,
=======
	srcElement: PropTypes.oneOfType( [
		PropTypes.instanceOf( SVG ),
		// HTMLImageElement is a global interface
		// eslint-disable-next-line no-undef
		PropTypes.instanceOf( HTMLImageElement ),
	] ),
>>>>>>> init
	size: PropTypes.number,
};

export default Icon;

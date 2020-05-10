/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { PlainText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './editor.scss';

const BlockText = ( { className, style, onChange, value } ) => {
	return (
		<div>
			<PlainText
				className={ classnames(
					'wc-block-component-title',
					className
				) }
				value={ value }
				onChange={ onChange }
				style={ style }
			/>
		</div>
	);
};

BlockText.propTypes = {
	/**
	 * Classname to add to title in addition to the defaults.
	 */
	className: PropTypes.string,
	/**
	 * The value of the note.
	 */
	value: PropTypes.string,
	/**
	 * Callback to update the attribute when text is changed.
	 */
	onChange: PropTypes.func,
	/**
	 * Level of the note tag (1, 2, 3... will render <h1>, <h2>, <h3>... elements).
	 */
	fontSize: PropTypes.number,
};

export default BlockText;

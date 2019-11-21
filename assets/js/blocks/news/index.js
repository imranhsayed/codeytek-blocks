/**
 * Register News Block.
 *
 * @package codeytek-blocks
 */

/**
 * Internal dependencies
 */
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'codeytek-blocks/newsletter-primary-news', {
	title: __( 'News Block', 'codeytek-blocks' ),
	category: 'codeytek-custom-blocks',
	icon: 'media-spreadsheet',

	attributes: {
		postId: {
			type: 'string',
			default: '',
		},
		isFeaturedImgChecked: {
			type: 'boolean',
			default: false,
		},
	},

	/**
	 * Get wrapper props.
	 *
	 * @return {Object} Edit wrapper props.
	 */
	getEditWrapperProps() {
		return { 'data-align': 'wide' };
	},

	/**
	 * Edit method.
	 *
	 * @return {Object} Content
	 */
	edit: Edit,

	/**
	 * Save method.
	 *
	 * @return null
	 */
	save: () => {

		return null;

	},
} );

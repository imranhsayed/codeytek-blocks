/**
 * Register Latest Issues Block
 *
 * @package codeytek-blocks
 */


/**
 * Register Stats Block
 *
 * @package mba-blocks
 */

/**
 * Internal dependencies
 */
import { BannerContent } from "./banner-content";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const aboutMbaNewsLink = 'MBA NewsLink, a daily electronic publication, is a member benefit free to employees of MBA member companies, and available by paid subscription to non-members. For membership information <a href="https://www.mba.org/" style="color: #dbad64; text-decoration: none;" target="_blank" rel="noopener noreferrer">click here</a>.';

registerBlockType( 'codeytek-blocks/courses-banner', {
	title: __( 'Codeytek Main banner', 'codeytek-blocks' ),
	category: 'codeytek-custom-blocks',
	icon: 'archive',

	attributes: {
		footerHeading: {
			type: 'string',
			default: __( 'ABOUT MBA NEWSLINK', 'mba-blocks' ),
		},
		aboutMbaNewsLink: {
			type: 'string',
			default: aboutMbaNewsLink
		}
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
	 * @param {Object} props Props.
	 * @return {Object} Content
	 */
	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		return (
			<BannerContent attributes={ attributes } setAttributes={ setAttributes } edit={ true } />
		);
	},

	/**
	 * Save method.
	 *
	 * @param {Object} props Props.
	 * @return {Object} Content
	 */
	save: ( props ) => <BannerContent attributes={ props.attributes } setAttributes={ false } edit={ false } />,
} );

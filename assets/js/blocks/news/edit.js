/**
 * Edit component for News block.
 *
 * @package mba-blocks
 */

/**
 * Internal dependencies
 */
import { setPostData } from '../../../../utility/functions';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { Fragment } = wp.element;
const { InspectorControls, ServerSideRender } = wp.editor;
const { PanelBody, SelectControl, CheckboxControl } = wp.components;
const { select } = wp.data;
import { parseString } from './../../../../utility/functions';

/**
 * Edit class component for News block
 */
class Edit extends Component {

	/**
	 * Constructor
	 *
	 * @param {Object} props Props.
	 *
	 * @return {void}
	 */
	constructor( props ) {
		super( props );

		this.state = {
			options: [],
		};
	}

	/**
	 * ComponentDidMount
	 *
	 * @return {void}
	 */
	componentDidMount() {

		const { attributes: { postId }, setAttributes } = this.props;
		const postType = select( 'core/editor' ).getEditedPostAttribute( 'type' );
		const currentPostId = select( 'core/editor' ).getCurrentPostId();

		fetch( `${ newsLetterData.site_url }/wp-json/wp/v2/${ postType }?parent=${ currentPostId }&per_page=50` )
			.then( ( response ) => {

				if ( 200 !== response.status ) {
					return;
				}

				response.json().then( ( childPosts ) => {

					if ( ! Object.keys( childPosts ).length ) {
						return;
					}

					let options = [];

					if ( childPosts.length ) {

						options = [ { label: __( 'Select a Post', 'mba-blocks' ), value: '' } ];

						// Loop through each item of the child post array and push the options into options array.
						childPosts.forEach( ( post ) => {

							const option = {
								label: parseString( post.title.rendered ),
								value: post.id,
							};
							options.push( option );

						} );

						this.setState( { options } );

						/*
						 * If postId is not already set, set options in the options array
						 * and the first child post Id to postId, to show first child post as default.
						 */
						if ( '' === postId ) {
							setAttributes( {
								postId: ( childPosts[ 0 ].id ).toString(),
								isFeaturedImgChecked: true,
							} );
						}
					}

				} );
			}
			)
			.catch( () => {
				// Handle error.
			} );
	}

	/**
	 * Get the post data when user selects the child post.
	 *
	 * Also set the post data to their respective attributes.
	 *
	 * @param {string} value post id.
	 * @param {Object} setAttributes function.
	 *
	 * @return {void} Null.
	 */
	onPostSelect = ( value, setAttributes ) => {

		const postType = select( 'core/editor' ).getEditedPostAttribute( 'type' );

		setAttributes( { postId: value } );
		setPostData( value, postType, setAttributes );

	};

	render() {
		const { attributes: { postId, isFeaturedImgChecked }, setAttributes } = this.props;
		const { options } = this.state;

		return (
			<Fragment>
				{ /*Inspector Control to select child post and featured image*/ }
				<InspectorControls>
					<PanelBody id="mba-newsletter-post-selection" title={ __( 'Select News', 'mba-blocks' ) } initialOpen={ true } >
						{ options.length ? (
							<Fragment>
								<SelectControl
									label="News"
									value={ postId }
									className="mba-newsletter-news__select"
									options={ options }
									onChange={ ( value ) => this.onPostSelect( value, setAttributes ) }
								/>
								<CheckboxControl
									heading="Featured Image Option"
									label="Featured Image"
									help="Show Featured image or not?"
									checked={ isFeaturedImgChecked }
									onChange={ () => setAttributes( { isFeaturedImgChecked: ! isFeaturedImgChecked } ) }
								/>
							</Fragment>
						) : __( 'Please assign a child news post to this first in order to add the child news post in the block.', 'mba-blocks' ) }
					</PanelBody>
				</InspectorControls>

				{
					postId ? (
						<ServerSideRender
							block="mba-blocks/newsletter-primary-news"
							attributes={ { postId, isFeaturedImgChecked } }
						/>
					) : (
						<div className="mba-newsletter__default-message">
							<h6 className="mba-newsletter__default-message-heading">{ __( 'News Block', 'mba-blocks' ) }</h6>
							<p className="mba-newsletter__default-description">
								{ __( 'Please assign a child news post to this parent news in order to add/view the child news post in the block.', 'mba-blocks' ) }
							</p>
						</div>
					)
				}

			</Fragment>
		);
	}
}

export default Edit;

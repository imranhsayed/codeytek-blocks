/**
 * Commonly used functions for Blocks.
 *
 * @package mba-blocks
 */

const { __ } = wp.i18n;

/**
 * Internal dependencies
 */

/**
 * Get the latest post for the given postType and set the postPermalink value.
 *
 * @param {string} postType Post Type
 * @param {Object} setAttributes SetAttributes function.
 *
 * @return {void} Null.
 */
export const setPostPermalink = ( postType, setAttributes ) => {

	fetch( `${ codeytekData.site_url }/wp-json/wp/v2/${ postType }` )
		.then( ( response ) => {

			if ( 200 !== response.status ) {
				return;
			}

			response.json().then( ( postData ) => {

				if ( ! postData.length ) {
					return;
				}

				// Set selected post permalink.
				setAttributes( { postPermalink: postData[ 0 ].link } );

			} );
		}
		)
		.catch( ( err ) => {
			// Handle error.
		} );
};

/**
 * Get the post data with the given postId and set postData Value.
 *
 * @param {number} postId Post Id.
 * @param {string} postType Post Type.
 * @param {Object} setAttributes SetAttribute function.
 *
 * @return {void} Null.
 */
export const setPostData = ( postId, postType, setAttributes ) => {

	fetch( `${ newsLetterData.site_url }/wp-json/wp/v2/${ postType }/${ postId }?_embed` )
		.then( ( response ) => {

			if ( 200 !== response.status ) {
				return;
			}

			response.json().then( ( childPost ) => {

				if ( ! Object.keys( childPost ).length ) {
					return;
				}

				// Set childPost in the state.
				setAttributes( { postId: ( childPost.id ).toString() } );

			} );
		}
		)
		.catch( ( err ) => {
			// Handle error.
		} );
};

/**
 * Parses html entity
 *
 * @param {string} string String to be parsed.
 *
 * @return {string} parsed html entity.
 */
export const parseString = ( string ) => {

	return new DOMParser().parseFromString( string, 'text/html' ).body.textContent;

};

/**
 * Get the child post ids by category and parent post id.
 *
 * Get the child post data with the given parentPostId, count and
 * set the option values for user to select.
 *
 * @param {string} parentPostId Parent post id.
 * @param {string} postType Post Type.
 * @param {string} categoryId Category ID.
 * @param {Object} setAttributes SetAttributes function.
 *
 * @return {void} Null.
 */
export const setChildPostIdsByCategoryID = ( parentPostId, postType, categoryId, setAttributes ) => {

	if ( ! categoryId ) {
		return;
	}

	let category = '';
	switch ( postType ) {
	case 'mba-newslinks':
		category = 'mba-category';
		break;
	case 'cmf-newslinks':
		category = 'cmf-category';
		break;
	case 'servicing-newslink':
		category = 'servicing-category';
		break;
	default:
		category = '';
	}

	fetch( `${ newsLetterData.site_url }/wp-json/wp/v2/${ postType }?parent=${ parentPostId }&${ category }=${ categoryId }&per_page=30` )
		.then( ( response ) => {

			if ( 200 !== response.status ) {
				return;
			}

			response.json().then( ( childPosts ) => {

				if ( ! Object.keys( childPosts ).length ) {
					return;
				}

				const requiredChildPostIds = [];
				const requiredPostSelectionOptions = [];

				if ( childPosts.length ) {

					childPosts.forEach( ( childPost ) => {
						requiredChildPostIds.push( {
							postId: childPost.id.toString(),
							postTitle: parseString( childPost.title.rendered ),
						} );
						requiredPostSelectionOptions.push(
							{
								postId: childPost.id.toString(),
								isChecked: false,
							},
						);
					} );

					// On Category Select
					setAttributes( {
						childPostIds: requiredChildPostIds,
						postSelectionOptions: requiredPostSelectionOptions,
					} );
				}

			} );

		}
		)
		.catch( ( err ) => {
			// Handle error.
		} );
};

/**
 * Get categories by postType and set them in the options attribute for user to select.
 *
 * @param {string} postType Post Type.
 * @param {Object} setAttributes SetAttributes function.
 *
 * @return {void} Null.
 */
export const setCategoryOptions = ( postType, setAttributes ) => {

	let category = '';
	switch ( postType ) {
	case 'mba-newslinks':
		category = 'mba-category';
		break;
	case 'cmf-newslinks':
		category = 'cmf-category';
		break;
	case 'servicing-newslink':
		category = 'servicing-category';
		break;
	default:
		category = '';
	}

	fetch( `${ newsLetterData.site_url }/wp-json/wp/v2/${ category }?per_page=50` )
		.then( ( response ) => {

			if ( 200 !== response.status ) {
				return;
			}

			response.json().then( ( categories ) => {

				if ( ! Object.keys( categories ).length ) {
					return;
				}

				const options = [ { label: __( 'Select a Category', 'mba-blocks' ), value: '' } ];

				if ( categories.length ) {

					// Loop through each item of the child post array and push the options into options array.
					categories.forEach( ( category ) => {
						const option = {
							label: category.name,
							value: category.id,
						};
						options.push( option );
					} );

				}

				// Set options in the options array.
				setAttributes( { options } );

			} );
		}
		)
		.catch( ( err ) => {
			// Handle error.
		} );
};

/**
 * Returns the month name.
 *
 * @param {number} monthNo The month no
 * @return {string}
 */
export const getMonthName = ( monthNo ) => {
	const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	return month[ monthNo ];
};

/**
 * Returns the Day name.
 *
 * @param {number} dayNo The Day Number.
 * @return {any}
 */
export const getWeekDayName = ( dayNo ) => {
	const weekday = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	return weekday[ dayNo ];
};

/**
 * Sets the selected child post ids to selectedPostIds array attribute.
 *
 * @param {Array} selectedPostIds selectedPostIds array.
 * @param {string} postId Selected postId
 * @param {Object} setAttributes setAttributes function.
 */
export const setSelectedChildPosts = ( selectedPostIds, postId, setAttributes ) => {

	// const selectedPostIds = [];
	const newSelectedPostIds = [ ...selectedPostIds ];

	const postIdIndex = newSelectedPostIds.indexOf( postId );

	// If item does not exits in the newSelectedPostIds.
	if ( -1 === postIdIndex ) {
		newSelectedPostIds.push( postId );
	} else {
		newSelectedPostIds.splice( postIdIndex, 1 );
	}

	setAttributes( { selectedPostIds: newSelectedPostIds } );

};

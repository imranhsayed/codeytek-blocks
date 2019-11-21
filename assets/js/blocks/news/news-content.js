/**
 * News Content Component.
 *
 * @package mba-blocks
 */

/**
 * External dependencies
 */
import DOMPurify from 'dompurify';
const { Fragment } = wp.element;

/**
 * NewsContent
 *
 * @param {string} postFeaturedMediaUrl Feature Media Url.
 * @param {bool} isFeaturedImgChecked If featured image is checked.
 * @param {string} postPermalink Post Permalink
 * @param {string} postTitle Post title
 * @param {string} postContent Post content.
 *
 * @return {*}
 *
 * @constructor
 */
export const NewsContent = ( { postFeaturedMediaUrl, isFeaturedImgChecked, postPermalink, postTitle, postContent } ) => {

	return (
		<Fragment>
			{ /* Featured Image */ }
			{ ( postFeaturedMediaUrl && isFeaturedImgChecked ) ? (
				<tr>
					<td align="center">
						<a href={ postPermalink } style={ { textDecoration: 'none', display: 'block' } }>
							<img
								src={ postFeaturedMediaUrl } border="0" width="100%" height="auto"
								style={ { maxWidth: ' 100%', height: 'auto', width: '100%' } }
								className="mba-newsletter-news__featured-media"
								alt="MBA news"
							/>
						</a>
					</td>
				</tr>
			) : '' }

			{ /*Post Title*/ }
			{ undefined !== postTitle ? (
				<tr>
					<td valign="top" style={ { fontFamily: 'Arial,sans-serif', padding: '10px 0' } }>
						<h1 style={ { margin: '0', lineHeight: '1.4' } }>
							<a href={ postPermalink } style={ { color: '#0c426a', fontFamily: 'Arial,sans-serif', fontSize: '18px', fontWeight: 'bold', display: 'block', textDecoration: 'none' } }>
								{ postTitle }
							</a>
						</h1>
					</td>
				</tr>
			) : '' }

			{ /*Post Content*/ }
			{ undefined !== postContent ? (
				<tr>
					<td className="mba-newsletter-news__content" dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize( postContent ) } } style={ { color: '#353535', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: 'normal' } } /> { /* phpcs:ignore WordPressVIPMinimum.JS.DangerouslySetInnerHTML.Found */ }
				</tr>
			) : '' }
		</Fragment>
	);
};

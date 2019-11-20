/**
 * Newsletter Footer Block Component
 *
 * @package mba-blocks
 */

const { __ } = wp.i18n;
const { RichText } = wp.editor;

/**
 * External dependencies
 */
import DOMPurify from 'dompurify';

const footerWrapStyle = {
	display: 'block',
	marginTop: '60px',
	textDecoration: 'none',
};

const parentContainerStyle = {
	backgroundColor: '#353535',
	borderLeft: '1px solid #eee',
	borderRight: '1px solid #eee',
	borderTopStyle: 'hidden',
	borderBottomStyle: 'hidden',
	color: '#ccc',
	fontFamily: 'Arial,sans-serif',
	fontSize: '14px',
	lineHeight: '21px',
	padding: '40px',
	marginTop: '60px',
};

const footerTableStyle = {
	borderStyle: 'hidden',
	borderCollapse: 'collapse',
};

const footerMainHeadingStyle = {
	padding: '0 0 20px',
	color: '#eee',
	fontFamily: 'Arial,sans-serif',
	fontSize: '14px',
	fontWeight: 'bold',
	lineHeight: '16px',
	textAlign: 'left',
	textTransform: 'uppercase',
};

const footerDescriptionStyle = {
	padding: '0 0 20px',
	color: '#ccc',
	fontFamily: 'Arial,sans-serif',
	fontSize: '14px',
	lineHeight: '21px',
};

export const BannerContent = ( props ) => {

	const {
		      attributes: {
			      footerHeading,
			      aboutMbaNewsLink,
		      },
		      setAttributes,
		      edit,
	      } = props;

	return (
		<tr style={ footerWrapStyle } className="mba-newsletter__footer">
			<td colSpan="2" align="center"
			    style={ parentContainerStyle }>
				<table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0"
				       style={ footerTableStyle }>
					<tbody>
					<tr>
						{
							edit ? (
								<td style={ footerMainHeadingStyle }>
									<RichText
										placeholder={ __( 'Enter Heading...', 'mba-blocks' ) }
										value={ footerHeading }
										onChange={ ( value ) => setAttributes( { footerHeading: value } ) }
										className="mba-newsletter__footer-title"
										inlineToolbar
									/>
								</td>
							) : (
								<td style={ footerMainHeadingStyle } dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize( footerHeading ) } } /> // phpcs:ignore WordPressVIPMinimum.JS.DangerouslySetInnerHTML.Found
							)
						}
					</tr>
					<tr>

						{
							edit ? (
								<td style={ footerDescriptionStyle }>
									<RichText
										placeholder={ __( 'Enter about mba...', 'mba-blocks' ) }
										value={ aboutMbaNewsLink }
										onChange={ ( value ) => setAttributes( { aboutMbaNewsLink: value } ) }
										className="mba-newsletter__footer-about-mba-newslink"
										inlineToolbar
									/>
								</td>
							) : (
								<td style={ footerDescriptionStyle } dangerouslySetInnerHTML={ { __html: DOMPurify.sanitize( aboutMbaNewsLink ) } } /> // phpcs:ignore WordPressVIPMinimum.JS.DangerouslySetInnerHTML.Found
							)
						}
					</tr>
					</tbody>
				</table>
			</td>
		</tr>
	);

};

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
import DOMPurify from "dompurify";

export const BannerContent = props => {
  const {
    attributes: { footerHeading, aboutMbaNewsLink },
    setAttributes,
    edit
  } = props;

  return (
    //   Title
    <div class="codeytek-main-banner-block">
      {edit ? (
        <div class="codeytek-main-banner-block__title">
          <RichText
            placeholder={__("Enter Heading...", "mba-blocks")}
            value={footerHeading}
            onChange={value => setAttributes({ footerHeading: value })}
            className="mba-newsletter__footer-title"
            inlineToolbar
          />
        </div>
      ) : (
        <div
          class="codeytek-main-banner-block__title"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(footerHeading)
          }}
        /> // phpcs:ignore WordPressVIPMinimum.JS.DangerouslySetInnerHTML.Found
      )}

      {/* Description */}
      {edit ? (
        <div>
          <RichText
            placeholder={__("Enter about mba...", "mba-blocks")}
            value={aboutMbaNewsLink}
            onChange={value => setAttributes({ aboutMbaNewsLink: value })}
            className="mba-newsletter__footer-about-mba-newslink"
            inlineToolbar
          />
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(aboutMbaNewsLink)
          }}
        /> // phpcs:ignore WordPressVIPMinimum.JS.DangerouslySetInnerHTML.Found
      )}
    </div>
  );
};

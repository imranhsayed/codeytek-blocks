/**
 * Register Latest Issues Block
 *
 * @package codeytek-blocks
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InspectorControls } = wp.editor;
const { Button, SelectControl, PanelBody } = wp.components;

registerBlockType("codeytek-blocks/banner", {
  /**
   * Block title.
   *
   * @member {string}
   */
  title: __("Courses Main Banner", "codeytek-blocks"),

  /**
   * Block Category
   *
   * @member {string}
   */
  category: "codeytek-custom-blocks",

  /**
   * Add attributes to props
   */
  attributes: {
    mediaID: {
      type: "number"
    },

    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },

    description: {
      type: "array",
      source: "children",
      selector: ".codeytek-courses__description-input",
      default: __("helo", "codeytek-blocks")
    },

    linkText: {
      type: "array",
      source: "children",
      selector: ".codeytek-courses__link-input",
      default: __("Go to latest issue", "codeytek-blocks")
    },

    postType: {
      type: "string",
      source: "attribute",
      selector: ".codeytek-courses__select"
    },

    postPermalink: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".codeytek-courses__button"
    }
  },

  /**
   * Edit block component.
   *
   * @param {Object} props Props.
   *
   * @return {Object} Content.
   */
  edit: props => {
    const {
      className,
      setAttributes,
      attributes: {
        mediaID,
        mediaURL,
        description,
        linkText,
        postType,
        postPermalink
      }
    } = props;

    /**
     * Update user entered description
     *
     * @param {string} value Description value.
     *
     * @return {void} Null.
     */
    const onChangeDescription = value => {
      setAttributes({ description: value });
    };

    /**
     * Update user entered link text.
     *
     * @param {string} value Link text value.
     *
     * @return {void} Null.
     */
    const onChangeLinkText = value => {
      setAttributes({ linkText: value });
    };

    return (
      <div className={className}>
        <div className="codeytek-courses">
          {/*Description*/}
          <RichText
            tagName="div"
            placeholder={__("Description", "codeytek-blocks")}
            value={description}
            onChange={onChangeDescription}
            className="codeytek-courses__description-input codeytek-courses__description-input--description"
          />
        </div>
      </div>
    );
  },

  /**
   * Save component.
   *
   * @param {Object} props Props.
   *
   * @return {Object} Content.
   */
  save: props => {
    const {
      className,
      attributes: { mediaURL, description, linkText, postPermalink }
    } = props;

    return (
      <div className={className}>
        <div className="codeytek-courses">
          {/*Description*/}
          <RichText.Content
            tagName="div"
            className="codeytek-courses__description-input"
            value={description}
          />
        </div>
      </div>
    );
  }
});

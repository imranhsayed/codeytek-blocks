/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/blocks/courses/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/blocks/courses/index.js":
/*!************************************!*\
  !*** ./js/blocks/courses/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Register Latest Issues Block
 *
 * @package codeytek-blocks
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;
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
      "default": __("helo", "codeytek-blocks")
    },
    linkText: {
      type: "array",
      source: "children",
      selector: ".codeytek-courses__link-input",
      "default": __("Go to latest issue", "codeytek-blocks")
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
  edit: function edit(props) {
    var className = props.className,
        setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        mediaID = _props$attributes.mediaID,
        mediaURL = _props$attributes.mediaURL,
        description = _props$attributes.description,
        linkText = _props$attributes.linkText,
        postType = _props$attributes.postType,
        postPermalink = _props$attributes.postPermalink;
    /**
     * Update user entered description
     *
     * @param {string} value Description value.
     *
     * @return {void} Null.
     */

    var onChangeDescription = function onChangeDescription(value) {
      setAttributes({
        description: value
      });
    };
    /**
     * Update user entered link text.
     *
     * @param {string} value Link text value.
     *
     * @return {void} Null.
     */


    var onChangeLinkText = function onChangeLinkText(value) {
      setAttributes({
        linkText: value
      });
    };

    return React.createElement("div", {
      className: className
    }, React.createElement("div", {
      className: "codeytek-courses"
    }, React.createElement(RichText, {
      tagName: "div",
      placeholder: __("Description", "codeytek-blocks"),
      value: description,
      onChange: onChangeDescription,
      className: "codeytek-courses__description-input codeytek-courses__description-input--description"
    })));
  },

  /**
   * Save component.
   *
   * @param {Object} props Props.
   *
   * @return {Object} Content.
   */
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        mediaURL = _props$attributes2.mediaURL,
        description = _props$attributes2.description,
        linkText = _props$attributes2.linkText,
        postPermalink = _props$attributes2.postPermalink;
    return React.createElement("div", {
      className: className
    }, React.createElement("div", {
      className: "codeytek-courses"
    }, React.createElement(RichText.Content, {
      tagName: "div",
      className: "codeytek-courses__description-input",
      value: description
    })));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=courses.js.map
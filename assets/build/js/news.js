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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/blocks/news/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/blocks/news/edit.js":
/*!********************************!*\
  !*** ./js/blocks/news/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/functions */ "./js/utility/functions.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Edit component for News block.
 *
 * @package mba-blocks
 */

/**
 * Internal dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ServerSideRender = _wp$editor.ServerSideRender;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl;
var select = wp.data.select;

/**
 * Edit class component for News block
 */

var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  /**
   * Constructor
   *
   * @param {Object} props Props.
   *
   * @return {void}
   */
  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onPostSelect", function (value, setAttributes) {
      var postType = select('core/editor').getEditedPostAttribute('type');
      setAttributes({
        postId: value
      });
      Object(_utility_functions__WEBPACK_IMPORTED_MODULE_0__["setPostData"])(value, postType, setAttributes);
    });

    _this.state = {
      options: []
    };
    return _this;
  }
  /**
   * ComponentDidMount
   *
   * @return {void}
   */


  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          postId = _this$props.attributes.postId,
          setAttributes = _this$props.setAttributes;
      var postType = select('core/editor').getEditedPostAttribute('type');
      var currentPostId = select('core/editor').getCurrentPostId();
      fetch("".concat(codeytekJsData.site_url, "/wp-json/wp/v2/").concat(postType, "?parent=").concat(currentPostId, "&per_page=50")).then(function (response) {
        if (200 !== response.status) {
          return;
        }

        response.json().then(function (childPosts) {
          if (!Object.keys(childPosts).length) {
            return;
          }

          var options = [];

          if (childPosts.length) {
            options = [{
              label: __('Select a Post', 'mba-blocks'),
              value: ''
            }]; // Loop through each item of the child post array and push the options into options array.

            childPosts.forEach(function (post) {
              var option = {
                label: Object(_utility_functions__WEBPACK_IMPORTED_MODULE_0__["parseString"])(post.title.rendered),
                value: post.id
              };
              options.push(option);
            });

            _this2.setState({
              options: options
            });
            /*
             * If postId is not already set, set options in the options array
             * and the first child post Id to postId, to show first child post as default.
             */


            if ('' === postId) {
              setAttributes({
                postId: childPosts[0].id.toString(),
                isFeaturedImgChecked: true
              });
            }
          }
        });
      })["catch"](function () {// Handle error.
      });
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

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$attribut = _this$props2.attributes,
          postId = _this$props2$attribut.postId,
          isFeaturedImgChecked = _this$props2$attribut.isFeaturedImgChecked,
          setAttributes = _this$props2.setAttributes;
      var options = this.state.options;
      return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
        id: "mba-newsletter-post-selection",
        title: __('Select News', 'mba-blocks'),
        initialOpen: true
      }, options.length ? React.createElement(Fragment, null, React.createElement(SelectControl, {
        label: "News",
        value: postId,
        className: "mba-newsletter-news__select",
        options: options,
        onChange: function onChange(value) {
          return _this3.onPostSelect(value, setAttributes);
        }
      }), React.createElement(CheckboxControl, {
        heading: "Featured Image Option",
        label: "Featured Image",
        help: "Show Featured image or not?",
        checked: isFeaturedImgChecked,
        onChange: function onChange() {
          return setAttributes({
            isFeaturedImgChecked: !isFeaturedImgChecked
          });
        }
      })) : __('Please assign a child news post to this first in order to add the child news post in the block.', 'mba-blocks'))), postId ? React.createElement(ServerSideRender, {
        block: "mba-blocks/newsletter-primary-news",
        attributes: {
          postId: postId,
          isFeaturedImgChecked: isFeaturedImgChecked
        }
      }) : React.createElement("div", {
        className: "mba-newsletter__default-message"
      }, React.createElement("h6", {
        className: "mba-newsletter__default-message-heading"
      }, __('News Block', 'mba-blocks')), React.createElement("p", {
        className: "mba-newsletter__default-description"
      }, __('Please assign a child news post to this parent news in order to add/view the child news post in the block.', 'mba-blocks'))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./js/blocks/news/index.js":
/*!*********************************!*\
  !*** ./js/blocks/news/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./js/blocks/news/edit.js");
/**
 * Register News Block.
 *
 * @package codeytek-blocks
 */

/**
 * Internal dependencies
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('codeytek-blocks/newsletter-primary-news', {
  title: __('News Block', 'codeytek-blocks'),
  category: 'codeytek-custom-blocks',
  icon: 'media-spreadsheet',
  attributes: {
    postId: {
      type: 'string',
      "default": ''
    },
    isFeaturedImgChecked: {
      type: 'boolean',
      "default": false
    }
  },

  /**
   * Get wrapper props.
   *
   * @return {Object} Edit wrapper props.
   */
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
  },

  /**
   * Edit method.
   *
   * @return {Object} Content
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**
   * Save method.
   *
   * @return null
   */
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./js/utility/functions.js":
/*!*********************************!*\
  !*** ./js/utility/functions.js ***!
  \*********************************/
/*! exports provided: setPostPermalink, setPostData, parseString, setChildPostIdsByCategoryID, setCategoryOptions, getMonthName, getWeekDayName, setSelectedChildPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostPermalink", function() { return setPostPermalink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostData", function() { return setPostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseString", function() { return parseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChildPostIdsByCategoryID", function() { return setChildPostIdsByCategoryID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategoryOptions", function() { return setCategoryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthName", function() { return getMonthName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekDayName", function() { return getWeekDayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedChildPosts", function() { return setSelectedChildPosts; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Commonly used functions for Blocks.
 *
 * @package mba-blocks
 */
var __ = wp.i18n.__;
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

var setPostPermalink = function setPostPermalink(postType, setAttributes) {
  fetch("".concat(codeytekData.site_url, "/wp-json/wp/v2/").concat(postType)).then(function (response) {
    if (200 !== response.status) {
      return;
    }

    response.json().then(function (postData) {
      if (!postData.length) {
        return;
      } // Set selected post permalink.


      setAttributes({
        postPermalink: postData[0].link
      });
    });
  })["catch"](function (err) {// Handle error.
  });
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

var setPostData = function setPostData(postId, postType, setAttributes) {
  fetch("".concat(newsLetterData.site_url, "/wp-json/wp/v2/").concat(postType, "/").concat(postId, "?_embed")).then(function (response) {
    if (200 !== response.status) {
      return;
    }

    response.json().then(function (childPost) {
      if (!Object.keys(childPost).length) {
        return;
      } // Set childPost in the state.


      setAttributes({
        postId: childPost.id.toString()
      });
    });
  })["catch"](function (err) {// Handle error.
  });
};
/**
 * Parses html entity
 *
 * @param {string} string String to be parsed.
 *
 * @return {string} parsed html entity.
 */

var parseString = function parseString(string) {
  return new DOMParser().parseFromString(string, 'text/html').body.textContent;
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

var setChildPostIdsByCategoryID = function setChildPostIdsByCategoryID(parentPostId, postType, categoryId, setAttributes) {
  if (!categoryId) {
    return;
  }

  var category = '';

  switch (postType) {
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

  fetch("".concat(newsLetterData.site_url, "/wp-json/wp/v2/").concat(postType, "?parent=").concat(parentPostId, "&").concat(category, "=").concat(categoryId, "&per_page=30")).then(function (response) {
    if (200 !== response.status) {
      return;
    }

    response.json().then(function (childPosts) {
      if (!Object.keys(childPosts).length) {
        return;
      }

      var requiredChildPostIds = [];
      var requiredPostSelectionOptions = [];

      if (childPosts.length) {
        childPosts.forEach(function (childPost) {
          requiredChildPostIds.push({
            postId: childPost.id.toString(),
            postTitle: parseString(childPost.title.rendered)
          });
          requiredPostSelectionOptions.push({
            postId: childPost.id.toString(),
            isChecked: false
          });
        }); // On Category Select

        setAttributes({
          childPostIds: requiredChildPostIds,
          postSelectionOptions: requiredPostSelectionOptions
        });
      }
    });
  })["catch"](function (err) {// Handle error.
  });
};
/**
 * Get categories by postType and set them in the options attribute for user to select.
 *
 * @param {string} postType Post Type.
 * @param {Object} setAttributes SetAttributes function.
 *
 * @return {void} Null.
 */

var setCategoryOptions = function setCategoryOptions(postType, setAttributes) {
  var category = '';

  switch (postType) {
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

  fetch("".concat(newsLetterData.site_url, "/wp-json/wp/v2/").concat(category, "?per_page=50")).then(function (response) {
    if (200 !== response.status) {
      return;
    }

    response.json().then(function (categories) {
      if (!Object.keys(categories).length) {
        return;
      }

      var options = [{
        label: __('Select a Category', 'mba-blocks'),
        value: ''
      }];

      if (categories.length) {
        // Loop through each item of the child post array and push the options into options array.
        categories.forEach(function (category) {
          var option = {
            label: category.name,
            value: category.id
          };
          options.push(option);
        });
      } // Set options in the options array.


      setAttributes({
        options: options
      });
    });
  })["catch"](function (err) {// Handle error.
  });
};
/**
 * Returns the month name.
 *
 * @param {number} monthNo The month no
 * @return {string}
 */

var getMonthName = function getMonthName(monthNo) {
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return month[monthNo];
};
/**
 * Returns the Day name.
 *
 * @param {number} dayNo The Day Number.
 * @return {any}
 */

var getWeekDayName = function getWeekDayName(dayNo) {
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekday[dayNo];
};
/**
 * Sets the selected child post ids to selectedPostIds array attribute.
 *
 * @param {Array} selectedPostIds selectedPostIds array.
 * @param {string} postId Selected postId
 * @param {Object} setAttributes setAttributes function.
 */

var setSelectedChildPosts = function setSelectedChildPosts(selectedPostIds, postId, setAttributes) {
  // const selectedPostIds = [];
  var newSelectedPostIds = _toConsumableArray(selectedPostIds);

  var postIdIndex = newSelectedPostIds.indexOf(postId); // If item does not exits in the newSelectedPostIds.

  if (-1 === postIdIndex) {
    newSelectedPostIds.push(postId);
  } else {
    newSelectedPostIds.splice(postIdIndex, 1);
  }

  setAttributes({
    selectedPostIds: newSelectedPostIds
  });
};

/***/ })

/******/ });
//# sourceMappingURL=news.js.map
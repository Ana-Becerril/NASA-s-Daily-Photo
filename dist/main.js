/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scripts/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scripts/style.css ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lexend_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lexend.woff */ "./src/scripts/Lexend.woff");
/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-image.jpg */ "./src/scripts/home-image.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Lexend_woff__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_home_image_jpg__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n@font-face{\r\n    font-family: 'Lexend';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n*{\r\n    outline: none;\r\n}\r\n\r\nbody,html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#parent{\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n\r\n.home-container{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display:flex;\r\n    justify-content: center;\r\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.home-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    background-color: rgba(12, 11, 11, 0.678);\r\n}\r\n\r\n.home-box{\r\n    position: relative;\r\n    width: 1100px;\r\n    height: 500px;\r\n    background-color: aliceblue;\r\n    display: flex;\r\n}\r\n\r\n.box-search{\r\n    width: 25%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.tittle-container, .search-tittle{\r\n    width: 100%;\r\n    height: 23%;\r\n    font-size: 45px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Lexend';\r\n    color: salmon;\r\n}\r\n\r\n.search-tittle{\r\n   \r\n    font-size: 23px;\r\n    height: 10%;\r\n    color: black;\r\n}\r\n\r\n.lbl-author, .lbl-paint, .or{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Lexend';\r\n    font-size: 18px;\r\n    margin: 20px 24px;\r\n}\r\n\r\n.or{\r\n    margin:0 24px;\r\n    font-size: 23px;\r\n}\r\n\r\n.iauthor, .ipaint{\r\n    height: 30px;\r\n    border-radius: 8px;\r\n    border: 1px solid gray;\r\n\r\n}\r\n\r\n.input-container{\r\ndisplay: flex;\r\nflex-direction: column;\r\nwidth: 100%;\r\nheight: 47%;\r\njustify-content: space-evenly;\r\ntext-align: center;\r\n}\r\n\r\ninput:disabled {\r\n    background-color: -internal-light-dark(rgba(146, 143, 143, 0.3), rgba(59, 59, 59, 0.623));\r\n    border-color: rgba(118, 118, 118, 0.3);\r\n}\r\n\r\ninput {\r\n    font: 400 18px \"Lexend\";\r\n}\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n  line-height: 55px;\r\n  padding: 0 40px;\r\n  font-family: 'Lexend';\r\n  font-size: 20px;\r\n  background: salmon;\r\n  border: none;\r\n  border-radius: 11px;\r\n  width: 114px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn:hover {\r\n    background: lightsalmon;\r\n  }\r\n\r\n.box-view-container{\r\n    width: 75%;\r\n    height: 100%;\r\n}\r\n\r\n.box-view{\r\n    width: 75%;\r\n    height: 100%;\r\n   /* background:url('./home-image.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position-x:7%;*/\r\n    position: relative;\r\n}\r\n\r\n.box-view::after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-image: linear-gradient(to bottom, transparent 0%, black 100%);\r\n    z-index: 2;\r\n}\r\n\r\n.data-paint{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: 12px;\r\n    font-family: 'Lexend';\r\n    color: white;\r\n    z-index: 3;\r\n}", "",{"version":3,"sources":["webpack://./src/scripts/style.css"],"names":[],"mappings":";AACA;IACI,qBAAqB;IACrB,2DAAwC;IACxC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,UAAU;IACV,kBAAkB;AACtB;;AAEA;GACG,WAAW;GACX,YAAY;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kDAAkC;IAClC,sBAAsB;IACtB,4BAA4B;IAC5B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,SAAS;IACT,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;;AAE1B;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,WAAW;AACX,WAAW;AACX,6BAA6B;AAC7B,kBAAkB;AAClB;;AAEA;IACI,yFAAyF;IACzF,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;EACjB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;IACI,uBAAuB;EACzB;;AAEF;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;GACb;;;8BAG2B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,wEAAwE;IACxE,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,YAAY;IACZ,UAAU;AACd","sourcesContent":["\r\n@font-face{\r\n    font-family: 'Lexend';\r\n    src: url('./Lexend.woff') format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n*{\r\n    outline: none;\r\n}\r\n\r\nbody,html{\r\n    width: 100%;\r\n    height:100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#parent{\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n\r\n.home-container{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display:flex;\r\n    justify-content: center;\r\n    background:url('./home-image.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.home-container::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    background-color: rgba(12, 11, 11, 0.678);\r\n}\r\n\r\n.home-box{\r\n    position: relative;\r\n    width: 1100px;\r\n    height: 500px;\r\n    background-color: aliceblue;\r\n    display: flex;\r\n}\r\n\r\n.box-search{\r\n    width: 25%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.tittle-container, .search-tittle{\r\n    width: 100%;\r\n    height: 23%;\r\n    font-size: 45px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Lexend';\r\n    color: salmon;\r\n}\r\n\r\n.search-tittle{\r\n   \r\n    font-size: 23px;\r\n    height: 10%;\r\n    color: black;\r\n}\r\n\r\n.lbl-author, .lbl-paint, .or{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Lexend';\r\n    font-size: 18px;\r\n    margin: 20px 24px;\r\n}\r\n\r\n.or{\r\n    margin:0 24px;\r\n    font-size: 23px;\r\n}\r\n\r\n.iauthor, .ipaint{\r\n    height: 30px;\r\n    border-radius: 8px;\r\n    border: 1px solid gray;\r\n\r\n}\r\n\r\n.input-container{\r\ndisplay: flex;\r\nflex-direction: column;\r\nwidth: 100%;\r\nheight: 47%;\r\njustify-content: space-evenly;\r\ntext-align: center;\r\n}\r\n\r\ninput:disabled {\r\n    background-color: -internal-light-dark(rgba(146, 143, 143, 0.3), rgba(59, 59, 59, 0.623));\r\n    border-color: rgba(118, 118, 118, 0.3);\r\n}\r\n\r\ninput {\r\n    font: 400 18px \"Lexend\";\r\n}\r\n\r\n.btn{\r\n    margin-top: 5px;\r\n  line-height: 55px;\r\n  padding: 0 40px;\r\n  font-family: 'Lexend';\r\n  font-size: 20px;\r\n  background: salmon;\r\n  border: none;\r\n  border-radius: 11px;\r\n  width: 114px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn:hover {\r\n    background: lightsalmon;\r\n  }\r\n\r\n.box-view-container{\r\n    width: 75%;\r\n    height: 100%;\r\n}\r\n\r\n.box-view{\r\n    width: 75%;\r\n    height: 100%;\r\n   /* background:url('./home-image.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position-x:7%;*/\r\n    position: relative;\r\n}\r\n\r\n.box-view::after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-image: linear-gradient(to bottom, transparent 0%, black 100%);\r\n    z-index: 2;\r\n}\r\n\r\n.data-paint{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: 12px;\r\n    font-family: 'Lexend';\r\n    color: white;\r\n    z-index: 3;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scripts/style.css":
/*!*******************************!*\
  !*** ./src/scripts/style.css ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/scripts/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scripts/Lexend.woff":
/*!*********************************!*\
  !*** ./src/scripts/Lexend.woff ***!
  \*********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e12e92c90ef018ef6549.woff";

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function api(){

const displayInfo = document.querySelector('.data-paint');

fetch('https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=Rembrandt+van+Rijn')
  .then(response => response.json())
  .then(function(response) {
   displayInfo.innerHTML=response.artObjects[0].longTitle
}).catch(Error => console.log(Error))
console.log();

const displayImage = document.querySelector('.box-view');
fetch('https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=Rembrandt+van+Rijn')
  .then(response => response.json())
  .then(function(response) {
   displayImage.innerHTML=response.artObjects[1].webImage.url
}).catch(Error => console.log(Error))
console.log();

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api); 

/***/ }),

/***/ "./src/scripts/home-image.jpg":
/*!************************************!*\
  !*** ./src/scripts/home-image.jpg ***!
  \************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "473c36bf490b6d9743a0.jpg";

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/scripts/api.js");
/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-image.jpg */ "./src/scripts/home-image.jpg");




function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box");

    const boxSearch=document.createElement("div");
    boxSearch.classList.add("box-search")

    const tittleContainer=document.createElement("div");
    tittleContainer.classList.add("tittle-container");
    tittleContainer.innerHTML="Find Art"

    const searchTittle=document.createElement("div")
    searchTittle.classList.add("search-tittle");
    searchTittle.innerHTML="Search by:"

    var inputContainer=document.createElement("div");
    inputContainer.classList.add("input-container");

    
    var btn = document.createElement("button");
    btn.innerHTML = "Search";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        var inputValAuthor = document.getElementById("author").value;
        var inputValPaint = document.getElementById("paint").value;

        console.log(inputValAuthor, inputValPaint);
        
        (0,_api__WEBPACK_IMPORTED_MODULE_1__.default)();

    });

    var lblAuthor = document.createElement("Label");
    lblAuthor.classList.add("lbl-author")
    lblAuthor.innerHTML = "Author";
    lblAuthor.setAttribute("for","author");
    var inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.classList.add("iauthor")
    inputAuthor.id="author";
    inputAuthor.oninput = function () {
    document.getElementById("paint").disabled = this.value != "";
};

    var or= document.createElement("div");
    or.classList.add("or");
    or.innerHTML="or"


    var lblPaint = document.createElement("Label");
    lblPaint.classList.add("lbl-paint")
    lblPaint.innerHTML = "Painting Art";
    lblPaint.setAttribute("for","paint");
    var inputPaint = document.createElement("input");
    inputPaint.type = "text";
    inputPaint.classList.add("ipaint")
    inputPaint.id="paint"
    inputPaint.oninput = function () {
        document.getElementById("author").disabled = this.value != "";
    };
  

    const boxViewContainer=document.createElement("div");
    boxViewContainer.classList.add("box-view-container")

    const boxView=document.createElement("img");
    boxView.src=_home_image_jpg__WEBPACK_IMPORTED_MODULE_0__;
    boxView.classList.add("box-view");
    const data=document.createElement("div");
    data.classList.add("data-paint");
    data.innerHTML="Frutero. Becerril, Ana. 2002"


    boxViewContainer.append(boxView, data);
    lblPaint.append(inputPaint);
    lblAuthor.append(inputAuthor);
    inputContainer.append(lblAuthor, or, lblPaint);
    boxSearch.append(tittleContainer, searchTittle,inputContainer, btn);
    homeBox.append(boxSearch,boxView);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home); 

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/scripts/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/scripts/home.js");



const parent = document.createElement('div');
parent.id = 'parent';
document.body.appendChild(parent)
parent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLXN0eWxlbGludC1lc2xpbnQtd2VicGFjay8uL3NyYy9zY3JpcHRzL3N0eWxlLmNzcz8zYTI5Iiwid2VicGFjazovL2pzLXRlbXBsYXRlLXN0eWxlbGludC1lc2xpbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS1zdHlsZWxpbnQtZXNsaW50LXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLXRlbXBsYXRlLXN0eWxlbGludC1lc2xpbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUtc3R5bGVsaW50LWVzbGludC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLXRlbXBsYXRlLXN0eWxlbGludC1lc2xpbnQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQ3pDO0FBQ0c7QUFDN0QsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMseUNBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyw0Q0FBNkI7QUFDdEc7QUFDQSx5REFBeUQsOEJBQThCLDRFQUE0RSx5QkFBeUIsMkJBQTJCLEtBQUssVUFBVSxzQkFBc0IsS0FBSyxrQkFBa0Isb0JBQW9CLG9CQUFvQixvQkFBb0IsbUJBQW1CLDJCQUEyQixLQUFLLGdCQUFnQixtQkFBbUIsb0JBQW9CLEtBQUssd0JBQXdCLDJCQUEyQixxQkFBcUIsb0JBQW9CLHFC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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxpRUFBZSxHQUFHLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTTtBQUNpQjs7O0FBR3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsNkNBQUc7O0FBRVgsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw0Q0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsSUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZFO0FBQ0k7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBSTs7Ozs7Ozs7O1VDTnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9MZXhlbmQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2hvbWUtaW1hZ2UuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHksaHRtbHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwJTtcXHJcXG4gICAgbWFyZ2luOiAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyZW50e1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGFpbmVye1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRhaW5lcjo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTEsIDExLCAwLjY3OCk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWJveHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ib3gtc2VhcmNoe1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXR0bGUtY29udGFpbmVyLCAuc2VhcmNoLXRpdHRsZXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMjMlO1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCc7XFxyXFxuICAgIGNvbG9yOiBzYWxtb247XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdGl0dGxle1xcclxcbiAgIFxcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5sYmwtYXV0aG9yLCAubGJsLXBhaW50LCAub3J7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJztcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9ye1xcclxcbiAgICBtYXJnaW46MCAyNHB4O1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxufVxcclxcblxcclxcbi5pYXV0aG9yLCAuaXBhaW50e1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lcntcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxuaGVpZ2h0OiA0NyU7XFxyXFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpkaXNhYmxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrKHJnYmEoMTQ2LCAxNDMsIDE0MywgMC4zKSwgcmdiYSg1OSwgNTksIDU5LCAwLjYyMykpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTE4LCAxMTgsIDExOCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBmb250OiA0MDAgMThweCBcXFwiTGV4ZW5kXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bntcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xleGVuZCc7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcclxcbiAgd2lkdGg6IDExNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2FsbW9uO1xcclxcbiAgfVxcclxcblxcclxcbi5ib3gtdmlldy1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC12aWV3e1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgLyogYmFja2dyb3VuZDp1cmwoJy4vaG9tZS1pbWFnZS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OjclOyovXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC12aWV3OjphZnRlcntcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgYmxhY2sgMTAwJSk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLXBhaW50e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNXB4O1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JpcHRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMkRBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtEQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjs7QUFFMUI7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQjs7QUFFQTtJQUNJLHlGQUF5RjtJQUN6RixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0dBQ2I7Ozs4QkFHMkI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0VBQXdFO0lBQ3hFLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vTGV4ZW5kLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LGh0bWx7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgcGFkZGluZzogMCU7XFxyXFxuICAgIG1hcmdpbjogMCU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmVudHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi9ob21lLWltYWdlLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGFpbmVyOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMSwgMTEsIDAuNjc4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtYm94e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveC1zZWFyY2h7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdHRsZS1jb250YWluZXIsIC5zZWFyY2gtdGl0dGxle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMyU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJztcXHJcXG4gICAgY29sb3I6IHNhbG1vbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10aXR0bGV7XFxyXFxuICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmxibC1hdXRob3IsIC5sYmwtcGFpbnQsIC5vcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3J7XFxyXFxuICAgIG1hcmdpbjowIDI0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlhdXRob3IsIC5pcGFpbnR7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVye1xcclxcbmRpc3BsYXk6IGZsZXg7XFxyXFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IDQ3JTtcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmsocmdiYSgxNDYsIDE0MywgMTQzLCAwLjMpLCByZ2JhKDU5LCA1OSwgNTksIDAuNjIzKSk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMTgsIDExOCwgMTE4LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQ6IDQwMCAxOHB4IFxcXCJMZXhlbmRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRue1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTVweDtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHNhbG1vbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxyXFxuICB3aWR0aDogMTE0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRzYWxtb247XFxyXFxuICB9XFxyXFxuXFxyXFxuLmJveC12aWV3LWNvbnRhaW5lcntcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXZpZXd7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAvKiBiYWNrZ3JvdW5kOnVybCgnLi9ob21lLWltYWdlLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6NyU7Ki9cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm94LXZpZXc6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCBibGFjayAxMDAlKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGEtcGFpbnR7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1cHg7XFxyXFxuICAgIHJpZ2h0OiAxMnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZnVuY3Rpb24gYXBpKCl7XHJcblxyXG5jb25zdCBkaXNwbGF5SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXBhaW50Jyk7XHJcblxyXG5mZXRjaCgnaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvYXBpL25sL2NvbGxlY3Rpb24/a2V5PTJWS1JMQ21sJmludm9sdmVkTWFrZXI9UmVtYnJhbmR0K3ZhbitSaWpuJylcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgZGlzcGxheUluZm8uaW5uZXJIVE1MPXJlc3BvbnNlLmFydE9iamVjdHNbMF0ubG9uZ1RpdGxlXHJcbn0pLmNhdGNoKEVycm9yID0+IGNvbnNvbGUubG9nKEVycm9yKSlcclxuY29uc29sZS5sb2coKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtdmlldycpO1xyXG5mZXRjaCgnaHR0cHM6Ly93d3cucmlqa3NtdXNldW0ubmwvYXBpL25sL2NvbGxlY3Rpb24/a2V5PTJWS1JMQ21sJmludm9sdmVkTWFrZXI9UmVtYnJhbmR0K3ZhbitSaWpuJylcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgZGlzcGxheUltYWdlLmlubmVySFRNTD1yZXNwb25zZS5hcnRPYmplY3RzWzFdLndlYkltYWdlLnVybFxyXG59KS5jYXRjaChFcnJvciA9PiBjb25zb2xlLmxvZyhFcnJvcikpXHJcbmNvbnNvbGUubG9nKCk7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsgIiwiaW1wb3J0IGFwaSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IGhvbWVJbWFnZSBmcm9tICcuL2hvbWUtaW1hZ2UuanBnJztcclxuXHJcblxyXG5mdW5jdGlvbiBob21lICgpe1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVCb3g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVCb3guY2xhc3NMaXN0LmFkZChcImhvbWUtYm94XCIpO1xyXG5cclxuICAgIGNvbnN0IGJveFNlYXJjaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94U2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJib3gtc2VhcmNoXCIpXHJcblxyXG4gICAgY29uc3QgdGl0dGxlQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXR0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdHRsZS1jb250YWluZXJcIik7XHJcbiAgICB0aXR0bGVDb250YWluZXIuaW5uZXJIVE1MPVwiRmluZCBBcnRcIlxyXG5cclxuICAgIGNvbnN0IHNlYXJjaFRpdHRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBzZWFyY2hUaXR0bGUuY2xhc3NMaXN0LmFkZChcInNlYXJjaC10aXR0bGVcIik7XHJcbiAgICBzZWFyY2hUaXR0bGUuaW5uZXJIVE1MPVwiU2VhcmNoIGJ5OlwiXHJcblxyXG4gICAgdmFyIGlucHV0Q29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gXCJTZWFyY2hcIjtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpbnB1dFZhbEF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBpbnB1dFZhbFBhaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWludFwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWxBdXRob3IsIGlucHV0VmFsUGFpbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFwaSgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBsYmxBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XHJcbiAgICBsYmxBdXRob3IuY2xhc3NMaXN0LmFkZChcImxibC1hdXRob3JcIilcclxuICAgIGxibEF1dGhvci5pbm5lckhUTUwgPSBcIkF1dGhvclwiO1xyXG4gICAgbGJsQXV0aG9yLnNldEF0dHJpYnV0ZShcImZvclwiLFwiYXV0aG9yXCIpO1xyXG4gICAgdmFyIGlucHV0QXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRBdXRob3IudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaW5wdXRBdXRob3IuY2xhc3NMaXN0LmFkZChcImlhdXRob3JcIilcclxuICAgIGlucHV0QXV0aG9yLmlkPVwiYXV0aG9yXCI7XHJcbiAgICBpbnB1dEF1dGhvci5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWludFwiKS5kaXNhYmxlZCA9IHRoaXMudmFsdWUgIT0gXCJcIjtcclxufTtcclxuXHJcbiAgICB2YXIgb3I9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvci5jbGFzc0xpc3QuYWRkKFwib3JcIik7XHJcbiAgICBvci5pbm5lckhUTUw9XCJvclwiXHJcblxyXG5cclxuICAgIHZhciBsYmxQYWludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcclxuICAgIGxibFBhaW50LmNsYXNzTGlzdC5hZGQoXCJsYmwtcGFpbnRcIilcclxuICAgIGxibFBhaW50LmlubmVySFRNTCA9IFwiUGFpbnRpbmcgQXJ0XCI7XHJcbiAgICBsYmxQYWludC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInBhaW50XCIpO1xyXG4gICAgdmFyIGlucHV0UGFpbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dFBhaW50LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0UGFpbnQuY2xhc3NMaXN0LmFkZChcImlwYWludFwiKVxyXG4gICAgaW5wdXRQYWludC5pZD1cInBhaW50XCJcclxuICAgIGlucHV0UGFpbnQub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKS5kaXNhYmxlZCA9IHRoaXMudmFsdWUgIT0gXCJcIjtcclxuICAgIH07XHJcbiAgXHJcblxyXG4gICAgY29uc3QgYm94Vmlld0NvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm94Vmlld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94LXZpZXctY29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgYm94Vmlldz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgYm94Vmlldy5zcmM9aG9tZUltYWdlO1xyXG4gICAgYm94Vmlldy5jbGFzc0xpc3QuYWRkKFwiYm94LXZpZXdcIik7XHJcbiAgICBjb25zdCBkYXRhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYXRhLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXBhaW50XCIpO1xyXG4gICAgZGF0YS5pbm5lckhUTUw9XCJGcnV0ZXJvLiBCZWNlcnJpbCwgQW5hLiAyMDAyXCJcclxuXHJcblxyXG4gICAgYm94Vmlld0NvbnRhaW5lci5hcHBlbmQoYm94VmlldywgZGF0YSk7XHJcbiAgICBsYmxQYWludC5hcHBlbmQoaW5wdXRQYWludCk7XHJcbiAgICBsYmxBdXRob3IuYXBwZW5kKGlucHV0QXV0aG9yKTtcclxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChsYmxBdXRob3IsIG9yLCBsYmxQYWludCk7XHJcbiAgICBib3hTZWFyY2guYXBwZW5kKHRpdHRsZUNvbnRhaW5lciwgc2VhcmNoVGl0dGxlLGlucHV0Q29udGFpbmVyLCBidG4pO1xyXG4gICAgaG9tZUJveC5hcHBlbmQoYm94U2VhcmNoLGJveFZpZXcpO1xyXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmQoaG9tZUJveCk7XHJcbiAgIFxyXG4gICAgcmV0dXJuIGhvbWVDb250YWluZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lOyAiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZVwiXHJcblxyXG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucGFyZW50LmlkID0gJ3BhcmVudCc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50KVxyXG5wYXJlbnQuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
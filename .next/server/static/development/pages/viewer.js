module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/viewer.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/viewer.js":
/*!*************************!*\
  !*** ./pages/viewer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Layout/NavigationBar */ "./src/components/Layout/NavigationBar/index.js");
/* harmony import */ var _src_components_Layout_FooterBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Layout/FooterBar */ "./src/components/Layout/FooterBar.js");
/* harmony import */ var _src_components_ViewerPageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/ViewerPageContainer */ "./src/components/ViewerPageContainer.js");
/* harmony import */ var _src_components_PrintWatermark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/PrintWatermark */ "./src/components/PrintWatermark.js");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/config */ "./src/config/index.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/pages/viewer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const VerifierPage = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_src_components_ViewerPageContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  document: props.document,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(VerifierPage));
VerifierPage.propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/components/Analytics/index.js":
/*!*******************************************!*\
  !*** ./src/components/Analytics/index.js ***!
  \*******************************************/
/*! exports provided: validateEvent, stringifyEvent, analyticsEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvent", function() { return validateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEvent", function() { return stringifyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyticsEvent", function() { return analyticsEvent; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/logger */ "./src/utils/logger.js");

const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["getLogger"])("components:Analytics:");
const {
  trace: traceDev
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__["getLogger"])("components:Analytics(Inactive):");
const validateEvent = ({
  category,
  action,
  value
}) => {
  if (!category) throw new Error("Category is required");
  if (!action) throw new Error("Action is required");
  if (value && typeof value !== "number") throw new Error("Value must be a number");
};
const stringifyEvent = ({
  category,
  action,
  label,
  value
}) => `Category*: ${category}, Action*: ${action}, Label: ${label}, Value: ${value}`;
const analyticsEvent = (window, evt) => {
  validateEvent(evt);

  if (false) {}

  traceDev(stringifyEvent(evt));
  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (analyticsEvent);

/***/ }),

/***/ "./src/components/CertificateShareLink/CertificateShareLinkForm.js":
/*!*************************************************************************!*\
  !*** ./src/components/CertificateShareLink/CertificateShareLinkForm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-qr-svg */ "react-qr-svg");
/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_qr_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharing.scss */ "./src/components/CertificateShareLink/sharing.scss");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sharing_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/CertificateShareLink/CertificateShareLinkForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class CertificateShareLinkForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      shareLink,
      shareLinkState,
      copiedLink,
      handleCopyLink,
      handleShareLinkToggle
    } = this.props;
    const certificateLink = shareLink && `${window.location.origin}/?documentId=${shareLink.id}#${shareLink.key}`;
    return __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "col-12 justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "row d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Share your certificate")), shareLinkState === "INITIAL" ? __jsx(Loader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, shareLink.id && shareLink.key !== undefined ? __jsx("div", {
      className: "offset-1 col-10 offset-l-2 col-l-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "row justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Share this certificate by copying the link below.", __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "* Note: This link will automatically expire in", " ", __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "14 days"), ".")), __jsx("div", {
      className: "row mt-4 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("input", {
      className: "w-75",
      value: certificateLink,
      onClick: () => handleCopyLink(certificateLink),
      placeholder: "Certificate link",
      readOnly: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("button", {
      type: "button",
      className: `pointer ${_sharing_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copyBtn} w-25`,
      onClick: () => handleCopyLink(certificateLink),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Copy")), copiedLink && __jsx("div", {
      className: "row justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("small", {
      className: "text-green",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Successfully copied share link!")), __jsx("div", {
      className: "row d-flex justify-content-center m-3 mt4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(react_qr_svg__WEBPACK_IMPORTED_MODULE_3__["QRCode"], {
      level: "H",
      style: {
        width: 180
      },
      value: certificateLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))) : __jsx("div", {
      id: "error-message",
      className: "row justify-content-center my-5 text-red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("i", {
      id: "verify-invalid",
      className: "fas fa-times-circle fa-2x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), " ", __jsx("p", {
      className: "align-middle ml-2 mt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Could not generate sharing link."))), __jsx("div", {
      className: "row d-flex justify-content-center m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: `pointer ${_sharing_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn}`,
      onClick: handleShareLinkToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Close"))));
  }

}

const Loader = () => __jsx("div", {
  className: _sharing_scss__WEBPACK_IMPORTED_MODULE_4___default.a["renderer-loader"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-spinner fa-pulse fa-2x  mt8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("div", {
  className: "m-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "Generating Share Link ..."));

const mapStateToProps = store => ({
  shareLinkState: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getShareLinkState"])(store)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(CertificateShareLinkForm));
CertificateShareLinkForm.propTypes = {
  copiedLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  shareLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  shareLinkState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  handleCopyLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleShareLinkToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./src/components/CertificateShareLink/sharing.scss":
/*!**********************************************************!*\
  !*** ./src/components/CertificateShareLink/sharing.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"btn": "LMjsLqyrsOHItpw6eKq6H",
	"copyBtn": "_1kHvG9MA6WqjLO_B4MX_qm",
	"renderer-loader": "_3m801qvG3oD3simxQmdnCS"
};

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js":
/*!*************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js ***!
  \*************************************************************************/
/*! exports provided: getIdentityVerificationText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdentityVerificationText", function() { return getIdentityVerificationText; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DetailedCertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailedCertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/components/CertificateVerifyBlock/constants.js");
/* harmony import */ var _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificateVerifyBlock.scss */ "./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss");
/* harmony import */ var _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewerPageImages */ "./src/components/ViewerPageImages.js");

var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/CertificateVerifyBlock/CertificateVerifyBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const statusSummary = ({
  verifying,
  hashStatus,
  issuedStatus,
  notRevokedStatus,
  issuerIdentityStatus
}) => {
  if (verifying) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && issuerIdentityStatus.verified) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID;
  if (!verifying && hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && !issuerIdentityStatus.verified) return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING;
  return _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].INVALID;
};

const renderIcon = status => {
  let icon;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].CONNECTING:
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING:
      icon = __jsx("i", {
        id: "verify-spinner",
        className: "fa fa-spinner fa-spin fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: undefined
      });
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      icon = _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__["default"].checkCircle();
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      icon = __jsx("i", {
        id: "verify-warning",
        className: "fas fa-exclamation-triangle fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      });
      break;

    default:
      icon = __jsx("i", {
        id: "verify-invalid",
        className: "fas fa-times-circle fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: undefined
      });
  }

  return __jsx("div", {
    className: `d-flex justify-content-center align-items-center ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["verified-icon"]}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, icon);
};

const getIdentityVerificationText = identityStatus => {
  const identity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(identityStatus, ({
    registry
  }) => !!registry);

  if (identity) {
    return `Certificate issued by ${identity.registry.toUpperCase()}`;
  } // note filter Boolean is to remove empty values


  const dnsNames = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(identityStatus, ["dns"]).map(({
    dns
  }) => dns ? dns.toUpperCase() : null).filter(Boolean);
  return `Certificate issued by ${dnsNames.length > 0 ? dnsNames[0].toUpperCase() : "Unknown"}`;
};

const renderText = (status, props) => {
  let text;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].CONNECTING:
      text = "Connecting ...";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VERIFYING:
      text = "Verifying Certificate ...";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      {
        const identity = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(props, "issuerIdentityStatus.identities", []);
        text = getIdentityVerificationText(identity);
        break;
      }

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      text = "Institution identity not verified";
      break;

    default:
      text = "Invalid Certificate";
  }

  return __jsx("div", {
    className: _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["verification-text"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, text);
};

const SimpleVerifyBlock = props => {
  const status = statusSummary(props);
  const renderedIcon = renderIcon(status);
  const renderedText = renderText(status, props);
  let stateStyle;

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].VALID:
      stateStyle = "valid";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].WARNING:
      stateStyle = "warning";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["LOG_LEVEL"].INVALID:
    default:
      stateStyle = "invalid";
  }

  return __jsx("div", {
    className: `p-2 pointer ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["simple-verify-block"]} ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a[stateStyle]} ${props.detailedVerifyVisible ? _certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.active : ""}`,
    onClick: props.toggleDetailedView,
    id: "certificate-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("div", {
    className: "row justify-center",
    style: {
      flexWrap: "inherit"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, renderedIcon, renderedText, __jsx("span", {
    // eslint-disable-next-line prettier/prettier
    className: `d-flex justify-content-center align-items-center ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.arrow}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, _ViewerPageImages__WEBPACK_IMPORTED_MODULE_7__["default"].arrow())));
};

const CertificateVerifyBlock = props => {
  const status = statusSummary(props);
  return __jsx("div", {
    id: "certificate-verify-block",
    className: `align-items-start flex-nowrap ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a["d-flex"]} ${_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_6___default.a.verifyBlocksContainer} mb-md-0`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(SimpleVerifyBlock, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })), props.detailedVerifyVisible ? __jsx(_DetailedCertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    statusSummary: status,
    hashStatus: props.hashStatus,
    issuedStatus: props.issuedStatus,
    notRevokedStatus: props.notRevokedStatus,
    issuerIdentityStatus: props.issuerIdentityStatus,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }) : "");
};

CertificateVerifyBlock.propTypes = {
  verifyTriggered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  toggleDetailedView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  detailedVerifyVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
SimpleVerifyBlock.propTypes = CertificateVerifyBlock.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (CertificateVerifyBlock);

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js":
/*!*********************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailedCertificateBlock.scss */ "./src/components/CertificateVerifyBlock/detailedCertificateBlock.scss");
/* harmony import */ var _detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/components/CertificateVerifyBlock/constants.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/CertificateVerifyBlock/DetailedCertificateVerifyBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SuccessIcon = () => __jsx("i", {
  className: "fas fa-check text-success mr-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

const FailureIcon = () => __jsx("i", {
  className: "fas fa-times-circle text-danger mr-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

const WarningIcon = () => __jsx("i", {
  className: "fas fa-question text-warning mr-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
});

const CheckStatusRow = ({
  message,
  icon
}) => __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, icon), __jsx("div", {
  className: "col-10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, message)));

const renderFailure = check => __jsx(CheckStatusRow, {
  message: check.failure,
  icon: check.failureStatusIcon(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
});

const renderSuccess = check => __jsx(CheckStatusRow, {
  message: check.success,
  icon: SuccessIcon(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
});

const renderStatus = (props, type, typeVerified = true) => {
  const isVerified = props[type.id].verified;
  if (isVerified !== typeVerified) return "";
  return isVerified ? renderSuccess(type) : renderFailure(type);
};

const CHECKS = {
  HASH: {
    id: "hashStatus",
    success: "Certificate has not been tampered with",
    failure: "Certificate has been tampered with",
    failureStatusIcon: FailureIcon
  },
  NOT_REVOKED: {
    id: "notRevokedStatus",
    success: "Certificate has not been revoked",
    failure: "Certificate has been revoked",
    failureStatusIcon: WarningIcon
  }
};

const renderVerifiedStatuses = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, renderStatus(props, CHECKS.HASH), renderStatus(props, CHECKS.NOT_REVOKED));

const renderUnverifiedStatuses = props => {
  const show = !props.hashStatus.verified || !props.notRevokedStatus.verified;
  return show ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, renderStatus(props, CHECKS.HASH, false), renderStatus(props, CHECKS.NOT_REVOKED, false), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })) : "";
};

const CertificateVerifyBlock = props => {
  let borderColor;

  switch (props.statusSummary) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].VALID:
      borderColor = "valid-border-color";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].WARNING:
      borderColor = "warning-border-color";
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOG_LEVEL"].INVALID:
    default:
      borderColor = "invalid-border-color";
  }

  return __jsx("div", {
    className: `${_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default.a["detailed-certificate-block"]} ${_detailedCertificateBlock_scss__WEBPACK_IMPORTED_MODULE_2___default.a[borderColor]} bg-white p-3`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Details")), renderUnverifiedStatuses(props), renderVerifiedStatuses(props));
};

CertificateVerifyBlock.propTypes = {
  statusSummary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
CheckStatusRow.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
renderUnverifiedStatuses.propTypes = CertificateVerifyBlock.propTypes;
/* harmony default export */ __webpack_exports__["default"] = (CertificateVerifyBlock);

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss":
/*!***************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"verifyBlocksContainer": "_2sVF6kqGWu_H_UbaX8-clP",
	"simple-verify-block": "_2hOjWS9TqiT42TjXZ-FpiM",
	"arrow": "_3F2H28N8QJ23qCXE7notKP",
	"valid": "_3Hb1EfyyFAmh5m_X0rCnAK",
	"circle": "nsMA1QAw05AkuNeUXajT",
	"check": "_3k_yqoyNGwxsEa40VGL3--",
	"warning": "_3OoDk3kelPIIU2G1yom20Q",
	"active": "_3i_kQOMWpXmCuW9O09XeNK",
	"invalid": "_3yQfN0rusOu6oP8BdXcO3o",
	"verification-text": "_3-NY-Iy5xJ2b4x2dWbQQfC",
	"verified-icon": "_20ONRjG-wYXy8Xk-MAqySX",
	"d-flex": "vyciJ7mISsN8pfxWtkTku"
};

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/constants.js":
/*!************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/constants.js ***!
  \************************************************************/
/*! exports provided: LOG_LEVEL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_LEVEL", function() { return LOG_LEVEL; });
const LOG_LEVEL = {
  CONNECTING: "CONNECTING",
  VERIFYING: "VERIFYING",
  VALID: "VALID",
  INVALID: "INVALID",
  WARNING: "WARNING"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  LOG_LEVEL
});

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/detailedCertificateBlock.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/detailedCertificateBlock.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"detailed-certificate-block": "_2NqQyDoy96MB45AMEnEon-",
	"valid-border-color": "_2xTMvr4PPFUBABLad76pO5",
	"warning-border-color": "_2_Qm5u9pkV6aNEJlawXk0R",
	"invalid-border-color": "i523olvQnIvjWslsvGSP-"
};

/***/ }),

/***/ "./src/components/CertificateVerifyBlock/index.js":
/*!********************************************************!*\
  !*** ./src/components/CertificateVerifyBlock/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/CertificateVerifyBlock.js");

/* harmony default export */ __webpack_exports__["default"] = (_CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CertificateViewer.js":
/*!*********************************************!*\
  !*** ./src/components/CertificateViewer.js ***!
  \*********************************************/
/*! exports provided: StatelessCertificateViewer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatelessCertificateViewer", function() { return StatelessCertificateViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @govtechsg/open-attestation */ "@govtechsg/open-attestation");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CertificateVerifyBlock */ "./src/components/CertificateVerifyBlock/index.js");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary.js");
/* harmony import */ var _DecentralisedTemplateRenderer_DecentralisedRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DecentralisedTemplateRenderer/DecentralisedRenderer */ "./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js");
/* harmony import */ var _MultiTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MultiTabs */ "./src/components/MultiTabs.js");
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _CertificateShareLink_CertificateShareLinkForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CertificateShareLink/CertificateShareLinkForm */ "./src/components/CertificateShareLink/CertificateShareLinkForm.js");
/* harmony import */ var _FeatureFlag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FeatureFlag */ "./src/components/FeatureFlag.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/CertificateViewer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const CertificateSharingForm = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./CertificateSharing/CertificateSharingForm */ "./src/components/CertificateSharing/CertificateSharingForm.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./CertificateSharing/CertificateSharingForm */ "./src/components/CertificateSharing/CertificateSharingForm.js")],
    modules: ["./CertificateSharing/CertificateSharingForm"]
  }
});

const renderVerifyBlock = props => __jsx(_CertificateVerifyBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
  verifyTriggered: props.verifyTriggered,
  verifying: props.verifying,
  hashStatus: props.hashStatus,
  issuedStatus: props.issuedStatus,
  notRevokedStatus: props.notRevokedStatus,
  issuerIdentityStatus: props.issuerIdentityStatus,
  toggleDetailedView: props.toggleDetailedView,
  detailedVerifyVisible: props.detailedVerifyVisible,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
});

const LoadingIframe = () => __jsx("div", {
  id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["renderer-loader"],
  className: "text-blue",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-spinner fa-pulse fa-3x",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx("div", {
  className: "m-3",
  style: {
    fontSize: "1.5rem"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Loading Renderer..."));

const renderHeaderBlock = props => {
  const renderedVerifyBlock = renderVerifyBlock(props);
  return __jsx("div", {
    className: `container-fluid ${_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["pd-0"]} ${_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, renderedVerifyBlock), __jsx("div", {
    className: `row flex-nowrap`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "ml-2",
    onClick: () => props.handleSharingToggle(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("div", {
    id: "btn-email",
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["send-btn"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-envelope",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }))))));
};

const StatelessCertificateViewer = props => {
  const {
    document,
    selectTemplateTab
  } = props;
  const certificate = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__["getData"])(document);
  const renderedHeaderBlock = renderHeaderBlock(props);
  const identity = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(props, "issuerIdentityStatus.identities", []);
  const isInRegistry = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["some"])(identity, ({
    registry
  }) => !!registry);

  const validCertificateContent = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("div", {
    id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["top-header-ui"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("div", {
    className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["header-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, renderedHeaderBlock)), __jsx(_MultiTabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
    selectTemplateTab: selectTemplateTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx(LoadingIframe, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), __jsx(_DecentralisedTemplateRenderer_DecentralisedRenderer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    certificate: document,
    source: `${typeof document.data.$template === "object" ? certificate.$template.url : _config__WEBPACK_IMPORTED_MODULE_14__["LEGACY_OPENCERTS_RENDERER"]}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: props.showSharing,
    toggle: props.handleSharingToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx(CertificateSharingForm, {
    emailSendingState: props.emailSendingState,
    handleSendCertificate: props.handleSendCertificate,
    handleSharingToggle: props.handleSharingToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: props.showShareLink,
    toggle: props.handleShareLinkToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(_CertificateShareLink_CertificateShareLinkForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
    shareLink: props.shareLink,
    copiedLink: props.copiedLink,
    handleShareLinkToggle: props.handleShareLinkToggle,
    handleCopyLink: props.handleCopyLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  })));

  return __jsx(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, validCertificateContent, " ");
};

const mapDispatchToProps = dispatch => ({
  selectTemplateTab: tabIndex => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_13__["selectTemplateTab"])(tabIndex))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(StatelessCertificateViewer));
StatelessCertificateViewer.propTypes = {
  toggleDetailedView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  detailedVerifyVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  shareLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  showSharing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showShareLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  handleSharingToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleSendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleShareLinkToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
renderVerifyBlock.propTypes = StatelessCertificateViewer.propTypes;
renderHeaderBlock.propTypes = StatelessCertificateViewer.propTypes;

/***/ }),

/***/ "./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js":
/*!*******************************************************************************!*\
  !*** ./src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! penpal/lib/connectToChild */ "penpal/lib/connectToChild");
/* harmony import */ var penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @govtechsg/open-attestation */ "@govtechsg/open-attestation");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Analytics */ "./src/components/Analytics/index.js");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_certificate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/certificate */ "./src/utils/certificate.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/DecentralisedTemplateRenderer/DecentralisedRenderer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class DecentralisedRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      childFrameConnection: null
    };
  }

  async selectTemplateTab(i) {
    const {
      childFrameConnection
    } = this.state;
    const child = await childFrameConnection;
    await child.selectTemplateTab(i);
    this.props.selectTemplateTab(i);
  }

  updateHeight(h) {
    this.iframe.height = h;
  }

  updateTemplates(templates) {
    if (!templates) return;
    this.props.registerTemplates(templates);
  }

  handleObfuscation(field) {
    const updatedDocument = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__["obfuscateDocument"])(this.props.document, field);
    this.props.updateObfuscatedCertificate(updatedDocument);
    const updatedCertificate = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__["getData"])(updatedDocument);
    this.renderDocument(updatedCertificate);
  }

  async renderDocument(certificate) {
    const {
      childFrameConnection
    } = this.state;
    const child = await childFrameConnection;
    const rawDocument = this.props.certificate;
    await child.renderDocument(certificate, rawDocument);
  } // Do not re-render component if only activeTab changes


  shouldComponentUpdate(nextProps) {
    if (this.props.activeTab !== nextProps.activeTab && this.props.document === nextProps.document) {
      this.selectTemplateTab(nextProps.activeTab);
      return false;
    }

    return true;
  }

  componentDidMount() {
    const iframe = this.iframe;
    const updateHeight = this.updateHeight.bind(this);
    const updateTemplates = this.updateTemplates.bind(this);
    const handleObfuscation = this.handleObfuscation.bind(this);
    const rawDocument = this.props.certificate;
    const childFrameConnection = penpal_lib_connectToChild__WEBPACK_IMPORTED_MODULE_3___default()({
      iframe,
      methods: {
        updateHeight,
        updateTemplates,
        handleObfuscation
      }
    }).promise;
    this.setState({
      childFrameConnection
    });
    childFrameConnection.then(frame => frame.renderDocument(Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__["getData"])(rawDocument), rawDocument));
    const certificateData = Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_4__["getData"])(rawDocument);
    Object(_Analytics__WEBPACK_IMPORTED_MODULE_7__["analyticsEvent"])(window, {
      category: "CERTIFICATE_VIEWED",
      action: Object(_utils_certificate__WEBPACK_IMPORTED_MODULE_9__["getDocumentIssuerStores"])(certificateData),
      label: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["get"])(certificateData, "id")
    });
  }

  render() {
    return __jsx("iframe", {
      title: "Decentralised Rendered Certificate",
      id: "iframe",
      className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_8___default.a["decentralised-renderer"],
      ref: iframe => {
        this.iframe = iframe;
      },
      src: this.props.source,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    });
  }

}

const mapStateToProps = store => ({
  document: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getCertificate"])(store),
  activeTab: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getActiveTemplateTab"])(store)
});

const mapDispatchToProps = dispatch => ({
  updateObfuscatedCertificate: updatedDoc => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["updateObfuscatedCertificate"])(updatedDoc)),
  registerTemplates: templates => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["registerTemplates"])(templates)),
  selectTemplateTab: tabIndex => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["selectTemplateTab"])(tabIndex))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(DecentralisedRenderer));
DecentralisedRenderer.propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  registerTemplates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updateObfuscatedCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/components/ErrorBoundary.js":
/*!*****************************************!*\
  !*** ./src/components/ErrorBoundary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.scss */ "./src/components/error.scss");
/* harmony import */ var _error_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_error_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/ErrorBoundary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return __jsx("div", {
        className: `${_error_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        id: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: `${_error_scss__WEBPACK_IMPORTED_MODULE_2___default.a.error}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx("img", {
        src: "/static/images/errorpage/error.png",
        style: {
          height: "15vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Something went wrong!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "There is an error with this certificate, please contact your issuing institution."), __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Go Back"))));
    }

    return this.props.children;
  }

}
ErrorBoundary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/FeatureFlag.js":
/*!***************************************!*\
  !*** ./src/components/FeatureFlag.js ***!
  \***************************************/
/*! exports provided: FeatureFlag, FeatureFlagContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureFlag", function() { return FeatureFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureFlagContainer", function() { return FeatureFlagContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
// eslint-disable-next-line no-unused-vars



const FeatureFlag = ({
  name,
  render,
  fallback,
  state
}) => {
  const featureFlag = state.featureToggle[name];

  if (featureFlag && render) {
    return render();
  }

  if (!featureFlag && fallback) {
    return fallback();
  }

  return null;
};
const FeatureFlagContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
  state
}))(FeatureFlag);
FeatureFlag.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/components/Layout/FooterBar.js":
/*!********************************************!*\
  !*** ./src/components/Layout/FooterBar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Layout/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/Layout/FooterBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavigationBar = () => __jsx("div", {
  className: "bg-brand-dark",
  id: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["footer-print"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  href: "/collaborate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Collaborate")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  href: "/faq",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "FAQ")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  href: "/registry",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Registry")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  href: "/privacy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Privacy Policy")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  href: "/terms",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Terms of Use")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/OpenCerts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Github"))));

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/components/Layout/NavigationBar/NavigationBar.js":
/*!**************************************************************!*\
  !*** ./src/components/Layout/NavigationBar/NavigationBar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navBar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar.scss */ "./src/components/Layout/NavigationBar/navBar.scss");
/* harmony import */ var _navBar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navBar_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/Layout/NavigationBar/NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const navItems = [{
  id: "home",
  label: "Home",
  path: "/"
} // {
//   id: "collaborate",
//   label: "Collaborate",
//   path: "/collaborate"
// },
// {
//   id: "faq",
//   label: "FAQ",
//   path: "/faq"
// }
];

const renderNavItem = active => {
  const items = navItems.map((n, i) => __jsx("li", {
    className: `${_navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a["nav-item"]} ${n.id === active ? _navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : ""}`,
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: n.path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, n.label)));
  return __jsx("ul", {
    className: "navbar-nav ml-auto d-none d-lg-flex d-xl-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, items);
};

const NavigationBar = ({
  active
}) => __jsx("nav", {
  className: `${_navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navbar} ${"navbar-expand-md navbar-dark bg-brand-dark"}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: _navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.innerbar,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  className: "navbar-brand",
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/images/white-convergence.png",
  alt: "convergence",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
})), __jsx("button", {
  className: `${_navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar-toggler"]} d-none`,
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#top-nav",
  "aria-controls": "top-nav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("span", {
  className: `${_navBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a["toggler-icon"]} ${"navbar-toggler-icon"}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "top-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, renderNavItem(active))));

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);
NavigationBar.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/components/Layout/NavigationBar/index.js":
/*!******************************************************!*\
  !*** ./src/components/Layout/NavigationBar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar */ "./src/components/Layout/NavigationBar/NavigationBar.js");

/* harmony default export */ __webpack_exports__["default"] = (_NavigationBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Layout/NavigationBar/navBar.scss":
/*!*********************************************************!*\
  !*** ./src/components/Layout/NavigationBar/navBar.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"innerbar": "_3nnMZzZKl8PS3i5asdckIh",
	"navbar": "_2BhPq4KUkcMYhEZyng_Tl_",
	"nav-item": "_2nzBcgQg32A_PLGnuvPO4d",
	"active": "_1rrHNablnjU53NYBZt8aUp",
	"navbar-toggler": "E7sXNZCbQTSDVgjz6ZTbt",
	"toggler-icon": "_3uzbxCVVzCb6YzuI3UNwef"
};

/***/ }),

/***/ "./src/components/Layout/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_2gteCBBGtcoz5o1BuvsB9F",
	"footer-print": "_2HRkZQw4THQ3DH__nfESc6"
};

/***/ }),

/***/ "./src/components/Modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.scss */ "./src/components/Modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/Modal/Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const modal = ({
  show,
  toggle,
  children
}) => show ? __jsx("div", {
  className: _modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: `${_modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a["modal-content"]} p-3`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: `${_modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a["modal-cross"]} pointer`,
  onClick: () => toggle(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-times text-muted",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), children), __jsx("div", {
  style: {
    position: "fixed",
    zIndex: 10
  },
  className: "modal-backdrop fade show",
  onClick: () => toggle(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})) : "";

/* harmony default export */ __webpack_exports__["default"] = (modal);
modal.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/Modal.js");

/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Modal/modal.scss":
/*!*****************************************!*\
  !*** ./src/components/Modal/modal.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modal": "_1XiFiRPm5eKlcPkwuueLC7",
	"modal-content": "_29qRvfuy8C4s0KTS0voizh",
	"modal-cross": "ItIvLlbRwY68P29rgyo1B",
	"error-message": "_1VbihTvaaHqGIaPkwIkZei"
};

/***/ }),

/***/ "./src/components/MultiTabs.js":
/*!*************************************!*\
  !*** ./src/components/MultiTabs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificateViewer.scss */ "./src/components/certificateViewer.scss");
/* harmony import */ var _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _UI_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/Drawer */ "./src/components/UI/Drawer/index.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/MultiTabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const MultiTabs = ({
  resetData,
  activeTab,
  templates,
  selectTemplateTab
}) => __jsx("div", {
  id: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["header-ui"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: `${_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["header-container"]} d-none d-lg-block d-xl-block`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  id: "template-tabs-list",
  className: "nav nav-tabs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, templates && templates.length > 0 ? templates.map((t, idx) => __jsx("li", {
  key: idx,
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  className: `${_certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tab}
                    ${idx === activeTab ? _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : ""}`,
  id: t.id,
  onClick: () => {
    selectTemplateTab(idx);
  },
  role: "tab",
  "aria-controls": "home",
  "aria-selected": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, t.label))) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("a", {
  id: "btn-view-another",
  onClick: () => resetData(),
  className: _certificateViewer_scss__WEBPACK_IMPORTED_MODULE_4___default.a["view-another"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "View another")))), __jsx("div", {
  className: "d-lg-none d-xl-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx(_UI_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  tabs: templates,
  activeIdx: activeTab,
  toggle: idx => selectTemplateTab(idx),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
})));

const mapStateToProps = store => ({
  templates: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getTemplates"])(store),
  activeTab: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getActiveTemplateTab"])(store)
});

const mapDispatchToProps = dispatch => ({
  resetData: () => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["resetCertificateState"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(MultiTabs));
MultiTabs.propTypes = {
  resetData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  templates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  selectTemplateTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./src/components/PrintWatermark.js":
/*!******************************************!*\
  !*** ./src/components/PrintWatermark.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/PrintWatermark.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PrintWatermark = () => __jsx("div", {
  className: "print-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("img", {
  style: {
    position: "absolute",
    opacity: 0.5,
    width: "100%",
    height: "100%"
  },
  src: "/static/images/watermark.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (PrintWatermark);

/***/ }),

/***/ "./src/components/UI/Drawer/drawer.js":
/*!********************************************!*\
  !*** ./src/components/UI/Drawer/drawer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer.scss */ "./src/components/UI/Drawer/drawer.scss");
/* harmony import */ var _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drawer_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/UI/Drawer/drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Drawer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showAbsHeader: false
    };
  }

  toggleDrawer() {
    this.setState({
      visible: !this.state.visible
    });
  }

  createTabs(tabs) {
    const {
      activeIdx
    } = this.props;
    return tabs.map((tab, idx) => __jsx("a", {
      href: "",
      className: `${_drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tabs} ${activeIdx === idx ? _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : ""} `,
      key: idx,
      onClick: e => {
        e.preventDefault();
        this.renderContent(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, tab.label));
  }

  renderContent(idx) {
    this.props.toggle(idx);
    this.toggleDrawer();
  }

  render() {
    const {
      tabs,
      children
    } = this.props;
    const {
      visible,
      showAbsHeader
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, visible ? __jsx("div", {
      id: "mySidenav",
      className: _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidenav,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      href: "",
      className: _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closebtn,
      onClick: e => {
        e.preventDefault();
        this.toggleDrawer();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\xD7"), this.createTabs(tabs)) : null, __jsx("div", {
      className: `${_drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gray} ${showAbsHeader ? "" : _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a["mb-sidenav"]} container-fluid`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: _drawer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.togglebtn,
      onClick: () => this.toggleDrawer(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "\u2630")), __jsx("div", {
      id: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, children));
  }

}
Drawer.propTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  activeIdx: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./src/components/UI/Drawer/drawer.scss":
/*!**********************************************!*\
  !*** ./src/components/UI/Drawer/drawer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sidenav": "_11TPRHdvTRtw3j8hq6bBDd",
	"tabs": "_2nqSdYJgsH-3ilPPQ74kL6",
	"active": "_3Jg1Zp0x1QtmV6FNHdQh85",
	"closebtn": "Eie5dWLvHuO-kKz6Sm4pU",
	"togglebtn": "_3iJttegbua4ZOBo9tFDjUE",
	"gray": "_3xbAzW4Nr8fWPXxBy6SeNY",
	"main": "_14rU3pdcggUH3rbDVkpVs7",
	"mb-sidenav": "_1ZMleAu0HE5a6QNflDx275"
};

/***/ }),

/***/ "./src/components/UI/Drawer/index.js":
/*!*******************************************!*\
  !*** ./src/components/UI/Drawer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer */ "./src/components/UI/Drawer/drawer.js");

/* harmony default export */ __webpack_exports__["default"] = (_drawer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ViewerPageContainer.js":
/*!***********************************************!*\
  !*** ./src/components/ViewerPageContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clipboard-copy */ "clipboard-copy");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @govtechsg/open-attestation */ "@govtechsg/open-attestation");
/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _CertificateViewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CertificateViewer */ "./src/components/CertificateViewer.js");
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/ViewerPageContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class MainPageContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showSharing: false,
      detailedVerifyVisible: false,
      copiedLink: false
    };
    this.toggleDetailedView = this.toggleDetailedView.bind(this);
    this.handleCertificateChange = this.handleCertificateChange.bind(this);
    this.handleSharingToggle = this.handleSharingToggle.bind(this);
    this.handleShareLinkToggle = this.handleShareLinkToggle.bind(this);
    this.handleSendCertificate = this.handleSendCertificate.bind(this);
    this.handleCopyLink = this.handleCopyLink.bind(this);
  }

  componentDidMount() {
    const {
      document
    } = this.props;

    if (!document) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/");
    }
  }

  handleSharingToggle() {
    this.props.sendCertificateReset();
    this.setState({
      showSharing: !this.state.showSharing
    });
  }

  handleShareLinkToggle() {
    if (!this.state.showShareLink) {
      this.props.generateShareLink();
    }

    this.setState({
      showShareLink: !this.state.showShareLink,
      copiedLink: false
    });
  }

  handleCopyLink(certificateLink) {
    clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default()(certificateLink);
    this.setState({
      copiedLink: true
    });
  }

  toggleDetailedView() {
    this.setState({
      detailedVerifyVisible: !this.state.detailedVerifyVisible
    });
  }

  handleCertificateChange(certificate) {
    this.props.updateCertificate(certificate);
  }

  handleSendCertificate({
    email,
    captcha
  }) {
    this.props.sendCertificate({
      email,
      captcha
    });
  }

  render() {
    if (!this.props.document) return null;
    return __jsx(_CertificateViewer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      document: this.props.document,
      certificate: Object(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_5__["getData"])(this.props.document),
      verifying: this.props.verifying,
      hashStatus: this.props.hashStatus,
      issuedStatus: this.props.issuedStatus,
      notRevokedStatus: this.props.notRevokedStatus,
      issuerIdentityStatus: this.props.issuerIdentityStatus,
      handleCertificateChange: this.handleCertificateChange,
      showSharing: this.state.showSharing,
      showShareLink: this.state.showShareLink,
      shareLink: this.props.shareLink,
      handleSendCertificate: this.handleSendCertificate,
      handleSharingToggle: this.handleSharingToggle,
      handleShareLinkToggle: this.handleShareLinkToggle,
      handleCopyLink: this.handleCopyLink,
      copiedLink: this.state.copiedLink,
      emailSendingState: this.props.emailSendingState,
      toggleDetailedView: this.toggleDetailedView,
      detailedVerifyVisible: this.state.detailedVerifyVisible,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    });
  }

}

const mapStateToProps = store => ({
  document: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getCertificate"])(store),
  // Verification statuses used in verifier block
  emailSendingState: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getEmailSendingState"])(store),
  shareLink: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getShareLink"])(store),
  shareLinkState: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getShareLinkState"])(store),
  verifying: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getVerifying"])(store),
  issuerIdentityStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getIssuerIdentityStatus"])(store),
  hashStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getHashStatus"])(store),
  issuedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getIssuedStatus"])(store),
  notRevokedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getNotRevokedStatus"])(store),
  verified: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["getVerified"])(store)
});

const mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["updateCertificate"])(payload)),
  sendCertificate: payload => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["sendCertificate"])(payload)),
  sendCertificateReset: () => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["sendCertificateReset"])()),
  generateShareLink: () => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["generateShareLink"])()),
  updateObfuscatedCertificate: updatedDoc => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["updateObfuscatedCertificate"])(updatedDoc))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MainPageContainer));
MainPageContainer.propTypes = {
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  certificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  verified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  sendCertificateReset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  generateShareLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  shareLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  updateObfuscatedCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/components/ViewerPageImages.js":
/*!********************************************!*\
  !*** ./src/components/ViewerPageImages.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CertificateVerifyBlock/certificateVerifyBlock.scss */ "./src/components/CertificateVerifyBlock/certificateVerifyBlock.scss");
/* harmony import */ var _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/ViewerPageImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint react/display-name: 0 */


const viewerImages = {
  print: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "56.81",
    height: "50.77",
    viewBox: "0 0 56.81 50.77",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "a",
    x1: "29.18",
    y1: "34.39",
    x2: "29.18",
    y2: "18.05",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Print"), __jsx("path", {
    d: "M13.08,26.42V6.48a3.64,3.64,0,0,1,3.64-3.64H42.05a3.64,3.64,0,0,1,3.64,3.64V25M17.21,49.61H51.94A3.64,3.64,0,0,0,55.58,46V30.06a3.64,3.64,0,0,0-3.64-3.64H6.41a3.64,3.64,0,0,0-3.64,3.64V46a3.64,3.64,0,0,0,3.64,3.65H9.93M21.87,11.7H37.58m-15.71,7H37.58m5.58,15,6.81,0",
    transform: "translate(-0.77 -0.84)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))),
  send: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "59.6",
    height: "44.2",
    viewBox: "0 0 59.6 44.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "a",
    x1: "29.8",
    y1: "17.28",
    x2: "29.8",
    y2: "31.55",
    gradientTransform: "matrix(1, 0, 0, -1, 0, 47)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "b",
    x1: "-569.09",
    y1: "98.35",
    x2: "-569.09",
    y2: "100.46",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 21029.48, 1503.59)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "c",
    x1: "30.56",
    y1: "55.8",
    x2: "30.56",
    y2: "61.4",
    gradientTransform: "matrix(0.99, 0.17, 0.19, -1, -21.61, 83.11)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "d",
    x1: "-456.93",
    y1: "-19.99",
    x2: "-456.93",
    y2: "-14.38",
    gradientTransform: "matrix(0.12, -0.99, -0.99, -0.11, 78.63, -424.23)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Email"), __jsx("path", {
    d: "M57.6,32.1V39a3.69,3.69,0,0,1-3.7,3.7H5.7A3.69,3.69,0,0,1,2,39V6.2A3.69,3.69,0,0,1,5.7,2.5H53.8a3.69,3.69,0,0,1,3.7,3.7V23.3",
    transform: "translate(0 -0.5)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("path", {
    d: "M6.8,9.5,29.4,27.4,52,9.5",
    transform: "translate(0 -0.5)",
    fill: "#fff",
    strokeWidth: "4",
    stroke: "url(#b)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("line", {
    x1: "12.6",
    y1: "36.3",
    x2: "26.6",
    y2: "23.3",
    fill: "none",
    strokeWidth: "4",
    stroke: "url(#c)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("line", {
    x1: "46.5",
    y1: "36.2",
    x2: "33.1",
    y2: "23.3",
    fill: "none",
    strokeWidth: "4",
    stroke: "url(#d)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })))),
  check: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.32",
    height: "11.83",
    viewBox: "0 0 17.32 11.83",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "check"), __jsx("path", {
    d: "M17.86,2.34,8.08,12.11a1,1,0,0,1-1.45,0L1.14,6.62A1,1,0,1,1,2.59,5.17L7.36,9.94,16.41.88a1,1,0,0,1,1.45,0A1,1,0,0,1,17.86,2.34Z",
    transform: "translate(-0.84 -0.58)",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }))),
  checkCircle: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "check-circle"), __jsx("path", {
    id: _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle,
    d: "M29.87,5.13a17.48,17.48,0,0,0-24.74,0,17.48,17.48,0,0,0,0,24.74,17.48,17.48,0,0,0,24.74,0,17.48,17.48,0,0,0,0-24.74Z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }), __jsx("path", {
    id: _CertificateVerifyBlock_certificateVerifyBlock_scss__WEBPACK_IMPORTED_MODULE_1___default.a.check,
    d: "M25.86,13.34l-9.78,9.77a1,1,0,0,1-1.45,0L9.14,17.62a1,1,0,0,1,1.45-1.45l4.77,4.77,9.05-9.06a1,1,0,0,1,1.45,0A1,1,0,0,1,25.86,13.34Z",
    fill: "#09a63b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }))),
  arrow: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8.1",
    height: "14.36",
    viewBox: "0 0 8.1 14.36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, "arrow"), __jsx("polyline", {
    points: "0.74 0.68 6.74 7.13 0.74 13.68",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  })))
};
/* harmony default export */ __webpack_exports__["default"] = (viewerImages);

/***/ }),

/***/ "./src/components/certificateViewer.scss":
/*!***********************************************!*\
  !*** ./src/components/certificateViewer.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header-ui": "_3NWoJ-J-uw2r4MZh0doSHT",
	"renderer-loader": "_1ihKQmQyL-Pkrz50HwiZgd",
	"top-header-ui": "_2toytDi_4tTN3cdU739o_-",
	"decentralised-renderer": "_3oxAef8gVSBJ9wFpNxvY7Q",
	"status-banner-container": "_2xuaBJsMGR_Ydpst1RCzE_",
	"valid": "_2MDtAgpl3qsVg_RnDa_r_r",
	"invalid": "_2CGislMIliQFIdnGsbZ3Vn",
	"status-banner": "_1EtnUMGHWT_IFg3OXQVLVS",
	"header-container": "_1I4xO-sppzFqbQV7C9sIew",
	"tab": "QgkLmRbnLAKVzVZAmlvVm",
	"active": "xHBBR37cdMSS5ORDVI2BX",
	"frameless-container": "_r7yqc3CQkj_lej6pMDcV",
	"view-another": "xMHWWFLYdfCha-RG9yiID",
	"pd-0": "_1aNH2ZROjB-RGUAM7Knd3m",
	"print-btn": "_2yScdhvU0jsVess9XMd5Fw",
	"send-btn": "_1Wp3dVITkt5oFM9rS4clfq",
	"container": "_33h22M-cs2FURv4jNUgvSr"
};

/***/ }),

/***/ "./src/components/error.scss":
/*!***********************************!*\
  !*** ./src/components/error.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"box": "Pqc0Tx9Oxyn-KS072av34",
	"error": "_2XPn5V4lrLhkmYHoBXUx-p",
	"icon": "_2cToToQmlaA-Woxw_EcLMC"
};

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: NETWORK_TYPES, URL, API_MAIN_URL, API_ROPSTEN_URL, IS_MAINNET, DEFAULT_NETWORK, GA_ID, CAPTCHA_CLIENT_KEY, EMAIL_API_URL, SHARE_LINK_API_URL, SHARE_LINK_TTL, INFURA_PROJECT_ID, LEGACY_OPENCERTS_RENDERER, ENVIRONMENT, DEFAULT_SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_TYPES", function() { return NETWORK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_MAIN_URL", function() { return API_MAIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ROPSTEN_URL", function() { return API_ROPSTEN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MAINNET", function() { return IS_MAINNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_NETWORK", function() { return DEFAULT_NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_ID", function() { return GA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTCHA_CLIENT_KEY", function() { return CAPTCHA_CLIENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_API_URL", function() { return EMAIL_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_LINK_API_URL", function() { return SHARE_LINK_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_LINK_TTL", function() { return SHARE_LINK_TTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFURA_PROJECT_ID", function() { return INFURA_PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGACY_OPENCERTS_RENDERER", function() { return LEGACY_OPENCERTS_RENDERER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return ENVIRONMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEO", function() { return DEFAULT_SEO; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ "./src/utils/logger.js");


const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__["getLogger"])("config");
const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const NETWORK_TYPES = {
  INFURA_MAINNET: "INFURA_MAINNET",
  INFURA_ROPSTEN: "INFURA_ROPSTEN",
  INJECTED: "INJECTED",
  CUSTOM: "CUSTOM",
  MOCK: "MOCK"
};
const URL = "https://convergence.tech";
const API_MAIN_URL = "https://api.opencerts.io";
const API_ROPSTEN_URL = "https://api-ropsten.opencerts.io";
const GA_PRODUCTION_ID = "UA-130492260-1";
const GA_DEVELOPMENT_ID = "UA-130492260-2";
const IS_MAINNET = publicRuntimeConfig.network === "mainnet";
const DEFAULT_NETWORK = IS_MAINNET ? NETWORK_TYPES.INFURA_MAINNET : NETWORK_TYPES.INFURA_ROPSTEN;
const GA_ID = IS_MAINNET ? GA_PRODUCTION_ID : GA_DEVELOPMENT_ID;
const CAPTCHA_CLIENT_KEY = "6LfiL3EUAAAAAHrfLvl2KhRAcXpanNXDqu6M0CCS";
const EMAIL_API_URL = IS_MAINNET ? `${API_MAIN_URL}/email` : `${API_ROPSTEN_URL}/email`;
const SHARE_LINK_API_URL = IS_MAINNET ? `${API_MAIN_URL}/storage` : `${API_ROPSTEN_URL}/storage`;
const SHARE_LINK_TTL = 1209600;
const INFURA_PROJECT_ID = "1f1ff2b3fca04f8d99f67d465c59e4ef";
const LEGACY_OPENCERTS_RENDERER = publicRuntimeConfig.legacyRendererUrl || "https://legacy.opencerts.io/";
const ENVIRONMENT = publicRuntimeConfig.context === "production" ? "production" : "development";
const DEFAULT_SEO = {
  title: "An easy way to check and verify your credentials",
  titleTemplate: `Convergence - %s`,
  description: "Whether you're a student or an employer, Convergence lets you verify the credentials you have of anyone from any institution. All in one place.",
  openGraph: {
    type: "website",
    url: URL,
    title: "Convergence - An easy way to access and verify your credentials",
    description: "Whether you're a student or an employer, Convergence lets you verify the credentials you have of anyone from any institution. All in one place.",
    images: [{
      url: `${URL}/static/images/convergence.png`,
      width: 800,
      height: 600,
      alt: "Convergence"
    }]
  },
  twitter: {
    cardType: "summary_large_image"
  }
};
trace(`DEFAULT_NETWORK: ${DEFAULT_NETWORK}`);
trace(`CAPTCHA_CLIENT_KEY: ${CAPTCHA_CLIENT_KEY}`);
trace(`EMAIL_API_URL: ${EMAIL_API_URL}`);

/***/ }),

/***/ "./src/reducers/certificate.js":
/*!*************************************!*\
  !*** ./src/reducers/certificate.js ***!
  \*************************************/
/*! exports provided: states, initialState, types, default, resetCertificateState, updateCertificate, verifyCertificate, updateFilteredCertificate, verifyingCertificateIssuerSuccess, verifyingCertificateIssuerFailure, verifyingCertificateStoreSuccess, verifyingCertificateStoreFailure, verifyingCertificateRevocationSuccess, verifyingCertificateRevocationFailure, verifyingCertificateIssuedSuccess, verifyingCertificateIssuedFailure, verifyingCertificateHashSuccess, verifyingCertificateHashFailure, sendCertificate, sendCertificateReset, generateShareLink, retrieveCertificateByLink, resetCertificateObfuscation, updateObfuscatedCertificate, registerTemplates, selectTemplateTab, getIssuerIdentityStatus, getHashStatus, getStoreStatus, getIssuedStatus, getNotRevokedStatus, getCertificate, getVerifying, getVerified, getVerificationStatus, getEmailSendingState, getShareLink, getShareLinkState, getEncryptedCertificate, getEncryptedCertificateStatus, getActiveTemplateTab, getTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCertificateState", function() { return resetCertificateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCertificate", function() { return updateCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyCertificate", function() { return verifyCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilteredCertificate", function() { return updateFilteredCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateIssuerSuccess", function() { return verifyingCertificateIssuerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateIssuerFailure", function() { return verifyingCertificateIssuerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateStoreSuccess", function() { return verifyingCertificateStoreSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateStoreFailure", function() { return verifyingCertificateStoreFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateRevocationSuccess", function() { return verifyingCertificateRevocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateRevocationFailure", function() { return verifyingCertificateRevocationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateIssuedSuccess", function() { return verifyingCertificateIssuedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateIssuedFailure", function() { return verifyingCertificateIssuedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateHashSuccess", function() { return verifyingCertificateHashSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyingCertificateHashFailure", function() { return verifyingCertificateHashFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCertificate", function() { return sendCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCertificateReset", function() { return sendCertificateReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateShareLink", function() { return generateShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveCertificateByLink", function() { return retrieveCertificateByLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCertificateObfuscation", function() { return resetCertificateObfuscation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObfuscatedCertificate", function() { return updateObfuscatedCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerTemplates", function() { return registerTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTemplateTab", function() { return selectTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssuerIdentityStatus", function() { return getIssuerIdentityStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashStatus", function() { return getHashStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreStatus", function() { return getStoreStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIssuedStatus", function() { return getIssuedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotRevokedStatus", function() { return getNotRevokedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCertificate", function() { return getCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerifying", function() { return getVerifying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerified", function() { return getVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerificationStatus", function() { return getVerificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmailSendingState", function() { return getEmailSendingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareLink", function() { return getShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareLinkState", function() { return getShareLinkState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEncryptedCertificate", function() { return getEncryptedCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEncryptedCertificateStatus", function() { return getEncryptedCertificateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTemplateTab", function() { return getActiveTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplates", function() { return getTemplates; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const states = {
  INITIAL: "INITIAL",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};
const initialState = {
  raw: null,
  rawModified: null,
  store: null,
  storeError: null,
  storeLoading: false,
  issuerIdentities: null,
  certificateHash: false,
  certificateIssued: false,
  certificateNotRevoked: false,
  certificateIssuer: false,
  certificateStore: false,
  certificateHashVerifying: false,
  certificateIssuedVerifying: false,
  certificateNotRevokedVerifying: false,
  certificateIssuerVerifying: false,
  certificateStoreVerifying: false,
  certificateHashError: null,
  certificateIssuedError: null,
  certificateNotRevokedError: null,
  certificateIssuerError: null,
  certificateStoreError: null,
  verificationStatus: [],
  emailState: states.INITIAL,
  emailError: null,
  shareLink: {},
  shareLinkState: states.INITIAL,
  shareLinkError: null,
  encryptedCertificate: {},
  encryptedCertificateState: states.INITIAL,
  encryptedCertificateError: null,
  templates: null,
  activeTemplateTab: 0
}; // Actions

const types = {
  RESET_CERTIFICATE: "RESET_CERTIFICATE",
  NETWORK_RESET: "NETWORK_RESET",
  // For network change
  UPDATE_CERTIFICATE: "UPDATE_CERTIFICATE",
  LOADING_STORE_SUCCESS: "LOADING_STORE_SUCCESS",
  LOADING_STORE_FAILURE: "LOADING_STORE_FAILURE",
  VERIFYING_CERTIFICATE: "VERIFYING_CERTIFICATE",
  VERIFYING_CERTIFICATE_HASH_SUCCESS: "VERIFYING_CERTIFICATE_HASH_SUCCESS",
  VERIFYING_CERTIFICATE_HASH_FAILURE: "VERIFYING_CERTIFICATE_HASH_FAILURE",
  VERIFYING_CERTIFICATE_ISSUED_SUCCESS: "VERIFYING_CERTIFICATE_ISSUED_SUCCESS",
  VERIFYING_CERTIFICATE_ISSUED_FAILURE: "VERIFYING_CERTIFICATE_ISSUED_FAILURE",
  VERIFYING_CERTIFICATE_REVOCATION_SUCCESS: "VERIFYING_CERTIFICATE_REVOCATION_SUCCESS",
  VERIFYING_CERTIFICATE_REVOCATION_FAILURE: "VERIFYING_CERTIFICATE_REVOCATION_FAILURE",
  VERIFYING_CERTIFICATE_ISSUER_SUCCESS: "VERIFYING_CERTIFICATE_ISSUER_SUCCESS",
  VERIFYING_CERTIFICATE_ISSUER_FAILURE: "VERIFYING_CERTIFICATE_ISSUER_FAILURE",
  VERIFYING_CERTIFICATE_STORE_SUCCESS: "VERIFYING_CERTIFICATE_STORE_SUCCESS",
  VERIFYING_CERTIFICATE_STORE_FAILURE: "VERIFYING_CERTIFICATE_STORE_FAILURE",
  SENDING_CERTIFICATE: "SENDING_CERTIFICATE",
  SENDING_CERTIFICATE_SUCCESS: "SENDING_CERTIFICATE_SUCCESS",
  SENDING_CERTIFICATE_FAILURE: "SENDING_CERTIFICATE_FAILURE",
  SENDING_CERTIFICATE_RESET: "SENDING_CERTIFICATE_RESET",
  GENERATE_SHARE_LINK: "GENERATE_SHARE_LINK",
  GENERATE_SHARE_LINK_SUCCESS: "GENERATE_SHARE_LINK_SUCCESS",
  GENERATE_SHARE_LINK_FAILURE: "GENERATE_SHARE_LINK_FAILURE",
  GENERATE_SHARE_LINK_RESET: "GENERATE_SHARE_LINK_RESET",
  GET_CERTIFICATE_BY_ID: "GET_CERTIFICATE_BY_ID",
  GET_CERTIFICATE_BY_ID_PENDING: "GET_CERTIFICATE_BY_ID_PENDING",
  GET_CERTIFICATE_BY_ID_SUCCESS: "GET_CERTIFICATE_BY_ID_SUCCESS",
  GET_CERTIFICATE_BY_ID_FAILURE: "GET_CERTIFICATE_BY_ID_FAILURE",
  CERTIFICATE_OBFUSCATE_RESET: "CERTIFICATE_OBFUSCATE_RESET",
  CERTIFICATE_OBFUSCATE_UPDATE: "CERTIFICATE_OBFUSCATE_UPDATE",
  CERTIFICATE_TEMPLATE_REGISTER: "CERTIFICATE_TEMPLATE_REGISTER",
  CERTIFICATE_TEMPLATE_SELECT_TAB: "CERTIFICATE_TEMPLATE_SELECT_TAB"
}; // Reducers

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RESET_CERTIFICATE:
    case types.NETWORK_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState);

    case types.UPDATE_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState, {
        raw: action.payload,
        rawModified: action.payload,
        store: null,
        storeError: null,
        storeLoading: true
      });

    case types.LOADING_STORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        store: action.payload,
        storeError: null,
        storeLoading: false
      });

    case types.LOADING_STORE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        storeError: action.payload,
        storeLoading: false
      });

    case types.VERIFYING_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        issuerIdentities: null,
        certificateHash: false,
        certificateIssued: false,
        certificateNotRevoked: false,
        certificateIssuer: false,
        certificateStore: false,
        certificateHashVerifying: true,
        certificateIssuedVerifying: true,
        certificateNotRevokedVerifying: true,
        certificateIssuerVerifying: true,
        certificateStoreVerifying: true,
        certificateHashError: null,
        certificateIssuedError: null,
        certificateNotRevokedError: null,
        certificateIssuerError: null,
        certificateStoreError: null,
        verificationStatus: []
      });

    case types.VERIFYING_CERTIFICATE_HASH_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateHash: true,
        certificateHashError: null,
        certificateHashVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate integrity checked",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_HASH_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateHash: false,
        certificateHashError: action.payload,
        certificateHashVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been tampered",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUED_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateIssued: true,
        certificateIssuedError: null,
        certificateIssuedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been issued",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUED_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateIssued: false,
        certificateIssuedError: action.payload,
        certificateIssuedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate is not issued",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_REVOCATION_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateNotRevoked: true,
        certificateNotRevokedError: null,
        certificateNotRevokedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate is issued",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_REVOCATION_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateNotRevoked: false,
        certificateNotRevokedError: action.payload,
        certificateNotRevokedVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate has been revoked",
          warning: false,
          error: true
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUER_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        issuerIdentities: action.payload,
        certificateIssuer: true,
        certificateIssuerVerifying: false,
        certificateIssuerError: null,
        verificationStatus: [...state.verificationStatus, {
          message: "Known certificate issuer",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_ISSUER_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateIssuer: false,
        certificateIssuerVerifying: false,
        certificateIssuerError: action.payload,
        verificationStatus: [...state.verificationStatus, {
          message: "Unknown certificate issuer",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_STORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateStore: true,
        certificateStoreError: null,
        certificateStoreVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate store checked",
          warning: false,
          error: false
        }]
      });

    case types.VERIFYING_CERTIFICATE_STORE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        certificateStore: false,
        certificateStoreError: action.payload,
        certificateStoreVerifying: false,
        verificationStatus: [...state.verificationStatus, {
          message: "Certificate store does not exist",
          warning: false,
          error: true
        }]
      });

    case types.SENDING_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        emailState: states.PENDING,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        emailState: states.INITIAL,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        emailState: states.SUCCESS,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        emailState: states.FAILURE,
        emailError: action.payload
      });

    case types.GENERATE_SHARE_LINK_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        shareLink: action.payload,
        shareLinkState: states.SUCCESS
      });

    case types.GENERATE_SHARE_LINK_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        shareLink: {},
        shareLinkState: states.FAILURE
      });

    case types.GENERATE_SHARE_LINK_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        shareLink: {},
        shareLinkState: states.INITIAL
      });

    case types.GET_CERTIFICATE_BY_ID_PENDING:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        encryptedCertificateState: states.PENDING
      });

    case types.GET_CERTIFICATE_BY_ID_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        encryptedCertificate: action.payload,
        encryptedCertificateState: states.SUCCESS
      });

    case types.GET_CERTIFICATE_BY_ID_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        encryptedCertificate: {},
        encryptedCertificateState: states.FAILURE,
        encryptedCertificateError: action.payload
      });

    case types.CERTIFICATE_OBFUSCATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState, {
        rawModified: state.raw
      });

    case types.CERTIFICATE_OBFUSCATE_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        rawModified: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_REGISTER:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        templates: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_SELECT_TAB:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        activeTemplateTab: action.payload
      });

    default:
      return state;
  }
} // Action Creators

function resetCertificateState() {
  return {
    type: types.RESET_CERTIFICATE
  };
}
function updateCertificate(payload) {
  return {
    type: types.UPDATE_CERTIFICATE,
    payload
  };
}
function verifyCertificate(payload) {
  return {
    type: types.VERIFYING_CERTIFICATE,
    payload
  };
}
function updateFilteredCertificate(payload) {
  return {
    type: types.UPDATE_FILTERED_CERTIFICATE,
    payload
  };
}
function verifyingCertificateIssuerSuccess({
  issuerIdentities
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUER_SUCCESS,
    payload: issuerIdentities
  };
}
function verifyingCertificateIssuerFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUER_FAILURE,
    error
  };
}
function verifyingCertificateStoreSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_STORE_SUCCESS
  };
}
function verifyingCertificateStoreFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_STORE_FAILURE,
    error
  };
}
function verifyingCertificateRevocationSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_REVOCATION_SUCCESS
  };
}
function verifyingCertificateRevocationFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_REVOCATION_FAILURE,
    error
  };
}
function verifyingCertificateIssuedSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUED_SUCCESS
  };
}
function verifyingCertificateIssuedFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_ISSUED_FAILURE,
    error
  };
}
function verifyingCertificateHashSuccess() {
  return {
    type: types.VERIFYING_CERTIFICATE_HASH_SUCCESS
  };
}
function verifyingCertificateHashFailure({
  error
}) {
  return {
    type: types.VERIFYING_CERTIFICATE_HASH_FAILURE,
    error
  };
}
function sendCertificate(payload) {
  return {
    type: types.SENDING_CERTIFICATE,
    payload
  };
}
function sendCertificateReset() {
  return {
    type: types.SENDING_CERTIFICATE_RESET
  };
}
function generateShareLink() {
  return {
    type: types.GENERATE_SHARE_LINK
  };
}
function retrieveCertificateByLink(payload) {
  return {
    type: types.GET_CERTIFICATE_BY_ID,
    payload
  };
}
function resetCertificateObfuscation() {
  return {
    type: types.CERTIFICATE_OBFUSCATE_RESET
  };
}
function updateObfuscatedCertificate(payload) {
  return {
    type: types.CERTIFICATE_OBFUSCATE_UPDATE,
    payload
  };
}
function registerTemplates(payload) {
  return {
    type: types.CERTIFICATE_TEMPLATE_REGISTER,
    payload
  };
}
function selectTemplateTab(payload) {
  return {
    type: types.CERTIFICATE_TEMPLATE_SELECT_TAB,
    payload
  };
} // Selectors

function getIssuerIdentityStatus(store) {
  const {
    issuerIdentities,
    certificateIssuerVerifying,
    certificateIssuerError,
    certificateIssuer
  } = store.certificate;
  return {
    identities: issuerIdentities,
    verified: certificateIssuer,
    verifying: certificateIssuerVerifying,
    error: certificateIssuerError
  };
}
function getHashStatus(store) {
  const {
    certificateHash,
    certificateHashError,
    certificateHashVerifying
  } = store.certificate;
  return {
    verified: certificateHash,
    verifying: certificateHashVerifying,
    error: certificateHashError
  };
}
function getStoreStatus(store) {
  const {
    certificateStore,
    certificateStoreError,
    certificateStoreVerifying
  } = store.certificate;
  return {
    verified: certificateStore,
    verifying: certificateStoreVerifying,
    error: certificateStoreError
  };
}
function getIssuedStatus(store) {
  const {
    certificateIssued,
    certificateIssuedError,
    certificateIssuedVerifying
  } = store.certificate;
  return {
    verified: certificateIssued,
    verifying: certificateIssuedVerifying,
    error: certificateIssuedError
  };
}
function getNotRevokedStatus(store) {
  const {
    certificateNotRevoked,
    certificateNotRevokedError,
    certificateNotRevokedVerifying
  } = store.certificate;
  return {
    verified: certificateNotRevoked,
    verifying: certificateNotRevokedVerifying,
    error: certificateNotRevokedError
  };
}
function getCertificate(store) {
  return store.certificate.rawModified;
}
function getVerifying(store) {
  const {
    certificateIssuerVerifying,
    certificateHashVerifying,
    certificateIssuedVerifying,
    certificateNotRevokedVerifying,
    certificateStoreVerifying
  } = store.certificate;
  return certificateIssuerVerifying || certificateHashVerifying || certificateIssuedVerifying || certificateNotRevokedVerifying || certificateStoreVerifying;
}
function getVerified(store) {
  const hash = getHashStatus(store).verified;
  const issued = getIssuedStatus(store).verified;
  const notRevoked = getNotRevokedStatus(store).verified;
  const identity = getIssuerIdentityStatus(store).verified;
  const storeStatus = getStoreStatus(store).verified;
  return hash && issued && notRevoked && identity && storeStatus;
}
function getVerificationStatus(store) {
  return store.certificate.verificationStatus;
}
function getEmailSendingState(store) {
  return store.certificate.emailState;
}
function getShareLink(store) {
  return store.certificate.shareLink;
}
function getShareLinkState(store) {
  return store.certificate.shareLinkState;
}
function getEncryptedCertificate(store) {
  return store.certificate.encryptedCertificate;
}
function getEncryptedCertificateStatus(store) {
  return store.certificate.encryptedCertificateState;
}
function getActiveTemplateTab(store) {
  return store.certificate.activeTemplateTab;
}
function getTemplates(store) {
  return store.certificate.templates;
}

/***/ }),

/***/ "./src/utils/certificate.js":
/*!**********************************!*\
  !*** ./src/utils/certificate.js ***!
  \**********************************/
/*! exports provided: getDocumentStore, getDocumentIssuerStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentStore", function() { return getDocumentStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentIssuerStores", function() { return getDocumentIssuerStores; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getDocumentStore = issuer => issuer.certificateStore || issuer.documentStore;
const getDocumentIssuerStores = document => {
  const issuers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(document, "issuers", []);
  return issuers.map(getDocumentStore).join(",");
};

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! exports provided: trace, error, getLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogger", function() { return getLogger; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
 // not using .extends because of stupid next.js resolve modules bug where its picking up old version of debug

const trace = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:trace:${namespace}`);
const error = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:error:${namespace}`);
const getLogger = namespace => ({
  trace: trace(namespace),
  error: error(namespace)
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/viewer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ajl/development/ssi/trybe.id/trybe.verification/pages/viewer.js */"./pages/viewer.js");


/***/ }),

/***/ "@govtechsg/open-attestation":
/*!**********************************************!*\
  !*** external "@govtechsg/open-attestation" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@govtechsg/open-attestation");

/***/ }),

/***/ "clipboard-copy":
/*!*********************************!*\
  !*** external "clipboard-copy" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clipboard-copy");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "penpal/lib/connectToChild":
/*!********************************************!*\
  !*** external "penpal/lib/connectToChild" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("penpal/lib/connectToChild");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-recaptcha":
/*!*****************************************!*\
  !*** external "react-google-recaptcha" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-qr-svg":
/*!*******************************!*\
  !*** external "react-qr-svg" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-qr-svg");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=viewer.js.map
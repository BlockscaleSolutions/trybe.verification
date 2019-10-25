module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Layout/NavigationBar */ "./src/components/Layout/NavigationBar/index.js");
/* harmony import */ var _src_components_Layout_FooterBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Layout/FooterBar */ "./src/components/Layout/FooterBar.js");
/* harmony import */ var _src_components_MainPageContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/MainPageContainer */ "./src/components/MainPageContainer.js");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/config */ "./src/config/index.js");
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const VerifierPage = props => {
  const getCertificate = () => {
    const encryptionKey = window.location.hash.substring(1); // using window.location.search because react router has issue getting the query on NextJS

    const documentId = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(window.location.search).documentId;

    if (documentId) {
      const payload = {
        id: documentId,
        encryptionKey
      };
      props.retrieveCertificateByLink(payload);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCertificate();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_Layout_NavigationBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    active: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx(_src_components_MainPageContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }));
};

const mapDispatchToProps = dispatch => ({
  retrieveCertificateByLink: payload => dispatch(Object(_src_reducers_certificate__WEBPACK_IMPORTED_MODULE_6__["retrieveCertificateByLink"])(payload))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(VerifierPage)));
VerifierPage.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  documentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  encryptedCertificateStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  retrieveCertificateByLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
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

/***/ "./src/components/CertificateDropZone/CertificateDropZoneContainer.js":
/*!****************************************************************************!*\
  !*** ./src/components/CertificateDropZone/CertificateDropZoneContainer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _reducers_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/application */ "./src/reducers/application.js");
/* harmony import */ var _CertificateVerificationStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CertificateVerificationStatus */ "./src/components/CertificateDropZone/CertificateVerificationStatus.js");
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateDropZone/CertificateDropZoneContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const onFileDrop = (acceptedFiles, handleCertificateChange, handleFileError) => {
  // eslint-disable-next-line no-undef
  const reader = new FileReader();

  if (reader.error) {
    handleFileError(reader.error);
  }

  reader.onload = () => {
    try {
      const json = JSON.parse(reader.result);
      handleCertificateChange(json);
    } catch (e) {
      handleFileError(e);
    }
  };

  if (acceptedFiles && acceptedFiles.length && acceptedFiles.length > 0) acceptedFiles.map(f => reader.readAsText(f));
};

class CertificateDropZoneContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      fileError: false
    };
    this.handleCertificateChange = this.handleCertificateChange.bind(this);
    this.handleFileError = this.handleFileError.bind(this);
  }

  componentDidMount() {
    this.props.updateNetworkId();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.prefetch("/viewer");
  }

  handleCertificateChange(certificate) {
    this.setState({
      fileError: false
    });
    this.props.updateCertificate(certificate);
  }

  handleFileError() {
    this.setState({
      fileError: true
    });
  }

  resetData() {
    this.props.resetData();
  }

  render() {
    return __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "certificate-dropzone",
      onDrop: acceptedFiles => onFileDrop(acceptedFiles, this.handleCertificateChange, this.handleFileError),
      className: "h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, props => __jsx(_CertificateVerificationStatus__WEBPACK_IMPORTED_MODULE_7__["default"], {
      document: this.props.document,
      retrieveCertificateStatus: this.props.encryptedCertificateStatus,
      fileError: this.state.fileError,
      handleCertificateChange: this.handleCertificateChange,
      handleFileError: this.handleFileError,
      verifying: this.props.verifying,
      issuerIdentityStatus: this.props.issuerIdentityStatus,
      hashStatus: this.props.hashStatus,
      issuedStatus: this.props.issuedStatus,
      notRevokedStatus: this.props.notRevokedStatus,
      verificationStatus: this.props.verificationStatus,
      resetData: this.resetData.bind(this),
      storeStatus: this.props.storeStatus,
      hover: props.isDragAccept,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  }

}

const mapStateToProps = store => ({
  document: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getCertificate"])(store),
  // Verification statuses used in verifier block
  encryptedCertificateStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getEncryptedCertificateStatus"])(store),
  verifying: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getVerifying"])(store),
  issuerIdentityStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getIssuerIdentityStatus"])(store),
  hashStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getHashStatus"])(store),
  issuedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getIssuedStatus"])(store),
  notRevokedStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getNotRevokedStatus"])(store),
  verificationStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getVerificationStatus"])(store),
  storeStatus: Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["getStoreStatus"])(store)
});

const mapDispatchToProps = dispatch => ({
  updateNetworkId: () => dispatch(Object(_reducers_application__WEBPACK_IMPORTED_MODULE_6__["updateNetworkId"])()),
  updateCertificate: payload => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["updateCertificate"])(payload)),
  resetData: () => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_5__["resetCertificateState"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CertificateDropZoneContainer));
CertificateDropZoneContainer.propTypes = {
  updateNetworkId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  encryptedCertificateStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  handleCertificateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resetData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  verificationStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  storeStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/components/CertificateDropZone/CertificateVerificationStatus.js":
/*!*****************************************************************************!*\
  !*** ./src/components/CertificateDropZone/CertificateVerificationStatus.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_DefaultView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/DefaultView */ "./src/components/CertificateDropZone/Views/DefaultView.js");
/* harmony import */ var _Views_VerifyingView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Views/VerifyingView */ "./src/components/CertificateDropZone/Views/VerifyingView.js");
/* harmony import */ var _Views_UnverifiedView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views/UnverifiedView */ "./src/components/CertificateDropZone/Views/UnverifiedView.js");
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateDropZone/CertificateVerificationStatus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CertificateVerificationStatus = props => {
  const {
    handleRenderOverwrite,
    resetData,
    verifying,
    fileError,
    issuerIdentityStatus,
    hashStatus,
    issuedStatus,
    notRevokedStatus,
    document,
    verificationStatus,
    storeStatus,
    hover,
    retrieveCertificateStatus
  } = props;

  if (hover) {
    return __jsx(_Views_DefaultView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      hover: true,
      accept: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    });
  }

  if (fileError) {
    return __jsx(_Views_DefaultView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      hover: true,
      accept: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    });
  }

  if (verifying || retrieveCertificateStatus === "PENDING") {
    return __jsx(_Views_VerifyingView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      verificationStatus: verificationStatus,
      retrieveCertificateStatus: retrieveCertificateStatus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    });
  }

  if (document && (!hashStatus.verified || !issuedStatus.verified || !notRevokedStatus.verified || !issuerIdentityStatus.verified || !storeStatus.verified)) {
    return __jsx(_Views_UnverifiedView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleRenderOverwrite: handleRenderOverwrite,
      resetData: () => resetData(),
      hashStatus: hashStatus,
      issuedStatus: issuedStatus,
      notRevokedStatus: notRevokedStatus,
      issuerIdentityStatus: issuerIdentityStatus,
      storeStatus: storeStatus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    });
  }

  return __jsx(_Views_DefaultView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hover: false,
    accept: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  });
};

CertificateVerificationStatus.propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  resetData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleCertificateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleFileError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleRenderOverwrite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fileError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  verifying: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  verificationStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  storeStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  retrieveCertificateStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CertificateVerificationStatus);

/***/ }),

/***/ "./src/components/CertificateDropZone/Views/DefaultView.js":
/*!*****************************************************************!*\
  !*** ./src/components/CertificateDropZone/Views/DefaultView.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewerStyles.scss */ "./src/components/CertificateDropZone/Views/viewerStyles.scss");
/* harmony import */ var _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateDropZone/Views/DefaultView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const View = ({
  hover,
  accept
}) => __jsx("div", {
  className: `${_viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a["viewer-container"]} ${// eslint-disable-next-line no-nested-ternary
  hover ? accept ? _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.accept : _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.invalid : _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.default}`,
  style: {
    borderRadius: 10
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a["image-container"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  alt: ".opencert Dropzone",
  src: "/static/images/dropzone/dropzone_illustration.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))), accept ? null : __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "File cannot be read. Please check that you have a valid .opencert file"), __jsx("div", {
  className: "text-brand-dark",
  style: {
    fontSize: "1.375rem",
    fontWeight: 500
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Drag and drop your opencert file"), __jsx("div", {
  className: "text-muted",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "to view its contents"), __jsx("div", {
  className: "text-muted row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("div", {
  className: "col-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})), __jsx("div", {
  className: "col-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "or"), __jsx("div", {
  className: "col-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}))), __jsx("div", {
  className: "text-muted row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("div", {
  className: "mx-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("button", {
  type: "button",
  className: `pointer ${_viewerStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, "Select File"))));

/* harmony default export */ __webpack_exports__["default"] = (View);
View.propTypes = {
  hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./src/components/CertificateDropZone/Views/UnverifiedView.js":
/*!********************************************************************!*\
  !*** ./src/components/CertificateDropZone/Views/UnverifiedView.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewerStyles.scss */ "./src/components/CertificateDropZone/Views/viewerStyles.scss");
/* harmony import */ var _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateDropZone/Views/UnverifiedView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const View = ({
  resetData,
  storeStatus,
  hashStatus,
  issuedStatus,
  issuerIdentityStatus,
  notRevokedStatus
}) => {
  /* Array of error messages with priority of error messages determined by a stack. 
  Error messages are first placed into the stack and the error message with the highest priority is popped off the stack
  and displayed.
  
  The priority of error messages are as follows:
  1. Invalid store
  2. Tampered
  3. Not issued
  4. Revoked */
  const errorMessages = [{
    title: "Certificate revoked",
    message: "This certificate has been revoked by your issuing institution. Please contact your issuing institution for more details.",
    error: !notRevokedStatus.verified
  }, {
    title: "Certificate not issued",
    message: "This certificate cannot be found. Please contact your issuing institution for help or issue the certificate before trying again.",
    error: !issuedStatus.verified
  }, {
    title: "Certificate has been tampered with",
    message: "The contents of this certificate are inaccurate and have been tampered with.",
    error: !hashStatus.verified
  }, {
    title: "Certificate issuer identity invalid",
    message: "This certificate was issued by an invalid issuer.",
    error: !issuerIdentityStatus.verified
  }, {
    title: "Certificate store address is invalid",
    message: "Please check that you have a valid smart contract with us and a correct certificate store address before proceeding.",
    error: !storeStatus.verified
  }];
  const stack = errorMessages.filter(errorMessage => errorMessage.error === true);
  const error = stack.pop();
  const isWarning = hashStatus.verified && issuedStatus.verified && notRevokedStatus.verified && issuerIdentityStatus.verified;
  return __jsx("div", {
    className: `${_viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["viewer-container"]} ${isWarning ? _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.warning : _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.invalid}`,
    style: {
      backgroundColor: isWarning ? "#fbf6e9" : "#fbeae9",
      borderRadius: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("span", {
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["message-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, isWarning ? __jsx("img", {
    src: "/static/images/dropzone/warning.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }) : __jsx("img", {
    src: "/static/images/dropzone/invalid.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("span", {
    className: `${isWarning ? "warning" : "invalid"} m-3`,
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, isWarning ? "Certificate from unregistered institution" : "This certificate is not valid")), __jsx("div", {
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.verifications,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, error !== undefined ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("p", {
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, error.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, error.message)) : null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("div", {
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["unverified-btn"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "What should I do?")), __jsx("div", {
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["secondary-links"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("a", {
    onClick: e => {
      e.preventDefault();
      resetData();
    },
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["text-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Try another"))), isWarning ? __jsx("span", {
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/viewer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("a", {
    id: "certificate-view-anyway",
    className: _viewerStyles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["text-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "View certificate anyway"))) : ""));
};

View.propTypes = {
  handleRenderOverwrite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  resetData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  document: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  hashStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  notRevokedStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  issuerIdentityStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  storeStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/components/CertificateDropZone/Views/VerifyingView.js":
/*!*******************************************************************!*\
  !*** ./src/components/CertificateDropZone/Views/VerifyingView.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateDropZone/Views/VerifyingView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const View = ({
  verificationStatus,
  retrieveCertificateStatus
}) => {
  const lastStatus = verificationStatus && verificationStatus[verificationStatus.length - 1];
  let statusIcon;

  if (lastStatus && lastStatus.message) {
    if (!lastStatus.warning && !lastStatus.error) {
      statusIcon = __jsx("i", {
        className: "fas fa-check text-green mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: undefined
      });
    } else if (!lastStatus.error) {
      statusIcon = __jsx("i", {
        className: "fas fa-exclamation-triangle text-orange mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      });
    } else {
      statusIcon = __jsx("i", {
        className: "fas fa-times-circle text-red mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      });
    }
  }

  return __jsx("div", {
    className: "text-center bg-light h-100 d-flex flex-column justify-content-center p-4 text-blue",
    style: {
      borderRadius: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-spinner fa-pulse fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("div", {
    className: "m-3",
    style: {
      fontSize: "1.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, retrieveCertificateStatus === "PENDING" ? "Retrieving Certificate..." : "Verifying Certificate..."), lastStatus && lastStatus.message ? __jsx("div", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, statusIcon, lastStatus.message) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (View);
View.propTypes = {
  verificationStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  retrieveCertificateStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./src/components/CertificateDropZone/Views/viewerStyles.scss":
/*!********************************************************************!*\
  !*** ./src/components/CertificateDropZone/Views/viewerStyles.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"viewer-container": "_3ZlO8kkIsWINO_Jt9V8jfi",
	"default": "_31frVVoTPTgj7JaFP8C5cQ",
	"accept": "_28QocctkcF8IAJU2N7M2XK",
	"warning": "iVNQHoYm2Z1v979YvteHh",
	"unverified-btn": "_3e6dkPW8CPWC--kTP0u3HC",
	"invalid": "_3IgiHP_Oe0FV_i1-YbRZPG",
	"image-container": "_2BdLOk7Cv9eQ5VROLKiVBH",
	"message-container": "_1hAJ3g62RZR7Gi78QFpoL-",
	"verifications": "_3LD2Yz1Z04VUFYt85GMp51",
	"messages": "_3eYaG19Aq_hLq0er-94ReJ",
	"btn": "_1APD-92L2LUo7FCZsFIlkA",
	"secondary-links": "ZmVsBszGGSZywLq4Jv_HD",
	"text-link": "_3jRqFMhjPX2pyp3hZJFwYg"
};

/***/ }),

/***/ "./src/components/CertificateDropZone/index.js":
/*!*****************************************************!*\
  !*** ./src/components/CertificateDropZone/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CertificateDropZoneContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CertificateDropZoneContainer */ "./src/components/CertificateDropZone/CertificateDropZoneContainer.js");

/* harmony default export */ __webpack_exports__["default"] = (_CertificateDropZoneContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/HomePageContent/AboutImages.js":
/*!*******************************************************!*\
  !*** ./src/components/HomePageContent/AboutImages.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/HomePageContent/AboutImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint react/display-name: 0 */

const aboutImages = {
  valid: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "73.4",
    height: "83.2",
    viewBox: "0 0 73.4 83.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "View"), __jsx("path", {
    d: "M69.29,65.81a9.25,9.25,0,0,0,4.11-7.13V23.47l-.06-.22s-.52-1.18-.69-1.55l-.08-.15c-.08-.17-.15-.31-.22-.44-.16-.28-.33-.56-.51-.83l-.08-.11c-.08-.12-.16-.24-.25-.35l-.14-.18-.14-.17c-.09-.1-.17-.2-.26-.29L70.79,19a3.19,3.19,0,0,0-.26-.26l-.08-.08-.31-.26-.08-.07c-.11-.09-.22-.18-.34-.26L69.65,18c-.14-.09-.25-.17-.36-.23L40.08,1a9.23,9.23,0,0,0-8.23,0L4.11,17.42A9.25,9.25,0,0,0,0,24.55V58.69c0,2.52,1.78,5,3.74,6.41.14.1.26.17.36.23L33.32,82.27a9.3,9.3,0,0,0,8.23,0Z",
    transform: "translate(0 -0.03)",
    fill: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("path", {
    d: "M66.07,63.6a8.41,8.41,0,0,0,3.73-6.45V24.7c.08-1-1.7-3.36-2.68-3.77l-.27-.24-.08-.06c-.1-.08-.59-.38-.7-.44L39.61,4.86a8.41,8.41,0,0,0-7.45,0L7,19.77a8.36,8.36,0,0,0-3.73,6.46V56.78a6.41,6.41,0,0,0,.38,2.85,9.57,9.57,0,0,0,3,3.48L33.5,78.51a8.41,8.41,0,0,0,7.45,0Z",
    transform: "translate(0 -0.03)",
    fill: "#fff",
    opacity: "0.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("path", {
    d: "M47.43,62.85H26.55a1.46,1.46,0,0,1-1.46-1.46V27.1a1.48,1.48,0,0,1,1.46-1.46H53.81a1.46,1.46,0,0,1,1.46,1.46V56.23",
    transform: "translate(0 -0.03)",
    opacity: "0.23",
    fill: "url(#b)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("path", {
    d: "M43.52,59.53H22.64a1.47,1.47,0,0,1-1.46-1.45V23.79a1.46,1.46,0,0,1,1.46-1.46H49.9a1.46,1.46,0,0,1,1.46,1.46V52.91",
    transform: "translate(0 -0.03)",
    fill: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: "3",
    stroke: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("path", {
    d: "M29.61,30.55H43M29.61,38.77H43",
    transform: "translate(0 -0.03)",
    fill: "none",
    strokeMiterlimit: "10",
    strokeWidth: "3",
    stroke: "url(#c)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))),
  genuine: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "73.41",
    height: "83.2",
    viewBox: "0 0 73.41 83.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Check"), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("path", {
    d: "M69.29,65.81a9.25,9.25,0,0,0,4.11-7.13V24.4a8.32,8.32,0,0,0-1.65-4.26C70,17.65,66.64,16.27,64,14.77L52.76,8.29,40.08,1a9.23,9.23,0,0,0-8.23,0L4.11,17.42A9.25,9.25,0,0,0,0,24.55V58.28a5.39,5.39,0,0,0,.05,1.27A11.4,11.4,0,0,0,1.1,62.11a8.08,8.08,0,0,0,3,3.22L33.32,82.27a9.3,9.3,0,0,0,8.23,0Z",
    transform: "translate(0.01 -0.03)",
    fill: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("path", {
    d: "M66,63.55a9,9,0,0,0,2.9-3.2,12.76,12.76,0,0,0,.88-5.7V28.21a10.45,10.45,0,0,0-.93-5.3,10.41,10.41,0,0,0-4.09-3.44L41.7,6a12.76,12.76,0,0,0-5-2c-2.62-.24-5.09,1.15-7.35,2.49L9.69,18.14C7.47,19.46,5.12,20.91,4,23.25a12.93,12.93,0,0,0-.78,5.43V55.31A11.64,11.64,0,0,0,3.9,60a9,9,0,0,0,4.18,4c2,1.09,3.95,2.17,5.92,3.31l13.74,7.93,3,1.74c2.24,1.3,4.68,2.63,7.25,2.38a12.74,12.74,0,0,0,5-2L63.55,65.13C64.38,64.64,65.24,64.12,66,63.55Z",
    transform: "translate(0.01 -0.03)",
    fill: "#fff",
    opacity: "0.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("path", {
    d: "M55,52.38l3.17-18a2.23,2.23,0,0,0-1.35-2.47l-15.5-6.42a2.26,2.26,0,0,0-1.73,0L24.31,31.91A2.25,2.25,0,0,0,23,34.32l3.19,21.21A2.29,2.29,0,0,0,27.1,57l12.72,9.08A2.25,2.25,0,0,0,42.49,66l8.81-7",
    transform: "translate(0.01 -0.03)",
    opacity: "0.23",
    fill: "url(#b)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("path", {
    d: "M50.57,49l3-17.2a2.16,2.16,0,0,0-1.29-2.36l-14.8-6.09a2.15,2.15,0,0,0-1.65,0L21.25,29.49A2.14,2.14,0,0,0,20,31.78L23,52a2.14,2.14,0,0,0,.88,1.43L36,62.13a2.18,2.18,0,0,0,2.59-.07L47,55.34",
    transform: "translate(0.01 -0.03)",
    fill: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: "3",
    stroke: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "30.11 43.87 35.4 48.24 45.47 34.42",
    fill: "none",
    strokeMiterlimit: "10",
    strokeWidth: "3",
    stroke: "url(#c)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })))),
  institution: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "73.4",
    height: "83.15",
    viewBox: "0 0 73.4 83.15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "a",
    x1: "36.7",
    y1: "83.18",
    x2: "36.7",
    y2: "0.03",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "b",
    x1: "39.02",
    y1: "59",
    x2: "39.02",
    y2: "28.81",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00a8d4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#007aa9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "c",
    x1: "36.7",
    y1: "27.48",
    x2: "36.7",
    y2: "63.6",
    gradientTransform: "matrix(1, 0, 0, -1, 0, 85)",
    xlinkHref: "#a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "Verify"), __jsx("path", {
    d: "M69.3,65.8a9.25,9.25,0,0,0,4.1-7.1V25a6.83,6.83,0,0,0-.7-3.2,9.4,9.4,0,0,0-2.5-3.4l-.1-.1-.3-.3h-.1a.52.52,0,0,0-.4-.2L40.1,1a9.11,9.11,0,0,0-8.2,0L4.1,17.4A9.41,9.41,0,0,0,0,24.5V58.6a8.39,8.39,0,0,0,4.2,6.7c.5.3,1,.6,1.4.8,5.4,3.1,10.8,6.3,16.2,9.4,2.7,1.6,5.4,3.1,8.1,4.7,1.1.6,2.2,1.4,3.4,2a9.11,9.11,0,0,0,8.2,0Z",
    transform: "translate(0 -0.03)",
    fill: "url(#a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx("path", {
    d: "M66.1,63.6a8,8,0,0,0,3.7-6.5V26.5a13.33,13.33,0,0,0,0-2c-.7-3.3-4.7-4.9-7.3-6.5-3.9-2.3-7.9-4.5-11.8-6.8C47,9.1,43.4,6.7,39.6,4.9a8.06,8.06,0,0,0-7.4,0L7,19.8a8.16,8.16,0,0,0-3.7,6.5v31h0v.9c0,2,1.7,4,3.4,5L33.5,78.6a8.26,8.26,0,0,0,7.5,0Z",
    transform: "translate(0 -0.03)",
    fill: "#fff",
    opacity: "0.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx("path", {
    d: "M55.9,59.81H26a1.86,1.86,0,0,1-1.86-1.87V55A1.87,1.87,0,0,1,26,53.1L39.25,36.2l9.28-6.66,8.54,4.39a1.13,1.13,0,0,1,.79,1.38c-.11.85-.92,1-1.9.89L55.9,53.1A1.87,1.87,0,0,1,57.77,55v3A1.87,1.87,0,0,1,55.9,59.81Z",
    transform: "translate(0 -0.03)",
    opacity: "0.23",
    fill: "url(#b)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), " ", __jsx("rect", {
    x: "23",
    y: "29.77",
    width: "28.5",
    height: "26.2",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }), __jsx("path", {
    d: "M52.1,30.7,37.8,23.2a2.55,2.55,0,0,0-2.4,0L21.3,30.7c-.8.4-.6,1.9.3,1.9H51.8C52.7,32.7,52.9,31.1,52.1,30.7ZM23,34.1V51m7-16.9V51M44,34.1V51m7-16.9V51M37,34.1V51m5,5H22.6a.91.91,0,0,1-1-.8V52a.89.89,0,0,1,1-.8H51.5a1.08,1.08,0,0,1,1,.8v3.2a.89.89,0,0,1-1,.8H48.6",
    transform: "translate(0 -0.03)",
    fill: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: "3",
    stroke: "url(#c)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }))),
  one: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "89",
    height: "98.6",
    viewBox: "0 0 89 98.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "onea",
    x1: "-246.82",
    y1: "341.11",
    x2: "-246.82",
    y2: "342.11",
    gradientTransform: "matrix(68.19, 0, 0, -85.18, 16884.7, 29147.43)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "oneb",
    x1: "-246.78",
    y1: "341.02",
    x2: "-246.78",
    y2: "342.1",
    gradientTransform: "matrix(67.38, 0, 0, -83.57, 16678.54, 28588.14)",
    xlinkHref: "#onea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "onec",
    x1: "-243.7",
    y1: "327.06",
    x2: "-243.7",
    y2: "328.42",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 9042.42, 4839.36)",
    xlinkHref: "#onea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, "Verify"), __jsx("path", {
    d: "M71.22,92h-47a3.49,3.49,0,0,1-3.38-3.43V10.26a3.49,3.49,0,0,1,3.38-3.44H85.62A3.49,3.49,0,0,1,89,10.26V76.89",
    transform: "translate(0 -0.4)",
    opacity: "0.15",
    fill: "url(#onea)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }), __jsx("path", {
    d: "M65.82,85.57H19.34A3.3,3.3,0,0,1,16,82.2V5.37A3.44,3.44,0,0,1,19.34,2H80.05a3.43,3.43,0,0,1,3.33,3.37V70.74",
    transform: "translate(0 -0.4)",
    fill: "none",
    strokeWidth: "3.2",
    stroke: "url(#oneb)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }), __jsx("path", {
    d: "M31.24,21.29h36.9M31.24,36h36.9",
    transform: "translate(0 -0.4)",
    fill: "none",
    strokeWidth: "3.2",
    stroke: "url(#onec)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }), __jsx("path", {
    d: "M3.2,77.13a2.4,2.4,0,0,0-2.4,2.4V95.8a2.39,2.39,0,0,0,2.4,2.4H24.8a2.39,2.39,0,0,0,2.4-2.4V79.53a2.4,2.4,0,0,0-2.4-2.4H21.21l0-.77C21,69.69,18.61,66.54,14,66.54s-7,3.15-7.21,9.82l0,.77Z",
    transform: "translate(0 -0.4)",
    fill: "#f93",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }), __jsx("path", {
    d: "M14,69.86q3.6,0,3.6,7.28H10.4Q10.4,69.87,14,69.86Z",
    transform: "translate(0 -0.4)",
    fill: "#fff",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }))),
  two: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "129",
    height: "137",
    viewBox: "0 0 129 137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "twoa",
    x1: "-226.66",
    y1: "360.27",
    x2: "-226.66",
    y2: "360.86",
    gradientTransform: "matrix(60.1, 0, 0, -74.51, 13689.33, 26928.74)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00a8d4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#007aa9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "twob",
    x1: "-223.65",
    y1: "348.63",
    x2: "-223.65",
    y2: "350.19",
    gradientTransform: "matrix(33.7, 0, 0, -15.8, 7606.35, 5572.12)",
    xlinkHref: "#twoa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "twoc",
    x1: "-226.56",
    y1: "360.53",
    x2: "-227.03",
    y2: "361.25",
    gradientTransform: "matrix(61.7, 0, 0, -84.92, 14062.36, 30722.18)",
    xlinkHref: "#twoa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, "two"), __jsx("path", {
    d: "M0,0H129V137H0Z",
    fill: "#edf2f7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, __jsx("path", {
    d: "M39.26,32.85a1.59,1.59,0,0,0-1.6,1.6v71.31a1.6,1.6,0,0,0,1.6,1.6H96.15a1.6,1.6,0,0,0,1.6-1.6V34.45a1.59,1.59,0,0,0-1.6-1.6Z",
    fill: "#fff",
    strokeWidth: "3.2",
    stroke: "url(#twoa)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }), __jsx("path", {
    d: "M51.67,48.33H85.38v3H51.67Zm0,12.81H85.38v3H51.67Z",
    fill: "url(#twob)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  })), __jsx("path", {
    d: "M95.21,121.78l11.56-8.71V89.73a.8.8,0,0,0-.8-.8H29.84a.8.8,0,0,0-.8.8V121a.8.8,0,0,0,.8.8Z",
    fill: "#fff",
    stroke: "#6f6f6f",
    strokeWidth: "3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, __jsx("path", {
    d: "M78.72,101.68a2.39,2.39,0,0,0-2.4,2.4V113a2.39,2.39,0,0,0,2.4,2.4H91.55A2.4,2.4,0,0,0,94,113v-8.89a2.4,2.4,0,0,0-2.4-2.4H89.84l0-.77c-.14-4.38-1.68-6.37-4.69-6.37s-4.55,2-4.7,6.37l0,.77Z",
    fill: "#f93",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }), __jsx("path", {
    d: "M85.13,96.14q2.4,0,2.4,4.81h-4.8Q82.73,96.14,85.13,96.14Z",
    fill: "#fff",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }, __jsx("text", {
    transform: "translate(60.89 21.81)",
    fontSize: "12.8",
    fill: "#324353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, "blockchain")))),
  three: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "246.6",
    height: "91.6",
    viewBox: "0 0 246.6 91.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "threea",
    x1: "-168.98",
    y1: "338.08",
    x2: "-168.98",
    y2: "339.08",
    gradientTransform: "matrix(68.19, 0, 0, -85.18, 11562.95, 28888.89)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "threeb",
    x1: "-168.95",
    y1: "337.98",
    x2: "-168.95",
    y2: "339.06",
    gradientTransform: "matrix(67.38, 0, 0, -83.57, 11420.15, 28334.43)",
    xlinkHref: "#threea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "threec",
    x1: "-166.84",
    y1: "323.86",
    x2: "-166.84",
    y2: "325.21",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 6192.23, 4792.33)",
    xlinkHref: "#threea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "threed",
    x1: "-168.76",
    y1: "338.29",
    x2: "-169.23",
    y2: "338.91",
    gradientTransform: "matrix(68.19, 0, 0, -85.18, 11734.95, 28888.89)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00a8d4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#007aa9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "threee",
    x1: "-169.34",
    y1: "338.23",
    x2: "-168.84",
    y2: "339",
    gradientTransform: "matrix(67.38, 0, 0, -83.57, 11592.15, 28334.43)",
    xlinkHref: "#threed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "threef",
    x1: "-166.84",
    y1: "324.04",
    x2: "-166.84",
    y2: "325.04",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 6364.23, 4792.33)",
    xlinkHref: "#threed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, "Validate"), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }, __jsx("g", {
    opacity: "0.58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: undefined
  }, __jsx("path", {
    d: "M89.4,17h69.2",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "92.58 13.01 88.6 16.69 92.58 20.37",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "154.62 13.01 158.6 16.69 154.62 20.37",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  })), __jsx("g", {
    opacity: "0.58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("path", {
    d: "M89.4,31.48h69.2",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "92.58 27.46 88.6 31.14 92.58 34.82",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "154.62 27.46 158.6 31.14 154.62 34.82",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  })), __jsx("g", {
    opacity: "0.58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: undefined
  }, __jsx("path", {
    d: "M89.4,46.73h69.2",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "92.58 42.72 88.6 46.4 92.58 50.08",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "154.62 42.72 158.6 46.4 154.62 50.08",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: undefined
  })), __jsx("g", {
    opacity: "0.58",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: undefined
  }, __jsx("path", {
    d: "M89.4,60.39h69.2",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "92.58 56.37 88.6 59.99 92.58 63.6",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: undefined
  }), __jsx("polyline", {
    points: "154.62 56.37 158.6 59.99 154.62 63.6",
    fill: "none",
    stroke: "#979797",
    strokeLinecap: "square",
    strokeWidth: "0.8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }, __jsx("path", {
    d: "M130.14,12.31,123,19.61a.76.76,0,0,1-1.07,0l-4-4.1a.76.76,0,0,1,0-1.08.74.74,0,0,1,1.06,0l3.5,3.56,6.66-6.77a.75.75,0,0,1,1.06,0A.77.77,0,0,1,130.14,12.31Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    stroke: "#09a63b",
    strokeWidth: "0.64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }), __jsx("path", {
    d: "M130.14,26.76,123,34.06a.74.74,0,0,1-1.07,0l-4-4.1a.76.76,0,0,1,0-1.08.74.74,0,0,1,1.06,0l3.5,3.56,6.66-6.76a.74.74,0,0,1,1.06,0A.76.76,0,0,1,130.14,26.76Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    stroke: "#09a63b",
    strokeWidth: "0.64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: undefined
  }), __jsx("path", {
    d: "M130.14,41.22,123,48.52a.76.76,0,0,1-1.07,0l-4-4.1a.76.76,0,0,1,0-1.08.74.74,0,0,1,1.06,0l3.5,3.55,6.66-6.76a.74.74,0,0,1,1.06,0A.77.77,0,0,1,130.14,41.22Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    stroke: "#09a63b",
    strokeWidth: "0.64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: undefined
  }), __jsx("path", {
    d: "M130.14,54.87,123,62.17a.76.76,0,0,1-1.07,0l-4-4.1a.76.76,0,0,1,0-1.08.74.74,0,0,1,1.06,0l3.5,3.56,6.66-6.77a.75.75,0,0,1,1.06,0A.77.77,0,0,1,130.14,54.87Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    stroke: "#09a63b",
    strokeWidth: "0.64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: undefined
  }, __jsx("path", {
    d: "M57.22,92h-47a3.49,3.49,0,0,1-3.38-3.43V10.26a3.49,3.49,0,0,1,3.38-3.44H71.62A3.49,3.49,0,0,1,75,10.26V76.89",
    transform: "translate(-0.4 -0.4)",
    opacity: "0.15",
    fill: "url(#threea)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: undefined
  }), __jsx("path", {
    d: "M51.82,85.57H5.34A3.3,3.3,0,0,1,2,82.2V5.37A3.44,3.44,0,0,1,5.34,2H66.05a3.43,3.43,0,0,1,3.33,3.37V70.74",
    transform: "translate(-0.4 -0.4)",
    fill: "#fff",
    strokeWidth: "3.2",
    stroke: "url(#threeb)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: undefined
  }), __jsx("path", {
    d: "M17.24,21.29h36.9M17.24,36h36.9",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    strokeWidth: "3.2",
    stroke: "url(#threec)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: undefined
  }, __jsx("path", {
    d: "M229.22,92h-47a3.49,3.49,0,0,1-3.38-3.43V10.26a3.49,3.49,0,0,1,3.38-3.44h61.43A3.49,3.49,0,0,1,247,10.26V76.89",
    transform: "translate(-0.4 -0.4)",
    opacity: "0.15",
    fill: "url(#threed)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: undefined
  }), __jsx("path", {
    d: "M223.82,85.57H177.34A3.3,3.3,0,0,1,174,82.2V5.37A3.44,3.44,0,0,1,177.34,2h60.71a3.43,3.43,0,0,1,3.33,3.37V70.74",
    transform: "translate(-0.4 -0.4)",
    fill: "#fff",
    strokeWidth: "3.2",
    stroke: "url(#threee)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: undefined
  }), __jsx("path", {
    d: "M189.24,21.29h36.9M189.24,36h36.9",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    strokeWidth: "3.2",
    stroke: "url(#threef)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: undefined
  })))),
  four: () => __jsx("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "89.6",
    height: "109.6",
    viewBox: "0 0 89.6 109.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: undefined
  }, "Validated"), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: undefined
  }, __jsx("path", {
    d: "M68.52,110H11.68a4.21,4.21,0,0,1-4.08-4.13V11.73A4.21,4.21,0,0,1,11.68,7.6H85.92A4.21,4.21,0,0,1,90,11.73v80.1",
    transform: "translate(-0.4 -0.4)",
    fill: "#b3dbc0",
    opacity: "0.15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: undefined
  }), __jsx("path", {
    d: "M61.73,102.8H6a4,4,0,0,1-4-4.06V6.06A4.14,4.14,0,0,1,6,2H78.8a4.14,4.14,0,0,1,4,4.06V84.92",
    transform: "translate(-0.4 -0.4)",
    fill: "none",
    stroke: "#09a63b",
    strokeWidth: "3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: undefined
  }, __jsx("path", {
    d: "M63.43,65.39A5.68,5.68,0,0,0,66,61V39.35l-.06-.12s-.32-.74-.44-.92l-.06-.06c-.07-.12-.13-.19-.13-.25a3.48,3.48,0,0,0-.31-.49l-.07-.06a.32.32,0,0,1-.12-.25l-.06-.12L64.68,37l-.18-.18-.13-.13-.19-.18-.06-.06-.19-.19-.06-.06L63.68,36h-.06a.34.34,0,0,0-.25-.13L45.13,25.6a5.8,5.8,0,0,0-5.14,0L22.57,35.67A5.78,5.78,0,0,0,20,40V61a5.32,5.32,0,0,0,2.32,3.93.48.48,0,0,0,.25.12L40.87,75.4a5.8,5.8,0,0,0,5.14,0Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: undefined
  }), __jsx("path", {
    d: "M60.57,63.15a4.69,4.69,0,0,0,2.2-3.82V40.27A3.54,3.54,0,0,0,61.16,38L61,37.92l-.06-.05a1.5,1.5,0,0,0-.42-.24l-15.7-8.91a4.94,4.94,0,0,0-4.46,0L25.43,37.46a4.74,4.74,0,0,0-2.2,3.81V59.16a3.79,3.79,0,0,0,.24,1.64,5.88,5.88,0,0,0,1.78,2.05l15.94,9a5,5,0,0,0,4.45,0Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#fff",
    opacity: "0.9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: undefined
  }), __jsx("path", {
    d: "M54.31,45.57,41.55,58.08a1.34,1.34,0,0,1-1.89,0l-7.16-7a1.29,1.29,0,0,1,0-1.86,1.36,1.36,0,0,1,1.89,0l6.22,6.1L52.42,43.71a1.36,1.36,0,0,1,1.89,0A1.3,1.3,0,0,1,54.31,45.57Z",
    transform: "translate(-0.4 -0.4)",
    fill: "#09a63b",
    stroke: "#09a63b",
    strokeWidth: "0.64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: undefined
  })))),
  onetwo: () => __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "224.84",
    height: "115.35",
    viewBox: "0 0 224.84 115.35",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: undefined
  }, __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711
    },
    __self: undefined
  }, __jsx("linearGradient", {
    id: "onetwoa",
    x1: "-240.66",
    y1: "362.57",
    x2: "-241.13",
    y2: "363.28",
    gradientTransform: "matrix(61.7, 0, 0, -84.92, 15040.39, 30877.61)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#00a8d4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#007aa9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "onetwob",
    x1: "-240.7",
    y1: "362.34",
    x2: "-240.7",
    y2: "362.93",
    gradientTransform: "matrix(60.1, 0, 0, -74.51, 14641.61, 27065.34)",
    xlinkHref: "#onetwoa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "onetwoc",
    x1: "-236.08",
    y1: "351.67",
    x2: "-236.08",
    y2: "353.23",
    gradientTransform: "matrix(33.7, 0, 0, -15.8, 8133.33, 5602.51)",
    xlinkHref: "#onetwoa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "onetwod",
    x1: "-243.05",
    y1: "362.1",
    x2: "-243.05",
    y2: "363",
    gradientTransform: "matrix(68.19, 0, 0, -85.18, 16623.59, 30940.71)",
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: undefined
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#faa94e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751
    },
    __self: undefined
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f47d4d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: undefined
  })), __jsx("linearGradient", {
    id: "onetwoe",
    x1: "-243",
    y1: "361.96",
    x2: "-243",
    y2: "363.02",
    gradientTransform: "matrix(67.38, 0, 0, -83.57, 16420.54, 30347.98)",
    xlinkHref: "#onetwod",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: undefined
  }), __jsx("linearGradient", {
    id: "onetwof",
    x1: "-240.01",
    y1: "348.51",
    x2: "-240.01",
    y2: "349.83",
    gradientTransform: "matrix(36.9, 0, 0, -14.68, 8902.89, 5165.61)",
    xlinkHref: "#onetwod",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: undefined
  })), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: undefined
  }, "Match"), __jsx("polygon", {
    points: "224.84 86.45 174.93 115.35 124.95 86.57 124.88 28.9 174.79 0 224.78 28.78 224.84 86.45",
    fill: "#edf2f7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: undefined
  }, __jsx("path", {
    d: "M195.34,104.19H152.79a3.34,3.34,0,0,1-3.06-3.43V22.69a3.34,3.34,0,0,1,3.06-3.42h55.58a3.34,3.34,0,0,1,3.06,3.42V89.12",
    transform: "translate(-1.4 -0.92)",
    opacity: "0.15",
    fill: "url(#onetwoa)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: undefined
  }), __jsx("path", {
    d: "M147.32,15.26a1.6,1.6,0,0,0-1.6,1.6V88.17a1.6,1.6,0,0,0,1.6,1.6h56.9a1.6,1.6,0,0,0,1.6-1.6V16.86a1.59,1.59,0,0,0-1.6-1.6Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#fff",
    strokeWidth: "3.2",
    stroke: "url(#onetwob)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: undefined
  }), __jsx("path", {
    d: "M159.74,30.74h33.71v3H159.74Zm0,12.81h33.71v3H159.74Z",
    transform: "translate(-1.4 -0.92)",
    fill: "url(#onetwoc)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: undefined
  })), __jsx("path", {
    d: "M203.28,104.19l11.56-8.71V72.14a.8.8,0,0,0-.8-.8H137.91a.8.8,0,0,0-.8.8v31.25a.8.8,0,0,0,.8.8Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#fff",
    stroke: "#6f6f6f",
    strokeWidth: "3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: undefined
  }, __jsx("path", {
    d: "M186.78,84.09a2.41,2.41,0,0,0-2.4,2.4v8.89a2.4,2.4,0,0,0,2.4,2.4h12.83a2.39,2.39,0,0,0,2.4-2.4V86.49a2.4,2.4,0,0,0-2.4-2.4h-1.7l0-.77c-.14-4.38-1.68-6.37-4.69-6.37s-4.55,2-4.7,6.37l0,.77Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#f93",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: undefined
  }), __jsx("path", {
    d: "M193.2,78.55q2.4,0,2.4,4.81h-4.8Q190.8,78.55,193.2,78.55Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#fff",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: undefined
  }, __jsx("path", {
    d: "M65.63,97.36H23.26a3.14,3.14,0,0,1-3-3.09V23.74a3.15,3.15,0,0,1,3-3.1H78.6a3.15,3.15,0,0,1,3,3.1v60",
    transform: "translate(-1.4 -0.92)",
    opacity: "0.15",
    fill: "url(#onetwod)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: undefined
  }), __jsx("path", {
    d: "M60.76,91.57H18.89a3,3,0,0,1-3-3V19.34a3.1,3.1,0,0,1,3-3H73.58a3.1,3.1,0,0,1,3,3V78.22",
    transform: "translate(-1.4 -0.92)",
    fill: "#fff",
    strokeWidth: "3.2",
    stroke: "url(#onetwoe)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: undefined
  }), __jsx("path", {
    d: "M29.62,33.67H62.85M29.62,46.89H62.85",
    transform: "translate(-1.4 -0.92)",
    fill: "none",
    strokeWidth: "3.2",
    stroke: "url(#onetwof)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: undefined
  }, __jsx("path", {
    d: "M4.36,78.64A2.16,2.16,0,0,0,2.2,80.8V95.45a2.16,2.16,0,0,0,2.16,2.16H23.81A2.16,2.16,0,0,0,26,95.45V80.8a2.17,2.17,0,0,0-2.17-2.16H20.58l0-.7c-.19-6-2.32-8.84-6.47-8.84s-6.3,2.83-6.49,8.84l0,.7Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#f93",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: undefined
  }), __jsx("path", {
    d: "M14.09,72.09c2.16,0,3.24,2.18,3.24,6.56H10.84C10.84,74.27,11.92,72.09,14.09,72.09Z",
    transform: "translate(-1.4 -0.92)",
    fill: "#fff",
    stroke: "#f93",
    strokeWidth: "1.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853
    },
    __self: undefined
  })), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: undefined
  }, __jsx("line", {
    x1: "18.87",
    y1: "82.44",
    x2: "187.1",
    y2: "82.39",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: undefined
  }, __jsx("line", {
    x1: "18.87",
    y1: "82.44",
    x2: "20.87",
    y2: "82.44",
    fill: "none",
    stroke: "#324353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: undefined
  }), __jsx("line", {
    x1: "24.87",
    y1: "82.44",
    x2: "183.1",
    y2: "82.4",
    fill: "none",
    stroke: "#324353",
    strokeDasharray: "4.01 4.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872
    },
    __self: undefined
  }), __jsx("line", {
    x1: "185.1",
    y1: "82.4",
    x2: "187.1",
    y2: "82.39",
    fill: "none",
    stroke: "#324353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891
    },
    __self: undefined
  }, __jsx("line", {
    x1: "75.18",
    y1: "29.81",
    x2: "144.33",
    y2: "29.81",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: undefined
  }), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893
    },
    __self: undefined
  }, __jsx("line", {
    x1: "75.18",
    y1: "29.81",
    x2: "77.18",
    y2: "29.81",
    fill: "none",
    stroke: "#324353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: undefined
  }), __jsx("line", {
    x1: "81.02",
    y1: "29.81",
    x2: "140.41",
    y2: "29.81",
    fill: "none",
    stroke: "#324353",
    strokeDasharray: "3.83 3.83",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: undefined
  }), __jsx("line", {
    x1: "142.33",
    y1: "29.81",
    x2: "144.33",
    y2: "29.81",
    fill: "none",
    stroke: "#324353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911
    },
    __self: undefined
  })))))
};
/* harmony default export */ __webpack_exports__["default"] = (aboutImages);

/***/ }),

/***/ "./src/components/HomePageContent/AboutSection.js":
/*!********************************************************!*\
  !*** ./src/components/HomePageContent/AboutSection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutSection.scss */ "./src/components/HomePageContent/aboutSection.scss");
/* harmony import */ var _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aboutSection_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AboutImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutImages */ "./src/components/HomePageContent/AboutImages.js");
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/HomePageContent/AboutSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BenefitsSection = () => __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "What we can help you do"), __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-4 col-sm-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefits,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, _AboutImages__WEBPACK_IMPORTED_MODULE_2__["default"].valid(), __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-text"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("h4", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-header"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "View"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Easy way to view your certificate")))), __jsx("div", {
  className: "col-lg-4 col-sm-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefits,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, _AboutImages__WEBPACK_IMPORTED_MODULE_2__["default"].genuine(), __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-text"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("h4", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-header"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Check"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Make sure it has not been tampered with")))), __jsx("div", {
  className: "col-lg-4 col-sm-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefits,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, _AboutImages__WEBPACK_IMPORTED_MODULE_2__["default"].institution(), __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-text"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("h4", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["benefit-header"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Verify"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Find out if it is from a recognised institution"))))));

const HowItWorks = () => {
  const sections = [{
    key: "onetwo",
    text: "When an OpenCerts certificate is created, a unique digital code is tagged to it. This code, together with condensed information from the certificate, is stored on the blockchain."
  }, {
    key: "three",
    text: "When you open the .opencert file on this site, its contents will be compared with what was stored on the blockchain."
  }, {
    key: "four",
    text: "We'll check if the contents match and if the certificate comes from a recognised insitution.\n\nThis way, you'll know if the certificate is valid when you try to view it."
  }];
  const section = sections.map((item, i) => __jsx("div", {
    key: i,
    id: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a[item.key],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, _AboutImages__WEBPACK_IMPORTED_MODULE_2__["default"][item.key](), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, item.text)));
  return __jsx("div", {
    className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.howitworks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("div", {
    className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a["hiw-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, section));
};

const AboutSection = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("div", {
  className: "row bg-light",
  id: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.benefits,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx(BenefitsSection, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}))), __jsx("div", {
  className: "row bg-light",
  id: "how-it-works",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("div", {
  className: _aboutSection_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, "How it works"), __jsx(HowItWorks, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ }),

/***/ "./src/components/HomePageContent/DropZoneSection.js":
/*!***********************************************************!*\
  !*** ./src/components/HomePageContent/DropZoneSection.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CertificateDropZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CertificateDropZone */ "./src/components/CertificateDropZone/index.js");
/* harmony import */ var _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropZoneSection.scss */ "./src/components/HomePageContent/dropZoneSection.scss");
/* harmony import */ var _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/logger */ "./src/utils/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _Main_Demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Main-Demo */ "./src/components/HomePageContent/Main-Demo.json");
var _Main_Demo__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Main-Demo */ "./src/components/HomePageContent/Main-Demo.json", 1);
/* harmony import */ var _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Ropsten-Demo */ "./src/components/HomePageContent/Ropsten-Demo.json");
var _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Ropsten-Demo */ "./src/components/HomePageContent/Ropsten-Demo.json", 1);
/* harmony import */ var _Analytics_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Analytics/index */ "./src/components/Analytics/index.js");


var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/HomePageContent/DropZoneSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











const DEMO_CERT = _config__WEBPACK_IMPORTED_MODULE_9__["IS_MAINNET"] ? _Main_Demo__WEBPACK_IMPORTED_MODULE_10__ : _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_11__;
const DEMO_CONTENT_KEY = "DEMO_CONTENT";

function demoCount() {
  Object(_Analytics_index__WEBPACK_IMPORTED_MODULE_12__["analyticsEvent"])(window, {
    category: "USER_INTERACTION",
    action: "DEMO_CERTIFICATE_VIEWED"
  });
}

const DraggableDemoCertificate = () => __jsx("div", {
  className: "d-none d-lg-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.pulse,
  draggable: "true",
  onDragStart: e => e.dataTransfer.setData(DEMO_CONTENT_KEY, true),
  onDragEnd: demoCount,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  href: `data:text/plain;,${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(DEMO_CERT, null, 2)}`,
  download: "demo.opencert",
  rel: "noindex nofollow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("img", {
  style: {
    cursor: "grabbing"
  },
  src: "/static/images/dropzone/cert.png",
  width: "100%",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
})))), __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/images/dropzone/arrow.png",
  width: "100%",
  draggable: "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("span", {
  style: {
    textAlign: "justify",
    color: "#ff9933"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "Drag me over here to see a demo certificate and other features"))));

const MobileDemoCertificate = () => __jsx("div", {
  className: "d-block d-lg-none d-xl-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("a", {
  className: "btn btn-primary btn-lg",
  role: "button",
  draggable: "false",
  id: "demoClick",
  style: {
    background: "#28a745",
    border: "none",
    cursor: "pointer"
  },
  onClick: demoCount,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Click me for a demo certificate!"));

class DropZoneSection extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "removeListener", () => Object(_utils_logger__WEBPACK_IMPORTED_MODULE_8__["trace"])("drop listener removed"));
  }

  async componentDidMount() {
    let API_LOCATION;
    const PUBLIC_ROUTE = 'public/cert';
    const url = window.location.href;

    try {
      const query = url.split('?')[1];
      const [id, network] = query.split('#'); // If there is a cert id to look up

      if (query) {
        // Network IDs: undefined=prod, 2=staging, dev=local
        if (!network) {
          API_LOCATION = 'https://certs.api.convergence.tech:3002';
        } else if (network == 2) {
          API_LOCATION = 'https://trybe.staging.convergence.tech/api/';
        } else if (network == 'dev') {
          API_LOCATION = 'http://localhost:3002';
        }

        const API_URL = `${API_LOCATION}/${PUBLIC_ROUTE}`;
        const certString = await fetch(`${API_URL}/${id}`);
        const cert = certString ? JSON.parse((await certString.json()).cert) : null;

        if (cert) {
          this.props.updateCertificate(cert);
        }
      }
    } catch (err) {
      console.log(err);
    }

    document.getElementById("demoDrop").addEventListener("drop", e => {
      if (e.dataTransfer.getData(DEMO_CONTENT_KEY)) {
        this.props.updateCertificate(DEMO_CERT);
      }
    });
    document.getElementById("demoClick").addEventListener("click", () => {
      this.props.updateCertificate(DEMO_CERT);
    });
  }

  componentWillUnmount() {
    document.getElementById("demoDrop", "demoClick").removeEventListener("drop", () => this.removeListener());
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return __jsx("div", {
      className: "row p-5 bg-brand-dark text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-5 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_6___default.a.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "An easy way to check and verify your certificates"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Whether you're a student or an employer, Convergence lets you verify the certificates you have of anyone from any institution. All in one place."), __jsx(DraggableDemoCertificate, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), __jsx(MobileDemoCertificate, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-7 col-md-12 col-sm-12",
      id: "demoDrop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx(_CertificateDropZone__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }))));
  }

}

const mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_7__["updateCertificate"])(payload))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(DropZoneSection));
DropZoneSection.propTypes = {
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

/***/ }),

/***/ "./src/components/HomePageContent/Main-Demo.json":
/*!*******************************************************!*\
  !*** ./src/components/HomePageContent/Main-Demo.json ***!
  \*******************************************************/
/*! exports provided: schema, data, privacy, signature, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"schema\":\"opencerts/v2.0\",\"data\":{\"id\":\"364999b4-486d-443e-96b8-3aae3eb16794:string:53b75bbe\",\"name\":\"ece7899c-2060-4a90-8afe-1b0305f7651a:string:Govtech Demo Certificate\",\"description\":\"3dc72e61-2ce4-4e44-90ce-9e4ea5e3e109:string:Govtech Demo Certificate\",\"issuedOn\":\"8bf78a87-67a8-43c2-91ca-f25051b4898d:string:2019-05-29T00:00:00+08:00\",\"admissionDate\":\"a8e53a7a-01ec-4b36-9cb3-a15d7e655d78:string:2017-08-01T00:00:00+08:00\",\"graduationDate\":\"ced7652e-ece9-4319-9393-478004525ed0:string:2022-08-01T00:00:00+08:00\",\"$template\":{\"name\":\"9ae67ad8-2e9f-4309-a3fa-b5eea35d6066:string:GOVTECH_DEMO\",\"type\":\"f8b29fb4-614c-4815-970c-3a69d986f30a:string:EMBEDDED_RENDERER\",\"url\":\"a59366a8-09f7-49cd-a7ce-228f64f04fb7:string:https://demo-renderer.opencerts.io\"},\"issuers\":[{\"name\":\"996ac57b-db78-459c-b77a-3eaef5df4504:string:Govtech\",\"url\":\"23ef3d1b-09e0-41b6-84b4-b99c10605c06:string:https://tech.gov.sg\",\"certificateStore\":\"cbcb5069-43ed-4b55-ab46-91ec8f9432e7:string:0x007d40224f6562461633ccfbaffd359ebb2fc9ba\"}],\"recipient\":{\"name\":\"c4ac4a20-27ad-403e-bf4c-1d85ccc099c2:string:Your Name\",\"nric\":\"2f30a86d-b2e2-4e9c-97d6-4ae76efd0376:string:SXXXXXXXY\",\"course\":\"79c62487-9462-45a4-bfb2-f0ed2b48d53c:string:Govtech Demo\"},\"transcript\":[{\"name\":\"15a2c149-d694-4502-b465-f35acc80c8d7:string:Introduction to Programming\",\"grade\":\"4dd3f23d-8ba5-4e13-a9ab-a89196b73c3a:string:A+\",\"courseCredit\":\"891ea249-1f9f-4f9f-935a-b1fbcfdc684b:string:3\",\"courseCode\":\"d3aef81e-fa1d-4099-bb4f-01822855a87f:string:CS 1110\",\"examinationDate\":\"22b08033-f1c4-4823-9122-17b40b51ead8:string:2017-12-01T00:00:00+08:00\",\"semester\":\"7e01cb46-5222-40dc-a79f-5ff802181e62:string:1\"},{\"name\":\"77f9c638-fba4-4bf5-aa90-73f038329886:string:Object Oriented Programming in Java\",\"grade\":\"a4e3e3c5-5840-47c3-acfd-3e6f9acfaef4:string:A+\",\"courseCredit\":\"8007267f-65f9-4396-a3e6-ef1fc5116918:string:4\",\"courseCode\":\"b25611aa-a807-4134-89eb-86a4bc030c81:string:CS 2110\",\"examinationDate\":\"9199ebea-eb76-4b38-9f3d-e5e01726106b:string:2017-12-01T00:00:00+08:00\",\"semester\":\"b3315025-d093-4694-b05a-76722377d692:string:1\"},{\"name\":\"da500ed9-d048-4d01-8136-266bdc0fed62:string:Microeconomics\",\"grade\":\"4f3e8c12-d485-4a65-9b81-cac74891008e:string:A+\",\"courseCredit\":\"ade2548b-4bda-416e-aae1-17d1d22183be:string:4\",\"courseCode\":\"31be4505-b52c-476a-9d2e-60e88d9c5a64:string:ECON 3030\",\"examinationDate\":\"912bf9f9-8b81-4a35-87af-f8113792bfda:string:2018-05-01T00:00:00+08:00\",\"semester\":\"484fce34-f4f4-4533-8a22-0dc534f8a3b8:string:2\"},{\"name\":\"34508506-3165-4944-a14b-667023aab98b:string:Macroeconomics\",\"grade\":\"3ee3926a-fd44-44a7-81fa-30509b0058df:string:A\",\"courseCredit\":\"a87daea5-5e8b-40b1-87f5-20527ac5807b:string:4\",\"courseCode\":\"90d93dd3-c586-488f-9968-618837dad6cc:string:ECON 3040\",\"examinationDate\":\"378fcc06-e763-47b8-9f2e-248a29ac82fe:string:2018-05-01T00:00:00+08:00\",\"semester\":\"aeb21232-1756-42a1-999a-2257bef5da4b:string:2\"},{\"name\":\"d50239be-963e-48d4-ba5f-c9bbc096eb9d:string:Econometrics\",\"grade\":\"cbc52f57-b54a-4a22-90f5-3da13500c099:string:A-\",\"courseCredit\":\"74d5d074-859a-472f-91a6-cd2807ae44a8:string:4\",\"courseCode\":\"a098f8d1-db6c-436d-918b-4c0bbd4d9f1b:string:ECON 3120\",\"examinationDate\":\"46e564b2-12e1-4ee6-b44a-9127130a029c:string:2018-05-01T00:00:00+08:00\",\"semester\":\"25b73bc3-87e9-42d4-8c92-6e6a0f58e962:string:2\"}],\"additionalData\":{\"merit\":\"642253d5-2903-4e9d-907f-3b1c755d9cb0:string:Y\",\"studentId\":\"dd99a0c8-2821-45fc-9130-14bf84313068:string:123456\",\"transcriptId\":\"6d97c844-daf5-4768-851b-9bc43f3bdd8b:string:001\",\"certSignatories\":[{\"signature\":\"7902fe34-c782-4c1d-9960-20f67c5f7d69:string:data:image/png;base64,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\",\"name\":\"2d36ba5a-1a6d-4159-95f6-656f4aa070e2:string:John Demo\",\"position\":\"e4218000-12ae-4605-a969-8b9963e7cc62:string:Dean of Demos\",\"organisation\":\"39502ba4-808c-40d0-8751-95d4de7e64bd:string:Govtech\"}]}},\"privacy\":{},\"signature\":{\"type\":\"SHA3MerkleProof\",\"targetHash\":\"cbd224a72af5e0050bd58ab2264094cbacac0f19f7f430e347cad451ae8c590d\",\"proof\":[],\"merkleRoot\":\"cbd224a72af5e0050bd58ab2264094cbacac0f19f7f430e347cad451ae8c590d\"}}");

/***/ }),

/***/ "./src/components/HomePageContent/PartnersSection.js":
/*!***********************************************************!*\
  !*** ./src/components/HomePageContent/PartnersSection.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partnersPage.scss */ "./src/components/HomePageContent/partnersPage.scss");
/* harmony import */ var _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partnersPage_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_PartnerLogo_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/PartnerLogo.json */ "./src/constants/PartnerLogo.json");
var _constants_PartnerLogo_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../constants/PartnerLogo.json */ "./src/constants/PartnerLogo.json", 1);
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/HomePageContent/PartnersSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CarouselSection = () => {
  const items = _constants_PartnerLogo_json__WEBPACK_IMPORTED_MODULE_2__.map((item, i) => __jsx("div", {
    className: _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a["logo-container"],
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("a", {
    href: item.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    className: "mx-auto",
    src: item.value,
    title: item.name,
    alt: item.name,
    id: _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a[item.key],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }))));
  return __jsx("div", {
    className: "d-flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, items);
};

const PartnerSection = () => __jsx("div", {
  className: "row",
  id: _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.partners,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: _partnersPage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(CarouselSection, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (PartnerSection);

/***/ }),

/***/ "./src/components/HomePageContent/Ropsten-Demo.json":
/*!**********************************************************!*\
  !*** ./src/components/HomePageContent/Ropsten-Demo.json ***!
  \**********************************************************/
/*! exports provided: schema, data, privacy, signature, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"schema\":\"opencerts/v2.0\",\"data\":{\"id\":\"d8482eea-5578-4e6c-9f9c-a1def8a4c2a5:string:53b75bbe\",\"name\":\"ab83db4b-08a2-4c43-9f56-80416427a387:string:Govtech Demo Certificate\",\"description\":\"ffbbe35c-9a02-469d-8afe-f2350eec8a3a:string:Govtech Demo Certificate\",\"issuedOn\":\"1cdd4174-a509-4595-9038-6d48402751e1:string:2019-05-29T00:00:00+08:00\",\"admissionDate\":\"1e045413-af85-4962-bf5a-b7bcd8eacd2d:string:2017-08-01T00:00:00+08:00\",\"graduationDate\":\"ef82c18b-4bb5-4907-aae6-14fb1738a488:string:2022-08-01T00:00:00+08:00\",\"$template\":{\"name\":\"fe355a48-a509-4abf-8348-27f0b9def3c0:string:GOVTECH_DEMO\",\"type\":\"be43387f-293c-4b8d-a7a4-a52e716d5879:string:EMBEDDED_RENDERER\",\"url\":\"40b906d6-7f2d-48be-a8d7-6a0dde457a80:string:https://demo-renderer.opencerts.io\"},\"issuers\":[{\"name\":\"768b0f58-c6df-4ee0-80f2-88a9b087ac79:string:Govtech\",\"url\":\"65dfb5f6-0eca-4d46-9a27-08d8a3f423c0:string:https://tech.gov.sg\",\"certificateStore\":\"c748c31e-0411-49b2-9984-034101c46e48:string:0xdcA6Eea7024151c270b50FcA9E67161119B06BAD\"}],\"recipient\":{\"name\":\"b995805d-19a0-4d60-9840-609b412e6f16:string:Your Name\",\"nric\":\"6140e99e-4a24-4d34-9224-45495a35d395:string:SXXXXXXXY\",\"course\":\"489f30b1-11bf-4582-8f9c-b1c42d090289:string:Govtech Demo\"},\"transcript\":[{\"name\":\"ffd5fe55-62fa-4fa6-8ba1-8036a63eecef:string:Introduction to Programming\",\"grade\":\"af467530-6616-4970-9d66-9e22ec8acf6e:string:A+\",\"courseCredit\":\"29148383-68a5-42fc-a305-884b62ba1de2:string:3\",\"courseCode\":\"f6c448c8-b3f6-4d0b-9c5b-461adfd10f52:string:CS 1110\",\"examinationDate\":\"b3578c22-6129-4064-bc60-f8a429915e13:string:2017-12-01T00:00:00+08:00\",\"semester\":\"5c9ae1c4-05ab-4bc5-b847-395f09fc9772:string:1\"},{\"name\":\"201593a9-5ccc-4d25-a599-95235f35cf68:string:Object Oriented Programming in Java\",\"grade\":\"44548482-50e8-4f4f-ad6d-dbd618e39bcb:string:A+\",\"courseCredit\":\"e15af6bb-6153-43b3-9270-b501ec6ac579:string:4\",\"courseCode\":\"1c787958-81d7-4cc6-9f3f-2f6052d64e0a:string:CS 2110\",\"examinationDate\":\"5ece4616-9ad7-4f8d-890e-aa7d867fb9a1:string:2017-12-01T00:00:00+08:00\",\"semester\":\"2ce7dc68-9fc4-422f-b2f2-894271bb7f22:string:1\"},{\"name\":\"4fae7ed7-4441-40cc-9b92-6a222b3b612c:string:Microeconomics\",\"grade\":\"6dea9aa1-2545-4a36-b040-89cb74596308:string:A+\",\"courseCredit\":\"a03c8186-768e-4026-9657-dff53f681cfd:string:4\",\"courseCode\":\"95fc9e7d-90ab-4ad1-9f7f-babc1ac28abc:string:ECON 3030\",\"examinationDate\":\"16636b5e-7173-4693-bb32-ac84c91ccef5:string:2018-05-01T00:00:00+08:00\",\"semester\":\"3cbbca71-7791-40c4-9fb0-b49f77189b12:string:2\"},{\"name\":\"40081fcf-afbc-47f2-9c52-ddde5204eaed:string:Macroeconomics\",\"grade\":\"2f740840-f6b7-4e49-94ac-0a77c31e720e:string:A\",\"courseCredit\":\"34632c96-4f0e-4e0b-9f28-bc64a7eb9903:string:4\",\"courseCode\":\"42e09ed3-b659-40d2-b7c3-c2db2e203a61:string:ECON 3040\",\"examinationDate\":\"80f4a109-d0ef-42a9-94ed-cf1006065b47:string:2018-05-01T00:00:00+08:00\",\"semester\":\"333f8a4f-d8bf-43fb-ae0f-7d782f1d0094:string:2\"},{\"name\":\"cab2b562-06c8-46e8-b0b9-8666d8094452:string:Econometrics\",\"grade\":\"723323cf-7a3a-41c2-bb33-52f467b50668:string:A-\",\"courseCredit\":\"5c744b76-c3eb-47fa-8c85-655692d80b47:string:4\",\"courseCode\":\"2d5924e7-0301-497a-8994-3c5f857c3757:string:ECON 3120\",\"examinationDate\":\"82d23099-d73d-4e17-b74e-6f3c3343c7d3:string:2018-05-01T00:00:00+08:00\",\"semester\":\"53593c0e-da13-4725-a1e5-4c8dda5898f1:string:2\"}],\"additionalData\":{\"merit\":\"bf53f59d-39f1-41ae-b7ba-bdb123bf4135:string:Y\",\"studentId\":\"e774133c-0e2b-4b0d-90f9-eb86a8a5baf9:string:123456\",\"transcriptId\":\"cf538287-4789-4f66-aafb-abea19973c84:string:001\",\"certSignatories\":[{\"signature\":\"e30db5bb-411a-45b3-ae0c-508146236c55:string:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAB8CAQAAAAMLDtbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJb0ZGcwAAADEAAAABAAwXU4cAAAAJdnBBZwAAAokAAACMACzEPncAACu1SURBVHja7Z13nNTU2oCfbexSdukorgiCooAUC4rfVUHEggUErFevotj12nu5dlQUu1hAUKyoCIgKigURFQRsgCJKkd5ZYHfZNvN+f5wzs8lMkmmZybLMMz/LJpnk5Mw5yXvemkGi5JFPA3LIIZsc/FRRSRXl7KCYyoTPniZNmhjJiOnoZrRlX/ZlH/ZgD1rQlHxyHI4vZwcbWcda1rGKP1nEcvxe33KaNLWbyJM6kw4cQTcOohMtEr5eOYuZy2xmsQCf1zefJk1txH5SZ3E4x9OLw8i32OtjLSvYRik7KWUnO6kkl1zqkEsuuTSmGc1oSp7t+Uv4lqlM5U+vu2A3IZfmNKEJjcjVi6UyiimhhPWsoMLr5qVxD6tJvT/HczzH0tC0dS1+CtnEdaxgJaupiur8DWjGnuzH/vqfxmFHLGMSbzHX646ohWTQlm50ZT/a0JqWDg9wP6tZyhLm8SO/pSd4bSKDo3me5Yjhs4wxXE9vmgJjEYTOCV2jKSdwL1PZarqKsIh72MfrDqgl1OFo/sfXbA/p4+g+ZcxmGL0cdSVpajSBp3cPzuZMCoPbS/iGz/icRYZjj2AWMIKrXbluB47kGPrSPLitig8Ynn5nJ0BT+jOIXtTTf1fxG3NYyj8s5x/WI8EjM8klh3wa05h86tKMlrSjIx2DC6btTGMy4yn2+qbSxE4+w0xv5z95guOoY3nsPIRt1Hfx6pkcwcMsMVx/On287pJdkHoMZhqVug+LmcgtHE3dmM+Tw+HcxFdUBM80hmNitJGk8ZxMFusf8Cfu4EDHYy9GEAYnoRVH8DzbghN7Cgd53S27EF15niLdcxsYTT8H9WS0FHAGb1Cqz7qYC8ny+jbTxMJV/Mit7BvFkQ0oQfgiSe2oz+XM18OoipE09bpjdgF68bnusXLeoReZrp69EdeyMDixz09P7NrJmwg+9kra+TPoz2w9jNYzyOvbrdGcyA+6p5Zwm0E34Ta9+VFf51d6eH3TadznRAThxiRf5VT+0MNoHM28vuUaSWc+0z00j9OSvubN4Byt9/DxKNle33wad8liLcLspF8nm6v0OnFN+u0QQmNewYcg/MzpKbtqHZ7Uj5Fv0wuj2sZLCP4kCuDVFDJZW04He33TNYiBrNVr3IEp10oP0rbvP1Py+6dJGX0RhMtTdLUhWgP7lMsqoF2TJryPIOzkXnI9aUF7/kYQ/kgvi2oTuWxH+CRl1+vKXwjCmN1+Wh/JPwjCVPbzsBX7aK+GKWnrdW3ifYSdLthCo6UR3yAIo3brYXQTFQhFnOt1QziYMgThIq8bksY9LkMQjkvhFXN5D0F4aTed1jm8jiDMoa3XTQHgTgRhZdpuXXvYD0EYmtJrZvImgnCH1zfvAQ35EkF41sZ5N/XUYx2CcILXDUkp7XmC771uRPL4JyVmLTNZfIjg280GEuzBfIQSBnrdEBNPIQhPeN2MlHIjgtDa62YkizEIVTRI8VXr8C3CZtp4ffspZA9+R9hc42z1xyMIn3ndjJTShCqEIV43I1moVXXPlF93T9Yg/LTbxPqqKb2Sjl43JIy9EaQ2C6OWfIfwiteNSBYHIwi3enDl/6MK4W6vOyAl5PMLwqIamTyiOYIww+tmpJjna/M9Z1OKMN6Taw9DKOMAr7sg6WQzFWGJC8kek0Fb7Ttg3/qaotRzk+sRNnjdiOTxHcJKT65cl8UIM2q9cWskwibae90MGwYhCNdY7svnYn7lBa+bmAT+jSAUeNqGOrRL1qmfRhCPPIBVpFitVVgAcCXCTv7P62bY8hyC2KgsW+hwk5qlr3eDMxHEw+VQF16hiD+SdXr1zDrdo5v7GmFVHMl6dhW6UYavBk+KHDYgfGu7/1u2c4+raa9qBmchiEdZeToxKZgZ6JDkXEI5oDziye1BDwThFo+unmzyWZxy557YuBBBOMN2//4h6aVrC2pSH2mxp2VSr5vHI8H8cwu4z5Ag1GU2JzGxUWS+RliXQv/zVDIS4ecarGjKYwXCr7uhk+h/EIRDTdu6cDdz8CfR7NianxCECl6jU3JvcDrCuuRewoH+CMKVnl1fsTc3uq6H74mfshqdeFElSzjW62Z4gPJ5V9n8cjiOZ1gWFInvStI1e7MRQXg9Fb5sLyIITZJ/IUsyWYnwu0dXV7RhPcI6Grl4zjz+RLjZ0/ty5jQdMbc7osZ8K87hbVM5io28liRXrAuoQljNKam5wf8iCEel5mIWPIwgHOPZ9WGG/knvdPGc9yL8WIMjx7tRhPBHLVSCRcMUBAmublUOmMc5Omm/17n4EH5Kna9CHwTh0lRdLowDEIRXIxzVmkcZy/lJ6PYzgz/sfNfO2YIdnj4oI7E/6xG21ejFQXI4mIeCyTBVAsaZ3BohS36iDKQSYaat0jEJY3svnWbIOxYibHH0A+/PDv0jTHBZrZPBfAQfExEkikR8DdkzirO+gDAhuZ2WAB1YgVDJ8R624SBe5Acmp0xCy6AHj7PUMJ2LGc+FcSdz2oPJ3GdZRzaUruxE+NuipKQiSWO7yOM4HSWA2xfpOVkXj6lyXUiGUxCEJ/V/T4xw9N4s4OeIP2VbKhAOS03nxUwPNiP4uTCKY+tzPLeHaIkTJ5N7guWAyuiS9DtuwLOsMkznEgThPpujo/OaeCyoanuGF+lre1wBixF22Gq7kza2f/DMVVRxLILwqM3ebuxEEK4nn5kIOwzvyj0SvvZ0hA0UUIhEDDAp1Mn6Ii0VXvTUSBiJcQj+KP34Dk+CPjiD0Trl4bP6/ZRs8rRnnFDGePozEEH4j83RjzM1CnF8ijaKNaYcQZhFd8vjxiGIbSlKp7GdIKM99oTNpQxhls2+BQjCaAA64Ee4X+/rwnb+l9CVOyAI1wGwEWGSw7EFuiWvRniWN6UUqdE1SQZzcZRH5uGPS0Nej24cx3F0sciV+giCMJws4FeEiqiE2OhpYPHAWkYlUxisV7W3Ioit6+5MhFLOj3CVFQjCqRzGnwTKJYVPXSX/zbZZLTuN7YS5DUHo5mrXxsZchJ2WFSMeRBCWB4u6TkP4G4AsFqFqf4RPsit5l+uicPsYirBJn3t68MxWZOpn8/CI57wHYWMNdjmJjY0IH8VwfHNuYZYWJpWGeRbnGfb/Cx/Ch/qvoQjCSY5nLKRbDOk0erIUYUDI1j4mbclrCGIr5R3LJwg+znS4SgN9d5cA0CtYNsk8JXP0hD/c5iz2Y9sFzvbU/xuU75VYrDtaUBzStusRhM4AdGc1gvBNyLQ+QnfxZxH0iRksN4j9oxEqbFUV9yAI7wHQxEGqUZVPRnjYl+7yB8LUKI/N5SG9XjV/jJaVLxDKgvXCeuOcJe8c/eAWZrF3xOtnMgw/EnHxMxdhq+MRzyFsdVCiddatuk7/naUfT+bcBDchCJ/bnMN5bCfMEaYGesGtWpgJRfk8GcPZVVsv03+11I53U01vxleCw8nZq/woBAmun+7GPl7tYKoQ/qY+UIcZrLYN0jguinfPrsR8hClRHdk9WFdzA2O4hFPox+W8yl8Gp55M/sdXvBT8uwFVCN/ZnPEe06NhXgTdcA7vIggrODMYztuMtxkXEvaaTRmRcr3UZTvisLTrq9t0mWHbfdpE1jd4jg045RWKNLYTZA/PjVrKVnxVyNb6utK10fSSF6KqasqvCML44E+eyzaEr9mIUGxrSACV/2Je8C8Vr3awxXFZzEXw65/nZv2DTrT0wnscodSjqhvJYCHC+1Ecd6ZWGP3DpTEtPRYglFlKVJfqfp7NM1qd5KTcq89UvRirb9j2O4KwzSQAq7dsJD3BRJz8HANtM668M/gCQVinx4VKFbbYtr2Rx3aClKZEC2lPb0uF/uX6CW1mI8KXhr9bsBhBeEj/rSK/zuYCBOE222tmss4kLv0Lu2S5Six6Tv+VwfnaQLLMInRuGsJPHvak26xCeDniUVfiQ/DzdMweam9R7YVtpDWlCD5dFkpJcktsz5LBJwjCW6bHQ+DdKfxuSMWhgjki1XsdhiC27iL36kltVoe20qUg1QNDFXK+x+YM0Y3thPjD46F4qGlaBvgubEUG8AsSEl6uzPs+egGBKdg0ole5EpSrnev3x9rQUcgOhLWm4dqY8ahaWKFi+Fzc9EzznlJHMVTxb/wIxRZLkqMiLkTUoifcP0D17336r2ytPbHLxaoE9ekmB6ZM1iNM1PqaDsHtT4S9Ia24A0FsbeiBuqFHhGy/Vj9GOtFGH2FXWCnasZ0AUxC2uHWyODjEQne4F36E7WHP/tmE55e6EuXmmYVSeKln+iOmNXMoryD8YPi7kc2bfQTWcWQ34UeoDBnK0xF8tSandFMEiWAAO4oyhO0W0ckdKccfwVlWKWlD0yl1QhBWGQR5NW0ftzxHH3wIa0L02WqFei03hAjKnyNIxLjpWywnbYBResqGvsnr6/CQ9/SI/Cu4xxxcHOXYTsxvdDnQ2ENLtVoPn0NXw7Z+ZACTKQk51gdIyLaXmAccxAXAXsAKAJ1Q0TouJpuBwDjDliIqIGyd3IohwBKLNdhwLsVPNuNMT/25QCYv15Lkx0rjvNrhiBaMJ5dKTjE9IBX3UYcMWwFUoYZ9m5CtSugeTkVwywcAWhYzk6dLLl7MetN2tTRaqsdK9fTpAmxmbYQ7V2ambTZ7lWV9Xdj+EkYCMFBXSpumt+cwKe6xHTfKUp3kwG0HTtZPPuMkey9E4R9gLlbx38or7VeUCPMOAJlsRfjY8op9EfwhmSdWWyhQVJDev23afTuCsN7w3O+q7+TDWjGtTw0RXcP5CDuPqebaAdJHK4fvF6BijI3ksBWhOKTIxDKEKgtHFVVvIzwfqhKRu2tr8OBgq5SgHgkln9nZspXPgtXqt51JYx9Yc7+e0NiOE6U8SGWpPDOX6E7wGzym1yHstHAsWWOjU1SrlCNZb9DkT0TYZinFjCU88/MvVLtFKAopR1hh6RajeD/s532HgAmmm2f96RZXIPgcdPkXIwhjLfddGRzaznXTtiF8atqiHtCvhRynDFahfmAN2IC1e6VyMenI26bVuNKkPB/xzj9G2GlrRJtpWvGbWWyY1IHH2fr4xnZi4rcSRhL3pI6XwJsug2H6/9qyB/AdO0OOzKYF8I/FOV4E4CyaAZv0tllAgYUE0ogzgLdDtm6AkDitIdQBXqDKtuVXsxXobcjzdQ3LATiEOYyoIdUt42U/4B/KbfbmMxT4QwvLofQHNrEDIrhcroYQNw+lXAv9dX4BCAsWvZbmwGMW7zclQFfQHagMKi+V6iuyKrMDsBCfzV61ULV2cam26m8IRlS8TmJjOy4OQhBucOt0MTNSi7HVIssAG7VVd4PRwIyyT2/G6HTS21LHqBJDlIXZsN8K0VxnshyhNEJWmKsRhKWGt3lbHfihhM/x9N9l7dYf4eRPNtRBvqtHGcJEXePUKWvmNIRlpi1zELaHWbvPINybIptVCCssvfGVxKRq0FTHII5BEMu1uZG6+HCyZS9D2GGzwDo5+NtXyx+NdXXRGMe2G29q1yJEYuYwYJ12PnmWAgJP1HBfI6VL/dHiHOV8QkDRFVCwzEXAwhByKfBRmKvgRsxv6hNoDYyLYBcYxWpgX4MWfCmHBtd4mQxkIut5g/M97N94aQ+27hP7cAPwoY1d9URygS+1Y63Tu3oN5jd1PboBnxuUZIqV+qpGTqcQeCTsnQfobcpYVl2DRjlhLo1w3weQiVJ6WtGa1sBsKi33/hz8v2rj1FatdYh3bMdJucUqJlXUpVK/EZSpYATwJkJV0NW9mhkO1r8zgs/Iat+0vxAWhhyn1lUnh33/PoQyw98fRGXRhLsIdfgD6MsvJqWJICzgZS6kQw1Oc2QkiwqEK2z2voVQahtqoZxK2lGHIoS1Di6ewxHEYPJRK+pwZ0mVzGOOads3CFssRgkE7NEzEXYaHFW3IZRH7P8hjopjZVufaPvtLfrXNvdcYmM7LlYQveO+2ygf7JuAuszRYsq3CL+FHdkFJ9e75sHJU21ZVdHDjUzHfY6w1OKHVW4rAeNHHiUI66PIRtFWK/nCdRLHMdmUCSvwKWE2o7mNgXRzOfDQTVROeOvcJIfhx76udR7bERYASvPr5A2vMntWh2sob63wREuZVITohtWi8TGb8yovtArEsDpvhiD8GfHORyJsti0IpRZXH9h++1v9K5sXJomN7biYjRgEh9Ryr+G5uBerEUrZhvBu2JHvWzwBjfylu/Os4JbwUJFu2LkJDjZpLFUs7HNEg8p6dYHlvqYMZpKOyLH+rOYrXuR6TqZdjcrBrXrAOlZpMkKZrQuHkpnuNZzlTdurKB/paivuFwhFlu/SFQh+g37iaYQqW4PZeQScRKtdfw8PWevaMR9hss2+XoSbX80EXFP2D9me2NiOg0lIRIN8svgd0e4iAN0p1Z1yX8hxVyAIaxxS/4/T36wWrVVaxWGGYyYgFFt69Z6OUB1X/lJUKhXF6IgPgGyO5HY+MqXVsfpUsJSvGM3/uJCetHEwpiWfG7CrDdkZP04+4aqwjMqknsMWhJIQq3M1g0zyQA4lSNBpw4x601XbE1Y7TtDeukeXGB4Qyn8tkkGrAT7sCzy/q8/7lu33H9JHhDtzJTK24+BlhEpPKlCqqBlj8oG+OuLnW66mm353NeUZ/Ag+ejucKxDVWi0yNsZvEnaORhCetvy2egYHzr+K6OOtbovyDQDQguO5lheYxhJL0dz88bGS73iHR7mSE2iX0kn+EnZuGmMRfLbmuj2owBhLMNpBjgn0ekCW+j8EuzJQk1GeCIqOCPZJiQK+/ML1hm0qwvn2CPetWmSdGaUwmF1trO33r0EQS+VdImM7Dh5AiCabpvsMRfCHqAcuCll/TtfBd5EipIfoo4wBlCo0U3lj57EIodjGIq8Ec5Xxoj1C9JnGzkfiWr5ksS/Hcw3P8wUrdYC/86eSv/mMEVxHnyTXfYKvEMtCti0ox85TDwLBENVeZicg2CcLUCvjgM/e7Rg9scy8jCCcpv9SjjH25sZsKhC2m96XKl1gpIjlWxEqbB7njwV/iTdsv68WH8tt9sYwthN9giu/2T3YnOB5YqUBlwOfh6RxWQv4tdhULxgNW8xFDuoJqHY6Md7Fl3QBBnM/8BwHAA+GeAkHKAICRjFlBvs6yrtQT+XYfwMfy1gWFDbrcwDtaKM/rS3DGLNpZ6hrvJWFLGQh8/jJpLd3hwPAMsrtMuqAIdWBmUwuA0oNq+gvWceeHMderLE4Xv1WgeWQilm3Niap5WHgxXM0MNfB3LgHfuBrtpu2VV/RnsOBRZYuN025AlhHJi0c3IDV+Yts9sY7tuPgzBhWkG5yY5giC9Sz7kcOZwwr8SFUsJDHHX2IFUfpZ57RGUGZ9LfRRl9rlq0yqiFCIKr76Zj6Q/XeLy73TXO6cwY38zwfsyCYHdpuLT6PF7mITq6Zy1QeLqtKW4sRVtj2onpPjTZtU2armyyPr0O1K0YW2xA22pxZqdQCLlIrcM4Yp7Tu5kDGT4nGSLnMVrgermWQRYjB9h2KUsd949A/8YztODgGs9Y4NdRhFVapZS6kOmlDBrlRr/WV/1BxyNZZCAF/tfWOpcYrEJ4E4DOEyAF6Aa6OYU0dP005lEHcxLN8xgpbYb2Ij7jehWzah9j0gDK9PGr7PZWEz3z9bo4Pve0E8pSpuHq79EkqvOQBAPY2Ce1WrfdrnYTRHqwswc7Vsurgw9pffW92IvxFDvOw144HVvt26RpjGNvuiN8pq/WjuZFCsFgnZ0PQ30tsfY/DUT4+m0K2XsI3NKEFUMIAg549nI3spcW7fYGSqO0BKnPH8iT31mY2G3Jl1OdAOnAgnTnMlFmtIadxGrCCyUziawe/dWfaA2UWPtXKsjDR5lu96QFMCbHD/sJvdKErB2nbtZlN5GvxWyk4f7A5t/o1lHOvipJfZNv6J/VkyaSLIfm0ki4qcKINmWC5ULifPOB2KikGB/FbvVS22+yNYWwnKnR5Man34R5gooXDnJ9oKyWYUQ74oeLbArozGyjh1AgJ5zYE+6AlGELcI6FWRrOiPt4NSpjHm9xNfwrZi348wKcmA9Q+XM3nrObpOCtstEeJuKH0ArbaOjMq23S49lqplax11ZsIaDKUu8ZXNudWE62J4d/LbY4cQE/ge/xgSnSgJrVdmIaireFaRg7mQuALxgMl4JCJTZ2/2GZvvGM7LsoRW+VHcvgQodjSMHIhsWWbDnCwg/h2YBR1k6ai/KAyEUf9rpm6Wn9ZE/KddOZGPg1zdfmJITEPpJE2GutNDgsNpee2Ui+2pAphleXLZ7L+TjbbEUpsp0sWVcFf9xwEsZFPC1iJUEknfsHszvmjrZ6gGuWCFFo0KYdfEMq0Q8k4xMFHuyWCvbddDGM7cfVI9VsqNZzNAOAWS+f6SghJYBAdauBaazcXhYnl4awCWoM2Z5REPF5xGnnAD+4FzSXAfJ7kZJpwLEMNifoOZhSruN8xt2ooLcGiGFNzmoKFkyNAJk+AjUJsLV8ChZbr2bX6aj3IB76zFY99bAC91CgCsFlaDGdv4EUWMhPoaZgbSux17oUG+l7MPEJX4G4tve0AhzxBfsD+TR3D2E58Uq8nlZO6La8A03QUdChFQMc47kkJZZEnrx3LgAY00WvzaF02Vam515LTUXFRwXTuYj+OYmTQtNKE/7Gch6NOWtUSNXjNKDXjGstvXEJn4A2bFJZKn3y2xZ61qGGu3DnthO/AddWEWAVYZwA4k0uAddwLzAAaGZJVrDbcgx3qtzfnfx/MTcDUoLZ9G9hmGg2MG7tXQhFRj+1da1Ln8C4FbLLN5LwOyIsjXkX9yPFP6uUA7E8VOyHK4d+RvsBaBw8j7/iOy2jJOUzRa+MC7uQvLolqtOwJlIZtVW6MVgO2kGFAsW3lxgkUAwMtHpUrgQa0pj/g7BuwFmhKLvAXPqBj2BEH6rzZl7AV+AIfGAymq/UxTig5zxgB/h9GAf9wQVDDsBmnSa307Ttt9sYwtnetSf0C3aniLNtamypWJZI9MTNs2qmI5fgdaFSwfgdU/onospY8RgYwNAnOH+5QxjhOpiOvak1rC0YyO4py802wmtRKNG4etj2DV2gI3GmbprCUD4HmFitatQAbQBdgjW0UMwQkhL2Acn6GoHdZgL2YQj4wkk8A2MJsMES6KxenI3FCWbYDD4JcHuF1sthKX4MCdiNQ11b/rRaBdpM63rEdF48iSEoKu90T4kZoxSLEURCDQqaHOTGOMDh6xoNKiTsMFTPjCwnZtGKgVkTVpOgqOwoZGSxdV86dEdpchlVQg+qh8JgrFWk3zfHlooJrXgnbvieCsDbY9/aoSGaVTOAhhC2m9XFLXUXyT0PwiIp1D/jgtdd3b63S7EdLIEO35FpO4kZd4m4b/zIdqXKXNMcalZz4XNu7iG9sx4XKjxy5DFmiKO1iJD37iwhVDgqF09iEUB7y86jooETc4tdo3e41UTnjtGUrQpllsZ6ayQE6LEIQpjtmpSvDurDqMoTikPfIBfgRVkbIcpfJKoSNFjrr1cE2OWe0PRdB9LpcBWxUJ//ppsvLFunoMIVyBKl+OKlCPA9bnPvf+NjCaQTCdY2hsaGuPEdbONhUczyC2FZbi3dsx4WqJXVI4idy5FwqEd6OuFxQgXPWT6s8ntHd/WFICMpchMTqBn6GCjfcBx/h2UzM7M0SBImygHvNYWAwAHSNQ6r9MqyDFNW7b6ThF1RlDbaZMltbM8zGTTOQgXVyhO8rB8xALPwk/Z3WtGOYjnjbHhZdNd/kLKritHaEZWy5Hh/CFg4Fshhh8Nf7zGL6qQeKXeIHFcJ7CnbEN7bjorpeY45t7GuiDMGHMD4K/7cMFiD4LFZgPXR501IuCtu3BkESygX2OIKwD4FAP/ug9R76zfBAkvoqmRQwNiiGn2FzTHjqXkW+jnubx3X05WKdLnerbTULI531AyEU5S/uj+jc2gRj4Gx7XTi3OoB1VZh92SyyQ309Rn4xCM+tmIAgbDa80jpwEy/wgE2hnzz82Fcu+bfNoytAfGM7DvbUOZznspBKWw1mYlyLH+GjKNftp2phyvguOYhx+BCElRZ+UhlUIfgTcpk9i0Do30FUIfi4zUIh0pSndVztfUnpqVRwji7n5rNJ8bsIu8Tye+tpXf1ZEFIu1p5fEDaF/UJZfMrWiDW7ALZiTLs10BSRPsFS/G+LH2Oy/1P0CNrI/QzkYt6iDEGYE0Npe5W52672iCrN6ORhHvvYjpo8unM5L/G9rgBU/YlU6DN2snTc02sxTLmn9HP4ZU7lWK7iq6BQZL0abKKft4mwD4LwLBAI0xBW8DSn0o48GtCGsxir81fs4BzX+ymVdAimMr7EYq+qvdHR8pt5PMx2/d2V3ByDelWJvydGfXwo0xGTk093vqCSKmY4iLtfIJQa/AmH6EQF1R8fz8aYxvlHxMbHIjpiHdsR2ZNBPMUcm5R4P/BqAvpjaxrqQiWPxfStDB61iEVaw5U2K3Kl20y0auBqJBgocKl+ilt9JkdwYtgVaKrjlqrCjEOBVAcP2363Hr0ZQLcYs+W0wk8iNZjvQ/CHLA9zI0xIFRhrVPodxLjgxC5lbBQGvlDexz6aLBpiHdu25HIcj/Nb2DT+hXE8oKsuux6oDXTgd4Qqro3ju//H+7o8dyW/MoqBDm8FlQpnRgxnt0KVaQmIk/vySvCdFPjs5D1TGfNdmfp6WpeEafBV5cltrvsuzEbYHHelMRUiHFuBqBzWImwOSTqRxxGczJFxZgV7lNASBLETy9i2IJ+zec8QZl/CHEZzAyfRxvCknYkkIdLoAooRNtMngXM0oiCKN0IjruITizyNsaFSE91l2JLLKdzLm4znHR5kQNLUiN7QgO8Jte4qVGT09y4nMVYGo75xfrsOpYTW6YiMSpLkZgWaCxD8rkRbRTe2QzphABOCQuRCRjHE1vP0PUT71LpFfZ107rddqKZUA3ZgLqNT22nGcoTwbB/HagFxKYNc7A1VF3JM3N+fhsQQFKsooAhho4vFmg9DEC9KIB7Ic7q21GbeYXDEPB5PIVS56Bt1tFbEvG6Zbavm8qyt8qi20k2r/kJX1vcGZbuH4zqvNT8jbI1bAFcVUmP1RXgYIZBfxQ3q40dSrSjtwyf49fqvX5QdeAuCxBXyGE5dnsaPUOTgLldTack2hK02mt/aySX6nRy6wjxPO6qcEddZrVGWY2PZo07cwJQo1Wf5lGBl63amEZsQSl30mFyG8KCLvWKBUSo/hOH0AlbzNCPDqt3bcx5vAj2YnXBrTuUZ2gLfc17Sk/wkgyGMAjbzAJNZTSMK6Ua+NnTVVj7jBGB4WAhpFj3ozAdxx74pk5Eff/DfbZkJvMlgWtCHPvTRgY6ltIgqhv1prqOCzjGWqPkvzwLjXXs8TeB0voii0poL1GOUfkPfGfMyXiUxTzT5YFtt4dzBtbtIITgr7g8zN5S7uCKrWWTRgL04Vbs+ePWpoojZfMy7vMozPMydXMvFnMUJdGd/mhukzZaUInwZ4+jK1sWRTnep1+5A2J7cEa7e1HWZySHAQgZFUQYslEJWAQ9G5dljTSNu5zrygE+50jHFX83nNB43hQbAwGAWyJpHAYUU0pImNKExTWhMY/KpQy51qEMdcmw0rJlkRTUwyymlnDIqqKSSKv3OBRVhLICQRWbwk0E2OSGfRJVtJRRRRBGXM4AHgftj9OfrxVdksIaOMUiv9vTmS6BLFAXs40b9ZEO5A5hLb4ucFdGwmSZMZEBc383jv9xBY2AZtzhkRd6VOJLDaQlsYAlzbPJ9eENT9mM/9qMdhRRS6KKZbSoL2MhmtrCNbexgB8WU6BQ98ZNLb/pxmkljs5qp/MkycqinP3WD/82ngAIKyLco+dqdX/mJg4BrYgxQfJErgNdc8azOp4hMLrcIJXUNNamX0YYqDjRkp4qN6fRkSRwZR+pyKbdSCBQzlCdjSOqbJnpa0pWudKE9+zlGegtFbA5OyyJ2UEwxO9jJTsrYSTkVlFNBBT58VOFD8CNAKbn0jyvloz1NOZV+nBB87FQxm6ncRgNm24RLmMmigAIa0pCGNKIhDXmV9XRgNvnAcO6wKf5uRT4LaQX8x6EKZ/QspCNvc56rvWWBz+DiGA/PEpr+PDL53KYT5VcwIqEIqTRW7M25DOcLNtisRTfxExN4nju4kOPpyp4JGCX/xs1A0gIuYIophmoUZ+g0QF8jlMVt1gI4XSd8WKDTIEVHT6oQdkQdgOLECIRNyU+PsR6hMoFa9JciCN2jPr4dT2lHtyrGxBTlkiYS7bmE11lmMY3X8BUvcQP96eyyB8CXRK4JGQ1Z9OfDYOE3YSEP0920qlf1SROL3h8UrEC5hAc4IspHxJ0I/rhclkNR+U+OSfxEzrypu3CvOL+vgtAjVQUEyKIvH2l9aTljXHnypQEoYBBjWBcykSuYyyiu5qiY0vzGymSEuxM8xz48YKjCPZebLV8y/RASL7F+rI5pDzg/RxPflMHrhjL0iZBPGZLMNbWisxZ2NjAkLtGmDmVIxLyY7RkaTECznSdccldJU4+zmRQSFriJCdxED3eLkdvyCYFSdfFxIh8HDWNLeDDEemCkOUIi0VoBGjIqmHetMuWZ4iYgFCXfX3JIUCRZxZ1xZDmaiVim11e04kZd5UAQFnG9Q6LUNLHQief1QibwZp7B3XRPsaV/CtXJgmIjm/8wX7d9By9GyNgJsBYxVAZLhAN4i0rEg2IKgxDEFVE+AoebgitncTc9YrAQqqLa4eL7/tzMzGAEaAXvu131fjemJ9NM0/lTLooij2kymI/E4dabyxU6JERYyDVRRnXNRGyLyMVOC66zzKiWXLJZhbAiFXJUFpcGc1qoTzEzeIKzo4iVUmud6joKufRhmM7BqD4/cJUbKdHSAHAY3xj6dj5XJXXN7EwGpUiMkeLZXMpKrSr9IEKVKjOvIUh8WT5qELchiEXd1qSQST/GW+Tt2MRnPMkl/Mtm8DTDj/AceRzNHUzV0TvqM4+7EtCspwmlMa8GZR8/45OvR43AvgiiSxdFQwZns1ivZl/TpeOi554YLS01k/qsZkSy5CprJ8D6HMdJnKTrJ4eynuWsYi3b2UYFkEEDCriKepSSbcjCUM5MPmZCjSgAV3voyRu00v//KXfzs9cN4nJeYhEdojz6cJ6nO1DJ6zzioIex41zeBk7VtTR2XRq64nQaB/tzIc8z2yHjltWngjkM56TUVdPdjbgyqCVe6pKBJXEmIVG6XTZjJH4EP2PjztSmUt67kgp39yaHrgzkJl7gU35mMWvYFjQImD8fcUx6MieN+4L9/EyM/nvJozGliEUCwnDOZwuCMCcqN087lE/EVV7f9u5BQ3wI47xuRi3mmqCN383UA4lyM8KGiN4NzRiPIKzj4lgza4XQxRX3kzRR8jNiW7swTaL01IL3phpVgSubpURO6Hey9nQb7YJ/QncE4VKvb3x3QaXd33VSBe5K5Gl9cVEcuaaTyZUIVY62jQzuxo+w3lDvORFUkbmLEz9RmmhQ5Vkv8LoZtZIrtOh9utcNMdGA9YhjOGJ9PkAQZrrmFKwKHJ2S+InSRIOyVcea2i1NNMxDEN7wuhkhvIBQyYG2+/fU1bNGJRQsaUaVTk6kQmmamFhI4uVr0oTTRPte7Zv4qVzkRAThcdv9rfgLQbjX1au+hCAeucPuloxAEENJsTTuoFI7Tve6GSYKWYOw0jYhUmPtJJxI9JYVsxCKvL753Ym+vMFltTZ7pnecmYQ3XmLU5yeEKtvCq5l8heB+yd5cnRE0TZpdHKWCrDm1P+rwCYJ9peVA4v13XL/yyQjmSpRp0uySHJeq+NuoyOVjBOF926jt/SlHWO5yiTyAsQie1KJKk8ZdVEn757xuBgD5TEUQZjhUd1beYwNdv3ZzyhAWeN0FadIkTgabkbgTOLvJPtpI9Z2Db9i++BAWJuHqwxGEC73uhDRp3OANhFiLprtPb+3u+aVjfq3bkqTWa6vf07tPseA0tZq+CMK3CQZDJEI2Q7X3+RgHwRvQ4rnbqRsy+ArBb6tvT5Nml+NnBOFyj65+mPZpq+S6iMcuiTETSnTcjiAM9+j+06RJAr11VdIjUn7lhjyj39F/cFgUxxchiMtR9YPwI8wy5NVJk6YWoNREG1Jq0MnlBjbpfDbDo5yo611/U3enFGEVLVN452nSpIBsbR8uSlGqwVwuD6bw/dghwX4os1xW6h3EOoQtdErJXadJk1Lq8rl+a96e5HT9jbmFNcEExH1i+q6SKB5zqSXHUoRQ5MGyI02alJDDq3qqTU9a+OGhvBpM8byEy2IuStMJQdjsSha18yhH2MShSbrXNGlqBBcEK4a+QjtXz9yaO1gQTG44gwFxygOTEIRHEmxNXZ7Ej/CHy3eZJk0NpBVv6XT+Pj7i5IRTEGRwCPdqo5US799M6N3Yiu0IvoRsyv/SCZw+T8dOp9ldOJQPgjnAtzCaM+KIY8/hYP7LB2w0JHmexX9pkXDrzsGPUBSVCSycJjyFD8HPU2n/sTS7F215yFBe3s98xnAdx9LaYSo04ED6cTMjmWMqf1vBNK6ljWttU84iW+kX4/ca8YBeXqzw3C12F8U7t8M07pDB4ZzCSRxiUmj5WMMWiiiiCj9+8mhAfZqyZ1g45E5+ZgbTmUmJyy27hwcAYQR3R5mrpCVXcJ0OFRnLtV4VpkmTpmZQn17cwuvMMdWrtv7sZBGTGMZguiS14PoQXbBpI7dHWBwUcC4TqQwuAbwu+rdLk35T10YKaMWeNKEJ9alDDlBJJSVsZQsbWM2mlLWkK2/TEYByvmQqc1jIjuDeLNrQicPoSY+gA+hf3MX7XndgmjRp7Mnheu1oGvhsYwl/8Cfrg4o+0Zr8KZyeVMkhTZo0LpHHxXxjU1JRdKjIQy4q6XZz0uJ3mlTRlF70oDP70oL6ZFDCJv7hD+Ywg2VeN6428f+zem0pSBJbegAAAABJRU5ErkJggg==\",\"name\":\"075fc2b8-697c-493c-b6fe-ce10ca5d7862:string:John Demo\",\"position\":\"30448dd6-9bb9-49da-8a08-a0e184f1f420:string:Dean of Demos\",\"organisation\":\"2e3fe8a8-2a5e-4548-aae0-ca16d7ac4508:string:Govtech\"}]}},\"privacy\":{\"obfuscatedData\":[]},\"signature\":{\"type\":\"SHA3MerkleProof\",\"targetHash\":\"7559d0e018e175fa6cd5125f1616f777527254189a3e9e0f6e4afea696901934\",\"proof\":[],\"merkleRoot\":\"7559d0e018e175fa6cd5125f1616f777527254189a3e9e0f6e4afea696901934\"}}");

/***/ }),

/***/ "./src/components/HomePageContent/aboutSection.scss":
/*!**********************************************************!*\
  !*** ./src/components/HomePageContent/aboutSection.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "_1H3nt4p1Wse6ItPz3igx06",
	"section": "_376-PqIE2CEexJD7MuiKQl",
	"benefits": "_3WNSCI9I60s7uFnUkGt163",
	"container": "_3QxuuKzCY86VrZaRpjCHCW",
	"benefit-text": "y2R4zjqR6kG9wP9ZvqKr9",
	"benefit-header": "_7yr308CMQwNw38EagIS-k",
	"howitworks": "_6jkSw33G4FLV_F9L_bOQM",
	"hiw-container": "_1rCnyG8KboNXYz5U8sO2I7",
	"onetwo": "_227bua2Y65a13mDhR-fLXC",
	"three": "_3EFmdJs-szJOQgTsGJNhpl",
	"four": "_3gfuky_g_tHJjFi6atb3l0"
};

/***/ }),

/***/ "./src/components/HomePageContent/dropZoneSection.scss":
/*!*************************************************************!*\
  !*** ./src/components/HomePageContent/dropZoneSection.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "_30LQB8GNdMRu0DaH9mAQ8H",
	"description": "LhvHvyx5SRKudPbGf8TAm",
	"pulse": "_3lX0Lr9UXbJV9J4qhAPznu"
};

/***/ }),

/***/ "./src/components/HomePageContent/partnersPage.scss":
/*!**********************************************************!*\
  !*** ./src/components/HomePageContent/partnersPage.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"partnerlogos": "_3OMJ1N46fbMrSn0rLNi5_r",
	"main": "_2T5EogM9xZIEsZBwffhIrb",
	"partners": "_3M7icMD2BxH3nbaJkSZsNX",
	"logo-container": "_1tM2dP9pfTROhBsW3zx5o2",
	"CSC": "d6rvpsryj60vDSrrmqo6I",
	"NIEC": "IVPfI3IY9aiM4azspd8OR",
	"SIM": "_8z73npOrNzoZ-dWD605BQ",
	"LASALLE": "_2NbMc7HxwbTiSgPhpmDlro",
	"govtech": "_33LQHDPmPR9XiZZbMqUq8P",
	"NP": "r4f58N1BmDW922s9jAD02",
	"NYP": "_345juRN_Uiu3y0o8WvmXT_",
	"SUSS": "_3Iy8ZIUdXcagkG2VKY080g",
	"SUTD": "_13O_MGujcGTIDWIphYmRZm",
	"SEAB": "_32-tyzjvufWIFF2Iwt_1L",
	"SP": "XYiP9Hz03y0Csq3MNaXcx",
	"NTU": "_24Vm-MGk2VHs4EMycVGj6u",
	"NUS": "_1ZwRHaSyyCQbgxFpUjzO7z",
	"TP": "VAOeCKQhO9n5j9J_Qq3x9",
	"RP": "_3ihsoxWwBMt5Yag3sun17J"
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
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/Layout/FooterBar.js";

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
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/Layout/NavigationBar/NavigationBar.js";

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

/***/ "./src/components/MainPageContainer.js":
/*!*********************************************!*\
  !*** ./src/components/MainPageContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePageContent_AboutSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePageContent/AboutSection */ "./src/components/HomePageContent/AboutSection.js");
/* harmony import */ var _HomePageContent_DropZoneSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePageContent/DropZoneSection */ "./src/components/HomePageContent/DropZoneSection.js");
/* harmony import */ var _HomePageContent_PartnersSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePageContent/PartnersSection */ "./src/components/HomePageContent/PartnersSection.js");
var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/MainPageContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MainPageContainer = () => __jsx("div", {
  className: "container-fluid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_HomePageContent_DropZoneSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_HomePageContent_AboutSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (MainPageContainer);

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
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__["getLogger"])("config"); // const { publicRuntimeConfig } = getConfig();

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
const GA_DEVELOPMENT_ID = "UA-130492260-2"; // export const IS_MAINNET = publicRuntimeConfig.network === "mainnet";

const IS_MAINNET = false;
const DEFAULT_NETWORK = IS_MAINNET ? NETWORK_TYPES.INFURA_MAINNET : NETWORK_TYPES.INFURA_ROPSTEN;
const GA_ID = IS_MAINNET ? GA_PRODUCTION_ID : GA_DEVELOPMENT_ID;
const CAPTCHA_CLIENT_KEY = "6LfiL3EUAAAAAHrfLvl2KhRAcXpanNXDqu6M0CCS";
const EMAIL_API_URL = IS_MAINNET ? `${API_MAIN_URL}/email` : `${API_ROPSTEN_URL}/email`;
const SHARE_LINK_API_URL = IS_MAINNET ? `${API_MAIN_URL}/storage` : `${API_ROPSTEN_URL}/storage`;
const SHARE_LINK_TTL = 1209600;
const INFURA_PROJECT_ID = "1f1ff2b3fca04f8d99f67d465c59e4ef";
const LEGACY_OPENCERTS_RENDERER = "https://legacy.opencerts.io/"; // publicRuntimeConfig.legacyRendererUrl || "https://legacy.opencerts.io/";

const ENVIRONMENT = "development"; // publicRuntimeConfig.context === "production" ? "production" : "development";

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

/***/ "./src/constants/PartnerLogo.json":
/*!****************************************!*\
  !*** ./src/constants/PartnerLogo.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"key\":\"NP\",\"name\":\"Ngee Ann Polytechnic\",\"value\":\"/static/images/NP_logo.svg\",\"link\":\"https://www.np.edu.sg/Pages/default.aspx\"},{\"key\":\"NYP\",\"name\":\"Nanyang Polytechnic\",\"value\":\"/static/images/NYP_logo.png\",\"link\":\"https://www.nyp.edu.sg/\"},{\"key\":\"RP\",\"name\":\"Republic Polytechnic\",\"value\":\"/static/images/RP_logo.svg\",\"link\":\"https://www.rp.edu.sg/\"},{\"key\":\"SP\",\"name\":\"Singapore Polytechnic\",\"value\":\"/static/images/SP_logo.svg\",\"link\":\"https://www.sp.edu.sg/\"},{\"key\":\"TP\",\"name\":\"Temasek Polytechnic\",\"value\":\"/static/images/TP_logo.svg\",\"link\":\"https://www.tp.edu.sg/\"},{\"key\":\"SEAB\",\"name\":\"Singapore Examinations and Assessment Board\",\"value\":\"/static/images/SEAB_logo.png\",\"link\":\"https://www.seab.gov.sg/\"},{\"key\":\"ITE\",\"name\":\"Institute of Technical Education\",\"value\":\"/static/images/ITE_logo.png\",\"link\":\"https://www.ite.edu.sg/\"},{\"key\":\"NIEC\",\"name\":\"National Institute of Early Childhood Development\",\"value\":\"/static/images/NIEC_logo.png\",\"link\":\"https://www.niec.edu.sg/\"},{\"key\":\"NTU\",\"name\":\"Nanyang Technological University\",\"value\":\"/static/images/NTU_logo.png\",\"link\":\"https://www.ntu.edu.sg/\"},{\"key\":\"NUS\",\"name\":\"National University of Singapore\",\"value\":\"/static/images/NUS_logo.png\",\"link\":\"http://nus.edu.sg/\"},{\"key\":\"SIT\",\"name\":\"Singapore Institute of Technology\",\"value\":\"/static/images/SIT_logo.png\",\"link\":\"https://www.singaporetech.edu.sg/\"},{\"key\":\"SMU\",\"name\":\"Singapore Management University\",\"value\":\"/static/images/SMU_logo.png\",\"link\":\"https://www.smu.edu.sg/\"},{\"key\":\"SUSS\",\"name\":\"Singapore University of Social Sciences\",\"value\":\"/static/images/SUSS_logo.png\",\"link\":\"https://www.suss.edu.sg/\"},{\"key\":\"SUTD\",\"name\":\"Singapore University of Technology and Design\",\"value\":\"/static/images/SUTD_logo.png\",\"link\":\"https://sutd.edu.sg/\"},{\"key\":\"NAFA\",\"name\":\"Nanyang Academy of Fine Arts\",\"value\":\"/static/images/NAFA_logo.png\",\"link\":\"https://www.nafa.edu.sg/\"},{\"key\":\"LASALLE\",\"name\":\"LASALLE College of the Arts\",\"value\":\"/static/images/LASALLE_logo.png\",\"link\":\"https://www.lasalle.edu.sg/\"},{\"key\":\"SSG\",\"name\":\"SkillsFuture Singapore Agency\",\"value\":\"/static/images/SSG_logo.png\",\"link\":\"https://www.ssg-wsg.gov.sg/\"},{\"key\":\"govtech\",\"name\":\"Government Technology Agency\",\"value\":\"/static/images/GOVTECH_logo.png\",\"link\":\"https://www.tech.gov.sg/\"}]");

/***/ }),

/***/ "./src/reducers/application.js":
/*!*************************************!*\
  !*** ./src/reducers/application.js ***!
  \*************************************/
/*! exports provided: initialState, types, default, updateWeb3, updateNetworkId, foundNewBlock, announceMinedTransaction, removeTxFromPollingList, getNetwork, getNetworkPending, getCustomRpc, getNetworkId, getTxPollingList, getNetworkPollingTask, getCurrentBlockNumber, getTransactionReceipt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWeb3", function() { return updateWeb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNetworkId", function() { return updateNetworkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundNewBlock", function() { return foundNewBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announceMinedTransaction", function() { return announceMinedTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTxFromPollingList", function() { return removeTxFromPollingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetwork", function() { return getNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkPending", function() { return getNetworkPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomRpc", function() { return getCustomRpc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkId", function() { return getNetworkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTxPollingList", function() { return getTxPollingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkPollingTask", function() { return getNetworkPollingTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentBlockNumber", function() { return getCurrentBlockNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionReceipt", function() { return getTransactionReceipt; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config/index.js");



const initialState = {
  network: _config__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_NETWORK"],
  networkId: null,
  networkIdVerbose: "",
  customRpc: "",
  networkUpdatePending: true,
  txPollingList: {},
  currentBlockContents: undefined,
  currentBlockNumber: 0
}; // Actions

const types = {
  UPDATE_WEB3: "UPDATE_WEB3",
  UPDATE_NETWORK_ID: "UPDATE_NETWORK_ID",
  UPDATE_NETWORK_ID_SUCCESS: "UPDATE_NETWORK_ID_SUCCESS",
  UPDATE_NETWORK_ID_FAILURE: "UPDATE_NETWORK_ID_FAILURE",
  NEW_BLOCK: "NEW_BLOCK",
  TRANSACTION_MINED: "TRANSACTION_MINED",
  TX_POLLING_ADD: "TX_POLLING_ADD",
  TX_POLLING_REMOVE: "TX_POLLING_REMOVE" // polling_started
  // add to poll : should take a tx hash and a callback action
  // remove from poll
  // polling_stopped

}; // Reducers

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_WEB3:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        network: action.payload.network,
        customRpc: action.payload.customRpc
      });

    case types.UPDATE_NETWORK_ID:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        networkId: null,
        networkIdVerbose: "",
        networkUpdatePending: true,
        currentBlockNumber: 0,
        currentBlockContents: undefined
      });

    case types.UPDATE_NETWORK_ID_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        networkId: action.payload.networkId,
        networkIdVerbose: action.payload.networkIdVerbose,
        networkUpdatePending: false
      });

    case types.UPDATE_NETWORK_ID_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        networkId: null,
        networkIdVerbose: "",
        networkUpdatePending: false
      });

    case types.TX_POLLING_ADD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        txPollingList: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.txPollingList, {
          [action.payload.txHash]: true
        })
      });

    case types.TX_POLLING_REMOVE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        txPollingList: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(state.txPollingList, action.payload.txHash)
      });

    case types.TRANSACTION_MINED:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        minedTransactions: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.minedTransactions, {
          [action.payload.txHash]: action.payload.txReceipt
        })
      });

    case types.NEW_BLOCK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        currentBlockNumber: action.payload.blockNumber,
        currentBlockContents: action.payload.blockContents
      });

    default:
      return state;
  }
} // Action Creators

function updateWeb3(payload) {
  return {
    type: types.UPDATE_WEB3,
    payload
  };
}
function updateNetworkId() {
  return {
    type: types.UPDATE_NETWORK_ID
  };
}
function foundNewBlock(payload) {
  return {
    type: types.NEW_BLOCK,
    payload
  };
}
function announceMinedTransaction(payload) {
  return {
    type: types.TRANSACTION_MINED,
    payload
  };
}
function removeTxFromPollingList(payload) {
  return {
    type: types.TX_POLLING_REMOVE,
    payload
  };
} // Selectors

function getNetwork(store) {
  return store.application.network;
}
function getNetworkPending(store) {
  return store.application.networkUpdatePending;
}
function getCustomRpc(store) {
  return store.application.customRpc;
}
function getNetworkId(store) {
  return store.application.networkId;
}
function getTxPollingList(store) {
  return store.application.txPollingList;
}
function getNetworkPollingTask(store) {
  return store.application.networkPollingTask;
}
function getCurrentBlockNumber(store) {
  return store.application.currentBlockNumber;
}
function getTransactionReceipt(store, txHash) {
  if (store.application.minedTransactions[txHash]) {
    return store.application.minedTransactions[txHash];
  }

  return undefined;
}

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
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ajl/development/trybe/trybe.verification/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=index.js.map
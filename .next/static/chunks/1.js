(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/react-async-script/lib/async-script-loader.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-async-script/lib/async-script-loader.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = makeAsyncScript;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-async-script/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SCRIPT_MAP = {};

// A counter used to generate a unique id for each component that uses the function
var idCount = 0;

function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader = function (_Component) {
      _inherits(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        _classCallCheck(this, AsyncScriptLoader);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      AsyncScriptLoader.prototype.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }
        return this.__scriptLoaderID;
      };

      AsyncScriptLoader.prototype.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      AsyncScriptLoader.prototype.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      AsyncScriptLoader.prototype.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];
        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }
        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }
        delete window[options.callbackName];
      };

      AsyncScriptLoader.prototype.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId;

        // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = { loaded: true, observers: {} };
        }

        // check if script loading already
        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL];
          // if loaded or errored then "finish"
          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          }
          // if still loading then callback to observer queue
          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };
          return;
        }

        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */
        var observers = {};
        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };
        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };

        var script = document.createElement("script");

        script.src = scriptURL;
        script.async = true;
        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];
          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }
              observer(mapEntry);
              return true;
            });
          }
        };
        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];
          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      AsyncScriptLoader.prototype.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;
        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");
          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        }
        // Clean the observer entry
        var mapEntry = SCRIPT_MAP[scriptURL];
        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];
          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      AsyncScriptLoader.prototype.render = function render() {
        var globalName = options.globalName;
        // remove asyncScriptOnLoad from childProps

        var _props = this.props,
            asyncScriptOnLoad = _props.asyncScriptOnLoad,
            forwardedRef = _props.forwardedRef,
            childProps = _objectWithoutProperties(_props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }
        childProps.ref = forwardedRef;
        return (0, _react.createElement)(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(_react.Component);

    // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = (0, _react.forwardRef)(function (props, ref) {
      return (0, _react.createElement)(AsyncScriptLoader, _extends({}, props, { forwardedRef: ref }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: _propTypes2.default.func
    };

    return (0, _hoistNonReactStatics2.default)(ForwardedComponent, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-async-script/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/react-async-script/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/es/index.js ***!
  \*************************************************************/
/*! exports provided: default, ReCAPTCHA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha-wrapper */ "./node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js");
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/es/recaptcha.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCAPTCHA", function() { return _recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/es/recaptcha-wrapper.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/es/recaptcha.js");
/* harmony import */ var react_async_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-async-script */ "./node_modules/react-async-script/lib/async-script-loader.js");
/* harmony import */ var react_async_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_async_script__WEBPACK_IMPORTED_MODULE_1__);



function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}
function getURL() {
  var dynamicOptions = getOptions();
  var lang = dynamicOptions.lang ? "&hl=" + dynamicOptions.lang : "";
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit" + lang;
}

var callbackName = "onloadcallback";
var globalName = "grecaptcha";
var initialOptions = getOptions();

/* harmony default export */ __webpack_exports__["default"] = (react_async_script__WEBPACK_IMPORTED_MODULE_1___default()(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  removeOnUnmount: initialOptions.removeOnUnmount || false
})(_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./node_modules/react-google-recaptcha/lib/es/recaptcha.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/es/recaptcha.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ReCAPTCHA = function (_React$Component) {
  _inherits(ReCAPTCHA, _React$Component);

  function ReCAPTCHA() {
    _classCallCheck(this, ReCAPTCHA);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.handleExpired = _this.handleExpired.bind(_this);
    _this.handleErrored = _this.handleErrored.bind(_this);
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_this);
    return _this;
  }

  ReCAPTCHA.prototype.getValue = function getValue() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this.props.grecaptcha.getResponse(this._widgetId);
    }
    return null;
  };

  ReCAPTCHA.prototype.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }
    return null;
  };

  ReCAPTCHA.prototype.execute = function execute() {
    var grecaptcha = this.props.grecaptcha;


    if (grecaptcha && this._widgetId !== undefined) {
      return grecaptcha.execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };

  ReCAPTCHA.prototype.reset = function reset() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      this.props.grecaptcha.reset(this._widgetId);
    }
  };

  ReCAPTCHA.prototype.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else if (this.props.onChange) {
      this.props.onChange(null);
    }
  };

  ReCAPTCHA.prototype.handleErrored = function handleErrored() {
    if (this.props.onErrored) this.props.onErrored();
  };

  ReCAPTCHA.prototype.explicitRender = function explicitRender() {
    if (this.props.grecaptcha && this.props.grecaptcha.render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = this.props.grecaptcha.render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.props.onChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        badge: this.props.badge
      });
      this.captcha.appendChild(wrapper);
    }
    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };

  ReCAPTCHA.prototype.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };

  ReCAPTCHA.prototype.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };

  ReCAPTCHA.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this._widgetId !== undefined) {
      this.delayOfCaptchaIframeRemoving();
      this.reset();
    }
  };

  ReCAPTCHA.prototype.delayOfCaptchaIframeRemoving = function delayOfCaptchaIframeRemoving() {
    var temporaryNode = document.createElement("div");
    document.body.appendChild(temporaryNode);
    temporaryNode.style.display = "none";

    // move of the recaptcha to a temporary node
    while (this.captcha.firstChild) {
      temporaryNode.appendChild(this.captcha.firstChild);
    }

    // delete the temporary node after reset will be done
    setTimeout(function () {
      document.body.removeChild(temporaryNode);
    }, 5000);
  };

  ReCAPTCHA.prototype.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };

  ReCAPTCHA.prototype.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
    /* eslint-disable no-unused-vars */
    var _props = this.props,
        sitekey = _props.sitekey,
        onChange = _props.onChange,
        theme = _props.theme,
        type = _props.type,
        tabindex = _props.tabindex,
        onExpired = _props.onExpired,
        onErrored = _props.onErrored,
        size = _props.size,
        stoken = _props.stoken,
        grecaptcha = _props.grecaptcha,
        badge = _props.badge,
        childProps = _objectWithoutProperties(_props, ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge"]);
    /* eslint-enable no-unused-vars */


    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, childProps, { ref: this.handleRecaptchaRef }));
  };

  return ReCAPTCHA;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReCAPTCHA);


ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  grecaptcha: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["dark", "light"]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["image", "audio"]),
  tabindex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onExpired: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onErrored: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["compact", "normal", "invisible"]),
  stoken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  badge: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["bottomright", "bottomleft", "inline"])
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ }),

/***/ "./src/components/CertificateSharing/CertificateSharingForm.js":
/*!*********************************************************************!*\
  !*** ./src/components/CertificateSharing/CertificateSharingForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sharing.scss */ "./src/components/CertificateSharing/sharing.scss");
/* harmony import */ var _sharing_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sharing_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");






var _jsxFileName = "/home/ajl/development/trybe/trybe.verification/src/components/CertificateSharing/CertificateSharingForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var CertificateSharingForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CertificateSharingForm, _Component);

  function CertificateSharingForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CertificateSharingForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CertificateSharingForm).call(this, props));
    _this.state = {
      captcha: "",
      email: ""
    };
    _this.handleCaptchaChange = _this.handleCaptchaChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleEmailChange = _this.handleEmailChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSend = _this.handleSend.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CertificateSharingForm, [{
    key: "handleCaptchaChange",
    value: function handleCaptchaChange(value) {
      this.setState({
        captcha: value
      });
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: "handleSend",
    value: function handleSend() {
      var _this$props = this.props,
          handleSendCertificate = _this$props.handleSendCertificate,
          emailSendingState = _this$props.emailSendingState;

      if (emailSendingState !== _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["states"].PENDING) {
        handleSendCertificate({
          email: this.state.email,
          captcha: this.state.captcha
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var emailSendingState = this.props.emailSendingState;
      return __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "col-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "row d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Send your certificate")), __jsx("div", {
        className: "row text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "This sends an email with your .opencert attached, and instructions on how to view it."), __jsx("div", {
        className: "row my-4 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("input", {
        className: "w-100",
        value: this.state.emailAddress,
        onChange: this.handleEmailChange,
        placeholder: "Enter recipient's email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), __jsx("div", {
        className: "row d-flex justify-content-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sitekey: _config__WEBPACK_IMPORTED_MODULE_9__["CAPTCHA_CLIENT_KEY"],
        onChange: this.handleCaptchaChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["states"].SUCCESS ? __jsx("div", {
        className: "row my-4 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Email successfully sent!") : "", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["states"].FAILURE ? __jsx("div", {
        className: "row my-4 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "An error occured, please check your email and captcha") : "", __jsx("div", {
        className: "row d-flex justify-content-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        className: "pointer ".concat(_sharing_scss__WEBPACK_IMPORTED_MODULE_10___default.a.btn),
        onClick: this.handleSend,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Send", emailSendingState === _reducers_certificate__WEBPACK_IMPORTED_MODULE_11__["states"].PENDING ? __jsx("i", {
        className: "ml-2 fas fa-spinner fa-pulse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }) : "")))));
    }
  }]);

  return CertificateSharingForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

CertificateSharingForm.propTypes = {
  emailSendingState: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  handleSendCertificate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  handleSharingToggle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CertificateSharingForm);

/***/ })

}]);
//# sourceMappingURL=1.js.map
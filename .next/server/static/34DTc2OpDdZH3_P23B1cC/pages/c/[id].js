module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "/h0W":
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6c5A");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "6c5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/reducers/certificate.js
var certificate = __webpack_require__("wXLy");

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/index.js + 1 modules
var NavigationBar = __webpack_require__("RTI1");

// EXTERNAL MODULE: ./src/components/CertificateDropZone/index.js + 5 modules
var CertificateDropZone = __webpack_require__("d3js");

// EXTERNAL MODULE: ./src/components/VerifierPageContent/dropZoneSection.scss
var dropZoneSection = __webpack_require__("uqh+");
var dropZoneSection_default = /*#__PURE__*/__webpack_require__.n(dropZoneSection);

// CONCATENATED MODULE: ./src/components/VerifierPageContent/DropZoneSection.js
var __jsx = external_react_default.a.createElement;






class DropZoneSection_DropZoneSection extends external_react_["Component"] {
  async componentDidMount() {
    let API_LOCATION;
    const VER_PATH = '/c/';
    const PUBLIC_ROUTE = 'public/cert';
    const url = window.location.href;
    const certParams = url.split(VER_PATH)[1];
    const [id, network] = certParams.split('?'); // If there is a cert id to look up

    if (id) {
      // Network IDs: 1=prod, 2=staging
      if (network == 1) {
        API_LOCATION = 'https://certs.api.convergence.tech:3002';
      } else if (network == 2) {
        API_LOCATION = 'http://169.48.26.238:3002';
      } else {
        API_LOCATION = 'http://localhost:3002';
      }

      const API_URL = `${API_LOCATION}/${PUBLIC_ROUTE}`;

      try {
        const certString = await fetch(`${API_URL}/${id}`);
        const cert = certString ? JSON.parse((await certString.json()).cert) : null;

        if (cert) {
          this.props.updateCertificate(cert);
        }
      } catch (err) {
        // ...
        console.error(err);
      }
    }
  } // eslint-disable-next-line class-methods-use-this


  render() {
    return __jsx("div", {
      className: "row p-5 bg-brand-dark text-white"
    }, __jsx("div", {
      className: dropZoneSection_default.a.main
    }, __jsx(CertificateDropZone["a" /* default */], null)));
  }

}

const mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(Object(certificate["z" /* updateCertificate */])(payload))
});

/* harmony default export */ var VerifierPageContent_DropZoneSection = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(DropZoneSection_DropZoneSection));
// CONCATENATED MODULE: ./src/components/VerifierPageContainer.js

var VerifierPageContainer_jsx = external_react_default.a.createElement;


const MainPageContainer = () => VerifierPageContainer_jsx("div", {
  className: "container-fluid"
}, VerifierPageContainer_jsx(VerifierPageContent_DropZoneSection, null));

/* harmony default export */ var VerifierPageContainer = (MainPageContainer);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./pages/c/[id].js
var _id_jsx = external_react_default.a.createElement;










const VerifierPage = props => {
  const getCertificate = () => {
    const encryptionKey = window.location.hash.substring(1); // using window.location.search because react router has issue getting the query on NextJS

    const documentId = external_query_string_default.a.parse(window.location.search).documentId;

    if (documentId) {
      const payload = {
        id: documentId,
        encryptionKey
      };
      props.retrieveCertificateByLink(payload);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getCertificate();
  }, []);
  return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(NavigationBar["a" /* default */], {
    active: "home"
  }), _id_jsx(VerifierPageContainer, null));
};

const _id_mapDispatchToProps = dispatch => ({
  retrieveCertificateByLink: payload => dispatch(Object(certificate["t" /* retrieveCertificateByLink */])(payload))
});

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(null, _id_mapDispatchToProps)(Object(router_["withRouter"])(VerifierPage)));

/***/ }),

/***/ "89tK":
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

/***/ "8SHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return NETWORK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return URL; });
/* unused harmony export API_MAIN_URL */
/* unused harmony export API_ROPSTEN_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IS_MAINNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAPTCHA_CLIENT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EMAIL_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SHARE_LINK_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SHARE_LINK_TTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INFURA_PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LEGACY_OPENCERTS_RENDERER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ENVIRONMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_SEO; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gjtA");


const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_1__[/* getLogger */ "a"])("config");
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

/***/ "JNC3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* unused harmony export updateWeb3 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateNetworkId; });
/* unused harmony export foundNewBlock */
/* unused harmony export announceMinedTransaction */
/* unused harmony export removeTxFromPollingList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNetworkPending; });
/* unused harmony export getCustomRpc */
/* unused harmony export getNetworkId */
/* unused harmony export getTxPollingList */
/* unused harmony export getNetworkPollingTask */
/* unused harmony export getCurrentBlockNumber */
/* unused harmony export getTransactionReceipt */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8SHQ");



const initialState = {
  network: _config__WEBPACK_IMPORTED_MODULE_2__[/* DEFAULT_NETWORK */ "b"],
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        network: action.payload.network,
        customRpc: action.payload.customRpc
      });

    case types.UPDATE_NETWORK_ID:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        networkId: null,
        networkIdVerbose: "",
        networkUpdatePending: true,
        currentBlockNumber: 0,
        currentBlockContents: undefined
      });

    case types.UPDATE_NETWORK_ID_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        networkId: action.payload.networkId,
        networkIdVerbose: action.payload.networkIdVerbose,
        networkUpdatePending: false
      });

    case types.UPDATE_NETWORK_ID_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        networkId: null,
        networkIdVerbose: "",
        networkUpdatePending: false
      });

    case types.TX_POLLING_ADD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        txPollingList: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state.txPollingList, {
          [action.payload.txHash]: true
        })
      });

    case types.TX_POLLING_REMOVE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        txPollingList: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(state.txPollingList, action.payload.txHash)
      });

    case types.TRANSACTION_MINED:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        minedTransactions: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state.minedTransactions, {
          [action.payload.txHash]: action.payload.txReceipt
        })
      });

    case types.NEW_BLOCK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "RTI1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/navBar.scss
var navBar = __webpack_require__("/h0W");
var navBar_default = /*#__PURE__*/__webpack_require__.n(navBar);

// CONCATENATED MODULE: ./src/components/Layout/NavigationBar/NavigationBar.js

var __jsx = external_react_default.a.createElement;

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
    className: `${navBar_default.a["nav-item"]} ${n.id === active ? navBar_default.a.active : ""}`,
    key: i
  }, __jsx("a", {
    href: n.path
  }, n.label)));
  return __jsx("ul", {
    className: "navbar-nav ml-auto d-none d-lg-flex d-xl-flex"
  }, items);
};

const NavigationBar = ({
  active
}) => __jsx("nav", {
  className: `${navBar_default.a.navbar} ${"navbar-expand-md navbar-dark bg-brand-dark"}`
}, __jsx("div", {
  className: navBar_default.a.innerbar
}, __jsx("a", {
  className: "navbar-brand",
  href: "/"
}, __jsx("img", {
  src: "/static/images/white-convergence.png",
  alt: "convergence"
})), __jsx("button", {
  className: `${navBar_default.a["navbar-toggler"]} d-none`,
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#top-nav",
  "aria-controls": "top-nav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, __jsx("span", {
  className: `${navBar_default.a["toggler-icon"]} ${"navbar-toggler-icon"}`
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "top-nav"
}, renderNavItem(active))));

/* harmony default export */ var NavigationBar_NavigationBar = (NavigationBar);
// CONCATENATED MODULE: ./src/components/Layout/NavigationBar/index.js

/* harmony default export */ var Layout_NavigationBar = __webpack_exports__["a"] = (NavigationBar_NavigationBar);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d3js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");
var external_react_dropzone_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/reducers/certificate.js
var certificate = __webpack_require__("wXLy");

// EXTERNAL MODULE: ./src/reducers/application.js
var application = __webpack_require__("JNC3");

// EXTERNAL MODULE: ./src/components/CertificateDropZone/Views/viewerStyles.scss
var viewerStyles = __webpack_require__("89tK");
var viewerStyles_default = /*#__PURE__*/__webpack_require__.n(viewerStyles);

// CONCATENATED MODULE: ./src/components/CertificateDropZone/Views/DefaultView.js

var __jsx = external_react_default.a.createElement;


const View = ({
  hover,
  accept
}) => __jsx("div", {
  className: `${viewerStyles_default.a["viewer-container"]} ${// eslint-disable-next-line no-nested-ternary
  hover ? accept ? viewerStyles_default.a.accept : viewerStyles_default.a.invalid : viewerStyles_default.a.default}`,
  style: {
    borderRadius: 10
  }
}, __jsx("div", {
  className: viewerStyles_default.a["image-container"]
}, __jsx("i", null, __jsx("img", {
  alt: ".opencert Dropzone",
  src: "/static/images/dropzone/dropzone_illustration.svg"
}))), accept ? null : __jsx("div", null, "File cannot be read. Please check that you have a valid .opencert file"), __jsx("div", {
  className: "text-brand-dark",
  style: {
    fontSize: "1.375rem",
    fontWeight: 500
  }
}, "Drag and drop your opencert file"), __jsx("div", {
  className: "text-muted"
}, "to view its contents"), __jsx("div", {
  className: "text-muted row"
}, __jsx("div", {
  className: "col-2"
}), __jsx("div", {
  className: "col-3"
}, __jsx("hr", null)), __jsx("div", {
  className: "col-2"
}, "or"), __jsx("div", {
  className: "col-3"
}, __jsx("hr", null))), __jsx("div", {
  className: "text-muted row"
}, __jsx("div", {
  className: "mx-auto"
}, __jsx("button", {
  type: "button",
  className: `pointer ${viewerStyles_default.a.btn}`
}, "Select File"))));

/* harmony default export */ var DefaultView = (View);
// CONCATENATED MODULE: ./src/components/CertificateDropZone/Views/VerifyingView.js

var VerifyingView_jsx = external_react_default.a.createElement;

const VerifyingView_View = ({
  verificationStatus,
  retrieveCertificateStatus
}) => {
  const lastStatus = verificationStatus && verificationStatus[verificationStatus.length - 1];
  let statusIcon;

  if (lastStatus && lastStatus.message) {
    if (!lastStatus.warning && !lastStatus.error) {
      statusIcon = VerifyingView_jsx("i", {
        className: "fas fa-check text-green mr-3"
      });
    } else if (!lastStatus.error) {
      statusIcon = VerifyingView_jsx("i", {
        className: "fas fa-exclamation-triangle text-orange mr-3"
      });
    } else {
      statusIcon = VerifyingView_jsx("i", {
        className: "fas fa-times-circle text-red mr-3"
      });
    }
  }

  return VerifyingView_jsx("div", {
    className: "text-center bg-light h-100 d-flex flex-column justify-content-center p-4 text-blue",
    style: {
      borderRadius: 10
    }
  }, VerifyingView_jsx("i", {
    className: "fas fa-spinner fa-pulse fa-3x"
  }), VerifyingView_jsx("div", {
    className: "m-3",
    style: {
      fontSize: "1.5rem"
    }
  }, retrieveCertificateStatus === "PENDING" ? "Retrieving Certificate..." : "Verifying Certificate..."), lastStatus && lastStatus.message ? VerifyingView_jsx("div", {
    className: "text-muted"
  }, statusIcon, lastStatus.message) : null);
};

/* harmony default export */ var VerifyingView = (VerifyingView_View);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/CertificateDropZone/Views/UnverifiedView.js

var UnverifiedView_jsx = external_react_default.a.createElement;



const UnverifiedView_View = ({
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
  return UnverifiedView_jsx("div", {
    className: `${viewerStyles_default.a["viewer-container"]} ${isWarning ? viewerStyles_default.a.warning : viewerStyles_default.a.invalid}`,
    style: {
      backgroundColor: isWarning ? "#fbf6e9" : "#fbeae9",
      borderRadius: 10
    }
  }, UnverifiedView_jsx("span", {
    className: viewerStyles_default.a["message-container"]
  }, isWarning ? UnverifiedView_jsx("img", {
    src: "/static/images/dropzone/warning.svg"
  }) : UnverifiedView_jsx("img", {
    src: "/static/images/dropzone/invalid.svg"
  }), UnverifiedView_jsx("span", {
    className: `${isWarning ? "warning" : "invalid"} m-3`,
    style: {
      fontSize: "1.5rem"
    }
  }, isWarning ? "Certificate from unregistered institution" : "This certificate is not valid")), UnverifiedView_jsx("div", {
    className: viewerStyles_default.a.verifications
  }, error !== undefined ? UnverifiedView_jsx("div", null, UnverifiedView_jsx("p", {
    className: viewerStyles_default.a.messages
  }, error.title), UnverifiedView_jsx("p", null, error.message)) : null), UnverifiedView_jsx(link_default.a, {
    href: "/faq"
  }, UnverifiedView_jsx("div", {
    className: viewerStyles_default.a["unverified-btn"]
  }, "What should I do?")), UnverifiedView_jsx("div", {
    className: viewerStyles_default.a["secondary-links"]
  }, UnverifiedView_jsx("span", null, UnverifiedView_jsx(link_default.a, {
    href: " "
  }, UnverifiedView_jsx("a", {
    onClick: e => {
      e.preventDefault();
      resetData();
    },
    className: viewerStyles_default.a["text-link"]
  }, "Try another"))), isWarning ? UnverifiedView_jsx("span", {
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }, UnverifiedView_jsx(link_default.a, {
    href: "/viewer"
  }, UnverifiedView_jsx("a", {
    id: "certificate-view-anyway",
    className: viewerStyles_default.a["text-link"]
  }, "View certificate anyway"))) : ""));
};

/* harmony default export */ var UnverifiedView = (UnverifiedView_View);
// CONCATENATED MODULE: ./src/components/CertificateDropZone/CertificateVerificationStatus.js

var CertificateVerificationStatus_jsx = external_react_default.a.createElement;




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
    return CertificateVerificationStatus_jsx(DefaultView, {
      hover: true,
      accept: true
    });
  }

  if (fileError) {
    return CertificateVerificationStatus_jsx(DefaultView, {
      hover: true,
      accept: false
    });
  }

  if (verifying || retrieveCertificateStatus === "PENDING") {
    return CertificateVerificationStatus_jsx(VerifyingView, {
      verificationStatus: verificationStatus,
      retrieveCertificateStatus: retrieveCertificateStatus
    });
  }

  if (document && (!hashStatus.verified || !issuedStatus.verified || !notRevokedStatus.verified || !issuerIdentityStatus.verified || !storeStatus.verified)) {
    return CertificateVerificationStatus_jsx(UnverifiedView, {
      handleRenderOverwrite: handleRenderOverwrite,
      resetData: () => resetData(),
      hashStatus: hashStatus,
      issuedStatus: issuedStatus,
      notRevokedStatus: notRevokedStatus,
      issuerIdentityStatus: issuerIdentityStatus,
      storeStatus: storeStatus
    });
  }

  return CertificateVerificationStatus_jsx(DefaultView, {
    hover: false,
    accept: true
  });
};

/* harmony default export */ var CertificateDropZone_CertificateVerificationStatus = (CertificateVerificationStatus);
// CONCATENATED MODULE: ./src/components/CertificateDropZone/CertificateDropZoneContainer.js
var CertificateDropZoneContainer_jsx = external_react_default.a.createElement;








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

class CertificateDropZoneContainer_CertificateDropZoneContainer extends external_react_["Component"] {
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
    router_default.a.prefetch("/viewer");
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
    return CertificateDropZoneContainer_jsx(external_react_dropzone_default.a, {
      id: "certificate-dropzone",
      onDrop: acceptedFiles => onFileDrop(acceptedFiles, this.handleCertificateChange, this.handleFileError),
      className: "h-100"
    }, props => CertificateDropZoneContainer_jsx(CertificateDropZone_CertificateVerificationStatus, {
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
      hover: props.isDragAccept
    }));
  }

}

const mapStateToProps = store => ({
  document: Object(certificate["d" /* getCertificate */])(store),
  // Verification statuses used in verifier block
  encryptedCertificateStatus: Object(certificate["f" /* getEncryptedCertificateStatus */])(store),
  verifying: Object(certificate["q" /* getVerifying */])(store),
  issuerIdentityStatus: Object(certificate["i" /* getIssuerIdentityStatus */])(store),
  hashStatus: Object(certificate["g" /* getHashStatus */])(store),
  issuedStatus: Object(certificate["h" /* getIssuedStatus */])(store),
  notRevokedStatus: Object(certificate["j" /* getNotRevokedStatus */])(store),
  verificationStatus: Object(certificate["o" /* getVerificationStatus */])(store),
  storeStatus: Object(certificate["m" /* getStoreStatus */])(store)
});

const mapDispatchToProps = dispatch => ({
  updateNetworkId: () => dispatch(Object(application["e" /* updateNetworkId */])()),
  updateCertificate: payload => dispatch(Object(certificate["z" /* updateCertificate */])(payload)),
  resetData: () => dispatch(Object(certificate["s" /* resetCertificateState */])())
});

/* harmony default export */ var CertificateDropZone_CertificateDropZoneContainer = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(CertificateDropZoneContainer_CertificateDropZoneContainer));
// CONCATENATED MODULE: ./src/components/CertificateDropZone/index.js

/* harmony default export */ var CertificateDropZone = __webpack_exports__["a"] = (CertificateDropZone_CertificateDropZoneContainer);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

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

      if (false) {}

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
        if (false) {}

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "gjtA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return trace; });
/* unused harmony export error */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogger; });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i4Cb");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
 // not using .extends because of stupid next.js resolve modules bug where its picking up old version of debug

const trace = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:trace:${namespace}`);
const error = namespace => debug__WEBPACK_IMPORTED_MODULE_0___default()(`opencerts-website:error:${namespace}`);
const getLogger = namespace => ({
  trace: trace(namespace),
  error: error(namespace)
});

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uqh+":
/***/ (function(module, exports) {

module.exports = {
	"main": "_1LQAUmRCmSjeZDfl5E-u6I",
	"description": "_3bSbiAHK3xNo_kflhIW-Dd",
	"pulse": "_3a2U6iuejvywIhEw5XK2bv"
};

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "wXLy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return states; });
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return resetCertificateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateCertificate; });
/* unused harmony export verifyCertificate */
/* unused harmony export updateFilteredCertificate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return verifyingCertificateIssuerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return verifyingCertificateIssuerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return verifyingCertificateStoreSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return verifyingCertificateStoreFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return verifyingCertificateRevocationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return verifyingCertificateRevocationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return verifyingCertificateIssuedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return verifyingCertificateIssuedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return verifyingCertificateHashSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return verifyingCertificateHashFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sendCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return sendCertificateReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return retrieveCertificateByLink; });
/* unused harmony export resetCertificateObfuscation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return updateObfuscatedCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return selectTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getIssuerIdentityStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getHashStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getStoreStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getIssuedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNotRevokedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getVerifying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getVerificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEmailSendingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getShareLinkState; });
/* unused harmony export getEncryptedCertificate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getEncryptedCertificateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getActiveTemplateTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getTemplates; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");

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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState);

    case types.UPDATE_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState, {
        raw: action.payload,
        rawModified: action.payload,
        store: null,
        storeError: null,
        storeLoading: true
      });

    case types.LOADING_STORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        store: action.payload,
        storeError: null,
        storeLoading: false
      });

    case types.LOADING_STORE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        storeError: action.payload,
        storeLoading: false
      });

    case types.VERIFYING_CERTIFICATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.PENDING,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.INITIAL,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.SUCCESS,
        emailError: null
      });

    case types.SENDING_CERTIFICATE_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        emailState: states.FAILURE,
        emailError: action.payload
      });

    case types.GENERATE_SHARE_LINK_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        shareLink: action.payload,
        shareLinkState: states.SUCCESS
      });

    case types.GENERATE_SHARE_LINK_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        shareLink: {},
        shareLinkState: states.FAILURE
      });

    case types.GENERATE_SHARE_LINK_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        shareLink: {},
        shareLinkState: states.INITIAL
      });

    case types.GET_CERTIFICATE_BY_ID_PENDING:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        encryptedCertificateState: states.PENDING
      });

    case types.GET_CERTIFICATE_BY_ID_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        encryptedCertificate: action.payload,
        encryptedCertificateState: states.SUCCESS
      });

    case types.GET_CERTIFICATE_BY_ID_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        encryptedCertificate: {},
        encryptedCertificateState: states.FAILURE,
        encryptedCertificateError: action.payload
      });

    case types.CERTIFICATE_OBFUSCATE_RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialState, {
        rawModified: state.raw
      });

    case types.CERTIFICATE_OBFUSCATE_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        rawModified: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_REGISTER:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
        templates: action.payload
      });

    case types.CERTIFICATE_TEMPLATE_SELECT_TAB:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state, {
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

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });
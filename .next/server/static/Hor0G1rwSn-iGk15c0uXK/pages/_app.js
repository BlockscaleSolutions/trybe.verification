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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next-ga"
var external_next_ga_ = __webpack_require__("3Snp");
var external_next_ga_default = /*#__PURE__*/__webpack_require__.n(external_next_ga_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./src/reducers/application.js
var application = __webpack_require__("JNC3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__("MDWq");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);

// EXTERNAL MODULE: ./src/config/index.js
var src_config = __webpack_require__("8SHQ");

// CONCATENATED MODULE: ./src/services/web3/getWeb3.js




const ProviderEngine = __webpack_require__("NTQP");

const WebsocketSubProvider = __webpack_require__("e01U");

let web3Instance;

async function loadWeb3InfuraWebsocket(mainnet = true) {
  const rpcUrl = mainnet ? `wss://mainnet.infura.io/ws/v3/${src_config["g" /* INFURA_PROJECT_ID */]}` : `wss://ropsten.infura.io/ws/v3/${src_config["g" /* INFURA_PROJECT_ID */]}`;
  const engine = new ProviderEngine();
  const web3 = new external_web3_default.a(engine);
  const fetchProvider = new WebsocketSubProvider({
    rpcUrl
  });
  engine.addProvider(fetchProvider);
  engine.start();
  return web3;
}

async function loadWeb3Injected() {
  let {
    web3
  } = window;
  const alreadyInjected = typeof web3 !== "undefined";
  if (!alreadyInjected) throw new Error("Metamask cannot be found");
  web3 = new external_web3_default.a(web3.currentProvider);
  return web3;
}

async function loadWeb3CustomRpc(rpc = "http://localhost:8545") {
  let {
    web3
  } = window;
  const provider = new external_web3_default.a.providers.HttpProvider(rpc);
  web3 = new external_web3_default.a(provider);
  return web3;
}

async function loadWeb3Mock() {
  return {
    eth: {
      currentProvider: {},
      getAccounts: () => []
    }
  };
}

async function resolveWeb3(resolve, reject, t = src_config["j" /* NETWORK_TYPES */].INJECTED, config) {
  try {
    switch (t) {
      case src_config["j" /* NETWORK_TYPES */].INFURA_ROPSTEN:
        web3Instance = await loadWeb3InfuraWebsocket(false);
        break;

      case src_config["j" /* NETWORK_TYPES */].INFURA_MAINNET:
        web3Instance = await loadWeb3InfuraWebsocket();
        break;

      case src_config["j" /* NETWORK_TYPES */].INJECTED:
        web3Instance = await loadWeb3Injected();
        break;

      case src_config["j" /* NETWORK_TYPES */].CUSTOM:
        web3Instance = await loadWeb3CustomRpc(config);
        break;

      case src_config["j" /* NETWORK_TYPES */].MOCK:
        web3Instance = await loadWeb3Mock();
        break;

      default:
        web3Instance = await loadWeb3InfuraWebsocket();
    }

    resolve(web3Instance);
  } catch (e) {
    reject(e);
  }
}

function setNewWeb3(t, config) {
  return new promise_default.a((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    // Server-side rendering fails when trying to access window
    if (false) {}
  });
}
function getWeb3(t, config) {
  if (web3Instance) {
    return new promise_default.a(resolve => {
      resolve(web3Instance);
    });
  }

  return setNewWeb3(t, config);
}
/* harmony default export */ var web3_getWeb3 = (getWeb3);
// CONCATENATED MODULE: ./src/services/web3/getAccounts.js

// Wrap web3.eth.getAccounts in a Promise
const getAccounts = web3 => new promise_default.a((resolve, reject) => {
  web3.eth.getAccounts((error, accounts) => error ? reject(error) : resolve(accounts));
});
/* harmony default export */ var web3_getAccounts = (getAccounts);
// CONCATENATED MODULE: ./src/services/web3/index.js


// CONCATENATED MODULE: ./src/sagas/application.js



function matchNetwork(networkId) {
  const networkIdVerbose = {
    1: "Main",
    2: "Morden",
    3: "Ropsten",
    4: "Rinkeby",
    42: "Kovan"
  };
  return networkIdVerbose[networkId] || `Custom Network: ${networkId}`;
}
function* getSelectedWeb3(getNew = false) {
  const networkPending = yield Object(effects_["select"])(application["c" /* getNetworkPending */]);

  if (networkPending && !getNew) {
    // block if there's a network update pending
    yield Object(effects_["take"])(application["d" /* types */].UPDATE_NETWORK_ID_SUCCESS);
  }

  const network = yield Object(effects_["select"])(application["b" /* getNetwork */]);
  const web3 = yield getNew ? setNewWeb3(network) : getWeb3(); // update web3 only if requested specifically

  return web3;
}
function* updateNetworkId() {
  try {
    const web3 = yield getSelectedWeb3(true);
    const networkId = yield web3.eth.net.getId();
    const networkIdVerbose = matchNetwork(networkId);
    yield Object(effects_["put"])({
      type: application["d" /* types */].UPDATE_NETWORK_ID_SUCCESS,
      payload: {
        networkId,
        networkIdVerbose
      }
    });
  } catch (e) {
    console.error(e); // eslint-disable-line

    yield Object(effects_["put"])({
      type: application["d" /* types */].UPDATE_NETWORK_ID_FAILURE,
      payload: e
    });
  }
}
/* harmony default export */ var sagas_application = ([Object(effects_["takeEvery"])(application["d" /* types */].UPDATE_NETWORK_ID, updateNetworkId), Object(effects_["takeEvery"])(application["d" /* types */].UPDATE_WEB3, updateNetworkId)]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "@govtechsg/open-attestation"
var open_attestation_ = __webpack_require__("va7A");

// EXTERNAL MODULE: external "ethereumjs-util"
var external_ethereumjs_util_ = __webpack_require__("kraY");

// EXTERNAL MODULE: external "@govtechsg/dnsprove"
var dnsprove_ = __webpack_require__("8X99");

// EXTERNAL MODULE: external "@govtechsg/opencerts-encryption"
var opencerts_encryption_ = __webpack_require__("DqQR");

// EXTERNAL MODULE: ./src/utils/logger.js
var logger = __webpack_require__("gjtA");

// EXTERNAL MODULE: ./src/reducers/certificate.js
var reducers_certificate = __webpack_require__("wXLy");

// EXTERNAL MODULE: ./src/services/contracts/DocumentStore.json
var DocumentStore = __webpack_require__("Hrlo");

// CONCATENATED MODULE: ./src/services/issuers/index.js
const defaultUrl = "/static/registry.json";
function fetchIssuers(url = defaultUrl) {
  return window.fetch(url).then(res => res.json()).then(json => json.issuers).catch(console.error); // eslint-disable-line
}
// CONCATENATED MODULE: ./src/utils/index.js
const {
  keccak256
} = __webpack_require__("kraY");

function bufSortJoin(...args) {
  return Buffer.concat([...args].sort(Buffer.compare));
}

function toBuf(str) {
  if (str instanceof Buffer) return str;
  return Buffer.from(str, "hex");
}

function combinedHash(first, second) {
  if (!second) {
    return toBuf(first);
  }

  if (!first) {
    return toBuf(second);
  }

  return keccak256(bufSortJoin(toBuf(first), toBuf(second)));
}
/* harmony default export */ var utils = (combinedHash);
const ethereumAddressMatcher = /^0x[a-fA-F0-9]{40}$/;
function isEthereumAddress(address) {
  return ethereumAddressMatcher.test(address);
}
// EXTERNAL MODULE: ./src/services/ens/contracts/ensContract.json
var ensContract = __webpack_require__("M8O+");

// EXTERNAL MODULE: ./src/services/ens/contracts/resolverContract.json
var resolverContract = __webpack_require__("XTJD");

// CONCATENATED MODULE: ./src/services/ens/ens.js






const {
  trace,
  error
} = Object(logger["a" /* getLogger */])("services:ens"); // Well-known addresses for ENS registry contracts

const ensRegistryContractAddress = {
  1: {
    registry: "0x314159265dd8dbb310642f98f50c066173c1259b"
  },
  3: {
    registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  }
};

function keccak256String(label) {
  return Object(external_ethereumjs_util_["bufferToHex"])(Object(external_ethereumjs_util_["keccak256"])(label));
}

function appendHash(node, label) {
  return keccak256String(node + Object(external_ethereumjs_util_["stripHexPrefix"])(keccak256String(label)));
}

function getNamehash(name) {
  const rootHash = "0x0000000000000000000000000000000000000000000000000000000000000000";

  if (name !== "") {
    const labels = name.split(".");
    const namehash = Object(external_lodash_["reduceRight"])(labels, appendHash, rootHash);
    trace(`Namehash for ${name} is ${namehash}`);
    return namehash;
  }

  return rootHash;
}

const getResolverContract = async addr => {
  trace("Instantiating resolver contract");
  const web3 = await getWeb3();
  const resolver = new web3.eth.Contract(resolverContract, addr);
  return {
    resolver
  };
};

const getENSContract = async () => {
  const web3 = await getWeb3();
  const networkId = await web3.eth.net.getId();
  trace(`Instantiating ENS Contract for networkID: ${networkId}`);
  const ens = new web3.eth.Contract(ensContract, ensRegistryContractAddress[networkId].registry);
  trace(`ENS Contract instantiated: ${ens}`);
  trace(ens);
  return ens;
};

const getResolverContractForDomain = async domain => {
  const ens = await getENSContract();
  const node = getNamehash(domain);
  const resolverContractAddress = await ens.methods.resolver(node).call();
  trace(`Got resolver address for ${domain}: ${resolverContractAddress}`);
  const {
    resolver
  } = await getResolverContract(resolverContractAddress);
  return resolver;
};

const getAddr = async domain => {
  try {
    trace(`Attempting to resolve: ${domain}`);
    const node = getNamehash(domain);
    const resolver = await getResolverContractForDomain(domain);
    trace(resolver);
    const setAddrMethod = resolver.methods.addr(node);
    const address = await setAddrMethod.call();
    trace(`Resolution of ${domain} resulted in: ${address}`);
    return address;
  } catch (err) {
    error(err);
    throw err;
  }
};
const getText = async (domain, recordType) => {
  try {
    // TODO: in uncontrolled environments should call supportsInterface("0x59d1d43c") to check if text records are supported on this resolver
    const node = getNamehash(domain);
    const resolver = await getResolverContractForDomain(domain);
    trace(`Calling getText:${recordType} on ENS for ${domain}`);
    const getTextMethod = resolver.methods.text(node, recordType);
    const text = await getTextMethod.call();
    trace(`Retrieving text record ${recordType} of ${domain} resulted in: ${text}`);
    return text;
  } catch (err) {
    error(err);
    throw err;
  }
};
const getName = async domain => {
  const resolverContractAddress = "0xcAcbE14d88380F8eb37ec0d7788ec226EE7b3434";
  const {
    resolver
  } = await getResolverContract(resolverContractAddress);
  const node = await getNamehash(domain);
  const setAddrMethod = resolver.methods.addr(node);
  return setAddrMethod.call();
};
// CONCATENATED MODULE: ./src/services/ens/ensResolveAddress.js



const {
  trace: ensResolveAddress_trace
} = Object(logger["a" /* getLogger */])("services:ensResolveAddress");
const ensResolveAddress = async domain => {
  ensResolveAddress_trace(`Received request to resolve: ${domain}`);

  if (isEthereumAddress(domain)) {
    ensResolveAddress_trace(`${domain} is an ethereum address, no resolution needed.`);
    return domain;
  }

  return getAddr(domain);
};
/* harmony default export */ var ens_ensResolveAddress = (ensResolveAddress);
// CONCATENATED MODULE: ./src/services/ens/index.js


// CONCATENATED MODULE: ./src/services/email/index.js



function sendEmail({
  certificate,
  email,
  captcha
}) {
  return window.fetch(src_config["d" /* EMAIL_API_URL */], {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: stringify_default()({
      data: certificate,
      to: email,
      captcha
    })
  }).then(res => res.status === 200);
}
// CONCATENATED MODULE: ./src/services/link/index.js



function generateLink(certificate) {
  return window.fetch(`${src_config["k" /* SHARE_LINK_API_URL */]}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: stringify_default()({
      ttl: src_config["l" /* SHARE_LINK_TTL */],
      document: certificate
    })
  }).then(res => res.json());
}
function getCertificateById(certificateId) {
  return window.fetch(`${src_config["k" /* SHARE_LINK_API_URL */]}/get/${certificateId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
// EXTERNAL MODULE: ./src/components/Analytics/index.js
var Analytics = __webpack_require__("3R5n");

// EXTERNAL MODULE: ./src/utils/certificate.js
var utils_certificate = __webpack_require__("VEfZ");

// CONCATENATED MODULE: ./src/sagas/certificate.js





















const {
  trace: certificate_trace,
  error: certificate_error
} = Object(logger["a" /* getLogger */])("saga:certificate");
const ANALYTICS_VERIFICATION_ERROR_CODE = {
  ISSUER_IDENTITY: 0,
  CERTIFICATE_HASH: 1,
  UNISSUED_CERTIFICATE: 2,
  REVOKED_CERTIFICATE: 3,
  CERTIFICATE_STORE: 4
};
function* loadCertificateContracts({
  payload
}) {
  try {
    const data = Object(open_attestation_["getData"])(payload);
    certificate_trace(`Loading certificate: ${data}`);
    const unresolvedContractStoreAddresses = Object(external_lodash_["get"])(data, "issuers", []).map(issuer => Object(utils_certificate["b" /* getDocumentStore */])(issuer));
    const web3 = yield getSelectedWeb3();
    const contractStoreAddresses = yield Object(effects_["all"])(unresolvedContractStoreAddresses.map(unresolvedAddress => Object(effects_["call"])(ensResolveAddress, unresolvedAddress)));
    certificate_trace(`Resolved certificate's store addresses, ${contractStoreAddresses}`);
    const {
      abi
    } = DocumentStore;
    const contracts = contractStoreAddresses.map(address => new web3.eth.Contract(abi, address));
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].LOADING_STORE_SUCCESS
    });
    return contracts;
  } catch (e) {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].LOADING_STORE_FAILURE,
      payload: e
    });
    return null;
  }
}
function* isValidENSDomain(storeAddress) {
  certificate_trace(`Checking if ${storeAddress} is a valid ENS Domain`);

  if (storeAddress == null) {
    throw new Error("No address in certificate");
  }

  const web3 = yield getSelectedWeb3();
  const ensToAddress = yield web3.eth.ens.getAddress(storeAddress);

  if (ensToAddress === null) {
    throw new Error("Invalid ENS");
  }

  return ensToAddress;
}
function* isValidSmartContract(storeAddress) {
  const web3 = yield getSelectedWeb3();
  const supportedContractHashes = ["0x7135575eac76f1817c27b06c452bdc2b7e1b13240797415684e227def063a127"];
  const onChainByteCode = yield web3.eth.getCode(storeAddress);
  const hashOfOnChainByteCode = web3.utils.keccak256(onChainByteCode);

  if (!supportedContractHashes.includes(hashOfOnChainByteCode)) {
    throw new Error("Invalid smart contract: "`${storeAddress}`);
  }

  return true;
}
function* verifyCertificateStore({
  certificate
}) {
  try {
    const data = Object(open_attestation_["getData"])(certificate);
    const contractStoreAddresses = Object(external_lodash_["get"])(data, "issuers", []).map(issuer => Object(utils_certificate["b" /* getDocumentStore */])(issuer));
    certificate_trace(`Attempting to verify certificate store: ${contractStoreAddresses}`);
    const [ethereumAddressIssuers, unresolvedEnsNames] = Object(external_lodash_["partition"])(contractStoreAddresses, external_ethereumjs_util_["isValidAddress"]);
    certificate_trace("ethereumAddressIssuers", ethereumAddressIssuers);
    certificate_trace("unresolvedEnsNames", unresolvedEnsNames);
    const resolvedEnsNames = yield unresolvedEnsNames.map(unresolvedEnsName => Object(effects_["call"])(isValidENSDomain, unresolvedEnsName)); // Concat the 2 arrays

    const combinedStoreAddresses = Object(external_lodash_["compact"])(ethereumAddressIssuers.concat(resolvedEnsNames)); // Checks if issuing institution has a valid smart contract with OpenCerts

    yield combinedStoreAddresses.map(address => isValidSmartContract(address));
    yield Object(effects_["put"])(Object(reducers_certificate["K" /* verifyingCertificateStoreSuccess */])());
    return combinedStoreAddresses;
  } catch (e) {
    certificate_error(e);
    yield Object(effects_["put"])(Object(reducers_certificate["J" /* verifyingCertificateStoreFailure */])({
      error: e.message
    }));
    return false;
  }
}
function* verifyCertificateHash({
  certificate
}) {
  const verified = Object(open_attestation_["verifySignature"])(certificate);

  if (verified) {
    yield Object(effects_["put"])(Object(reducers_certificate["C" /* verifyingCertificateHashSuccess */])());
    return true;
  }

  const hashError = new Error("Certificate data does not match target hash");
  certificate_error(hashError);
  yield Object(effects_["put"])(Object(reducers_certificate["B" /* verifyingCertificateHashFailure */])({
    error: hashError.message
  }));
  return false;
}
function* verifyCertificateIssued({
  certificate,
  certificateStores
}) {
  try {
    const merkleRoot = `0x${Object(external_lodash_["get"])(certificate, "signature.merkleRoot", "")}`; // Checks if certificate has been issued on ALL store

    const issuedStatuses = yield Object(effects_["all"])(certificateStores.map(store => store.methods.isIssued(merkleRoot).call()));
    if (issuedStatuses.length === 0) throw new Error("Invalid file");
    const isIssued = issuedStatuses.reduce((prev, curr) => prev && curr, true);
    if (!isIssued) throw new Error("Certificate has not been issued");
    yield Object(effects_["put"])(Object(reducers_certificate["E" /* verifyingCertificateIssuedSuccess */])());
    return true;
  } catch (e) {
    certificate_error(e);
    yield Object(effects_["put"])(Object(reducers_certificate["D" /* verifyingCertificateIssuedFailure */])({
      error: e.message
    }));
    return false;
  }
}
const getIntermediateHashes = (targetHash, proof = []) => {
  // Returns hash of all intermediate hashes from targetHash to merkleRoot
  const intermediateHashes = [`0x${targetHash}`];
  proof.reduce((accumulator, currentValue) => {
    const combined = combinedHash(accumulator, currentValue).toString("hex");
    intermediateHashes.push(`0x${combined}`);
    return combined;
  }, targetHash);
  return intermediateHashes;
};
function* verifyCertificateNotRevoked({
  certificate,
  certificateStores
}) {
  try {
    const targetHash = Object(external_lodash_["get"])(certificate, "signature.targetHash", null);
    const proof = Object(external_lodash_["get"])(certificate, "signature.proof", null); // Checks if certificate and path towards merkle root has been revoked

    const intermediateHashes = getIntermediateHashes(targetHash, proof);

    for (let i = 0; i < intermediateHashes.length; i += 1) {
      const hash = intermediateHashes[i]; // Check if certificate is revoked on ALL store

      const revokedStatus = yield Object(effects_["all"])(certificateStores.map(store => store.methods.isRevoked(hash).call()));
      const isRevoked = revokedStatus.reduce((prev, curr) => prev || curr, false);
      if (isRevoked) throw new Error(`Certificate has been revoked, revoked hash: ${hash}`);
    }

    yield Object(effects_["put"])(Object(reducers_certificate["I" /* verifyingCertificateRevocationSuccess */])());
    return true;
  } catch (e) {
    certificate_error(e);
    yield Object(effects_["put"])(Object(reducers_certificate["H" /* verifyingCertificateRevocationFailure */])({
      error: e.message
    }));
    return false;
  }
}

function isApprovedENSDomain(issuerAddress) {
  certificate_trace(`Checking if ${issuerAddress} is opencerts TLD`);
  const approvedENSDomains = [/(opencerts.eth)$/];
  return Object(external_lodash_["some"])(approvedENSDomains.map(domainMask => domainMask.test(issuerAddress.toLowerCase())));
}

function* lookupAddressOnRegistry(ethereumAddressIssuer) {
  const registeredIssuers = yield fetchIssuers();
  const issuersNormalised = Object(external_lodash_["mapKeys"])(registeredIssuers, (_, k) => k.toUpperCase());
  const identity = issuersNormalised[ethereumAddressIssuer.toUpperCase()];

  if (!identity) {
    throw new Error(`Issuer identity cannot be verified: ${ethereumAddressIssuer}`);
  }

  return identity;
}
function* resolveEnsNameToText(ensName) {
  certificate_trace("resolving ", ensName);

  if (!isApprovedENSDomain(ensName)) {
    const invalidEnsError = new Error(`Issuer identity cannot be verified: ${ensName}`);
    certificate_error(invalidEnsError);
    throw invalidEnsError;
  }

  const getTextResult = yield Object(effects_["call"])(getText, ensName, "issuerName");
  certificate_trace(`Got texts records for ${ensName}`, getTextResult);
  return getTextResult;
}
function* verifyCertificateDnsIssuer({
  issuer
}) {
  const location = Object(external_lodash_["get"])(issuer, "identityProof.location");
  if (!location) return false;
  const dnsRecords = yield Object(effects_["call"])(dnsprove_["getDocumentStoreRecords"], location);
  certificate_trace(`DNS records: ${stringify_default()(dnsRecords)}`); // dnsRecords: [{addr: "0xabc", netId: 3}]

  let verificationStatus = false;
  const documentStore = Object(utils_certificate["b" /* getDocumentStore */])(issuer);

  if (dnsRecords && dnsRecords.length > 0) {
    verificationStatus = dnsRecords.find(dns => dns.addr === documentStore && dns.netId === (src_config["h" /* IS_MAINNET */] ? "1" : "3"));
  }

  certificate_trace(`DNS Verification Status: ${stringify_default()(verificationStatus)}`);
  return verificationStatus ? location : false;
}
function* verifyCertificateRegistryIssuer({
  issuer
}) {
  try {
    const contractStoreAddresses = Object(utils_certificate["b" /* getDocumentStore */])(issuer);
    certificate_trace(`Attempting to verify certificate issuers: ${contractStoreAddresses}`);
    const isValidEthereumAddress = Object(external_ethereumjs_util_["isValidAddress"])(contractStoreAddresses);

    if (!isValidEthereumAddress) {
      throw new Error(`${contractStoreAddresses} is not a valid Ethereum Address`);
    }

    certificate_trace("isValidEthereumAddress", contractStoreAddresses);
    const issuerIdentitiesFromRegistry = yield Object(effects_["call"])(lookupAddressOnRegistry, contractStoreAddresses);
    certificate_trace(`Resolved ethereum address ${contractStoreAddresses} to ${issuerIdentitiesFromRegistry}`);
    return Object(external_lodash_["get"])(issuerIdentitiesFromRegistry, "name") || false;
  } catch (e) {
    return false;
  }
}

function throwIfAnyIdentityIsNotVerified(verificationStatuses) {
  if (verificationStatuses.length === 0) throw new Error("No issuers found in the document");
  const invalidIdentities = verificationStatuses.filter(status => !status.registry && !status.dns);

  if (invalidIdentities.length > 0) {
    const invalidStoreAddresses = invalidIdentities.map(identity => identity.documentStore);
    throw new Error(`Issuer identity cannot be verified: ${invalidStoreAddresses.join(", ")}`);
  }
}

function* getDetailedIssuerStatus({
  issuer
}) {
  const verificationStatus = {
    documentStore: Object(utils_certificate["b" /* getDocumentStore */])(issuer),
    registry: null,
    dns: null
  };
  verificationStatus.registry = yield Object(effects_["call"])(verifyCertificateRegistryIssuer, {
    issuer
  });

  if (Object(external_lodash_["get"])(issuer, "identityProof.type") === "DNS-TXT") {
    verificationStatus.dns = yield Object(effects_["call"])(verifyCertificateDnsIssuer, {
      issuer
    });
  }

  certificate_trace(`issuer status: ${stringify_default()(verificationStatus)}`);
  return verificationStatus;
}
function* verifyCertificateIssuer({
  certificate
}) {
  try {
    const data = Object(open_attestation_["getData"])(certificate);
    const issuers = Object(external_lodash_["get"])(data, "issuers", []); // verificationStatuses: [{dns: "abc.com", registry:"Govtech", documentStore: "0xabc"}]

    const verificationStatuses = yield Object(effects_["all"])(issuers.map(issuer => Object(effects_["call"])(getDetailedIssuerStatus, {
      issuer
    }))); // If any identity is not verified, this should return false

    throwIfAnyIdentityIsNotVerified(verificationStatuses);
    yield Object(effects_["put"])(Object(reducers_certificate["G" /* verifyingCertificateIssuerSuccess */])({
      issuerIdentities: verificationStatuses
    }));
    return true;
  } catch (e) {
    certificate_error(e);
    yield Object(effects_["put"])(Object(reducers_certificate["F" /* verifyingCertificateIssuerFailure */])({
      error: e.message
    }));
    return false;
  }
}
function* verifyCertificate({
  payload
}) {
  yield Object(effects_["put"])({
    type: reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE
  });
  const certificateStores = yield Object(effects_["call"])(loadCertificateContracts, {
    payload
  });
  const args = {
    certificateStores,
    certificate: payload
  };
  const verificationStatuses = yield Object(effects_["all"])({
    certificateIssued: Object(effects_["call"])(verifyCertificateIssued, args),
    certificateHashValid: Object(effects_["call"])(verifyCertificateHash, args),
    certificateNotRevoked: Object(effects_["call"])(verifyCertificateNotRevoked, args),
    certificateIssuerRecognised: Object(effects_["call"])(verifyCertificateIssuer, args),
    certificateStoreValid: Object(effects_["call"])(verifyCertificateStore, args)
  });
  certificate_trace(verificationStatuses);
  const verified = verificationStatuses.certificateIssued && verificationStatuses.certificateHashValid && verificationStatuses.certificateNotRevoked && verificationStatuses.certificateIssuerRecognised && verificationStatuses.certificateStoreValid;

  if (verified) {
    router_default.a.push("/viewer");
  }
}
function* sendCertificate({
  payload
}) {
  try {
    const certificate = yield Object(effects_["select"])(reducers_certificate["d" /* getCertificate */]);
    const {
      email,
      captcha
    } = payload;
    const success = yield sendEmail({
      certificate,
      email,
      captcha
    });

    if (!success) {
      throw new Error("Fail to send certificate");
    }

    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].SENDING_CERTIFICATE_SUCCESS
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].SENDING_CERTIFICATE_FAILURE,
      payload: e.message
    });
  }
}
function* generateShareLink() {
  try {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GENERATE_SHARE_LINK_RESET
    });
    const certificate = yield Object(effects_["select"])(reducers_certificate["d" /* getCertificate */]);
    const success = yield generateLink(certificate);

    if (!success) {
      throw new Error("Fail to generate certificate share link");
    }

    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GENERATE_SHARE_LINK_SUCCESS,
      payload: success
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GENERATE_SHARE_LINK_FAILURE,
      payload: e.message
    });
  }
}
function* retrieveCertificateFromStore({
  payload
}) {
  try {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GET_CERTIFICATE_BY_ID_PENDING
    });
    const encryptedCertificate = yield getCertificateById(payload.id);
    const certificate = JSON.parse(Object(opencerts_encryption_["decryptString"])({
      tag: encryptedCertificate.document.tag,
      cipherText: encryptedCertificate.document.cipherText,
      iv: encryptedCertificate.document.iv,
      key: payload.encryptionKey,
      type: "OPEN-ATTESTATION-TYPE-1"
    }));

    if (!encryptedCertificate) {
      throw new Error("Fail to retrieve certificate by id");
    }

    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].UPDATE_CERTIFICATE,
      payload: certificate
    });
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GET_CERTIFICATE_BY_ID_SUCCESS
    });
  } catch (e) {
    yield Object(effects_["put"])({
      type: reducers_certificate["y" /* types */].GET_CERTIFICATE_BY_ID_FAILURE,
      payload: e.message
    });
  }
}
function* networkReset() {
  yield Object(effects_["put"])({
    type: reducers_certificate["y" /* types */].NETWORK_RESET
  });
}
function* getAnalyticsDetails() {
  try {
    const rawCertificate = yield Object(effects_["select"])(reducers_certificate["d" /* getCertificate */]);
    const certificate = Object(open_attestation_["getData"])(rawCertificate);
    const storeAddresses = Object(utils_certificate["a" /* getDocumentIssuerStores */])(certificate);
    const id = Object(external_lodash_["get"])(certificate, "id");
    return {
      storeAddresses,
      id
    };
  } catch (e) {
    return {};
  }
}
function* triggerAnalytics(errorCode) {
  const {
    storeAddresses,
    id
  } = yield Object(effects_["call"])(getAnalyticsDetails);

  if (storeAddresses && id) {
    Object(Analytics["a" /* analyticsEvent */])(window, {
      category: "CERTIFICATE_ERROR",
      action: storeAddresses,
      label: id,
      value: errorCode
    });
  }
}
function* analyticsIssuerFail() {
  yield Object(effects_["call"])(triggerAnalytics, ANALYTICS_VERIFICATION_ERROR_CODE.ISSUER_IDENTITY);
}
function* analyticsHashFail() {
  yield Object(effects_["call"])(triggerAnalytics, ANALYTICS_VERIFICATION_ERROR_CODE.CERTIFICATE_HASH);
}
function* analyticsIssuedFail() {
  yield Object(effects_["call"])(triggerAnalytics, ANALYTICS_VERIFICATION_ERROR_CODE.UNISSUED_CERTIFICATE);
}
function* analyticsRevocationFail() {
  yield Object(effects_["call"])(triggerAnalytics, ANALYTICS_VERIFICATION_ERROR_CODE.REVOKED_CERTIFICATE);
}
function* analyticsStoreFail() {
  yield Object(effects_["call"])(triggerAnalytics, ANALYTICS_VERIFICATION_ERROR_CODE.CERTIFICATE_STORE);
}
/* harmony default export */ var sagas_certificate = ([Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].UPDATE_CERTIFICATE, verifyCertificate), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].SENDING_CERTIFICATE, sendCertificate), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].GENERATE_SHARE_LINK, generateShareLink), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].GET_CERTIFICATE_BY_ID, retrieveCertificateFromStore), Object(effects_["takeEvery"])(application["d" /* types */].UPDATE_WEB3, networkReset), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE_ISSUER_FAILURE, analyticsIssuerFail), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE_REVOCATION_FAILURE, analyticsRevocationFail), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE_ISSUED_FAILURE, analyticsIssuedFail), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE_HASH_FAILURE, analyticsHashFail), Object(effects_["takeEvery"])(reducers_certificate["y" /* types */].VERIFYING_CERTIFICATE_STORE_FAILURE, analyticsStoreFail)]);
// CONCATENATED MODULE: ./src/sagas/index.js




function* rootSaga() {
  yield Object(effects_["all"])([...sagas_application, ...sagas_certificate]);
}

/* harmony default export */ var sagas = (rootSaga);
// CONCATENATED MODULE: ./src/reducers/featureToggle.js
const types = {
  UPDATE_FEATURE_TOGGLES: "UPDATE_FEATURE_TOGGLES"
};
const initialState = {};
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_FEATURE_TOGGLES:
      return action.payload;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/reducers/index.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  application: application["a" /* default */],
  certificate: reducers_certificate["a" /* default */],
  featureToggle: reducer
}));
// CONCATENATED MODULE: ./src/store.js





const sagaMiddleware = external_redux_saga_default()();

const initStore = () => {
  const store = Object(external_redux_["createStore"])(reducers, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(sagaMiddleware)));
  sagaMiddleware.run(sagas);
  return store;
};

/* harmony default export */ var src_store = (initStore);
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;












const FeatureFlagLoader = ({
  dispatch,
  children
}) => {
  external_react_default.a.useEffect(() => {
    const run = async () => {
      const featureToggle = await external_isomorphic_fetch_default()("https://s3-ap-southeast-1.amazonaws.com/opencerts.io/feature-toggle.json", {
        METHOD: "GET"
      }).then(response => response.json());
      dispatch({
        type: types.UPDATE_FEATURE_TOGGLES,
        payload: Object(external_lodash_["mapValues"])(featureToggle, src_config["e" /* ENVIRONMENT */])
      });
    };

    run();
  }, []);
  return children;
};

class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(app["Container"], null, __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(FeatureFlagLoader, {
      dispatch: store.dispatch
    }, __jsx(Component, pageProps))));
  }

}

const appWrappedWithGA = external_next_ga_default()(src_config["f" /* GA_ID */], router_default.a)(_app_MyApp);
/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(src_store)(appWrappedWithGA));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "3R5n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateEvent */
/* unused harmony export stringifyEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return analyticsEvent; });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gjtA");

const {
  trace
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])("components:Analytics:");
const {
  trace: traceDev
} = Object(_utils_logger__WEBPACK_IMPORTED_MODULE_0__[/* getLogger */ "a"])("components:Analytics(Inactive):");
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
/* unused harmony default export */ var _unused_webpack_default_export = (analyticsEvent);

/***/ }),

/***/ "3Snp":
/***/ (function(module, exports) {

module.exports = require("next-ga");

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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "8X99":
/***/ (function(module, exports) {

module.exports = require("@govtechsg/dnsprove");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "DqQR":
/***/ (function(module, exports) {

module.exports = require("@govtechsg/opencerts-encryption");

/***/ }),

/***/ "Hrlo":
/***/ (function(module) {

module.exports = JSON.parse("{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"DocumentIssued\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"DocumentRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"issue\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"getIssuedBlock\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"isIssued\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"},{\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"isIssuedBefore\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"revoke\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"}],\"name\":\"isRevoked\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"document\",\"type\":\"bytes32\"},{\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"isRevokedBefore\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]}");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "M8O+":
/***/ (function(module) {

module.exports = JSON.parse("[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"NewTTL\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"setOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"NewResolver\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"label\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"NewOwner\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"label\",\"type\":\"bytes32\"},{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"setSubnodeOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setTTL\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"resolver\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"ttl\",\"outputs\":[{\"name\":\"\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");

/***/ }),

/***/ "MDWq":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),

/***/ "NTQP":
/***/ (function(module, exports) {

module.exports = require("web3-provider-engine");

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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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

/***/ "VEfZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDocumentStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentIssuerStores; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getDocumentStore = issuer => issuer.certificateStore || issuer.documentStore;
const getDocumentIssuerStores = document => {
  const issuers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(document, "issuers", []);
  return issuers.map(getDocumentStore).join(",");
};

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "XTJD":
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[{\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"key\",\"type\":\"string\"},{\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setText\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"contentTypes\",\"type\":\"uint256\"}],\"name\":\"ABI\",\"outputs\":[{\"name\":\"contentType\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"x\",\"type\":\"bytes32\"},{\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"setPubkey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"content\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"addr\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"key\",\"type\":\"string\"}],\"name\":\"text\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"contentType\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"setABI\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"setMultihash\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"hash\",\"type\":\"bytes32\"}],\"name\":\"setContent\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"pubkey\",\"outputs\":[{\"name\":\"x\",\"type\":\"bytes32\"},{\"name\":\"y\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"},{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"setAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"multihash\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"ensAddr\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"a\",\"type\":\"address\"}],\"name\":\"AddrChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"hash\",\"type\":\"bytes32\"}],\"name\":\"ContentChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NameChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"contentType\",\"type\":\"uint256\"}],\"name\":\"ABIChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"x\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"PubkeyChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"indexedKey\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"key\",\"type\":\"string\"}],\"name\":\"TextChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"MultihashChanged\",\"type\":\"event\"}]");

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "e01U":
/***/ (function(module, exports) {

module.exports = require("web3-provider-engine/subproviders/websocket.js");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "kraY":
/***/ (function(module, exports) {

module.exports = require("ethereumjs-util");

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

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

/***/ "va7A":
/***/ (function(module, exports) {

module.exports = require("@govtechsg/open-attestation");

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
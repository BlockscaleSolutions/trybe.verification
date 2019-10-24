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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "1zLk":
/***/ (function(module, exports) {

module.exports = {
	"header-container": "_2T5Jstn_hctcF9tBNF6M8r",
	"title": "_2P6ytv2lNI9sWgz0QMHCn6",
	"content-container": "_197p1tXIFlkzyY7izrJqpU"
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZqGw");


/***/ }),

/***/ "5psM":
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

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

/***/ "GiID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("H9Hx");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavigationBar = () => __jsx("div", {
  className: "bg-brand-dark",
  id: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["footer-print"]
}, __jsx("div", {
  className: _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer
}, __jsx("div", null, __jsx("a", {
  href: "/collaborate"
}, "Collaborate")), __jsx("div", null, __jsx("a", {
  href: "/faq"
}, "FAQ")), __jsx("div", null, __jsx("a", {
  href: "/registry"
}, "Registry")), __jsx("div", null, __jsx("a", {
  href: "/privacy"
}, "Privacy Policy")), __jsx("div", null, __jsx("a", {
  href: "/terms"
}, "Terms of Use")), __jsx("div", null, __jsx("a", {
  href: "https://github.com/OpenCerts"
}, "Github"))));

/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),

/***/ "H9Hx":
/***/ (function(module, exports) {

module.exports = {
	"footer": "_2gteCBBGtcoz5o1BuvsB9F",
	"footer-print": "_2HRkZQw4THQ3DH__nfESc6"
};

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

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

/***/ "ZqGw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");
var external_next_seo_default = /*#__PURE__*/__webpack_require__.n(external_next_seo_);

// EXTERNAL MODULE: external "lodash/fp"
var fp_ = __webpack_require__("5psM");

// EXTERNAL MODULE: ./src/components/Layout/NavigationBar/index.js + 1 modules
var NavigationBar = __webpack_require__("RTI1");

// EXTERNAL MODULE: ./src/components/Layout/FooterBar.js
var FooterBar = __webpack_require__("GiID");

// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__("8SHQ");

// EXTERNAL MODULE: ./src/components/Collaborate/CollaboratorsTerms.scss
var CollaboratorsTerms = __webpack_require__("1zLk");
var CollaboratorsTerms_default = /*#__PURE__*/__webpack_require__.n(CollaboratorsTerms);

// CONCATENATED MODULE: ./src/components/Collaborate/CollaboratorsTerms.js
var __jsx = external_react_default.a.createElement;


const CollaboratorsTerms_CollaboratorsTerms = () => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
  className: CollaboratorsTerms_default.a["header-container"]
}, __jsx("h1", {
  className: CollaboratorsTerms_default.a.title
}, "Collaborator terms and conditions")), __jsx("div", {
  className: CollaboratorsTerms_default.a["content-container"]
}, __jsx("ol", null, __jsx("li", null, __jsx("b", null, "General"), __jsx("ol", null, __jsx("li", null, "These Terms and Conditions (the", " ", __jsx("b", null, "\"Collaborator Terms\""), ") govern your request to be listed as a collaborator (", __jsx("b", null, "\"Collaborator\""), ") for, and be hyperlinked in, the OpenCerts Service (collectively, the", __jsx("b", null, "\"Collaboration\""), ")."), __jsx("li", null, "You unconditionally agree and accept to be legally bound by these Collaborator Terms and any amendments thereto from time to time. GovTech may change these Collaborator Terms immediately at its sole discretion and at any time. You agree to receive notice of any amendments to the Collaborator Terms via email, or any other means of notice as determined by GovTech."), __jsx("li", null, "You agree to these Collaborator Terms by making a request to GovTech to be listed as a Collaborator (whether through FormsSG or otherwise), or by making a pull/merge request to GovTech in which you have included code to list you as a Collaborator or included code which contains your details as a Collaborator."))), __jsx("li", null, __jsx("b", null, "Terms of Collaboration"), __jsx("ol", null, __jsx("li", null, "Subject to these Collaborator Terms, GovTech shall have the sole and absolute discretion to list you as a Collaborator on the OpenCerts Service and provide a hyperlink to your website or to allow your pull/merge request to contain your details as a Collaborator."), __jsx("li", null, "GovTech shall not be obliged to provide you with reasons for accepting or rejecting you as a Collaborator, and shall have the right to revoke and/or discontinue the listing, the hyperlink, the code, and your status as Collaborator at its sole and absolute discretion and at any time."), __jsx("li", null, "These Collaborator Terms does not create any relationship of agency, partnership, joint venture or other business relationship between you and GovTech."), __jsx("li", null, "GovTech does not endorse you and you shall not represent in any manner any endorsement, association or affiliation with GovTech and, without prejudice and in addition to GovTech\u2019s other rights at law, shall not make use of any of GovTech\u2019s logos, trade marks, service marks, names, insignias, emblems to suggest any such endorsement, association or affiliation."), __jsx("li", null, "You agree to comply with any Collaboration Rules as may be published by GovTech from time to time. The Collaboration Rules are to be read in conjunction with these Collaborator Terms and form part of these Collaborator Terms. A breach of the Collaborator Rules by you may result in immediate termination of the Collaboration."), __jsx("li", null, "You shall grant to GovTech a perpetual, irrevocable, royalty-free licence to use, display, modify, adapt, create derivative works of, reproduce and sublicence 2 any intellectual property provided to GovTech for the purpose of the Collaboration (", __jsx("b", null, "\"Collaborator IP\""), "). You further warrant and represent that you have the capacity, authority and right to license the Collaborator IP to GovTech."), __jsx("li", null, "GovTech may, at its sole and absolute discretion, terminate these Collaboration Terms and the Collaboration or any part thereof immediately without giving any reasons and without liability to you whatsoever."))), __jsx("li", null, __jsx("b", null, "Disclaimers and Indemnity"), __jsx("ol", null, __jsx("li", null, "To the fullest extent permitted by law, GovTech does not make any representations or warranties of any kind whatsoever and hereby disclaims all express, implied and/or statutory warranties of any kind to you or any third party, whether arising from usage or custom or trade or by operation of law or otherwise, including but not limited to any representations or warranties as to the accuracy, completeness, correctness, currency, timeliness, reliability, availability, interoperability, security, non-infringement, title, merchantability, quality or fitness for any particular purpose, or that the Collaboration will be error-free or that defects will be corrected."), __jsx("li", null, "GovTech shall also not be liable to you or any third party for any damage or loss of any kind whatsoever and howsoever caused, including but not limited to any direct or indirect, special or consequential damages, loss of income, revenue or profits, lost or damaged data, or damage to your computer, software or any other property, whether arising directly or indirectly from \u2013", __jsx("ol", null, __jsx("li", null, "the Collaboration and/or the Collaboration Terms, or any part thereof;"), __jsx("li", null, "any discontinuance of the Collaboration or any part of the Collaboration, howsoever caused;"), __jsx("li", null, "any inaccuracy or incompleteness in, or errors or omissions in Collaboration or the Collaboration Terms;"), __jsx("li", null, "any delay or interruption in the Collaboration, whether caused by delay or interruption in transmission over the internet or otherwise; or"), __jsx("li", null, "any decision made or action taken by you or any third party in reliance upon the Collaboration or the Collaboration Terms,")), "regardless of whether GovTech has been advised of the possibility of such damage or loss."), __jsx("li", null, "You shall not rely on any part of the Collaboration or these Collaboration Terms to claim or assert any form of legitimate expectation against GovTech, whether or not arising out of or in connection with GovTech\u2019s roles and functions as a public authority."), __jsx("li", null, "You agree to defend and indemnify and keep GovTech and its officers, employees, agents and contractors harmless against all liabilities, losses, damages, costs or expenses (including legal costs on an indemnity basis) howsoever arising out of or in connection with these Collaborator Terms or your non-compliance with the Collaboration Terms (including without limitation defending and indemnifying GovTech against losses arising out of or in connection with any intellectual property infringement claim), whether or not you had been advised or informed of the nature or extent of such liabilities, losses, damages, costs or expenses."))), __jsx("li", null, __jsx("b", null, "Rights of Third Parties"), __jsx("ol", null, __jsx("li", null, "A person who is not a party to these Collaborator Terms shall have no right under the Contract (Rights of Third Parties) Act or otherwise to enforce any of its terms."))), __jsx("li", null, __jsx("b", null, "Assignment"), __jsx("ol", null, __jsx("li", null, "You may not assign or sub-contract these Collaborator Terms without the prior written consent of GovTech."), __jsx("li", null, "GovTech may assign, novate, transfer, or sub-contract the rights and liabilities in respect of the Collaboration and Collaboration Terms, without notifying you and without further reference to you. Your acceptance of these Collaborator Terms shall also constitute your consent to such assignment, novation, transfer or sub-contract."))), __jsx("li", null, __jsx("b", null, "Governing Law and Dispute Resolution"), __jsx("ol", null, __jsx("li", null, "These Collaborator Terms shall be governed and construed in accordance with laws of Singapore."), __jsx("li", null, "Subject to clause 6.3, any dispute arising out of or in connection with these Collaborator Terms, including any question regarding its existence, validity or termination, shall be referred to and finally resolved in the Courts of the Republic of Singapore and the parties hereby submit to the exclusive jurisdiction of the Courts of the Republic of Singapore."), __jsx("li", null, "GovTech may, at its sole discretion, refer any dispute referred to in clause 6.2 above to arbitration administered by the Singapore International Arbitration Centre (", __jsx("b", null, "\"SIAC"), ") in Singapore in accordance with the Arbitration Rules of the SIAC (", __jsx("b", null, "\"SIAC Rules\""), ") for the time being in force, which rules are deemed to be incorporated by reference in this clause. Further:", __jsx("ol", null, __jsx("li", null, "The seat of the arbitration shall be Singapore."), __jsx("li", null, "The tribunal shall consist of one (1) arbitrator."), __jsx("li", null, "The language of the arbitration shall be English."), __jsx("li", null, "All information, pleadings, documents, evidence and all matters relating to the arbitration shall be confidential. Where GovTech is the defendant or respondent, it shall be given at least 30 days before the commencement of any legal action against it to elect to exercise the right herein to have the dispute submitted to arbitration. This right to elect shall not prejudice GovTech\u2019s right to a limitation defence and the period to exercise the right shall not be abridged by reason of any accrual of a limitation defence in favour of GovTech during the said period."))))))));
// CONCATENATED MODULE: ./pages/collaborators-terms.js

var collaborators_terms_jsx = external_react_default.a.createElement;






const PAGE_SEO = {
  title: "Terms of use for collaborators",
  description: "These Terms of Use govern your way of collaborating on opencers",
  openGraph: {
    title: "OpenCerts - Collaborators terms of use",
    description: "These Terms of Use govern your way of collaborating on opencerts",
    url: `${config["m" /* URL */]}/collaborators-terms`
  }
};

const CollaboratorsTermsPage = () => collaborators_terms_jsx(external_react_default.a.Fragment, null, collaborators_terms_jsx(external_next_seo_default.a, {
  config: Object(fp_["merge"])(config["c" /* DEFAULT_SEO */], PAGE_SEO)
}), collaborators_terms_jsx(NavigationBar["a" /* default */], null), collaborators_terms_jsx(CollaboratorsTerms_CollaboratorsTerms, null), collaborators_terms_jsx(FooterBar["a" /* default */], null));

/* harmony default export */ var collaborators_terms = __webpack_exports__["default"] = (CollaboratorsTermsPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

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

/***/ "i4Cb":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ })

/******/ });
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/HomePageContent/DropZoneSection.js":
/*!***********************************************************!*\
  !*** ./src/components/HomePageContent/DropZoneSection.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _CertificateDropZone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../CertificateDropZone */ "./src/components/CertificateDropZone/index.js");
/* harmony import */ var _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dropZoneSection.scss */ "./src/components/HomePageContent/dropZoneSection.scss");
/* harmony import */ var _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _reducers_certificate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reducers/certificate */ "./src/reducers/certificate.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/logger */ "./src/utils/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _Main_Demo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Main-Demo */ "./src/components/HomePageContent/Main-Demo.json");
var _Main_Demo__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Main-Demo */ "./src/components/HomePageContent/Main-Demo.json", 1);
/* harmony import */ var _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Ropsten-Demo */ "./src/components/HomePageContent/Ropsten-Demo.json");
var _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Ropsten-Demo */ "./src/components/HomePageContent/Ropsten-Demo.json", 1);
/* harmony import */ var _Analytics_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Analytics/index */ "./src/components/Analytics/index.js");










var _jsxFileName = "/home/ajl/development/ssi/trybe.id/trybe.verification/src/components/HomePageContent/DropZoneSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;











var DEMO_CERT = _config__WEBPACK_IMPORTED_MODULE_17__["IS_MAINNET"] ? _Main_Demo__WEBPACK_IMPORTED_MODULE_18__ : _Ropsten_Demo__WEBPACK_IMPORTED_MODULE_19__;
var DEMO_CONTENT_KEY = "DEMO_CONTENT";

function demoCount() {
  Object(_Analytics_index__WEBPACK_IMPORTED_MODULE_20__["analyticsEvent"])(window, {
    category: "USER_INTERACTION",
    action: "DEMO_CERTIFICATE_VIEWED"
  });
}

var DraggableDemoCertificate = function DraggableDemoCertificate() {
  return __jsx("div", {
    className: "d-none d-lg-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14___default.a.pulse,
    draggable: "true",
    onDragStart: function onDragStart(e) {
      return e.dataTransfer.setData(DEMO_CONTENT_KEY, true);
    },
    onDragEnd: demoCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    href: "data:text/plain;,".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(DEMO_CERT, null, 2)),
    download: "demo.opencert",
    rel: "noindex nofollow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
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
    __self: this
  })))), __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/dropzone/arrow.png",
    width: "100%",
    draggable: "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("span", {
    style: {
      textAlign: "justify",
      color: "#ff9933"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Drag me over here to see a demo certificate and other features"))));
};

var MobileDemoCertificate = function MobileDemoCertificate() {
  return __jsx("div", {
    className: "d-block d-lg-none d-xl-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
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
    __self: this
  }, "Click me for a demo certificate!"));
};

var DropZoneSection =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DropZoneSection, _Component);

  function DropZoneSection() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DropZoneSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DropZoneSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "removeListener", function () {
      return Object(_utils_logger__WEBPACK_IMPORTED_MODULE_16__["trace"])("drop listener removed");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DropZoneSection, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var API_LOCATION, VER_PATH, PUBLIC_ROUTE, url, query, API_URL, certString, cert;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                VER_PATH = '/';
                PUBLIC_ROUTE = 'public/cert';
                url = window.location.href; // const certParams = url.split(VER_PATH)[1]

                query = url.split('?')[0];
                console.log(query);
                console.log(id, network); // console.log(id, network)
                // console.log(id, network)
                // If there is a cert id to look up

                if (!id) {
                  _context.next = 29;
                  break;
                }

                // Network IDs: 1=prod, 2=staging
                if (network == 1) {
                  API_LOCATION = 'https://certs.api.convergence.tech:3002';
                } else if (network == 2) {
                  API_LOCATION = 'http://169.48.26.238:3002';
                } else {
                  API_LOCATION = 'http://localhost:3002';
                }

                API_URL = "".concat(API_LOCATION, "/").concat(PUBLIC_ROUTE);
                _context.prev = 9;
                _context.next = 12;
                return fetch("".concat(API_URL, "/").concat(id));

              case 12:
                certString = _context.sent;

                if (!certString) {
                  _context.next = 21;
                  break;
                }

                _context.t1 = JSON;
                _context.next = 17;
                return certString.json();

              case 17:
                _context.t2 = _context.sent.cert;
                _context.t0 = _context.t1.parse.call(_context.t1, _context.t2);
                _context.next = 22;
                break;

              case 21:
                _context.t0 = null;

              case 22:
                cert = _context.t0;

                if (cert) {
                  this.props.updateCertificate(cert);
                }

                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t3 = _context["catch"](9);
                // ...
                console.error(_context.t3);

              case 29:
                document.getElementById("demoDrop").addEventListener("drop", function (e) {
                  if (e.dataTransfer.getData(DEMO_CONTENT_KEY)) {
                    _this2.props.updateCertificate(DEMO_CERT);
                  }
                });
                document.getElementById("demoClick").addEventListener("click", function () {
                  _this2.props.updateCertificate(DEMO_CERT);
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 26]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      document.getElementById("demoDrop", "demoClick").removeEventListener("drop", function () {
        return _this3.removeListener();
      });
    }
  }, {
    key: "render",
    // eslint-disable-next-line class-methods-use-this
    value: function render() {
      return __jsx("div", {
        className: "row p-5 bg-brand-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("div", {
        className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14___default.a.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-5 col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("div", {
        className: _dropZoneSection_scss__WEBPACK_IMPORTED_MODULE_14___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "An easy way to check and verify your certificates"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Whether you're a student or an employer, Convergence lets you verify the certificates you have of anyone from any institution. All in one place."), __jsx(DraggableDemoCertificate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), __jsx(MobileDemoCertificate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-7 col-md-12 col-sm-12",
        id: "demoDrop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx(_CertificateDropZone__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }))));
    }
  }]);

  return DropZoneSection;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateCertificate: function updateCertificate(payload) {
      return dispatch(Object(_reducers_certificate__WEBPACK_IMPORTED_MODULE_15__["updateCertificate"])(payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps)(DropZoneSection));
DropZoneSection.propTypes = {
  updateCertificate: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};

/***/ })

})
//# sourceMappingURL=index.js.58793185e32b7ed48b48.hot-update.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9+vO":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var p=Object.defineProperty,d=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(f){var o=u(n);o&&o!==f&&e(t,o,r)}var i=d(n);l&&(i=i.concat(l(n)));for(var c=s(t),y=s(n),m=0;m<i.length;++m){var v=i[m];if(!a[v]&&(!r||!r[v])&&(!y||!y[v])&&(!c||!c[v])){var g=h(n,v);try{p(t,v,g)}catch(b){}}}return t}return t}},KOO0:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return t=t||{},function(n){var c=n.displayName||n.name||"Component",d=function(r){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,r.call(this,e,t));return n.state={},n.__scriptURL="",n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r),a.prototype.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+p++),this.__scriptLoaderID},a.prototype.setupScriptURL=function(){return this.__scriptURL="function"===typeof e?e():e,this.__scriptURL},a.prototype.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},a.prototype.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=s[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var n in e.observers)e.observers[n](e);delete window[t.callbackName]},a.prototype.componentDidMount=function(){var e=this,n=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),o=t,a=o.globalName,i=o.callbackName,c=o.scriptId;if(a&&"undefined"!==typeof window[a]&&(s[n]={loaded:!0,observers:{}}),s[n]){var p=s[n];return p&&(p.loaded||p.errored)?void this.asyncScriptLoaderHandleLoad(p):void(p.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var d={};d[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},s[n]={loaded:!1,observers:d};var l=document.createElement("script");l.src=n,l.async=!0,c&&(l.id=c);var h=function(e){if(s[n]){var t=s[n].observers;for(var r in t)e(t[r])&&delete t[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=s[n];e&&(e.loaded=!0,h(function(t){return!i&&(t(e),!0)}))},l.onerror=function(){var e=s[n];e&&(e.errored=!0,h(function(t){return t(e),!0}))},document.body.appendChild(l)},a.prototype.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===t.removeOnUnmount)for(var n=document.getElementsByTagName("script"),r=0;r<n.length;r+=1)n[r].src.indexOf(e)>-1&&n[r].parentNode&&n[r].parentNode.removeChild(n[r]);var o=s[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===t.removeOnUnmount&&delete s[e])},a.prototype.render=function(){var e=t.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(r,["asyncScriptOnLoad","forwardedRef"]);return e&&"undefined"!==typeof window&&(i[e]="undefined"!==typeof window[e]?window[e]:void 0),i.ref=a,(0,o.createElement)(n,i)},a}(o.Component),l=(0,o.forwardRef)(function(e,t){return(0,o.createElement)(d,r({},e,{forwardedRef:t}))});return l.displayName="AsyncScriptLoader("+c+")",l.propTypes={asyncScriptOnLoad:a.default.func},(0,i.default)(l,n)}};var o=n("q1tI"),a=c(n("17x9")),i=c(n("9+vO"));function c(e){return e&&e.__esModule?e:{default:e}}var s={},p=0},n2ZS:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),c=n("AT/M"),s=n("Tit0"),p=n("q1tI"),d=n.n(p),l=n("17x9"),h=n.n(l),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this));return n.handleExpired=n.handleExpired.bind(n),n.handleErrored=n.handleErrored.bind(n),n.handleRecaptchaRef=n.handleRecaptchaRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},t.prototype.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},t.prototype.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},t.prototype.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},t.prototype.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},t.prototype.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},t.prototype.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},t.prototype.componentDidMount=function(){this.explicitRender()},t.prototype.componentDidUpdate=function(){this.explicitRender()},t.prototype.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},t.prototype.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout(function(){document.body.removeChild(e)},5e3)},t.prototype.handleRecaptchaRef=function(e){this.captcha=e},t.prototype.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge"]));return d.a.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},t}(d.a.Component),y=f;f.displayName="ReCAPTCHA",f.propTypes={sitekey:h.a.string.isRequired,onChange:h.a.func,grecaptcha:h.a.object,theme:h.a.oneOf(["dark","light"]),type:h.a.oneOf(["image","audio"]),tabindex:h.a.number,onExpired:h.a.func,onErrored:h.a.func,size:h.a.oneOf(["compact","normal","invisible"]),stoken:h.a.string,badge:h.a.oneOf(["bottomright","bottomleft","inline"])},f.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var m=n("KOO0"),v=n.n(m);function g(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}var b="onloadcallback",w=g(),O=v()(function(){var e=g(),t=e.lang?"&hl="+e.lang:"";return"https://"+(e.useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+b+"&render=explicit"+t},{callbackName:b,globalName:"grecaptcha",removeOnUnmount:w.removeOnUnmount||!1})(y),x=n("8SHQ"),S=n("04if"),C=n.n(S),E=n("wXLy"),_=d.a.createElement,L=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this,e))).state={captcha:"",email:""},n.handleCaptchaChange=n.handleCaptchaChange.bind(Object(c.a)(n)),n.handleEmailChange=n.handleEmailChange.bind(Object(c.a)(n)),n.handleSend=n.handleSend.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleCaptchaChange",value:function(e){this.setState({captcha:e})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleSend",value:function(){var e=this.props,t=e.handleSendCertificate;e.emailSendingState!==E.x.PENDING&&t({email:this.state.email,captcha:this.state.captcha})}},{key:"render",value:function(){var e=this.props.emailSendingState;return _("div",{className:"container"},_("div",{className:"row"},_("div",{className:"col-2"}),_("div",{className:"col-8"},_("div",{className:"row d-flex justify-content-center"},_("h4",null,"Send your certificate")),_("div",{className:"row text-center"},"This sends an email with your .opencert attached, and instructions on how to view it."),_("div",{className:"row my-4 d-flex justify-content-center"},_("input",{className:"w-100",value:this.state.emailAddress,onChange:this.handleEmailChange,placeholder:"Enter recipient's email"})),_("div",{className:"row d-flex justify-content-center m-3"},_(O,{sitekey:x.a,onChange:this.handleCaptchaChange})),e===E.x.SUCCESS?_("div",{className:"row my-4 d-flex justify-content-center"},"Email successfully sent!"):"",e===E.x.FAILURE?_("div",{className:"row my-4 d-flex justify-content-center"},"An error occured, please check your email and captcha"):"",_("div",{className:"row d-flex justify-content-center m-3"},_("button",{type:"button",className:"pointer ".concat(C.a.btn),onClick:this.handleSend},"Send",e===E.x.PENDING?_("i",{className:"ml-2 fas fa-spinner fa-pulse"}):"")))))}}]),t}(p.Component);t.default=L}}]);
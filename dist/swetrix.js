!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).swetrix={})}(this,function(i){"use strict";function o(t){return(t=location.search.match(t))&&t[2]||void 0}function e(){return location.pathname||""}var n=function(){return(n=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},a=/[?&](ref|source|utm_source)=([^?&]+)/,r=/[?&](utm_campaign)=([^?&]+)/,s=/[?&](utm_medium)=([^?&]+)/,c="https://api.swetrix.com/log",u=(t.prototype.track=function(t){this.canTrack()&&(t=n({pid:this.projectID},t),this.submitCustom(t))},t.prototype.trackPageViews=function(t){if(this.canTrack()){if(this.pageData)return this.pageData.actions;var n;null!=(this.pageViewsOptions=t)&&t.unique||(n=setInterval(this.trackPathChange,2e3));var i=e();return this.pageData={path:i,actions:{stop:null!=t&&t.unique?function(){}:function(){return clearInterval(n)}}},this.trackPage(i,null==t?void 0:t.unique),this.pageData.actions}},t.prototype.checkIgnore=function(t){var n,i=null===(n=this.pageViewsOptions)||void 0===n?void 0:n.ignore;if(Array.isArray(i))for(var o=0;o<i.length;++o){if(i[o]===t)return!0;if(i[o]instanceof RegExp&&i[o].test(t))return!0}return!1},t.prototype.trackPathChange=function(){var t;this.pageData&&(t=e(),this.pageData.path!==t&&this.trackPage(t,!1))},t.prototype.trackPage=function(t,n){void 0===n&&(n=!1),this.pageData&&(this.pageData.path=t,this.checkIgnore(t)||(t={pid:this.projectID,lc:void 0!==navigator.languages?navigator.languages[0]:navigator.language,tz:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){return}}(),ref:document.referrer||void 0,so:o(a),me:o(s),ca:o(r),unique:n,pg:t},this.submitData(t)))},t.prototype.debug=function(t){var n;null!==(n=this.options)&&void 0!==n&&n.debug&&console.log("[Swetrix]",t)},t.prototype.canTrack=function(){var t,n;return"undefined"==typeof window?(this.debug("Tracking disabled: script does not run in browser environment."),!1):null!==(t=this.options)&&void 0!==t&&t.respectDNT&&"1"===(null===(n=window.navigator)||void 0===n?void 0:n.doNotTrack)?(this.debug("Tracking disabled: respecting user's 'Do Not Track' preference."),!1):!!(null!==(n=this.options)&&void 0!==n&&n.debug||"localhost"!==(null===location||void 0===location?void 0:location.hostname)&&"127.0.0.1"!==(null===location||void 0===location?void 0:location.hostname)&&""!==(null===location||void 0===location?void 0:location.hostname))&&(null===navigator||void 0===navigator||!navigator.webdriver||(this.debug("Tracking disabled: navigation is automated by WebDriver."),!1))},t.prototype.submitData=function(t){return fetch(c,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})},t.prototype.submitCustom=function(t){return fetch(c+"/custom",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})},t);function t(t,n){this.projectID=t,this.options=n,this.pageData=null,this.pageViewsOptions=null,this.trackPathChange=this.trackPathChange.bind(this)}i.LIB_INSTANCE=null,i.init=function(t,n){return i.LIB_INSTANCE||(i.LIB_INSTANCE=new u(t,n)),i.LIB_INSTANCE},i.track=function(t){i.LIB_INSTANCE&&i.LIB_INSTANCE.track(t)},i.trackViews=function(t){i.LIB_INSTANCE&&i.LIB_INSTANCE.trackPageViews(t)},Object.defineProperty(i,"__esModule",{value:!0})});

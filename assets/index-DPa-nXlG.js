function ek(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R0={exports:{}},rh={},A0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),nk=Symbol.for("react.portal"),rk=Symbol.for("react.fragment"),ik=Symbol.for("react.strict_mode"),sk=Symbol.for("react.profiler"),ok=Symbol.for("react.provider"),ak=Symbol.for("react.context"),lk=Symbol.for("react.forward_ref"),uk=Symbol.for("react.suspense"),ck=Symbol.for("react.memo"),hk=Symbol.for("react.lazy"),Fy=Symbol.iterator;function dk(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var k0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,N0={};function ho(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||k0}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=ho.prototype;function dm(t,e,n){this.props=t,this.context=e,this.refs=N0,this.updater=n||k0}var fm=dm.prototype=new x0;fm.constructor=dm;P0(fm,ho.prototype);fm.isPureReactComponent=!0;var jy=Array.isArray,D0=Object.prototype.hasOwnProperty,pm={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D0.call(e,r)&&!O0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:hl,type:t,key:s,ref:o,props:i,_owner:pm.current}}function fk(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mm(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function pk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var By=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pk(""+t.key):e.toString(36)}function xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case nk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ed(o,0):r,jy(i)?(n="",t!=null&&(n=t.replace(By,"$&/")+"/"),xu(i,e,n,"",function(c){return c})):i!=null&&(mm(i)&&(i=fk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(By,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ed(s,a);o+=xu(s,e,n,u,i)}else if(u=dk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ed(s,a++),o+=xu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tu(t,e,n){if(t==null)return t;var r=[],i=0;return xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Du={transition:null},gk={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Du,ReactCurrentOwner:pm};function L0(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!mm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ho;ee.Fragment=rk;ee.Profiler=sk;ee.PureComponent=dm;ee.StrictMode=ik;ee.Suspense=uk;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gk;ee.act=L0;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)D0.call(e,u)&&!O0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:hl,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:ak,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ok,_context:t},t.Consumer=t};ee.createElement=b0;ee.createFactory=function(t){var e=b0.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:lk,render:t}};ee.isValidElement=mm;ee.lazy=function(t){return{$$typeof:hk,_payload:{_status:-1,_result:t},_init:mk}};ee.memo=function(t,e){return{$$typeof:ck,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Du.transition;Du.transition={};try{t()}finally{Du.transition=e}};ee.unstable_act=L0;ee.useCallback=function(t,e){return kt.current.useCallback(t,e)};ee.useContext=function(t){return kt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return kt.current.useEffect(t,e)};ee.useId=function(){return kt.current.useId()};ee.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return kt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ee.useRef=function(t){return kt.current.useRef(t)};ee.useState=function(t){return kt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return kt.current.useTransition()};ee.version="18.3.1";A0.exports=ee;var F=A0.exports;const gm=tk(F),If=ek({__proto__:null,default:gm},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k=F,yk=Symbol.for("react.element"),vk=Symbol.for("react.fragment"),wk=Object.prototype.hasOwnProperty,Ek=_k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tk={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wk.call(e,r)&&!Tk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yk,type:t,key:s,ref:o,props:i,_owner:Ek.current}}rh.Fragment=vk;rh.jsx=M0;rh.jsxs=M0;R0.exports=rh;var w=R0.exports,Sf={},V0={exports:{}},Yt={},U0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var Ae=Z-1>>>1,fe=$[Ae];if(0<i(fe,Y))$[Ae]=Y,$[Z]=fe,Z=Ae;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var Ae=0,fe=$.length,Le=fe>>>1;Ae<Le;){var zn=2*(Ae+1)-1,$n=$[zn],Wn=zn+1,Hn=$[Wn];if(0>i($n,Z))Wn<fe&&0>i(Hn,$n)?($[Ae]=Hn,$[Wn]=Z,Ae=Wn):($[Ae]=$n,$[zn]=Z,Ae=zn);else if(Wn<fe&&0>i(Hn,Z))$[Ae]=Hn,$[Wn]=Z,Ae=Wn;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,d=null,m=3,_=!1,v=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function D($){if(P=!1,S($),!v)if(n(u)!==null)v=!0,Rn(M);else{var Y=n(c);Y!==null&&Bn(D,Y.startTime-$)}}function M($,Y){v=!1,P&&(P=!1,I(y),y=-1),_=!0;var Z=m;try{for(S(Y),d=n(u);d!==null&&(!(d.expirationTime>Y)||$&&!T());){var Ae=d.callback;if(typeof Ae=="function"){d.callback=null,m=d.priorityLevel;var fe=Ae(d.expirationTime<=Y);Y=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(u)&&r(u),S(Y)}else r(u);d=n(u)}if(d!==null)var Le=!0;else{var zn=n(c);zn!==null&&Bn(D,zn.startTime-Y),Le=!1}return Le}finally{d=null,m=Z,_=!1}}var U=!1,C=null,y=-1,A=5,k=-1;function T(){return!(t.unstable_now()-k<A)}function x(){if(C!==null){var $=t.unstable_now();k=$;var Y=!0;try{Y=C(!0,$)}finally{Y?R():(U=!1,C=null)}}else U=!1}var R;if(typeof E=="function")R=function(){E(x)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Nt=ye.port2;ye.port1.onmessage=x,R=function(){Nt.postMessage(null)}}else R=function(){N(x,0)};function Rn($){C=$,U||(U=!0,R())}function Bn($,Y){y=N(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Rn(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function($,Y,Z){var Ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ae+Z:Ae):Z=Ae,$){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,$={id:h++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:fe,sortIndex:-1},Z>Ae?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(I(y),y=-1):P=!0,Bn(D,Z-Ae))):($.sortIndex=fe,e(u,$),v||_||(v=!0,Rn(M))),$},t.unstable_shouldYield=T,t.unstable_wrapCallback=function($){var Y=m;return function(){var Z=m;m=Y;try{return $.apply(this,arguments)}finally{m=Z}}}})(F0);U0.exports=F0;var Ik=U0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=F,Kt=Ik;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,Da={};function Yi(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Da[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zy={},$y={};function Rk(t){return Cf.call($y,t)?!0:Cf.call(zy,t)?!1:Ck.test(t)?$y[t]=!0:(zy[t]=!0,!1)}function Ak(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kk(t,e,n,r){if(e===null||typeof e>"u"||Ak(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function ym(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_m,ym);at[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_m,ym);at[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_m,ym);at[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vm(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kk(e,n,i,r)&&(n=null),r||i===null?Rk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),Wy=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Td;function na(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Id=!1;function Sd(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function Pk(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Rf:return"Profiler";case wm:return"StrictMode";case Af:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z0:return(t.displayName||"Context")+".Consumer";case B0:return(t._context.displayName||"Context")+".Provider";case Em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tm:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function Nk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xk(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=xk(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&vm(t,"checked",e,!1)}function xf(t,e){q0(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ra(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function K0(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,Q0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dk=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){Dk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Y0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ok=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(Ok[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,Ds=null,Os=null;function Qy(t){if(t=pl(t)){if(typeof Uf!="function")throw Error(j(280));var e=t.stateNode;e&&(e=lh(e),Uf(t.stateNode,t.type,e))}}function J0(t){Ds?Os?Os.push(t):Os=[t]:Ds=t}function Z0(){if(Ds){var t=Ds,e=Os;if(Os=Ds=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function eT(t,e){return t(e)}function tT(){}var Cd=!1;function nT(t,e,n){if(Cd)return t(e,n);Cd=!0;try{return eT(t,e,n)}finally{Cd=!1,(Ds!==null||Os!==null)&&(tT(),Z0())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Ff=!1;if(or)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Ff=!1}function bk(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var pa=!1,nc=null,rc=!1,jf=null,Lk={onError:function(t){pa=!0,nc=t}};function Mk(t,e,n,r,i,s,o,a,u){pa=!1,nc=null,bk.apply(Lk,arguments)}function Vk(t,e,n,r,i,s,o,a,u){if(Mk.apply(this,arguments),pa){if(pa){var c=nc;pa=!1,nc=null}else throw Error(j(198));rc||(rc=!0,jf=c)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(Xi(t)!==t)throw Error(j(188))}function Uk(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yy(i),t;if(s===r)return Yy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function iT(t){return t=Uk(t),t!==null?sT(t):null}function sT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sT(t);if(e!==null)return e;t=t.sibling}return null}var oT=Kt.unstable_scheduleCallback,Xy=Kt.unstable_cancelCallback,Fk=Kt.unstable_shouldYield,jk=Kt.unstable_requestPaint,Ve=Kt.unstable_now,Bk=Kt.unstable_getCurrentPriorityLevel,Sm=Kt.unstable_ImmediatePriority,aT=Kt.unstable_UserBlockingPriority,ic=Kt.unstable_NormalPriority,zk=Kt.unstable_LowPriority,lT=Kt.unstable_IdlePriority,ih=null,On=null;function $k(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(ih,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:qk,Wk=Math.log,Hk=Math.LN2;function qk(t){return t>>>=0,t===0?32:31-(Wk(t)/Hk|0)|0}var su=64,ou=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ia(a):(s&=o,s!==0&&(r=ia(s)))}else o=n&~i,o!==0?r=ia(o):s!==0&&(r=ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function Kk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Kk(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uT(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function Qk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function cT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hT,Rm,dT,fT,pT,zf=!1,au=[],Vr=null,Ur=null,Fr=null,La=new Map,Ma=new Map,Rr=[],Yk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pl(e),e!==null&&Rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xk(t,e,n,r,i){switch(e){case"focusin":return Vr=Wo(Vr,t,e,n,r,i),!0;case"dragenter":return Ur=Wo(Ur,t,e,n,r,i),!0;case"mouseover":return Fr=Wo(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Wo(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,Wo(Ma.get(s)||null,t,e,n,r,i)),!0}return!1}function mT(t){var e=wi(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=rT(n),e!==null){t.blockedOn=e,pT(t.priority,function(){dT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vf=r,n.target.dispatchEvent(r),Vf=null}else return e=pl(n),e!==null&&Rm(e),t.blockedOn=n,!1;e.shift()}return!0}function Zy(t,e,n){Ou(t)&&n.delete(e)}function Jk(){zf=!1,Vr!==null&&Ou(Vr)&&(Vr=null),Ur!==null&&Ou(Ur)&&(Ur=null),Fr!==null&&Ou(Fr)&&(Fr=null),La.forEach(Zy),Ma.forEach(Zy)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,Jk)))}function Va(t){function e(i){return Ho(i,t)}if(0<au.length){Ho(au[0],t);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&Ho(Vr,t),Ur!==null&&Ho(Ur,t),Fr!==null&&Ho(Fr,t),La.forEach(e),Ma.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)mT(n),n.blockedOn===null&&Rr.shift()}var bs=gr.ReactCurrentBatchConfig,oc=!0;function Zk(t,e,n,r){var i=he,s=bs.transition;bs.transition=null;try{he=1,Am(t,e,n,r)}finally{he=i,bs.transition=s}}function eP(t,e,n,r){var i=he,s=bs.transition;bs.transition=null;try{he=4,Am(t,e,n,r)}finally{he=i,bs.transition=s}}function Am(t,e,n,r){if(oc){var i=$f(t,e,n,r);if(i===null)Md(t,e,r,ac,n),Jy(t,r);else if(Xk(i,t,e,n,r))r.stopPropagation();else if(Jy(t,r),e&4&&-1<Yk.indexOf(t)){for(;i!==null;){var s=pl(i);if(s!==null&&hT(s),s=$f(t,e,n,r),s===null&&Md(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Md(t,e,r,null,n)}}var ac=null;function $f(t,e,n,r){if(ac=null,t=Im(r),t=wi(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function gT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bk()){case Sm:return 1;case aT:return 4;case ic:case zk:return 16;case lT:return 536870912;default:return 16}default:return 16}}var Or=null,km=null,bu=null;function _T(){if(bu)return bu;var t,e=km,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bu=i.slice(t,1<r?1-r:void 0)}function Lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function ev(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lu:ev,this.isPropagationStopped=ev,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pm=Xt(fo),fl=Ne({},fo,{view:0,detail:0}),tP=Xt(fl),Ad,kd,qo,sh=Ne({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(Ad=t.screenX-qo.screenX,kd=t.screenY-qo.screenY):kd=Ad=0,qo=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:kd}}),tv=Xt(sh),nP=Ne({},sh,{dataTransfer:0}),rP=Xt(nP),iP=Ne({},fl,{relatedTarget:0}),Pd=Xt(iP),sP=Ne({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),oP=Xt(sP),aP=Ne({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lP=Xt(aP),uP=Ne({},fo,{data:0}),nv=Xt(uP),cP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dP[t])?!!e[t]:!1}function Nm(){return fP}var pP=Ne({},fl,{key:function(t){if(t.key){var e=cP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nm,charCode:function(t){return t.type==="keypress"?Lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mP=Xt(pP),gP=Ne({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=Xt(gP),_P=Ne({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nm}),yP=Xt(_P),vP=Ne({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wP=Xt(vP),EP=Ne({},sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TP=Xt(EP),IP=[9,13,27,32],xm=or&&"CompositionEvent"in window,ma=null;or&&"documentMode"in document&&(ma=document.documentMode);var SP=or&&"TextEvent"in window&&!ma,yT=or&&(!xm||ma&&8<ma&&11>=ma),iv=" ",sv=!1;function vT(t,e){switch(t){case"keyup":return IP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function CP(t,e){switch(t){case"compositionend":return wT(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return t=e.data,t===iv&&sv?null:t;default:return null}}function RP(t,e){if(_s)return t==="compositionend"||!xm&&vT(t,e)?(t=_T(),bu=km=Or=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yT&&e.locale!=="ko"?null:e.data;default:return null}}var AP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AP[t.type]:e==="textarea"}function ET(t,e,n,r){J0(r),e=lc(e,"onChange"),0<e.length&&(n=new Pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ga=null,Ua=null;function kP(t){DT(t,0)}function oh(t){var e=ws(t);if(H0(e))return t}function PP(t,e){if(t==="change")return e}var TT=!1;if(or){var Nd;if(or){var xd="oninput"in document;if(!xd){var av=document.createElement("div");av.setAttribute("oninput","return;"),xd=typeof av.oninput=="function"}Nd=xd}else Nd=!1;TT=Nd&&(!document.documentMode||9<document.documentMode)}function lv(){ga&&(ga.detachEvent("onpropertychange",IT),Ua=ga=null)}function IT(t){if(t.propertyName==="value"&&oh(Ua)){var e=[];ET(e,Ua,t,Im(t)),nT(kP,e)}}function NP(t,e,n){t==="focusin"?(lv(),ga=e,Ua=n,ga.attachEvent("onpropertychange",IT)):t==="focusout"&&lv()}function xP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oh(Ua)}function DP(t,e){if(t==="click")return oh(e)}function OP(t,e){if(t==="input"||t==="change")return oh(e)}function bP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:bP;function Fa(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function uv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cv(t,e){var n=uv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uv(n)}}function ST(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ST(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function CT(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LP(t){var e=CT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ST(n.ownerDocument.documentElement,n)){if(r!==null&&Dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cv(n,s);var o=cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MP=or&&"documentMode"in document&&11>=document.documentMode,ys=null,Wf=null,_a=null,Hf=!1;function hv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||ys==null||ys!==tc(r)||(r=ys,"selectionStart"in r&&Dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_a&&Fa(_a,r)||(_a=r,r=lc(Wf,"onSelect"),0<r.length&&(e=new Pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},Dd={},RT={};or&&(RT=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function ah(t){if(Dd[t])return Dd[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in RT)return Dd[t]=e[n];return t}var AT=ah("animationend"),kT=ah("animationiteration"),PT=ah("animationstart"),NT=ah("transitionend"),xT=new Map,dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(t,e){xT.set(t,e),Yi(e,[t])}for(var Od=0;Od<dv.length;Od++){var bd=dv[Od],VP=bd.toLowerCase(),UP=bd[0].toUpperCase()+bd.slice(1);si(VP,"on"+UP)}si(AT,"onAnimationEnd");si(kT,"onAnimationIteration");si(PT,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(NT,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FP=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vk(r,e,void 0,t),t.currentTarget=null}function DT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}}}if(rc)throw t=jf,rc=!1,jf=null,t}function we(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(OT(e,t,2,!1),n.add(r))}function Ld(t,e,n){var r=0;e&&(r|=4),OT(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[cu]){t[cu]=!0,j0.forEach(function(n){n!=="selectionchange"&&(FP.has(n)||Ld(n,!1,t),Ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,Ld("selectionchange",!1,e))}}function OT(t,e,n,r){switch(gT(e)){case 1:var i=Zk;break;case 4:i=eP;break;default:i=Am}n=i.bind(null,e,n,t),i=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nT(function(){var c=s,h=Im(n),d=[];e:{var m=xT.get(t);if(m!==void 0){var _=Pm,v=t;switch(t){case"keypress":if(Lu(n)===0)break e;case"keydown":case"keyup":_=mP;break;case"focusin":v="focus",_=Pd;break;case"focusout":v="blur",_=Pd;break;case"beforeblur":case"afterblur":_=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=rP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=yP;break;case AT:case kT:case PT:_=oP;break;case NT:_=wP;break;case"scroll":_=tP;break;case"wheel":_=TP;break;case"copy":case"cut":case"paste":_=lP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=rv}var P=(e&4)!==0,N=!P&&t==="scroll",I=P?m!==null?m+"Capture":null:m;P=[];for(var E=c,S;E!==null;){S=E;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=ba(E,I),D!=null&&P.push(Ba(E,D,S)))),N)break;E=E.return}0<P.length&&(m=new _(m,v,null,n,h),d.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Vf&&(v=n.relatedTarget||n.fromElement)&&(wi(v)||v[ar]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?wi(v):null,v!==null&&(N=Xi(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(P=tv,D="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=rv,D="onPointerLeave",I="onPointerEnter",E="pointer"),N=_==null?m:ws(_),S=v==null?m:ws(v),m=new P(D,E+"leave",_,n,h),m.target=N,m.relatedTarget=S,D=null,wi(h)===c&&(P=new P(I,E+"enter",v,n,h),P.target=S,P.relatedTarget=N,D=P),N=D,_&&v)t:{for(P=_,I=v,E=0,S=P;S;S=us(S))E++;for(S=0,D=I;D;D=us(D))S++;for(;0<E-S;)P=us(P),E--;for(;0<S-E;)I=us(I),S--;for(;E--;){if(P===I||I!==null&&P===I.alternate)break t;P=us(P),I=us(I)}P=null}else P=null;_!==null&&pv(d,m,_,P,!1),v!==null&&N!==null&&pv(d,N,v,P,!0)}}e:{if(m=c?ws(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=PP;else if(ov(m))if(TT)M=OP;else{M=xP;var U=NP}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=DP);if(M&&(M=M(t,c))){ET(d,M,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Df(m,"number",m.value)}switch(U=c?ws(c):window,t){case"focusin":(ov(U)||U.contentEditable==="true")&&(ys=U,Wf=c,_a=null);break;case"focusout":_a=Wf=ys=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,hv(d,n,h);break;case"selectionchange":if(MP)break;case"keydown":case"keyup":hv(d,n,h)}var C;if(xm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else _s?vT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(yT&&n.locale!=="ko"&&(_s||y!=="onCompositionStart"?y==="onCompositionEnd"&&_s&&(C=_T()):(Or=h,km="value"in Or?Or.value:Or.textContent,_s=!0)),U=lc(c,y),0<U.length&&(y=new nv(y,t,null,n,h),d.push({event:y,listeners:U}),C?y.data=C:(C=wT(n),C!==null&&(y.data=C)))),(C=SP?CP(t,n):RP(t,n))&&(c=lc(c,"onBeforeInput"),0<c.length&&(h=new nv("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}DT(d,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ba(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=ba(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ba(n,s),u!=null&&o.unshift(Ba(n,u,a))):i||(u=ba(n,s),u!=null&&o.push(Ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jP=/\r\n?/g,BP=/\u0000|\uFFFD/g;function mv(t){return(typeof t=="string"?t:""+t).replace(jP,`
`).replace(BP,"")}function hu(t,e,n){if(e=mv(e),mv(t)!==e&&n)throw Error(j(425))}function uc(){}var qf=null,Kf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,zP=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,$P=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(WP)}:Qf;function WP(t){setTimeout(function(){throw t})}function Vd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Va(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Pn="__reactFiber$"+po,za="__reactProps$"+po,ar="__reactContainer$"+po,Yf="__reactEvents$"+po,HP="__reactListeners$"+po,qP="__reactHandles$"+po;function wi(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_v(t);t!==null;){if(n=t[Pn])return n;t=_v(t)}return e}t=n,n=t.parentNode}return null}function pl(t){return t=t[Pn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function lh(t){return t[za]||null}var Xf=[],Es=-1;function oi(t){return{current:t}}function Se(t){0>Es||(t.current=Xf[Es],Xf[Es]=null,Es--)}function ge(t,e){Es++,Xf[Es]=t.current,t.current=e}var Jr={},Et=oi(Jr),Lt=oi(!1),Oi=Jr;function qs(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function cc(){Se(Lt),Se(Et)}function yv(t,e,n){if(Et.current!==Jr)throw Error(j(168));ge(Et,e),ge(Lt,n)}function bT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Nk(t)||"Unknown",i));return Ne({},n,r)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Oi=Et.current,ge(Et,t),ge(Lt,Lt.current),!0}function vv(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=bT(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,Se(Lt),Se(Et),ge(Et,t)):Se(Lt),ge(Lt,n)}var Yn=null,uh=!1,Ud=!1;function LT(t){Yn===null?Yn=[t]:Yn.push(t)}function KP(t){uh=!0,LT(t)}function ai(){if(!Ud&&Yn!==null){Ud=!0;var t=0,e=he;try{var n=Yn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,uh=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),oT(Sm,ai),i}finally{he=e,Ud=!1}}return null}var Ts=[],Is=0,dc=null,fc=0,Zt=[],en=0,bi=null,Xn=1,Jn="";function mi(t,e){Ts[Is++]=fc,Ts[Is++]=dc,dc=t,fc=e}function MT(t,e,n){Zt[en++]=Xn,Zt[en++]=Jn,Zt[en++]=bi,bi=t;var r=Xn;t=Jn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-_n(e)+i|n<<i|r,Jn=s+t}else Xn=1<<s|n<<i|r,Jn=t}function Om(t){t.return!==null&&(mi(t,1),MT(t,1,0))}function bm(t){for(;t===dc;)dc=Ts[--Is],Ts[Is]=null,fc=Ts[--Is],Ts[Is]=null;for(;t===bi;)bi=Zt[--en],Zt[en]=null,Jn=Zt[--en],Zt[en]=null,Xn=Zt[--en],Zt[en]=null}var Ht=null,Bt=null,Re=!1,fn=null;function VT(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bi!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Bt=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Re){var e=Bt;if(e){var n=e;if(!wv(t,e)){if(Jf(t))throw Error(j(418));e=jr(n.nextSibling);var r=Ht;e&&wv(t,e)?VT(r,n):(t.flags=t.flags&-4097|2,Re=!1,Ht=t)}}else{if(Jf(t))throw Error(j(418));t.flags=t.flags&-4097|2,Re=!1,Ht=t}}}function Ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function du(t){if(t!==Ht)return!1;if(!Re)return Ev(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=Bt)){if(Jf(t))throw UT(),Error(j(418));for(;e;)VT(t,e),e=jr(e.nextSibling)}if(Ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Ht?jr(t.stateNode.nextSibling):null;return!0}function UT(){for(var t=Bt;t;)t=jr(t.nextSibling)}function Ks(){Bt=Ht=null,Re=!1}function Lm(t){fn===null?fn=[t]:fn.push(t)}var GP=gr.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function fu(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tv(t){var e=t._init;return e(t._payload)}function FT(t){function e(I,E){if(t){var S=I.deletions;S===null?(I.deletions=[E],I.flags|=16):S.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Wr(I,E),I.index=0,I.sibling=null,I}function s(I,E,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<E?(I.flags|=2,E):S):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,E,S,D){return E===null||E.tag!==6?(E=Hd(S,I.mode,D),E.return=I,E):(E=i(E,S),E.return=I,E)}function u(I,E,S,D){var M=S.type;return M===gs?h(I,E,S.props.children,D,S.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Tv(M)===E.type)?(D=i(E,S.props),D.ref=Ko(I,E,S),D.return=I,D):(D=zu(S.type,S.key,S.props,null,I.mode,D),D.ref=Ko(I,E,S),D.return=I,D)}function c(I,E,S,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=qd(S,I.mode,D),E.return=I,E):(E=i(E,S.children||[]),E.return=I,E)}function h(I,E,S,D,M){return E===null||E.tag!==7?(E=ki(S,I.mode,D,M),E.return=I,E):(E=i(E,S),E.return=I,E)}function d(I,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Hd(""+E,I.mode,S),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nu:return S=zu(E.type,E.key,E.props,null,I.mode,S),S.ref=Ko(I,null,E),S.return=I,S;case ms:return E=qd(E,I.mode,S),E.return=I,E;case Sr:var D=E._init;return d(I,D(E._payload),S)}if(ra(E)||zo(E))return E=ki(E,I.mode,S,null),E.return=I,E;fu(I,E)}return null}function m(I,E,S,D){var M=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:a(I,E,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nu:return S.key===M?u(I,E,S,D):null;case ms:return S.key===M?c(I,E,S,D):null;case Sr:return M=S._init,m(I,E,M(S._payload),D)}if(ra(S)||zo(S))return M!==null?null:h(I,E,S,D,null);fu(I,S)}return null}function _(I,E,S,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,a(E,I,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case nu:return I=I.get(D.key===null?S:D.key)||null,u(E,I,D,M);case ms:return I=I.get(D.key===null?S:D.key)||null,c(E,I,D,M);case Sr:var U=D._init;return _(I,E,S,U(D._payload),M)}if(ra(D)||zo(D))return I=I.get(S)||null,h(E,I,D,M,null);fu(E,D)}return null}function v(I,E,S,D){for(var M=null,U=null,C=E,y=E=0,A=null;C!==null&&y<S.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var k=m(I,C,S[y],D);if(k===null){C===null&&(C=A);break}t&&C&&k.alternate===null&&e(I,C),E=s(k,E,y),U===null?M=k:U.sibling=k,U=k,C=A}if(y===S.length)return n(I,C),Re&&mi(I,y),M;if(C===null){for(;y<S.length;y++)C=d(I,S[y],D),C!==null&&(E=s(C,E,y),U===null?M=C:U.sibling=C,U=C);return Re&&mi(I,y),M}for(C=r(I,C);y<S.length;y++)A=_(C,I,y,S[y],D),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),E=s(A,E,y),U===null?M=A:U.sibling=A,U=A);return t&&C.forEach(function(T){return e(I,T)}),Re&&mi(I,y),M}function P(I,E,S,D){var M=zo(S);if(typeof M!="function")throw Error(j(150));if(S=M.call(S),S==null)throw Error(j(151));for(var U=M=null,C=E,y=E=0,A=null,k=S.next();C!==null&&!k.done;y++,k=S.next()){C.index>y?(A=C,C=null):A=C.sibling;var T=m(I,C,k.value,D);if(T===null){C===null&&(C=A);break}t&&C&&T.alternate===null&&e(I,C),E=s(T,E,y),U===null?M=T:U.sibling=T,U=T,C=A}if(k.done)return n(I,C),Re&&mi(I,y),M;if(C===null){for(;!k.done;y++,k=S.next())k=d(I,k.value,D),k!==null&&(E=s(k,E,y),U===null?M=k:U.sibling=k,U=k);return Re&&mi(I,y),M}for(C=r(I,C);!k.done;y++,k=S.next())k=_(C,I,y,k.value,D),k!==null&&(t&&k.alternate!==null&&C.delete(k.key===null?y:k.key),E=s(k,E,y),U===null?M=k:U.sibling=k,U=k);return t&&C.forEach(function(x){return e(I,x)}),Re&&mi(I,y),M}function N(I,E,S,D){if(typeof S=="object"&&S!==null&&S.type===gs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case nu:e:{for(var M=S.key,U=E;U!==null;){if(U.key===M){if(M=S.type,M===gs){if(U.tag===7){n(I,U.sibling),E=i(U,S.props.children),E.return=I,I=E;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Sr&&Tv(M)===U.type){n(I,U.sibling),E=i(U,S.props),E.ref=Ko(I,U,S),E.return=I,I=E;break e}n(I,U);break}else e(I,U);U=U.sibling}S.type===gs?(E=ki(S.props.children,I.mode,D,S.key),E.return=I,I=E):(D=zu(S.type,S.key,S.props,null,I.mode,D),D.ref=Ko(I,E,S),D.return=I,I=D)}return o(I);case ms:e:{for(U=S.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(I,E.sibling),E=i(E,S.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=qd(S,I.mode,D),E.return=I,I=E}return o(I);case Sr:return U=S._init,N(I,E,U(S._payload),D)}if(ra(S))return v(I,E,S,D);if(zo(S))return P(I,E,S,D);fu(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,S),E.return=I,I=E):(n(I,E),E=Hd(S,I.mode,D),E.return=I,I=E),o(I)):n(I,E)}return N}var Gs=FT(!0),jT=FT(!1),pc=oi(null),mc=null,Ss=null,Mm=null;function Vm(){Mm=Ss=mc=null}function Um(t){var e=pc.current;Se(pc),t._currentValue=e}function ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){mc=t,Mm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Mm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(mc===null)throw Error(j(308));Ss=t,mc.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ei=null;function Fm(t){Ei===null?Ei=[t]:Ei.push(t)}function BT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fm(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function jm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Fm(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function Mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cm(t,n)}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,P=a;switch(m=e,_=n,P.tag){case 1:if(v=P.payload,typeof v=="function"){d=v.call(_,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=P.payload,m=typeof v=="function"?v.call(_,d,m):v,m==null)break e;d=Ne({},d,m);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=d):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=d}}function Sv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ml={},bn=oi(ml),$a=oi(ml),Wa=oi(ml);function Ti(t){if(t===ml)throw Error(j(174));return t}function Bm(t,e){switch(ge(Wa,e),ge($a,t),ge(bn,ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bf(e,t)}Se(bn),ge(bn,e)}function Qs(){Se(bn),Se($a),Se(Wa)}function $T(t){Ti(Wa.current);var e=Ti(bn.current),n=bf(e,t.type);e!==n&&(ge($a,t),ge(bn,n))}function zm(t){$a.current===t&&(Se(bn),Se($a))}var ke=oi(0);function _c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function $m(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Vu=gr.ReactCurrentDispatcher,jd=gr.ReactCurrentBatchConfig,Li=0,Pe=null,We=null,Qe=null,yc=!1,ya=!1,Ha=0,QP=0;function dt(){throw Error(j(321))}function Wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function Hm(t,e,n,r,i,s){if(Li=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?ZP:eN,t=n(r,i),ya){s=0;do{if(ya=!1,Ha=0,25<=s)throw Error(j(301));s+=1,Qe=We=null,e.updateQueue=null,Vu.current=tN,t=n(r,i)}while(ya)}if(Vu.current=vc,e=We!==null&&We.next!==null,Li=0,Qe=We=Pe=null,yc=!1,e)throw Error(j(300));return t}function qm(){var t=Ha!==0;return Ha=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function an(){if(We===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,We=t;else{if(t===null)throw Error(j(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function qa(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=an(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Li&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,Pe.lanes|=h,Mi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=an(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function WT(){}function HT(t,e){var n=Pe,r=an(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Km(GT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Ka(9,KT.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(j(349));Li&30||qT(n,e,i)}return i}function qT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function KT(t,e,n,r){e.value=n,e.getSnapshot=r,QT(e)&&YT(t)}function GT(t,e,n){return n(function(){QT(e)&&YT(t)})}function QT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function YT(t){var e=lr(t,1);e!==null&&yn(e,t,1,-1)}function Cv(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=JP.bind(null,Pe,t),[e.memoizedState,t]}function Ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function XT(){return an().memoizedState}function Uu(t,e,n,r){var i=kn();Pe.flags|=t,i.memoizedState=Ka(1|e,n,void 0,r===void 0?null:r)}function ch(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Wm(r,o.deps)){i.memoizedState=Ka(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Ka(1|e,n,s,r)}function Rv(t,e){return Uu(8390656,8,t,e)}function Km(t,e){return ch(2048,8,t,e)}function JT(t,e){return ch(4,2,t,e)}function ZT(t,e){return ch(4,4,t,e)}function eI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tI(t,e,n){return n=n!=null?n.concat([t]):null,ch(4,4,eI.bind(null,e,t),n)}function Gm(){}function nI(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function rI(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iI(t,e,n){return Li&21?(Tn(n,e)||(n=uT(),Pe.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function YP(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{he=n,jd.transition=r}}function sI(){return an().memoizedState}function XP(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oI(t))aI(e,n);else if(n=BT(t,e,n,r),n!==null){var i=At();yn(n,t,r,i),lI(n,e,r)}}function JP(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oI(t))aI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(i.next=i,Fm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=BT(t,e,i,r),n!==null&&(i=At(),yn(n,t,r,i),lI(n,e,r))}}function oI(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function aI(t,e){ya=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cm(t,n)}}var vc={readContext:on,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},ZP={readContext:on,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,eI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XP.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:Gm,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=YP.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=kn();if(Re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Je===null)throw Error(j(349));Li&30||qT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rv(GT.bind(null,r,s,t),[t]),r.flags|=2048,Ka(9,KT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=Je.identifierPrefix;if(Re){var n=Jn,r=Xn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eN={readContext:on,useCallback:nI,useContext:on,useEffect:Km,useImperativeHandle:tI,useInsertionEffect:JT,useLayoutEffect:ZT,useMemo:rI,useReducer:Bd,useRef:XT,useState:function(){return Bd(qa)},useDebugValue:Gm,useDeferredValue:function(t){var e=an();return iI(e,We.memoizedState,t)},useTransition:function(){var t=Bd(qa)[0],e=an().memoizedState;return[t,e]},useMutableSource:WT,useSyncExternalStore:HT,useId:sI,unstable_isNewReconciler:!1},tN={readContext:on,useCallback:nI,useContext:on,useEffect:Km,useImperativeHandle:tI,useInsertionEffect:JT,useLayoutEffect:ZT,useMemo:rI,useReducer:zd,useRef:XT,useState:function(){return zd(qa)},useDebugValue:Gm,useDeferredValue:function(t){var e=an();return We===null?e.memoizedState=t:iI(e,We.memoizedState,t)},useTransition:function(){var t=zd(qa)[0],e=an().memoizedState;return[t,e]},useMutableSource:WT,useSyncExternalStore:HT,useId:sI,unstable_isNewReconciler:!1};function hn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=$r(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(yn(e,t,i,r),Mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=$r(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(yn(e,t,i,r),Mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=$r(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(yn(e,t,r,n),Mu(e,t,r))}};function Av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,s):!0}function uI(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Mt(e)?Oi:Et.current,r=e.contextTypes,s=(r=r!=null)?qs(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function np(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Mt(e)?Oi:Et.current,i.context=qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hh.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",r=e;do n+=Pk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nN=typeof WeakMap=="function"?WeakMap:Map;function cI(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ec||(Ec=!0,fp=r),rp(t,e)},n}function hI(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rp(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gN.bind(null,t,e,n),e.then(t,t))}function Nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var rN=gr.ReactCurrentOwner,Ot=!1;function Rt(t,e,n,r){e.child=t===null?jT(e,null,n,r):Gs(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return Ls(e,i),r=Hm(t,e,n,r,s,i),n=qm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(Re&&n&&Om(e),e.flags|=1,Rt(t,e,r,i),e.child)}function Ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ng(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dI(t,e,s,r,i)):(t=zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return ur(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function dI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fa(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,ur(t,e,i)}return ip(t,e,n,r,i)}function fI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Rs,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Rs,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Rs,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Rs,jt),jt|=r;return Rt(t,e,i,n),e.child}function pI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ip(t,e,n,r,i){var s=Mt(n)?Oi:Et.current;return s=qs(e,s),Ls(e,i),n=Hm(t,e,n,r,s,i),r=qm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(Re&&r&&Om(e),e.flags|=1,Rt(t,e,n,i),e.child)}function bv(t,e,n,r,i){if(Mt(n)){var s=!0;hc(e)}else s=!1;if(Ls(e,i),e.stateNode===null)Fu(t,e),uI(e,n,r),np(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Mt(n)?Oi:Et.current,c=qs(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&kv(e,o,r,c),Cr=!1;var m=e.memoizedState;o.state=m,gc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Lt.current||Cr?(typeof h=="function"&&(tp(e,n,h,r),u=e.memoizedState),(a=Cr||Av(e,n,a,r,m,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hn(e.type,a),o.props=c,d=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Mt(n)?Oi:Et.current,u=qs(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||m!==u)&&kv(e,o,r,u),Cr=!1,m=e.memoizedState,o.state=m,gc(e,r,o,i);var v=e.memoizedState;a!==d||m!==v||Lt.current||Cr?(typeof _=="function"&&(tp(e,n,_,r),v=e.memoizedState),(c=Cr||Av(e,n,c,r,m,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){pI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vv(e,n,!1),ur(t,e,s);r=e.stateNode,rN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&vv(e,n,!0),e.child}function mI(t){var e=t.stateNode;e.pendingContext?yv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yv(t,e.context,!1),Bm(t,e.containerInfo)}function Lv(t,e,n,r,i){return Ks(),Lm(i),e.flags|=256,Rt(t,e,n,r),e.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function gI(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ph(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ap(n),e.memoizedState=op,t):Qm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=op,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qm(t,e){return e=ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&Lm(r),Gs(e,t.child,null,n),t=Qm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(j(422))),pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ph({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=op,s);if(!(e.mode&1))return pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=$d(s,r,void 0),pu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(t,i),yn(r,t,i,-1))}return tg(),r=$d(Error(j(421))),pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_N.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=jr(i.nextSibling),Ht=e,Re=!0,fn=null,t!==null&&(Zt[en++]=Xn,Zt[en++]=Jn,Zt[en++]=bi,Xn=t.id,Jn=t.overflow,bi=e),e=Qm(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ep(t.return,e,n)}function Wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _I(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_c(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_c(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,s);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sN(t,e,n){switch(e.tag){case 3:mI(e),Ks();break;case 5:$T(e);break;case 1:Mt(e.type)&&hc(e);break;case 4:Bm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?gI(t,e,n):(ge(ke,ke.current&1),t=ur(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _I(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,fI(t,e,n)}return ur(t,e,n)}var yI,lp,vI,wI;yI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};vI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ti(bn.current);var s=null;switch(n){case"input":i=Nf(t,i),r=Nf(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}Lf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oN(t,e,n){var r=e.pendingProps;switch(bm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Mt(e.type)&&cc(),ft(e),null;case 3:return r=e.stateNode,Qs(),Se(Lt),Se(Et),$m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(gp(fn),fn=null))),lp(t,e),ft(e),null;case 5:zm(e);var i=Ti(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)vI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ft(e),null}if(t=Ti(bn.current),du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[za]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<sa.length;i++)we(sa[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Hy(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Ky(r,s),we("invalid",r)}Lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ru(r),qy(r,s,!0);break;case"textarea":ru(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[za]=r,yI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<sa.length;i++)we(sa[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Hy(t,r),i=Nf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),we("invalid",t);break;case"textarea":Ky(t,r),i=Of(t,r),we("invalid",t);break;default:i=r}Lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?X0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Q0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oa(t,u):typeof u=="number"&&Oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&vm(t,s,u,o))}switch(n){case"input":ru(t),qy(t,r,!1);break;case"textarea":ru(t),Gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)wI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Ti(Wa.current),Ti(bn.current),du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:hu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return ft(e),null;case 13:if(Se(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Bt!==null&&e.mode&1&&!(e.flags&128))UT(),Ks(),e.flags|=98560,s=!1;else if(s=du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Pn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else fn!==null&&(gp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?He===0&&(He=3):tg())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Qs(),lp(t,e),t===null&&ja(e.stateNode.containerInfo),ft(e),null;case 10:return Um(e.type._context),ft(e),null;case 17:return Mt(e.type)&&cc(),ft(e),null;case 19:if(Se(ke),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Go(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_c(t),o!==null){for(e.flags|=128,Go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Xs&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304)}else{if(!r)if(t=_c(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return ft(e),null}else 2*Ve()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return eg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function aN(t,e){switch(bm(e),e.tag){case 1:return Mt(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),Se(Lt),Se(Et),$m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zm(e),null;case 13:if(Se(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(ke),null;case 4:return Qs(),null;case 10:return Um(e.type._context),null;case 22:case 23:return eg(),null;case 24:return null;default:return null}}var mu=!1,gt=!1,lN=typeof WeakSet=="function"?WeakSet:Set,W=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function up(t,e,n){try{n()}catch(r){De(t,e,r)}}var Vv=!1;function uN(t,e){if(qf=oc,t=CT(),Dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,d=t,m=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)m=d,d=_;for(;;){if(d===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(_=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},oc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var P=v.memoizedProps,N=v.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:hn(e.type,P),N);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){De(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return v=Vv,Vv=!1,v}function va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&up(e,n,s)}i=i.next}while(i!==r)}}function dh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function EI(t){var e=t.alternate;e!==null&&(t.alternate=null,EI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[za],delete e[Yf],delete e[HP],delete e[qP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function TI(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||TI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}var nt=null,dn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)II(t,e,n),n=n.sibling}function II(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 5:gt||Cs(n,e);case 6:var r=nt,i=dn;nt=null,Tr(t,e,n),nt=r,dn=i,nt!==null&&(dn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(dn?(t=nt,n=n.stateNode,t.nodeType===8?Vd(t.parentNode,n):t.nodeType===1&&Vd(t,n),Va(t)):Vd(nt,n.stateNode));break;case 4:r=nt,i=dn,nt=n.stateNode.containerInfo,dn=!0,Tr(t,e,n),nt=r,dn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!gt&&(Cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Tr(t,e,n),gt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lN),e.forEach(function(r){var i=yN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,dn=!1;break e;case 3:nt=a.stateNode.containerInfo,dn=!0;break e;case 4:nt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(nt===null)throw Error(j(160));II(s,o,i),nt=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SI(e,t),e=e.sibling}function SI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),An(t),r&4){try{va(3,t,t.return),dh(3,t)}catch(P){De(t,t.return,P)}try{va(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:cn(e,t),An(t),r&512&&n!==null&&Cs(n,n.return);break;case 5:if(cn(e,t),An(t),r&512&&n!==null&&Cs(n,n.return),t.flags&32){var i=t.stateNode;try{Oa(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q0(i,s),Mf(a,o);var c=Mf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],d=u[o+1];h==="style"?X0(i,d):h==="dangerouslySetInnerHTML"?Q0(i,d):h==="children"?Oa(i,d):vm(i,h,d,c)}switch(a){case"input":xf(i,s);break;case"textarea":K0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?xs(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?xs(i,!!s.multiple,s.defaultValue,!0):xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[za]=s}catch(P){De(t,t.return,P)}}break;case 6:if(cn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(cn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:cn(e,t),An(t);break;case 13:cn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jm=Ve())),r&4&&Fv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||h,cn(e,t),gt=c):cn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(d=W=h;W!==null;){switch(m=W,_=m.child,m.tag){case 0:case 11:case 14:case 15:va(4,m,m.return);break;case 1:Cs(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:Cs(m,m.return);break;case 22:if(m.memoizedState!==null){Bv(d);continue}}_!==null?(_.return=m,W=_):Bv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Y0("display",o))}catch(P){De(t,t.return,P)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(P){De(t,t.return,P)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(e,t),An(t),r&4&&Fv(t);break;case 21:break;default:cn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(TI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oa(i,""),r.flags&=-33);var s=Uv(t);dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uv(t);hp(t,a,o);break;default:throw Error(j(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cN(t,e,n){W=t,CI(t)}function CI(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||gt;a=mu;var c=gt;if(mu=o,(gt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?zv(i):u!==null?(u.return=o,W=u):zv(i);for(;s!==null;)W=s,CI(s),s=s.sibling;W=i,mu=a,gt=c}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):jv(t)}}function jv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||dh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Va(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}gt||e.flags&512&&cp(e)}catch(m){De(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Bv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function zv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dh(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{cp(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{cp(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var hN=Math.ceil,wc=gr.ReactCurrentDispatcher,Ym=gr.ReactCurrentOwner,rn=gr.ReactCurrentBatchConfig,ae=0,Je=null,Fe=null,st=0,jt=0,Rs=oi(0),He=0,Ga=null,Mi=0,fh=0,Xm=0,wa=null,xt=null,Jm=0,Xs=1/0,Qn=null,Ec=!1,fp=null,zr=null,gu=!1,br=null,Tc=0,Ea=0,pp=null,ju=-1,Bu=0;function At(){return ae&6?Ve():ju!==-1?ju:ju=Ve()}function $r(t){return t.mode&1?ae&2&&st!==0?st&-st:GP.transition!==null?(Bu===0&&(Bu=uT()),Bu):(t=he,t!==0||(t=window.event,t=t===void 0?16:gT(t.type)),t):1}function yn(t,e,n,r){if(50<Ea)throw Ea=0,pp=null,Error(j(185));dl(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(fh|=n),He===4&&Ar(t,st)),Vt(t,r),n===1&&ae===0&&!(e.mode&1)&&(Xs=Ve()+500,uh&&ai()))}function Vt(t,e){var n=t.callbackNode;Gk(t,e);var r=sc(t,t===Je?st:0);if(r===0)n!==null&&Xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xy(n),e===1)t.tag===0?KP($v.bind(null,t)):LT($v.bind(null,t)),$P(function(){!(ae&6)&&ai()}),n=null;else{switch(cT(r)){case 1:n=Sm;break;case 4:n=aT;break;case 16:n=ic;break;case 536870912:n=lT;break;default:n=ic}n=OI(n,RI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RI(t,e){if(ju=-1,Bu=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=sc(t,t===Je?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ic(t,r);else{e=r;var i=ae;ae|=2;var s=kI();(Je!==t||st!==e)&&(Qn=null,Xs=Ve()+500,Ai(t,e));do try{pN();break}catch(a){AI(t,a)}while(!0);Vm(),wc.current=s,ae=i,Fe!==null?e=0:(Je=null,st=0,e=He)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=mp(t,i))),e===1)throw n=Ga,Ai(t,0),Ar(t,r),Vt(t,Ve()),n;if(e===6)Ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!dN(i)&&(e=Ic(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=mp(t,s))),e===1))throw n=Ga,Ai(t,0),Ar(t,r),Vt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:gi(t,xt,Qn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=Jm+500-Ve(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qf(gi.bind(null,t,xt,Qn),e);break}gi(t,xt,Qn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hN(r/1960))-r,10<r){t.timeoutHandle=Qf(gi.bind(null,t,xt,Qn),r);break}gi(t,xt,Qn);break;case 5:gi(t,xt,Qn);break;default:throw Error(j(329))}}}return Vt(t,Ve()),t.callbackNode===n?RI.bind(null,t):null}function mp(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=xt,xt=n,e!==null&&gp(e)),t}function gp(t){xt===null?xt=t:xt.push.apply(xt,t)}function dN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Xm,e&=~fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function $v(t){if(ae&6)throw Error(j(327));Ms();var e=sc(t,0);if(!(e&1))return Vt(t,Ve()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=mp(t,r))}if(n===1)throw n=Ga,Ai(t,0),Ar(t,e),Vt(t,Ve()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,xt,Qn),Vt(t,Ve()),null}function Zm(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Xs=Ve()+500,uh&&ai())}}function Vi(t){br!==null&&br.tag===0&&!(ae&6)&&Ms();var e=ae;ae|=1;var n=rn.transition,r=he;try{if(rn.transition=null,he=1,t)return t()}finally{he=r,rn.transition=n,ae=e,!(ae&6)&&ai()}}function eg(){jt=Rs.current,Se(Rs)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zP(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(bm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Qs(),Se(Lt),Se(Et),$m();break;case 5:zm(r);break;case 4:Qs();break;case 13:Se(ke);break;case 19:Se(ke);break;case 10:Um(r.type._context);break;case 22:case 23:eg()}n=n.return}if(Je=t,Fe=t=Wr(t.current,null),st=jt=e,He=0,Ga=null,Xm=fh=Mi=0,xt=wa=null,Ei!==null){for(e=0;e<Ei.length;e++)if(n=Ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ei=null}return t}function AI(t,e){do{var n=Fe;try{if(Vm(),Vu.current=vc,yc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yc=!1}if(Li=0,Qe=We=Pe=null,ya=!1,Ha=0,Ym.current=null,n===null||n.return===null){He=1,Ga=e,Fe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Nv(o);if(_!==null){_.flags&=-257,xv(_,o,a,s,e),_.mode&1&&Pv(s,c,e),e=_,u=c;var v=e.updateQueue;if(v===null){var P=new Set;P.add(u),e.updateQueue=P}else v.add(u);break e}else{if(!(e&1)){Pv(s,c,e),tg();break e}u=Error(j(426))}}else if(Re&&a.mode&1){var N=Nv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),xv(N,o,a,s,e),Lm(Ys(u,a));break e}}s=u=Ys(u,a),He!==4&&(He=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=cI(s,u,e);Iv(s,I);break e;case 1:a=u;var E=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(zr===null||!zr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=hI(s,a,e);Iv(s,D);break e}}s=s.return}while(s!==null)}NI(n)}catch(M){e=M,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function kI(){var t=wc.current;return wc.current=vc,t===null?vc:t}function tg(){(He===0||He===3||He===2)&&(He=4),Je===null||!(Mi&268435455)&&!(fh&268435455)||Ar(Je,st)}function Ic(t,e){var n=ae;ae|=2;var r=kI();(Je!==t||st!==e)&&(Qn=null,Ai(t,e));do try{fN();break}catch(i){AI(t,i)}while(!0);if(Vm(),ae=n,wc.current=r,Fe!==null)throw Error(j(261));return Je=null,st=0,He}function fN(){for(;Fe!==null;)PI(Fe)}function pN(){for(;Fe!==null&&!Fk();)PI(Fe)}function PI(t){var e=DI(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?NI(t):Fe=e,Ym.current=null}function NI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aN(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=oN(n,e,jt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function gi(t,e,n){var r=he,i=rn.transition;try{rn.transition=null,he=1,mN(t,e,n,r)}finally{rn.transition=i,he=r}return null}function mN(t,e,n,r){do Ms();while(br!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qk(t,s),t===Je&&(Fe=Je=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,OI(ic,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=he;he=1;var a=ae;ae|=4,Ym.current=null,uN(t,n),SI(n,t),LP(Kf),oc=!!qf,Kf=qf=null,t.current=n,cN(n),jk(),ae=a,he=o,rn.transition=s}else t.current=n;if(gu&&(gu=!1,br=t,Tc=i),s=t.pendingLanes,s===0&&(zr=null),$k(n.stateNode),Vt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ec)throw Ec=!1,t=fp,fp=null,t;return Tc&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===pp?Ea++:(Ea=0,pp=t):Ea=0,ai(),null}function Ms(){if(br!==null){var t=cT(Tc),e=rn.transition,n=he;try{if(rn.transition=null,he=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Tc=0,ae&6)throw Error(j(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:va(8,h,s)}var d=h.child;if(d!==null)d.return=h,W=d;else for(;W!==null;){h=W;var m=h.sibling,_=h.return;if(EI(h),h===c){W=null;break}if(m!==null){m.return=_,W=m;break}W=_}}}var v=s.alternate;if(v!==null){var P=v.child;if(P!==null){v.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=E;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dh(9,a)}}catch(M){De(a,a.return,M)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(ae=i,ai(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(ih,t)}catch{}r=!0}return r}finally{he=n,rn.transition=e}}return!1}function Wv(t,e,n){e=Ys(n,e),e=cI(t,e,1),t=Br(t,e,1),e=At(),t!==null&&(dl(t,1,e),Vt(t,e))}function De(t,e,n){if(t.tag===3)Wv(t,t,n);else for(;e!==null;){if(e.tag===3){Wv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=Ys(n,t),t=hI(e,t,1),e=Br(e,t,1),t=At(),e!==null&&(dl(e,1,t),Vt(e,t));break}}e=e.return}}function gN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Ve()-Jm?Ai(t,0):Xm|=n),Vt(t,e)}function xI(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=At();t=lr(t,e),t!==null&&(dl(t,e,n),Vt(t,n))}function _N(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xI(t,n)}function yN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),xI(t,n)}var DI;DI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,sN(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&MT(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fu(t,e),t=e.pendingProps;var i=qs(e,Et.current);Ls(e,n),i=Hm(null,e,r,t,i,n);var s=qm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,hc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jm(e),i.updater=hh,e.stateNode=i,i._reactInternals=e,np(e,r,t,n),e=sp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Om(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wN(r),t=hn(r,t),i){case 0:e=ip(null,e,r,t,n);break e;case 1:e=bv(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Ov(null,e,r,hn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),bv(t,e,r,i,n);case 3:e:{if(mI(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zT(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ys(Error(j(423)),e),e=Lv(t,e,r,n,i);break e}else if(r!==i){i=Ys(Error(j(424)),e),e=Lv(t,e,r,n,i);break e}else for(Bt=jr(e.stateNode.containerInfo.firstChild),Ht=e,Re=!0,fn=null,n=jT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===i){e=ur(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return $T(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=32),pI(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return gI(t,e,n);case 4:return Bm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Dv(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(pc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Lt.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ep(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=on(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),Ov(t,e,r,i,n);case 15:return dI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Fu(t,e),e.tag=1,Mt(r)?(t=!0,hc(e)):t=!1,Ls(e,n),uI(e,r,i),np(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return _I(t,e,n);case 22:return fI(t,e,n)}throw Error(j(156,e.tag))};function OI(t,e){return oT(t,e)}function vN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new vN(t,e,n,r)}function ng(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wN(t){if(typeof t=="function")return ng(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Em)return 11;if(t===Tm)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ng(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return ki(n.children,i,s,e);case wm:o=8,i|=8;break;case Rf:return t=tn(12,n,e,i|2),t.elementType=Rf,t.lanes=s,t;case Af:return t=tn(13,n,e,i),t.elementType=Af,t.lanes=s,t;case kf:return t=tn(19,n,e,i),t.elementType=kf,t.lanes=s,t;case $0:return ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B0:o=10;break e;case z0:o=9;break e;case Em:o=11;break e;case Tm:o=14;break e;case Sr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function ph(t,e,n,r){return t=tn(22,t,r,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function qd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rg(t,e,n,r,i,s,o,a,u){return t=new EN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jm(s),t}function TN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bI(t){if(!t)return Jr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Mt(n))return bT(t,n,e)}return e}function LI(t,e,n,r,i,s,o,a,u){return t=rg(n,r,!0,t,i,s,o,a,u),t.context=bI(null),n=t.current,r=At(),i=$r(n),s=rr(r,i),s.callback=e??null,Br(n,s,i),t.current.lanes=i,dl(t,i,r),Vt(t,r),t}function mh(t,e,n,r){var i=e.current,s=At(),o=$r(i);return n=bI(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(yn(t,i,o,s),Mu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ig(t,e){Hv(t,e),(t=t.alternate)&&Hv(t,e)}function IN(){return null}var MI=typeof reportError=="function"?reportError:function(t){console.error(t)};function sg(t){this._internalRoot=t}gh.prototype.render=sg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));mh(t,e,null,null)};gh.prototype.unmount=sg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){mh(null,t,null,null)}),e[ar]=null}};function gh(t){this._internalRoot=t}gh.prototype.unstable_scheduleHydration=function(t){if(t){var e=fT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&mT(t)}};function og(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qv(){}function SN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sc(o);s.call(c)}}var o=LI(e,r,t,0,null,!1,!1,"",qv);return t._reactRootContainer=o,t[ar]=o.current,ja(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Sc(u);a.call(c)}}var u=rg(t,0,!1,null,null,!1,!1,"",qv);return t._reactRootContainer=u,t[ar]=u.current,ja(t.nodeType===8?t.parentNode:t),Vi(function(){mh(e,u,n,r)}),u}function yh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Sc(o);a.call(u)}}mh(e,o,t,i)}else o=SN(n,e,t,i,r);return Sc(o)}hT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Cm(e,n|1),Vt(e,Ve()),!(ae&6)&&(Xs=Ve()+500,ai()))}break;case 13:Vi(function(){var r=lr(t,1);if(r!==null){var i=At();yn(r,t,1,i)}}),ig(t,1)}};Rm=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=At();yn(e,t,134217728,n)}ig(t,134217728)}};dT=function(t){if(t.tag===13){var e=$r(t),n=lr(t,e);if(n!==null){var r=At();yn(n,t,e,r)}ig(t,e)}};fT=function(){return he};pT=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Uf=function(t,e,n){switch(e){case"input":if(xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lh(r);if(!i)throw Error(j(90));H0(r),xf(r,i)}}}break;case"textarea":K0(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};eT=Zm;tT=Vi;var CN={usingClientEntryPoint:!1,Events:[pl,ws,lh,J0,Z0,Zm]},Qo={findFiberByHostInstance:wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RN={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iT(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||IN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{ih=_u.inject(RN),On=_u}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!og(e))throw Error(j(200));return TN(t,e,null,n)};Yt.createRoot=function(t,e){if(!og(t))throw Error(j(299));var n=!1,r="",i=MI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rg(t,1,!1,null,null,n,!1,r,i),t[ar]=e.current,ja(t.nodeType===8?t.parentNode:t),new sg(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=iT(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Vi(t)};Yt.hydrate=function(t,e,n){if(!_h(e))throw Error(j(200));return yh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!og(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=MI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=LI(e,null,t,1,n??null,i,!1,s,o),t[ar]=e.current,ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gh(e)};Yt.render=function(t,e,n){if(!_h(e))throw Error(j(200));return yh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!_h(t))throw Error(j(40));return t._reactRootContainer?(Vi(function(){yh(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};Yt.unstable_batchedUpdates=Zm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return yh(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function VI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VI)}catch(t){console.error(t)}}VI(),V0.exports=Yt;var AN=V0.exports,Kv=AN;Sf.createRoot=Kv.createRoot,Sf.hydrateRoot=Kv.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(this,arguments)}var Lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lr||(Lr={}));const Gv="popstate";function kN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return _p("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:FI(i)}return NN(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function UI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PN(){return Math.random().toString(36).substr(2,8)}function Qv(t,e){return{usr:t.state,key:t.key,idx:e}}function _p(t,e,n,r){return n===void 0&&(n=null),Qa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||r||PN()})}function FI(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function NN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Lr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Qa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Lr.Pop;let N=h(),I=N==null?null:N-c;c=N,u&&u({action:a,location:P.location,delta:I})}function m(N,I){a=Lr.Push;let E=_p(P.location,N,I);c=h()+1;let S=Qv(E,c),D=P.createHref(E);try{o.pushState(S,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&u&&u({action:a,location:P.location,delta:1})}function _(N,I){a=Lr.Replace;let E=_p(P.location,N,I);c=h();let S=Qv(E,c),D=P.createHref(E);o.replaceState(S,"",D),s&&u&&u({action:a,location:P.location,delta:0})}function v(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof N=="string"?N:FI(N);return E=E.replace(/ $/,"%20"),Be(I,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,I)}let P={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Gv,d),u=N,()=>{i.removeEventListener(Gv,d),u=null}},createHref(N){return e(i,N)},createURL:v,encodeLocation(N){let I=v(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(N){return o.go(N)}};return P}var Yv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yv||(Yv={}));function xN(t,e,n){return n===void 0&&(n="/"),DN(t,e,n,!1)}function DN(t,e,n,r){let i=typeof e=="string"?mo(e):e,s=zI(i.pathname||"/",n);if(s==null)return null;let o=jI(t);ON(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=WN(s);a=zN(o[u],c,r)}return a}function jI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Pi([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:jN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of BI(s.path))i(s,o,u)}),e}function BI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function ON(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bN=/^:[\w-]+$/,LN=3,MN=2,VN=1,UN=10,FN=-2,Xv=t=>t==="*";function jN(t,e){let n=t.split("/"),r=n.length;return n.some(Xv)&&(r+=FN),e&&(r+=MN),n.filter(i=>!Xv(i)).reduce((i,s)=>i+(bN.test(s)?LN:s===""?VN:UN),r)}function BN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=Jv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Jv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pi([s,d.pathname]),pathnameBase:GN(Pi([s,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(s=Pi([s,d.pathnameBase]))}return o}function Jv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$N(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let P=a[d]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const v=a[d];return _&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function $N(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),UI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return UI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zI(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function HN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mo(t):t;return{pathname:n?n.startsWith("/")?n:qN(n,e):e,search:QN(r),hash:YN(i)}}function qN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function KN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $I(t,e){let n=KN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function WI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mo(t):(i=Qa({},t),Be(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?e[d]:"/"}let u=HN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Pi=t=>t.join("/").replace(/\/\/+/g,"/"),GN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const HI=["post","put","patch","delete"];new Set(HI);const JN=["get",...HI];new Set(JN);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ya.apply(this,arguments)}const ag=F.createContext(null),ZN=F.createContext(null),gl=F.createContext(null),vh=F.createContext(null),Ji=F.createContext({outlet:null,matches:[],isDataRoute:!1}),qI=F.createContext(null);function _l(){return F.useContext(vh)!=null}function lg(){return _l()||Be(!1),F.useContext(vh).location}function KI(t){F.useContext(gl).static||F.useLayoutEffect(t)}function ex(){let{isDataRoute:t}=F.useContext(Ji);return t?fx():tx()}function tx(){_l()||Be(!1);let t=F.useContext(ag),{basename:e,future:n,navigator:r}=F.useContext(gl),{matches:i}=F.useContext(Ji),{pathname:s}=lg(),o=JSON.stringify($I(i,n.v7_relativeSplatPath)),a=F.useRef(!1);return KI(()=>{a.current=!0}),F.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=WI(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Pi([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function nx(t,e){return rx(t,e)}function rx(t,e,n,r){_l()||Be(!1);let{navigator:i}=F.useContext(gl),{matches:s}=F.useContext(Ji),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=lg(),h;if(e){var d;let N=typeof e=="string"?mo(e):e;u==="/"||(d=N.pathname)!=null&&d.startsWith(u)||Be(!1),h=N}else h=c;let m=h.pathname||"/",_=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let v=xN(t,{pathname:_}),P=lx(v&&v.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Pi([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Pi([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?F.createElement(vh.Provider,{value:{location:Ya({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Lr.Pop}},P):P}function ix(){let t=dx(),e=XN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const sx=F.createElement(ix,null);class ox extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Ji.Provider,{value:this.props.routeContext},F.createElement(qI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ax(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(ag);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Ji.Provider,{value:e},r)}function lx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:m,errors:_}=n,v=d.route.loader&&m[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,m)=>{let _,v=!1,P=null,N=null;n&&(_=a&&d.route.id?a[d.route.id]:void 0,P=d.route.errorElement||sx,u&&(c<0&&m===0?(v=!0,N=null):c===m&&(v=!0,N=d.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),E=()=>{let S;return _?S=P:v?S=N:d.route.Component?S=F.createElement(d.route.Component,null):d.route.element?S=d.route.element:S=h,F.createElement(ax,{match:d,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:S})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?F.createElement(ox,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:E(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):E()},null)}var GI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GI||{}),Cc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cc||{});function ux(t){let e=F.useContext(ag);return e||Be(!1),e}function cx(t){let e=F.useContext(ZN);return e||Be(!1),e}function hx(t){let e=F.useContext(Ji);return e||Be(!1),e}function QI(t){let e=hx(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function dx(){var t;let e=F.useContext(qI),n=cx(Cc.UseRouteError),r=QI(Cc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fx(){let{router:t}=ux(GI.UseNavigateStable),e=QI(Cc.UseNavigateStable),n=F.useRef(!1);return KI(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ya({fromRouteId:e},s)))},[t,e])}function px(t){let{to:e,replace:n,state:r,relative:i}=t;_l()||Be(!1);let{future:s,static:o}=F.useContext(gl),{matches:a}=F.useContext(Ji),{pathname:u}=lg(),c=ex(),h=WI(e,$I(a,s.v7_relativeSplatPath),u,i==="path"),d=JSON.stringify(h);return F.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function $u(t){Be(!1)}function mx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Lr.Pop,navigator:s,static:o=!1,future:a}=t;_l()&&Be(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:Ya({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=mo(r));let{pathname:h="/",search:d="",hash:m="",state:_=null,key:v="default"}=r,P=F.useMemo(()=>{let N=zI(h,u);return N==null?null:{location:{pathname:N,search:d,hash:m,state:_,key:v},navigationType:i}},[u,h,d,m,_,v,i]);return P==null?null:F.createElement(gl.Provider,{value:c},F.createElement(vh.Provider,{children:n,value:P}))}function gx(t){let{children:e,location:n}=t;return nx(yp(e),n)}new Promise(()=>{});function yp(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,yp(r.props.children,s));return}r.type!==$u&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _x="6";try{window.__reactRouterVersion=_x}catch{}const yx="startTransition",Zv=If[yx];function vx(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=kN({window:i,v5Compat:!0}));let o=s.current,[a,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=F.useCallback(d=>{c&&Zv?Zv(()=>u(d)):u(d)},[u,c]);return F.useLayoutEffect(()=>o.listen(h),[o,h]),F.createElement(mx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var ew;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ew||(ew={}));var tw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(tw||(tw={}));const Vs="/portfolio/user_icon.svg",YI="/portfolio/log_out_icon.svg";function tt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var wx=typeof Symbol=="function"&&Symbol.observable||"@@observable",nw=wx,Gd=()=>Math.random().toString(36).substring(7).split("").join("."),Ex={INIT:`@@redux/INIT${Gd()}`,REPLACE:`@@redux/REPLACE${Gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Gd()}`},Rc=Ex;function ug(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function XI(t,e,n){if(typeof t!="function")throw new Error(tt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(tt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(tt(1));return n(XI)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((N,I)=>{o.set(I,N)}))}function h(){if(u)throw new Error(tt(3));return i}function d(N){if(typeof N!="function")throw new Error(tt(4));if(u)throw new Error(tt(5));let I=!0;c();const E=a++;return o.set(E,N),function(){if(I){if(u)throw new Error(tt(6));I=!1,c(),o.delete(E),s=null}}}function m(N){if(!ug(N))throw new Error(tt(7));if(typeof N.type>"u")throw new Error(tt(8));if(typeof N.type!="string")throw new Error(tt(17));if(u)throw new Error(tt(9));try{u=!0,i=r(i,N)}finally{u=!1}return(s=o).forEach(E=>{E()}),N}function _(N){if(typeof N!="function")throw new Error(tt(10));r=N,m({type:Rc.REPLACE})}function v(){const N=d;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(tt(11));function E(){const D=I;D.next&&D.next(h())}return E(),{unsubscribe:N(E)}},[nw](){return this}}}return m({type:Rc.INIT}),{dispatch:m,subscribe:d,getState:h,replaceReducer:_,[nw]:v}}function Tx(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Rc.INIT})>"u")throw new Error(tt(12));if(typeof n(void 0,{type:Rc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(tt(13))})}function Ix(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{Tx(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let h=0;h<r.length;h++){const d=r[h],m=n[d],_=o[d],v=m(_,a);if(typeof v>"u")throw a&&a.type,new Error(tt(14));c[d]=v,u=u||v!==_}return u=u||r.length!==Object.keys(o).length,u?c:o}}function Ac(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function Sx(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(tt(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=Ac(...a)(i.dispatch),{...i,dispatch:s}}}function Cx(t){return ug(t)&&"type"in t&&typeof t.type=="string"}var JI=Symbol.for("immer-nothing"),rw=Symbol.for("immer-draftable"),Gt=Symbol.for("immer-state");function pn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Js=Object.getPrototypeOf;function Ui(t){return!!t&&!!t[Gt]}function cr(t){var e;return t?ZI(t)||Array.isArray(t)||!!t[rw]||!!((e=t.constructor)!=null&&e[rw])||Eh(t)||Th(t):!1}var Rx=Object.prototype.constructor.toString();function ZI(t){if(!t||typeof t!="object")return!1;const e=Js(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Rx}function kc(t,e){wh(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function wh(t){const e=t[Gt];return e?e.type_:Array.isArray(t)?1:Eh(t)?2:Th(t)?3:0}function vp(t,e){return wh(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function eS(t,e,n){const r=wh(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function Ax(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Eh(t){return t instanceof Map}function Th(t){return t instanceof Set}function _i(t){return t.copy_||t.base_}function wp(t,e){if(Eh(t))return new Map(t);if(Th(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=ZI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Gt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Js(t),r)}else{const r=Js(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function cg(t,e=!1){return Ih(t)||Ui(t)||!cr(t)||(wh(t)>1&&(t.set=t.add=t.clear=t.delete=kx),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>cg(r,!0))),t}function kx(){pn(2)}function Ih(t){return Object.isFrozen(t)}var Px={};function Fi(t){const e=Px[t];return e||pn(0,t),e}var Xa;function tS(){return Xa}function Nx(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function iw(t,e){e&&(Fi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Ep(t){Tp(t),t.drafts_.forEach(xx),t.drafts_=null}function Tp(t){t===Xa&&(Xa=t.parent_)}function sw(t){return Xa=Nx(Xa,t)}function xx(t){const e=t[Gt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ow(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Gt].modified_&&(Ep(e),pn(4)),cr(t)&&(t=Pc(e,t),e.parent_||Nc(e,t)),e.patches_&&Fi("Patches").generateReplacementPatches_(n[Gt].base_,t,e.patches_,e.inversePatches_)):t=Pc(e,n,[]),Ep(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==JI?t:void 0}function Pc(t,e,n){if(Ih(e))return e;const r=e[Gt];if(!r)return kc(e,(i,s)=>aw(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Nc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),kc(s,(a,u)=>aw(t,r,i,a,u,n,o)),Nc(t,i,!1),n&&t.patches_&&Fi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function aw(t,e,n,r,i,s,o){if(Ui(i)){const a=s&&e&&e.type_!==3&&!vp(e.assigned_,r)?s.concat(r):void 0,u=Pc(t,i,a);if(eS(n,r,u),Ui(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(cr(i)&&!Ih(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Pc(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Nc(t,i)}}function Nc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&cg(e,n)}function Dx(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:tS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=hg;n&&(i=[r],s=Ja);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var hg={get(t,e){if(e===Gt)return t;const n=_i(t);if(!vp(n,e))return Ox(t,n,e);const r=n[e];return t.finalized_||!cr(r)?r:r===Qd(t.base_,e)?(Yd(t),t.copy_[e]=Sp(r,t)):r},has(t,e){return e in _i(t)},ownKeys(t){return Reflect.ownKeys(_i(t))},set(t,e,n){const r=nS(_i(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Qd(_i(t),e),s=i==null?void 0:i[Gt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(Ax(n,i)&&(n!==void 0||vp(t.base_,e)))return!0;Yd(t),Ip(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Qd(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Yd(t),Ip(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=_i(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){pn(11)},getPrototypeOf(t){return Js(t.base_)},setPrototypeOf(){pn(12)}},Ja={};kc(hg,(t,e)=>{Ja[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Ja.deleteProperty=function(t,e){return Ja.set.call(this,t,e,void 0)};Ja.set=function(t,e,n){return hg.set.call(this,t[0],e,n,t[0])};function Qd(t,e){const n=t[Gt];return(n?_i(n):t)[e]}function Ox(t,e,n){var i;const r=nS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function nS(t,e){if(!(e in t))return;let n=Js(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Js(n)}}function Ip(t){t.modified_||(t.modified_=!0,t.parent_&&Ip(t.parent_))}function Yd(t){t.copy_||(t.copy_=wp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var bx=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,h=>n.call(this,h,...c))}}typeof n!="function"&&pn(6),r!==void 0&&typeof r!="function"&&pn(7);let i;if(cr(e)){const s=sw(this),o=Sp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Ep(s):Tp(s)}return iw(s,r),ow(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===JI&&(i=void 0),this.autoFreeze_&&cg(i,!0),r){const s=[],o=[];Fi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else pn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){cr(t)||pn(8),Ui(t)&&(t=Lx(t));const e=sw(this),n=Sp(t,void 0);return n[Gt].isManual_=!0,Tp(e),n}finishDraft(t,e){const n=t&&t[Gt];(!n||!n.isManual_)&&pn(9);const{scope_:r}=n;return iw(r,e),ow(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Fi("Patches").applyPatches_;return Ui(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Sp(t,e){const n=Eh(t)?Fi("MapSet").proxyMap_(t,e):Th(t)?Fi("MapSet").proxySet_(t,e):Dx(t,e);return(e?e.scope_:tS()).drafts_.push(n),n}function Lx(t){return Ui(t)||pn(10,t),rS(t)}function rS(t){if(!cr(t)||Ih(t))return t;const e=t[Gt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=wp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=wp(t,!0);return kc(n,(r,i)=>{eS(n,r,rS(i))}),e&&(e.finalized_=!1),n}var Qt=new bx,iS=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseStrictShallowCopy.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function sS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var Mx=sS(),Vx=sS,Ux=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ac:Ac.apply(null,arguments)};function lw(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(vn(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>Cx(r)&&r.type===t,n}var oS=class oa extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,oa.prototype)}static get[Symbol.species](){return oa}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new oa(...e[0].concat(this)):new oa(...e.concat(this))}};function uw(t){return cr(t)?iS(t,()=>{}):t}function cw(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(vn(10));const r=n.insert(e,t);return t.set(e,r),r}function Fx(t){return typeof t=="boolean"}var jx=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new oS;return n&&(Fx(n)?o.push(Mx):o.push(Vx(n.extraArgument))),o},Bx="RTK_autoBatch",aS=t=>e=>{setTimeout(e,t)},zx=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:aS(10),$x=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?zx:t.type==="callback"?t.queueNotification:aS(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(h=>h()))};return Object.assign({},r,{subscribe(h){const d=()=>i&&h(),m=r.subscribe(d);return a.add(h),()=>{m(),a.delete(h)}},dispatch(h){var d;try{return i=!((d=h==null?void 0:h.meta)!=null&&d[Bx]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(h)}finally{i=!0}}})},Wx=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new oS(t);return r&&i.push($x(typeof r=="object"?r:void 0)),i};function Hx(t){const e=jx(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(ug(n))a=Ix(n);else throw new Error(vn(1));let u;typeof r=="function"?u=r(e):u=e();let c=Ac;i&&(c=Ux({trace:!1,...typeof i=="object"&&i}));const h=Sx(...u),d=Wx(h);let m=typeof o=="function"?o(d):d();const _=c(...m);return XI(a,s,_)}function lS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(vn(28));if(a in e)throw new Error(vn(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function qx(t){return typeof t=="function"}function Kx(t,e){let[n,r,i]=lS(e),s;if(qx(t))s=()=>uw(t());else{const a=uw(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:h})=>h(u)).map(({reducer:h})=>h)];return c.filter(h=>!!h).length===0&&(c=[i]),c.reduce((h,d)=>{if(d)if(Ui(h)){const _=d(h,u);return _===void 0?h:_}else{if(cr(h))return iS(h,m=>d(m,u));{const m=d(h,u);if(m===void 0){if(h===null)return h;throw new Error(vn(9))}return m}}return h},a)}return o.getInitialState=s,o}var Gx=Symbol.for("rtk-slice-createasyncthunk");function Qx(t,e){return`${t}/${e}`}function Yx({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[Gx];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(vn(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(Jx()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(S,D){const M=typeof S=="string"?S:S.type;if(!M)throw new Error(vn(12));if(M in c.sliceCaseReducersByType)throw new Error(vn(13));return c.sliceCaseReducersByType[M]=D,h},addMatcher(S,D){return c.sliceMatchers.push({matcher:S,reducer:D}),h},exposeAction(S,D){return c.actionCreators[S]=D,h},exposeCaseReducer(S,D){return c.sliceCaseReducersByName[S]=D,h}};u.forEach(S=>{const D=a[S],M={reducerName:S,type:Qx(s,S),createNotation:typeof i.reducers=="function"};eD(D)?nD(M,D,h,e):Zx(M,D,h)});function d(){const[S={},D=[],M=void 0]=typeof i.extraReducers=="function"?lS(i.extraReducers):[i.extraReducers],U={...S,...c.sliceCaseReducersByType};return Kx(i.initialState,C=>{for(let y in U)C.addCase(y,U[y]);for(let y of c.sliceMatchers)C.addMatcher(y.matcher,y.reducer);for(let y of D)C.addMatcher(y.matcher,y.reducer);M&&C.addDefaultCase(M)})}const m=S=>S,_=new Map;let v;function P(S,D){return v||(v=d()),v(S,D)}function N(){return v||(v=d()),v.getInitialState()}function I(S,D=!1){function M(C){let y=C[S];return typeof y>"u"&&D&&(y=N()),y}function U(C=m){const y=cw(_,D,{insert:()=>new WeakMap});return cw(y,C,{insert:()=>{const A={};for(const[k,T]of Object.entries(i.selectors??{}))A[k]=Xx(T,C,N,D);return A}})}return{reducerPath:S,getSelectors:U,get selectors(){return U(M)},selectSlice:M}}const E={name:s,reducer:P,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:N,...I(o),injectInto(S,{reducerPath:D,...M}={}){const U=D??o;return S.inject({reducerPath:U,reducer:P},M),{...E,...I(U,!0)}}};return E}}function Xx(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var yl=Yx();function Jx(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function Zx({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!tD(r))throw new Error(vn(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?lw(t,o):lw(t))}function eD(t){return t._reducerDefinitionType==="asyncThunk"}function tD(t){return t._reducerDefinitionType==="reducerWithPrepare"}function nD({type:t,reducerName:e},n,r,i){if(!i)throw new Error(vn(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:h}=n,d=i(t,s,h);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),u&&r.addCase(d.rejected,u),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(e,{fulfilled:o||yu,pending:a||yu,rejected:u||yu,settled:c||yu})}function yu(){}function vn(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const rD={userAuthState:null,user:void 0,users:void 0,loading:null,error:null},uS=yl({name:"user",initialState:rD,reducers:{setUser:(t,e)=>{t.user=e.payload},setUsers:(t,e)=>{t.users=e.payload},setLoading:(t,e)=>{t.loading=e.payload},setUserAuthState:(t,e)=>{if(t.userAuthState=e.payload,e.payload!=null){const n={name:e.payload.displayName,email:e.payload.email,avatarURL:e.payload.photoURL,uid:e.payload.uid};t.user=n}}}}),{setUser:Cp,setUsers:hw,setLoading:K3,setUserAuthState:Xd}=uS.actions,iD=uS.reducer;var cS={exports:{}},hS={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=F;function sD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oD=typeof Object.is=="function"?Object.is:sD,aD=vl.useSyncExternalStore,lD=vl.useRef,uD=vl.useEffect,cD=vl.useMemo,hD=vl.useDebugValue;hS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=lD(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cD(function(){function u(_){if(!c){if(c=!0,h=_,_=r(_),i!==void 0&&o.hasValue){var v=o.value;if(i(v,_))return d=v}return d=_}if(v=d,oD(h,_))return v;var P=r(_);return i!==void 0&&i(v,P)?v:(h=_,d=P)}var c=!1,h,d,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var a=aD(t,s[0],s[1]);return uD(function(){o.hasValue=!0,o.value=a},[a]),hD(a),a};cS.exports=hS;var dD=cS.exports,zt="default"in If?gm:If,dw=Symbol.for("react-redux-context"),fw=typeof globalThis<"u"?globalThis:{};function fD(){if(!zt.createContext)return{};const t=fw[dw]??(fw[dw]=new Map);let e=t.get(zt.createContext);return e||(e=zt.createContext(null),t.set(zt.createContext,e)),e}var Zr=fD(),pD=()=>{throw new Error("uSES not initialized!")};function dg(t=Zr){return function(){return zt.useContext(t)}}var dS=dg(),fS=pD,mD=t=>{fS=t},gD=(t,e)=>t===e;function _D(t=Zr){const e=t===Zr?dS:dg(t),n=(r,i={})=>{const{equalityFn:s=gD,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:h,identityFunctionCheck:d}=e();zt.useRef(!0);const m=zt.useCallback({[r.name](v){return r(v)}}[r.name],[r,h,o.stabilityCheck]),_=fS(u.addNestedSub,a.getState,c||a.getState,m,s);return zt.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var ze=_D();function yD(t){t()}function vD(){let t=null,e=null;return{clear(){t=null,e=null},notify(){yD(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var pw={notify(){},get:()=>[]};function wD(t,e){let n,r=pw,i=0,s=!1;function o(P){h();const N=r.subscribe(P);let I=!1;return()=>{I||(I=!0,N(),d())}}function a(){r.notify()}function u(){v.onStateChange&&v.onStateChange()}function c(){return s}function h(){i++,n||(n=t.subscribe(u),r=vD())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=pw)}function m(){s||(s=!0,h())}function _(){s&&(s=!1,d())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:m,tryUnsubscribe:_,getListeners:()=>r};return v}var ED=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TD=typeof navigator<"u"&&navigator.product==="ReactNative",ID=ED||TD?zt.useLayoutEffect:zt.useEffect;function SD({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=zt.useMemo(()=>{const c=wD(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=zt.useMemo(()=>t.getState(),[t]);ID(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Zr;return zt.createElement(u.Provider,{value:o},n)}var CD=SD;function pS(t=Zr){const e=t===Zr?dS:dg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var RD=pS();function AD(t=Zr){const e=t===Zr?RD:pS(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Jt=AD();mD(dD.useSyncExternalStoreWithSelector);var mw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw go(e)},go=function(t){return new Error("Firebase Database ("+mS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[h],n[d],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new PD;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _S=function(t){const e=gS(t);return fg.encodeByteArray(e,!0)},xc=function(t){return _S(t).replace(/\./g,"")},Dc=function(t){try{return fg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return yS(void 0,t)}function yS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xD(n)||(t[n]=yS(t[n],e[n]));return t}function xD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=()=>DD().__FIREBASE_DEFAULTS__,bD=()=>{if(typeof process>"u"||typeof mw>"u")return;const t=mw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dc(t[1]);return e&&JSON.parse(e)},Sh=()=>{try{return OD()||bD()||LD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vS=t=>{var e,n;return(n=(e=Sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wS=t=>{const e=vS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ES=()=>{var t;return(t=Sh())===null||t===void 0?void 0:t.config},TS=t=>{var e;return(e=Sh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xc(JSON.stringify(n)),xc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function MD(){var t;const e=(t=Sh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UD(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CS(){return mS.NODE_ADMIN===!0}function FD(){return!MD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jD(){try{return typeof indexedDB=="object"}catch{return!1}}function BD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zD,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$D(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function $D(t,e){return t.replace(WD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Za(Dc(s[0])||""),n=Za(Dc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},HD=function(t){const e=RS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qD=function(t){const e=RS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function bc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gw(s)&&gw(o)){if(!bc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function la(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):d<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+u+h+r[d]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function GD(t,e){const n=new QD(t,e);return n.subscribe.bind(n)}class QD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}function XD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ch=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tO(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eO(t){return t===yi?void 0:t}function tO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const rO={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},iO=te.INFO,sO={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},oO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=iO,this._logHandler=oO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const aO=(t,e)=>e.some(n=>t instanceof n);let _w,yw;function lO(){return _w||(_w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uO(){return yw||(yw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AS=new WeakMap,Ap=new WeakMap,kS=new WeakMap,Zd=new WeakMap,gg=new WeakMap;function cO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AS.set(n,t)}).catch(()=>{}),gg.set(e,t),e}function hO(t){if(Ap.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ap.set(t,e)}let kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ap.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dO(t){kp=t(kp)}function fO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return kS.set(r,e.sort?e.sort():[e]),Hr(r)}:uO().includes(t)?function(...e){return t.apply(ef(this),e),Hr(AS.get(this))}:function(...e){return Hr(t.apply(ef(this),e))}}function pO(t){return typeof t=="function"?fO(t):(t instanceof IDBTransaction&&hO(t),aO(t,lO())?new Proxy(t,kp):t)}function Hr(t){if(t instanceof IDBRequest)return cO(t);if(Zd.has(t))return Zd.get(t);const e=pO(t);return e!==t&&(Zd.set(t,e),gg.set(e,t)),e}const ef=t=>gg.get(t);function mO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gO=["get","getKey","getAll","getAllKeys","count"],_O=["put","add","delete","clear"],tf=new Map;function vw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gO.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return tf.set(e,s),s}dO(t=>({...t,get:(e,n,r)=>vw(e,n)||t.get(e,n,r),has:(e,n)=>!!vw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pp="@firebase/app",ww="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Rh("@firebase/app"),wO="@firebase/app-compat",EO="@firebase/analytics-compat",TO="@firebase/analytics",IO="@firebase/app-check-compat",SO="@firebase/app-check",CO="@firebase/auth",RO="@firebase/auth-compat",AO="@firebase/database",kO="@firebase/database-compat",PO="@firebase/functions",NO="@firebase/functions-compat",xO="@firebase/installations",DO="@firebase/installations-compat",OO="@firebase/messaging",bO="@firebase/messaging-compat",LO="@firebase/performance",MO="@firebase/performance-compat",VO="@firebase/remote-config",UO="@firebase/remote-config-compat",FO="@firebase/storage",jO="@firebase/storage-compat",BO="@firebase/firestore",zO="@firebase/vertexai-preview",$O="@firebase/firestore-compat",WO="firebase",HO="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="[DEFAULT]",qO={[Pp]:"fire-core",[wO]:"fire-core-compat",[TO]:"fire-analytics",[EO]:"fire-analytics-compat",[SO]:"fire-app-check",[IO]:"fire-app-check-compat",[CO]:"fire-auth",[RO]:"fire-auth-compat",[AO]:"fire-rtdb",[kO]:"fire-rtdb-compat",[PO]:"fire-fn",[NO]:"fire-fn-compat",[xO]:"fire-iid",[DO]:"fire-iid-compat",[OO]:"fire-fcm",[bO]:"fire-fcm-compat",[LO]:"fire-perf",[MO]:"fire-perf-compat",[VO]:"fire-rc",[UO]:"fire-rc-compat",[FO]:"fire-gcs",[jO]:"fire-gcs-compat",[BO]:"fire-fst",[$O]:"fire-fst-compat",[zO]:"fire-vertex","fire-js":"fire-js",[WO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Map,KO=new Map,xp=new Map;function Ew(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(xp.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,t);for(const n of Lc.values())Ew(n,t);for(const n of KO.values())Ew(n,t);return!0}function Ah(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new wl("app","Firebase",GO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=HO;function PS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Np,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=ES()),!n)throw qr.create("no-options");const s=Lc.get(i);if(s){if(bc(n,s.options)&&bc(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new nO(i);for(const u of xp.values())o.addComponent(u);const a=new QO(n,r,o);return Lc.set(i,a),a}function _g(t=Np){const e=Lc.get(t);if(!e&&t===Np&&ES())return PS();if(!e)throw qr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=qO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}ei(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="firebase-heartbeat-database",XO=1,el="firebase-heartbeat-store";let nf=null;function NS(){return nf||(nf=mO(YO,XO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(el)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),nf}async function JO(t){try{const n=(await NS()).transaction(el),r=await n.objectStore(el).get(xS(t));return await n.done,r}catch(e){if(e instanceof jn)dr.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Tw(t,e){try{const r=(await NS()).transaction(el,"readwrite");await r.objectStore(el).put(e,xS(t)),await r.done}catch(n){if(n instanceof jn)dr.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function xS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=1024,eb=30*24*60*60*1e3;class tb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Iw();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=eb}),this._storage.overwrite(this._heartbeatsCache))}catch(i){dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iw(),{heartbeatsToSend:r,unsentEntries:i}=nb(this._heartbeatsCache.heartbeats),s=xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return dr.warn(n),""}}}function Iw(){return new Date().toISOString().substring(0,10)}function nb(t,e=ZO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jD()?BD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sw(t){return xc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){ei(new hr("platform-logger",e=>new yO(e),"PRIVATE")),ei(new hr("heartbeat",e=>new tb(e),"PRIVATE")),sn(Pp,ww,t),sn(Pp,ww,"esm2017"),sn("fire-js","")}ib("");function yg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function DS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=DS,OS=new wl("auth","Firebase",DS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Rh("@firebase/auth");function ob(t,...e){Mc.logLevel<=te.WARN&&Mc.warn(`Auth (${li}): ${t}`,...e)}function Wu(t,...e){Mc.logLevel<=te.ERROR&&Mc.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw vg(t,...e)}function Ln(t,...e){return vg(t,...e)}function bS(t,e,n){const r=Object.assign(Object.assign({},sb()),{[e]:n});return new wl("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return bS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OS.create(t,...e)}function G(t,e,...n){if(!t)throw vg(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function fr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ab(){return Cw()==="http:"||Cw()==="https:"}function Cw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ab()||VD()||"connection"in navigator)?navigator.onLine:!0}function ub(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=mg()||SS()}get(){return lb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new El(3e4,6e4);function ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yr(t,e,n,r,i={}){return MS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),LS.fetch()(VS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function MS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cb),e);try{const i=new fb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bS(t,h,c);In(t,h)}}catch(i){if(i instanceof jn)throw i;In(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await yr(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wg(t.config,i):`${t.config.apiScheme}://${i}`}function db(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),hb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ln(t,e,r);return i.customData._tokenResponse=n,i}function Rw(t){return t!==void 0&&t.enterprise!==void 0}class pb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return db(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mb(t,e){return yr(t,"GET","/v2/recaptchaConfig",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return yr(t,"POST","/v1/accounts:delete",e)}async function US(t,e){return yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _b(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=Eg(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ta(rf(i.auth_time)),issuedAtTime:Ta(rf(i.iat)),expirationTime:Ta(rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rf(t){return Number(t)*1e3}function Eg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dc(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Aw(t){const e=Eg(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&yb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,US(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FS(s.providerUserInfo):[],a=Eb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Op(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function wb(t){const e=_e(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FS(t){return t.map(e=>{var{providerId:n}=e,r=yg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){const n=await MS(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ib(t,e){return yr(t,"POST","/v2/accounts:revokeToken",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Aw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Aw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Us;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _b(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await eo(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:M,providerData:U,stsTokenManager:C}=n;G(S&&C,e,"internal-error");const y=Us.fromJSON(this.name,C);G(typeof S=="string",e,"internal-error"),Ir(d,e.name),Ir(m,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof M=="boolean",e,"internal-error"),Ir(_,e.name),Ir(v,e.name),Ir(P,e.name),Ir(N,e.name),Ir(I,e.name),Ir(E,e.name);const A=new er({uid:S,auth:e,email:m,emailVerified:D,displayName:d,isAnonymous:M,photoURL:v,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:I,lastLoginAt:E});return U&&Array.isArray(U)&&(A.providerData=U.map(k=>Object.assign({},k))),N&&(A._redirectEventId=N),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Us;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?FS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Us;a.updateFromIdToken(r);const u=new er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Op(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Map;function tr(t){fr(t instanceof Function,"Expected a class definition");let e=kw.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jS.type="NONE";const Pw=jS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(tr(Pw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tr(Pw);const o=Hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=er._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qS(e))return"Blackberry";if(KS(e))return"Webos";if(zS(e))return"Safari";if((e.includes("chrome/")||$S(e))&&!e.includes("edge/"))return"Chrome";if(HS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function BS(t=Tt()){return/firefox\//i.test(t)}function zS(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $S(t=Tt()){return/crios\//i.test(t)}function WS(t=Tt()){return/iemobile/i.test(t)}function HS(t=Tt()){return/android/i.test(t)}function qS(t=Tt()){return/blackberry/i.test(t)}function KS(t=Tt()){return/webos/i.test(t)}function Tg(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sb(t=Tt()){var e;return Tg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cb(){return UD()&&document.documentMode===10}function GS(t=Tt()){return Tg(t)||HS(t)||KS(t)||qS(t)||/windows phone/i.test(t)||WS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e=[]){let n;switch(t){case"Browser":n=Nw(Tt());break;case"Worker":n=`${Nw(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return yr(t,"GET","/v2/passwordPolicy",ui(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=6;class Pb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xw(this),this.idTokenSubscription=new xw(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await US(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ub()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(ir(this));const n=e?_e(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Pb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ib(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ob(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zi(t){return _e(t)}class xw{constructor(e){this.auth=e,this.observer=null,this.addObserver=GD(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xb(t){kh=t}function YS(t){return kh.loadJS(t)}function Db(){return kh.recaptchaEnterpriseScript}function Ob(){return kh.gapiScript}function bb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lb="recaptcha-enterprise",Mb="NO_RECAPTCHA";class Vb{constructor(e){this.type=Lb,this.auth=Zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new pb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Rw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Mb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Rw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Db();u.length!==0&&(u+=a),YS(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dw(t,e,n,r=!1){const i=new Vb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){const n=Ah(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bc(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jb(t,e,n){const r=Zi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=XS(e),{host:o,port:a}=Bb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zb()}function XS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bb(t){const e=XS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ow(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ow(o)}}}function Ow(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function $b(t,e){return yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}async function qb(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,n,"signInWithPassword",Wb);case"emailLink":return Hb(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,r,"signUpPassword",$b);case"emailLink":return qb(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="http://localhost";class ji extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:Kb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qb(t){const e=aa(la(t)).link,n=e?aa(la(e)).deep_link_id:null,r=aa(la(t)).deep_link_id;return(r?aa(la(r)).link:null)||r||n||e||t}class Sg{constructor(e){var n,r,i,s,o,a;const u=aa(la(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,d=Gb((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qb(e);try{return new Sg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,n){return tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sg.parseLink(n);return G(r,"argument-error"),tl._fromEmailAndCode(e,r.code,r.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends JS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Il{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Il{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Il{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return Tl(t,"POST","/v1/accounts:signUp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=bw(r);return new Bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bw(r);return new Bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uc(e,n,r,i)}}function ZS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,s,e,r):s})}async function Xb(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e,n=!1){const{auth:r}=t;if(Nn(r.app))return Promise.reject(ir(r));const i="reauthenticate";try{const s=await eo(t,ZS(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Eg(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e,n=!1){if(Nn(t.app))return Promise.reject(ir(t));const r="signIn",i=await ZS(t,r,e),s=await Bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zb(t,e){return eC(Zi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t){const e=Zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eL(t,e,n){if(Nn(t.app))return Promise.reject(ir(t));const r=Zi(t),o=await bp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tC(t),u}),a=await Bi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tL(t,e,n){return Nn(t.app)?Promise.reject(ir(t)):Zb(_e(t),yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t,e){return yr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await eo(r,nL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iL(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function sL(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function oL(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function aL(t){return _e(t).signOut()}const Fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fc,"1"),this.storage.removeItem(Fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=1e3,uL=10;class rC extends nC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Cb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rC.type="LOCAL";const cL=rC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends nC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iC.type="SESSION";const sC=iC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await hL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Cg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function fL(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function pL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gL(){return oC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC="firebaseLocalStorageDb",_L=1,jc="firebaseLocalStorage",lC="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nh(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function yL(){const t=indexedDB.deleteDatabase(aC);return new Sl(t).toPromise()}function Lp(){const t=indexedDB.open(aC,_L);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:lC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await yL(),e(await Lp()))})})}async function Lw(t,e,n){const r=Nh(t,!0).put({[lC]:e,value:n});return new Sl(r).toPromise()}async function vL(t,e){const n=Nh(t,!1).get(e),r=await new Sl(n).toPromise();return r===void 0?null:r.value}function Mw(t,e){const n=Nh(t,!0).delete(e);return new Sl(n).toPromise()}const wL=800,EL=3;class uC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(gL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pL(),!this.activeServiceWorker)return;this.sender=new dL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lp();return await Lw(e,Fc,"1"),await Mw(e,Fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nh(i,!1).getAll();return new Sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uC.type="LOCAL";const TL=uC;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t,e){return e?tr(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SL(t){return eC(t.auth,new Rg(t),t.bypassAuthState)}function CL(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Jb(n,new Rg(t),t.bypassAuthState)}async function RL(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Xb(n,new Rg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SL;case"linkViaPopup":case"linkViaRedirect":return RL;case"reauthViaPopup":case"reauthViaRedirect":return CL;default:In(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=new El(2e3,1e4);class As extends cC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AL.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL="pendingRedirect",qu=new Map;class PL extends cC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const r=await NL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NL(t,e){const n=OL(e),r=DL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xL(t,e){qu.set(t._key(),e)}function DL(t){return tr(t._redirectPersistence)}function OL(t){return Hu(kL,t.config.apiKey,t.name)}async function bL(t,e,n=!1){if(Nn(t.app))return Promise.reject(ir(t));const r=Zi(t),i=IL(r,e),o=await new PL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=10*60*1e3;class ML{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vw(e))}saveEventToCache(e){this.cachedEventUids.add(Vw(e)),this.lastProcessedEventTime=Date.now()}}function Vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e={}){return yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jL=/^https?/;async function BL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UL(t);for(const n of e)try{if(zL(n))return}catch{}In(t,"unauthorized-domain")}function zL(t){const e=Dp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jL.test(n))return!1;if(FL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new El(3e4,6e4);function Uw(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WL(t){return new Promise((e,n)=>{var r,i,s;function o(){Uw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uw(),n(Ln(t,"network-request-failed"))},timeout:$L.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=bb("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},YS(`${Ob()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function HL(t){return Ku=Ku||WL(t),Ku}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new El(5e3,15e3),KL="__/auth/iframe",GL="emulator/auth/iframe",QL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XL(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wg(e,GL):`https://${t.config.authDomain}/${KL}`,r={apiKey:e.apiKey,appName:t.name,v:li},i=YL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function JL(t){const e=await HL(t),n=Mn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:XL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},qL.get());function u(){Mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eM=500,tM=600,nM="_blank",rM="http://localhost";class Fw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iM(t,e,n,r=eM,i=tM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},ZL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Tt().toLowerCase();n&&(a=$S(c)?nM:n),BS(c)&&(e=e||rM,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[_,v])=>`${m}${_}=${v},`,"");if(Sb(c)&&a!=="_self")return sM(e||"",a),new Fw(null);const d=window.open(e||"",a,h);G(d,t,"popup-blocked");try{d.focus()}catch{}return new Fw(d)}function sM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM="__/auth/handler",aM="emulator/auth/handler",lM=encodeURIComponent("fac");async function jw(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:i};if(e instanceof JS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Il){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${lM}=${encodeURIComponent(u)}`:"";return`${uM(t)}?${_o(a).slice(1)}${c}`}function uM({config:t}){return t.emulator?wg(t,aM):`https://${t.authDomain}/${oM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class cM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sC,this._completeRedirectFn=bL,this._overrideRedirectResult=xL}async _openPopup(e,n,r,i){var s;fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jw(e,n,r,Dp(),i);return iM(e,o,Cg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jw(e,n,r,Dp(),i);return fL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JL(e),r=new ML(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GS()||zS()||Tg()}}const hM=cM;var Bw="@firebase/auth",zw="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pM(t){ei(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QS(t)},c=new Nb(r,i,s,u);return Fb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new hr("auth-internal",e=>{const n=Zi(e.getProvider("auth").getImmediate());return(r=>new dM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Bw,zw,fM(t)),sn(Bw,zw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=5*60,gM=TS("authIdTokenMaxAge")||mM;let $w=null;const _M=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gM)return;const i=n==null?void 0:n.token;$w!==i&&($w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yM(t=_g()){const e=Ah(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:hM,persistence:[TL,cL,sC]}),r=TS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_M(s.toString());sL(n,o,()=>o(n.currentUser)),iL(n,a=>o(a))}}const i=vS("auth");return i&&jb(n,`http://${i}`),n}function vM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pM("Browser");var Ww=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,dC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function A(){}A.prototype=y.prototype,C.D=y.prototype,C.prototype=new A,C.prototype.constructor=C,C.C=function(k,T,x){for(var R=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)R[ye-2]=arguments[ye];return y.prototype[T].apply(k,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,y,A){A||(A=0);var k=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)k[T]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(T=0;16>T;++T)k[T]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=C.g[0],A=C.g[1],T=C.g[2];var x=C.g[3],R=y+(x^A&(T^x))+k[0]+3614090360&4294967295;y=A+(R<<7&4294967295|R>>>25),R=x+(T^y&(A^T))+k[1]+3905402710&4294967295,x=y+(R<<12&4294967295|R>>>20),R=T+(A^x&(y^A))+k[2]+606105819&4294967295,T=x+(R<<17&4294967295|R>>>15),R=A+(y^T&(x^y))+k[3]+3250441966&4294967295,A=T+(R<<22&4294967295|R>>>10),R=y+(x^A&(T^x))+k[4]+4118548399&4294967295,y=A+(R<<7&4294967295|R>>>25),R=x+(T^y&(A^T))+k[5]+1200080426&4294967295,x=y+(R<<12&4294967295|R>>>20),R=T+(A^x&(y^A))+k[6]+2821735955&4294967295,T=x+(R<<17&4294967295|R>>>15),R=A+(y^T&(x^y))+k[7]+4249261313&4294967295,A=T+(R<<22&4294967295|R>>>10),R=y+(x^A&(T^x))+k[8]+1770035416&4294967295,y=A+(R<<7&4294967295|R>>>25),R=x+(T^y&(A^T))+k[9]+2336552879&4294967295,x=y+(R<<12&4294967295|R>>>20),R=T+(A^x&(y^A))+k[10]+4294925233&4294967295,T=x+(R<<17&4294967295|R>>>15),R=A+(y^T&(x^y))+k[11]+2304563134&4294967295,A=T+(R<<22&4294967295|R>>>10),R=y+(x^A&(T^x))+k[12]+1804603682&4294967295,y=A+(R<<7&4294967295|R>>>25),R=x+(T^y&(A^T))+k[13]+4254626195&4294967295,x=y+(R<<12&4294967295|R>>>20),R=T+(A^x&(y^A))+k[14]+2792965006&4294967295,T=x+(R<<17&4294967295|R>>>15),R=A+(y^T&(x^y))+k[15]+1236535329&4294967295,A=T+(R<<22&4294967295|R>>>10),R=y+(T^x&(A^T))+k[1]+4129170786&4294967295,y=A+(R<<5&4294967295|R>>>27),R=x+(A^T&(y^A))+k[6]+3225465664&4294967295,x=y+(R<<9&4294967295|R>>>23),R=T+(y^A&(x^y))+k[11]+643717713&4294967295,T=x+(R<<14&4294967295|R>>>18),R=A+(x^y&(T^x))+k[0]+3921069994&4294967295,A=T+(R<<20&4294967295|R>>>12),R=y+(T^x&(A^T))+k[5]+3593408605&4294967295,y=A+(R<<5&4294967295|R>>>27),R=x+(A^T&(y^A))+k[10]+38016083&4294967295,x=y+(R<<9&4294967295|R>>>23),R=T+(y^A&(x^y))+k[15]+3634488961&4294967295,T=x+(R<<14&4294967295|R>>>18),R=A+(x^y&(T^x))+k[4]+3889429448&4294967295,A=T+(R<<20&4294967295|R>>>12),R=y+(T^x&(A^T))+k[9]+568446438&4294967295,y=A+(R<<5&4294967295|R>>>27),R=x+(A^T&(y^A))+k[14]+3275163606&4294967295,x=y+(R<<9&4294967295|R>>>23),R=T+(y^A&(x^y))+k[3]+4107603335&4294967295,T=x+(R<<14&4294967295|R>>>18),R=A+(x^y&(T^x))+k[8]+1163531501&4294967295,A=T+(R<<20&4294967295|R>>>12),R=y+(T^x&(A^T))+k[13]+2850285829&4294967295,y=A+(R<<5&4294967295|R>>>27),R=x+(A^T&(y^A))+k[2]+4243563512&4294967295,x=y+(R<<9&4294967295|R>>>23),R=T+(y^A&(x^y))+k[7]+1735328473&4294967295,T=x+(R<<14&4294967295|R>>>18),R=A+(x^y&(T^x))+k[12]+2368359562&4294967295,A=T+(R<<20&4294967295|R>>>12),R=y+(A^T^x)+k[5]+4294588738&4294967295,y=A+(R<<4&4294967295|R>>>28),R=x+(y^A^T)+k[8]+2272392833&4294967295,x=y+(R<<11&4294967295|R>>>21),R=T+(x^y^A)+k[11]+1839030562&4294967295,T=x+(R<<16&4294967295|R>>>16),R=A+(T^x^y)+k[14]+4259657740&4294967295,A=T+(R<<23&4294967295|R>>>9),R=y+(A^T^x)+k[1]+2763975236&4294967295,y=A+(R<<4&4294967295|R>>>28),R=x+(y^A^T)+k[4]+1272893353&4294967295,x=y+(R<<11&4294967295|R>>>21),R=T+(x^y^A)+k[7]+4139469664&4294967295,T=x+(R<<16&4294967295|R>>>16),R=A+(T^x^y)+k[10]+3200236656&4294967295,A=T+(R<<23&4294967295|R>>>9),R=y+(A^T^x)+k[13]+681279174&4294967295,y=A+(R<<4&4294967295|R>>>28),R=x+(y^A^T)+k[0]+3936430074&4294967295,x=y+(R<<11&4294967295|R>>>21),R=T+(x^y^A)+k[3]+3572445317&4294967295,T=x+(R<<16&4294967295|R>>>16),R=A+(T^x^y)+k[6]+76029189&4294967295,A=T+(R<<23&4294967295|R>>>9),R=y+(A^T^x)+k[9]+3654602809&4294967295,y=A+(R<<4&4294967295|R>>>28),R=x+(y^A^T)+k[12]+3873151461&4294967295,x=y+(R<<11&4294967295|R>>>21),R=T+(x^y^A)+k[15]+530742520&4294967295,T=x+(R<<16&4294967295|R>>>16),R=A+(T^x^y)+k[2]+3299628645&4294967295,A=T+(R<<23&4294967295|R>>>9),R=y+(T^(A|~x))+k[0]+4096336452&4294967295,y=A+(R<<6&4294967295|R>>>26),R=x+(A^(y|~T))+k[7]+1126891415&4294967295,x=y+(R<<10&4294967295|R>>>22),R=T+(y^(x|~A))+k[14]+2878612391&4294967295,T=x+(R<<15&4294967295|R>>>17),R=A+(x^(T|~y))+k[5]+4237533241&4294967295,A=T+(R<<21&4294967295|R>>>11),R=y+(T^(A|~x))+k[12]+1700485571&4294967295,y=A+(R<<6&4294967295|R>>>26),R=x+(A^(y|~T))+k[3]+2399980690&4294967295,x=y+(R<<10&4294967295|R>>>22),R=T+(y^(x|~A))+k[10]+4293915773&4294967295,T=x+(R<<15&4294967295|R>>>17),R=A+(x^(T|~y))+k[1]+2240044497&4294967295,A=T+(R<<21&4294967295|R>>>11),R=y+(T^(A|~x))+k[8]+1873313359&4294967295,y=A+(R<<6&4294967295|R>>>26),R=x+(A^(y|~T))+k[15]+4264355552&4294967295,x=y+(R<<10&4294967295|R>>>22),R=T+(y^(x|~A))+k[6]+2734768916&4294967295,T=x+(R<<15&4294967295|R>>>17),R=A+(x^(T|~y))+k[13]+1309151649&4294967295,A=T+(R<<21&4294967295|R>>>11),R=y+(T^(A|~x))+k[4]+4149444226&4294967295,y=A+(R<<6&4294967295|R>>>26),R=x+(A^(y|~T))+k[11]+3174756917&4294967295,x=y+(R<<10&4294967295|R>>>22),R=T+(y^(x|~A))+k[2]+718787259&4294967295,T=x+(R<<15&4294967295|R>>>17),R=A+(x^(T|~y))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(T+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+T&4294967295,C.g[3]=C.g[3]+x&4294967295}r.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var A=y-this.blockSize,k=this.B,T=this.h,x=0;x<y;){if(T==0)for(;x<=A;)i(this,C,x),x+=this.blockSize;if(typeof C=="string"){for(;x<y;)if(k[T++]=C.charCodeAt(x++),T==this.blockSize){i(this,k),T=0;break}}else for(;x<y;)if(k[T++]=C[x++],T==this.blockSize){i(this,k),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var A=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=A&255,A/=256;for(this.u(C),C=Array(16),y=A=0;4>y;++y)for(var k=0;32>k;k+=8)C[A++]=this.g[y]>>>k&255;return C};function s(C,y){var A=a;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=y(C)}function o(C,y){this.h=y;for(var A=[],k=!0,T=C.length-1;0<=T;T--){var x=C[T]|0;k&&x==y||(A[T]=x,k=!1)}this.g=A}var a={};function u(C){return-128<=C&&128>C?s(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function c(C){if(isNaN(C)||!isFinite(C))return d;if(0>C)return N(c(-C));for(var y=[],A=1,k=0;C>=A;k++)y[k]=C/A|0,A*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return N(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(y,8)),k=d,T=0;T<C.length;T+=8){var x=Math.min(8,C.length-T),R=parseInt(C.substring(T,T+x),y);8>x?(x=c(Math.pow(y,x)),k=k.j(x).add(c(R))):(k=k.j(A),k=k.add(c(R)))}return k}var d=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var C=0,y=1,A=0;A<this.g.length;A++){var k=this.i(A);C+=(0<=k?k:4294967296+k)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(v(this))return"0";if(P(this))return"-"+N(this).toString(C);for(var y=c(Math.pow(C,6)),A=this,k="";;){var T=D(A,y).g;A=I(A,T.j(y));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(C);if(A=T,v(A))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function v(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function P(C){return C.h==-1}t.l=function(C){return C=I(this,C),P(C)?-1:v(C)?0:1};function N(C){for(var y=C.g.length,A=[],k=0;k<y;k++)A[k]=~C.g[k];return new o(A,~C.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),A=[],k=0,T=0;T<=y;T++){var x=k+(this.i(T)&65535)+(C.i(T)&65535),R=(x>>>16)+(this.i(T)>>>16)+(C.i(T)>>>16);k=R>>>16,x&=65535,R&=65535,A[T]=R<<16|x}return new o(A,A[A.length-1]&-2147483648?-1:0)};function I(C,y){return C.add(N(y))}t.j=function(C){if(v(this)||v(C))return d;if(P(this))return P(C)?N(this).j(N(C)):N(N(this).j(C));if(P(C))return N(this.j(N(C)));if(0>this.l(_)&&0>C.l(_))return c(this.m()*C.m());for(var y=this.g.length+C.g.length,A=[],k=0;k<2*y;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var T=0;T<C.g.length;T++){var x=this.i(k)>>>16,R=this.i(k)&65535,ye=C.i(T)>>>16,Nt=C.i(T)&65535;A[2*k+2*T]+=R*Nt,E(A,2*k+2*T),A[2*k+2*T+1]+=x*Nt,E(A,2*k+2*T+1),A[2*k+2*T+1]+=R*ye,E(A,2*k+2*T+1),A[2*k+2*T+2]+=x*ye,E(A,2*k+2*T+2)}for(k=0;k<y;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=y;k<2*y;k++)A[k]=0;return new o(A,0)};function E(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function S(C,y){this.g=C,this.h=y}function D(C,y){if(v(y))throw Error("division by zero");if(v(C))return new S(d,d);if(P(C))return y=D(N(C),y),new S(N(y.g),N(y.h));if(P(y))return y=D(C,N(y)),new S(N(y.g),y.h);if(30<C.g.length){if(P(C)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var A=m,k=y;0>=k.l(C);)A=M(A),k=M(k);var T=U(A,1),x=U(k,1);for(k=U(k,2),A=U(A,2);!v(k);){var R=x.add(k);0>=R.l(C)&&(T=T.add(A),x=R),k=U(k,1),A=U(A,1)}return y=I(C,T.j(y)),new S(T,y)}for(T=d;0<=C.l(y);){for(A=Math.max(1,Math.floor(C.m()/y.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=c(A),R=x.j(y);P(R)||0<R.l(C);)A-=k,x=c(A),R=x.j(y);v(x)&&(x=m),T=T.add(x),C=I(C,R)}return new S(T,C)}t.A=function(C){return D(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),A=[],k=0;k<y;k++)A[k]=this.i(k)&C.i(k);return new o(A,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),A=[],k=0;k<y;k++)A[k]=this.i(k)|C.i(k);return new o(A,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),A=[],k=0;k<y;k++)A[k]=this.i(k)^C.i(k);return new o(A,this.h^C.h)};function M(C){for(var y=C.g.length+1,A=[],k=0;k<y;k++)A[k]=C.i(k)<<1|C.i(k-1)>>>31;return new o(A,C.h)}function U(C,y){var A=y>>5;y%=32;for(var k=C.g.length-A,T=[],x=0;x<k;x++)T[x]=0<y?C.i(x+A)>>>y|C.i(x+A+1)<<32-y:C.i(x+A);return new o(T,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ni=o}).apply(typeof Ww<"u"?Ww:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fC,pC,ua,mC,Gu,Mp,gC,_C,yC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var p=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var O=l[g];if(!(O in p))break e;p=p[O]}l=l[l.length-1],g=p[l],f=f(g),f!=g&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var p=0,g=!1,O={next:function(){if(!g&&p<l.length){var b=p++;return{value:f(b,l[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function _(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function v(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(g,O,b){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return f.prototype[O].apply(g,B)}}function P(l){const f=l.length;if(0<f){const p=Array(f);for(let g=0;g<f;g++)p[g]=l[g];return p}return[]}function N(l,f){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const O=l.length||0,b=g.length||0;l.length=O+b;for(let B=0;B<b;B++)l[O+B]=g[B]}else l.push(g)}}class I{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function E(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(l,f,p){for(const g in l)f.call(p,l[g],g,l)}function C(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function y(l){const f={};for(const p in l)f[p]=l[p];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let p,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(p in g)l[p]=g[p];for(let b=0;b<A.length;b++)p=A[b],Object.prototype.hasOwnProperty.call(g,p)&&(l[p]=g[p])}}function T(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function x(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Y;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ye{constructor(){this.h=this.g=null}add(f,p){const g=Nt.get();g.set(f,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Nt=new I(()=>new Rn,l=>l.reset());class Rn{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Bn,$=!1,Y=new ye,Z=()=>{const l=a.Promise.resolve(void 0);Bn=()=>{l.then(Ae)}};var Ae=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){x(p)}var f=Nt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l}();function $n(l,f){if(Le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(M){e:{try{D(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&$n.aa.h.call(this)}}v($n,Le);var Wn={2:"touch",3:"pen",4:"mouse"};$n.prototype.h=function(){$n.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),I1=0;function S1(l,f,p,g,O){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!g,this.ha=O,this.key=++I1,this.da=this.fa=!1}function Ul(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Fl(l){this.src=l,this.g={},this.h=0}Fl.prototype.add=function(l,f,p,g,O){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var B=Zh(l,f,g,O);return-1<B?(f=l[B],p||(f.fa=!1)):(f=new S1(f,this.src,b,!!g,O),f.fa=p,l.push(f)),f};function Jh(l,f){var p=f.type;if(p in l.g){var g=l.g[p],O=Array.prototype.indexOf.call(g,f,void 0),b;(b=0<=O)&&Array.prototype.splice.call(g,O,1),b&&(Ul(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Zh(l,f,p,g){for(var O=0;O<l.length;++O){var b=l[O];if(!b.da&&b.listener==f&&b.capture==!!p&&b.ha==g)return O}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),td={};function j_(l,f,p,g,O){if(Array.isArray(f)){for(var b=0;b<f.length;b++)j_(l,f[b],p,g,O);return null}return p=$_(p),l&&l[Hn]?l.K(f,p,c(g)?!!g.capture:!!g,O):C1(l,f,p,!1,g,O)}function C1(l,f,p,g,O,b){if(!f)throw Error("Invalid event type");var B=c(O)?!!O.capture:!!O,pe=rd(l);if(pe||(l[ed]=pe=new Fl(l)),p=pe.add(f,p,g,B,b),p.proxy)return p;if(g=R1(),p.proxy=g,g.src=l,g.listener=p,l.addEventListener)zn||(O=B),O===void 0&&(O=!1),l.addEventListener(f.toString(),g,O);else if(l.attachEvent)l.attachEvent(z_(f.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function R1(){function l(p){return f.call(l.src,l.listener,p)}const f=A1;return l}function B_(l,f,p,g,O){if(Array.isArray(f))for(var b=0;b<f.length;b++)B_(l,f[b],p,g,O);else g=c(g)?!!g.capture:!!g,p=$_(p),l&&l[Hn]?(l=l.i,f=String(f).toString(),f in l.g&&(b=l.g[f],p=Zh(b,p,g,O),-1<p&&(Ul(b[p]),Array.prototype.splice.call(b,p,1),b.length==0&&(delete l.g[f],l.h--)))):l&&(l=rd(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Zh(f,p,g,O)),(p=-1<l?f[l]:null)&&nd(p))}function nd(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Hn])Jh(f.i,l);else{var p=l.type,g=l.proxy;f.removeEventListener?f.removeEventListener(p,g,l.capture):f.detachEvent?f.detachEvent(z_(p),g):f.addListener&&f.removeListener&&f.removeListener(g),(p=rd(f))?(Jh(p,l),p.h==0&&(p.src=null,f[ed]=null)):Ul(l)}}}function z_(l){return l in td?td[l]:td[l]="on"+l}function A1(l,f){if(l.da)l=!0;else{f=new $n(f,this);var p=l.listener,g=l.ha||l.src;l.fa&&nd(l),l=p.call(g,f)}return l}function rd(l){return l=l[ed],l instanceof Fl?l:null}var id="__closure_events_fn_"+(1e9*Math.random()>>>0);function $_(l){return typeof l=="function"?l:(l[id]||(l[id]=function(f){return l.handleEvent(f)}),l[id])}function ut(){fe.call(this),this.i=new Fl(this),this.M=this,this.F=null}v(ut,fe),ut.prototype[Hn]=!0,ut.prototype.removeEventListener=function(l,f,p,g){B_(this,l,f,p,g)};function It(l,f){var p,g=l.F;if(g)for(p=[];g;g=g.F)p.push(g);if(l=l.M,g=f.type||f,typeof f=="string")f=new Le(f,l);else if(f instanceof Le)f.target=f.target||l;else{var O=f;f=new Le(g,l),k(f,O)}if(O=!0,p)for(var b=p.length-1;0<=b;b--){var B=f.g=p[b];O=jl(B,g,!0,f)&&O}if(B=f.g=l,O=jl(B,g,!0,f)&&O,O=jl(B,g,!1,f)&&O,p)for(b=0;b<p.length;b++)B=f.g=p[b],O=jl(B,g,!1,f)&&O}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],g=0;g<p.length;g++)Ul(p[g]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,p,g){return this.i.add(String(l),f,!1,p,g)},ut.prototype.L=function(l,f,p,g){return this.i.add(String(l),f,!0,p,g)};function jl(l,f,p,g){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,b=0;b<f.length;++b){var B=f[b];if(B&&!B.da&&B.capture==p){var pe=B.listener,Ze=B.ha||B.src;B.fa&&Jh(l.i,B),O=pe.call(Ze,g)!==!1&&O}}return O&&!g.defaultPrevented}function W_(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function H_(l){l.g=W_(()=>{l.g=null,l.i&&(l.i=!1,H_(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class k1 extends fe{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:H_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){fe.call(this),this.h=l,this.g={}}v(ko,fe);var q_=[];function K_(l){U(l.g,function(f,p){this.g.hasOwnProperty(p)&&nd(f)},l),l.g={}}ko.prototype.N=function(){ko.aa.N.call(this),K_(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sd=a.JSON.stringify,P1=a.JSON.parse,N1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function od(){}od.prototype.h=null;function G_(l){return l.h||(l.h=l.i())}function Q_(){}var Po={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ad(){Le.call(this,"d")}v(ad,Le);function ld(){Le.call(this,"c")}v(ld,Le);var hi={},Y_=null;function Bl(){return Y_=Y_||new ut}hi.La="serverreachability";function X_(l){Le.call(this,hi.La,l)}v(X_,Le);function No(l){const f=Bl();It(f,new X_(f))}hi.STAT_EVENT="statevent";function J_(l,f){Le.call(this,hi.STAT_EVENT,l),this.stat=f}v(J_,Le);function St(l){const f=Bl();It(f,new J_(f,l))}hi.Ma="timingevent";function Z_(l,f){Le.call(this,hi.Ma,l),this.size=f}v(Z_,Le);function xo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Do(){this.g=!0}Do.prototype.xa=function(){this.g=!1};function x1(l,f,p,g,O,b){l.info(function(){if(l.g)if(b)for(var B="",pe=b.split("&"),Ze=0;Ze<pe.length;Ze++){var le=pe[Ze].split("=");if(1<le.length){var ct=le[0];le=le[1];var ht=ct.split("_");B=2<=ht.length&&ht[1]=="type"?B+(ct+"="+le+"&"):B+(ct+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+f+`
`+p+`
`+B})}function D1(l,f,p,g,O,b,B){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+f+`
`+p+`
`+b+" "+B})}function ss(l,f,p,g){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+b1(l,p)+(g?" "+g:"")})}function O1(l,f){l.info(function(){return"TIMEOUT: "+f})}Do.prototype.info=function(){};function b1(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var g=p[l];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var b=O[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return sd(p)}catch{return f}}var zl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ey={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ud;function $l(){}v($l,od),$l.prototype.g=function(){return new XMLHttpRequest},$l.prototype.i=function(){return{}},ud=new $l;function vr(l,f,p,g){this.j=l,this.i=f,this.l=p,this.R=g||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ty}function ty(){this.i=null,this.g="",this.h=!1}var ny={},cd={};function hd(l,f,p){l.L=1,l.v=Kl(qn(f)),l.m=p,l.P=!0,ry(l,null)}function ry(l,f){l.F=Date.now(),Wl(l),l.A=qn(l.v);var p=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),_y(p.i,"t",g),l.C=0,p=l.j.J,l.h=new ty,l.g=Ly(l.j,p?f:null,!l.m),0<l.O&&(l.M=new k1(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,g=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(q_[0]=O.toString()),O=q_);for(var b=0;b<O.length;b++){var B=j_(p,O[b],g||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),No(),x1(l.i,l.u,l.A,l.l,l.R,l.m)}vr.prototype.ca=function(l){l=l.target;const f=this.M;f&&Kn(l)==3?f.j():this.Y(l)},vr.prototype.Y=function(l){try{if(l==this.g)e:{const ht=Kn(this.g);var f=this.g.Ba();const ls=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Sy(this.g)))){this.J||ht!=4||f==7||(f==8||0>=ls?No(3):No(2)),dd(this);var p=this.g.Z();this.X=p;t:if(iy(this)){var g=Sy(this.g);l="";var O=g.length,b=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){di(this),Oo(this);var B="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(g[f],{stream:!(b&&f==O-1)});g.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,D1(this.i,this.u,this.A,this.l,this.R,ht,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ze=this.g;if((pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(pe)){var le=pe;break t}}le=null}if(p=le)ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fd(this,p);else{this.o=!1,this.s=3,St(12),di(this),Oo(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<B.length;)if(un=L1(this,B),un==cd){ht==4&&(this.s=4,St(14),p=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(un==ny){this.s=4,St(15),ss(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else ss(this.i,this.l,un,null),fd(this,un);if(iy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||B.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)ss(this.i,this.l,B,"[Invalid Chunked Response]"),di(this),Oo(this);else if(0<B.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),vd(ct),ct.M=!0,St(11))}}else ss(this.i,this.l,B,null),fd(this,B);ht==4&&di(this),this.o&&!this.J&&(ht==4?xy(this.j,this):(this.o=!1,Wl(this)))}else J1(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),di(this),Oo(this)}}}catch{}finally{}};function iy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function L1(l,f){var p=l.C,g=f.indexOf(`
`,p);return g==-1?cd:(p=Number(f.substring(p,g)),isNaN(p)?ny:(g+=1,g+p>f.length?cd:(f=f.slice(g,g+p),l.C=g+p,f)))}vr.prototype.cancel=function(){this.J=!0,di(this)};function Wl(l){l.S=Date.now()+l.I,sy(l,l.I)}function sy(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=xo(m(l.ba,l),f)}function dd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}vr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(O1(this.i,this.A),this.L!=2&&(No(),St(17)),di(this),this.s=2,Oo(this)):sy(this,this.S-l)};function Oo(l){l.j.G==0||l.J||xy(l.j,l)}function di(l){dd(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,K_(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function fd(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||pd(p.h,l))){if(!l.K&&pd(p.h,l)&&p.G==3){try{var g=p.Da.g.parse(f)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Jl(p),Yl(p);else break e;yd(p),St(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=xo(m(p.Za,p),6e3));if(1>=ly(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else pi(p,11)}else if((l.K||p.g==l)&&Jl(p),!E(f))for(O=p.Da.g.parse(f),f=0;f<O.length;f++){let le=O[f];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const ct=le[3];ct!=null&&(p.la=ct,p.j.info("VER="+p.la));const ht=le[4];ht!=null&&(p.Aa=ht,p.j.info("SVER="+p.Aa));const ls=le[5];ls!=null&&typeof ls=="number"&&0<ls&&(g=1.5*ls,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const un=l.g;if(un){const eu=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eu){var b=g.h;b.g||eu.indexOf("spdy")==-1&&eu.indexOf("quic")==-1&&eu.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(md(b,b.h),b.h=null))}if(g.D){const wd=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;wd&&(g.ya=wd,ve(g.I,g.D,wd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var B=l;if(g.qa=by(g,g.J?g.ia:null,g.W),B.K){uy(g.h,B);var pe=B,Ze=g.L;Ze&&(pe.I=Ze),pe.B&&(dd(pe),Wl(pe)),g.g=B}else Py(g);0<p.i.length&&Xl(p)}else le[0]!="stop"&&le[0]!="close"||pi(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?pi(p,7):_d(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}No(4)}catch{}}var M1=class{constructor(l,f){this.g=l,this.map=f}};function oy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ay(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ly(l){return l.h?1:l.g?l.g.size:0}function pd(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function md(l,f){l.g?l.g.add(f):l.h=f}function uy(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}oy.prototype.cancel=function(){if(this.i=cy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function cy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return P(l.i)}function V1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],p=l.length,g=0;g<p;g++)f.push(l[g]);return f}f=[],p=0;for(g in l)f[p++]=l[g];return f}function U1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const g in l)f[p++]=g;return f}}}function hy(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=U1(l),g=V1(l),O=g.length,b=0;b<O;b++)f.call(void 0,g[b],p&&p[b],l)}var dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F1(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var g=l[p].indexOf("="),O=null;if(0<=g){var b=l[p].substring(0,g);O=l[p].substring(g+1)}else b=l[p];f(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function fi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fi){this.h=l.h,Hl(this,l.j),this.o=l.o,this.g=l.g,ql(this,l.s),this.l=l.l;var f=l.i,p=new Mo;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),fy(this,p),this.m=l.m}else l&&(f=String(l).match(dy))?(this.h=!1,Hl(this,f[1]||"",!0),this.o=bo(f[2]||""),this.g=bo(f[3]||"",!0),ql(this,f[4]),this.l=bo(f[5]||"",!0),fy(this,f[6]||"",!0),this.m=bo(f[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}fi.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lo(f,py,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lo(f,py,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Lo(p,p.charAt(0)=="/"?z1:B1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Lo(p,W1)),l.join("")};function qn(l){return new fi(l)}function Hl(l,f,p){l.j=p?bo(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function ql(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function fy(l,f,p){f instanceof Mo?(l.i=f,H1(l.i,l.h)):(p||(f=Lo(f,$1)),l.i=new Mo(f,l.h))}function ve(l,f,p){l.i.set(f,p)}function Kl(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function bo(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lo(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,j1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function j1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var py=/[#\/\?@]/g,B1=/[#\?:]/g,z1=/[#\?]/g,$1=/[#\?@]/g,W1=/#/g;function Mo(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wr(l){l.g||(l.g=new Map,l.h=0,l.i&&F1(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Mo.prototype,t.add=function(l,f){wr(this),this.i=null,l=os(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function my(l,f){wr(l),f=os(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function gy(l,f){return wr(l),f=os(l,f),l.g.has(f)}t.forEach=function(l,f){wr(this),this.g.forEach(function(p,g){p.forEach(function(O){l.call(f,O,g,this)},this)},this)},t.na=function(){wr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let g=0;g<f.length;g++){const O=l[g];for(let b=0;b<O.length;b++)p.push(f[g])}return p},t.V=function(l){wr(this);let f=[];if(typeof l=="string")gy(this,l)&&(f=f.concat(this.g.get(os(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},t.set=function(l,f){return wr(this),this.i=null,l=os(this,l),gy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function _y(l,f,p){my(l,f),0<p.length&&(l.i=null,l.g.set(os(l,f),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var g=f[p];const b=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var O=b;B[g]!==""&&(O+="="+encodeURIComponent(String(B[g]))),l.push(O)}}return this.i=l.join("&")};function os(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function H1(l,f){f&&!l.j&&(wr(l),l.i=null,l.g.forEach(function(p,g){var O=g.toLowerCase();g!=O&&(my(this,g),_y(this,O,p))},l)),l.j=f}function q1(l,f){const p=new Do;if(a.Image){const g=new Image;g.onload=_(Er,p,"TestLoadImage: loaded",!0,f,g),g.onerror=_(Er,p,"TestLoadImage: error",!1,f,g),g.onabort=_(Er,p,"TestLoadImage: abort",!1,f,g),g.ontimeout=_(Er,p,"TestLoadImage: timeout",!1,f,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else f(!1)}function K1(l,f){const p=new Do,g=new AbortController,O=setTimeout(()=>{g.abort(),Er(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:g.signal}).then(b=>{clearTimeout(O),b.ok?Er(p,"TestPingServer: ok",!0,f):Er(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Er(p,"TestPingServer: error",!1,f)})}function Er(l,f,p,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(p)}catch{}}function G1(){this.g=new N1}function Q1(l,f,p){const g=p||"";try{hy(l,function(O,b){let B=O;c(O)&&(B=sd(O)),f.push(g+b+"="+encodeURIComponent(B))})}catch(O){throw f.push(g+"type="+encodeURIComponent("_badmap")),O}}function Vo(l){this.l=l.Ub||null,this.j=l.eb||!1}v(Vo,od),Vo.prototype.g=function(){return new Gl(this.l,this.j)},Vo.prototype.i=function(l){return function(){return l}}({});function Gl(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Gl,ut),t=Gl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Fo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function yy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Uo(this):Fo(this),this.readyState==3&&yy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Uo(this))},t.Qa=function(l){this.g&&(this.response=l,Uo(this))},t.ga=function(){this.g&&Uo(this)};function Uo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fo(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function Fo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vy(l){let f="";return U(l,function(p,g){f+=g,f+=":",f+=p,f+=`\r
`}),f}function gd(l,f,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=vy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ve(l,f,p))}function xe(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(xe,ut);var Y1=/^https?$/i,X1=["POST","PUT"];t=xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ud.g(),this.v=this.o?G_(this.o):G_(ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(b){wy(this,b);return}if(l=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)p.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())p.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(b=>b.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(X1,f,void 0))||g||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of p)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Iy(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){wy(this,b)}};function wy(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ey(l),Ql(l)}function Ey(l){l.A||(l.A=!0,It(l,"complete"),It(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,It(this,"complete"),It(this,"abort"),Ql(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ql(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ty(this):this.bb())},t.bb=function(){Ty(this)};function Ty(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)W_(l.Ea,0,l);else if(It(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var g;if(g=B===0){var O=String(l.D).match(dy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),g=!Y1.test(O?O.toLowerCase():"")}p=g}if(p)It(l,"complete"),It(l,"success");else{l.m=6;try{var b=2<Kn(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",Ey(l)}}finally{Ql(l)}}}}function Ql(l,f){if(l.g){Iy(l);const p=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||It(l,"ready");try{p.onreadystatechange=g}catch{}}}function Iy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),P1(f)}};function Sy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function J1(l){const f={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(E(l[g]))continue;var p=T(l[g]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const b=f[O]||[];f[O]=b,b.push(p)}C(f,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jo(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function Cy(l){this.Aa=0,this.i=[],this.j=new Do,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jo("baseRetryDelayMs",5e3,l),this.cb=jo("retryDelaySeedMs",1e4,l),this.Wa=jo("forwardChannelMaxRetries",2,l),this.wa=jo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new oy(l&&l.concurrentRequestLimit),this.Da=new G1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cy.prototype,t.la=8,t.G=1,t.connect=function(l,f,p,g){St(0),this.W=l,this.H=f||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=by(this,null,this.W),Xl(this)};function _d(l){if(Ry(l),l.G==3){var f=l.U++,p=qn(l.I);if(ve(p,"SID",l.K),ve(p,"RID",f),ve(p,"TYPE","terminate"),Bo(l,p),f=new vr(l,l.j,f),f.L=2,f.v=Kl(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=Ly(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Wl(f)}Oy(l)}function Yl(l){l.g&&(vd(l),l.g.cancel(),l.g=null)}function Ry(l){Yl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Jl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Xl(l){if(!ay(l.h)&&!l.s){l.s=!0;var f=l.Ga;Bn||Z(),$||(Bn(),$=!0),Y.add(f,l),l.B=0}}function Z1(l,f){return ly(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=xo(m(l.Ga,l,f),Dy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new vr(this,this.j,l);let b=this.o;if(this.S&&(b?(b=y(b),k(b,this.S)):b=this.S),this.m!==null||this.O||(O.H=b,b=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(f+=g,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=ky(this,O,f),p=qn(this.I),ve(p,"RID",l),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Bo(this,p),b&&(this.O?f="headers="+encodeURIComponent(String(vy(b)))+"&"+f:this.m&&gd(p,this.m,b)),md(this.h,O),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",f),ve(p,"SID","null"),O.T=!0,hd(O,p,null)):hd(O,p,f),this.G=2}}else this.G==3&&(l?Ay(this,l):this.i.length==0||ay(this.h)||Ay(this))};function Ay(l,f){var p;f?p=f.l:p=l.U++;const g=qn(l.I);ve(g,"SID",l.K),ve(g,"RID",p),ve(g,"AID",l.T),Bo(l,g),l.m&&l.o&&gd(g,l.m,l.o),p=new vr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=ky(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),md(l.h,p),hd(p,g,f)}function Bo(l,f){l.H&&U(l.H,function(p,g){ve(f,g,p)}),l.l&&hy({},function(p,g){ve(f,g,p)})}function ky(l,f,p){p=Math.min(l.i.length,p);var g=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let b=-1;for(;;){const B=["count="+p];b==-1?0<p?(b=O[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let pe=!0;for(let Ze=0;Ze<p;Ze++){let le=O[Ze].g;const ct=O[Ze].map;if(le-=b,0>le)b=Math.max(0,O[Ze].g-100),pe=!1;else try{Q1(ct,B,"req"+le+"_")}catch{g&&g(ct)}}if(pe){g=B.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,g}function Py(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Bn||Z(),$||(Bn(),$=!0),Y.add(f,l),l.v=0}}function yd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=xo(m(l.Fa,l),Dy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ny(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=xo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Yl(this),Ny(this))};function vd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ny(l){l.g=new vr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=qn(l.qa);ve(f,"RID","rpc"),ve(f,"SID",l.K),ve(f,"AID",l.T),ve(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(f,"TO",l.ja),ve(f,"TYPE","xmlhttp"),Bo(l,f),l.m&&l.o&&gd(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Kl(qn(f)),p.m=null,p.P=!0,ry(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Yl(this),yd(this),St(19))};function Jl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function xy(l,f){var p=null;if(l.g==f){Jl(l),vd(l),l.g=null;var g=2}else if(pd(l.h,f))p=f.D,uy(l.h,f),g=1;else return;if(l.G!=0){if(f.o)if(g==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;g=Bl(),It(g,new Z_(g,p)),Xl(l)}else Py(l);else if(O=f.s,O==3||O==0&&0<f.X||!(g==1&&Z1(l,f)||g==2&&yd(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),O){case 1:pi(l,5);break;case 4:pi(l,10);break;case 3:pi(l,6);break;default:pi(l,2)}}}function Dy(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function pi(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),g=l.Xa;const O=!g;g=new fi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hl(g,"https"),Kl(g),O?q1(g.toString(),p):K1(g.toString(),p)}else St(2);l.G=0,l.l&&l.l.sa(f),Oy(l),Ry(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Oy(l){if(l.G=0,l.ka=[],l.l){const f=cy(l.h);(f.length!=0||l.i.length!=0)&&(N(l.ka,f),N(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function by(l,f,p){var g=p instanceof fi?qn(p):new fi(p);if(g.g!="")f&&(g.g=f+"."+g.g),ql(g,g.s);else{var O=a.location;g=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var b=new fi(null);g&&Hl(b,g),f&&(b.g=f),O&&ql(b,O),p&&(b.l=p),g=b}return p=l.D,f=l.ya,p&&f&&ve(g,p,f),ve(g,"VER",l.la),Bo(l,g),g}function Ly(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new xe(new Vo({eb:p})):new xe(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function My(){}t=My.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zl(){}Zl.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){ut.call(this),this.g=new Cy(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!E(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!E(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new as(this)}v(Ft,ut),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){_d(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=sd(l),l=p);f.i.push(new M1(f.Ya++,l)),f.G==3&&Xl(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,_d(this.g),delete this.g,Ft.aa.N.call(this)};function Vy(l){ad.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}v(Vy,ad);function Uy(){ld.call(this),this.status=1}v(Uy,ld);function as(l){this.g=l}v(as,My),as.prototype.ua=function(){It(this.g,"a")},as.prototype.ta=function(l){It(this.g,new Vy(l))},as.prototype.sa=function(l){It(this.g,new Uy)},as.prototype.ra=function(){It(this.g,"b")},Zl.prototype.createWebChannel=Zl.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,yC=function(){return new Zl},_C=function(){return Bl()},gC=hi,Mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zl.NO_ERROR=0,zl.TIMEOUT=8,zl.HTTP_ERROR=6,Gu=zl,ey.COMPLETE="complete",mC=ey,Q_.EventType=Po,Po.OPEN="a",Po.CLOSE="b",Po.ERROR="c",Po.MESSAGE="d",ut.prototype.listen=ut.prototype.K,ua=Q_,pC=Vo,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,fC=xe}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});const Hw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Rh("@firebase/firestore");function Yo(){return zi.logLevel}function q(t,...e){if(zi.logLevel<=te.DEBUG){const n=e.map(Ag);zi.debug(`Firestore (${vo}): ${t}`,...n)}}function pr(t,...e){if(zi.logLevel<=te.ERROR){const n=e.map(Ag);zi.error(`Firestore (${vo}): ${t}`,...n)}}function to(t,...e){if(zi.logLevel<=te.WARN){const n=e.map(Ag);zi.warn(`Firestore (${vo}): ${t}`,...n)}}function Ag(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function me(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class EM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TM{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new vC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new mt(e)}}class IM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new CM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new qe(0,0))}static max(){return new X(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends nl{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const kM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends nl{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return kM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}function PM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new ti(i,K.empty(),e)}function NM(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(X.min(),K.empty(),-1)}static max(){return new ti(X.max(),K.empty(),-1)}}function xM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==DM)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kg.oe=-1;function xh(t){return t==null}function Bc(t){return t===0&&1/t==-1/0}function LM(t){return typeof t=="number"&&Number.isInteger(t)&&!Bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class Vp{constructor(e,n){this.comparator=e,this.root=n||Kr.EMPTY}insert(e,n){return new Vp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kr.BLACK,null,null))}remove(e){return new Vp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}},Eu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Kr=class Gn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Gn.RED,this.left=i??Gn.EMPTY,this.right=s??Gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Gn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Gn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}};Kr.EMPTY=null,Kr.RED=!0,Kr.BLACK=!1;Kr.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Kr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kw(this.data.getIterator())}getIteratorFrom(e){return new Kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new $t([])}unionWith(e){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TC("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const MM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(me(!!t),typeof t=="string"){let e=0;const n=MM.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ng(t){const e=t.mapValue.fields.__previous_value__;return Pg(e)?Ng(e):e}function rl(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class il{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pg(t)?4:FM(t)?9007199254740991:UM(t)?10:11:Q()}function Fn(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rl(t).isEqual(rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $i(i.bytesValue).isEqual($i(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?Bc(o)===Bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(qw(o)!==qw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Fn(o[u],a[u])))return!1;return!0}(t,e);default:return Q()}}function sl(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function ro(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Gw(t.timestampValue,e.timestampValue);case 4:return Gw(rl(t),rl(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=$i(s),u=$i(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ue(a[c],u[c]);if(h!==0)return h}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Me(s.latitude),Me(o.latitude));return a!==0?a:ue(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const d=s.fields||{},m=o.fields||{},_=(a=d.value)===null||a===void 0?void 0:a.arrayValue,v=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:Qw(_,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tu.mapValue&&o===Tu.mapValue)return 0;if(s===Tu.mapValue)return 1;if(o===Tu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let d=0;d<u.length&&d<h.length;++d){const m=ue(u[d],h[d]);if(m!==0)return m;const _=ro(a[u[d]],c[h[d]]);if(_!==0)return _}return ue(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Gw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=ni(t),r=ni(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Qw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ro(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function io(t){return Up(t)}function Up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $i(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Up(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Up(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Yw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fp(t){return!!t&&"integerValue"in t}function xg(t){return!!t&&"arrayValue"in t}function Xw(t){return!!t&&"nullValue"in t}function Jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qu(t){return!!t&&"mapValue"in t}function UM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ia(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ia(this.value))}}function IC(t){const e=[];return es(t.fields,(n,r)=>{const i=new it([n]);if(Qu(r)){const s=IC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,X.min(),X.min(),X.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,X.min(),X.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,X.min(),X.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.position=e,this.inclusive=n}}function Zw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ro(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function jM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{}class je extends SC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zM(e,n,r):n==="array-contains"?new HM(e,r):n==="in"?new qM(e,r):n==="not-in"?new KM(e,r):n==="array-contains-any"?new GM(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $M(e,r):new WM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ro(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends SC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Sn(e,n)}matches(e){return CC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CC(t){return t.op==="and"}function RC(t){return BM(t)&&CC(t)}function BM(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function jp(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+io(t.value);if(RC(t))return t.filters.map(e=>jp(e)).join(",");{const e=t.filters.map(n=>jp(n)).join(",");return`${t.op}(${e})`}}function AC(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Fn(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AC(o,i.filters[a]),!0):!1}(t,e):void Q()}function kC(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(kC).join(" ,")+"}"}(t):"Filter"}class zM extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class $M extends je{constructor(e,n){super(e,"in",n),this.keys=PC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WM extends je{constructor(e,n){super(e,"not-in",n),this.keys=PC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class HM extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xg(n)&&sl(n.arrayValue,this.value)}}class qM extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sl(this.value.arrayValue,n)}}class KM extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sl(this.value.arrayValue,n)}}class GM extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function tE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QM(t,e,n,r,i,s,o)}function Dg(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>io(r)).join(",")),e.ue=n}return e.ue}function Og(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eE(t.startAt,e.startAt)&&eE(t.endAt,e.endAt)}function Bp(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YM(t,e,n,r,i,s,o,a){return new wo(t,e,n,r,i,s,o,a)}function bg(t){return new wo(t)}function nE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NC(t){return t.collectionGroup!==null}function Sa(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ol(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new ol(it.keyField(),r))}return e.ce}function Vn(t){const e=J(t);return e.le||(e.le=XM(e,Sa(t))),e.le}function XM(t,e){if(t.limitType==="F")return tE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ol(i.field,s)});const n=t.endAt?new zc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zc(t.startAt.position,t.startAt.inclusive):null;return tE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zp(t,e){const n=t.filters.concat([e]);return new wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $p(t,e,n){return new wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dh(t,e){return Og(Vn(t),Vn(e))&&t.limitType===e.limitType}function xC(t){return`${Dg(Vn(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kC(i)).join(", ")}]`),xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>io(i)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function Oh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Sa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Zw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Sa(r),i)||r.endAt&&!function(o,a,u){const c=Zw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Sa(r),i))}(t,e)}function JM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DC(t){return(e,n)=>{let r=!1;for(const i of Sa(t)){const s=ZM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZM(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ro(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new $e(K.comparator);function mr(){return e2}const OC=new $e(K.comparator);function ca(...t){let e=OC;for(const n of t)e=e.insert(n.key,n);return e}function bC(t){let e=OC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ii(){return Ca()}function LC(){return Ca()}function Ca(){return new Eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const t2=new $e(K.comparator),n2=new ot(K.comparator);function ne(...t){let e=n2;for(const n of t)e=e.add(n);return e}const r2=new ot(ue);function i2(){return r2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bc(e)?"-0":e}}function MC(t){return{integerValue:""+t}}function s2(t,e){return LM(e)?MC(e):Lg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._=void 0}}function o2(t,e,n){return t instanceof $c?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pg(s)&&(s=Ng(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof al?UC(t,e):t instanceof ll?FC(t,e):function(i,s){const o=VC(i,s),a=rE(o)+rE(i.Pe);return Fp(o)&&Fp(i.Pe)?MC(a):Lg(i.serializer,a)}(t,e)}function a2(t,e,n){return t instanceof al?UC(t,e):t instanceof ll?FC(t,e):n}function VC(t,e){return t instanceof Wc?function(r){return Fp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $c extends bh{}class al extends bh{constructor(e){super(),this.elements=e}}function UC(t,e){const n=jC(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ll extends bh{constructor(e){super(),this.elements=e}}function FC(t,e){let n=jC(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class Wc extends bh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rE(t){return Me(t.integerValue||t.doubleValue)}function jC(t){return xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function l2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof al&&i instanceof al||r instanceof ll&&i instanceof ll?no(r.elements,i.elements,Fn):r instanceof Wc&&i instanceof Wc?Fn(r.Pe,i.Pe):r instanceof $c&&i instanceof $c}(t.transform,e.transform)}class u2{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lh{}function BC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mg(t.key,wn.none()):new Al(t.key,t.data,wn.none());{const n=t.data,r=Dt.empty();let i=new ot(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ci(t.key,r,new $t(i.toArray()),wn.none())}}function c2(t,e,n){t instanceof Al?function(i,s,o){const a=i.value.clone(),u=sE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ci?function(i,s,o){if(!Yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=sE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(zC(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ra(t,e,n,r){return t instanceof Al?function(s,o,a,u){if(!Yu(s.precondition,o))return a;const c=s.value.clone(),h=oE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ci?function(s,o,a,u){if(!Yu(s.precondition,o))return a;const c=oE(s.fieldTransforms,u,o),h=o.data;return h.setAll(zC(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function h2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VC(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function iE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&no(r,i,(s,o)=>l2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Al extends Lh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ci extends Lh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sE(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,a2(o,a,n[i]))}return r}function oE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,o2(s,o,e))}return r}class Mg extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d2 extends Lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=BC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>iE(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>iE(n,r))}}class Vg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return t2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ie;function g2(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function $C(t){if(t===void 0)return pr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ue.OK:return L.OK;case Ue.CANCELLED:return L.CANCELLED;case Ue.UNKNOWN:return L.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return L.INTERNAL;case Ue.UNAVAILABLE:return L.UNAVAILABLE;case Ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ue.NOT_FOUND:return L.NOT_FOUND;case Ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ue.ABORTED:return L.ABORTED;case Ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ue.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ie=Ue||(Ue={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Ni([4294967295,4294967295],0);function aE(t){const e=_2().encode(t),n=new dC;return n.update(e),new Uint8Array(n.digest())}function lE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ni([n,r],0),new Ni([i,s],0)]}class Ug{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ni.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ni.fromNumber(r)));return i.compare(y2)===1&&(i=new Ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=aE(e),[r,i]=lE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ug(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=aE(e),[r,i]=lE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,kl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mh(X.min(),i,new $e(ue),mr(),ne())}}class kl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new kl(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class WC{constructor(e,n){this.targetId=e,this.me=n}}class HC{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uE{constructor(){this.fe=0,this.ge=hE(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new kl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=hE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class v2{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=cE(),this.Qe=new $e(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Bp(s))if(r===0){const o=new K(s.path);this.Ue(n,o,_t.newNoDocument(o,X.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=$i(r).toUint8Array()}catch(u){if(u instanceof TC)return to("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ug(o,i,s)}catch(u){return to(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Bp(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Mh(e,n,this.Qe,this.ke,r);return this.ke=mr(),this.qe=cE(),this.Qe=new $e(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new uE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new uE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function cE(){return new $e(K.comparator)}function hE(){return new $e(K.comparator)}const w2={asc:"ASCENDING",desc:"DESCENDING"},E2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T2={and:"AND",or:"OR"};class I2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wp(t,e){return t.useProto3Json||xh(e)?e:{value:e}}function Hc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S2(t,e){return Hc(t,e.toTimestamp())}function Un(t){return me(!!t),X.fromTimestamp(function(n){const r=ni(n);return new qe(r.seconds,r.nanos)}(t))}function Fg(t,e){return Hp(t,e).canonicalString()}function Hp(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KC(t){const e=Ie.fromString(t);return me(JC(e)),e}function qp(t,e){return Fg(t.databaseId,e.path)}function of(t,e){const n=KC(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(QC(n))}function GC(t,e){return Fg(t.databaseId,e)}function C2(t){const e=KC(t);return e.length===4?Ie.emptyPath():QC(e)}function Kp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QC(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dE(t,e,n){return{name:qp(t,e),fields:n.value.mapValue.fields}}function R2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:$C(c.code);return new H(h,c.message||"")}(o);n=new HC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=of(t,r.document.name),s=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):X.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Xu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=of(t,r.document),s=r.readTime?Un(r.readTime):X.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=of(t,r.document),s=r.removedTargetIds||[];n=new Xu([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new m2(i,s),a=r.targetId;n=new WC(a,o)}}return n}function A2(t,e){let n;if(e instanceof Al)n={update:dE(t,e.key,e.value)};else if(e instanceof Mg)n={delete:qp(t,e.key)};else if(e instanceof ci)n={update:dE(t,e.key,e.data),updateMask:M2(e.fieldMask)};else{if(!(e instanceof d2))return Q();n={verify:qp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof al)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:S2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function k2(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Un(i.updateTime):Un(s);return o.isEqual(X.min())&&(o=Un(s)),new u2(o,i.transformResults||[])}(n,e))):[]}function P2(t,e){return{documents:[GC(t,e.path)]}}function N2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GC(t,i);const s=function(c){if(c.length!==0)return XC(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ds(m.field),direction:O2(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function x2(t){let e=C2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const m=YC(d);return m instanceof Sn&&RC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(v){return new ol(fs(v.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,xh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(d){const m=!!d.before,_=d.values||[];return new zc(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const m=!d.before,_=d.values||[];return new zc(_,m)}(n.endAt)),YM(e,i,o,s,a,"F",u,c)}function D2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fs(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fs(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fs(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fs(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return je.create(fs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>YC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function O2(t){return w2[t]}function b2(t){return E2[t]}function L2(t){return T2[t]}function ds(t){return{fieldPath:t.canonicalString()}}function fs(t){return it.fromServerFormat(t.fieldPath)}function XC(t){return t instanceof je?function(n){if(n.op==="=="){if(Jw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(Xw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(Xw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:b2(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>XC(i));return r.length===1?r[0]:{compositeFilter:{op:L2(n.op),filters:r}}}(t):Q()}function M2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.ct=e}}function U2(t){const e=x2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$p(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.un=new j2}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ti.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new so(0)}static kn(){return new so(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.changes=new Eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ra(r.mutation,i,$t.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ca();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mr();const o=Ca(),a=function(){return Ca()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ci)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ra(h.mutation,c,h.mutation.getFieldMask(),qe.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new z2(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ca();let i=new $e((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||$t.empty();h=a.applyToLocalView(c,h),r.set(u,h);const d=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,d=LC();h.forEach(m=>{if(!s.has(m)){const _=BC(n.get(m),r.get(m));_!==null&&d.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Ii());let a=-1,u=s;return o.next(c=>V.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(h=>({batchId:a,changes:bC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ca();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,u=>{const c=function(d,m){return new wo(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,_t.newInvalidDocument(h)))});let a=ca();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ra(h.mutation,c,$t.empty(),qe.now()),Oh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Un(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:U2(i.bundledQuery),readTime:Un(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.overlays=new $e(K.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ii();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Ii(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ii(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ii(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p2(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.Tr=new ot(Ge.Er),this.dr=new ot(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ie([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ie([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(Ge.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new f2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ue);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new K(s),0);let a=new ot(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.Mr=e,this.docs=function(){return new $e(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=mr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xM(NM(h),r)<=0||(i.has(h.key)||Oh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Q2(this)}getSize(e){return V.resolve(this.size)}}class Q2 extends B2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.persistence=e,this.Nr=new Eo(n=>Dg(n),Og),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jg,this.targetCount=0,this.kr=so.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new so(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kg(0),this.Kr=!1,this.Kr=!0,this.$r=new q2,this.referenceDelegate=e(this),this.Ur=new Y2(this),this.indexManager=new F2,this.remoteDocumentCache=function(i){return new G2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new V2(n),this.Gr=new W2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new K2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new J2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class J2 extends OM{constructor(e){super(),this.currentSequenceNumber=e}}class Bg{constructor(e){this.persistence=e,this.Jr=new jg,this.Yr=null}static Zr(e){return new Bg(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return FD()?8:bM(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Z2;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Yo()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Yo()<=te.DEBUG&&q("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yo()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):V.resolve())}Yi(e,n){if(nE(n))return V.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$p(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,$p(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return nE(n)||i.isEqual(X.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Yo()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.rs(e,o,n,PM(i,-1)).next(a=>a))})}ts(e,n){let r=new ot(DC(e));return n.forEach((i,s)=>{Oh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Yo()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(ue),this._s=new Eo(s=>Dg(s),Og),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function nV(t,e,n,r){return new tV(t,e,n,r)}async function ZC(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function rV(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const d=c.batch,m=d.keys();let _=V.resolve();return m.forEach(v=>{_=_.next(()=>h.getEntry(u,v)).next(P=>{const N=c.docVersions.get(v);me(N!==null),P.version.compareTo(N)<0&&(d.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eR(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iV(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const m=i.get(d);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,d)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(d,_),function(P,N,I){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=mr(),c=ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(sV(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(d=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function sV(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function oV(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aV(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fE(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const d=J(u),m=d._s.get(h);return m!==void 0?V.resolve(d.os.get(m)):d.Ur.getTargetData(c,h)}(r,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(a=>(lV(r,JM(e),a),{documents:a,Ts:s})))}function lV(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class pE{constructor(){this.activeTargetIds=i2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uV{constructor(){this.so=new pE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new pE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu=null;function af(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class fV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=af(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw to("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=hV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=af();return new Promise((o,a)=>{const u=new fC;u.setWithCredentials(!0),u.listenOnce(mC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Gu.NO_ERROR:const h=u.getResponseJson();q(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Gu.TIMEOUT:q(pt,`RPC '${e}' ${s} timed out`),a(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const d=u.getStatus();if(q(pt,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const v=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(_.status);a(new H(v,_.message))}else a(new H(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new H(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=af(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yC(),a=_C(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new pC({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(pt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const d=o.createWebChannel(h,u);let m=!1,_=!1;const v=new dV({Io:N=>{_?q(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(q(pt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),q(pt,`RPC '${e}' stream ${i} sending:`,N),d.send(N))},To:()=>d.close()}),P=(N,I,E)=>{N.listen(I,S=>{try{E(S)}catch(D){setTimeout(()=>{throw D},0)}})};return P(d,ua.EventType.OPEN,()=>{_||(q(pt,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),P(d,ua.EventType.CLOSE,()=>{_||(_=!0,q(pt,`RPC '${e}' stream ${i} transport closed`),v.So())}),P(d,ua.EventType.ERROR,N=>{_||(_=!0,to(pt,`RPC '${e}' stream ${i} transport errored:`,N),v.So(new H(L.UNAVAILABLE,"The operation could not be completed")))}),P(d,ua.EventType.MESSAGE,N=>{var I;if(!_){const E=N.data[0];me(!!E);const S=E,D=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(D){q(pt,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let U=function(A){const k=Ue[A];if(k!==void 0)return $C(k)}(M),C=D.message;U===void 0&&(U=L.INTERNAL,C="Unknown error status: "+M+" with message "+D.message),_=!0,v.So(new H(U,C)),d.close()}else q(pt,`RPC '${e}' stream ${i} received:`,E),v.bo(E)}}),P(a,gC.STAT_EVENT,N=>{N.stat===Mp.PROXY?q(pt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Mp.NOPROXY&&q(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){return new I2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new tR(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pV extends nR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=R2(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Un(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Bp(u)?{documents:P2(s,u)}:{query:N2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=qC(s,o.resumeToken);const c=Wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Hc(s,o.snapshotVersion.toTimestamp());const c=Wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=D2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kp(this.serializer),n.removeTarget=e,this.a_(n)}}class mV extends nR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=k2(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>A2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Hp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Hp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _V{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ts(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Pl(c),c.q_.set("Unknown"),c.L_.delete(4),await Uh(c)}(this))})}),this.q_=new _V(r,i)}}async function Uh(t){if(ts(t))for(const e of t.B_)await e(!0)}async function Pl(t){for(const e of t.B_)await e(!1)}function rR(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qg(n)?Hg(n):To(n).r_()&&Wg(n,e))}function $g(t,e){const n=J(t),r=To(n);n.N_.delete(e),r.r_()&&iR(n,e),n.N_.size===0&&(r.r_()?r.o_():ts(n)&&n.q_.set("Unknown"))}function Wg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}To(t).A_(e)}function iR(t,e){t.Q_.xe(e),To(t).R_(e)}function Hg(t){t.Q_=new v2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),To(t).start(),t.q_.v_()}function qg(t){return ts(t)&&!To(t).n_()&&t.N_.size>0}function ts(t){return J(t).L_.size===0}function sR(t){t.Q_=void 0}async function vV(t){t.q_.set("Online")}async function wV(t){t.N_.forEach((e,n)=>{Wg(t,e)})}async function EV(t,e){sR(t),qg(t)?(t.q_.M_(e),Hg(t)):t.q_.set("Unknown")}async function TV(t,e,n){if(t.q_.set("Online"),e instanceof HC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qc(t,r)}else if(e instanceof Xu?t.Q_.Ke(e):e instanceof WC?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await eR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),iR(s,u);const d=new Mr(h.target,u,c,h.sequenceNumber);Wg(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await qc(t,r)}}async function qc(t,e,n){if(!Rl(e))throw e;t.L_.add(1),await Pl(t),t.q_.set("Offline"),n||(n=()=>eR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Uh(t)})}function oR(t,e){return e().catch(n=>qc(t,n,e))}async function Fh(t){const e=J(t),n=ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IV(e);)try{const i=await oV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,SV(e,i)}catch(i){await qc(e,i)}aR(e)&&lR(e)}function IV(t){return ts(t)&&t.O_.length<10}function SV(t,e){t.O_.push(e);const n=ri(t);n.r_()&&n.V_&&n.m_(e.mutations)}function aR(t){return ts(t)&&!ri(t).n_()&&t.O_.length>0}function lR(t){ri(t).start()}async function CV(t){ri(t).p_()}async function RV(t){const e=ri(t);for(const n of t.O_)e.m_(n.mutations)}async function AV(t,e,n){const r=t.O_.shift(),i=Vg.from(r,e,n);await oR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fh(t)}async function kV(t,e){e&&ri(t).V_&&await async function(r,i){if(function(o){return g2(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();ri(r).s_(),await oR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fh(r)}}(t,e),aR(t)&&lR(t)}async function gE(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.L_.add(3),await Pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Uh(n)}async function PV(t,e){const n=J(t);e?(n.L_.delete(2),await Uh(n)):e||(n.L_.add(2),await Pl(n),n.q_.set("Unknown"))}function To(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new pV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:vV.bind(null,t),Ro:wV.bind(null,t),mo:EV.bind(null,t),d_:TV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qg(t)?Hg(t):t.q_.set("Unknown")):(await t.K_.stop(),sR(t))})),t.K_}function ri(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new mV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:CV.bind(null,t),mo:kV.bind(null,t),f_:RV.bind(null,t),g_:AV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Fh(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Kg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gg(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Rl(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ca(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.W_=new $e(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xV{constructor(){this.queries=yE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=yE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function yE(){return new Eo(t=>xC(t),Dh)}async function DV(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new NV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Gg(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Qg(n)}async function OV(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bV(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Qg(n)}function LV(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Qg(t){t.Y_.forEach(e=>{e.next()})}var Qp,vE;(vE=Qp||(Qp={})).ea="default",vE.Cache="cache";class MV{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.key=e}}class cR{constructor(e){this.key=e}}class VV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=DC(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _E,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const m=i.get(h),_=Oh(this.query,d)?d:null,v=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?v!==P&&(r.track({type:3,doc:_}),N=!0):this.ga(m,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),N=!0):m&&!_&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(_,v){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(_)-P(v)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new oo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _E,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new cR(r))}),this.da.forEach(r=>{e.has(r)||n.push(new uR(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class UV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FV{constructor(e){this.key=e,this.va=!1}}class jV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Eo(a=>xC(a),Dh),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(K.comparator),this.Na=new Map,this.La=new jg,this.Ba={},this.ka=new Map,this.qa=so.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function BV(t,e,n=!0){const r=gR(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hR(r,e,n,!0),i}async function zV(t,e){const n=gR(t);await hR(n,e,!0,!1)}async function hR(t,e,n,r){const i=await aV(t.localStore,Vn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await $V(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rR(t.remoteStore,i),a}async function $V(t,e,n,r,i){t.Ka=(d,m,_)=>async function(P,N,I,E){let S=N.view.ma(I);S.ns&&(S=await fE(P.localStore,N.query,!1).then(({documents:C})=>N.view.ma(C,S)));const D=E&&E.targetChanges.get(N.targetId),M=E&&E.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(S,P.isPrimaryClient,D,M);return EE(P,N.targetId,U.wa),U.snapshot}(t,d,m,_);const s=await fE(t.localStore,e,!0),o=new VV(e,s.Ts),a=o.ma(s.documents),u=kl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);EE(t,n,c.wa);const h=new UV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function WV(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Dh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$g(r.remoteStore,i.targetId),Yp(r,i.targetId)}).catch(Cl)):(Yp(r,i.targetId),await Gp(r.localStore,i.targetId,!0))}async function HV(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$g(n.remoteStore,r.targetId))}async function qV(t,e,n){const r=ZV(t);try{const i=await function(o,a){const u=J(o),c=qe.now(),h=a.reduce((_,v)=>_.add(v.key),ne());let d,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let v=mr(),P=ne();return u.cs.getEntries(_,h).next(N=>{v=N,v.forEach((I,E)=>{E.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,v)).next(N=>{d=N;const I=[];for(const E of a){const S=h2(E,d.get(E.key).overlayedDocument);S!=null&&I.push(new ci(E.key,S,IC(S.value.mapValue),wn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,a)}).next(N=>{m=N;const I=N.applyToLocalDocumentSet(d,P);return u.documentOverlayCache.saveOverlays(_,N.batchId,I)})}).then(()=>({batchId:m.batchId,changes:bC(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new $e(ue)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Nl(r,i.changes),await Fh(r.remoteStore)}catch(i){const s=Gg(i,"Failed to persist write");n.reject(s)}}async function dR(t,e){const n=J(t);try{const r=await iV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Nl(n,r,e)}catch(r){await Cl(r)}}function wE(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((h,d)=>{for(const m of d.j_)m.Z_(a)&&(c=!0)}),c&&Qg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KV(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new $e(K.comparator);o=o.insert(s,_t.newNoDocument(s,X.min()));const a=ne().add(s),u=new Mh(X.min(),new Map,new $e(ue),o,a);await dR(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Yg(r)}else await Gp(r.localStore,e,!1).then(()=>Yp(r,e,n)).catch(Cl)}async function GV(t,e){const n=J(t),r=e.batch.batchId;try{const i=await rV(n.localStore,e);pR(n,r,null),fR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await Cl(i)}}async function QV(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(d=>(me(d!==null),h=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);pR(r,e,n),fR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await Cl(i)}}function fR(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function pR(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||mR(t,r)})}function mR(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($g(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yg(t))}function EE(t,e,n){for(const r of n)r instanceof uR?(t.La.addReference(r.key,e),YV(t,r)):r instanceof cR?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||mR(t,r.key)):Q()}function YV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yg(t))}function Yg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new FV(n)),t.Oa=t.Oa.insert(n,r),rR(t.remoteStore,new Mr(Vn(bg(n.path)),r,"TargetPurposeLimboResolution",kg.oe))}}async function Nl(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=zg.Wi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=J(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(c,m=>V.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>V.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!Rl(d))throw d;q("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const m=d.targetId;if(!d.fromCache){const _=h.os.get(m),v=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(v);h.os=h.os.insert(m,P)}}}(r.localStore,s))}async function XV(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await ZC(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.hs)}}function JV(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function gR(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KV.bind(null,e),e.Ca.d_=bV.bind(null,e.eventManager),e.Ca.$a=LV.bind(null,e.eventManager),e}function ZV(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QV.bind(null,e),e}class TE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nV(this.persistence,new eV,e.initialUser,this.serializer)}createPersistence(e){return new X2(Bg.Zr,this.serializer)}createSharedClientState(e){return new uV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XV.bind(null,this.syncEngine),await PV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xV}()}createDatastore(e){const n=Vh(e.databaseInfo.databaseId),r=function(s){return new fV(s)}(e.databaseInfo);return function(s,o,a,u){return new gV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>wE(this.syncEngine,n,0),function(){return mE.D()?new mE:new cV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const d=new jV(i,s,o,a,u,c);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Pl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=wC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ZC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function IE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iU(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gE(e.remoteStore,i)),t._onlineComponents=e}function rU(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rU(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new TE)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new TE);return t._offlineComponents}async function _R(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await IE(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await IE(t,new eU))),t._onlineComponents}function sU(t){return _R(t).then(e=>e.syncEngine)}async function SE(t){const e=await _R(t),n=e.eventManager;return n.onListen=BV.bind(null,e.syncEngine),n.onUnlisten=WV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HV.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oU(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function RE(t){if(!K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function AE(t){if(K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wM;switch(r.type){case"firstParty":return new SM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=CE.get(n);r&&(q("ComponentProvider","Removing Datastore"),CE.delete(n),r.terminate())}(this),Promise.resolve()}}function aU(t,e,n,r={}){var i;const s=(t=Gr(t,Bh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=mt.MOCK_USER;else{a=IS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(c)}t._authCredentials=new EM(new vC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Qr extends ns{constructor(e,n,r){super(e,n,bg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new K(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Io(t,e,...n){if(t=_e(t),vR("collection","path",e),t instanceof Bh){const r=Ie.fromString(e,...n);return AE(r),new Qr(t,null,r)}{if(!(t instanceof Ut||t instanceof Qr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return AE(r),new Qr(t.firestore,null,r)}}function So(t,e,...n){if(t=_e(t),arguments.length===1&&(e=wC.newId()),vR("doc","path",e),t instanceof Bh){const r=Ie.fromString(e,...n);return RE(r),new Ut(t,null,new K(r))}{if(!(t instanceof Ut||t instanceof Qr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return RE(r),new Ut(t.firestore,t instanceof Qr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new tR(this,"async_queue_retry"),this.Eu=()=>{const n=lf();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new xi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Rl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Kg.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Q()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function PE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ao extends Bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new lU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ER(this),this._firestoreClient.terminate()}}function uU(t,e){const n=typeof t=="object"?t:_g(),r=typeof t=="string"?t:"(default)",i=Ah(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wS("firestore");s&&aU(i,...s)}return i}function wR(t){return t._firestoreClient||ER(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ER(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new VM(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,yR(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lo(lt.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lo(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU=/^__.*__$/;class hU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Al(e,this.data,n,this.fieldTransforms)}}class TR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ci(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class e_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new e_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Kc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(IR(this.wu)&&cU.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class dU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vh(e)}Nu(e,n,r,i=!1){return new e_({wu:e,methodName:n,Ou:r,path:it.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t_(t){const e=t._freezeSettings(),n=Vh(t._databaseId);return new dU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fU(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);n_("Data must be an object, but it was:",o,r);const a=SR(r,o);let u,c;if(s.merge)u=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const m=Xp(e,d,n);if(!o.contains(m))throw new H(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RR(h,m)||h.push(m)}u=new $t(h),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new hU(new Dt(a),u,c)}class $h extends Xg{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $h}}function pU(t,e,n,r){const i=t.Nu(1,e,n);n_("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();es(r,(u,c)=>{const h=r_(e,u,n);c=_e(c);const d=i.Cu(h);if(c instanceof $h)s.push(h);else{const m=xl(c,d);m!=null&&(s.push(h),o.set(h,m))}});const a=new $t(s);return new TR(o,a,i.fieldTransforms)}function mU(t,e,n,r,i,s){const o=t.Nu(1,e,n),a=[Xp(e,r,n)],u=[i];if(s.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Xp(e,s[m])),u.push(s[m+1]);const c=[],h=Dt.empty();for(let m=a.length-1;m>=0;--m)if(!RR(c,a[m])){const _=a[m];let v=u[m];v=_e(v);const P=o.Cu(_);if(v instanceof $h)c.push(_);else{const N=xl(v,P);N!=null&&(c.push(_),h.set(_,N))}}const d=new $t(c);return new TR(h,d,o.fieldTransforms)}function gU(t,e,n,r=!1){return xl(n,t.Nu(r?4:3,e))}function xl(t,e){if(CR(t=_e(t)))return n_("Unsupported field value:",e,t),SR(t,e);if(t instanceof Xg)return function(r,i){if(!IR(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=xl(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return s2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Hc(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hc(i.serializer,s)}}if(r instanceof Jg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lo)return{bytesValue:qC(i.serializer,r._byteString)};if(r instanceof Ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return Lg(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${jh(r)}`)}(t,e)}function SR(t,e){const n={};return EC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=xl(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Jg||t instanceof lo||t instanceof Ut||t instanceof Xg||t instanceof Zg)}function n_(t,e,n){if(!CR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jh(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Xp(t,e,n){if((e=_e(e))instanceof zh)return e._internalPath;if(typeof e=="string")return r_(t,e);throw Kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _U=new RegExp("[~\\*/\\[\\]]");function r_(t,e,n){if(e.search(_U)>=0)throw Kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zh(...e.split("."))._internalPath}catch{throw Kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(L.INVALID_ARGUMENT,a+t+u)}function RR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yU extends AR{data(){return super.data()}}function Wh(t,e){return typeof e=="string"?r_(t,e):e instanceof zh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class i_{}class kR extends i_{}function s_(t,e,...n){let r=[];e instanceof i_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof o_).length,a=s.filter(u=>u instanceof Hh).length;if(o>1||o>0&&a>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hh extends kR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hh(e,n,r)}_apply(e){const n=this._parse(e);return xR(e._query,n),new ns(e.firestore,e.converter,zp(e._query,n))}_parse(e){const n=t_(e.firestore);return function(s,o,a,u,c,h,d){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xE(d,h);const _=[];for(const v of d)_.push(NE(u,s,v));m={arrayValue:{values:_}}}else m=NE(u,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xE(d,h),m=gU(a,o,d,h==="in"||h==="not-in");return je.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function PR(t,e,n){const r=e,i=Wh("where",t);return Hh._create(i,r,n)}class o_ extends i_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new o_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)xR(o,u),o=zp(o,u)}(e._query,n),new ns(e.firestore,e.converter,zp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class a_ extends kR{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new a_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ol(s,o)}(e._query,this._field,this._direction);return new ns(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new wo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function NR(t,e="asc"){const n=e,r=Wh("orderBy",t);return a_._create(r,n)}function NE(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NC(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!K.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yw(t,new K(r))}if(n instanceof Ut)return Yw(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function xE(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wU{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new Zg(s)}convertGeoPoint(e){return new Jg(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ng(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const n=ni(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(JC(r));const i=new il(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EU(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DR extends AR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ju extends DR{data(e={}){return super.data(e)}}class TU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:IU(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class OR extends wU{constructor(e){super(),this.firestore=e}convertBytes(e){return new lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function l_(t,e,n,...r){t=Gr(t,Ut);const i=Gr(t.firestore,ao),s=t_(i);let o;return o=typeof(e=_e(e))=="string"||e instanceof zh?mU(s,"updateDoc",t._key,e,n,r):pU(s,"updateDoc",t._key,e),h_(i,[o.toMutation(t._key,wn.exists(!0))])}function bR(t){return h_(Gr(t.firestore,ao),[new Mg(t._key,wn.none())])}function u_(t,e){const n=Gr(t.firestore,ao),r=So(t),i=EU(t.converter,e);return h_(n,[fU(t_(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function c_(t,...e){var n,r,i;t=_e(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||PE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(PE(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,c,h;if(t instanceof Ut)c=Gr(t.firestore,ao),h=bg(t._key.path),u={next:d=>{e[o]&&e[o](SU(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Gr(t,ns);c=Gr(d.firestore,ao),h=d._query;const m=new OR(c);u={next:_=>{e[o]&&e[o](new TU(c,m,d,_))},error:e[o+1],complete:e[o+2]},vU(t._query)}return function(m,_,v,P){const N=new tU(P),I=new MV(_,N,v);return m.asyncQueue.enqueueAndForget(async()=>DV(await SE(m),I)),()=>{N.za(),m.asyncQueue.enqueueAndForget(async()=>OV(await SE(m),I))}}(wR(c),h,a,u)}function h_(t,e){return function(r,i){const s=new xi;return r.asyncQueue.enqueueAndForget(async()=>qV(await sU(r),i,s)),s.promise}(wR(t),e)}function SU(t,e,n){const r=n.docs.get(e._key),i=new OR(t);return new DR(t,i,e._key,r,new da(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vo=i})(li),ei(new hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ao(new TM(r.getProvider("auth-internal")),new RM(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sn(Hw,"4.7.0",e),sn(Hw,"4.7.0","esm2017")})();var CU="firebase",RU="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(CU,RU,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebasestorage.googleapis.com",MR="storageBucket",AU=2*60*1e3,kU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends jn{constructor(e,n,r=0){super(cf(e),`Firebase Storage: ${n} (${cf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function cf(t){return"storage/"+t}function d_(){const t="An unknown error occurred, please check the error payload for server response.";return new be(Oe.UNKNOWN,t)}function PU(t){return new be(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NU(t){return new be(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Oe.UNAUTHENTICATED,t)}function DU(){return new be(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OU(t){return new be(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function bU(){return new be(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LU(){return new be(Oe.CANCELED,"User canceled the upload/download.")}function MU(t){return new be(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function VU(t){return new be(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UU(){return new be(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+MR+"' property when initializing the app?")}function FU(){return new be(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jU(){return new be(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function BU(t){return new be(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jp(t){return new be(Oe.INVALID_ARGUMENT,t)}function VR(){return new be(Oe.APP_DELETED,"The Firebase app was deleted.")}function zU(t){return new be(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Aa(t,e){return new be(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xo(t){throw new be(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw VU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${m}`,"i"),v={bucket:1,path:3},P=n===LR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",I=new RegExp(`^https?://${P}/${i}/${N}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:_,indices:v,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const M=S[D],U=M.regex.exec(e);if(U){const C=U[M.indices.bucket];let y=U[M.indices.path];y||(y=""),r=new Wt(C,y),M.postModify(r);break}}if(r==null)throw MU(e);return r}}class $U{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...N){c||(c=!0,e.apply(null,N))}function d(N){i=setTimeout(()=>{i=null,t(_,u())},N)}function m(){s&&clearTimeout(s)}function _(N,...I){if(c){m();return}if(N){m(),h.call(null,N,...I);return}if(u()||o){m(),h.call(null,N,...I);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,d(S)}let v=!1;function P(N){v||(v=!0,m(),!c&&(i!==null?(N||(a=2),clearTimeout(i),d(0)):N||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function HU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t){return t!==void 0}function KU(t){return typeof t=="object"&&!Array.isArray(t)}function f_(t){return typeof t=="string"||t instanceof String}function DE(t){return p_()&&t instanceof Blob}function p_(){return typeof Blob<"u"}function OE(t,e,n,r){if(r<e)throw Jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function UR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Di||(Di={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(e,n,r,i,s,o,a,u,c,h,d,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Di.NO_ERROR,u=s.getStatus();if(!a||GU(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Di.ABORT;r(!1,new Su(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Su(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());qU(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=d_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?VR():LU();o(u)}else{const u=bU();o(u)}};this.canceled_?n(!1,new Su(!1,null,!0)):this.backoffId_=WU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eF(t,e,n,r,i,s,o=!0){const a=UR(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return JU(c,e),YU(c,n),XU(c,s),ZU(c,r),new QU(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nF(...t){const e=tF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(p_())return new Blob(t);throw new be(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t){if(typeof atob>"u")throw BU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hf{constructor(e,n){this.data=e,this.contentType=n||null}}function sF(t,e){switch(t){case xn.RAW:return new hf(FR(e));case xn.BASE64:case xn.BASE64URL:return new hf(jR(t,e));case xn.DATA_URL:return new hf(aF(e),lF(e))}throw d_()}function FR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oF(t){let e;try{e=decodeURIComponent(t)}catch{throw Aa(xn.DATA_URL,"Malformed data URL.")}return FR(e)}function jR(t,e){switch(t){case xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Aa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Aa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iF(e)}catch(i){throw i.message.includes("polyfill")?i:Aa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Aa(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aF(t){const e=new BR(t);return e.base64?jR(xn.BASE64,e.rest):oF(e.rest)}function lF(t){return new BR(t).contentType}function uF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){let r=0,i="";DE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(DE(this.data_)){const r=this.data_,i=rF(r,e,n);return i===null?null:new Dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(p_()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(nF.apply(null,n))}else{const n=e.map(o=>f_(o)?sF(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){let e;try{e=JSON.parse(t)}catch{return null}return KU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $R(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dF}}let Cu=null;function fF(t){return!f_(t)||t.length<2?t:$R(t)}function WR(){if(Cu)return Cu;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return fF(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Cu=t,Cu}function pF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pF(r,t),r}function HR(t,e,n){const r=zR(e);return r===null?null:mF(t,r,n)}function gF(t,e,n,r){const i=zR(e);if(i===null||!f_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,d=t.fullPath,m="/b/"+o(h)+"/o/"+o(d),_=qh(m,n,r),v=UR({alt:"media",token:c});return _+v})[0]}function _F(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class m_{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){if(!t)throw d_()}function yF(t,e){function n(r,i){const s=HR(t,i,e);return qR(s!==null),s}return n}function vF(t,e){function n(r,i){const s=HR(t,i,e);return qR(s!==null),gF(s,i,t.host,t._protocol)}return n}function KR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DU():i=xU():n.getStatus()===402?i=NU(t.bucket):n.getStatus()===403?i=OU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function GR(t){const e=KR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=PU(t.path)),s.serverResponse=i.serverResponse,s}return n}function wF(t,e,n){const r=e.fullServerUrl(),i=qh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new m_(i,s,vF(t,n),o);return a.errorHandler=GR(e),a}function EF(t,e){const n=e.fullServerUrl(),r=qh(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const a=new m_(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=GR(e),a}function TF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=TF(null,e)),r}function SF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=IF(e,r,i),h=_F(c,n),d="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",_=Dr.getBlob(d,r,m);if(_===null)throw FU();const v={name:c.fullPath},P=qh(s,t.host,t._protocol),N="POST",I=t.maxUploadRetryTime,E=new m_(P,N,yF(t,n),I);return E.urlParams=v,E.headers=o,E.body=_.uploadData(),E.errorHandler=KR(e),E}class CF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Xo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RF extends CF{initXhr(){this.xhr_.responseType="text"}}function g_(){return new RF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hi(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $R(this._location.path)}get storage(){return this._service}get parent(){const e=cF(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new Hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zU(e)}}function AF(t,e,n){t._throwIfRoot("uploadBytes");const r=SF(t.storage,t._location,WR(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,g_).then(i=>({metadata:i,ref:t}))}function kF(t){t._throwIfRoot("getDownloadURL");const e=wF(t.storage,t._location,WR());return t.storage.makeRequestWithTokens(e,g_).then(n=>{if(n===null)throw jU();return n})}function PF(t){t._throwIfRoot("deleteObject");const e=EF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,g_)}function NF(t,e){const n=hF(t._location.path,e),r=new Wt(t._location.bucket,n);return new Hi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){return/^[A-Za-z]+:\/\//.test(t)}function DF(t,e){return new Hi(t,e)}function QR(t,e){if(t instanceof __){const n=t;if(n._bucket==null)throw UU();const r=new Hi(n,n._bucket);return e!=null?QR(r,e):r}else return e!==void 0?NF(t,e):t}function OF(t,e){if(e&&xF(e)){if(t instanceof __)return DF(t,e);throw Jp("To use ref(service, url), the first argument must be a Storage instance.")}else return QR(t,e)}function bE(t,e){const n=e==null?void 0:e[MR];return n==null?null:Wt.makeFromBucketSpec(n,t)}function bF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:IS(i,t.app.options.projectId))}class __{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AU,this._maxUploadRetryTime=kU,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=bE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=bE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){OE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){OE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $U(VR());{const o=eF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const LE="@firebase/storage",ME="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="storage";function LF(t,e,n){return t=_e(t),AF(t,e,n)}function MF(t){return t=_e(t),kF(t)}function VF(t){return t=_e(t),PF(t)}function XR(t,e){return t=_e(t),OF(t,e)}function UF(t=_g(),e){t=_e(t);const r=Ah(t,YR).getImmediate({identifier:e}),i=wS("storage");return i&&FF(r,...i),r}function FF(t,e,n,r={}){bF(t,e,n,r)}function jF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new __(n,r,i,e,li)}function BF(){ei(new hr(YR,jF,"PUBLIC").setMultipleInstances(!0)),sn(LE,ME,""),sn(LE,ME,"esm2017")}BF();var zF={BASE_URL:"/portfolio",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_API_KEY:"AIzaSyCuePTCGDMP2jHTcNWmjp1ifyGLgCFVtAA",VITE_APP_ID:"1:110828802384:web:d1fa8b2e1e6b95b98a1c55",VITE_AUTH_DOMAIN:"portfolio-37f9a.firebaseapp.com",VITE_MEASUREMENT_ID:"G-3ZGST2853S",VITE_MESSAGING_SENDER_ID:"110828802384",VITE_PROJECT_ID:"portfolio-37f9a",VITE_STORAGE_BUCKET:"portfolio-37f9a.appspot.com"};const{VITE_API_KEY:$F,VITE_AUTH_DOMAIN:WF,VITE_PROJECT_ID:HF,VITE_STORAGE_BUCKET:qF,VITE_MESSAGING_SENDER_ID:KF,VITE_APP_ID:GF,VITE_MEASUREMENT_ID:QF}=zF,YF={apiKey:$F,authDomain:WF,projectId:HF,storageBucket:qF,messagingSenderId:KF,appId:GF,measurementId:QF},y_=PS(YF),Ru=yM(y_),JR=UF(y_),Cn=uU(y_);var VE={};const UE="@firebase/database",FE="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZR="";function XF(t){ZR=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _r(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JF(e)}}catch{}return new ZF},Si=eA("localStorage"),e4=eA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Rh("@firebase/database"),t4=function(){let t=1;return function(){return t++}}(),tA=function(t){const e=JD(t),n=new KD;n.update(e);const r=n.digest();return fg.encodeByteArray(r)},Dl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Dl.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let ka=null,jE=!0;const n4=function(t,e){z(!e,"Can't turn on custom loggers persistently."),zs.logLevel=te.VERBOSE,ka=zs.log.bind(zs)},yt=function(...t){if(jE===!0&&(jE=!1,ka===null&&e4.get("logging_enabled")===!0&&n4()),ka){const e=Dl.apply(null,t);ka(e)}},Ol=function(t){return function(...e){yt(t,...e)}},Zp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Dl(...t);zs.error(e)},qi=function(...t){const e=`FIREBASE FATAL ERROR: ${Dl(...t)}`;throw zs.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+Dl(...t);zs.warn(e)},r4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},i4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},uo="[MIN_NAME]",Ki="[MAX_NAME]",Co=function(t,e){if(t===e)return 0;if(t===uo||e===Ki)return-1;if(e===uo||t===Ki)return 1;{const n=BE(t),r=BE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},s4=function(t,e){return t===e?0:t<e?-1:1},Jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},v_=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=v_(t[e[r]]);return n+="}",n},rA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iA=function(t){z(!nA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},o4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},a4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},l4=new RegExp("^-?(0*)\\d{1,10}$"),u4=-2147483648,c4=2147483647,BE=function(t){if(l4.test(t)){const e=Number(t);if(e>=u4&&e<=c4)return e}return null},bl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},h4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="5",sA="v",oA="s",aA="r",lA="f",uA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cA="ls",hA="p",em="ac",dA="websocket",fA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function m4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pA(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===dA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);m4(t)&&(n.ns=t.namespace);const i=[];return ln(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.counters_={}}incrementCounter(e,n=1){_r(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ND(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df={},ff={};function E_(t){const e=t.toString();return df[e]||(df[e]=new g4),df[e]}function _4(t,e){const n=t.toString();return ff[n]||(ff[n]=e()),ff[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&bl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="start",v4="close",w4="pLPCommand",E4="pRTLPCB",mA="id",gA="pw",_A="ser",T4="cb",I4="seg",S4="ts",C4="d",R4="dframe",yA=1870,vA=30,A4=yA-vA,k4=25e3,P4=3e4;class ks{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ol(e),this.stats_=E_(n),this.urlFn=u=>(this.appCheckToken&&(u[em]=this.appCheckToken),pA(n,fA,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new y4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(P4)),i4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new T_((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zE)this.id=a,this.password=u;else if(o===v4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zE]="t",r[_A]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[T4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sA]=w_,this.transportSessionId&&(r[oA]=this.transportSessionId),this.lastSessionId&&(r[cA]=this.lastSessionId),this.applicationId&&(r[hA]=this.applicationId),this.appCheckToken&&(r[em]=this.appCheckToken),typeof location<"u"&&location.hostname&&uA.test(location.hostname)&&(r[aA]=lA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!o4()&&!a4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_S(n),i=rA(r,A4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[R4]="t",r[mA]=e,r[gA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class T_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=t4(),window[w4+this.uniqueCallbackIdentifier]=e,window[E4+this.uniqueCallbackIdentifier]=n,this.myIFrame=T_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mA]=this.myID,e[gA]=this.myPW,e[_A]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vA+r.length<=yA;){const o=this.pendingSegs.shift();r=r+"&"+I4+i+"="+o.seg+"&"+S4+i+"="+o.ts+"&"+C4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(k4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=16384,x4=45e3;let Gc=null;typeof MozWebSocket<"u"?Gc=MozWebSocket:typeof WebSocket<"u"&&(Gc=WebSocket);class mn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ol(this.connId),this.stats_=E_(n),this.connURL=mn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sA]=w_,typeof location<"u"&&location.hostname&&uA.test(location.hostname)&&(o[aA]=lA),n&&(o[oA]=n),r&&(o[cA]=r),i&&(o[em]=i),s&&(o[hA]=s),pA(e,dA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Si.set("previous_websocket_failure",!0);try{let r;CS(),this.mySock=new Gc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Gc!==null&&!mn.forceDisallow_}static previouslyFailed(){return Si.isInMemoryStorage||Si.get("previous_websocket_failure")===!0}markConnectionHealthy(){Si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rA(n,N4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(x4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mn.responsesRequiredToBeHealthy=2;mn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,mn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mn&&mn.isAvailable();let r=n&&!mn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mn];else{const i=this.transports_=[];for(const s of ul.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ul.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ul.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4=6e4,O4=5e3,b4=10*1024,L4=100*1024,pf="t",$E="d",M4="s",WE="r",V4="e",HE="o",qE="a",KE="n",GE="p",U4="h";class F4{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ol("c:"+this.id+":"),this.transportManager_=new ul(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>L4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>b4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pf in e){const n=e[pf];n===qE?this.upgradeIfSecondaryHealthy_():n===WE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===HE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jo("t",e),r=Jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:GE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:KE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jo("t",e),r=Jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jo(pf,e);if($E in e){const r=e[$E];if(n===U4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===KE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===M4?this.onConnectionShutdown_(r):n===WE?this.onReset_(r):n===V4?Zp("Server Error: "+r):n===HE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),w_!==r&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:GE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends EA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qc}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=32,YE=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new Ce("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ii(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function TA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function j4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function IA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function SA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ce(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return nn(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CA(t,e){if(ii(t)!==ii(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ii(t)>ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class B4{constructor(e,n){this.errorPrefix_=n,this.parts_=IA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ch(this.parts_[r]);RA(this)}}function z4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ch(e),RA(t)}function $4(t){const e=t.parts_.pop();t.byteLength_-=Ch(e),t.parts_.length>0&&(t.byteLength_-=1)}function RA(t){if(t.byteLength_>YE)throw new Error(t.errorPrefix_+"has a key path longer than "+YE+" bytes ("+t.byteLength_+").");if(t.parts_.length>QE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+QE+") or object contains a cycle "+vi(t))}function vi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends EA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new I_}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=1e3,W4=60*5*1e3,XE=30*1e3,H4=1.3,q4=3e4,K4="server_kill",JE=3;class sr extends wA{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=sr.nextPersistentConnectionId_++,this.log_=Ol("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zo,this.maxReconnectDelay_=W4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!CS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");I_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(rt(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new pg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;sr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_r(e,"w")){const r=Zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=XE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zp("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>q4&&(this.reconnectDelay_=Zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*H4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(d){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,a=new F4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{qt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(K4)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qt(d),u())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rp(this.interruptReasons_)&&(this.reconnectDelay_=Zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>v_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=JE&&(this.reconnectDelay_=XE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=JE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ZR.replace(/\./g,"-")]=1,mg()?e["framework.cordova"]=1:SS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qc.getInstance().currentlyOnline();return Rp(this.interruptReasons_)&&e}}sr.nextPersistentConnectionId_=0;sr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(uo,e),i=new oe(uo,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au;class AA extends Kh{static get __EMPTY_NODE(){return Au}static set __EMPTY_NODE(e){Au=e}compare(e,n){return Co(e.name,n.name)}isDefinedOn(e){throw go("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ki,Au)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Au)}toString(){return".key"}}const $s=new AA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??bt.EMPTY_NODE,this.right=s??bt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class G4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ku(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ku(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ku(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ku(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new G4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(t,e){return Co(t.name,e.name)}function S_(t,e){return Co(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm;function Y4(t){tm=t}const kA=function(t){return typeof t=="number"?"number:"+iA(t):"string:"+t},PA=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_r(e,".sv"),"Priority must be a string or number.")}else z(t===tm||t.isEmpty(),"priority of unexpected type.");z(t===tm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZE;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PA(this.priorityNode_)}static set __childrenNodeConstructor(e){ZE=e}static get __childrenNodeConstructor(){return ZE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:se(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iA(this.value_):e+=this.value_,this.lazyHash_=tA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),s=Ke.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NA,xA;function X4(t){NA=t}function J4(t){xA=t}class Z4 extends Kh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Co(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ki,new Ke("[PRIORITY-POST]",xA))}makePost(e,n){const r=NA(e);return new oe(n,new Ke("[PRIORITY-POST]",r))}toString(){return".priority"}}const wt=new Z4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ej=Math.log(2);class tj{constructor(e){const n=s=>parseInt(Math.log(s)/ej,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let d,m;if(h===0)return null;if(h===1)return d=t[u],m=n?n(d):d,new Ye(m,d.node,Ye.BLACK,null,null);{const _=parseInt(h/2,10)+u,v=i(u,_),P=i(_+1,c);return d=t[_],m=n?n(d):d,new Ye(m,d.node,Ye.BLACK,v,P)}},s=function(u){let c=null,h=null,d=t.length;const m=function(v,P){const N=d-v,I=d;d-=v;const E=i(N+1,I),S=t[N],D=n?n(S):S;_(new Ye(D,S.node,P,null,E))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<u.count;++v){const P=u.nextBitIsOne(),N=Math.pow(2,u.count-(v+1));P?m(N,Ye.BLACK):(m(N,Ye.BLACK),m(N,Ye.RED))}return h},o=new tj(t.length),a=s(o);return new bt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;const cs={};class nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(cs&&wt,"ChildrenNode.ts has not been loaded"),mf=mf||new nr({".priority":cs},{".priority":wt}),mf}get(e){const n=Zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return _r(this.indexSet_,e.toString())}addIndex(e,n){z(e!==$s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Yc(r,e.getCompare()):a=cs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new nr(h,c)}addToIndexes(e,n){const r=Oc(this.indexes_,(i,s)=>{const o=Zs(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===cs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(oe.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Yc(a,o.getCompare())}else return cs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new oe(e.name,a))),u.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oc(this.indexes_,i=>{if(i===cs)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;class ce{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&PA(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ea||(ea=new ce(new bt(S_),null,nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ea}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ea:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ea:this.priorityNode_;return new ce(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{z(se(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(wt,(o,a)=>{n[o]=a.val(e),r++,s&&ce.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kA(this.getPriority().val())+":"),this.forEachChild(wt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ll?-1:0}withIndex(e){if(e===$s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(wt),i=n.getIterator(wt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$s?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nj extends ce{constructor(){super(new bt(S_),ce.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const Ll=new nj;Object.defineProperties(oe,{MIN:{value:new oe(uo,ce.EMPTY_NODE)},MAX:{value:new oe(Ki,Ll)}});AA.__EMPTY_NODE=ce.EMPTY_NODE;Ke.__childrenNodeConstructor=ce;Y4(Ll);J4(Ll);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj=!0;function vt(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,vt(e))}if(!(t instanceof Array)&&rj){const n=[];let r=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=vt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new oe(o,u)))}}),n.length===0)return ce.EMPTY_NODE;const s=Yc(n,Q4,o=>o.name,S_);if(r){const o=Yc(n,wt.getCompare());return new ce(s,vt(e),new nr({".priority":o},{".priority":wt}))}else return new ce(s,vt(e),nr.Default)}else{let n=ce.EMPTY_NODE;return ln(t,(r,i)=>{if(_r(t,r)&&r.substring(0,1)!=="."){const s=vt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(vt(e))}}X4(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij extends Kh{constructor(e){super(),this.indexPath_=e,z(!re(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Co(e.name,n.name):s}makePost(e,n){const r=vt(e),i=ce.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,Ll);return new oe(Ki,e)}toString(){return IA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj extends Kh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Co(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=vt(e);return new oe(n,r)}toString(){return".value"}}const oj=new sj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(t){return{type:"value",snapshotNode:t}}function lj(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function uj(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function e0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:uo}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ki}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new C_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function t0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===wt?n="$priority":t.index_===oj?n="$value":t.index_===$s?n="$key":(z(t.index_ instanceof ij,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function n0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==wt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends wA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ol("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xc.getListenId_(e,r),a={};this.listens_[o]=a;const u=t0(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Zs(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Xc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=t0(e._queryParams),r=e._path.toString(),i=new pg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Za(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){return{value:null,children:new Map}}function DA(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Jc());const i=t.children.get(r);e=Te(e),DA(i,e,n)}}function nm(t,e,n){t.value!==null?n(e,t.value):dj(t,(r,i)=>{const s=new Ce(e.toString()+"/"+r);nm(i,s,n)})}function dj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=10*1e3,pj=30*1e3,mj=5*60*1e3;class gj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fj(e);const r=r0+(pj-r0)*Math.random();Pa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ln(e,(i,s)=>{s>0&&_r(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pa(this.reportStats_.bind(this),Math.floor(Math.random()*2*mj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function OA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function LA(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dn.ACK_USER_WRITE,this.source=OA()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Zc(de(),n,this.revert)}}else return z(se(this.path)===e,"operationForChild called for unrelated child."),new Zc(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dn.OVERWRITE}operationForChild(e){return re(this.path)?new Gi(this.source,de(),this.snap.getImmediateChild(e)):new Gi(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Gi(this.source,de(),n.value):new cl(this.source,de(),n)}else return z(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cl(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function _j(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(cj(o.childName,o.snapshotNode))}),ta(t,i,"child_removed",e,r,n),ta(t,i,"child_added",e,r,n),ta(t,i,"child_moved",s,r,n),ta(t,i,"child_changed",e,r,n),ta(t,i,"value",e,r,n),i}function ta(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>vj(t,a,u)),o.forEach(a=>{const u=yj(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function yj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vj(t,e,n){if(e.childName==null||n.childName==null)throw go("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t,e){return{eventCache:t,serverCache:e}}function Na(t,e,n,r){return MA(new R_(e,n,r),t.serverCache)}function VA(t,e,n,r){return MA(t.eventCache,new R_(e,n,r))}function rm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;const wj=()=>(gf||(gf=new bt(s4)),gf);class Ee{constructor(e,n=wj()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return ln(e,(r,i)=>{n=n.set(new Ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(re(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Te(e),n);return s!=null?{path:Xe(new Ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ee(null)}}set(e,n){if(re(e))return new Ee(n,this.children);{const r=se(e),s=(this.children.get(r)||new Ee(null)).set(Te(e),n),o=this.children.insert(r,s);return new Ee(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ee(null):new Ee(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(re(e))return n;{const r=se(e),s=(this.children.get(r)||new Ee(null)).setTree(Te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ee(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Te(e),Xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Te(e),Xe(n,i),r):new Ee(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new Ee(null))}}function xa(t,e,n){if(re(e))return new En(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nn(i,e);return s=s.updateChild(o,n),new En(t.writeTree_.set(i,s))}else{const i=new Ee(n),s=t.writeTree_.setTree(e,i);return new En(s)}}}function i0(t,e,n){let r=t;return ln(n,(i,s)=>{r=xa(r,Xe(e,i),s)}),r}function s0(t,e){if(re(e))return En.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new En(n)}}function im(t,e){return rs(t,e)!=null}function rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function o0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(wt,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Yr(t,e){if(re(e))return t;{const n=rs(t,e);return n!=null?new En(new Ee(n)):new En(t.writeTree_.subtree(e))}}function sm(t){return t.writeTree_.isEmpty()}function co(t,e){return UA(de(),t.writeTree_,e)}function UA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=UA(Xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){return WA(e,t)}function Ej(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xa(t.visibleWrites,e,n)),t.lastWriteId=r}function Tj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ij(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Sj(a,r.path)?i=!1:gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Cj(t),!0;if(r.snap)t.visibleWrites=s0(t.visibleWrites,r.path);else{const a=r.children;ln(a,u=>{t.visibleWrites=s0(t.visibleWrites,Xe(r.path,u))})}return!0}else return!1}function Sj(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(Xe(t.path,n),e))return!0;return!1}function Cj(t){t.visibleWrites=jA(t.allWrites,Rj,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Rj(t){return t.visible}function jA(t,e,n){let r=En.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gn(n,o)?(a=nn(n,o),r=xa(r,a,s.snap)):gn(o,n)&&(a=nn(o,n),r=xa(r,de(),s.snap.getChild(a)));else if(s.children){if(gn(n,o))a=nn(n,o),r=i0(r,a,s.children);else if(gn(o,n))if(a=nn(o,n),re(a))r=i0(r,de(),s.children);else{const u=Zs(s.children,se(a));if(u){const c=u.getChild(Te(a));r=xa(r,de(),c)}}}else throw go("WriteRecord should have .snap or .children")}}return r}function BA(t,e,n,r,i){if(!r&&!i){const s=rs(t.visibleWrites,e);if(s!=null)return s;{const o=Yr(t.visibleWrites,e);if(sm(o))return n;if(n==null&&!im(o,de()))return null;{const a=n||ce.EMPTY_NODE;return co(o,a)}}}else{const s=Yr(t.visibleWrites,e);if(!i&&sm(s))return n;if(!i&&n==null&&!im(s,de()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gn(c.path,e)||gn(e,c.path))},a=jA(t.allWrites,o,e),u=n||ce.EMPTY_NODE;return co(a,u)}}}function Aj(t,e,n){let r=ce.EMPTY_NODE;const i=rs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(wt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Yr(t.visibleWrites,e);return n.forEachChild(wt,(o,a)=>{const u=co(Yr(s,new Ce(o)),a);r=r.updateImmediateChild(o,u)}),o0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Yr(t.visibleWrites,e);return o0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function kj(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xe(e,n);if(im(t.visibleWrites,s))return null;{const o=Yr(t.visibleWrites,s);return sm(o)?i.getChild(n):co(o,i.getChild(n))}}function Pj(t,e,n,r){const i=Xe(e,n),s=rs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Yr(t.visibleWrites,i);return co(o,r.getNode().getImmediateChild(n))}else return null}function Nj(t,e){return rs(t.visibleWrites,e)}function xj(t,e,n,r,i,s,o){let a;const u=Yr(t.visibleWrites,e),c=rs(u,de());if(c!=null)a=c;else if(n!=null)a=co(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function Dj(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function om(t,e,n,r){return BA(t.writeTree,t.treePath,e,n,r)}function zA(t,e){return Aj(t.writeTree,t.treePath,e)}function a0(t,e,n,r){return kj(t.writeTree,t.treePath,e,n,r)}function eh(t,e){return Nj(t.writeTree,Xe(t.treePath,e))}function Oj(t,e,n,r,i,s){return xj(t.writeTree,t.treePath,e,n,r,i,s)}function A_(t,e,n){return Pj(t.writeTree,t.treePath,e,n)}function $A(t,e){return WA(Xe(t.treePath,e),t.writeTree)}function WA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,e0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,uj(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,lj(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,e0(r,e.snapshotNode,i.oldSnap));else throw go("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const HA=new Lj;class k_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new R_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return A_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qi(this.viewCache_),s=Oj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function Mj(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Vj(t,e,n,r,i){const s=new bj;let o,a;if(n.type===Dn.OVERWRITE){const c=n;c.source.fromUser?o=am(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=th(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Dn.MERGE){const c=n;c.source.fromUser?o=Fj(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=lm(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Dn.ACK_USER_WRITE){const c=n;c.revert?o=zj(t,e,c.path,r,i,s):o=jj(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Dn.LISTEN_COMPLETE)o=Bj(t,e,n.path,r,s);else throw go("Unknown operation type: "+n.type);const u=s.getChanges();return Uj(e,o,u),{viewCache:o,changes:u}}function Uj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(aj(rm(e)))}}function qA(t,e,n,r,i,s){const o=e.eventCache;if(eh(r,n)!=null)return e;{let a,u;if(re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qi(e),h=c instanceof ce?c:ce.EMPTY_NODE,d=zA(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=om(r,Qi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){z(ii(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const d=a0(r,n,h,u);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Te(n);let d;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=a0(r,n,o.getNode(),u);m!=null?d=o.getNode().getImmediateChild(c).updateChild(h,m):d=o.getNode().getImmediateChild(c)}else d=A_(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,i,s):a=o.getNode()}}return Na(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function th(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=se(n);if(!u.isCompleteForPath(n)&&ii(n)>1)return e;const v=Te(n),N=u.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,v,HA,null)}const d=VA(e,c,u.isFullyInitialized()||re(n),h.filtersNodes()),m=new k_(i,d,s);return qA(t,d,n,i,m,a)}function am(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new k_(i,e,s);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Na(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Na(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Te(n),_=a.getNode().getImmediateChild(d);let v;if(re(m))v=r;else{const P=h.getCompleteChild(d);P!=null?TA(m)===".priority"&&P.getChild(SA(m)).isEmpty()?v=P:v=P.updateChild(m,r):v=ce.EMPTY_NODE}if(_.equals(v))u=e;else{const P=t.filter.updateChild(a.getNode(),d,v,m,h,o);u=Na(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function l0(t,e){return t.eventCache.isCompleteForChild(e)}function Fj(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Xe(n,u);l0(e,se(h))&&(a=am(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Xe(n,u);l0(e,se(h))||(a=am(t,a,h,c,i,s,o))}),a}function u0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;re(n)?c=r:c=new Ee(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=u0(t,_,m);u=th(t,u,new Ce(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,m)=>{const _=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),P=u0(t,v,m);u=th(t,u,new Ce(d),P,i,s,o,a)}}),u}function jj(t,e,n,r,i,s,o){if(eh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return th(t,e,n,u.getNode().getChild(n),i,s,a,o);if(re(n)){let c=new Ee(null);return u.getNode().forEachChild($s,(h,d)=>{c=c.set(new Ce(h),d)}),lm(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ee(null);return r.foreach((h,d)=>{const m=Xe(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),lm(t,e,n,c,i,s,a,o)}}function Bj(t,e,n,r,i){const s=e.serverCache,o=VA(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return qA(t,o,n,r,HA,i)}function zj(t,e,n,r,i,s){let o;if(eh(r,n)!=null)return e;{const a=new k_(r,e,i),u=e.eventCache.getNode();let c;if(re(n)||se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=om(r,Qi(e));else{const d=e.serverCache.getNode();z(d instanceof ce,"serverChildren would be complete if leaf node"),h=zA(r,d)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=se(n);let d=A_(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=u.getImmediateChild(h)),d!=null?c=t.filter.updateChild(u,h,d,Te(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,ce.EMPTY_NODE,Te(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=om(r,Qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||eh(r,de())!=null,Na(e,c,o,t.filter.filtersNodes())}}function $j(t,e){const n=Qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function c0(t,e,n,r){e.type===Dn.MERGE&&e.source.queryId!==null&&(z(Qi(t.viewCache_),"We should always have a full cache before handling merges"),z(rm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Vj(t.processor_,i,e,n,r);return Mj(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Wj(t,s.changes,s.viewCache.eventCache.getNode())}function Wj(t,e,n,r){const i=t.eventRegistrations_;return _j(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h0;function Hj(t){z(!h0,"__referenceConstructor has already been defined"),h0=t}function P_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),c0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(c0(o,e,n,r));return s}}function N_(t,e){let n=null;for(const r of t.views.values())n=n||$j(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d0;function qj(t){z(!d0,"__referenceConstructor has already been defined"),d0=t}class f0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=Dj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kj(t,e,n,r,i){return Ej(t.pendingWriteTree_,e,n,r,i),i?Qh(t,new Gi(OA(),e,n)):[]}function Ps(t,e,n=!1){const r=Tj(t.pendingWriteTree_,e);if(Ij(t.pendingWriteTree_,e)){let s=new Ee(null);return r.snap!=null?s=s.set(de(),!0):ln(r.children,o=>{s=s.set(new Ce(o),!0)}),Qh(t,new Zc(r.path,s,n))}else return[]}function Gh(t,e,n){return Qh(t,new Gi(bA(),e,n))}function Gj(t,e,n){const r=Ee.fromObject(n);return Qh(t,new cl(bA(),e,r))}function Qj(t,e,n,r){const i=YA(t,r);if(i!=null){const s=XA(i),o=s.path,a=s.queryId,u=nn(o,e),c=new Gi(LA(a),u,n);return JA(t,o,c)}else return[]}function Yj(t,e,n,r){const i=YA(t,r);if(i){const s=XA(i),o=s.path,a=s.queryId,u=nn(o,e),c=Ee.fromObject(n),h=new cl(LA(a),u,c);return JA(t,o,h)}else return[]}function KA(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=nn(o,e),c=N_(a,u);if(c)return c});return BA(i,e,s,n,!0)}function Qh(t,e){return GA(e,t.syncPointTree_,null,FA(t.pendingWriteTree_,de()))}function GA(t,e,n,r){if(re(t.path))return QA(t,e,n,r);{const i=e.get(de());n==null&&i!=null&&(n=N_(i,de()));let s=[];const o=se(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=$A(r,o);s=s.concat(GA(a,u,c,h))}return i&&(s=s.concat(P_(i,t,r,n))),s}}function QA(t,e,n,r){const i=e.get(de());n==null&&i!=null&&(n=N_(i,de()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=$A(r,o),h=t.operationForChild(o);h&&(s=s.concat(QA(h,a,u,c)))}),i&&(s=s.concat(P_(i,t,r,n))),s}function YA(t,e){return t.tagToQueryMap.get(e)}function XA(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function JA(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=FA(t.pendingWriteTree_,e);return P_(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new x_(n)}node(){return this.node_}}class D_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new D_(this.syncTree_,n)}node(){return KA(this.syncTree_,this.path_)}}const Xj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},p0=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zj(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},Zj=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eB=function(t,e,n,r){return O_(e,new D_(n,t),r)},tB=function(t,e,n){return O_(t,new x_(e),n)};function O_(t,e,n){const r=t.getPriority().val(),i=p0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=p0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,vt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ke(i))),o.forEachChild(wt,(a,u)=>{const c=O_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function L_(t,e){let n=e instanceof Ce?e:new Ce(e),r=t,i=se(n);for(;i!==null;){const s=Zs(r.node.children,i)||{children:{},childCount:0};r=new b_(i,r,s),n=Te(n),i=se(n)}return r}function Ro(t){return t.node.value}function ZA(t,e){t.node.value=e,um(t)}function e1(t){return t.node.childCount>0}function nB(t){return Ro(t)===void 0&&!e1(t)}function Yh(t,e){ln(t.node.children,(n,r)=>{e(new b_(n,t,r))})}function t1(t,e,n,r){n&&!r&&e(t),Yh(t,i=>{t1(i,e,!0,r)}),n&&r&&e(t)}function rB(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ml(t){return new Ce(t.parent===null?t.name:Ml(t.parent)+"/"+t.name)}function um(t){t.parent!==null&&iB(t.parent,t.name,t)}function iB(t,e,n){const r=nB(n),i=_r(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,um(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,um(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sB=/[\[\].#$\/\u0000-\u001F\u007F]/,oB=/[\[\].#$\u0000-\u001F\u007F]/,_f=10*1024*1024,n1=function(t){return typeof t=="string"&&t.length!==0&&!sB.test(t)},aB=function(t){return typeof t=="string"&&t.length!==0&&!oB.test(t)},lB=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),aB(t)},r1=function(t,e,n){const r=n instanceof Ce?new B4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vi(r));if(typeof e=="function")throw new Error(t+"contains a function "+vi(r)+" with contents = "+e.toString());if(nA(e))throw new Error(t+"contains "+e.toString()+" "+vi(r));if(typeof e=="string"&&e.length>_f/3&&Ch(e)>_f)throw new Error(t+"contains a string greater than "+_f+" utf8 bytes "+vi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!n1(o)))throw new Error(t+" contains an invalid key ("+o+") "+vi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);z4(r,o),r1(t,a,r),$4(r)}),i&&s)throw new Error(t+' contains ".value" child '+vi(r)+" in addition to actual children.")}},uB=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!n1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lB(n))throw new Error(XD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hB(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!CA(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function is(t,e,n){hB(t,n),dB(t,r=>gn(r,e)||gn(e,r))}function dB(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(fB(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fB(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ka&&yt("event: "+n.toString()),bl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pB="repo_interrupt",mB=25;class gB{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cB,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jc(),this.transactionQueueTree_=new b_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _B(t,e,n){if(t.stats_=E_(t.repoInfo_),t.forceRestClient_||h4())t.server_=new Xc(t.repoInfo_,(r,i,s,o)=>{m0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>g0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sr(t.repoInfo_,e,(r,i,s,o)=>{m0(t,r,i,s,o)},r=>{g0(t,r)},r=>{vB(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_4(t.repoInfo_,()=>new gj(t.stats_,t.server_)),t.infoData_=new hj,t.infoSyncTree_=new f0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Gh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),M_(t,"connected",!1),t.serverSyncTree_=new f0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);is(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function yB(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function i1(t){return Xj({timestamp:yB(t)})}function m0(t,e,n,r,i){t.dataUpdateCount++;const s=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Oc(n,c=>vt(c));o=Yj(t.serverSyncTree_,s,u,i)}else{const u=vt(n);o=Qj(t.serverSyncTree_,s,u,i)}else if(r){const u=Oc(n,c=>vt(c));o=Gj(t.serverSyncTree_,s,u)}else{const u=vt(n);o=Gh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=U_(t,s)),is(t.eventQueue_,a,o)}function g0(t,e){M_(t,"connected",e),e===!1&&EB(t)}function vB(t,e){ln(e,(n,r)=>{M_(t,n,r)})}function M_(t,e,n){const r=new Ce("/.info/"+e),i=vt(n);t.infoData_.updateSnapshot(r,i);const s=Gh(t.infoSyncTree_,r,i);is(t.eventQueue_,r,s)}function wB(t){return t.nextWriteId_++}function EB(t){s1(t,"onDisconnectEvents");const e=i1(t),n=Jc();nm(t.onDisconnect_,de(),(i,s)=>{const o=eB(i,s,t.serverSyncTree_,e);DA(n,i,o)});let r=[];nm(n,de(),(i,s)=>{r=r.concat(Gh(t.serverSyncTree_,i,s));const o=CB(t,i);U_(t,o)}),t.onDisconnect_=Jc(),is(t.eventQueue_,de(),r)}function TB(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pB)}function s1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function o1(t,e,n){return KA(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function V_(t,e=t.transactionQueueTree_){if(e||Xh(t,e),Ro(e)){const n=l1(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IB(t,Ml(e),n)}else e1(e)&&Yh(e,n=>{V_(t,n)})}function IB(t,e,n){const r=n.map(c=>c.currentWriteId),i=o1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=nn(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{s1(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ps(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Xh(t,L_(t.transactionQueueTree_,e)),V_(t,t.transactionQueueTree_),is(t.eventQueue_,e,h);for(let m=0;m<d.length;m++)bl(d[m])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qt("transaction at "+u.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}U_(t,e)}},o)}function U_(t,e){const n=a1(t,e),r=Ml(n),i=l1(t,n);return SB(t,i,r),r}function SB(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=nn(n,u.path);let h=!1,d;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,d=u.abortReason,i=i.concat(Ps(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=mB)h=!0,d="maxretry",i=i.concat(Ps(t.serverSyncTree_,u.currentWriteId,!0));else{const m=o1(t,u.path,o);u.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){r1("transaction failed: Data returned ",_,u.path);let v=vt(_);typeof _=="object"&&_!=null&&_r(_,".priority")||(v=v.updatePriority(m.getPriority()));const N=u.currentWriteId,I=i1(t),E=tB(v,m,I);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=E,u.currentWriteId=wB(t),o.splice(o.indexOf(N),1),i=i.concat(Kj(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(Ps(t.serverSyncTree_,N,!0))}else h=!0,d="nodata",i=i.concat(Ps(t.serverSyncTree_,u.currentWriteId,!0))}is(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Xh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)bl(r[a]);V_(t,t.transactionQueueTree_)}function a1(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&Ro(r)===void 0;)r=L_(r,n),e=Te(e),n=se(e);return r}function l1(t,e){const n=[];return u1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function u1(t,e,n){const r=Ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yh(e,i=>{u1(t,i,n)})}function Xh(t,e){const n=Ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ZA(e,n.length>0?n:void 0)}Yh(e,r=>{Xh(t,r)})}function CB(t,e){const n=Ml(a1(t,e)),r=L_(t.transactionQueueTree_,e);return rB(r,i=>{yf(t,i)}),yf(t,r),t1(r,i=>{yf(t,i)}),n}function yf(t,e){const n=Ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ps(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ZA(e,void 0):n.length=s+1,is(t.eventQueue_,Ml(e),i);for(let o=0;o<r.length;o++)bl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RB(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AB(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const _0=function(t,e){const n=kB(t),r=n.namespace;n.domain==="firebase.com"&&qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||r4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new p4(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ce(n.pathString)}},kB=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=RB(t.substring(h,d)));const m=AB(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:TA(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const e=n0(this._queryParams),n=v_(e);return n==="{}"?"default":n}get _queryObject(){return n0(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof F_))return!1;const n=this._repo===e._repo,r=CA(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+j4(this._path)}}class Ao extends F_{constructor(e,n){super(e,n,new C_,!1)}get parent(){const e=SA(this._path);return e===null?null:new Ao(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Hj(Ao);qj(Ao);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB="FIREBASE_DATABASE_EMULATOR_HOST",cm={};let NB=!1;function xB(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_0(s,i),a=o.repoInfo,u;typeof process<"u"&&VE&&(u=VE[PB]),u?(s=`http://${u}?ns=${a.namespace}`,o=_0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new f4(t.name,t.options,e);uB("Invalid Firebase Database URL",o),re(o.path)||qi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=OB(a,t,c,new d4(t.name,n));return new bB(h,t)}function DB(t,e){const n=cm[e];(!n||n[t.key]!==t)&&qi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TB(t),delete n[t.key]}function OB(t,e,n,r){let i=cm[e.name];i||(i={},cm[e.name]=i);let s=i[t.toURLString()];return s&&qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new gB(t,NB,n,r),i[t.toURLString()]=s,s}class bB{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_B(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DB(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LB(t){XF(li),ei(new hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xB(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),sn(UE,FE,t),sn(UE,FE,"esm2017")}sr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LB();const Vl=()=>{const[t,e]=F.useState(null),[n,r]=F.useState(null),[i,s]=F.useState(!1),o=Jt(),a=async h=>{e(null),r(!0);try{const d=await tL(Ru,h.email,h.password);return console.log(d),r(!1),d}catch(d){console.log(d),console.log(d.message),console.log(typeof d.message);let m;d.message.includes("invalid-credential")?m="Usuário ou senha incorreta.":d.message.includes("wrong-password")?m="Senha incorreta.":m="Houve um erro, por favor tente mais tarde.",e(m),r(!1)}},u=async h=>{if(!n){e(null),r(!0);try{const{user:d}=await eL(Ru,h.email,h.password);if(d){const m=await u_(Io(Cn,"users"),{avatarURL:d.photoURL,uid:d.uid,name:h.name,id:d.uid,createdAt:new Date(Date.now()).toLocaleString()});console.log(m)}return await rL(d,{displayName:h.name}),r(!1),d}catch(d){console.log(d),console.log(typeof d.message);let m;d.message.includes("Password")?m="A senha precisa conter pelo menos 6 caracteres.":d.message.includes("email-already")?m="Email já cadastrado.":m="Houve um erro, por favor tente mais tarde.",e(m),r(!1)}}},c=()=>{aL(Ru),o(Cp(null))};return F.useEffect(()=>()=>s(!0),[]),{auth:Ru,login:a,createUser:u,error:t,loading:n,logOut:c}},c1="/portfolio/logo_wallpaper.svg",MB="_register_q1j12_1",VB={register:MB},UB=({setAuthPage:t})=>{const e={backgroundImage:`url(${c1})`,backgroundRepeat:"repeat",backgroundSize:"100px",backgroundPosition:"center"},[n,r]=F.useState({name:"",email:"",password:""}),{createUser:i,error:s}=Vl(),o=async a=>{a.preventDefault(),console.log(n),!(!n.email||!n.email||!n.name)&&await i(n)};return w.jsx("div",{style:e,className:VB.register,children:w.jsxs("form",{onSubmit:o,children:[w.jsx("h2",{children:"Crie sua conta."}),w.jsx("input",{placeholder:"Name",type:"text",onChange:a=>r({...n,name:a.target.value}),value:n.name||"",autoComplete:"name"}),w.jsx("input",{placeholder:"E-mail",type:"email",onChange:a=>r({...n,email:a.target.value}),value:n.email||"",autoComplete:"email"}),w.jsx("input",{placeholder:"Password",type:"password",onChange:a=>r({...n,password:a.target.value}),value:n.password||"",autoComplete:"current-password"}),w.jsx("button",{children:"Enviar"}),s&&w.jsx("p",{className:"error",children:s}),w.jsx("div",{children:w.jsx("span",{onClick:()=>t("login"),children:"Entrar na conta existente"})})]})})},FB="_login_1802d_1",jB={login:FB},BB=({setAuthPage:t})=>{const e={backgroundImage:`url(${c1})`,backgroundRepeat:"repeat",backgroundSize:"100px",backgroundPosition:"center"},[n,r]=F.useState({email:"",password:""}),{login:i,error:s}=Vl(),o=async a=>{a.preventDefault(),console.log(n),!(!n.email||!n.email)&&await i(n)};return w.jsx("div",{style:e,className:jB.login,children:w.jsxs("form",{onSubmit:o,children:[w.jsx("h2",{children:"Insira seus dados para poder entrar."}),w.jsx("input",{placeholder:"E-mail",type:"email",onChange:a=>r({...n,email:a.target.value}),value:n.email||"",autoComplete:"email"}),w.jsx("input",{placeholder:"Senha",type:"password",onChange:a=>r({...n,password:a.target.value}),value:n.password||"",autoComplete:"current-password"}),w.jsx("button",{children:"Enviar"}),s&&w.jsx("p",{className:"error",children:s}),w.jsx("div",{className:"change_auth_page",children:w.jsx("span",{onClick:()=>t("register"),children:"Criar conta."})})]})})},zB="/portfolio/ghost_icon.svg",$B="/portfolio/search_icon.svg",h1="/portfolio/return.svg",WB={rooms:[],room:null},d1=yl({name:"room",initialState:WB,reducers:{setRooms:(t,e)=>{t.rooms=e.payload},setRoom:(t,e)=>{t.room=e.payload}}}),{setRoom:Ci,setRooms:y0}=d1.actions,HB=d1.reducer,qB="/portfolio/logo.svg",KB="/portfolio/lih_logo.svg";function f1(t){return new Promise(e=>{const n=new FileReader;n.addEventListener("load",()=>e(n.result),!1),n.readAsDataURL(t)})}const v0=async t=>{try{const e=So(Cn,"users",t.id),n=await l_(e,t)}catch(e){console.log(e)}},Ws=()=>window.innerWidth<=700,GB={mobile_settings:{mode:"menu",viewport:"not-mobile"},apps:{chat:{id:2,name:"chat",zIndex:20,icon:qB,minimized:!1,fullscreen:!1,open:!1,appRect:void 0,elementId:"chatId",drag_elements:["chatDraggableElementId"],storedStyle:void 0,width:800,height:600,top:void 0,right:void 0,bottom:void 0,left:void 0,page:"rooms",size_class:""},lih:{id:1,name:"lih",zIndex:30,icon:KB,minimized:!1,fullscreen:!1,open:!1,appRect:void 0,elementId:"letItHappen",drag_elements:["draggable1"],storedStyle:void 0,width:560,height:350,top:void 0,right:void 0,bottom:void 0,left:void 0,page:"",size_class:""}}},w0=(t,e)=>{const n=Object.keys(t.apps),i=n.length*10,s=10,o=t.apps[e.payload];o.zIndex!==i&&n.map(a=>{if(t.apps[a].id===o.id)t.apps[a].zIndex=i;else{if(t.apps[a].zIndex===s)return;t.apps[a].zIndex=t.apps[a].zIndex-10}})},p1=yl({name:"app",initialState:GB,reducers:{openApp:(t,e)=>{const n=t.apps[e.payload];t.apps[e.payload]={...n,open:!0,minimized:!1}},closeApp:(t,e)=>{const n=t.apps[e.payload];t.apps[e.payload]={...n,open:!1,minimized:!1}},minimizeApp:(t,e)=>{const n=t.apps[e.payload];n.minimized=!0},showApp:(t,e)=>{const n=t.apps[e.payload];n.minimized=!1,t.mobile_settings.mode="fullsized_app",w0(t,e)},minimizeMost:(t,e)=>{const n=Object.keys(t.apps),r=e.payload;n.map(i=>{!t.apps[i].name==r&&(t.apps[i].minimized=!0,t.apps[i].fullscreen=!1)})},minimizeAll:(t,e)=>{const n=Object.keys(t.apps);t.mobile_settings.mode="menu",n.map(r=>{t.apps[r].fullscreen&&(t.apps[r].fullscreen=!1),t.apps[r].minimized=!0})},setAppFullscreen:(t,e)=>{const{app:n}=e.payload;Object.keys(t.apps).map(u=>{!t.apps[u].name==n.name&&(t.apps[u]={...t.apps[u],fullscreen:!1,minimized:t.apps[u].minimized?!0:Ws()})});const{name:i,elementId:s}=n,o=document.getElementById(s),a=o.getAttribute("style");t.apps[i]={...t.apps[i],storedStyle:a,fullscreen:!0,minimized:!1},t.mobile_settings.mode="fullsized_app",o.removeAttribute("style")},unsetAppFullscreen:(t,e)=>{const{app:n}=e.payload;document.getElementById(n.elementId).setAttribute("style",t.apps[n.name].storedStyle),t.apps[n.name]={...t.apps[n.name],storedStyle:void 0,fullscreen:!1,minimized:Ws()}},setMobileMode:(t,e)=>{t.mobile_settings.mode=e.payload},handleAppsZIndex:(t,e)=>{w0(t,e)},updateAppRect:(t,e)=>{const n=e.payload.appRect,r=t.apps[e.payload.name];t.apps[e.payload.name]={...r,...n},n!=null&&(n.width<=390&&(t.apps[e.payload.name].size_class=" sm"),n.width>390&&n.width<700&&(t.apps[e.payload.name].size_class=" md"),n.width>700&&(t.apps[e.payload.name].size_class=""))},setPage:(t,e)=>{const{name:n,page:r}=e.payload;t.apps[n].page=r},setSizeClass:(t,e)=>{const{name:n,sizeClass:r}=e.payload;t.apps[n].size_class=r}}}),{openApp:QB,closeApp:YB,minimizeApp:m1,showApp:g1,minimizeMost:J3,minimizeAll:Zu,setAppFullscreen:vf,unsetAppFullscreen:Pu,setMobileMode:Ri,handleAppsZIndex:XB,updateAppRect:JB,setPage:nh,setSizeClass:E0}=p1.actions,ZB=p1.reducer,e3=()=>{const{logOut:t}=Vl(),{users:e}=ze(h=>h.user),{user:n}=ze(h=>h.user),{rooms:r}=ze(h=>h.room);F.useState(!1);const[i,s]=F.useState(!1),o=Jt();F.useEffect(()=>{},[n,e]),F.useEffect(()=>{const h=()=>{if(e===void 0||e.length===0)return;o(Ci(null)),o(y0([])),s(!0);const d=Io(Cn,"rooms"),m=s_(d,PR("users","array-contains",n.uid));c_(m,_=>{o(y0(_.docs.map(v=>{const P=v.data().users.find(N=>N!==n.uid);if(P){const N=e.find(I=>I.uid===P);return{...v.data(),id:v.id,name:N.name,userId:N.uid,roomImage:N.avatarURL}}return{...v.data(),id:v.id,name:n.name,userId:n.uid,roomImage:n.avatarURL}}))),s(!1)})};return()=>{h()}},[e]);const a=h=>{if(r){const d=r.find(m=>m.userId===h.uid);if(!d){o(Ci({name:h.name,users:[h.uid,n.uid],empty:!0}));return}o(Ci(d))}},u=()=>{document.querySelector(".chat_app").classList.toggle("show_user_section")},c=h=>{o(nh({name:"chat",page:"chat"})),o(Ci(h))};return i?w.jsx("p",{children:"loading..."}):w.jsxs("div",{className:"rooms_and_users",children:[w.jsxs("div",{className:"options",children:[w.jsx("button",{className:"profile_btn",onClick:()=>u(),children:w.jsx("img",{src:Vs,alt:"user icon"})}),w.jsx("button",{className:"logout_btn",onClick:()=>t(),children:w.jsx("img",{src:YI,alt:"log out icon"})}),w.jsxs("form",{className:"search_room_form",children:[w.jsx("input",{type:"text",placeholder:"Search"}),w.jsx("img",{src:$B,alt:"search icon"})]})]}),w.jsxs("div",{className:"rooms",children:[w.jsx("div",{className:"rooms_header",children:"Histórico de conversas"}),r&&r.length>0?r.map((h,d)=>w.jsxs("div",{className:"room",onClick:()=>c(h),children:[w.jsx("div",{className:"avatar",children:h.roomImage==null?w.jsx("img",{src:Vs,alt:"user icon"}):w.jsx("img",{src:h.roomImage,alt:"user icon"})}),w.jsxs("div",{className:"room_info",children:[w.jsx("span",{className:"username",children:h.name}),w.jsx("span",{className:"last_message",children:h.lastMessage})]}),w.jsx("span",{className:"time",children:h.time})]},d)):w.jsxs("div",{className:"no_rooms",children:[w.jsx("h3",{children:"Nenhuma mensagem..."}),w.jsx("img",{src:zB,alt:"No messages ilustrator"}),w.jsx("p",{children:"Você ainda não iniciou uma conversa, não seja tímido, mande uma mensagem de texto ou áudio pra seus amigos."})]})]}),w.jsxs("div",{className:"users",children:[w.jsx("div",{className:"users_header",children:"Users"}),e&&e.map((h,d)=>w.jsxs("div",{className:"user",onClick:()=>a(h),children:[w.jsx("div",{className:"avatar",children:h.avatarURL==null?w.jsx("img",{src:Vs,alt:"user icon"}):w.jsx("img",{src:h.avatarURL,alt:"user icon"})}),w.jsxs("div",{className:"user_info",children:[w.jsx("span",{className:"username",children:h.name}),w.jsx("span",{className:"last_message"})]}),w.jsx("span",{className:"time",children:"3 pm"})]},d))]})]})},t3=F.memo(e3),n3="/portfolio/dialog_1.svg",r3="/portfolio/dialog_2.svg",i3="/portfolio/dialog_3.svg",s3={messages:[],staus:null,message:null,newMessageText:"",handlingMessage:{status:null,message:null},image:{file:null,dataURL:null}},_1=yl({name:"message",initialState:s3,reducers:{setMessages:(t,e)=>{t.messages=e.payload},setNewMessageText:(t,e)=>{t.newMessageText=e.payload},setHandlingMessage:(t,e)=>{const{status:n,message:r}=e.payload;t.handlingMessage={status:n,message:r}},setImage:(t,e)=>{const{file:n,dataURL:r}=e.payload;t.image={file:n,dataURL:r},console.log(t.image.file)},resetMessages:t=>{t.messages=[]}}}),{setMessages:T0,setNewMessageText:ps,setHandlingMessage:Ns,resetMessages:Z3,setImage:e9}=_1.actions,o3=_1.reducer,I0=async t=>{try{const e=await u_(Io(Cn,"rooms"),t);return console.log(e),e}catch(e){console.log(e)}},a3=async(t,e)=>{try{const n=So(Cn,"rooms",t);await l_(n,e)}catch(n){console.log(n)}},l3=async t=>{try{await bR(So(Cn,"rooms",t.id))}catch(e){console.log(e)}},u3=t=>{const e=Jt();F.useEffect(()=>{if(!t||t.empty)return;const n=Io(Cn,"messages"),r=s_(n,PR("roomId","==",t.id),NR("createdAt","desc"));return c_(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));if(s.length===0){l3(t),e(Ci(null));return}e(T0(s))}),()=>{e(T0([]))}},[t])},c3="/portfolio/mic.svg",h3="/portfolio/clip_shadow_light.svg",d3="/portfolio/paper_plane.svg",f3="/portfolio/loading_circle.svg";var et=[];for(var wf=0;wf<256;++wf)et.push((wf+256).toString(16).slice(1));function p3(t,e=0){return(et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]).toLowerCase()}var Nu,m3=new Uint8Array(16);function g3(){if(!Nu&&(Nu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Nu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Nu(m3)}var _3=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const S0={randomUUID:_3};function y3(t,e,n){if(S0.randomUUID&&!e&&!t)return S0.randomUUID();t=t||{};var r=t.random||(t.rng||g3)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,p3(r)}const Ef=async t=>{await u_(Io(Cn,"messages"),t)},y1=async(t,e)=>{try{const n=XR(JR,t+e.name+"_"+y3()),r=await LF(n,e);return await MF(r.ref)}catch(n){console.log(n)}},hm=async t=>{try{const e=XR(JR,t);await VF(e)}catch(e){console.log(e)}},v3=async t=>{try{const e=So(Cn,"messages",t.id);await l_(e,t)}catch(e){console.log(e)}},w3=async t=>{await bR(So(Cn,"messages",t))},E3=({data:t,userId:e,cancel:n})=>w.jsxs("div",{className:t.status?"message_handle show":"message_handle",children:[w.jsx("span",{className:"cancel",onClick:()=>n(),children:"✖"}),w.jsx("span",{className:"message_from_chat",children:t.status==="replying"?w.jsx(w.Fragment,{children:t.message.userId===e?"Replying to your message: ":"Replying to the message: "}):"Editing your message..."}),w.jsx("span",{children:t.message.text})]}),T3=()=>{const{user:t}=ze(_=>_.user),{room:e}=ze(_=>_.room),{newMessageText:n,handlingMessage:r}=ze(_=>_.message),[i,s]=F.useState({file:null,dataURL:null}),[o,a]=F.useState(!1),u=Jt(),c=async()=>{const _=await I0({users:e.users,createdAt:new Date(Date.now()).toLocaleString(),lastMessage:""});await Ef({text:n.trim(),userId:t.uid,roomId:_.id,imageURL:"",replyingTo:"",createdAt:new Date(Date.now()).toLocaleString()}),u(Ci({users:e.users,id:_.id,lastMessage:n.trim(),name:e.name})),u(ps(""))},h=async()=>{if(r.status==="editing")return;let _;e.empty&&(_=await I0({users:e.users,createdAt:new Date(Date.now()).toLocaleString(),lastMessage:""}));const v=await y1("message_images/",i.file),P={text:n.trim(),userId:t.uid,roomId:_==null?e.id:_.id,imageURL:v,replyingTo:r.status==="replying"?r.message:"",createdAt:new Date(Date.now()).toLocaleString()};await Ef(P),s({file:null,dataURL:null}),r.status==="replying"&&u(Ns({status:null,message:null})),_!=null&&u(Ci({users:e.users,id:_.id,lastMessage:"",name:e.name})),u(ps(""))},d=async _=>{if(_.preventDefault(),i.file){if(o)return;a(!0),await h(),a(!1);return}if(n){if(e.empty){c();return}if(r.status==="editing"){await v3({...r.message,text:n.trim(),edited:!0}),u(Ns({status:null,message:null})),u(ps(""));return}await Ef({text:n.trim(),userId:t.uid,roomId:e.id,imageURL:"",replyingTo:r.status==="replying"?r.message:"",createdAt:new Date(Date.now()).toLocaleString()}),await a3(e.id,{lastMessage:n.trim()}),r.status==="replying"&&u(Ns({status:null,message:null})),u(ps(""))}},m=async _=>{if(_.preventDefault(),console.log(_),_.target.files&&_.target.files.length>0){const v=_.target.files[0];let P=await f1(v);console.log(P),s({file:v,dataURL:P}),_.target.value=null}};return w.jsx("div",{className:r.status?"send_message handling_message":"send_message",children:w.jsxs("div",{className:"send_message_box",children:[r.status&&w.jsx(E3,{data:r,userId:t.uid,cancel:()=>u(Ns({status:null,message:null}))}),w.jsxs("div",{className:"send_message_options",children:[i.dataURL?w.jsxs("div",{className:"image_preview",children:[w.jsx("img",{src:i.dataURL,alt:"send picture"}),w.jsx("div",{className:"close",onClick:()=>s({file:null,dataURL:null}),children:"✕"})]}):w.jsxs("label",{children:[w.jsx("div",{className:"select-files",children:w.jsx("img",{src:h3,alt:"abubleh"})}),w.jsx("input",{type:"file",name:"image",accept:"image/png, image/jpg, image/gif, image/jpeg",onChange:_=>m(_)})]}),w.jsx("input",{type:"text",onChange:_=>u(ps(_.target.value)),className:"message_input",value:n||"",placeholder:"Type a new message"}),w.jsx("button",{className:"record",children:w.jsx("img",{src:c3,alt:"abubleh"})}),o==!0?w.jsx("div",{className:"loading",children:w.jsx("img",{src:f3,alt:"loading icon"})}):w.jsx("button",{className:"send",onClick:d,children:w.jsx("img",{src:d3,alt:"enviar"})})]})]})})},I3="/portfolio/more_icon.svg",S3=({message:t,user:e})=>{const n=Jt(),r=s=>{const o=document.getElementById(`message_options${s}`),a=document.getElementById(`message_btn${s}`);o.classList.toggle("show");const u=c=>{(c.target!==a||o.contains(c.target))&&(o.classList.toggle("show"),document.removeEventListener("click",u))};document.addEventListener("click",u)},i=async s=>{s.imageURL!=""&&await hm(s.imageURL),w3(s.id)};return w.jsxs("div",{className:t.userId==e.uid?"message_right":"message_left",children:[w.jsxs("div",{className:"message_box",children:[t.replyingTo!==""?w.jsx(w.Fragment,{children:t.replyingTo.userId===e.uid?w.jsxs("div",{className:"message_reference",children:[w.jsx("span",{children:"Replying to your own message:"}),t.replyingTo.imageURL!=""?w.jsx("div",{className:"message_reference_image",children:w.jsx("img",{src:t.replyingTo.imageURL,alt:"image message",width:"50px"})}):"",t.replyingTo.text!=""?w.jsx("div",{className:"sent_message_left",children:t.replyingTo.text}):""]}):w.jsxs("div",{className:"message_reference",children:[w.jsx("span",{children:"Replying to this message:"}),t.replyingTo.imageURL!=""?w.jsx("div",{className:"message_reference_image",children:w.jsx("img",{src:t.replyingTo.imageURL,alt:"image message",width:"50px"})}):"",t.replyingTo.text!=""?w.jsx("div",{className:"sent_message_right",children:t.replyingTo.text}):""]})}):"",t.edited?w.jsx("span",{className:"edited_tag",children:"Edited"}):"",t.imageURL!=""?w.jsx("div",{className:"image_message",children:w.jsx("img",{src:t.imageURL,alt:"message image",width:"200px"})}):"",t.text!=""?w.jsx("div",{className:"message",children:t.text}):""]}),w.jsxs("div",{className:"message_btn",children:[w.jsx("button",{id:`message_btn${t.id}`,onClick:()=>r(t.id),children:w.jsx("img",{src:I3,alt:"more icon"})}),w.jsxs("div",{id:`message_options${t.id}`,className:"message_options",children:[w.jsx("button",{onClick:()=>n(Ns({status:"replying",message:t})),children:"reply"}),t.userId===e.uid?w.jsxs(w.Fragment,{children:[w.jsx("button",{onClick:()=>{n(ps(t.text)),n(Ns({status:"editing",message:t}))},children:"edit"}),w.jsx("button",{onClick:()=>i(t),children:"delete"})]}):""]})]})]})},C3=()=>{const{messages:t}=ze(i=>i.message),{room:e}=ze(i=>i.room),{user:n}=ze(i=>i.user),r=Jt();return F.useEffect(()=>{console.log(t)},[t]),u3(e),w.jsx("div",{className:"chat",children:e?w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"header",children:[w.jsx("div",{className:"return_btn",children:w.jsx("button",{onClick:()=>r(nh({name:"chat",page:"rooms"})),children:w.jsx("img",{src:h1,alt:"return icon"})})}),w.jsx("div",{className:"avatar",children:e.roomImage==null?w.jsx("img",{src:Vs,alt:"user icon"}):w.jsx("img",{src:e.roomImage,alt:"user icon"})}),w.jsx("span",{className:"username",children:e.name})]}),w.jsx("div",{className:"messages",children:e.empty?w.jsx("div",{className:"current_messages",children:"vazioooor"}):w.jsx(w.Fragment,{children:w.jsx("div",{className:"previous_messages",children:t&&t.map((i,s)=>w.jsx(S3,{message:i,user:n},s))})})}),w.jsx(T3,{})]}):w.jsx(w.Fragment,{children:w.jsxs("div",{className:"no_chat",children:[w.jsxs("div",{className:"no_chat_text",children:[w.jsx("h3",{children:"Conecte-se com seus amigos, inicie uma conversa"}),w.jsx("p",{children:"Envie mensagens de texto, compartilhe fotos e muito mais..."})]}),w.jsx("div",{className:"no_chat_icon_right",children:w.jsx("img",{src:i3,className:"dialog_bigger",alt:"dialog picture"})}),w.jsx("div",{className:"no_chat_icon_left",children:w.jsx("img",{src:r3,alt:"dialog picture"})}),w.jsx("div",{className:"no_chat_icon_right",children:w.jsx("img",{src:n3,alt:"dialog picture"})})]})})})},R3=(t,e="main")=>{const r=v=>v*window.innerHeight/100,i=v=>v*window.innerWidth/100,s=F.useRef({startWidth:800,startHeight:600,lastWidth:null,lastHeight:null}),o=()=>window.innerWidth<=700,a=F.useRef(null),[u,c]=F.useState(null),h=F.useRef({status:!1,element:null}),d=F.useRef({startX:0,startY:0,lastX:0,lastY:0}),m=["upLeft","up","upRight","left","right","downRight","down","downLeft"],_=Jt();return F.useEffect(()=>{const v=document.getElementById(t.elementId),P=document.getElementById(e);if(!v||!P)return;m.map(T=>{const x=document.createElement("div");x.setAttribute("class",T),x.setAttribute("id",T),x.setAttribute("data-parent",t.elementId),v.appendChild(x)});const N=(T,x)=>{const R=window.innerWidth,ye=window.innerHeight;let Nt=T,Rn=x;T>R&&(Nt=i(90)),x>ye&&(Rn=r(80)),v.style.left=`${(R-Nt)/2}px`,v.style.top=`${(ye-Rn)/2}px`,v.style.width=Nt+"px",v.style.height=Rn+"px",c({width:Nt,height:Rn})},I=()=>{if(!o()&&v){const{lastWidth:T,lastHeight:x,startHeight:R,startWidth:ye}=s.current;T&&x?N(T,x):N(ye,R)}},E=()=>{if(o()){if(c({width:window.innerWidth,height:window.innerHeight}),a.current==!0)return;a.current=!0,v.removeAttribute("style");return}else{a.current=!1,I();return}};E();const S=()=>{o()||_(Zu()),E()},D=()=>!(v.classList.contains("fullscreen")||o()),M={upRight:T=>{const{width:x,height:R,top:ye,left:Nt}=v.getBoundingClientRect();v.style.width=x+(d.current.startX-T.clientX)+"px",v.style.height=R+(d.current.startY-T.clientY)+"px",v.style.top=ye-(d.current.startY-T.clientY)+"px",v.style.left=Nt-(d.current.startX-T.clientX)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},up:T=>{const{height:x,top:R}=v.getBoundingClientRect();v.style.height=x+(d.current.startY-T.clientY)+"px",v.style.top=R-(d.current.startY-T.clientY)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},upLeft:T=>{const{width:x,height:R,top:ye}=v.getBoundingClientRect();v.style.width=x-(d.current.startX-T.clientX)+"px",v.style.height=R+(d.current.startY-T.clientY)+"px",v.style.top=ye-(d.current.startY-T.clientY)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},left:T=>{const{width:x,left:R}=v.getBoundingClientRect();v.style.width=x+(d.current.startX-T.clientX)+"px",v.style.left=R-(d.current.startX-T.clientX)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},right:T=>{const{width:x,right:R}=v.getBoundingClientRect();v.style.width=x-(d.current.startX-T.clientX)+"px",v.style.right=R-(d.current.startX-T.clientX)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},downRight:T=>{const{width:x,height:R,left:ye}=v.getBoundingClientRect();v.style.width=x+(d.current.startX-T.clientX)+"px",v.style.height=R-(d.current.startY-T.clientY)+"px",v.style.left=ye-(d.current.startX-T.clientX)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},down:T=>{const{height:x}=v.getBoundingClientRect();v.style.height=x-(d.current.startY-T.clientY)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},downLeft:T=>{const{width:x,height:R}=v.getBoundingClientRect();v.style.width=x-(d.current.startX-T.clientX)+"px",v.style.height=R-(d.current.startY-T.clientY)+"px",d.current.startX=T.clientX,d.current.startY=T.clientY},drag:T=>{const x=T.clientX-d.current.startX+d.current.lastX,R=T.clientY-d.current.startY+d.current.lastY;v.style.top=`${R}px`,v.style.left=`${x}px`}},U=T=>{if(!D())return;const x=T.target.dataset.parent;if(m.includes(T.target.id)&&x===t.elementId)h.current={status:!0,element:T.target.id},d.current.startX=T.clientX,d.current.startY=T.clientY;else if(t.drag_elements&&t.drag_elements.includes(T.target.id)){h.current={status:!0,element:"drag"},d.current.startX=T.clientX,d.current.startY=T.clientY;const{x:R,y:ye}=v.getBoundingClientRect();d.current.lastX=R,d.current.lastY=ye}P.addEventListener("mousemove",A)},C=()=>{D()&&(h.current={status:!1,element:null},d.current.lastX=v.offsetLeft,d.current.lastY=v.offsetTop,P.removeEventListener("mousemove",A))},y=()=>{h.current.status||(h.current={status:!1,element:null})},A=T=>{if(!D()||!h.current.status)return;M[h.current.element](T);const{width:x,height:R}=window.getComputedStyle(v);c({width:parseFloat(x),height:parseFloat(R)}),s.current.lastWidth=parseFloat(x),s.current.lastHeight=parseFloat(R)};return P.addEventListener("mousedown",U),P.addEventListener("mouseup",C),v.addEventListener("mouseleave",y),window.addEventListener("resize",S),()=>{P.removeEventListener("mousedown",U),P.removeEventListener("mouseup",C),P.removeEventListener("mousemove",A),v.removeEventListener("mouseleave",C),window.removeEventListener("resize",S),document.querySelectorAll(`[data-parent=${t.elementId}]`).forEach(x=>{v.removeChild(x)})}},[]),{windowData:u}},v1=({app:t,children:e})=>{const n=F.useRef(null),{apps:r,mobile_settings:i}=ze(d=>d.app);t.width,t.height;const{windowData:s}=R3(t),o=Jt();F.useEffect(()=>{o(JB({name:t.name,appRect:s}))},[s]),F.useEffect(()=>{Ws()&&!t.minimized&&!t.fullscreen&&o(vf({app:t}))},[t]);const a=()=>{if(t.fullscreen){o(Pu({app:t})),o(Ri("menu")),(Ws()||s.width<=700)&&o(E0({name:"chat",sizeClass:" md"}));return}o(vf({app:t})),Ws()||o(E0({name:"chat",sizeClass:""}))},u=()=>{t.fullscreen&&o(Pu({app:t})),o(m1(t.name)),o(Ri("menu"))},c=()=>{t.fullscreen&&o(Pu({app:t})),o(YB(t.name)),o(Ri("menu"))},h=()=>{if(Ri("fullsized_app"),window.innerWidth<700&&i.mode=="running_apps"){if(!t.fullscreen){o(vf({app:t}));return}o(Pu({app:t}))}};return t.elementId&&w.jsx("div",{ref:n,id:t.elementId,className:`window_element ${t.minimized?"":"showing"} ${t.fullscreen?"fullscreen":""}`,"data-value":t.name,style:{zIndex:r[t.name].zIndex},onMouseDown:()=>o(XB(t.name)),onClick:()=>h(),children:w.jsxs("div",{id:"squareContent",className:"squareContent",children:[w.jsxs("div",{className:"window-header",children:[w.jsx("div",{className:"custom-actions",children:w.jsx("button",{id:"test",children:t.name})}),w.jsx("div",{id:t.drag_elements[0],className:"draggable","data-window":t.elementId}),w.jsxs("div",{className:"basic-actions",children:[w.jsx("button",{className:"minimize",onClick:()=>u()}),w.jsx("button",{className:"full-screen",onClick:()=>a()}),w.jsx("button",{id:"close",onClick:()=>c(),className:"close"})]})]}),e]})})},w1=()=>{const{user:t,userAuthState:e}=ze(r=>r.user),n=Jt();F.useEffect(()=>{const r=()=>{if(!e)return;n(hw(void 0)),n(Cp(void 0)),console.log("aaaaa");const i=Io(Cn,"users"),s=s_(i,NR("createdAt","desc"));c_(s,o=>{const a=o.docs.map(u=>(u.data().uid==e.uid&&n(Cp({...t,...u.data()})),{id:u.id,...u.data()}));n(hw(a))})};return()=>{r()}},[e])},A3=()=>{const{users:t,user:e}=ze(s=>s.user);F.useState({file:null,dataURL:null});const n=()=>{document.querySelector(".chat_app").classList.toggle("show_user_section")},r=async s=>{if(s.preventDefault(),console.log(s),e.imageURL&&await hm(e.imageURL),s.target.files&&s.target.files.length>0){const o=s.target.files[0];await f1(o);const a=await y1("chat_profile/",o),u=t.find(c=>c.uid==e.uid);console.log(u),await v0({...u,avatarURL:a}),s.target.value=null}},i=async()=>{const s=t.find(o=>o.uid==e.uid);await hm(s.avatarURL),console.log(s),await v0({...s,avatarURL:null})};return w.jsxs("div",{className:"user_section",children:[w.jsx("div",{className:"return_btn",children:w.jsx("button",{onClick:()=>n(),children:w.jsx("img",{src:h1,alt:"return icon"})})}),w.jsx("label",{htmlFor:"user_settings_input_file",className:"avatar_profile",children:e.avatarURL?w.jsx("img",{src:e.avatarURL,alt:"user foto"}):w.jsx("img",{src:Vs,alt:"user icon"})}),w.jsxs("div",{className:"user_settings",children:[w.jsx("input",{type:"text",placeholder:e.name,disabled:!0}),w.jsxs("label",{children:[w.jsx("span",{children:"Insert picture"}),w.jsx("input",{id:"user_settings_input_file",type:"file",onChange:r})]}),w.jsx("span",{onClick:i,children:"Remove picture"})]})]})},k3=()=>{const{apps:t}=ze(o=>o.app),{room:e}=ze(o=>o.room),{logOut:n}=Vl(),{user:r}=ze(o=>o.user);w1();const i=Jt();F.useEffect(()=>{i(nh(e?{name:"chat",page:"chat"}:{name:"chat",page:"rooms"}))},[e]);const s=()=>{document.querySelector(".chat_app").classList.toggle("show_user_section")};return r&&w.jsxs("div",{className:`chat_app${t.chat.size_class}`,"data-page":t.chat.page,children:[w.jsx(A3,{}),w.jsxs("div",{className:"section_bar",children:[w.jsx("button",{onClick:()=>s(),children:w.jsx("img",{src:Vs,alt:"user icon"})}),w.jsx("button",{onClick:()=>n(),children:w.jsx("img",{src:YI,alt:"log out icon"})})]}),w.jsx(t3,{}),w.jsx(C3,{})]})},E1=()=>{const[t,e]=F.useState("login"),{apps:n}=ze(a=>a.app),{userAuthState:r}=ze(a=>a.user),i=Jt(),{auth:s}=Vl();return w1(),F.useEffect(()=>{console.log("chat useEffect"),oL(s,a=>{i(Xd(a?{name:a.displayName,email:a.email,avatarURL:a.photoURL,uid:a.uid}:null))})},[s,i,Xd]),r===void 0?w.jsx("p",{children:"Loading..."}):w.jsx(v1,{app:n.chat,children:r!=null?w.jsx(k3,{}):w.jsx(w.Fragment,{children:t=="login"?w.jsx(BB,{setAuthPage:e}):w.jsx(UB,{setAuthPage:e})})})},P3="/portfolio/network_icon.svg",N3="/portfolio/sound_icon.svg",ec="/portfolio/bluetooth_for_card.svg",x3="/portfolio/wifi_desktop_bar.svg",D3=()=>{const{apps:t,mobile_settings:e}=ze(h=>h.app),[n,r]=F.useState(new Date),i=Jt();F.useEffect(()=>{const h=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(h)},[]);const s=h=>h<10?`0${h}`:h,o=()=>{if(e.mode=="running_apps"){i(Ri("menu"));return}e.mode=="fullsized_app"&&(i(Zu()),i(Ri("menu")))},a=h=>{t[h].minimized?i(g1(h)):i(m1(h))},u=()=>{i(Zu())},c=()=>{i(Zu()),i(Ri("running_apps"))};return w.jsxs("div",{className:"taskbar",children:[w.jsxs("nav",{className:"mobile_nav",children:[w.jsxs("button",{className:"running_apps",onClick:()=>c(),children:[w.jsx("span",{}),w.jsx("span",{}),w.jsx("span",{})]}),w.jsx("button",{className:"home",onClick:()=>u()}),w.jsxs("button",{className:"back",onClick:o,children:[w.jsx("span",{}),w.jsx("span",{})]})]}),w.jsxs("div",{className:"tasks",children:[t.chat.open&&w.jsx("div",{onClick:()=>a(t.chat.name),className:"task",children:w.jsx("img",{src:t.chat.icon})}),t.lih.open&&w.jsx("div",{onClick:()=>a(t.lih.name),className:"task",children:w.jsx("img",{src:t.lih.icon})})]}),w.jsxs("div",{className:"desktop_status",children:[w.jsx("div",{className:"item bluetooth",children:w.jsx("img",{src:ec,alt:"bluetooh icon"})}),w.jsx("div",{className:"item wifi",children:w.jsx("img",{src:x3,alt:"wifi icon"})}),w.jsx("div",{className:"item",children:w.jsx("img",{src:N3,alt:"sound icon"})}),w.jsx("div",{className:"item",children:w.jsx("img",{src:P3,alt:"network icon"})}),w.jsxs("div",{className:"date",children:[w.jsxs("span",{children:[s(n.getHours()),":",s(n.getMinutes())]}),w.jsxs("span",{children:[s(n.getDate()),"/",s(n.getMonth()+1),"/",n.getFullYear()]})]}),w.jsx("span",{})]})]})},O3="/portfolio/battery.svg",b3="/portfolio/Reception.svg",L3="/portfolio/Wi-Fi.svg",M3="/portfolio/edit_white.svg",V3="/portfolio/power.svg",U3="/portfolio/engine.svg",F3="/portfolio/more_white.svg",Tf="/portfolio/wifi_for_card.svg",j3=()=>{const t=F.useRef(void 0),e=s=>s*window.innerHeight/100,n=s=>{const o=document.getElementById("notification"),a=document.getElementById("notification_edge"),u=o.classList.contains("active");if(!u&&s.touches[0].clientY<22||u&&s.target==a){t.current=s.touches[0].clientY,o.classList.add("peek"),window.addEventListener("touchmove",r);return}},r=s=>{const o=document.getElementById("notification");if(s.touches[0].clientY>e(73))return;const a=s.touches[0].clientY;o.style.height=a+"px"},i=s=>{window.removeEventListener("touchmove",r);const o=document.getElementById("notification"),a=o.classList.contains("active"),u=s.changedTouches[0].clientY;if(t.current<22&&u>90?(o.classList.remove("peek"),o.removeAttribute("style"),o.classList.add("active")):(o.classList.remove("peek"),o.removeAttribute("style")),a&&t.current<e(70)&&t.current>e(67)&&u<e(62)){o.classList.remove("active"),t.current=void 0;return}t.current=void 0};return F.useEffect(()=>{window.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchend",i,{passive:!0});const s=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("touchend",i),window.removeEventListener("touchmove",r)};return()=>s()},[]),w.jsxs("div",{id:"notification",className:"mobile_info_bar",children:[w.jsxs("div",{className:"status_bar",children:[w.jsx("span",{className:"hour",children:"10:50"}),w.jsxs("div",{className:"connection",children:[w.jsx("span",{children:w.jsx("img",{src:L3,alt:"wi-fi icon"})}),w.jsx("span",{children:w.jsx("img",{src:b3,alt:"reception icon"})}),w.jsx("span",{children:w.jsx("img",{src:O3,alt:"battery icon"})})]})]}),w.jsxs("div",{className:"features",children:[w.jsxs("section",{className:"first",children:[w.jsxs("div",{className:"date_card",children:[w.jsx("span",{className:"hour",children:"10:31"}),w.jsx("span",{className:"date",children:"Fri, Aug 30"})]}),w.jsxs("div",{className:"buttons",children:[w.jsx("button",{children:w.jsx("img",{src:M3,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:V3,alt:"power icon"})}),w.jsx("button",{children:w.jsx("img",{src:U3,alt:"engine icon"})}),w.jsx("button",{children:w.jsx("img",{src:F3,alt:"more icon"})})]})]}),w.jsx("section",{children:w.jsxs("div",{className:"all_feature_card",children:[w.jsx("button",{children:w.jsx("img",{src:Tf,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:ec,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:Tf,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:ec,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:Tf,alt:"edit icon"})}),w.jsx("button",{children:w.jsx("img",{src:ec,alt:"edit icon"})})]})}),w.jsx("section",{className:"brightness",children:w.jsx("div",{className:"brightness_input"})}),w.jsxs("section",{children:[w.jsx("div",{className:"feature_card_1_2"}),w.jsx("div",{className:"feature_card_1_2"})]})]}),w.jsx("div",{id:"notification_edge",className:"notification_edge"})]})},B3=({img:t,name:e,popUp:n,dragElementsId:r})=>r&&w.jsxs("div",{id:r[0],className:"shortcut",onClick:()=>n(),children:[w.jsx("img",{id:r[1],draggable:"false",src:t,alt:e}),w.jsx("span",{children:e})]}),z3=()=>{const{apps:t}=ze(e=>e.app);return w.jsx(v1,{app:t.lih,children:w.jsx("div",{className:"false_window_content",children:w.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/NMRhx71bGo4?si=Ni1EUourSwgU7zGH",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})})};function $3(){const{apps:t,mobile_settings:e}=ze(o=>o.app),n=Jt(),r=".window_element",i=["upLeft","up","upRight","left","right","downRight","down","downLeft"];F.useEffect(()=>{const o=(d,m)=>{if(d.changedTouches.length>1)return;d.preventDefault();const _=d.changedTouches[0],v=new MouseEvent(m,{bubbles:!0,cancelable:!0,view:window,screenX:_.screenX,screenY:_.screenY,clientX:_.clientX,clientY:_.clientY,button:0});d.target.dispatchEvent(v)};let a=!1;const u=d=>{const m=d.target;if(!m.matches(r))if(i.includes(d.target.id)||m.matches(".draggable"))a||(a=!0,o(d,"mousedown"));else return},c=d=>{a&&o(d,"mousemove")},h=d=>{a&&(o(d,"mouseup"),o(d,"click"),a=!1)};return document.addEventListener("touchstart",u),document.addEventListener("touchmove",c),document.addEventListener("touchend",h),()=>{document.removeEventListener("touchstart",u),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",h)}},[]);const s=o=>{if(t[o].open){Ws()&&n(g1(o));return}n(QB(o))};return w.jsx(w.Fragment,{children:w.jsxs("div",{id:"main",className:"main "+e.mode,children:[w.jsx(j3,{}),w.jsx("div",{className:"desktop mobile_menu",children:Object.keys(t).map((o,a)=>w.jsx(B3,{img:t[o].icon,name:t[o].name,popUp:()=>s(t[o].name),dragElementsId:[o+a,a+o]},a))}),w.jsxs("div",{className:"mobile_sections show_open_apps",children:[w.jsxs("div",{className:"open_apps show",children:[t.chat.open&&w.jsx(E1,{}),t.lih.open&&w.jsx(z3,{})]}),w.jsx(D3,{})]})]})})}function W3(){return w.jsx(w.Fragment,{children:w.jsx(vx,{children:w.jsxs(gx,{children:[w.jsx($u,{path:"/portfolio/chat",element:w.jsx(E1,{})}),w.jsx($u,{path:"/portfolio/os",element:w.jsx($3,{})}),w.jsx($u,{path:"*",element:w.jsx(px,{to:"/portfolio/os"})})]})})})}const C0={previous:"",current:"menu",viewport:"mobile",fullscreen:{status:!1,name:"",elementId:"",width:"",height:"",top:"",right:"",left:"",x:"",y:""}},T1=yl({name:"system",initialState:C0,reducers:{changeCurrent:(t,e)=>{t.current=e.payload},showRunningApps:(t,e)=>{t.current="running_apps"},goToMenu:(t,e)=>{t.current="menu"},setAppFullscreen:(t,e)=>{const{app:n}=e.payload,r=document.getElementById(n.elementId),{width:i,height:s,top:o,right:a,left:u,x:c,y:h}=r.getBoundingClientRect();console.log(n);const d={status:!0,name:n.name,elementId:n.elementId,width:i,height:s,top:o,right:a,left:u,x:c,y:h};r.removeAttribute("style"),r.classList.add("fullscreen"),t.current="fullsized_app",t.fullscreen=d,console.log(t.fullscreen.status)},unsetAppFullscreen:(t,e)=>{const{elementId:n,width:r,height:i,top:s,right:o,left:a,x:u,y:c}=t.fullscreen,h=document.getElementById(n);h.classList.remove("fullscreen"),h.style.width=r+"px",h.style.height=i+"px",h.style.top=s+"px",h.style.right=o+"px",h.style.left=a+"px",h.style.x=u+"px",h.style.y=c+"px",t.fullscreen=C0.fullscreen}}});T1.actions;const H3=T1.reducer,q3=Hx({reducer:{message:o3,user:iD,room:HB,app:ZB,system:H3}});Sf.createRoot(document.getElementById("root")).render(w.jsx(gm.StrictMode,{children:w.jsx(CD,{store:q3,children:w.jsx(W3,{})})}));

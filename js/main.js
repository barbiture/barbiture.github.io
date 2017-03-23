'use strict';
;(function(){
// ;(function(window, document) {
//   'use strict';
//   var file = '../images/sprite.svg', // путь к файлу спрайта на сервере
//       revision = 1;            // версия спрайта
//   if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
//   var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
//     request,
//     data,
//     insertIT = function() {
//       document.body.insertAdjacentHTML('afterbegin', data);
//     },
//     insert = function() {
//       if (document.body) insertIT();
//       else document.addEventListener('DOMContentLoaded', insertIT);
//     };
//   if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
//     data = localStorage.getItem('inlineSVGdata');
//     if (data) {
//       insert();
//       // document.getElementsByTagName('svg')[0].style.display = 'none';
//       return true;
//     }
//   }
//   try {
//     request = new XMLHttpRequest();
//     request.open('GET', file, true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         data = request.responseText;
//         insert();
//         if (isLocalStorage) {
//           localStorage.setItem('inlineSVGdata', data);
//           localStorage.setItem('inlineSVGrev', revision);
//         }
//       }
//     }
//     request.send();
//   } catch (e) {}
// }(window, document));
HTMLElement.prototype.topIn = function(position, delay) {
  var delay = delay || 0.5;
  var self = this;
  this.style.transition = 'top '+delay+'s';
  this.style.top = position;
  timeoutId = setTimeout(function() {
    self.parentElement.style.overflow = 'visible';
  }, 1000 * delay);
};

HTMLElement.prototype.topOut = function(position, delay) {
  var delay = delay || 0.5;
  this.style.transition = 'top '+delay+'s';
  this.style.top = position + 'px';
  this.parentElement.style.overflow = 'hidden';
};




HTMLElement.prototype.fadeIn = function(delay) {
  var $this = this;
  var delay = delay || 0.5;
  this.style.transition = 'opacity '+delay+'s';
  this.style.display = 'block';
  this.style.opacity = 0;
  setTimeout(function() {
    $this.style.opacity = 1;
  }, 10);
};

HTMLElement.prototype.fadeOut = function(delay) {
  var $this = this;
  var delay = delay || 0.5;
  this.style.transition = 'opacity '+delay+'s';
  this.style.opacity = 0;
  this.timeOutId = setTimeout(function() {
    $this.style.display = '';
  }, delay*1000);
};

HTMLElement.prototype.stopAnimation = function() {
  if (this.timeOutId) clearTimeout(this.timeOutId);
};
/*! nouislider - 9.2.0 - 2017-01-11 10:35:35 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a,b){var c=document.createElement("div");return j(c,b),a.appendChild(c),c}function b(a){return a.filter(function(a){return!this[a]&&(this[a]=!0)},{})}function c(a,b){return Math.round(a/b)*b}function d(a,b){var c=a.getBoundingClientRect(),d=a.ownerDocument,e=d.documentElement,f=m();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(f.x=0),b?c.top+f.y-e.clientTop:c.left+f.x-e.clientLeft}function e(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function f(a,b,c){c>0&&(j(a,b),setTimeout(function(){k(a,b)},c))}function g(a){return Math.max(Math.min(a,100),0)}function h(a){return Array.isArray(a)?a:[a]}function i(a){a=String(a);var b=a.split(".");return b.length>1?b[1].length:0}function j(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function k(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function l(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function m(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}}function n(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function o(a,b){return 100/(b-a)}function p(a,b){return 100*b/(a[1]-a[0])}function q(a,b){return p(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function r(a,b){return b*(a[1]-a[0])/100+a[0]}function s(a,b){for(var c=1;a>=b[c];)c+=1;return c}function t(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=s(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+q([d,e],c)/o(f,g)}function u(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=s(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],r([d,e],(c-f)*o(f,g))}function v(a,b,d,e){if(100===e)return e;var f,g,h=s(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):b[h-1]?a[h-1]+c(e-a[h-1],b[h-1]):e}function w(a,b,c){var d;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider ("+U+"): 'range' contains invalid value.");if(d="min"===a?0:"max"===a?100:parseFloat(a),!e(d)||!e(b[0]))throw new Error("noUiSlider ("+U+"): 'range' value isn't numeric.");c.xPct.push(d),c.xVal.push(b[0]),d?c.xSteps.push(!isNaN(b[1])&&b[1]):isNaN(b[1])||(c.xSteps[0]=b[1]),c.xHighestCompleteStep.push(0)}function x(a,b,c){if(!b)return!0;c.xSteps[a]=p([c.xVal[a],c.xVal[a+1]],b)/o(c.xPct[a],c.xPct[a+1]);var d=(c.xVal[a+1]-c.xVal[a])/c.xNumSteps[a],e=Math.ceil(Number(d.toFixed(3))-1),f=c.xVal[a]+c.xNumSteps[a]*e;c.xHighestCompleteStep[a]=f}function y(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.length&&"object"==typeof f[0][0]?f.sort(function(a,b){return a[0][0]-b[0][0]}):f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)w(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)x(e,this.xNumSteps[e],this)}function z(a,b){if(!e(b))throw new Error("noUiSlider ("+U+"): 'step' is not numeric.");a.singleStep=b}function A(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider ("+U+"): 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider ("+U+"): Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider ("+U+"): 'range' 'min' and 'max' cannot be equal.");a.spectrum=new y(b,a.snap,a.dir,a.singleStep)}function B(a,b){if(b=h(b),!Array.isArray(b)||!b.length)throw new Error("noUiSlider ("+U+"): 'start' option is incorrect.");a.handles=b.length,a.start=b}function C(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+U+"): 'snap' option must be a boolean.")}function D(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider ("+U+"): 'animate' option must be a boolean.")}function E(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider ("+U+"): 'animationDuration' option must be a number.")}function F(a,b){var c,d=[!1];if("lower"===b?b=[!0,!1]:"upper"===b&&(b=[!1,!0]),b===!0||b===!1){for(c=1;c<a.handles;c++)d.push(b);d.push(!1)}else{if(!Array.isArray(b)||!b.length||b.length!==a.handles+1)throw new Error("noUiSlider ("+U+"): 'connect' option doesn't match handle count.");d=b}a.connect=d}function G(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider ("+U+"): 'orientation' option is invalid.")}}function H(a,b){if(!e(b))throw new Error("noUiSlider ("+U+"): 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider ("+U+"): 'margin' option is only supported on linear sliders.")}function I(a,b){if(!e(b))throw new Error("noUiSlider ("+U+"): 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit||a.handles<2)throw new Error("noUiSlider ("+U+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function J(a,b){if(!e(b))throw new Error("noUiSlider ("+U+"): 'padding' option must be numeric.");if(0!==b){if(a.padding=a.spectrum.getMargin(b),!a.padding)throw new Error("noUiSlider ("+U+"): 'padding' option is only supported on linear sliders.");if(a.padding<0)throw new Error("noUiSlider ("+U+"): 'padding' option must be a positive number.");if(a.padding>=50)throw new Error("noUiSlider ("+U+"): 'padding' option must be less than half the range.")}}function K(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider ("+U+"): 'direction' option was not recognized.")}}function L(a,b){if("string"!=typeof b)throw new Error("noUiSlider ("+U+"): 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(e){if(2!==a.handles)throw new Error("noUiSlider ("+U+"): 'fixed' behaviour must be used with 2 handles");H(a,a.start[1]-a.start[0])}a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function M(a,b){if(b!==!1)if(b===!0){a.tooltips=[];for(var c=0;c<a.handles;c++)a.tooltips.push(!0)}else{if(a.tooltips=h(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider ("+U+"): must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider ("+U+"): 'tooltips' must be passed a formatter or 'false'.")})}}function N(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider ("+U+"): 'format' requires 'to' and 'from' methods.")}function O(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider ("+U+"): 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function P(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider ("+U+"): 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function Q(a,b){if(b!==!0&&b!==!1)throw new Error("noUiSlider ("+U+"): 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame=b}function R(a){var b={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:V},c={step:{r:!1,t:z},start:{r:!0,t:B},connect:{r:!0,t:F},direction:{r:!0,t:K},snap:{r:!1,t:C},animate:{r:!1,t:D},animationDuration:{r:!1,t:E},range:{r:!0,t:A},orientation:{r:!1,t:G},margin:{r:!1,t:H},limit:{r:!1,t:I},padding:{r:!1,t:J},behaviour:{r:!0,t:L},format:{r:!1,t:N},tooltips:{r:!1,t:M},cssPrefix:{r:!1,t:O},cssClasses:{r:!1,t:P},useRequestAnimationFrame:{r:!1,t:Q}},d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(c).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(c[e].r)throw new Error("noUiSlider ("+U+"): '"+e+"' is required.");return!0}c[e].t(b,void 0===a[e]?d[e]:a[e])}),b.pips=a.pips;var e=[["left","top"],["right","bottom"]];return b.style=e[b.dir][b.ort],b.styleOposite=e[b.dir?0:1][b.ort],b}function S(c,e,i){function o(b,c){var d=a(b,e.cssClasses.origin),f=a(d,e.cssClasses.handle);return f.setAttribute("data-handle",c),0===c?j(f,e.cssClasses.handleLower):c===e.handles-1&&j(f,e.cssClasses.handleUpper),d}function p(b,c){return!!c&&a(b,e.cssClasses.connect)}function q(a,b){ca=[],da=[],da.push(p(b,a[0]));for(var c=0;c<e.handles;c++)ca.push(o(b,c)),ia[c]=c,da.push(p(b,a[c+1]))}function r(b){j(b,e.cssClasses.target),0===e.dir?j(b,e.cssClasses.ltr):j(b,e.cssClasses.rtl),0===e.ort?j(b,e.cssClasses.horizontal):j(b,e.cssClasses.vertical),ba=a(b,e.cssClasses.base)}function s(b,c){return!!e.tooltips[c]&&a(b.firstChild,e.cssClasses.tooltip)}function t(){var a=ca.map(s);$("update",function(b,c,d){if(a[c]){var f=b[c];e.tooltips[c]!==!0&&(f=e.tooltips[c].to(d[c])),a[c].innerHTML=f}})}function u(a,b,c){if("range"===a||"steps"===a)return ka.xVal;if("count"===a){if(!b)throw new Error("noUiSlider ("+U+"): 'values' required for mode 'count'.");var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return ka.fromStepping(c?ka.getStep(a):a)}):"values"===a?c?b.map(function(a){return ka.fromStepping(ka.getStep(ka.toStepping(a)))}):b:void 0}function v(a,c,d){function e(a,b){return(a+b).toFixed(7)/1}var f={},g=ka.xVal[0],h=ka.xVal[ka.xVal.length-1],i=!1,j=!1,k=0;return d=b(d.slice().sort(function(a,b){return a-b})),d[0]!==g&&(d.unshift(g),i=!0),d[d.length-1]!==h&&(d.push(h),j=!0),d.forEach(function(b,g){var h,l,m,n,o,p,q,r,s,t,u=b,v=d[g+1];if("steps"===c&&(h=ka.xNumSteps[g]),h||(h=v-u),u!==!1&&void 0!==v)for(h=Math.max(h,1e-7),l=u;l<=v;l=e(l,h)){for(n=ka.toStepping(l),o=n-k,r=o/a,s=Math.round(r),t=o/s,m=1;m<=s;m+=1)p=k+m*t,f[p.toFixed(5)]=["x",0];q=d.indexOf(l)>-1?1:"steps"===c?2:0,!g&&i&&(q=0),l===v&&j||(f[n.toFixed(5)]=[l,q]),k=n}}),f}function w(a,b,c){function d(a,b){var c=b===e.cssClasses.value,d=c?m:n,f=c?k:l;return b+" "+d[e.ort]+" "+f[a]}function f(a,b,c){return'class="'+d(c[1],b)+'" style="'+e.style+": "+a+'%"'}function g(a,d){d[1]=d[1]&&b?b(d[0],d[1]):d[1],i+="<div "+f(a,e.cssClasses.marker,d)+"></div>",d[1]&&(i+="<div "+f(a,e.cssClasses.value,d)+">"+c.to(d[0])+"</div>")}var h=document.createElement("div"),i="",k=[e.cssClasses.valueNormal,e.cssClasses.valueLarge,e.cssClasses.valueSub],l=[e.cssClasses.markerNormal,e.cssClasses.markerLarge,e.cssClasses.markerSub],m=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],n=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];return j(h,e.cssClasses.pips),j(h,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){g(b,a[b])}),h.innerHTML=i,h}function x(a){var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=u(b,e,f),h=v(c,b,g),i=a.format||{to:Math.round};return ga.appendChild(w(h,d,i))}function y(){var a=ba.getBoundingClientRect(),b="offset"+["Width","Height"][e.ort];return 0===e.ort?a.width||ba[b]:a.height||ba[b]}function z(a,b,c,d){var f=function(b){return!ga.hasAttribute("disabled")&&(!l(ga,e.cssClasses.tap)&&(!!(b=A(b,d.pageOffset))&&(!(a===fa.start&&void 0!==b.buttons&&b.buttons>1)&&((!d.hover||!b.buttons)&&(b.calcPoint=b.points[e.ort],void c(b,d))))))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function A(a,b){a.preventDefault();var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer");if(0===a.type.indexOf("MSPointer")&&(g=!0),e){if(a.touches.length>1)return!1;c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY}return b=b||m(),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),a.pageOffset=b,a.points=[c,d],a.cursor=f||g,a}function B(a){var b=a-d(ba,e.ort),c=100*b/y();return e.dir?100-c:c}function C(a){var b=100,c=!1;return ca.forEach(function(d,e){if(!d.hasAttribute("disabled")){var f=Math.abs(ha[e]-a);f<b&&(c=e,b=f)}}),c}function D(a,b,c,d){var e=c.slice(),f=[!a,a],g=[a,!a];d=d.slice(),a&&d.reverse(),d.length>1?d.forEach(function(a,c){var d=M(e,a,e[a]+b,f[c],g[c]);d===!1?b=0:(b=d-e[a],e[a]=d)}):f=g=[!0];var h=!1;d.forEach(function(a,d){h=Q(a,c[a]+b,f[d],g[d])||h}),h&&d.forEach(function(a){E("update",a),E("slide",a)})}function E(a,b,c){Object.keys(ma).forEach(function(d){var f=d.split(".")[0];a===f&&ma[d].forEach(function(a){a.call(ea,la.map(e.format.to),b,la.slice(),c||!1,ha.slice())})})}function F(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&H(a,b)}function G(a,b){if(navigator.appVersion.indexOf("MSIE 9")===-1&&0===a.buttons&&0!==b.buttonsProperty)return H(a,b);var c=(e.dir?-1:1)*(a.calcPoint-b.startCalcPoint),d=100*c/b.baseSize;D(c>0,d,b.locations,b.handleNumbers)}function H(a,b){ja&&(k(ja,e.cssClasses.active),ja=!1),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach(function(a){document.documentElement.removeEventListener(a[0],a[1])}),k(ga,e.cssClasses.drag),P(),b.handleNumbers.forEach(function(a){E("set",a),E("change",a),E("end",a)})}function I(a,b){if(1===b.handleNumbers.length){var c=ca[b.handleNumbers[0]];if(c.hasAttribute("disabled"))return!1;ja=c.children[0],j(ja,e.cssClasses.active)}a.preventDefault(),a.stopPropagation();var d=z(fa.move,document.documentElement,G,{startCalcPoint:a.calcPoint,baseSize:y(),pageOffset:a.pageOffset,handleNumbers:b.handleNumbers,buttonsProperty:a.buttons,locations:ha.slice()}),f=z(fa.end,document.documentElement,H,{handleNumbers:b.handleNumbers}),g=z("mouseout",document.documentElement,F,{handleNumbers:b.handleNumbers});if(document.documentElement.noUiListeners=d.concat(f,g),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,ca.length>1&&j(ga,e.cssClasses.drag);var h=function(){return!1};document.body.noUiListener=h,document.body.addEventListener("selectstart",h,!1)}b.handleNumbers.forEach(function(a){E("start",a)})}function J(a){a.stopPropagation();var b=B(a.calcPoint),c=C(b);return c!==!1&&(e.events.snap||f(ga,e.cssClasses.tap,e.animationDuration),Q(c,b,!0,!0),P(),E("slide",c,!0),E("set",c,!0),E("change",c,!0),E("update",c,!0),void(e.events.snap&&I(a,{handleNumbers:[c]})))}function K(a){var b=B(a.calcPoint),c=ka.getStep(b),d=ka.fromStepping(c);Object.keys(ma).forEach(function(a){"hover"===a.split(".")[0]&&ma[a].forEach(function(a){a.call(ea,d)})})}function L(a){a.fixed||ca.forEach(function(a,b){z(fa.start,a.children[0],I,{handleNumbers:[b]})}),a.tap&&z(fa.start,ba,J,{}),a.hover&&z(fa.move,ba,K,{hover:!0}),a.drag&&da.forEach(function(b,c){if(b!==!1&&0!==c&&c!==da.length-1){var d=ca[c-1],f=ca[c],g=[b];j(b,e.cssClasses.draggable),a.fixed&&(g.push(d.children[0]),g.push(f.children[0])),g.forEach(function(a){z(fa.start,a,I,{handles:[d,f],handleNumbers:[c-1,c]})})}})}function M(a,b,c,d,f){return ca.length>1&&(d&&b>0&&(c=Math.max(c,a[b-1]+e.margin)),f&&b<ca.length-1&&(c=Math.min(c,a[b+1]-e.margin))),ca.length>1&&e.limit&&(d&&b>0&&(c=Math.min(c,a[b-1]+e.limit)),f&&b<ca.length-1&&(c=Math.max(c,a[b+1]-e.limit))),e.padding&&(0===b&&(c=Math.max(c,e.padding)),b===ca.length-1&&(c=Math.min(c,100-e.padding))),c=ka.getStep(c),c=g(c),c!==a[b]&&c}function N(a){return a+"%"}function O(a,b){ha[a]=b,la[a]=ka.fromStepping(b);var c=function(){ca[a].style[e.style]=N(b),S(a),S(a+1)};window.requestAnimationFrame&&e.useRequestAnimationFrame?window.requestAnimationFrame(c):c()}function P(){ia.forEach(function(a){var b=ha[a]>50?-1:1,c=3+(ca.length+b*a);ca[a].childNodes[0].style.zIndex=c})}function Q(a,b,c,d){return b=M(ha,a,b,c,d),b!==!1&&(O(a,b),!0)}function S(a){if(da[a]){var b=0,c=100;0!==a&&(b=ha[a-1]),a!==da.length-1&&(c=ha[a]),da[a].style[e.style]=N(b),da[a].style[e.styleOposite]=N(100-c)}}function T(a,b){null!==a&&a!==!1&&("number"==typeof a&&(a=String(a)),a=e.format.from(a),a===!1||isNaN(a)||Q(b,ka.toStepping(a),!1,!1))}function V(a,b){var c=h(a),d=void 0===ha[0];b=void 0===b||!!b,c.forEach(T),e.animate&&!d&&f(ga,e.cssClasses.tap,e.animationDuration),ia.forEach(function(a){Q(a,ha[a],!0,!1)}),P(),ia.forEach(function(a){E("update",a),null!==c[a]&&b&&E("set",a)})}function W(a){V(e.start,a)}function X(){var a=la.map(e.format.to);return 1===a.length?a[0]:a}function Y(){for(var a in e.cssClasses)e.cssClasses.hasOwnProperty(a)&&k(ga,e.cssClasses[a]);for(;ga.firstChild;)ga.removeChild(ga.firstChild);delete ga.noUiSlider}function Z(){return ha.map(function(a,b){var c=ka.getNearbySteps(a),d=la[b],e=c.thisStep.step,f=null;e!==!1&&d+e>c.stepAfter.startValue&&(e=c.stepAfter.startValue-d),f=d>c.thisStep.startValue?c.thisStep.step:c.stepBefore.step!==!1&&d-c.stepBefore.highestStep,100===a?e=null:0===a&&(f=null);var g=ka.countStepDecimals();return null!==e&&e!==!1&&(e=Number(e.toFixed(g))),null!==f&&f!==!1&&(f=Number(f.toFixed(g))),[f,e]})}function $(a,b){ma[a]=ma[a]||[],ma[a].push(b),"update"===a.split(".")[0]&&ca.forEach(function(a,b){E("update",b)})}function _(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(ma).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete ma[a]})}function aa(a,b){var c=X(),d=["margin","limit","padding","range","animate","snap","step","format"];d.forEach(function(b){void 0!==a[b]&&(i[b]=a[b])});var f=R(i);d.forEach(function(b){void 0!==a[b]&&(e[b]=f[b])}),f.spectrum.direction=ka.direction,ka=f.spectrum,e.margin=f.margin,e.limit=f.limit,e.padding=f.padding,ha=[],V(a.start||c,b)}var ba,ca,da,ea,fa=n(),ga=c,ha=[],ia=[],ja=!1,ka=e.spectrum,la=[],ma={};if(ga.noUiSlider)throw new Error("noUiSlider ("+U+"): Slider was already initialized.");return r(ga),q(e.connect,ba),ea={destroy:Y,steps:Z,on:$,off:_,get:X,set:V,reset:W,__moveHandles:function(a,b,c){D(a,b,ha,c)},options:i,updateOptions:aa,target:ga,pips:x},L(e.events),V(e.start),e.pips&&x(e.pips),e.tooltips&&t(),ea}function T(a,b){if(!a.nodeName)throw new Error("noUiSlider ("+U+"): create requires a single element.");var c=R(b,a),d=S(a,c,b);return a.noUiSlider=d,d}var U="9.2.0";y.prototype.getMargin=function(a){var b=this.xNumSteps[0];if(b&&a/b%1!==0)throw new Error("noUiSlider ("+U+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,a)},y.prototype.toStepping=function(a){return a=t(this.xVal,this.xPct,a)},y.prototype.fromStepping=function(a){return u(this.xVal,this.xPct,a)},y.prototype.getStep=function(a){return a=v(this.xPct,this.xSteps,this.snap,a)},y.prototype.getNearbySteps=function(a){var b=s(a,this.xPct);return{stepBefore:{startValue:this.xVal[b-2],step:this.xNumSteps[b-2],highestStep:this.xHighestCompleteStep[b-2]},thisStep:{startValue:this.xVal[b-1],step:this.xNumSteps[b-1],highestStep:this.xHighestCompleteStep[b-1]},stepAfter:{startValue:this.xVal[b-0],step:this.xNumSteps[b-0],highestStep:this.xHighestCompleteStep[b-0]}}},y.prototype.countStepDecimals=function(){var a=this.xNumSteps.map(i);return Math.max.apply(null,a)},y.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var V={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{version:U,create:T}});

HTMLElement.prototype.removeClass = function(className) {
  var classList = this.className.split(' ');
  for (var i=0; i<classList.length; i++) {
    if (classList[i] == className) {
      classList.splice(i,1); break;
    }
  }
  this.className = classList.join(' ').trim();
};
HTMLElement.prototype.addClass = function(className) {
  if ( !this.hasClass(className) )
    this.className = (this.className+' ' +className).trim();
};
HTMLElement.prototype.hasClass = function(className) {
  var classList = this.className.split(' ');
  for (var i=0; i<classList.length; i++) {
    if (classList[i] == className) return true;
  }
  return false;
};


function clear(el) {
  for (var i=0; i<el.length; i++)
    el[i].removeClass('bullet__item_active');
}

var slides = document.querySelectorAll('#mainSlider .slider__item');
var currentSlide = 0;
function nextSlide() {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slider__item slider__item_show';
  clear(btn);
  btn[currentSlide].addClass('bullet__item_active');
}
function prevSlide() {
  slides[currentSlide].className = 'slider__item';
  if ( currentSlide == slides.length ) currentSlide = 0;
  if ( currentSlide == 0 ) currentSlide = slides.length;
  currentSlide = (currentSlide-1)%slides.length;
  slides[currentSlide].className = 'slider__item slider__item_show';
  clear(btn);
  btn[currentSlide].addClass('bullet__item_active');
}

var btn = document.getElementsByClassName('bullet__item');

for (var i=0; i<btn.length; i++) {
  btn[i].onclick = function(e) {
    for (var j=0; j<slides.length; j++)
      slides[j].removeClass('slider__item_show');
    slides[this.id].className = 'slider__item slider__item_show';
    currentSlide = parseInt(this.id);
    clear(btn);
    this.addClass('bullet__item_active');
  };
}

var slider = document.getElementById('mainSlider'),
    offsetX,
    left = 0,
    rigth = 0;
slider.onmousedown = function() {return false;};

slider.addEventListener('mousedown', mouseDown, false);
slider.addEventListener('touchstart', mouseDown, false); 

function mouseDown(e) {
  offsetX = e.offsetX || e.touches[0].pageX;
  slider.addEventListener('mousemove', mouseMove, false);
  slider.addEventListener('touchmove', mouseMove, false);
  slider.addEventListener('mouseup', mouseUp, false);
  slider.addEventListener('touchend', mouseUp, false);
}

function mouseMove(e) {
  var currOffsetX = e.offsetX || e.touches[0].pageX;
  var position = offsetX-currOffsetX;
  if ( offsetX > currOffsetX ) {
    if ( position > 100 ) left = 1;
  } else {
    if ( position < -100 ) rigth = 1;
  }
}

function mouseUp() {
  if (left) nextSlide();
  if (rigth) prevSlide();
  left = rigth = 0;
  slider.removeEventListener('touchmove', mouseMove, false);
  slider.removeEventListener('mousemove', mouseUp, false);
}
// var slider = document.getElementById('mainSlider'),
//     offsetTouchX,
//     offsetMouseX,
//     startPosition,
//     rigth = 0,
//     left = 0;

// slider.onmousedown = function() {return false;};
// function mouseDown(e) {
//   if (e.offsetX) {
//     slider.addEventListener('mousemove', mouseMove, false);
//     offsetMouseX = e.offsetX;
//   } else if (e.targetTouches) {
//     slider.addEventListener('touchmove', mouseMove, false);
//     offsetTouchX = e.targetTouches[0].pageX;
//   }
// }

// function mouseMove(e) {
//   var cond;
//   if (e.targetTouches) {
//     startPosition = offsetTouchX - e.targetTouches[0].pageX;
//     cond = offsetTouchX > e.targetTouches[0].pageX;
//   } else if (e.offsetX) {
//     startPosition = offsetMouseX - e.offsetX;
//     cond = offsetMouseX > e.offsetX;
//   }

//   if ( cond ) {
//     if ( startPosition > 100 ) left = 1;
//   } else {
//     if ( startPosition < -100 ) rigth = 1;
//   }
// }

// function mouseUp() {
//   if (left) nextSlide();
//   if (rigth) prevSlide();
//   left = rigth = 0;

//   slider.removeEventListener('touchmove', mouseMove, false);
//   slider.removeEventListener('mousemove', mouseMove, false);
// }

// slider.addEventListener('mousedown', mouseDown, false);
// slider.addEventListener('mouseup', mouseUp, false);

// slider.addEventListener('touchstart', mouseDown, false);
// slider.addEventListener('touchend', mouseUp, false);

;(function() {
  HTMLElement.prototype.fadeIn = function(delay) {
    var self = this;
    var delay = delay || 0.5;
    this.style.transition = 'opacity '+delay+'s';
    this.style.opacity = 0;
    this.style.display = 'block';
    setTimeout(function() {
      self.style.opacity = 1;
    }, 10);
  };

  HTMLElement.prototype.fadeOut = function(delay) {
    var self = this;
    var delay = delay || 0.5;
    this.style.transition = 'opacity '+delay+'s';
    this.style.opacity = 0;
    this.timeOutId = setTimeout(function() {
      self.style.display = '';
    }, delay*1000);
  };

  function Modal(id) {
    this.setElemById(id);
    this.init();
    this.updateWidth();
    this.closeModalEvent();
  }

  Modal.prototype = {
    setElemById: function(id) {
      this.elem = document.getElementById(id);
    },
    init: function() {
      this.clientWidthScrollOn = document.body.clientWidth;
    },
    closeModalEvent: function(e) {
      var self = this;
      var closeBtn = this.elem.children[0];
      // var closeBtn = function() {
      //   var b = this.elem.children;
      //   for (var i=0; i<b.length; i++) {
      //     if (b[i].dataset.close) {
      //       return b[i];
      //     }
      //   }
      // }();
      closeBtn.onclick = function() {
        self.closeModal();
      };
    },
    showModal: function() {
      var self = this;
      this.backdrop = document.createElement('DIV');
      document.body.style.overflowY = 'hidden';
      document.body.style.width = this.clientWidthScrollOn + 'px';
      this.elem.fadeIn();
      this.backdrop.className = 'modal-backdrop';
      document.body.append(this.backdrop);
      this.backdrop.fadeIn();
      this.modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      this.modalBackdrop.onclick = function() {
        self.closeModal();
      };
      if (typeof this.eventShow == 'function') this.eventShow.call(this);
    },
    closeModal: function(d) {
      var self = this;
      d = d || 0.5;
      this.backdrop.fadeOut();
      this.elem.fadeOut();
      setTimeout(function() {
        document.body.style.overflowY = 'scroll';
        document.body.removeChild(self.modalBackdrop);
        if (typeof self.eventClose == 'function') self.eventClose.call(self);
      },d*1000);
      document.body.style.width = this.clientWidthScrollOn + 'px';
      this.modalBackdrop.onclick = null;
    },
    updateWidth: function() {
      var self = this;
      window.onresize = function() {
        self.clientWidthScrollOn = document.body.offsetWidth;
        document.body.style.width = '';
      };
    }
  };

  window.Modal = Modal;

})();

var CreateList = function(o) {
  var id = document.getElementById(o.id),
      ul = id.querySelector(o.ul),
      tmp = '', item;
  this.classes = o.classes;
  this.selectedClass = o.selectedClass;

  if (o.title)
    this.title = id.querySelector(o.title).innerHTML.trim();

  for (var i=0; i<o.array.length; i++) {
    item = o.array[i];
    tmp += o.html.call(this,item);
  }

  ul.innerHTML = tmp;
};

var fn = function(item) {
  var selected = '';
  if (this.title) {
    var title = this.title.split(' ')[1];
    selected = (item.link == title) ? this.selectedClass: '';
  }
  return '<li class="'+(this.classes+' '+selected).trim()+
    '" data-imglink="'+item['src']+'">'+item['link']+'</li>';
};
var fn1 = function(item) {
  var selected = '';
  if (this.title) {
    selected = (item.link == this.title) ? this.selectedClass: '';
  }
  return '<li class="'+(this.classes+' '+selected).trim()+
    '" data-imglink="'+item['src']+'">'+item['link']+'</li>';
};
var fn2 = function(item) {
  var selected = '';
  if (this.title) {
    selected = (item == this.title) ? this.selectedClass: '';
  }
  return '<li class="'+(this.classes+' '+selected).trim()+'">'+item+'</li>';
};

/////////////Заполнениие меню//////////////////
// id dropdown *
// arr array for fill LI *
// classes
// index UL in dropdown, refault: 0

// Исключаем выбор из списка


// Очищает список //
function clearUl(id) {
  var ul = document.getElementById(id);
  while (ul.firstChild) ul.removeChild(ul.firstChild);
}


/////////////Доп. функции//////////////////

HTMLElement.prototype.addClass = function(className) {
  if ( !this.hasClass(className) ) {
      this.className = (this.className+' ' +className).trim();
  }
};

HTMLElement.prototype.hasClass = function(className) {
  var classList = this.className.split(' ');
  for (var i=0; i<classList.length; i++) {
    if (classList[i] == className) {
      return true;
    }
  }
  return false;
};

HTMLElement.prototype.removeClass = function(className) {
  var classList = this.className.split(' ');
  for (var i=0; i<classList.length; i++) {
    if (classList[i] == className) {
      classList.splice(i,1); break;
    }
  }
  this.className = classList.join(' ').trim();
};

/////////////Допо. функции анимация//////////////////

//////////////Dropdown///////////////////////////
var objectsList = [];
function Dropdown(obj,type,index) {
  var id = (typeof obj == 'object') ? obj.id : obj;
  this.el = (!type) ? this.el = document.getElementById(id) :
    this.el = document.getElementsByClassName(id)[index];

  this.menuName = this.el.querySelector(obj.menuName);
  this.content = this.el.querySelector(obj.content);
  this.li = this.el.getElementsByTagName('li');

  if (this.el.getElementsByTagName('input').length != 0)
    this.inputs = this.el.getElementsByTagName('input');

  this.notClose = obj.notClose || false;
  this.list = obj.list;
  this.classOnClick = obj.classOnClick || false;
  this.classSelected = obj.classSelected || false;
  objectsList.push(this);
  this.closeByClickBody();
  this.clickEvent();
  this.stopPropag();
}
// Закрывает выпадающее меню при клике на страницу //
Dropdown.prototype.stopPropag = function(arr) {
  this.el.onclick = function(e) {
    e.stopPropagation();
  };
};

Dropdown.prototype.clearWindow = function() {
  this.menuName.removeClass(this.classOnClick);
  for (var i=0; i<objectsList.length; i++) {
    if (objectsList[i].content.style.display == 'block') {
      objectsList[i].content.fadeOut(); window.onclick = '';
    }
  }
};
Dropdown.prototype.closeByClickBody = function() {
  var $this = this;
  document.body.onclick = function(e) {
    $this.clearWindow();
  };
};
// Функция автодополнения //
Dropdown.prototype.awesomplete = function() {
  var $this = this;
  for (var i=0; i<this.inputs.length; i++) {
    new Awesomplete($this.inputs[i], {
      list: $this.list[i],
      replace: function(e) {
        for (var j=0; j<$this.inputs.length; j++) {
          $this.inputs[j].value = '';
        }
        $this.menuName.innerHTML = e.value;
        $this.selectItemFromSearch(e.value);
        $this.content.fadeOut();
        if ($this.classOnClick) $this.menuName.removeClass($this.classOnClick);
      }
    });
  }
};
Dropdown.prototype.checkOpenMenu = function() {
  for (var i=0; i<objectsList.length; i++) {
    if (objectsList[i].content != this.content) {
      if (objectsList[i].content.style.display == 'block') {
        if (this.classOnClick)
          objectsList[i].menuName.removeClass(objectsList[i].classOnClick);
        objectsList[i].content.fadeOut();
      }
    }
  }
};
// Скрывает или показывает выпадающее меню при клике на заголовок //
Dropdown.prototype.clickEvent = function() {
  var $this = this;
  this.menuName.onclick = function(e) {
    $this.closeByClickBody();
    if ($this.content.style.display == '') {
      $this.checkOpenMenu();
      if ($this.classOnClick) e.target.addClass($this.classOnClick);
      $this.content.fadeIn();
    } else {
      if ($this.classOnClick) e.target.removeClass($this.classOnClick);
      $this.content.fadeOut();
    }
  };
};
// Скрывает или показывает выпадающее меню при наведении на заголовок //
Dropdown.prototype.hoverEvent = function() {
  var $this = this;
  this.el.onmouseenter = function(e) {
    $this.content.stopAnimation();
    $this.content.fadeIn();
  };
  this.el.onmouseleave = function(e) {
    $this.content.stopAnimation();
    $this.content.fadeOut();
  };
};
// Удаляет у всех элементов списка класс selected //
Dropdown.prototype.clearSelected = function(className) {
  for (var i=0; i<this.li.length; i++ ) {
    if ( this.li[i].hasClass(className) ) {
      this.li[i].removeClass(className);
    }
  }
};
// Добавляет класс selected на кликнутый элемент списка //
Dropdown.prototype.selectItem = function(el) {
  this.clearSelected(this.classSelected);
  el.addClass(this.classSelected);
};
// Добавляет класс selected элементу списка при выборе его из формы //
Dropdown.prototype.selectItemFromSearch = function(val) {
  this.clearSelected(this.classSelected);
  for (var i=1; i<this.li.length; i++) {
    if (this.li[i].innerHTML == val)
      this.li[i].addClass(this.classSelected);
  }
};
// Добавляет onclick на элементы списка //
Dropdown.prototype.addEventToItems = function(fn) {
  var $this = this;
  for (var i=0; i<this.li.length; i++ ) {
    if (!this.li[i].hasClass('dropdown__content__list__link')) {
      this.li[i].onclick = function(e) {
        // console.log(this);
        $this.selectItem(this);
        $this.menuName.innerHTML = this.innerHTML;

        if (fn == 'tel') $this.tel(e);
        if (fn == 'lang') $this.lang(e);
        if (fn == 'curency') $this.curency(e);
        if (fn == 'flowers') $this.flowers(e);

        if ($this.classOnClick) $this.menuName.removeClass($this.classOnClick);
        if (!$this.notClose) $this.content.fadeOut();
      };
    }
  }
  return this;
};
Dropdown.prototype.test = function(fn) {
  
  var $this = this;
  for (var i=0; i<this.li.length; i++ ) {
    this.li[i].addClass('test');
      this.li[i].onclick = function(e) {
        // console.log(this.li);
      }
  }
};
Dropdown.prototype.tel = function(e) {
  this.inputs[0].placeholder = e.target.dataset.code;
};

Dropdown.prototype.lang = function(e) {
  this.menuName.innerHTML = e.target.innerHTML.split(' ')[0];
};
Dropdown.prototype.curency = function(e) {
  this.menuName.innerHTML = e.target.innerHTML.split(' ')[0];
};

Dropdown.prototype.flowers = function(e) {
  var img = document.getElementById('fastBuyImg');
  img.src = e.target.dataset.imglink;
};




 ////// Как использовать //////////////////
 // use: Id
 // new Menu('bb1').clickEvent();
 // new Menu({id:'aa1',close:true});
 // use: Class
 // new Menu({id:'bb',close:true,delay:1},1,1);
 //////////////////////////////////////////////

;(function() {
  var elem = document.getElementById('textSlider');
  var ul = elem.querySelector('ul');
  var li = ul.getElementsByTagName('li');
  var liLen = li.length;
  var width = li[0].scrollWidth;
  var i = 0;

  function txtSlider() {
    var delay = 2;
    ul.style.transition = 'margin '+delay+'s';
    i++;
    if ( i >= liLen-1 ) {
      setTimeout(function() {
        ul.style.transition = 'none';
        ul.appendChild(li[0].cloneNode(true));
        ul.removeChild(li[0]);
        ul.style.marginLeft = -width*(i-1) + 'px';
        i--;
      },delay*1000);
    }
    ul.style.marginLeft = -width*i + 'px';
  }
  var tId = setInterval(txtSlider, 5000);
})();
// Awesomplete - Lea Verou - MIT license
(function(){function h(a){a=Array.isArray(a)?{label:a[0],value:a[1]}:"object"===typeof a&&"label"in a&&"value"in a?a:{label:a,value:a};this.label=a.label||a.value;this.value=a.value}function n(a,b,d){for(var g in b){var f=b[g],c=a.input.getAttribute("data-"+g.toLowerCase());a[g]="number"===typeof f?parseInt(c):!1===f?null!==c:f instanceof Function?null:c;a[g]||0===a[g]||(a[g]=g in d?d[g]:f)}}function c(a,b){return"string"===typeof a?(b||document).querySelector(a):a||null}function k(a,b){return l.call((b||
document).querySelectorAll(a))}function m(){k("input.awesomplete").forEach(function(a){new e(a)})}var e=function(a,b){var d=this;this.input=c(a);this.input.setAttribute("autocomplete","off");this.input.setAttribute("aria-autocomplete","list");b=b||{};n(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:e.SORT_BYLENGTH,item:e.ITEM,replace:e.REPLACE},b);this.index=-1;this.container=c.create("div",{className:"awesomplete",around:a});this.ul=c.create("ul",{hidden:"hidden",
inside:this.container});this.status=c.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container});c.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(a){var b=a.keyCode;if(d.opened)if(13===b&&d.selected)a.preventDefault(),d.select();else if(27===b)d.close();else if(38===b||40===b)a.preventDefault(),d[38===b?"previous":"next"]()}});c.bind(this.input.form,{submit:this.close.bind(this)});
c.bind(this.ul,{mousedown:function(a){var b=a.target;if(b!==this){for(;b&&!/li/i.test(b.nodeName);)b=b.parentNode;b&&0===a.button&&(a.preventDefault(),d.select(b,a.target))}}});this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||b.list||[];e.all.push(this)};e.prototype={set list(a){if(Array.isArray(a))this._list=a;else if("string"===typeof a&&-1<a.indexOf(","))this._list=a.split(/\s*,\s*/);
else if((a=c(a))&&a.children){var b=[];l.apply(a.children).forEach(function(a){if(!a.disabled){var c=a.textContent.trim(),f=a.value||c;a=a.label||c;""!==f&&b.push({label:a,value:f})}});this._list=b}document.activeElement===this.input&&this.evaluate()},get selected(){return-1<this.index},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden","");this.index=-1;c.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden");this.autoFirst&&
-1===this.index&&this["goto"](0);c.fire(this.input,"awesomplete-open")},next:function(){this["goto"](this.index<this.ul.children.length-1?this.index+1:-1)},previous:function(){var a=this.ul.children.length;this["goto"](this.selected?this.index-1:a-1)},"goto":function(a){var b=this.ul.children;this.selected&&b[this.index].setAttribute("aria-selected","false");this.index=a;-1<a&&0<b.length&&(b[a].setAttribute("aria-selected","true"),this.status.textContent=b[a].textContent,c.fire(this.input,"awesomplete-highlight",
{text:this.suggestions[this.index]}))},select:function(a,b){a?this.index=c.siblingIndex(a):a=this.ul.children[this.index];if(a){var d=this.suggestions[this.index];c.fire(this.input,"awesomplete-select",{text:d,origin:b||a})&&(this.replace(d),this.close(),c.fire(this.input,"awesomplete-selectcomplete",{text:d}))}},evaluate:function(){var a=this,b=this.input.value;b.length>=this.minChars&&0<this._list.length?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(d){return new h(a.data(d,
b))}).filter(function(d){return a.filter(d,b)}).sort(this.sort).slice(0,this.maxItems),this.suggestions.forEach(function(d){a.ul.appendChild(a.item(d,b))}),0===this.ul.children.length?this.close():this.open()):this.close()}};e.all=[];e.FILTER_CONTAINS=function(a,b){return RegExp(c.regExpEscape(b.trim()),"i").test(a)};e.FILTER_STARTSWITH=function(a,b){return RegExp("^"+c.regExpEscape(b.trim()),"i").test(a)};e.SORT_BYLENGTH=function(a,b){return a.length!==b.length?a.length-b.length:a<b?-1:1};e.ITEM=
function(a,b){var d=""===b?a:a.replace(RegExp(c.regExpEscape(b.trim()),"gi"),"<mark>$&</mark>");return c.create("li",{innerHTML:d,"aria-selected":"false"})};e.REPLACE=function(a){this.input.value=a.value};e.DATA=function(a){return a};Object.defineProperty(h.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}});h.prototype.toString=h.prototype.valueOf=function(){return""+this.label};var l=Array.prototype.slice;c.create=function(a,b){var d=document.createElement(a),
g;for(g in b){var f=b[g];"inside"===g?c(f).appendChild(d):"around"===g?(f=c(f),f.parentNode.insertBefore(d,f),d.appendChild(f)):g in d?d[g]=f:d.setAttribute(g,f)}return d};c.bind=function(a,b){if(a)for(var d in b){var c=b[d];d.split(/\s+/).forEach(function(b){a.addEventListener(b,c)})}};c.fire=function(a,b,c){var e=document.createEvent("HTMLEvents");e.initEvent(b,!0,!0);for(var f in c)e[f]=c[f];return a.dispatchEvent(e)};c.regExpEscape=function(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")};
c.siblingIndex=function(a){for(var b=0;a=a.previousElementSibling;b++);return b};"undefined"!==typeof Document&&("loading"!==document.readyState?m():document.addEventListener("DOMContentLoaded",m));e.$=c;e.$$=k;"undefined"!==typeof self&&(self.Awesomplete=e);"object"===typeof module&&module.exports&&(module.exports=e);return e})();



var rus = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', 'Омск', 'Самара', 'Красноярск', 'Пермь', 'Ростов-на-Дону', 'Волгоград', 'Уфа', 'Воронеж', 'Саратов', 'Иркутск', 'Ульяновск', 'Хабаровск', 'Пенза', 'Белгород', 'Миас', 'Троицк (Челяб. обл)'];
var int = ['Белорусь', 'Украина', 'Грузия', 'Испания', 'США', 'Венесуэла', 'Канада', 'Франция', 'Италия', 'Нидерланды', 'Великобритания', 'Тайланд', 'Китай', 'Аргентина', 'Куба', 'Бразилия', 'Люксембург', 'Чехия', 'Австрия', 'Германия', 'Чили', 'Индия', 'Швеция', 'Швейцария', 'ЮАР', 'Япония', 'Австралия'];
var test = ['TEst', 'Украина', 'Грузия', 'Испания', 'США', 'Венесуэла', 'Канада', 'Франция', 'Италия', 'Нидерланды', 'Великобритания', 'Тайланд', 'Китай', 'Аргентина', 'Куба', 'Бразилия', 'Люксембург', 'Чехия', 'Австрия', 'Германия', 'Чили', 'Индия', 'Швеция', 'Швейцария', 'ЮАР', 'Япония', 'Австралия'];
new CreateList({
  id: 'dropdownDeliver',
  ul: '.tabs__content__list_rus',
  title: '.dropdown__selected',
  classes: 'dropdown__content__item',
  selectedClass: 'dropdown__content__item_selected',
  array: rus,
  html: fn2
});
new CreateList({
  id: 'dropdownDeliver',
  ul: '.tabs__content__list_int',
  title: '.dropdown__selected',
  classes: 'dropdown__content__item',
  selectedClass: 'dropdown__content__item_selected',
  array: int,
  html: fn2
});
new CreateList({
  id: 'dropdownDeliver',
  ul: '.tabs__content__list_test',
  title: '.dropdown__selected',
  classes: 'dropdown__content__item',
  selectedClass: 'dropdown__content__item_selected',
  array: test,
  html: fn2
});

var lastEl = document.getElementsByClassName('tabs__content__list');
lastEl[0].innerHTML+='<li><a href="" class="dropdown__content__link link link_more link_size_m">Полный список</a></li>';
lastEl[1].innerHTML+='<li><a href="" class="dropdown__content__link link link_more link_size_m">Полный список</a></li>';
lastEl[2].innerHTML+='<li><a href="" class="dropdown__content__link link link_more link_size_m">Полный список</a></li>';

new Dropdown({
  id:'dropdownDeliver',
  menuName:'.dropdown__selected',
  content:'.dropdown__content',
  classOnClick: 'dropdown__selected-active',
  classSelected: 'dropdown__content__item_selected',
  list:[rus,int, test]
}).addEventToItems().awesomplete();

// 
//* Добавление onclick на элементы списка находится в components/dropdown/dropdown.js (Dropdown.prototype.addEventToItems = function(fn))*//

var tabNav = document.querySelectorAll('#dropdownDeliver .tabs__nav_item');
var tabCont = document.querySelectorAll('#dropdownDeliver .tabs__content');
function rmClasses(el, className) {
  for (var i=0; i<el.length; i++) {
    if (el[i].hasClass(className)) {
      el[i].removeClass(className);
    }
  }
}

function rmDisplayBlock(el) {
  for (var i=0; i<el.length; i++) {
    el[i].style.display = 'none';
  }
}

for (var i=0; i<tabNav.length; i++) {
  var $this = this;
  tabNav[i].onclick = (function(i) {
    return function() {
      if (!this.hasClass('tabs__nav_item_active')) {
        rmClasses(tabNav,'tabs__nav_item_active');
        this.addClass('tabs__nav_item_active');
        rmDisplayBlock(tabCont);
        tabCont[i].fadeIn();
      }
    }
  })(i);
}
var tel = ['Россия 8 800 5555 714', 'Украина 0 800 901 504', 'Канада 0 800 901 504', 'Германия 8 800 5555 714', 'Израиль 0 800 901 504', 'Франция 8 800 5555 714', 'Бельгия 0 800 901 504', 'Италия 8 800 5555 714', 'Латвия 0 800 901 504', 'Польша 8 800 5555 714', 'Испания 0 800 901 504', 'Финляндия 8 800 5555 714', 'Норвегия 0 800 901 504', 'Словения 8 800 5555 714', 'Казахстан 0 800 901 504'];
new CreateList({
  id: 'dropdownTel',
  ul: '.dropdown__content',
  title: '.dropdown__selected',
  classes: 'dropdown__content__item',
  selectedClass: 'dropdown__content__item_selected',
  array: tel,
  html: fn2
});

new Dropdown({
  id:'dropdownTel',
  menuName:'.dropdown__selected',
  content:'.dropdown__content',
  classOnClick: 'dropdown__selected-active',
  classSelected: 'dropdown__content__item_selected',
  list:[tel]
}).addEventToItems('tel');
new Dropdown({
  id:'dropdownLang',
  menuName:'.dropdown__selected',
  content:'.dropdown__content',
  classOnClick: 'dropdown__selected-active',
  classSelected: 'dropdown__content__item_selected'
}).addEventToItems('lang');
new Dropdown({
  id:'dropdownCurency',
  menuName:'.dropdown__selected',
  content:'.dropdown__content',
  classOnClick: 'dropdown__selected-active',
  classSelected: 'dropdown__content__item_selected'
}).addEventToItems('curency');
;(function() {
  var m1 = new Modal('modal');
  m1.topBtm = function(id) {
    return document.getElementById(id);
  }('top');
  m1.getScrollTop = function() {
    return window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
  };
  m1.eventClose = function() {
    if (this.getScrollTop() > 20)
      this.topBtm.style.display = 'block';
  };
  m1.eventShow = function() {
    this.topBtm.style.display = 'none';
  };
  document.getElementById('showModal').onclick = function(e) {
    m1.showModal();
  };
})();

  var wrap = document.getElementById('searchForm'),
      cont = document.querySelector('#searchForm .search-form__content'),
      height,
      timeoutId,
      toggle = false;
  document.getElementById('searchFormTogle').onclick = function() {
    var parent = this.parentElement;
    var cont = parent.querySelector('.search-form__content');
    height = cont.offsetHeight;
    clearTimeout(timeoutId);
    if (!toggle) {
      toggle = true;
      cont.topIn(0);
      document.querySelector('#searchForm input').focus();
    }else {
      toggle = false;
      cont.topOut(-height);
    };

    document.getElementById('searchFormClose').onclick = function() {
      toggle = false;
      cont.topOut(-height);
    };
  };
// Создаем Масив и Ссылки для картинок
var fastByImg = [
  {link: 'Роза', src: 'images/img1.jpg'},
  {link: 'Тюльпан', src: 'images/img2.jpg'},
  {link: 'Хризантема', src: 'images/img3.jpg'},
  {link: 'Гербера', src: 'images/img4.jpg'},
  {link: 'Ирис', src: 'images/img5.jpg'},
  {link: 'Гвоздика', src: 'images/img6.jpg'}
];
new CreateList({
  id: 'fastBuyDrop',
  ul: '.dropdown__content',
  title: '.dropdown__selected',
  classes: 'dropdown__content__item dropdown__content__item_black',
  selectedClass: 'dropdown__content__item_selected',
  array: fastByImg,
  html: fn1
});
new Dropdown({
  id:'fastBuyDrop',
  menuName:'.dropdown__selected',
  content:'.dropdown__content',
  classSelected: 'dropdown__content__item_selected'
  }).addEventToItems('flowers');
;(function(){
  var fastRange = document.getElementById('fastRange'),
      rangeVal = document.getElementById('rangeVal'),
      fastRangeSteps = document.getElementById('FastRangeSteps'),
      offset = 0,
      range = [7, 9, 11, 15, 17, 19, 25, 35, 51],
      rangeLength = range.length-1;
  fastRange.style.width = "257px";
  function steps(arr) {
    var x = '';
    for (var i = 0; i < arr.length; i++)
      x += ' <li class="in-bl">'+range[i]+'</li>';
    return x;
  };
  fastRangeSteps.innerHTML = '<ul class="fast-buy__range__step clearfix">'+steps(range)+'</ul>';

  // var bla = function() {
  //   var x = '';
  //   for (var i = 0; i < arr.length; i++)
  //     x += ' <li class="in-bl">'+range[i]+'</li>';
  //   return '<ul class="fast-buy__range__step">'+x+'</ul>';
  // }();

  noUiSlider.create(fastRange, {
    start: [0],
    step: 1,
    connect: [true, false],
    orientation: 'horizontal',
    range: {
      'min': 0,
      'max': rangeLength
    },
    // pips: { // Show a scale with the slider
    //   mode: 'steps',
    //   stepped: true,
    //   density: 4
    // },
  });
  fastRange.noUiSlider.on('update', function(values, handle){
    offset = parseInt(values[handle]);
    rangeVal.innerHTML = range[offset];
  });
  document.getElementById('rangePlus').onclick = function(){
    if(offset < rangeLength)
      fastRange.noUiSlider.set(++offset);
  };
  document.getElementById('rangeMinus').onclick = function(){
    if(offset > 0)
      fastRange.noUiSlider.set(--offset);
  };
})();

  var wrap = document.getElementById('fastBuy'),
      cont = document.querySelector('#fastBuy .fast-buy__content'),
      height = cont.offsetHeight,
      timeoutId,
      delay = 0.5,
      toggle = false,
      sliderShift = document.querySelectorAll('.slide-shift');

  // cont.style.transition = 'top '+delay+'s';

  function shiftStart() {
    for (i = 0; i < sliderShift.length; i++)
      sliderShift[i].style.marginLeft = '-171px';
  }
  function shiftEnd() {
    for (i = 0; i < sliderShift.length; i++)
      sliderShift[i].style.marginLeft = 0;
  }

  document.getElementById('fastBuyToggle').onclick = function() {
    var parent = this.parentElement;
    var cont = parent.querySelector('.fast-buy__content');
    height = cont.offsetHeight;
    clearTimeout(timeoutId);
    if (!toggle) {
      shiftStart();
      toggle = true;
      cont.topIn(0);
    }else {
      shiftEnd();
      toggle = false;
      cont.topOut(height);
    };

    document.getElementById('fastBuyClose').onclick = function() {
      shiftEnd();
      toggle = false;
      cont.topOut(height);
    };
  };
function rmClasses(el, className) {
  for (var i=0; i<el.length; i++) {
    if (el[i].hasClass(className)) {
      el[i].removeClass(className);
    }
  }
}

function rmDisplayBlock(el) {
  for (var i=0; i<el.length; i++) {
    el[i].style.display = 'none';
  }
}

for (var i=0; i<tabNav.length; i++) {
  var $this = this;
  tabNav[i].onclick = (function(i) {
    return function() {
      if (!this.hasClass('tabs__nav_item_active')) {
        rmClasses(tabNav,'tabs__nav_item_active');
        this.addClass('tabs__nav_item_active');
        rmDisplayBlock(tabCont);
        tabCont[i].fadeIn();
      }
    }
  })(i);
}

;(function() {

  var topBtm;

  var getScrollTop = function() {
    return window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
  };
  var up = function() {
    var duration = getScrollTop() / 15;
    var tId = setInterval(function() {
      if ( getScrollTop() != 0 ) window.scrollBy(0, -duration);
      else clearInterval(tId);
    }, 15);
  };
  var updateScroll = function() {
    topBtm.style.display = (getScrollTop() > 20) ? 'block' : 'none';
  };
  var init = function(id) {
    topBtm = document.getElementById(id);
    window.addEventListener('scroll', updateScroll, false);
    return topBtm;
  };

  window.scrollToTop = {
    init: init,
    up: up
  };

})();
scrollToTop.init('top').onclick = function() {
  scrollToTop.up();
};
})();
//# sourceMappingURL=maps/main.js.map

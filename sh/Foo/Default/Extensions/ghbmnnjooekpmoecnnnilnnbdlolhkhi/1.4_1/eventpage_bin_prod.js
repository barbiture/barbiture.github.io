'use strict';var h,l=this;function aa(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"function"==m(a)}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return q.apply(null,arguments)}function da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ea=Date.now||function(){return+new Date};
function t(a,b){function c(){}c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.M=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ga(a,b){return a<b?-1:a>b?1:0};function ha(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function ia(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function ja(a,b,c){for(var d in a)b.call(c,a[d],d,a)};var u;a:{var ka=l.navigator;if(ka){var la=ka.userAgent;if(la){u=la;break a}}u=""};var ma="",na=/WebKit\/(\S+)/.exec(u);na&&(ma=na?na[1]:"");var oa=ma,pa={};
function qa(){if(!pa["528"]){for(var a=0,b=fa(String(oa)).split("."),c=fa("528").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"",k=/(\d*)(\D*)/g,r=/(\d*)(\D*)/g;do{var p=k.exec(f)||["","",""],G=r.exec(g)||["","",""];if(0==p[0].length&&0==G[0].length)break;a=ga(0==p[1].length?0:parseInt(p[1],10),0==G[1].length?0:parseInt(G[1],10))||ga(0==p[2].length,0==G[2].length)||ga(p[2],G[2])}while(0==a)}pa["528"]=0<=a}};function v(){}function w(a,b){a.a=null;b||(b=[]);a.g=void 0;a.b=-1;a.i=b;a:{if(a.i.length){var c=a.i.length-1,d=a.i[c];if(d&&"object"==typeof d&&"array"!=m(d)){a.f=c-a.b;a.c=d;break a}}a.f=Number.MAX_VALUE}}var ra=[];function x(a,b){if(b<a.f){var c=b+a.b,d=a.i[c];return d===ra?a.i[c]=[]:d}d=a.c[b];return d===ra?a.c[b]=[]:d}function y(a,b,c){b<a.f?a.i[b+a.b]=c:a.c[b]=c}function sa(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=x(a,c);d&&(a.a[c]=new b(d))}return a.a[c]}
function z(a,b,c){a.a||(a.a={});var d=c?c.i:c;a.a[b]=c;y(a,b,d)}v.prototype.toString=function(){return this.i.toString()};function ta(a){w(this,a)}t(ta,v);function ua(a){w(this,a)}t(ua,v);function va(a,b){y(a,1,b)}function wa(a){w(this,a)}t(wa,v);wa.prototype.getMessage=function(){return x(this,1)};function xa(a){w(this,a)}t(xa,v);function ya(a){w(this,a)}t(ya,v);function za(a){w(this,a)}t(za,v);function Aa(a){w(this,a)}t(Aa,v);function Ba(a){w(this,a)}t(Ba,v);function Ca(a){w(this,a)}t(Ca,v);function Da(){this.b="";this.a=null}function Ea(a){var b=new Da;b.b=a;b.a=0}Ea("<!DOCTYPE html>");Ea("");Ea("<br>");var Fa="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Ga(){}Ga.prototype.next=function(){throw Fa;};Ga.prototype.C=function(){return this};function A(a,b){this.b={};this.a=[];this.f=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof A)e=a.s(),d=a.m();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}}h=A.prototype;h.m=function(){B(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};h.s=function(){B(this);return this.a.concat()};
h.clear=function(){this.b={};this.f=this.c=this.a.length=0};h.remove=function(a){return C(this.b,a)?(delete this.b[a],this.c--,this.f++,this.a.length>2*this.c&&B(this),!0):!1};function B(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];C(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],C(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}h.get=function(a,b){return C(this.b,a)?this.b[a]:b};
h.set=function(a,b){C(this.b,a)||(this.c++,this.a.push(a),this.f++);this.b[a]=b};h.forEach=function(a,b){for(var c=this.s(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new A(this)};h.C=function(a){B(this);var b=0,c=this.f,d=this,e=new Ga;e.next=function(){if(c!=d.f)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Fa;var e=d.a[b++];return a?e:d.b[e]};return e};
function C(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function Ha(){}function D(a,b){this.name=a;this.value=b}D.prototype.toString=function(){return this.name};var Ia=new D("SHOUT",1200),Ja=new D("SEVERE",1E3),Ka=new D("WARNING",900);Ha.prototype.log=function(){};var La=null;function E(){this.a=ea()}var Ma=new E;E.prototype.set=function(a){this.a=a};E.prototype.reset=function(){this.set(ea())};E.prototype.get=function(){return this.a};function F(a){this.f=a||"";this.g=Ma}F.prototype.a=!0;F.prototype.b=!0;F.prototype.c=!1;function H(a){return 10>a?"0"+a:String(a)}function Na(a,b){var c=(a.b()-b)/1E3,d=c.toFixed(3),e=0;if(1>c)e=2;else for(;100>c;)e++,c*=10;for(;0<e--;)d=" "+d;return d}function Oa(a){F.call(this,a)}t(Oa,F);function Pa(){q(this.f,this);this.a=new Oa;this.a.b=!1;this.a.c=!1;this.b=this.a.a=!1;this.c="";this.g={}}function Qa(a){1!=a.b&&(La||(La=new Ha),a.b=!0)}
Pa.prototype.f=function(a){if(!this.g[a.a()]){var b;b=this.a;var c=[];c.push(b.f," ");if(b.b){var d=new Date(a.b());c.push("[",H(d.getFullYear()-2E3)+H(d.getMonth()+1)+H(d.getDate())+" "+H(d.getHours())+":"+H(d.getMinutes())+":"+H(d.getSeconds())+"."+H(Math.floor(d.getMilliseconds()/10)),"] ")}c.push("[",Na(a,b.g.get()),"s] ");c.push("[",a.a(),"] ");c.push(a.getMessage());b.c&&(d=a.c())&&c.push("\n",d instanceof Error?d.message:d.toString());b.a&&c.push("\n");b=c.join("");if(c=Ra)switch(a.f()){case Ia:I(c,
"info",b);break;case Ja:I(c,"error",b);break;case Ka:I(c,"warn",b);break;default:I(c,"debug",b)}else this.c+=b}};var Ra=l.console;function I(a,b,c){if(a[b])a[b](c);else a.log(c)};function J(){this.c=this.c;this.b=this.b}J.prototype.c=!1;J.prototype.B=function(){this.c||(this.c=!0,this.o())};function Sa(a,b){a.c?b.call(void 0):(a.b||(a.b=[]),a.b.push(b))}J.prototype.o=function(){if(this.b)for(;this.b.length;)this.b.shift()()};function Ta(a){a&&"function"==typeof a.B&&a.B()};qa();qa();function Ua(a,b){this.type=a;this.target=b}Ua.prototype.b=function(){};function K(a){Ua.call(this,a?a.type:"");this.a=this.target=null;a&&(this.type=a.type,this.target=a.target||a.srcElement,this.a=a,a.defaultPrevented&&this.b())}t(K,Ua);K.prototype.b=function(){K.w.b.call(this);var a=this.a;a.preventDefault?a.preventDefault():a.returnValue=!1};var Va="closure_listenable_"+(1E6*Math.random()|0),Wa=0;function Xa(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.b=!!d;this.a=e;this.D=++Wa;this.removed=this.u=!1}function L(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.a=null};function M(a){this.src=a;this.a={};this.b=0}M.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Ya(e,b,c,d);return-1<b?(L(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};function Za(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Array.prototype.indexOf.call(d,b,void 0),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(L(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
M.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,L(d[e]);delete this.a[c];this.b--}return b};function Ya(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.b==!!c&&f.a==d)return e}return-1};var $a="closure_lm_"+(1E6*Math.random()|0),ab={},bb=0;
function cb(a,b,c,d,e){if("array"==m(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);if(a&&a[Va])a=a.listen(b,c,d,e);else{f=c;if(!b)throw Error("Invalid event type");c=!!d;var g=eb(a);g||(a[$a]=g=new M(a));var k=g,r=b.toString(),g=k.a[r];g||(g=k.a[r]=[],k.b++);var p=Ya(g,f,d,e);-1<p?(d=g[p],d.u=!1):(d=new Xa(f,k.src,r,!!d,e),d.u=!1,g.push(d));if(!d.proxy){e=fb();d.proxy=e;e.src=a;e.listener=d;if(a.addEventListener)a.addEventListener(b.toString(),e,c);else if(a.attachEvent)a.attachEvent(gb(b.toString()),
e);else throw Error("addEventListener and attachEvent are unavailable.");bb++}a=d}return a}function fb(){function a(c){return b.call(a.src,a.listener,c)}var b=hb;return a}function ib(a){if("number"!=typeof a&&a&&!a.removed){var b=a.src;if(b&&b[Va])Za(b.a,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.b):b.detachEvent&&b.detachEvent(gb(c),d);bb--;(c=eb(b))?(Za(c,a),0==c.b&&(c.src=null,b[$a]=null)):L(a)}}}function gb(a){return a in ab?ab[a]:ab[a]="on"+a}
function hb(a,b){var c;if(a.removed)c=!0;else{c=new K(b);var d=a.listener,e=a.a||a.src;a.u&&ib(a);c=d.call(e,c)}return c}function eb(a){a=a[$a];return a instanceof M?a:null}var jb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if(n(a))return a;a[jb]||(a[jb]=function(b){return a.handleEvent(b)});return a[jb]};function N(a){J.call(this);this.f=a;this.a={}}t(N,J);var kb=[];N.prototype.listen=function(a,b,c,d){"array"!=m(b)&&(b&&(kb[0]=b.toString()),b=kb);for(var e=0;e<b.length;e++){var f=cb(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.a[f.D]=f}return this};N.prototype.removeAll=function(){ja(this.a,function(a,b){this.a.hasOwnProperty(b)&&ib(a)},this);this.a={}};N.prototype.o=function(){N.w.o.call(this);this.removeAll()};
N.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function lb(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}lb.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};function mb(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};function nb(a){l.setTimeout(function(){throw a;},0)}var ob;
function pb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==u.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=q(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==u.indexOf("Trident")&&-1==u.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.A;c.A=null;a()}};return function(a){d.next={A:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=
document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};function qb(){this.b=this.a=null}var sb=new lb(function(){return new rb},function(a){a.reset()},100);qb.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};function rb(){this.next=this.b=this.a=null}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};rb.prototype.reset=function(){this.next=this.b=this.a=null};function tb(a,b){O||ub();vb||(O(),vb=!0);var c=wb,d=sb.get();d.set(a,b);c.b?c.b.next=d:c.a=d;c.b=d}var O;function ub(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);O=function(){a.then(xb)}}else O=function(){var a=xb,c;!(c=!n(l.setImmediate))&&(c=l.Window&&l.Window.prototype)&&(c=-1==u.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate);c?(ob||(ob=pb()),ob(a)):l.setImmediate(a)}}var vb=!1,wb=new qb;
function xb(){for(var a=null;a=wb.remove();){try{a.a.call(a.b)}catch(b){nb(b)}mb(sb,a)}vb=!1};function P(a,b){this.a=0;this.j=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=aa)try{var c=this;a.call(b,function(a){Q(c,2,a)},function(a){Q(c,3,a)})}catch(d){Q(this,3,d)}}function yb(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}yb.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var zb=new lb(function(){return new yb},function(a){a.reset()},100);function Ab(a,b,c){var d=zb.get();d.f=a;d.b=b;d.c=c;return d}
function R(a){if(a instanceof P)return a;var b=new P(aa);Q(b,2,a);return b}function Bb(a,b,c){Cb(a,b,c,null)||tb(da(b,a))}function Db(){var a=[Eb(),Fb()];return new P(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,r;k<a.length;k++)r=a[k],Bb(r,da(f,k),g);else b(e)})}function Gb(){var a,b=new P(function(b){a=b});return new Hb(b,a)}P.prototype.then=function(a,b,c){return Ib(this,n(a)?a:null,n(b)?b:null,c)};P.prototype.then=P.prototype.then;
P.prototype.$goog_Thenable=!0;function Jb(a,b){var c=Ab(b,b,void 0);c.g=!0;Kb(a,c);return a}function Lb(a,b){return Ib(a,null,b,void 0)}function Kb(a,b){a.b||2!=a.a&&3!=a.a||Mb(a);a.c?a.c.next=b:a.b=b;a.c=b}function Ib(a,b,c,d){var e=Ab(null,null,null);e.a=new P(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(p){g(p)}}:a;e.b=c?function(b){try{var e=c.call(d,b);a(e)}catch(p){g(p)}}:g});e.a.f=a;Kb(a,e);return e.a}P.prototype.v=function(a){this.a=0;Q(this,2,a)};
P.prototype.G=function(a){this.a=0;Q(this,3,a)};function Q(a,b,c){0==a.a&&(a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Cb(c,a.v,a.G,a)||(a.j=c,a.a=b,a.f=null,Mb(a),3!=b||Nb(a,c)))}
function Cb(a,b,c,d){if(a instanceof P)return Kb(a,Ab(b||aa,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(n(f))return Ob(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}function Ob(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}function g(a){k||(k=!0,c.call(e,a))}var k=!1;try{b.call(a,g,f)}catch(r){f(r)}}function Mb(a){a.h||(a.h=!0,tb(a.l,a))}
function Pb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);return b}P.prototype.l=function(){for(var a=null;a=Pb(this);){var b=this.a,c=this.j;if(3==b&&a.b&&!a.g)for(var d=void 0,d=this;d&&d.g;d=d.f)d.g=!1;if(a.a)a.a.f=null,Qb(a,b,c);else try{a.g?a.f.call(a.c):Qb(a,b,c)}catch(e){Rb.call(null,e)}mb(zb,a)}this.h=!1};function Qb(a,b,c){2==b?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function Nb(a,b){a.g=!0;tb(function(){a.g&&Rb.call(null,b)})}var Rb=nb;
function Hb(a,b){this.b=a;this.a=b};function Sb(a,b){if(n(a))b&&(a=q(a,b));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");2147483647<Number(252E5)||l.setTimeout(a,252E5)};var Tb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ub(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};function S(a,b){this.g=this.j=this.b="";this.h=null;this.f=this.l="";this.a=!1;var c;a instanceof S?(this.a=void 0!==b?b:a.a,Vb(this,a.b),this.j=a.j,Wb(this,a.g),Xb(this,a.h),Yb(this,a.l),Zb(this,a.c.clone()),this.f=a.f):a&&(c=String(a).match(Tb))?(this.a=!!b,Vb(this,c[1]||"",!0),this.j=T(c[2]||""),Wb(this,c[3]||"",!0),Xb(this,c[4]),Yb(this,c[5]||"",!0),Zb(this,c[6]||"",!0),this.f=T(c[7]||"")):(this.a=!!b,this.c=new U(null,0,this.a))}
S.prototype.toString=function(){var a=[],b=this.b;b&&a.push(V(b,$b,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(V(b,$b,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.h,null!=c&&a.push(":",String(c));if(c=this.l)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(V(c,"/"==c.charAt(0)?ac:bc,!0));(c=this.c.toString())&&a.push("?",c);(c=this.f)&&a.push("#",V(c,cc));return a.join("")};S.prototype.clone=function(){return new S(this)};
function Vb(a,b,c){a.b=c?T(b,!0):b;a.b&&(a.b=a.b.replace(/:$/,""));return a}function Wb(a,b,c){a.g=c?T(b,!0):b;return a}function Xb(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.h=b}else a.h=null}function Yb(a,b,c){a.l=c?T(b,!0):b;return a}function Zb(a,b,c){b instanceof U?(a.c=b,dc(a.c,a.a)):(c||(b=V(b,ec)),a.c=new U(b,0,a.a))}function T(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function V(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,fc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $b=/[#\/\?@]/g,bc=/[\#\?:]/g,ac=/[\#\?]/g,ec=/[\#\?@]/g,cc=/#/g;function U(a,b,c){this.b=this.a=null;this.c=a||null;this.f=!!c}
function W(a){a.a||(a.a=new A,a.b=0,a.c&&Ub(a.c,function(b,c){var d=decodeURIComponent(b.replace(/\+/g," "));W(a);a.c=null;var d=X(a,d),e=a.a.get(d);e||a.a.set(d,e=[]);e.push(c);a.b=a.b+1}))}h=U.prototype;h.remove=function(a){W(this);a=X(this,a);return C(this.a.b,a)?(this.c=null,this.b=this.b-this.a.get(a).length,this.a.remove(a)):!1};h.clear=function(){this.a=this.c=null;this.b=0};function gc(a,b){W(a);b=X(a,b);return C(a.a.b,b)}
h.s=function(){W(this);for(var a=this.a.m(),b=this.a.s(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.m=function(a){W(this);var b=[];if("string"==typeof a)gc(this,a)&&(b=ha(b,this.a.get(X(this,a))));else{a=this.a.m();for(var c=0;c<a.length;c++)b=ha(b,a[c])}return b};h.set=function(a,b){W(this);this.c=null;a=X(this,a);gc(this,a)&&(this.b=this.b-this.a.get(a).length);this.a.set(a,[b]);this.b=this.b+1;return this};
h.get=function(a,b){var c=a?this.m(a):[];return 0<c.length?String(c[0]):b};h.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.s(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.m(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.c=a.join("&")};h.clone=function(){var a=new U;a.c=this.c;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};
function X(a,b){var c=String(b);a.f&&(c=c.toLowerCase());return c}function dc(a,b){b&&!a.f&&(W(a),a.c=null,a.a.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),this.remove(e),0<a.length&&(this.c=null,this.a.set(X(this,e),ia(a)),this.b=this.b+a.length))},a));a.f=b};function hc(){return ic(chrome.storage.local,["offlineOptedIn"]).then(function(a){a=a.offlineOptedIn;switch(a){case void 0:return"unknown";case !0:return"opted_in";case !1:return"opted_out";default:throw Error("Cannot handle opt in value "+a);}})}function Eb(){return ic(chrome.storage.managed,["allowedDocsOfflineDomains"]).then(function(a){return a&&a.allowedDocsOfflineDomains?a.allowedDocsOfflineDomains:[]})}
function Fb(){return ic(chrome.storage.managed,["autoEnabledDocsOfflineDomains"]).then(function(a){return a&&a.autoEnabledDocsOfflineDomains?a.autoEnabledDocsOfflineDomains:[]})}function ic(a,b){return new P(function(c,d){a.get(b,function(a){chrome.runtime.lastError?d(chrome.runtime.lastError):c(a)})})}function jc(a){return new P(function(b,c){chrome.storage.local.set(a,function(){chrome.runtime.lastError?c(chrome.runtime.lastError):b()})})};function Y(){this.a=this.j=null;this.f=!1;this.h=Gb();this.g=!1;this.v=new Pa;Qa(this.v);chrome.alarms.onAlarm.addListener(q(this.H,this));chrome.runtime.onMessageExternal.addListener(q(this.I,this));this.l=new N(this);Sa(this,da(Ta,this.l));this.l.listen(l,"message",this.J);chrome.runtime.onConnectExternal.addListener(function(){});Sb(this.L,this)}t(Y,J);h=Y.prototype;h.L=function(){chrome.alarms.create("open",{delayInMinutes:1});l.close()};
function kc(a){return new P(function(a){chrome.alarms.get("heartbeat",function(c){c||(chrome.alarms.create("heartbeat",{periodInMinutes:5}),lc(this,"heartbeat"));a()}.bind(this))}.bind(a))}function mc(){return new P(function(a){chrome.alarms.clear("heartbeat",function(){a()})})}h.F=function(){return hc().then(function(a){switch(a){case "unknown":case "opted_in":nc(this,null);break;case "opted_out":break;default:throw Error("Could not handle opt in status "+a);}}.bind(this))};
function Z(a){a.a&&(a.g&&(a.h=Gb(),a.g=!1),a.f=!1,a.a.parentNode&&a.a.parentNode.removeChild(a.a),a.a=null)}function nc(a,b){Z(a);a.a=document.createElement("iframe");a.a.id="extensionFrame";var c=a.a,d;d=Yb(Wb(Vb(new S,"https"),a.j),"/offline/extension/frame").toString()+"?ouid="+(b?encodeURIComponent(String(b)):"")+"";c.src=d;document.body.appendChild(a.a);a.f=!!b}h.J=function(a){var b=a.a;b&&b.data&&b.ports&&b.ports.length&&(a=new ta(b.data),oc(this,a,1<b.ports.length?b.ports[1]:void 0).then(function(a){b.ports[0].postMessage(a.i)}))};
h.I=function(a,b,c){var d=new ta(a);Lb(oc(this,d).then(function(a){c(a.i)}.bind(this)),function(a){if(a instanceof Error&&"Attempting to use a disconnected port object"==a.message)x(d,1);else throw a;}.bind(this));return!0};function oc(a,b,c){return Lb(R().then(a.K.bind(a,b,c)),function(a){a=a instanceof Error?a:Error(a);var b=new ua,c=new wa;z(b,5,c);y(c,1,a.message);return b})}
h.K=function(a,b){var c=new ua;va(c,x(a,1));switch(x(a,1)){case 1:return this.h.a(b),this.g=!0,R(c);case 2:return jc({offlineOptedIn:!0}).then(function(){this.a||nc(this,null);return kc(this)}.bind(this)).then(function(){return c});case 3:var d=sa(a,xa,3);return d&&x(d,1)?(d=x(d,1),pc(this,d),R(c)):jc({offlineOptedIn:!1}).then(function(){return mc()}.bind(this)).then(function(){Z(this);return c}.bind(this));case 5:return qc(sa(a,ya,5)).then(function(a){z(c,4,a);return c});case 4:return d=sa(a,Aa,
4),rc(this,d).then(function(a){z(c,3,a);return c});default:throw Error("Dropped unknown message "+a);}};function qc(a){var b=x(a,1);return Db().then(function(a){var d=a[0],e=a[1];a=new za;e=0<=Array.prototype.indexOf.call(e,b,void 0);y(a,1,0<=Array.prototype.indexOf.call(d,b,void 0)||e);y(a,2,e);return a})}function pc(a,b){a.f?Z(a):nc(a,b)}h.H=function(a){lc(this,a.name)};function lc(a,b){var c=new Aa;y(c,1,0);var d=new Ca;y(d,1,b);z(c,2,d);rc(a,c)}
function rc(a,b){return a.h.b.then(q(function(a){var d=new MessageChannel;return Jb(new P(function(e){d.port1.onmessage=function(a){e(new Ba(a.data))};a.postMessage(b.i,[d.port2])}),function(){d.port1.close()})},a))}h.o=function(){Z(this);Y.w.o.call(this)};var sc=new Y;sc.j="docs.google.com";R().then(q(sc.F,sc));
/*
 AngularJS v1.3.7
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.7/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:H(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function C(){}function oa(b){return b}function da(b){return function(){return b}}function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function P(b){return null!==b&&"object"===typeof b}function H(b){return"string"===typeof b}function V(b){return"number"===typeof b}function pa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ta(b){return b&&b.window===b}function Ua(b){return b&&b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ta(b)||Ua(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(P(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),P(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),P(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Ea(b,[],c,d):pa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):P(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(P(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Ua(b)||Ua(a)||Ta(b)||Ta(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Ua(a)&&
(c="$SCOPE");return c}function Za(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return H(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){x(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,H(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){P(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Nd(){var b;uc||((ra=M.jQuery)&&ra.fn.on?(B=ra,z(ra.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ja("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&x(b)&&(b=b[b.length-1]);
Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,injector:Ob,noop:C,bind:nc,toJson:Za,
fromJson:oc,identity:oa,isUndefined:D,isDefined:y,isString:H,isFunction:G,isObject:P,isNumber:V,isElement:mc,isArray:x,version:Qd,isDate:pa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:$a,reloadWithDebugInfo:Kd});ab=Od(M);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Rd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,form:Ud,script:Vd,select:Wd,style:Xd,
option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function bb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===na||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;H(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!P(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw H(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(P(b))s(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(D(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{H(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw x(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=Vb(b,a,g),l,q,n;q=0;for(l=h.length;q<l;q++){n=h[q];if("string"!==
typeof n)throw Ga("itkn",n);k.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}x(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return P(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new cb([],!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){La(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=n.$injector=h(n,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||C)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});J=b(N,
a)})()}function g(){h();l()}function h(){A=b.history.state;A=D(A)?null:A;fa(A,I)&&(A=I);I=A}function l(){if(E!==m.url()||F!==A)E=m.url(),F=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,p={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],J;m.addPollFn=function(a){D(J)&&f(100,r);L.push(a);return a};var A,F,E=q.href,S=a.find("base"),X=null;h();F=A;m.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=F===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;F=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),F=A);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return A};var W=[],wa=!1,I=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?n.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":H(b)&&(d=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==y)for(y=n.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};m.defer.cancel=function(a){return p[a]?(delete p[a],O(a),e(C),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};n=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){La(a,"directive");H(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";P(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(n));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,p,v,w,L,J,A){function F(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,n,p,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(n=h.length;q<n;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,p=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,p)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,n,r,p=0;p<a.length;p++){l=new Xb;k=W(a[p],[],l,0===p?d:t,e);(f=k.length?ea(k,a[p],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(p,f,l),n=!0,r=r||f;f=null}return n?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:ca(b,ya(ua(a)),"E",d,g);for(var k,q,n,r=a.attributes,p=0,w=r&&r.length;p<w;p++){var O=!1,L=!1;k=r[p];l=k.name;q=U(k.value);k=ya(l);if(n=eb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");D(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Oa(a,b,q,k,n);ca(b,k,"A",d,g,O,L)}a=a.className;if(H(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function I(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,n,r){function w(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=I(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});n.push(b)}}function L(a,b,c,d){var e,f="data",
g=!1,l=c,k;if(H(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}x(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Ua(a)||(c=b,b=a,a=t);C&&(d=F);c||(c=C?W.parent():W);return h(a,b,d,c,wa)}var r,w,u,A,
F,db,W,I;d===f?(I=e,W=e.$$element):(W=B(f),I=new Xb(W,e));S&&(A=c.$new(!0));h&&(db=l,db.$$boundTransclude=h);J&&(X={},F={},s(J,function(a){var b={$scope:a===S||a.$$isolateScope?A:c,$element:W,$attrs:I,$transclude:db};u=a.controller;"@"==u&&(u=I[a.name]);b=p(u,b,!0,a.controllerAs);F[a.name]=b;C||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,A,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=A;g&&g.identifier&&!0===S.bindToController&&
(xa=g.instance);s(A.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":I.$observe(e,function(a){xa[d]=a});I.$$observers[e].$$scope=c;I[e]&&(xa[d]=b(I[e])(c));break;case "=":if(f&&!I[e])break;h=O(I[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",I[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?
c.$watchCollection(I[e],f):c.$watch(O(I[e],f),null,h.literal);A.$on("$destroy",f);break;case "&":h=O(I[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,F),db);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=A);a&&a(wa,f.childNodes,t,h);for(g=n.length-1;0<=g;g--)w=n[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,F),db)}r=r||{};for(var A=-Number.MAX_VALUE,
F,J=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,D=!1,C=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Oa=K.$$start,eb=K.$$end;Oa&&(aa=wa(d,Oa,eb));N=t;if(A>K.priority)break;if(N=K.scope)K.templateUrl||(P(N)?(Na("new/isolated scope",S||F,K,aa),S=K):Na("new/isolated scope",S,K,aa)),F=F||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,J=J||{},Na("'"+z+"' controller",J[z],
K,aa),J[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Na("transclusion",ea,K,aa),ea=K),"element"==N?(C=!0,A=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Ya.call(N,0),d),Aa=E(N,f,A,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(D=!0,Na("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];d=N[0];if(1!=N.length||d.nodeType!==
na)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)D=!0,Na("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,n,{controllerDirectives:J,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Oa,eb):Q&&w(Q.pre,Q.post,Oa,eb)}catch(qf){c(qf,va(aa))}K.terminal&&
(v.terminal=!0,A=Math.max(A,K.priority))}v.scope=F&&!0===F.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=C;v.templateOnThisElement=D;v.transclude=Aa;r.hasElementTranscludeDirective=C;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,p=e.length;r<p;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=
q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==
f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,n=b[0],p=a.shift(),w=z({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),O=G(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,u=p.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(p.replace){r=Rb.test(r)?Tc(Wb(u,U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==
na)throw ja("tplrt",p.name,O);r={$attr:{}};V(d,b,L);var A=W(L,[],r);P(p.scope)&&y(A);a=A.concat(a);Qc(c,r)}else L=n,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,p,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var J=l.shift(),E=l.shift(),A=b[0];if(!r.$$destroyed){if(v!==n){var I=v.className;h.hasElementTranscludeDirective&&p.replace||(A=Tb(L));V(J,B(v),A);F(B(A),I)}v=k.transcludeOnThisElement?X(r,k.transclude,E):E;k(q,r,A,d,v)}}l=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,
d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Oa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",
va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,
h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ra?(Pb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&J.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):
h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+A(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*l]).split(/\s/);g+=A(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||
b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Wa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?oa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},eb=/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=
a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;E.$$addBindingClass=k?function(a){F(a,"ng-binding")}:C;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;E.$$addScopeClass=k?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:C;return E}]}function ya(b){return bb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");P(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!P(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,n,q;l=!0===l;k&&H(k)&&(q=k);H(g)&&
(k=g.match(c),n=k[1],q=q||k[3],g=b.hasOwnProperty(n)?b[n]:vc(h.$scope,n,!0)||(a?vc(e,n,!0):t),sb(g,n,!0));if(l)return l=(x(g)?g[g.length-1]:g).prototype,m=Object.create(l),q&&f(h,q,m,n||g.name),z(function(){d.invoke(g,m,h,n);return m},{instance:m,identifier:q});m=d.instantiate(g,h,n);q&&f(h,q,m,n||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(H(b)){var c=
b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=P(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}
function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return P(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory",
"$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=z({},a.headers),
f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);D(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&
f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}F&&(200<=b&&300>b?F.put(X,[b,c,Wc(d),e]):F.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,
status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,qa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var J=h.defer(),A=J.promise,F,E,s=c.headers,X=n(c.url,c.params);k.pendingRequests.push(c);A.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=P(c.cache)?c.cache:P(b.cache)?b.cache:q);F&&(E=F.get(X),y(E)?E&&G(E.then)?E.then(w,w):x(E)?m(E[1],E[0],qa(E[2]),E[3]):m(E,200,{},
"OK"):F.put(X,A));D(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function n(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||D(a)||(x(a)||(a=[a]),s(a,function(a){P(a)&&(a=pa(a)?a.toISOString():Za(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(H(a)?l.get(a):
l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,
d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,n,q,u){function r(){v&&v();w&&w.abort()}
function O(a,d,e,f,g){J!==t&&c.cancel(J);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a;d[p].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){O(k,a,d[p].data,"",b);d[p]=C})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<n)var J=c(r,n);else n&&G(n.then)&&n.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",
function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function p(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,J=[],A=[],F=f.length,E=[],s=[];L<F;)if(-1!=(v=f.indexOf(b,L))&&-1!=(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,
v))),L=f.substring(v+h,w),J.push(L),A.push(c(L,p)),L=w+l,s.push(E.length),E.push("");else{L!==F&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||J.length){var X=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&D(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=J.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:J,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,
function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,n=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=m(function(){r.notify(q++);0<
l&&q>=l&&(r.resolve(q),n(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):
d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!H(b))throw Fb("ipthprfx",a,c);
ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=function(d){d=
za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),D(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,
a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(D(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):P(b)?(Va(b.enabled)&&(a.enabled=b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;
try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var n=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(n),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(n,n);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&
2!=b.which){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");P(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=n&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function fb(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},l=g||Pa(b)?h:oa,k=g||Pa(a)?h:oa,m=
g||Pa(c)?h:oa,n=g||Pa(d)?h:oa,q=g||Pa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=n(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],
c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return fb(a,b,c,b)};return e[b]=
f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?
!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,n=e.length;q<n;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);
y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,
c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var J=g?a:b;v=J[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new gb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=
m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),J[L]=v);return n(v,f);case "function":return n(d,f);default:return n(C,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=
T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(P(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof
u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=m;n.all=function(a){var b=new g,c=0,d=x(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function $e(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=
++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===
d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=
d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=C);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Wa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&
b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!D(e)){if(P(e))if(Sa(e))for(f!==q&&(f=q,p=f.length=0,k++),a=e.length,p!==a&&(k++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==
m&&(f=m={},p=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(p++,f[b]=g,k++));if(p>a)for(b in k++,f)e.hasOwnProperty(b)||(p--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,n=g(a,c),q=[],m={},u=!0,p=0;return this.$watch(n,function(){u?(u=!1,b(e,e,d)):b(e,h,d);if(l)if(P(e))if(Sa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=
e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,I;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{I=O.shift(),I.scope.$eval(I.expression,I.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===n?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?
"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;p.length;)try{p.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,
this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){p.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Xa([h],arguments,1),k,n;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(n=d.length;k<n;k++)if(d[k])try{d[k].apply(null,
l)}catch(m){f(m)}else d.splice(k,1),k--,n--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Xa([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],p=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=
d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(H(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};
this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));
var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),n,q,u=
!1;n=0;for(q=b.length;n<q;n++)if(d(b[n],g)){u=!0;break}if(u)for(n=0,q=a.length;n<q;n++)if(d(a[n],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=
c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ma,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",
function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var n in l)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=H(f.body.style.webkitTransition),m=H(f.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Qa)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;
return a.data},function(a){d.totalPendingRequests--;if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,
c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,n=(m?d:c).defer(),q=n.promise;l=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),
e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=n;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Qa&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,
port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=H(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(P(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",
ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){!0===a?a=fa:G(a)||(a=function(a,b){if(P(a)||P(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(d){return hb(d,b,a,c)}}function hb(b,a,c,d){var e=typeof b,f=typeof a;if("string"===f&&"!"===a.charAt(0))return!hb(b,
a.substring(1),c,d);if("array"===e)return b.some(function(b){return hb(b,a,c,d)});switch(e){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&hb(b[g],a,c))return!0;return!1}if("object"===f){for(g in a)if(e=a[g],!G(e)&&(f="$"===g,!hb(f?b:b[g],e,c,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,
a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||P(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));
b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",n=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(n=k.length-q,m=0;m<n;m++)0===(n-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=n;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&
(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}
function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||
"mediumDate";e=b.DATETIME_FORMATS[e]||e;H(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Xa(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return Za(b,a)}}function Gf(){return function(b,a){V(b)&&(b=b.toString());if(!x(b)&&
!H(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(H(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===
typeof a.toString&&(a=a.toString(),f(a))||"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(H(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return h(a,b)},c);d=b(a);
if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=
!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,
function(b,c){f.$setValidity(c,null,a)});Wa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=
function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||
(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(pa(c))return c;
if(H(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,
f,g,h,l,k,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):t}td(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!pa(a))throw Mb("datefmt",a);if(n(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,
d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||D(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||D(p)||c(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=P(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);
if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Va(e)?
e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!x(a)){if(H(a))return a.split(" ");if(P(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,
m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=qa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return H(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return H(b)?b.toUpperCase():
b},Qa,B,ra,Ya=[].slice,rf=[].splice,Pf=[].push,Da=Object.prototype.toString,Ja=T("ng"),ga=M.angular||(M.angular={}),ab,nb=0;Qa=Y.documentMode;C.$inject=[];oa.$inject=[];var x=Array.isArray,U=function(b){return H(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(y($a.isActive_))return $a.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=
b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,na=1,pb=3,Qd={full:"1.3.7",major:1,minor:3,dot:7,codeName:"leaky-obstruction"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,
inheritedData:Db,scope:function(b){return B.data(b,"$scope")||Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=bb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===na||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?
null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(P(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");
if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),
function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];
var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;D(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Tb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:g,target:a},c.type&&(e=z(e,c)),c=qa(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||
c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=H(c)?c:x(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=H(c)?c:x(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:C,cancel:C}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(H(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(P(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=D(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});gb.prototype={constructor:gb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){(f=a(d,f))||a.assign(d,f={});return c.assign(f,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],c):t},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,
g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||C;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ta(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});
s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?
(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,c){a.$name=c},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Ra).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(fb(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(fb(a,m,t,m),m=c,fb(a,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&fb(a,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ag=/(\s+|^)default(\s+|$)/,Mb=new T("ngModel"),Dd={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",
Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(pa(a))return a;if(H(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,
c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||D(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
D(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:C,
button:C,submit:C,reset:C,file:C},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],kb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Kb="ng-dirty",xd="ng-pending",bg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=
t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var n=f(d.ngModel),q=n.assign,u=n,r=q,O=null,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=n(a);G(d)&&(d=c(a));return d};
r=function(a,c){G(n(a))?g(a,{$$$p:p.$modelValue}):q(a,p.$modelValue)}}else if(!n.assign)throw Mb("nonassign",d.ngModel,va(e));};this.$render=C;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Ra)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=
!1;g.removeClass(e,Ra);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;
p.$$runValidators(p.$error[p.$$parserName||"parse"]?!1:t,a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(p.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(p.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(p.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!G(k.then))throw Mb("$asyncValidators",k);h(g,t);a.push(k.then(function(){h(g,
!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},C):l(!0)}function h(a,c){m===w&&p.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=p.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(p.$validators,function(a,c){h(c,null)}),s(p.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(O);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=
a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue,d=D(c)?t:!0;if(d)for(var e=0;e<p.$parsers.length;e++)if(c=p.$parsers[e](c),D(c)){d=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=u(a));var f=p.$modelValue,g=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;g&&(p.$modelValue=c,p.$modelValue!==f&&p.$$writeModelToScope());p.$$runValidators(d,c,p.$$lastCommittedViewValue,function(a){g||(p.$modelValue=
a?c:t,p.$modelValue!==f&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,p.$modelValue);s(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){p.$commitViewValue()},d):
l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==p.$modelValue){p.$modelValue=p.$$rawModelValue=c;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(t,c,f,C))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(kb);
return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xe=da({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){H(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&
!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||D(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},cg=/^(true|false|\d+)$/,
ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(ag,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=
a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Cc={},dg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,p,v,w,L=function(){v&&(v.remove(),v=null);p&&(p.$destroy(),p=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});p=c;w=a;p.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+n+r,p=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=
isNaN(c);d||c in q||(c=a.pluralCat(c-n));c===v||d&&isNaN(v)||(p(),p=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var m=k[1],n=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var p,v,w,D,z={$id:Ma};u?p=a(u):(w=function(a,c){return Ma(c)},D=function(a){return a});return function(a,f,g,k,m){p&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return p(a,
z)});var u=ha();a.$watchCollection(n,function(g){var k,p,n=f[0],E,z=ha(),C,S,N,G,J,x,H;q&&(a[q]=g);if(Sa(g))J=g,p=v||w;else{p=v||D;J=[];for(H in g)g.hasOwnProperty(H)&&"$"!=H.charAt(0)&&J.push(H);J.sort()}C=J.length;H=Array(C);for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],G=p(S,N,k),u[G])x=u[G],delete u[G],z[G]=x,H[k]=x;else{if(z[G])throw s(H,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,G,N);H[k]={id:G,scope:t,clone:t};z[G]=!0}for(E in u){x=u[E];G=tb(x.clone);c.leave(G);if(G[0].parentNode)for(k=0,
p=G.length;k<p;k++)G[k].$$NG_REMOVED=!0;x.scope.$destroy()}for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],x=H[k],x.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);x.clone[0]!=E&&c.move(tb(x.clone),null,B(n));n=x.clone[x.clone.length-1];e(x.scope,k,r,N,y,S,C)}else m(function(a,d){x.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;x.clone=a;z[x.id]=x;e(x.scope,k,r,N,y,S,C)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,
f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",
va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";
n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&p.prop("selected",!0)):D(a)&&p?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=
new cb(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(a,c,d){T[A]=d;H&&(T[H]=c);return a(e,T)}function k(a){var c;if(u)if(M&&x(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new cb(a);else M&&(a=h(M,null,
a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=H?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var I=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(H&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);I=I||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):H?B[F]:
F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!I}):I||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:G.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));I=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(I=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),I.text(t.label=d.label),
I.prop("label",t.label)),t.id!==d.id&&I.val(t.id=d.id),I[0].selected!==d.selected&&(I.prop("selected",t.selected=d.selected),Qa&&I.prop("selected",t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),I?I.after(U):n.element.append(U),I=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();
for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",r,va(f));var C=c(n[2]||n[1]),A=n[4]||n[6],D=/ as /.test(n[0])&&n[1],B=D?c(D):null,H=n[5],J=c(n[3]||""),F=c(n[2]?n[1]:A),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=
M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,
z=!1,p,v=!1,w=B(Y.createElement("option")),G=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var A=g.children(),H=A.length;h<H;h++)if(""===A[h].value){p=z=A.eq(h);break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?n(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),
m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1});M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! @license Firebase v2.0.6 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Qb=function(){return a.ef?a.ef:a.ef=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ma=Date.now||function(){return+new Date};function na(a,b){function c(){}c.prototype=b.prototype;a.oc=b.prototype;a.prototype=new c;a.Ag=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function oa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function pa(){this.Id=void 0}
function qa(a,b,c){switch(typeof b){case "string":ra(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],qa(a,a.Id?a.Id.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ra(f,c),
c.push(":"),qa(a,a.Id?a.Id.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var sa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ta=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function ra(a,b){b.push('"',a.replace(ta,function(a){if(a in sa)return sa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return sa[a]=e+b.toString(16)}),'"')};function ua(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):oa(a)}function t(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];qa(new pa,a,b);a=b.join("")}return a};function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function v(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function va(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function wa(a){var b={};va(a,function(a,d){b[a]=d});return b};function xa(a){this.xc=a;this.Hd="firebase:"}h=xa.prototype;h.set=function(a,b){null==b?this.xc.removeItem(this.Hd+a):this.xc.setItem(this.Hd+a,t(b))};h.get=function(a){a=this.xc.getItem(this.Hd+a);return null==a?null:ua(a)};h.remove=function(a){this.xc.removeItem(this.Hd+a)};h.ff=!1;h.toString=function(){return this.xc.toString()};function ya(){this.ha={}}ya.prototype.set=function(a,b){null==b?delete this.ha[a]:this.ha[a]=b};ya.prototype.get=function(a){return u(this.ha,a)?this.ha[a]:null};ya.prototype.remove=function(a){delete this.ha[a]};ya.prototype.ff=!0;function za(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new xa(b)}}catch(c){}return new ya}var Aa=za("localStorage"),Ba=za("sessionStorage");function Ca(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Cb=b;this.yb=c;this.yg=d;this.Gd=e||"";this.Ka=Aa.get("host:"+a)||this.host}function Da(a,b){b!==a.Ka&&(a.Ka=b,"s-"===a.Ka.substr(0,2)&&Aa.set("host:"+a.host,a.Ka))}Ca.prototype.toString=function(){var a=(this.Cb?"https://":"http://")+this.host;this.Gd&&(a+="<"+this.Gd+">");return a};function Ea(){this.Ta=-1};function Fa(){this.Ta=-1;this.Ta=64;this.R=[];this.be=[];this.Af=[];this.Dd=[];this.Dd[0]=128;for(var a=1;a<this.Ta;++a)this.Dd[a]=0;this.Rd=this.Tb=0;this.reset()}na(Fa,Ea);Fa.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.Rd=this.Tb=0};
function Ga(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
Fa.prototype.update=function(a,b){n(b)||(b=a.length);for(var c=b-this.Ta,d=0,e=this.be,f=this.Tb;d<b;){if(0==f)for(;d<=c;)Ga(this,a,d),d+=this.Ta;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ta){Ga(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ta){Ga(this,e);f=0;break}}this.Tb=f;this.Rd+=b};function Ha(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ma()).toString(36)};var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ma=w.reduce?function(a,b,c,d){d&&(b=q(b,d));return w.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ja(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Na=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c,d){return w.splice.apply(a,Sa(arguments,1))}function Sa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
function Ta(a,b){a.sort(b||Ua)}function Ua(a,b){return a>b?1:a<b?-1:0};var Va;a:{var Wa=aa.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function Ya(a){return-1!=Va.indexOf(a)};var Za=Ya("Opera")||Ya("OPR"),$a=Ya("Trident")||Ya("MSIE"),ab=Ya("Gecko")&&-1==Va.toLowerCase().indexOf("webkit")&&!(Ya("Trident")||Ya("MSIE")),bb=-1!=Va.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Va))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,r=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,g||(k=64));d.push(c[r],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a}};var hb=function(){var a=1;return function(){return a++}}();function x(a,b){if(!a)throw ib(b);}function ib(a){return Error("Firebase INTERNAL ASSERT FAILED:"+a)}
function jb(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Sa(d,c,
c+8192));b=a}}return b}catch(m){kb("base64Decode failed: ",m)}return null}function lb(a){var b=mb(a);a=new Fa;a.update(b);var b=[],c=8*a.Rd;56>a.Tb?a.update(a.Dd,56-a.Tb):a.update(a.Dd,a.Ta-(a.Tb-56));for(var d=a.Ta-1;56<=d;d--)a.be[d]=c&255,c/=256;Ga(a,a.be);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return fb(b)}
function nb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+nb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+t(arguments[c]):b+arguments[c],b+=" ";return b}var ob=null,pb=!0;function kb(a){!0===pb&&(pb=!1,null===ob&&!0===Ba.get("logging_enabled")&&qb(!0));if(ob){var b=nb.apply(null,arguments);ob(b)}}function rb(a){return function(){kb(a,arguments)}}
function sb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+nb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function tb(a){var b=nb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function z(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+nb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function ub(a){var b="",c="",d="",e=!0,f="https",g="";if(p(a)){var k=a.indexOf("//");0<=k&&(f=a.substring(0,k-1),a=a.substring(k+2));k=a.indexOf("/");-1===k&&(k=a.length);b=a.substring(0,k);a=a.substring(k+1);var l=b.split(".");if(3===l.length){k=l[2].indexOf(":");e=0<=k?"https"===f||"wss"===f:!0;c=l[1];d=l[0];g="";a=("/"+a).split("/");for(k=0;k<a.length;k++)if(0<a[k].length){l=a[k];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(m){}g+="/"+l}d=d.toLowerCase()}else 2===l.length&&(c=l[0])}return{host:b,
domain:c,vg:d,Cb:e,scheme:f,Pc:g}}function vb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function wb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function xb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=yb(a),d=yb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function zb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+t(b));}
function Ab(a){if("object"!==typeof a||null===a)return t(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=t(b[d]),c+=":",c+=Ab(a[b[d]]);return c+"}"}function Bb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Cb(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else A(a,b)}
function Db(a){x(!vb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Eb=/^-?\d{1,10}$/;function yb(a){return Eb.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Fb(a){try{a()}catch(b){setTimeout(function(){throw b;},Math.floor(0))}}function B(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Fb(function(){a.apply(null,c)})}};function Gb(a,b,c,d){this.me=b;this.Ld=c;this.Rc=d;this.nd=a}Gb.prototype.Rb=function(){var a=this.Ld.hc();return"value"===this.nd?a.path:a.parent().path};Gb.prototype.oe=function(){return this.nd};Gb.prototype.Pb=function(){return this.me.Pb(this)};Gb.prototype.toString=function(){return this.Rb().toString()+":"+this.nd+":"+t(this.Ld.Xe())};function Hb(a,b,c){this.me=a;this.error=b;this.path=c}Hb.prototype.Rb=function(){return this.path};Hb.prototype.oe=function(){return"cancel"};
Hb.prototype.Pb=function(){return this.me.Pb(this)};Hb.prototype.toString=function(){return this.path.toString()+":cancel"};function Ib(a,b,c){this.Kb=a;this.mb=b;this.vc=c||null}h=Ib.prototype;h.pf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.w.m;return new Gb("value",this,new C(a.Wa,b.hc(),c))};h.Pb=function(a){var b=this.vc;if("cancel"===a.oe()){x(this.mb,"Raising a cancel event on a listener with no cancel callback");var c=this.mb;return function(){c.call(b,a.error)}}var d=this.Kb;return function(){d.call(b,a.Ld)}};h.Te=function(a,b){return this.mb?new Hb(this,a,b):null};
h.matches=function(a){return a instanceof Ib&&(!a.Kb||!this.Kb||a.Kb===this.Kb)&&a.vc===this.vc};h.cf=function(){return null!==this.Kb};function Jb(a,b,c){this.ba=a;this.mb=b;this.vc=c}h=Jb.prototype;h.pf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ba};h.Te=function(a,b){return this.mb?new Hb(this,a,b):null};h.createEvent=function(a,b){var c=b.hc().k(a.nb);return new Gb(a.type,this,new C(a.Wa,c,b.w.m),a.Rc)};
h.Pb=function(a){var b=this.vc;if("cancel"===a.oe()){x(this.mb,"Raising a cancel event on a listener with no cancel callback");var c=this.mb;return function(){c.call(b,a.error)}}var d=this.ba[a.nd];return function(){d.call(b,a.Ld,a.Rc)}};h.matches=function(a){if(a instanceof Jb){if(this.ba&&a.ba){var b=Kb(a.ba);if(b===Kb(this.ba)){if(1===b){var b=Lb(a.ba),c=Lb(this.ba);return c===b&&(!a.ba[b]||!this.ba[c]||a.ba[b]===this.ba[c])}return Mb(this.ba,function(b,c){return a.ba[c]===b})}return!1}return!0}return!1};
h.cf=function(){return null!==this.ba};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,x(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function E(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function F(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(E(a,b,d)+"must be a valid function.");}function Nb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(E(a,b,!0)+"must be a valid context object.");};var Ob=/[\[\].#$\/\u0000-\u001F\u007F]/,Pb=/[\[\].#$\u0000-\u001F\u007F]/;function Qb(a){return p(a)&&0!==a.length&&!Ob.test(a)}function Rb(a){return null===a||p(a)||ga(a)&&!vb(a)||ia(a)&&u(a,".sv")}function Sb(a,b,c){c&&!n(b)||Tb(E(a,1,c),b)}
function Tb(a,b,c,d){c||(c=0);d=d||[];if(!n(b))throw Error(a+"contains undefined"+Ub(d));if(ha(b))throw Error(a+"contains a function"+Ub(d)+" with contents: "+b.toString());if(vb(b))throw Error(a+"contains "+b.toString()+Ub(d));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<mb(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ub(d)+" ('"+b.substring(0,50)+"...')");if(ia(b))for(var e in b)if(u(b,
e)){var f=b[e];if(".priority"!==e&&".value"!==e&&".sv"!==e&&!Qb(e))throw Error(a+" contains an invalid key ("+e+")"+Ub(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');d.push(e);Tb(a,f,c+1,d);d.pop()}}function Ub(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Vb(a,b){if(!ia(b)||ea(b))throw Error(E(a,1,!1)+" must be an Object containing the children to replace.");Sb(a,b,!1)}
function Wb(a,b,c){if(vb(c))throw Error(E(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Rb(c))throw Error(E(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Xb(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(E(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Yb(a,b,c,d){if((!d||n(c))&&!Qb(c))throw Error(E(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Zb(a,b){if(!p(b)||0===b.length||Pb.test(b))throw Error(E(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function $b(a,b){if(".info"===G(b))throw Error(a+" failed: Can't modify data under /.info/");}function ac(a,b){if(!p(b))throw Error(E(a,1,!1)+"must be a valid credential (a string).");}function bc(a,b,c){if(!p(c))throw Error(E(a,b,!1)+"must be a valid string.");}
function cc(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(E(a,b,d)+"must be a valid object.");}function dc(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(E(a,1,!1)+'must contain the key "'+c+'"');if(!p(v(b,c)))throw Error(E(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function ec(a,b){return xb(a.name,b.name)}function fc(a,b){return xb(a,b)};function gc(){}var hc={};function H(a){return q(a.compare,a)}gc.prototype.df=function(a,b){return 0!==this.compare(new I("[MIN_NAME]",a),new I("[MIN_NAME]",b))};gc.prototype.Ae=function(){return ic};function jc(a){this.Vb=a}na(jc,gc);h=jc.prototype;h.se=function(a){return!a.B(this.Vb).e()};h.compare=function(a,b){var c=a.K.B(this.Vb),d=b.K.B(this.Vb),c=c.he(d);return 0===c?xb(a.name,b.name):c};h.ye=function(a,b){var c=J(a),c=K.I(this.Vb,c);return new I(b,c)};
h.ze=function(){var a=K.I(this.Vb,kc);return new I("[MAX_NAME]",a)};h.toString=function(){return this.Vb};var L=new jc(".priority");function lc(){}na(lc,gc);h=lc.prototype;h.compare=function(a,b){return xb(a.name,b.name)};h.se=function(){throw ib("KeyIndex.isDefinedOn not expected to be called.");};h.df=function(){return!1};h.Ae=function(){return ic};h.ze=function(){return new I("[MAX_NAME]",K)};h.ye=function(a){x(p(a),"KeyIndex indexValue must always be a string.");return new I(a,K)};
h.toString=function(){return".key"};var mc=new lc;function nc(){this.yc=this.na=this.nc=this.ga=this.ka=!1;this.xb=0;this.Hb="";this.Bc=null;this.Xb="";this.Ac=null;this.Ub="";this.m=L}var oc=new nc;function pc(a){x(a.ga,"Only valid if start has been set");return a.Bc}function qc(a){x(a.ga,"Only valid if start has been set");return a.nc?a.Xb:"[MIN_NAME]"}function rc(a){x(a.na,"Only valid if end has been set");return a.Ac}function sc(a){x(a.na,"Only valid if end has been set");return a.yc?a.Ub:"[MAX_NAME]"}
function tc(a){x(a.ka,"Only valid if limit has been set");return a.xb}function uc(a){var b=new nc;b.ka=a.ka;b.xb=a.xb;b.ga=a.ga;b.Bc=a.Bc;b.nc=a.nc;b.Xb=a.Xb;b.na=a.na;b.Ac=a.Ac;b.yc=a.yc;b.Ub=a.Ub;b.m=a.m;return b}h=nc.prototype;h.ve=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="";return b};h.we=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="l";return b};h.xe=function(a){var b=uc(this);b.ka=!0;b.xb=a;b.Hb="r";return b};
h.Md=function(a,b){var c=uc(this);c.ga=!0;c.Bc=a;null!=b?(c.nc=!0,c.Xb=b):(c.nc=!1,c.Xb="");return c};h.md=function(a,b){var c=uc(this);c.na=!0;c.Ac=a;n(b)?(c.yc=!0,c.Ub=b):(c.Dg=!1,c.Ub="");return c};function vc(a,b){var c=uc(a);c.m=b;return c}function wc(a){return!(a.ga||a.na||a.ka)};function M(a,b,c,d){this.g=a;this.path=b;this.w=c;this.dc=d}
function xc(a){var b=null,c=null;a.ga&&(b=pc(a));a.na&&(c=rc(a));if(a.m===mc){if(a.ga){if("[MIN_NAME]"!=qc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=b&&"string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=sc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=
c&&"string"!==typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.m===L){if(null!=b&&!Rb(b)||null!=c&&!Rb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(x(a.m instanceof jc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function yc(a){if(a.ga&&a.na&&a.ka&&(!a.ka||""===a.Hb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function zc(a,b){if(!0===a.dc)throw Error(b+": You can't combine multiple orderBy calls.");}M.prototype.hc=function(){D("Query.ref",0,0,arguments.length);return new O(this.g,this.path)};M.prototype.ref=M.prototype.hc;
M.prototype.zb=function(a,b,c,d){D("Query.on",2,4,arguments.length);Xb("Query.on",a,!1);F("Query.on",2,b,!1);var e=Ac("Query.on",c,d);if("value"===a)Bc(this.g,this,new Ib(b,e.cancel||null,e.Ha||null));else{var f={};f[a]=b;Bc(this.g,this,new Jb(f,e.cancel,e.Ha))}return b};M.prototype.on=M.prototype.zb;
M.prototype.bc=function(a,b,c){D("Query.off",0,3,arguments.length);Xb("Query.off",a,!0);F("Query.off",2,b,!0);Nb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Ib(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Jb(e,null,c||null));e=this.g;d=".info"===G(this.path)?e.ud.hb(this,d):e.M.hb(this,d);Cc(e.Z,this.path,d)};M.prototype.off=M.prototype.bc;
M.prototype.gg=function(a,b){function c(g){f&&(f=!1,e.bc(a,c),b.call(d.Ha,g))}D("Query.once",2,4,arguments.length);Xb("Query.once",a,!1);F("Query.once",2,b,!1);var d=Ac("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.zb(a,c,function(b){e.bc(a,c);d.cancel&&d.cancel.call(d.Ha,b)})};M.prototype.once=M.prototype.gg;
M.prototype.ve=function(a){z("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.w.ve(a);yc(b);return new M(this.g,this.path,b,this.dc)};M.prototype.limit=M.prototype.ve;
M.prototype.we=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new M(this.g,this.path,this.w.we(a),this.dc)};M.prototype.limitToFirst=M.prototype.we;
M.prototype.xe=function(a){D("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.w.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new M(this.g,this.path,this.w.xe(a),this.dc)};M.prototype.limitToLast=M.prototype.xe;
M.prototype.hg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');Yb("Query.orderByChild",1,a,!1);zc(this,"Query.orderByChild");var b=vc(this.w,new jc(a));xc(b);return new M(this.g,this.path,b,!0)};M.prototype.orderByChild=M.prototype.hg;
M.prototype.ig=function(){D("Query.orderByKey",0,0,arguments.length);zc(this,"Query.orderByKey");var a=vc(this.w,mc);xc(a);return new M(this.g,this.path,a,!0)};M.prototype.orderByKey=M.prototype.ig;M.prototype.jg=function(){D("Query.orderByPriority",0,0,arguments.length);zc(this,"Query.orderByPriority");var a=vc(this.w,L);xc(a);return new M(this.g,this.path,a,!0)};M.prototype.orderByPriority=M.prototype.jg;
M.prototype.Md=function(a,b){D("Query.startAt",0,2,arguments.length);Sb("Query.startAt",a,!0);Yb("Query.startAt",2,b,!0);var c=this.w.Md(a,b);yc(c);xc(c);if(this.w.ga)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new M(this.g,this.path,c,this.dc)};M.prototype.startAt=M.prototype.Md;
M.prototype.md=function(a,b){D("Query.endAt",0,2,arguments.length);Sb("Query.endAt",a,!0);Yb("Query.endAt",2,b,!0);var c=this.w.md(a,b);yc(c);xc(c);if(this.w.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new M(this.g,this.path,c,this.dc)};M.prototype.endAt=M.prototype.md;
M.prototype.Of=function(a,b){D("Query.equalTo",1,2,arguments.length);Sb("Query.equalTo",a,!1);Yb("Query.equalTo",2,b,!0);if(this.w.ga)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.w.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Md(a,b).md(a,b)};M.prototype.equalTo=M.prototype.Of;
function Dc(a){a=a.w;var b={};a.ga&&(b.sp=a.Bc,a.nc&&(b.sn=a.Xb));a.na&&(b.ep=a.Ac,a.yc&&(b.en=a.Ub));if(a.ka){b.l=a.xb;var c=a.Hb;""===c&&(c=a.ga?"l":"r");b.vf=c}a.m!==L&&(b.i=a.m.toString());return b}M.prototype.Da=function(){var a=Ab(Dc(this));return"{}"===a?"default":a};
function Ac(a,b,c){var d={cancel:null,Ha:null};if(b&&c)d.cancel=b,F(a,3,d.cancel,!0),d.Ha=c,Nb(a,4,d.Ha);else if(b)if("object"===typeof b&&null!==b)d.Ha=b;else if("function"===typeof b)d.cancel=b;else throw Error(E(a,3,!0)+" must either be a cancel callback or a context object.");return d};function P(a,b){if(1==arguments.length){this.n=a.split("/");for(var c=0,d=0;d<this.n.length;d++)0<this.n[d].length&&(this.n[c]=this.n[d],c++);this.n.length=c;this.aa=0}else this.n=a,this.aa=b}function G(a){return a.aa>=a.n.length?null:a.n[a.aa]}function Q(a){return a.n.length-a.aa}function R(a){var b=a.aa;b<a.n.length&&b++;return new P(a.n,b)}P.prototype.toString=function(){for(var a="",b=this.aa;b<this.n.length;b++)""!==this.n[b]&&(a+="/"+this.n[b]);return a||"/"};
P.prototype.parent=function(){if(this.aa>=this.n.length)return null;for(var a=[],b=this.aa;b<this.n.length-1;b++)a.push(this.n[b]);return new P(a,0)};P.prototype.k=function(a){for(var b=[],c=this.aa;c<this.n.length;c++)b.push(this.n[c]);if(a instanceof P)for(c=a.aa;c<a.n.length;c++)b.push(a.n[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new P(b,0)};P.prototype.e=function(){return this.aa>=this.n.length};var S=new P("");
function T(a,b){var c=G(a);if(null===c)return b;if(c===G(b))return T(R(a),R(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}P.prototype.ja=function(a){if(Q(this)!==Q(a))return!1;for(var b=this.aa,c=a.aa;b<=this.n.length;b++,c++)if(this.n[b]!==a.n[c])return!1;return!0};P.prototype.contains=function(a){var b=this.aa,c=a.aa;if(Q(this)>Q(a))return!1;for(;b<this.n.length;){if(this.n[b]!==a.n[c])return!1;++b;++c}return!0};function Ec(){this.children={};this.dd=0;this.value=null}function Fc(a,b,c){this.yd=a?a:"";this.Oc=b?b:null;this.D=c?c:new Ec}function Gc(a,b){for(var c=b instanceof P?b:new P(b),d=a,e;null!==(e=G(c));)d=new Fc(e,d,v(d.D.children,e)||new Ec),c=R(c);return d}h=Fc.prototype;h.ta=function(){return this.D.value};function Hc(a,b){x("undefined"!==typeof b,"Cannot set value to undefined");a.D.value=b;Ic(a)}h.clear=function(){this.D.value=null;this.D.children={};this.D.dd=0;Ic(this)};
h.pd=function(){return 0<this.D.dd};h.e=function(){return null===this.ta()&&!this.pd()};h.ca=function(a){var b=this;A(this.D.children,function(c,d){a(new Fc(d,b,c))})};function Jc(a,b,c,d){c&&!d&&b(a);a.ca(function(a){Jc(a,b,!0,d)});c&&d&&b(a)}function Kc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new P(null===this.Oc?this.yd:this.Oc.path()+"/"+this.yd)};h.name=function(){return this.yd};h.parent=function(){return this.Oc};
function Ic(a){if(null!==a.Oc){var b=a.Oc,c=a.yd,d=a.e(),e=u(b.D.children,c);d&&e?(delete b.D.children[c],b.D.dd--,Ic(b)):d||e||(b.D.children[c]=a.D,b.D.dd++,Ic(b))}};function Lc(a,b){this.Ga=a;this.pa=b?b:Mc}h=Lc.prototype;h.Ja=function(a,b){return new Lc(this.Ga,this.pa.Ja(a,b,this.Ga).W(null,null,!1,null,null))};h.remove=function(a){return new Lc(this.Ga,this.pa.remove(a,this.Ga).W(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.pa;!c.e();){b=this.Ga(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Nc(a,b){for(var c,d=a.pa,e=null;!d.e();){c=a.Ga(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.pa.e()};h.count=function(){return this.pa.count()};h.Ic=function(){return this.pa.Ic()};h.Zb=function(){return this.pa.Zb()};h.Ba=function(a){return this.pa.Ba(a)};
h.Aa=function(a){return new Oc(this.pa,null,this.Ga,!1,a)};h.rb=function(a,b){return new Oc(this.pa,a,this.Ga,!1,b)};h.Sb=function(a,b){return new Oc(this.pa,a,this.Ga,!0,b)};h.bf=function(a){return new Oc(this.pa,null,this.Ga,!0,a)};function Oc(a,b,c,d,e){this.qf=e||null;this.te=d;this.ac=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.te?a.left:a.right;else if(0===e){this.ac.push(a);break}else this.ac.push(a),a=this.te?a.right:a.left}
function U(a){if(0===a.ac.length)return null;var b=a.ac.pop(),c;c=a.qf?a.qf(b.key,b.value):{key:b.key,value:b.value};if(a.te)for(b=b.left;!b.e();)a.ac.push(b),b=b.right;else for(b=b.right;!b.e();)a.ac.push(b),b=b.left;return c}function Pc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Mc;this.right=null!=e?e:Mc}h=Pc.prototype;h.W=function(a,b,c,d,e){return new Pc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};
h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.Ba=function(a){return this.left.Ba(a)||a(this.key,this.value)||this.right.Ba(a)};function Qc(a){return a.left.e()?a:Qc(a.left)}h.Ic=function(){return Qc(this).key};h.Zb=function(){return this.right.e()?this.key:this.right.Zb()};h.Ja=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.W(null,null,null,e.left.Ja(a,b,c),null):0===d?e.W(null,b,null,null,null):e.W(null,null,null,null,e.right.Ja(a,b,c));return Rc(e)};
function Sc(a){if(a.left.e())return Mc;a.left.$()||a.left.left.$()||(a=Tc(a));a=a.W(null,null,null,Sc(a.left),null);return Rc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.$()||c.left.left.$()||(c=Tc(c)),c=c.W(null,null,null,c.left.remove(a,b),null);else{c.left.$()&&(c=Uc(c));c.right.e()||c.right.$()||c.right.left.$()||(c=Vc(c),c.left.left.$()&&(c=Uc(c),c=Vc(c)));if(0===b(a,c.key)){if(c.right.e())return Mc;d=Qc(c.right);c=c.W(d.key,d.value,null,null,Sc(c.right))}c=c.W(null,null,null,null,c.right.remove(a,b))}return Rc(c)};h.$=function(){return this.color};
function Rc(a){a.right.$()&&!a.left.$()&&(a=Wc(a));a.left.$()&&a.left.left.$()&&(a=Uc(a));a.left.$()&&a.right.$()&&(a=Vc(a));return a}function Tc(a){a=Vc(a);a.right.left.$()&&(a=a.W(null,null,null,null,Uc(a.right)),a=Wc(a),a=Vc(a));return a}function Wc(a){return a.right.W(null,null,a.color,a.W(null,null,!0,null,a.right.left),null)}function Uc(a){return a.left.W(null,null,a.color,null,a.W(null,null,!0,a.left.right,null))}
function Vc(a){return a.W(null,null,!a.color,a.left.W(null,null,!a.left.color,null,null),a.right.W(null,null,!a.right.color,null,null))}function Xc(){}h=Xc.prototype;h.W=function(){return this};h.Ja=function(a,b){return new Pc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.Ba=function(){return!1};h.Ic=function(){return null};h.Zb=function(){return null};h.$=function(){return!1};var Mc=new Xc;function I(a,b){this.name=a;this.K=b}function Yc(a,b){return new I(a,b)};function Zc(a,b){this.A=a;x(null!==this.A,"LeafNode shouldn't be created with null value.");this.fa=b||K;$c(this.fa);this.wb=null}h=Zc.prototype;h.P=function(){return!0};h.O=function(){return this.fa};h.ib=function(a){return new Zc(this.A,a)};h.B=function(a){return".priority"===a?this.fa:K};h.da=function(a){return a.e()?this:".priority"===G(a)?this.fa:K};h.Y=function(){return!1};h.af=function(){return null};h.I=function(a,b){return".priority"===a?this.ib(b):K.I(a,b).ib(this.fa)};
h.L=function(a,b){var c=G(a);if(null===c)return b;x(".priority"!==c||1===Q(a),".priority must be the last token in a path");return this.I(c,K.L(R(a),b))};h.e=function(){return!1};h.Ua=function(){return 0};h.N=function(a){return a&&!this.O().e()?{".value":this.ta(),".priority":this.O().N()}:this.ta()};h.hash=function(){if(null===this.wb){var a="";this.fa.e()||(a+="priority:"+ad(this.fa.N())+":");var b=typeof this.A,a=a+(b+":"),a="number"===b?a+Db(this.A):a+this.A;this.wb=lb(a)}return this.wb};
h.ta=function(){return this.A};h.he=function(a){if(a===K)return 1;if(a instanceof bd)return-1;x(a.P(),"Unknown node type");var b=typeof a.A,c=typeof this.A,d=Ia(cd,b),e=Ia(cd,c);x(0<=d,"Unknown leaf type: "+b);x(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.A<a.A?-1:this.A===a.A?0:1:e-d};var cd=["object","boolean","number","string"];Zc.prototype.Wd=function(){return this};Zc.prototype.Yb=function(){return!0};
Zc.prototype.ja=function(a){return a===this?!0:a.P()?this.A===a.A&&this.fa.ja(a.fa):!1};Zc.prototype.toString=function(){return"string"===typeof this.A?this.A:'"'+this.A+'"'};function dd(a,b){this.td=a;this.Wb=b}dd.prototype.get=function(a){var b=v(this.td,a);if(!b)throw Error("No index defined for "+a);return b===hc?null:b};function ed(a,b,c){var d=fd(a.td,function(d,f){var g=v(a.Wb,f);x(g,"Missing index implementation for "+f);if(d===hc){if(g.se(b.K)){for(var k=[],l=c.Aa(Yc),m=U(l);m;)m.name!=b.name&&k.push(m),m=U(l);k.push(b);return gd(k,H(g))}return hc}g=c.get(b.name);k=d;g&&(k=k.remove(new I(b.name,g)));return k.Ja(b,b.K)});return new dd(d,a.Wb)}
function hd(a,b,c){var d=fd(a.td,function(a){if(a===hc)return a;var d=c.get(b.name);return d?a.remove(new I(b.name,d)):a});return new dd(d,a.Wb)}var id=new dd({".priority":hc},{".priority":L});function bd(a,b,c){this.j=a;(this.fa=b)&&$c(this.fa);this.sb=c;this.wb=null}h=bd.prototype;h.P=function(){return!1};h.O=function(){return this.fa||K};h.ib=function(a){return new bd(this.j,a,this.sb)};h.B=function(a){if(".priority"===a)return this.O();a=this.j.get(a);return null===a?K:a};h.da=function(a){var b=G(a);return null===b?this:this.B(b).da(R(a))};h.Y=function(a){return null!==this.j.get(a)};
h.I=function(a,b){x(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ib(b);var c=new I(a,b),d;b.e()?(d=this.j.remove(a),c=hd(this.sb,c,this.j)):(d=this.j.Ja(a,b),c=ed(this.sb,c,this.j));return new bd(d,this.fa,c)};h.L=function(a,b){var c=G(a);if(null===c)return b;x(".priority"!==G(a)||1===Q(a),".priority must be the last token in a path");var d=this.B(c).L(R(a),b);return this.I(c,d)};h.e=function(){return this.j.e()};h.Ua=function(){return this.j.count()};var jd=/^(0|[1-9]\d*)$/;
h=bd.prototype;h.N=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.ca(L,function(f,g){b[f]=g.N(a);c++;e&&jd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.O().e()&&(b[".priority"]=this.O().N());return b};h.hash=function(){if(null===this.wb){var a="";this.O().e()||(a+="priority:"+ad(this.O().N())+":");this.ca(L,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.wb=""===a?"":lb(a)}return this.wb};
h.af=function(a,b,c){return(c=kd(this,c))?(a=Nc(c,new I(a,b)))?a.name:null:Nc(this.j,a)};function ld(a,b){var c;c=(c=kd(a,b))?(c=c.Ic())&&c.name:a.j.Ic();return c?new I(c,a.j.get(c)):null}function md(a,b){var c;c=(c=kd(a,b))?(c=c.Zb())&&c.name:a.j.Zb();return c?new I(c,a.j.get(c)):null}h.ca=function(a,b){var c=kd(this,a);return c?c.Ba(function(a){return b(a.name,a.K)}):this.j.Ba(b)};h.Aa=function(a){return this.rb(a.Ae(),a)};
h.rb=function(a,b){var c=kd(this,b);return c?c.rb(a,function(a){return a}):this.j.rb(a.name,Yc)};h.bf=function(a){return this.Sb(a.ze(),a)};h.Sb=function(a,b){var c=kd(this,b);return c?c.Sb(a,function(a){return a}):this.j.Sb(a.name,Yc)};h.he=function(a){return this.e()?a.e()?0:-1:a.P()||a.e()?1:a===kc?-1:0};
h.Wd=function(a){if(a===mc||nd(this.sb.Wb,a.toString()))return this;var b=this.sb,c=this.j;x(a!==mc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Aa(Yc),f=U(c);f;)e=e||a.se(f.K),d.push(f),f=U(c);d=e?gd(d,H(a)):hc;e=a.toString();c=od(b.Wb);c[e]=a;a=od(b.td);a[e]=d;return new bd(this.j,this.fa,new dd(a,c))};h.Yb=function(a){return a===mc||nd(this.sb.Wb,a.toString())};
h.ja=function(a){if(a===this)return!0;if(a.P())return!1;if(this.O().ja(a.O())&&this.j.count()===a.j.count()){var b=this.Aa(L);a=a.Aa(L);for(var c=U(b),d=U(a);c&&d;){if(c.name!==d.name||!c.K.ja(d.K))return!1;c=U(b);d=U(a)}return null===c&&null===d}return!1};function kd(a,b){return b===mc?null:a.sb.get(b.toString())}h.toString=function(){var a="{",b=!0;this.ca(L,function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};function J(a,b){if(null===a)return K;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);x(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Zc(a,J(c));if(a instanceof Array){var d=K,e=a;A(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=J(a);if(c.P()||!c.e())d=
d.I(b,c)}});return d.ib(J(c))}var f=[],g=!1,k=a;va(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=J(k[a]);b.e()||(g=g||!b.O().e(),f.push(new I(a,b)))}});var l=gd(f,ec,function(a){return a.name},fc);if(g){var m=gd(f,H(L));return new bd(l,J(c),new dd({".priority":m},{".priority":L}))}return new bd(l,J(c),id)}var pd=Math.log(2);function qd(a){this.count=parseInt(Math.log(a+1)/pd,10);this.Ve=this.count-1;this.Jf=a+1&parseInt(Array(this.count+1).join("1"),2)}
function rd(a){var b=!(a.Jf&1<<a.Ve);a.Ve--;return b}
function gd(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],r=c?c(m):m;return new Pc(r,m.K,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),s=e(m+1,d),m=a[m],r=c?c(m):m;return new Pc(r,m.K,!1,f,s)}a.sort(b);var f=function(b){function d(b,g){var k=r-b,s=r;r-=b;var s=e(k+1,s),k=a[k],y=c?c(k):k,s=new Pc(y,k.K,g,null,s);f?f.left=s:m=s;f=s}for(var f=null,m=null,r=a.length,s=0;s<b.count;++s){var y=rd(b),N=Math.pow(2,b.count-(s+1));y?d(N,!1):(d(N,!1),d(N,!0))}return m}(new qd(a.length));
return null!==f?new Lc(d||b,f):new Lc(d||b)}function ad(a){return"number"===typeof a?"number:"+Db(a):"string:"+a}function $c(a){if(a.P()){var b=a.N();x("string"===typeof b||"number"===typeof b||"object"===typeof b&&u(b,".sv"),"Priority must be a string or number.")}else x(a===kc||a.e(),"priority of unexpected type.");x(a===kc||a.O().e(),"Priority nodes can't have a priority of their own.")}var K=new bd(new Lc(fc),null,id);function sd(){bd.call(this,new Lc(fc),K,id)}na(sd,bd);h=sd.prototype;
h.he=function(a){return a===this?0:1};h.ja=function(a){return a===this};h.O=function(){throw ib("Why is this called?");};h.B=function(){return K};h.e=function(){return!1};var kc=new sd,ic=new I("[MIN_NAME]",K);function C(a,b,c){this.D=a;this.U=b;this.m=c}C.prototype.N=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.D.N()};C.prototype.val=C.prototype.N;C.prototype.Xe=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.D.N(!0)};C.prototype.exportVal=C.prototype.Xe;C.prototype.Qf=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.D.e()};C.prototype.exists=C.prototype.Qf;
C.prototype.k=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Zb("Firebase.DataSnapshot.child",a);var b=new P(a),c=this.U.k(b);return new C(this.D.da(b),c,L)};C.prototype.child=C.prototype.k;C.prototype.Y=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Zb("Firebase.DataSnapshot.hasChild",a);var b=new P(a);return!this.D.da(b).e()};C.prototype.hasChild=C.prototype.Y;
C.prototype.O=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.D.O().N()};C.prototype.getPriority=C.prototype.O;C.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);F("Firebase.DataSnapshot.forEach",1,a,!1);if(this.D.P())return!1;var b=this;return!!this.D.ca(this.m,function(c,d){return a(new C(d,b.U.k(c),L))})};C.prototype.forEach=C.prototype.forEach;
C.prototype.pd=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.D.P()?!1:!this.D.e()};C.prototype.hasChildren=C.prototype.pd;C.prototype.name=function(){z("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};C.prototype.name=C.prototype.name;C.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.U.key()};
C.prototype.key=C.prototype.key;C.prototype.Ua=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.D.Ua()};C.prototype.numChildren=C.prototype.Ua;C.prototype.hc=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.U};C.prototype.ref=C.prototype.hc;function td(a){x(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Gc={}}td.prototype.Td=function(a,b){for(var c=this.Gc[a]||[],d=0;d<c.length;d++)c[d].sc.apply(c[d].Ha,Array.prototype.slice.call(arguments,1))};td.prototype.zb=function(a,b,c){ud(this,a);this.Gc[a]=this.Gc[a]||[];this.Gc[a].push({sc:b,Ha:c});(a=this.pe(a))&&b.apply(c,a)};td.prototype.bc=function(a,b,c){ud(this,a);a=this.Gc[a]||[];for(var d=0;d<a.length;d++)if(a[d].sc===b&&(!c||c===a[d].Ha)){a.splice(d,1);break}};
function ud(a,b){x(Oa(a.Bf,function(a){return a===b}),"Unknown event: "+b)};function vd(){td.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.qc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.qc&&(c.qc=b,c.Td("visible",b))},!1)}}na(vd,td);ca(vd);vd.prototype.pe=function(a){x("visible"===a,"Unknown event type: "+a);return[this.qc]};function wd(){td.call(this,["online"]);this.Lc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Lc||a.Td("online",!0);a.Lc=!0},!1);window.addEventListener("offline",function(){a.Lc&&a.Td("online",!1);a.Lc=!1},!1)}}na(wd,td);ca(wd);wd.prototype.pe=function(a){x("online"===a,"Unknown event type: "+a);return[this.Lc]};function A(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function fd(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Mb(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function Kb(a){var b=0,c;for(c in a)b++;return b}function Lb(a){for(var b in a)return b}function xd(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function yd(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function nd(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function zd(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ad(a,b){var c=zd(a,b,void 0);return c&&a[c]}function Bd(a){for(var b in a)return!1;return!0}function Cd(a,b){return b in a?a[b]:void 0}function od(a){var b={},c;for(c in a)b[c]=a[c];return b}var Dd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ed(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Dd.length;f++)c=Dd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Fd(){this.wc={}}function Gd(a,b,c){n(c)||(c=1);u(a.wc,b)||(a.wc[b]=0);a.wc[b]+=c}Fd.prototype.get=function(){return od(this.wc)};function Hd(a){this.Kf=a;this.vd=null}Hd.prototype.get=function(){var a=this.Kf.get(),b=od(a);if(this.vd)for(var c in this.vd)b[c]-=this.vd[c];this.vd=a;return b};function Id(a,b){this.uf={};this.Nd=new Hd(a);this.S=b;var c=1E4+2E4*Math.random();setTimeout(q(this.nf,this),Math.floor(c))}Id.prototype.nf=function(){var a=this.Nd.get(),b={},c=!1,d;for(d in a)0<a[d]&&u(this.uf,d)&&(b[d]=a[d],c=!0);c&&(a=this.S,a.ia&&(b={c:b},a.f("reportStats",b),a.wa("s",b)));setTimeout(q(this.nf,this),Math.floor(6E5*Math.random()))};var Jd={},Kd={};function Ld(a){a=a.toString();Jd[a]||(Jd[a]=new Fd);return Jd[a]}function Md(a,b){var c=a.toString();Kd[c]||(Kd[c]=b());return Kd[c]};var Nd=null;"undefined"!==typeof MozWebSocket?Nd=MozWebSocket:"undefined"!==typeof WebSocket&&(Nd=WebSocket);function Od(a,b,c){this.ie=a;this.f=rb(this.ie);this.frames=this.Cc=null;this.kb=this.lb=this.Oe=0;this.Qa=Ld(b);this.Za=(b.Cb?"wss://":"ws://")+b.Ka+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.Za+="&r=f");b.host!==b.Ka&&(this.Za=this.Za+"&ns="+b.yb);c&&(this.Za=this.Za+"&s="+c)}var Pd;
Od.prototype.open=function(a,b){this.fb=b;this.cg=a;this.f("Websocket connecting to "+this.Za);this.zc=!1;Aa.set("previous_websocket_failure",!0);try{this.oa=new Nd(this.Za)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.eb();return}var e=this;this.oa.onopen=function(){e.f("Websocket connected.");e.zc=!0};this.oa.onclose=function(){e.f("Websocket connection was disconnected.");e.oa=null;e.eb()};this.oa.onmessage=function(a){if(null!==e.oa)if(a=a.data,e.kb+=
a.length,Gd(e.Qa,"bytes_received",a.length),Qd(e),null!==e.frames)Rd(e,a);else{a:{x(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Oe=b;e.frames=[];a=null;break a}}e.Oe=1;e.frames=[]}null!==a&&Rd(e,a)}};this.oa.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.eb()}};Od.prototype.start=function(){};
Od.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Nd&&!Pd};Od.responsesRequiredToBeHealthy=2;Od.healthyTimeout=3E4;h=Od.prototype;h.wd=function(){Aa.remove("previous_websocket_failure")};function Rd(a,b){a.frames.push(b);if(a.frames.length==a.Oe){var c=a.frames.join("");a.frames=null;c=ua(c);a.cg(c)}}
h.send=function(a){Qd(this);a=t(a);this.lb+=a.length;Gd(this.Qa,"bytes_sent",a.length);a=Bb(a,16384);1<a.length&&this.oa.send(String(a.length));for(var b=0;b<a.length;b++)this.oa.send(a[b])};h.Yc=function(){this.ub=!0;this.Cc&&(clearInterval(this.Cc),this.Cc=null);this.oa&&(this.oa.close(),this.oa=null)};h.eb=function(){this.ub||(this.f("WebSocket is closing itself"),this.Yc(),this.fb&&(this.fb(this.zc),this.fb=null))};h.close=function(){this.ub||(this.f("WebSocket is being closed"),this.Yc())};
function Qd(a){clearInterval(a.Cc);a.Cc=setInterval(function(){a.oa&&a.oa.send("0");Qd(a)},Math.floor(45E3))};function Sd(a){this.cc=a;this.Fd=[];this.Mb=0;this.ge=-1;this.Ab=null}function Td(a,b,c){a.ge=b;a.Ab=c;a.ge<a.Mb&&(a.Ab(),a.Ab=null)}function Ud(a,b,c){for(a.Fd[b]=c;a.Fd[a.Mb];){var d=a.Fd[a.Mb];delete a.Fd[a.Mb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Fb(function(){f.cc(d[e])})}if(a.Mb===a.ge){a.Ab&&(clearTimeout(a.Ab),a.Ab(),a.Ab=null);break}a.Mb++}};function Vd(){this.set={}}h=Vd.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return u(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return Bd(this.set)};h.count=function(){return Kb(this.set)};function Wd(a,b){A(a.set,function(a,d){b(d,a)})};function Xd(a,b,c){this.ie=a;this.f=rb(a);this.kb=this.lb=0;this.Qa=Ld(b);this.Kd=c;this.zc=!1;this.bd=function(a){b.host!==b.Ka&&(a.ns=b.yb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.Cb?"https://":"http://")+b.Ka+"/.lp?"+c.join("&")}}var Yd,Zd;
Xd.prototype.open=function(a,b){this.Ue=0;this.ea=b;this.gf=new Sd(a);this.ub=!1;var c=this;this.ob=setTimeout(function(){c.f("Timed out trying to connect.");c.eb();c.ob=null},Math.floor(3E4));wb(function(){if(!c.ub){c.Na=new $d(function(a,b,d,k,l){ae(c,arguments);if(c.Na)if(c.ob&&(clearTimeout(c.ob),c.ob=null),c.zc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Na.Jd=!1,Td(c.gf,b,function(){c.eb()})):c.eb();else throw Error("Unrecognized command received: "+a);},function(a,b){ae(c,arguments);
Ud(c.gf,a,b)},function(){c.eb()},c.bd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Na.Ud&&(a.cb=c.Na.Ud);a.v="5";c.Kd&&(a.s=c.Kd);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.bd(a);c.f("Connecting via long-poll to "+a);be(c.Na,a,function(){})}})};
Xd.prototype.start=function(){var a=this.Na,b=this.mf;a.Xf=this.id;a.Yf=b;for(a.Zd=!0;ce(a););a=this.id;b=this.mf;this.$b=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.$b.src=this.bd(c);this.$b.style.display="none";document.body.appendChild(this.$b)};Xd.isAvailable=function(){return!Zd&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.zg)&&(Yd||!0)};h=Xd.prototype;
h.wd=function(){};h.Yc=function(){this.ub=!0;this.Na&&(this.Na.close(),this.Na=null);this.$b&&(document.body.removeChild(this.$b),this.$b=null);this.ob&&(clearTimeout(this.ob),this.ob=null)};h.eb=function(){this.ub||(this.f("Longpoll is closing itself"),this.Yc(),this.ea&&(this.ea(this.zc),this.ea=null))};h.close=function(){this.ub||(this.f("Longpoll is being closed."),this.Yc())};
h.send=function(a){a=t(a);this.lb+=a.length;Gd(this.Qa,"bytes_sent",a.length);a=mb(a);a=fb(a,!0);a=Bb(a,1840);for(var b=0;b<a.length;b++){var c=this.Na;c.Qc.push({og:this.Ue,wg:a.length,We:a[b]});c.Zd&&ce(c);this.Ue++}};function ae(a,b){var c=t(b).length;a.kb+=c;Gd(a.Qa,"bytes_received",c)}
function $d(a,b,c,d){this.bd=d;this.fb=c;this.Fe=new Vd;this.Qc=[];this.ke=Math.floor(1E8*Math.random());this.Jd=!0;this.Ud=hb();window["pLPCommand"+this.Ud]=a;window["pRTLPCB"+this.Ud]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||kb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.$a=a.contentDocument:a.contentWindow?a.$a=a.contentWindow.document:a.document&&(a.$a=a.document);this.va=a;a="";this.va.src&&"javascript:"===this.va.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.va.$a.open(),this.va.$a.write(a),this.va.$a.close()}catch(f){kb("frame writing exception"),f.stack&&kb(f.stack),kb(f)}}
$d.prototype.close=function(){this.Zd=!1;if(this.va){this.va.$a.body.innerHTML="";var a=this;setTimeout(function(){null!==a.va&&(document.body.removeChild(a.va),a.va=null)},Math.floor(0))}var b=this.fb;b&&(this.fb=null,b())};
function ce(a){if(a.Zd&&a.Jd&&a.Fe.count()<(0<a.Qc.length?2:1)){a.ke++;var b={};b.id=a.Xf;b.pw=a.Yf;b.ser=a.ke;for(var b=a.bd(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].We.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.og+"&ts"+d+"="+e.wg+"&d"+d+"="+e.We;d++}else break;de(a,b+c,a.ke);return!0}return!1}function de(a,b,c){function d(){a.Fe.remove(c);ce(a)}a.Fe.add(c);var e=setTimeout(d,Math.floor(25E3));be(a,b,function(){clearTimeout(e);d()})}
function be(a,b,c){setTimeout(function(){try{if(a.Jd){var d=a.va.$a.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){kb("Long-poll script failed to load: "+b);a.Jd=!1;a.close()};a.va.$a.body.appendChild(d)}}catch(e){}},Math.floor(1))};function ee(a){fe(this,a)}var ge=[Xd,Od];function fe(a,b){var c=Od&&Od.isAvailable(),d=c&&!(Aa.ff||!0===Aa.get("previous_websocket_failure"));b.yg&&(c||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.$c=[Od];else{var e=a.$c=[];Cb(ge,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function he(a){if(0<a.$c.length)return a.$c[0];throw Error("No transports available");};function ie(a,b,c,d,e,f){this.id=a;this.f=rb("c:"+this.id+":");this.cc=c;this.Kc=d;this.ea=e;this.De=f;this.Q=b;this.Ed=[];this.Se=0;this.xf=new ee(b);this.Pa=0;this.f("Connection created");je(this)}
function je(a){var b=he(a.xf);a.J=new b("c:"+a.id+":"+a.Se++,a.Q);a.He=b.responsesRequiredToBeHealthy||0;var c=ke(a,a.J),d=le(a,a.J);a.ad=a.J;a.Xc=a.J;a.C=null;a.vb=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.rd=setTimeout(function(){a.rd=null;a.vb||(a.J&&102400<a.J.kb?(a.f("Connection exceeded healthy timeout but has received "+a.J.kb+" bytes.  Marking connection healthy."),a.vb=!0,a.J.wd()):a.J&&10240<a.J.lb?a.f("Connection exceeded healthy timeout but has sent "+
a.J.lb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function le(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Pa?1===a.Pa&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.Q.Ka.substr(0,2)&&(Aa.remove("host:"+a.Q.host),a.Q.Ka=a.Q.host)),a.close()):b===a.C?(a.f("Secondary connection lost."),c=a.C,a.C=null,a.ad!==c&&a.Xc!==c||a.close()):a.f("closing an old connection")}}
function ke(a,b){return function(c){if(2!=a.Pa)if(b===a.Xc){var d=zb("t",c);c=zb("d",c);if("c"==d){if(d=zb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Kd=c.s;Da(a.Q,f);0==a.Pa&&(a.J.start(),me(a,a.J,d),"5"!==e&&z("Protocol version mismatch detected"),c=a.xf,(c=1<c.$c.length?c.$c[1]:null)&&ne(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Xc=a.C;for(c=0;c<a.Ed.length;++c)a.Bd(a.Ed[c]);a.Ed=[];oe(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.De&&(a.De(c),a.De=null),a.ea=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Da(a.Q,c),1===a.Pa?a.close():(pe(a),je(a))):"e"===d?sb("Server Error: "+c):"o"===d?(a.f("got pong on primary."),qe(a),re(a)):sb("Unknown control packet command: "+d)}else"d"==d&&a.Bd(c)}else if(b===a.C)if(d=zb("t",c),c=zb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?se(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.C.close(),a.ad!==a.C&&a.Xc!==a.C||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.tf--,se(a)));else if("d"==d)a.Ed.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}ie.prototype.wa=function(a){te(this,{t:"d",d:a})};function oe(a){a.ad===a.C&&a.Xc===a.C&&(a.f("cleaning up and promoting a connection: "+a.C.ie),a.J=a.C,a.C=null)}
function se(a){0>=a.tf?(a.f("Secondary connection is healthy."),a.vb=!0,a.C.wd(),a.C.start(),a.f("sending client ack on secondary"),a.C.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.ad=a.C,oe(a)):(a.f("sending ping on secondary."),a.C.send({t:"c",d:{t:"p",d:{}}}))}ie.prototype.Bd=function(a){qe(this);this.cc(a)};function qe(a){a.vb||(a.He--,0>=a.He&&(a.f("Primary connection is healthy."),a.vb=!0,a.J.wd()))}
function ne(a,b){a.C=new b("c:"+a.id+":"+a.Se++,a.Q,a.Kd);a.tf=b.responsesRequiredToBeHealthy||0;a.C.open(ke(a,a.C),le(a,a.C));setTimeout(function(){a.C&&(a.f("Timed out trying to upgrade."),a.C.close())},Math.floor(6E4))}function me(a,b,c){a.f("Realtime connection established.");a.J=b;a.Pa=1;a.Kc&&(a.Kc(c),a.Kc=null);0===a.He?(a.f("Primary connection is healthy."),a.vb=!0):setTimeout(function(){re(a)},Math.floor(5E3))}
function re(a){a.vb||1!==a.Pa||(a.f("sending ping on primary."),te(a,{t:"c",d:{t:"p",d:{}}}))}function te(a,b){if(1!==a.Pa)throw"Connection is not connected";a.ad.send(b)}ie.prototype.close=function(){2!==this.Pa&&(this.f("Closing realtime connection."),this.Pa=2,pe(this),this.ea&&(this.ea(),this.ea=null))};function pe(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.C&&(a.C.close(),a.C=null);a.rd&&(clearTimeout(a.rd),a.rd=null)};function ue(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ua(jb(f[0])||""),c=ua(jb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Bg:b,fe:c,data:d,sg:e}}function ve(a){a=ue(a).fe;return"object"===typeof a&&a.hasOwnProperty("iat")?v(a,"iat"):null}function we(a){a=ue(a);var b=a.fe;return!!a.sg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function xe(a,b,c,d){this.id=ye++;this.f=rb("p:"+this.id+":");this.Eb=!0;this.ua={};this.la=[];this.Nc=0;this.Jc=[];this.ia=!1;this.Va=1E3;this.xd=3E5;this.Cd=b;this.Ad=c;this.Ee=d;this.Q=a;this.Ke=null;this.Tc={};this.ng=0;this.Dc=this.ue=null;ze(this,0);vd.Qb().zb("visible",this.fg,this);-1===a.host.indexOf("fblocal")&&wd.Qb().zb("online",this.dg,this)}var ye=0,Ae=0;h=xe.prototype;
h.wa=function(a,b,c){var d=++this.ng;a={r:d,a:a,b:b};this.f(t(a));x(this.ia,"sendRequest call when we're not connected not allowed.");this.La.wa(a);c&&(this.Tc[d]=c)};function Be(a,b,c,d,e){var f=b.Da(),g=b.path.toString();a.f("Listen called for "+g+" "+f);a.ua[g]=a.ua[g]||{};x(!a.ua[g][f],"listen() called twice for same path/queryId.");b={H:e,qd:c,kg:Dc(b),tag:d};a.ua[g][f]=b;a.ia&&Ce(a,g,f,b)}
function Ce(a,b,c,d){a.f("Listen on "+b+" for "+c);var e={p:b};d.tag&&(e.q=d.kg,e.t=d.tag);e.h=d.qd();a.wa("q",e,function(e){if((a.ua[b]&&a.ua[b][c])===d){a.f("listen response",e);var g=e.s;"ok"!==g&&De(a,b,c);e=e.d;d.H&&d.H(g,e)}})}h.T=function(a,b,c){this.Lb={Mf:a,Ye:!1,sc:b,cd:c};this.f("Authenticating using credential: "+a);Ee(this);(b=40==a.length)||(a=ue(a).fe,b="object"===typeof a&&!0===v(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.xd=3E4)};
h.Pe=function(a){delete this.Lb;this.ia&&this.wa("unauth",{},function(b){a(b.s,b.d)})};function Ee(a){var b=a.Lb;a.ia&&b&&a.wa("auth",{cred:b.Mf},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Lb===b&&delete a.Lb;b.Ye?"ok"!==d&&b.cd&&b.cd(d,c):(b.Ye=!0,b.sc&&b.sc(d,c))})}function Fe(a,b,c,d){a.ia?Ge(a,"o",b,c,d):a.Jc.push({Pc:b,action:"o",data:c,H:d})}function He(a,b,c,d){a.ia?Ge(a,"om",b,c,d):a.Jc.push({Pc:b,action:"om",data:c,H:d})}
h.Ce=function(a,b){this.ia?Ge(this,"oc",a,null,b):this.Jc.push({Pc:a,action:"oc",data:null,H:b})};function Ge(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.wa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Ie(this,"p",a,b,c,d)};function Ke(a,b,c,d){Ie(a,"m",b,c,d,void 0)}function Ie(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.la.push({action:b,of:d,H:e});a.Nc++;b=a.la.length-1;a.ia?Le(a,b):a.f("Buffering put: "+c)}
function Le(a,b){var c=a.la[b].action,d=a.la[b].of,e=a.la[b].H;a.la[b].lg=a.ia;a.wa(c,d,function(d){a.f(c+" response",d);delete a.la[b];a.Nc--;0===a.Nc&&(a.la=[]);e&&e(d.s,d.d)})}
h.Bd=function(a){if("r"in a){this.f("from server: "+t(a));var b=a.r,c=this.Tc[b];c&&(delete this.Tc[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Cd(c.p,c.d,!1,c.t):"m"===b?this.Cd(c.p,c.d,!0,c.t):"c"===b?Me(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Lb,delete this.Lb,c&&c.cd&&c.cd(a,b)):"sd"===b?this.Ke?this.Ke(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):sb("Unrecognized action received from server: "+t(b)+"\nAre you using the latest client?"))}};h.Kc=function(a){this.f("connection ready");this.ia=!0;this.Dc=(new Date).getTime();this.Ee({serverTimeOffset:a-(new Date).getTime()});Ne(this);this.Ad(!0)};function ze(a,b){x(!a.La,"Scheduling a connect when we're already connected/ing?");a.Nb&&clearTimeout(a.Nb);a.Nb=setTimeout(function(){a.Nb=null;Oe(a)},Math.floor(b))}
h.fg=function(a){a&&!this.qc&&this.Va===this.xd&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.La||ze(this,0));this.qc=a};h.dg=function(a){a?(this.f("Browser went online.  Reconnecting."),this.Va=1E3,this.Eb=!0,this.La||ze(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Eb=!1,this.La&&this.La.close())};
h.jf=function(){this.f("data client disconnected");this.ia=!1;this.La=null;for(var a=0;a<this.la.length;a++){var b=this.la[a];b&&"h"in b.of&&b.lg&&(b.H&&b.H("disconnect"),delete this.la[a],this.Nc--)}0===this.Nc&&(this.la=[]);if(this.Eb)this.qc?this.Dc&&(3E4<(new Date).getTime()-this.Dc&&(this.Va=1E3),this.Dc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.xd,this.ue=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.ue)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),ze(this,a),this.Va=Math.min(this.xd,1.3*this.Va);else for(var c in this.Tc)delete this.Tc[c];this.Ad(!1)};function Oe(a){if(a.Eb){a.f("Making a connection attempt");a.ue=(new Date).getTime();a.Dc=null;var b=q(a.Bd,a),c=q(a.Kc,a),d=q(a.jf,a),e=a.id+":"+Ae++;a.La=new ie(e,a.Q,b,c,d,function(b){z(b+" ("+a.Q.toString()+")");a.Eb=!1})}}h.tb=function(){this.Eb=!1;this.La?this.La.close():(this.Nb&&(clearTimeout(this.Nb),this.Nb=null),this.ia&&this.jf())};
h.kc=function(){this.Eb=!0;this.Va=1E3;this.La||ze(this,0)};function Me(a,b,c){c=c?La(c,function(a){return Ab(a)}).join("$"):"default";(a=De(a,b,c))&&a.H&&a.H("permission_denied")}function De(a,b,c){b=(new P(b)).toString();var d=a.ua[b][c];delete a.ua[b][c];0===Kb(a.ua[b])&&delete a.ua[b];return d}function Ne(a){Ee(a);A(a.ua,function(b,d){A(b,function(b,c){Ce(a,d,c,b)})});for(var b=0;b<a.la.length;b++)a.la[b]&&Le(a,b);for(;a.Jc.length;)b=a.Jc.shift(),Ge(a,b.action,b.Pc,b.data,b.H)};function Pe(){this.j=this.A=null}Pe.prototype.ic=function(a,b){if(a.e())this.A=b,this.j=null;else if(null!==this.A)this.A=this.A.L(a,b);else{null==this.j&&(this.j=new Vd);var c=G(a);this.j.contains(c)||this.j.add(c,new Pe);c=this.j.get(c);a=R(a);c.ic(a,b)}};
function Qe(a,b){if(b.e())return a.A=null,a.j=null,!0;if(null!==a.A){if(a.A.P())return!1;var c=a.A;a.A=null;c.ca(L,function(b,c){a.ic(new P(b),c)});return Qe(a,b)}return null!==a.j?(c=G(b),b=R(b),a.j.contains(c)&&Qe(a.j.get(c),b)&&a.j.remove(c),a.j.e()?(a.j=null,!0):!1):!0}function Re(a,b,c){null!==a.A?c(b,a.A):a.ca(function(a,e){var f=new P(b.toString()+"/"+a);Re(e,f,c)})}Pe.prototype.ca=function(a){null!==this.j&&Wd(this.j,function(b,c){a(b,c)})};function Se(){this.Wc=K}Se.prototype.toString=function(){return this.Wc.toString()};function Te(){this.qb=[]}function Ue(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Rb();null===c||f.ja(c.Rb())||(a.qb.push(c),c=null);null===c&&(c=new Ve(f));c.add(e)}c&&a.qb.push(c)}function Cc(a,b,c){Ue(a,c);We(a,function(a){return a.ja(b)})}function Xe(a,b,c){Ue(a,c);We(a,function(a){return a.contains(b)||b.contains(a)})}
function We(a,b){for(var c=!0,d=0;d<a.qb.length;d++){var e=a.qb[d];if(e)if(e=e.Rb(),b(e)){for(var e=a.qb[d],f=0;f<e.od.length;f++){var g=e.od[f];if(null!==g){e.od[f]=null;var k=g.Pb();ob&&kb("event: "+g.toString());Fb(k)}}a.qb[d]=null}else c=!1}c&&(a.qb=[])}function Ve(a){this.Ca=a;this.od=[]}Ve.prototype.add=function(a){this.od.push(a)};Ve.prototype.Rb=function(){return this.Ca};var Ye="auth.firebase.com";function Ze(a,b,c){this.ed=a||{};this.Sd=b||{};this.lc=c||{};this.ed.remember||(this.ed.remember="default")}var $e=["remember","redirectTo"];function af(a){var b={},c={};va(a||{},function(a,e){0<=Ia($e,a)?b[a]=e:c[a]=e});return new Ze(b,{},c)};var bf={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function V(a){var b=Error(v(bf,a),a);b.code=a;return b};function cf(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function df(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function ef(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function ff(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function gf(a){var b="";try{a=a.replace("#","");var c={},d=a.replace(/^\?/,"").split("&");for(a=0;a<d.length;a++)if(d[a]){var e=d[a].split("=");c[e[0]]=e[1]}c&&u(c,"__firebase_request_key")&&(b=v(c,"__firebase_request_key"))}catch(f){}return b}
function hf(a){var b=[],c;for(c in a)if(u(a,c)){var d=v(a,c);if(ea(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(v(a,c)))}return b.join("&")}function jf(){var a=ub(Ye);return a.scheme+"://"+a.host+"/v2"};function kf(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lf(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function mf(a){a=a||{};a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
mf.prototype.open=function(a,b,c){function d(){c&&(c(V("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;df(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ua(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(V("SERVER_ERROR")):c(V("NETWORK_ERROR"));c=null;ef(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+hf(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=t(b));"application/x-www-form-urlencoded"===k&&(g=hf(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Ed(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};mf.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||lf())};mf.prototype.uc=function(){return"json"};function nf(a){a=a||{};this.Uc=Ha()+Ha()+Ha();this.kf=a||{}}
nf.prototype.open=function(a,b,c){function d(){c&&(c(V("USER_CANCELLED")),c=null)}var e=this,f=ub(Ye),g;b.requestId=this.Uc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=hf(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{var f=a.url;try{var r=document.createElement("a");r.href=f;b=r.host===ub(Ye).host&&"/blank/page.html"===r.pathname;break a}catch(s){}b=!1}b&&(a=gf(a.url),g.removeEventListener("exit",
d),g.close(),a=new Ze(null,null,{requestId:e.Uc,requestKey:a}),e.kf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(V("TRANSPORT_UNAVAILABLE"))};nf.isAvailable=function(){return kf()};nf.prototype.uc=function(){return"redirect"};function of(a){a=a||{};if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");a.relay_url||(a.relay_url=jf()+"/auth/channel");this.options=a}
of.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);r&&(r=clearInterval(r));ef(window,"message",e);ef(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=ua(a.data);"ready"===b.a?k.postMessage(s,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=lf(),g,k,l=ff(a);if(l!==ff(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},
0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+hf(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var r=setInterval(function(){m&&m.closed&&(d(!1),c&&(c(V("USER_CANCELLED")),c=null))},500),s=t({a:"request",d:b});df(window,"unload",d);df(window,"message",e)}};
of.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(kf()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};of.prototype.uc=function(){return"popup"};function pf(a){a=a||{};a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
pf.prototype.open=function(a,b,c){function d(){c&&(c(V("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;Bd(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);ef(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+hf(b);
df(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};qf(f,a,c)};
function qf(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(V("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(V("NETWORK_ERROR"))}},0)}pf.isAvailable=function(){return!kf()};pf.prototype.uc=function(){return"json"};function rf(a,b){this.Ge=["session",a.Gd,a.yb].join(":");this.Pd=b}rf.prototype.set=function(a,b){if(!b)if(this.Pd.length)b=this.Pd[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ge,a)};rf.prototype.get=function(){var a=La(this.Pd,q(this.Tf,this)),a=Ka(a,function(a){return null!==a});Ta(a,function(a,c){return ve(c.token)-ve(a.token)});return 0<a.length?a.shift():null};rf.prototype.Tf=function(a){try{var b=a.get(this.Ge);if(b&&b.token)return b}catch(c){}return null};
rf.prototype.clear=function(){var a=this;Ja(this.Pd,function(b){b.remove(a.Ge)})};function sf(a){a=a||{};this.Uc=Ha()+Ha()+Ha();this.kf=a||{}}sf.prototype.open=function(a,b){Ba.set("redirect_request_id",this.Uc);b.requestId=this.Uc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+hf(b);window.location=a};sf.isAvailable=function(){return!/^file:\//.test(location.href)&&!kf()};sf.prototype.uc=function(){return"redirect"};function tf(a,b,c,d){td.call(this,["auth_status"]);this.Q=a;this.Re=b;this.xg=c;this.Be=d;this.mc=new rf(a,[Aa,Ba]);this.jb=null;uf(this)}na(tf,td);h=tf.prototype;h.ne=function(){return this.jb||null};function uf(a){Ba.get("redirect_request_id")&&vf(a);var b=a.mc.get();b&&b.token?(wf(a,b),a.Re(b.token,function(c,d){xf(a,c,d,!1,b.token,b)},function(b,d){yf(a,"resumeSession()",b,d)})):wf(a,null)}
function zf(a,b,c,d,e,f){"firebaseio-demo.com"===a.Q.domain&&z("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.Re(b,function(f,k){xf(a,f,k,!0,b,c,d||{},e)},function(b,c){yf(a,"auth()",b,c,f)})}function Af(a,b){a.mc.clear();wf(a,null);a.xg(function(a,d){if("ok"===a)B(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;B(b,f)}})}
function xf(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=we(e)?e:"",c=null,b&&u(b,"uid")?c=v(b,"uid"):u(f,"uid")&&(c=v(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=v(b,"provider"):u(f,"provider")&&(c=v(f,"provider")),f.provider=c,a.mc.clear(),we(e)&&(g=g||{},c=Aa,"sessionOnly"===g.remember&&(c=Ba),"none"!==g.remember&&a.mc.set(f,c)),wf(a,f)),B(k,null,f)):(a.mc.clear(),wf(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,B(k,f))}
function yf(a,b,c,d,e){z(b+" was canceled: "+d);a.mc.clear();wf(a,null);a=Error(d);a.code=c.toUpperCase();B(e,a)}function Bf(a,b,c,d,e){Cf(a);var f=[mf,pf];c=new Ze(d||{},{},c||{});Df(a,f,"/auth/"+b,c,e)}
function Ef(a,b,c,d){Cf(a);var e=[of,nf];c=af(c);"anonymous"===b||"password"===b?setTimeout(function(){B(d,V("TRANSPORT_UNAVAILABLE"))},0):(c.Sd.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Sd.relay_url=jf()+"/"+a.Q.yb+"/auth/channel",c.Sd.requestWithCredential=q(a.Vc,a),Df(a,e,"/auth/"+b,c,d))}
function vf(a){var b=Ba.get("redirect_request_id");if(b){var c=Ba.get("redirect_client_options");Ba.remove("redirect_request_id");Ba.remove("redirect_client_options");var d=[mf,pf],b={requestId:b,requestKey:gf(document.location.hash)},c=new Ze(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Df(a,d,"/auth/session",c)}}h.je=function(a,b){Cf(this);var c=af(a);c.lc._method="POST";this.Vc("/users",c,function(a,c){a?B(b,a):B(b,a,c)})};
h.Ie=function(a,b){var c=this;Cf(this);var d="/users/"+encodeURIComponent(a.email),e=af(a);e.lc._method="DELETE";this.Vc(d,e,function(a,d){!a&&d&&d.uid&&c.jb&&c.jb.uid&&c.jb.uid===d.uid&&Af(c);B(b,a)})};h.ee=function(a,b){Cf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=af(a);d.lc._method="PUT";d.lc.password=a.newPassword;this.Vc(c,d,function(a){B(b,a)})};
h.Je=function(a,b){Cf(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=af(a);d.lc._method="POST";this.Vc(c,d,function(a){B(b,a)})};h.Vc=function(a,b,c){Ff(this,[mf,pf],a,b,c)};function Df(a,b,c,d,e){Ff(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?zf(a,c.token,c,d.ed,function(a,b){a?B(e,a):B(e,null,b)}):B(e,b||V("UNKNOWN_ERROR"))})}
function Ff(a,b,c,d,e){b=Ka(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){B(e,V("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Sd),d=wa(d.lc),d.v="js-2.0.6",d.transport=b.uc(),d.suppress_status_codes=!0,a=jf()+"/"+a.Q.yb+c,b.open(a,d,function(a,b){if(a)B(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;B(e,c)}else B(e,null,b)}))}
function wf(a,b){var c=null!==a.jb||null!==b;a.jb=b;c&&a.Td("auth_status",b);a.Be(null!==b)}h.pe=function(a){x("auth_status"===a,'initial event must be of type "auth_status"');return[this.jb]};function Cf(a){var b=a.Q;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===Ye)throw Error("This custom Firebase server ('"+a.Q.domain+"') does not support delegated login.");};function Gf(a,b){return a&&"object"===typeof a?(x(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Hf(a,b){var c=new Pe;Re(a,new P(""),function(a,e){c.ic(a,If(e,b))});return c}function If(a,b){var c=a.O().N(),c=Gf(c,b),d;if(a.P()){var e=Gf(a.ta(),b);return e!==a.ta()||c!==a.O().N()?new Zc(e,J(c)):a}d=a;c!==a.O().N()&&(d=d.ib(new Zc(c)));a.ca(L,function(a,c){var e=If(c,b);e!==c&&(d=d.I(a,e))});return d};function W(a,b,c,d){this.type=a;this.Wa=b;this.nb=c;this.Rc=null;this.$f=d};function Jf(){}var Kf=new Jf;function Lf(a,b,c,d){var e,f;f=X(c);e=X(b);if(d.e())return c.u?(a=[],e?e.ja(f)||(e.P()?a=Mf(f):f.P()?(a=[],e.P()||e.e()||a.push(new W("children_removed",e))):a=Nf(e,f),a.push(new W("value",f))):(a=Mf(f),a.push(new W("value",f))),0!==a.length||b.u||a.push(new W("value",f)),a):e?Nf(e,f):Mf(f);if(".priority"===G(d))return!c.u||e&&e.ja(f)?[]:[new W("value",f)];if(c.u||1===Q(d))return e=G(d),f=f.B(e),a.kd(b,c,e,f);e=G(d);return f.Y(e)?(f=f.B(e),a.kd(b,c,e,f)):[]}
Jf.prototype.kd=function(a,b,c,d){(a=X(a))?a.Y(c)?(a=a.B(c),c=a.ja(d)?[]:d.e()?[new W("child_removed",a,c)]:[new W("child_changed",d,c,a)]):c=d.e()?[]:[new W("child_added",d,c)]:c=d.e()?[]:[new W("child_added",d,c)];0<c.length&&b.u&&c.push(new W("value",X(b)));return c};function Mf(a){var b=[];a.P()||a.e()||b.push(new W("children_added",a));return b}
function Nf(a,b){var c=[],d=[],e=[],f=[],g={},k={},l,m,r,s;l=a.Aa(L);r=U(l);m=b.Aa(L);s=U(m);for(var y=H(L);null!==r||null!==s;){var N;N=r?s?y(r,s):-1:1;0>N?(N=v(g,r.name),n(N)?(f.push(d[N]),d[N]=null):(k[r.name]=e.length,e.push(r)),r=U(l)):(0<N?(N=v(k,s.name),n(N)?(f.push(s),e[N]=null):(g[s.name]=d.length,d.push(s))):((r=r.K.hash()!==s.K.hash())&&f.push(s),r=U(l)),s=U(m))}for(g=0;g<e.length;g++)(k=e[g])&&c.push(new W("child_removed",k.K,k.name));for(g=0;g<d.length;g++)(e=d[g])&&c.push(new W("child_added",
e.K,e.name));for(g=0;g<f.length;g++)d=f[g],c.push(new W("child_changed",d.K,d.name,a.B(d.name)));return c}function Of(a,b,c){this.bb=a;this.Ma=c;this.m=b}na(Of,Jf);
Of.prototype.kd=function(a,b,c,d){var e=X(a)||K,f=X(b)||K;if(e.Ua()<this.bb||f.Ua()<this.bb)return Of.oc.kd.call(this,a,b,c,d);x(!e.P()&&!f.P(),"If it's a leaf node, we should have hit the above case.");a=[];var g=e.B(c);g.e()?f.Y(c)&&(e=this.Ma?ld(e,this.m):md(e,this.m),a.push(new W("child_removed",e.K,e.name)),a.push(new W("child_added",d,c))):f.Y(c)?d.ja(g)||a.push(new W("child_changed",d,c,e.B(c))):(a.push(new W("child_removed",g,c)),e=this.Ma?ld(f,this.m):md(f,this.m),a.push(new W("child_added",
e.K,e.name)));0<a.length&&b.u&&a.push(new W("value",f));return a};function Pf(){}h=Pf.prototype;
h.Xa=function(a,b,c,d){var e;if(b.type===Qf){if(b.source.$e)return this.Fa(a,b.path,b.Oa,c,d);x(b.source.Ze,"Unknown source.");e=b.source.wf;return this.Sa(a,b.path,b.Oa,c,d,e)}if(b.type===Rf){if(b.source.$e)return this.ae(a,b.path,b.children,c,d);x(b.source.Ze,"Unknown source.");e=b.source.wf;return this.$d(a,b.path,b.children,c,d,e)}if(b.type===Sf){if(b.sf)a:{var f=b.path;Tf(this,a);b=a.u;e=a.X;if(a.F){x(a.u,"Must have event snap if we have server snap");var g=c.Ya(f,a.u,a.F);if(g)if(b=a.u.L(f,
g),f.e())b=this.G(b);else{e=G(f);b=b.B(e);a=this.Ra(a,e,b,a.F,a.o,c,d);break a}}else if(a.o)if(a.u)(d=c.Ob())?b=this.G(d):(c=c.Ya(f,a.u,a.o))&&(b=this.G(b.L(f,c)));else{if(x(a.X,"We must at least have complete children"),x(!f.e(),"If the path were empty, we would have an event snap from the set"),c=c.Ya(f,a.X,a.o))e=a.X.L(f,c),e=this.G(e)}else if(a.u)(c=c.Ob())&&(b=this.G(c));else if(a.X){x(!f.e(),"If the path was empty, we would have an event snap");g=G(f);if(a.X.Y(g)){a=(b=c.Ib.Ob(c.Gb.k(g)))?this.Ra(a,
g,b,a.F,a.o,c,d):this.Ra(a,g,K,a.F,a.o,c,null);break a}x(1<Q(f),"Must be a deep set being reverted")}a=new Uf(a.F,a.o,b,e)}else a=this.Ea(a,b.path,c,d);return a}if(b.type===Vf)return b=b.path,Tf(this,a),this.Sa(a,b,(a.ab()||K).da(b),c,d,!1);throw ib("Unknown operation type: "+b.type);};function Tf(a,b){Wf(a,b.F);Wf(a,b.o);Wf(a,b.u);Wf(a,b.X)}function Wf(a,b){x(!b||a.Yb(b),"Expected an indexed snap")}
h.Fa=function(a,b,c,d,e){Tf(this,a);if(b.e())return b=this.G(c),new Uf(a.F,a.o,b,null);var f=X(a)||K,g=G(b);return 1===Q(b)||a.u||f.Y(g)?(c=f.B(G(b)).L(R(b),c),this.Ra(a,G(b),c,a.F,a.o,d,e)):a};h.ae=function(a,b,c,d,e){Tf(this,a);var f=this,g=a;Xf(c,function(c,l){var m=b.k(c);Yf(a,G(m))&&(g=f.Fa(g,m,l,d,e))});Xf(c,function(c,l){var m=b.k(c);Yf(a,G(m))||(g=f.Fa(g,m,l,d,e))});return g};
h.Ea=function(a,b,c,d){var e=a.u,f=a.X,g;Tf(this,a);if(a.F){x(e,"If we have a server snap, we must have an event snap");var k=c.Ya(b,a.u,a.F);if(k)if(b.e())e=this.G(k);else return g=G(b),b=e.L(b,k).B(g),this.Ra(a,g,b,a.F,a.o,c,d)}else if(a.o)if(e){var l=!1;a.o.ca(L,function(a,b){l||e.B(a).ja(b)||(l=!0);l&&(e=e.I(a,b))});l&&(e=this.G(e))}else if(f&&(x(0<Q(b),"If it were an empty path, we would have an event snap"),g=G(b),1===Q(b)||f.Y(g))&&(k=c.Ya(b,f,a.o)))return b=f.L(b,k).B(g),this.Ra(a,g,b,a.F,
a.o,c,d);return new Uf(a.F,a.o,e,f)};
h.Sa=function(a,b,c,d,e,f){var g;Tf(this,a);var k=a.F,l=a.o;if(a.F)k=b.e()?this.G(c,f):this.G(a.F.L(b,c),f);else if(b.e())k=this.G(c,f),l=null;else if(1===Q(b)&&(a.o||!c.e()))l=a.o||this.Ia(K),l=this.G(l.L(b,c),f);else if(a.o&&(g=G(b),a.o.Y(g)))var m=a.o.B(g).L(R(b),c),l=this.G(a.o.I(g,m),f);g=!1;f=a.u;m=a.X;if(k!==a.F||l!==a.o)if(k&&!f)f=this.G(d.xa(k)),m=null;else if(k&&f&&!c.e()&&k.da(b).ja(f.da(b)))g=!0;else if(c=d.Ya(b,f,k||l))if(b.e())f=this.G(c),m=null;else{g=G(b);b=R(b);a:{f=g;if(a.u)m=a.u.B(f);
else if(a.X)a.X.Y(f)?m=a.X.B(f):(x(b.e(),"According to precondition, this must be true"),m=K);else{if(b.e()){m=c;break a}x(a.F||a.o,"If we do not have event data, we must have server data");m=(a.F||a.o).B(f)}m=m.e()&&a.ab()?a.ab().B(f).L(b,c):m.L(b,c)}return this.Ra(a,g,m,k,l,d,e)}else g=!0;x(!g||f===a.u&&m===a.X,"We thought we could skip diffing, but we changed the eventCache.");return new Uf(k,l,f,m)};
h.$d=function(a,b,c,d,e,f){if(!a.F&&!a.o&&b.e())return a;Tf(this,a);var g=this,k=a;Xf(c,function(c,m){var r=b.k(c);Yf(a,G(r))&&(k=g.Sa(k,r,m,d,e,f))});Xf(c,function(c,m){var r=b.k(c);Yf(a,G(r))||(k=g.Sa(k,r,m,d,e,f))});return k};h.Ra=function(a,b,c,d,e){var f=a.u;a=a.X;f?f=this.G(f.I(b,c)):(a||(a=this.Ia(K)),a=this.G(a.I(b,c)));return new Uf(d,e,f,a)};h.G=function(a){return this.Ia(a)};function Yf(a,b){var c=X(a),d=a.ab();return!!(c&&c.Y(b)||d&&d.Y(b))};function Zf(a){this.gb=a;this.index=a.m;this.gb.ga&&n(pc(this.gb))?(a=qc(this.gb),a=this.index.ye(pc(this.gb),a)):a=this.index.Ae();this.Fb=a;this.gb.na&&n(rc(this.gb))?(a=sc(this.gb),a=this.index.ye(rc(this.gb),a)):a=this.index.ze();this.pb=a}na(Zf,Pf);Zf.prototype.Ia=function(a){return a.Wd(this.index)};Zf.prototype.Yb=function(a){return a.Yb(this.index)};
Zf.prototype.G=function(a,b){if(!1===b)return Zf.oc.G.call(this,a,!1);if(a.P())return this.Ia(K);for(var c=this.Ia(a),d=this.Fb,e=this.pb,f=H(this.index),g=c.Aa(this.index),k=U(g);k&&0<f(d,k);)c=c.I(k.name,K),k=U(g);g=c.rb(e,this.index);for((k=U(g))&&0>=f(k,e)&&(k=U(g));k;)c=c.I(k.name,K),k=U(g);return c};
Zf.prototype.Fa=function(a,b,c,d,e){Tf(this,a);if(1<Q(b)){var f=G(b);if((null!==X(a)?X(a):K).Y(f))return Zf.oc.Fa.call(this,a,b,c,d,e);var g=null!==e?e:a.ab(),g=null!==g&&g.Y(f)?g.B(f):null,g=d.k(f).xa(g);return null!==g?(b=g.L(R(b),c),this.Ra(a,f,b,a.F,a.o,d,e)):a}return Zf.oc.Fa.call(this,a,b,c,d,e)};function $f(a){Zf.call(this,a);this.Ma=!(""===a.Hb?a.ga:"l"===a.Hb);this.bb=tc(a)}na($f,Zf);
$f.prototype.G=function(a,b){if(!1===b)return $f.oc.G.call(this,a,!1);if(a.P())return this.Ia(K);var c=this.Ia(a),d,e,f,g;if(2*this.bb<a.Ua())for(d=this.Ia(K.ib(a.O())),c=this.Ma?c.Sb(this.pb,this.index):c.rb(this.Fb,this.index),e=U(c),f=0;e&&f<this.bb;)if(g=this.Ma?0>=H(this.index)(this.Fb,e):0>=H(this.index)(e,this.pb))d=d.I(e.name,e.K),f++,e=U(c);else break;else{d=this.Ia(a);var k,l,m=H(this.index);if(this.Ma){c=c.bf(this.index);k=this.pb;l=this.Fb;var r=m,m=function(a,b){return-1*r(a,b)}}else c=
c.Aa(this.index),k=this.Fb,l=this.pb;f=0;var s=!1;for(e=U(c);e;)!s&&0>=m(k,e)&&(s=!0),(g=s&&f<this.bb&&0>=m(e,l))?f++:d=d.I(e.name,K),e=U(c)}return d};$f.prototype.Ra=function(a,b,c,d,e,f,g){var k=X(a);return!k||k.Ua()<this.bb?$f.oc.Ra.call(this,a,b,c,d,e,f,g):(b=ag(this,a,b,c,f,g||d))?a.u?new Uf(d,e,b,null):new Uf(d,e,null,b):new Uf(d,e,a.u,a.X)};
function ag(a,b,c,d,e,f){var g=H(a.index),k;k=a.Ma?function(a,b){return-1*g(a,b)}:g;b=X(b);x(b.Ua()===a.bb,"Limit should be full.");var l=new I(c,d),m=a.Ma?ld(b,a.index):md(b,a.index);x(null!=m,"Shouldn't be null, since oldEventCache shouldn't be empty.");var r=0>=H(a.index)(a.Fb,l)&&0>=H(a.index)(l,a.pb);if(b.Y(c)){f=e.de(f,m,1,a.Ma,a.index);e=null;0<f.length&&(e=f[0],e.name===c&&(e=2<=f.length?f[1]:null));k=null==e?1:k(e,l);if(r&&!d.e()&&0<=k)return b.I(c,d);c=b.I(c,K);return null!=e&&0>=H(a.index)(a.Fb,
e)&&0>=H(a.index)(e,a.pb)?c.I(e.name,e.K):c}return d.e()?null:r?0<=k(m,l)?b.I(c,d).I(m.name,K):null:null};function bg(a){this.m=a}na(bg,Pf);bg.prototype.Ia=function(a){return a.Wd(this.m)};bg.prototype.Yb=function(a){return a.Yb(this.m)};function cg(a){this.U=a;this.m=a.w.m}
function dg(a,b,c,d){var e=[],f=a.m,g=La(Ka(b,function(a){return"child_changed"===a.type&&f.df(a.$f,a.Wa)}),function(a){return new W("child_moved",a.Wa,a.nb)}),k=Pa(b,function(a){return"child_removed"!==a.type&&"child_added"!==a.type});for(la(Ra,b,k,0).apply(null,g);0<b.length;){var g=b[0].type,k=eg(b,g),l=b.slice(0,k);b=b.slice(k);"value"===g||"children_added"===g||"children_removed"===g?x(1===l.length,"We should not have more than one of these at a view"):Ta(l,q(a.Lf,a));e=e.concat(fg(a,d,l,c))}return e}
function eg(a,b){var c=Pa(a,function(a){return a.type!==b});return-1===c?a.length:c}
function fg(a,b,c,d){for(var e=[],f=0;f<c.length;++f)for(var g=c[f],k=null,l=null,m=0;m<b.length;++m){var r=b[m];if(r.pf(g.type)){if(!k&&!l)if("children_added"===g.type){var s=a,y=g.Wa,l=[];if(!y.P()&&!y.e())for(var s=y.Aa(s.m),y=null,N=U(s);N;){var Je=new W("child_added",N.K,N.name);Je.Rc=y;l.push(Je);y=N.name;N=U(s)}}else if("children_removed"===g.type){if(s=a,y=g.Wa,l=[],!y.P()&&!y.e())for(s=y.Aa(s.m),y=U(s);y;)l.push(new W("child_removed",y.K,y.name)),y=U(s)}else k=g,"value"!==k.type&&"child_removed"!==
k.type&&(k.Rc=d.af(k.nb,k.Wa,a.m));if(k)e.push(r.createEvent(k,a.U));else for(s=0;s<l.length;++s)e.push(r.createEvent(l[s],a.U))}}return e}cg.prototype.Lf=function(a,b){if(null==a.nb||null==b.nb)throw ib("Should only compare child_ events.");return this.m.compare(new I(a.nb,a.Wa),new I(b.nb,b.Wa))};function gg(a,b){this.U=a;var c=a.w;wc(c)?(this.ec=new bg(c.m),this.ld=Kf):c.ka?(this.ec=new $f(c),this.ld=new Of(tc(c),c.m,this.ec.Ma)):(this.ec=new Zf(c),this.ld=Kf);c=this.ec;this.ha=new Uf(b.F&&c.G(b.F,!1),b.o&&c.G(b.o,!1),b.u&&c.G(b.u),b.X&&c.G(b.X));this.ya=[];this.le=new cg(a)}function hg(a){return a.U}h=gg.prototype;h.ab=function(){return this.ha.ab()};h.za=function(a){var b=this.ha.za();return b&&(wc(this.U.w)||!a.e()&&!b.B(G(a)).e())?b.da(a):null};h.e=function(){return 0===this.ya.length};
h.Jb=function(a){this.ya.push(a)};h.hb=function(a,b){var c=[];if(b){x(null==a,"A cancel should cancel all event registrations.");var d=this.U.path;Ja(this.ya,function(a){(a=a.Te(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ya.length;++f){var g=this.ya[f];if(!g.matches(a))e.push(g);else if(a.cf()){e=e.concat(this.ya.slice(f+1));break}}this.ya=e}else this.ya=[];return c};
h.Xa=function(a,b,c){a.type===Rf&&null!==a.source.fc&&(x(this.ha.za(),"We should always have a full cache before handling merges"),x(!!this.ha.u,"Missing event cache, even though we have a server cache"));var d=this.ha;b=this.ec.Xa(d,a,b,c);Tf(this.ec,b);this.ha=b;return X(b)!==X(d)?(a=Lf(this.ld,d,b,a.path),d=X(b),dg(this.le,a,d,this.ya)):b.u&&!d.u?(x(X(b)===X(d),"Caches should be the same."),d=X(b),dg(this.le,[new W("value",d)],d,this.ya)):[]};function Uf(a,b,c,d){this.F=a;this.o=b;this.u=c;this.X=d;x(null==a||null==b,"Only one of serverSnap / serverChildren can be non-null.");x(null==c||null==d,"Only one of eventSnap / eventChildren can be non-null.")}function X(a){return a.u||a.X}Uf.prototype.ab=function(){return this.F||this.o};Uf.prototype.za=function(){return this.F};var ig=new Uf(null,null,null,null);function jg(a,b){this.value=a;this.children=b||kg}var kg=new Lc(function(a,b){return a===b?0:a<b?-1:1}),lg=new jg(null);function mg(a){var b=lg;A(a,function(a,d){b=b.set(new P(d),a)});return b}h=jg.prototype;h.e=function(){return null===this.value&&this.children.e()};function ng(a,b,c){if(null!=a.value&&c(a.value))return{path:S,value:a.value};if(b.e())return null;var d=G(b);a=a.children.get(d);return null!==a?(b=ng(a,R(b),c),null!=b?{path:(new P(d)).k(b.path),value:b.value}:null):null}
function og(a,b){return ng(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(G(a));return null!==b?b.subtree(R(a)):lg};h.set=function(a,b){if(a.e())return new jg(b,this.children);var c=G(a),d=(this.children.get(c)||lg).set(R(a),b),c=this.children.Ja(c,d);return new jg(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?lg:new jg(null,this.children);var b=G(a),c=this.children.get(b);return c?(a=c.remove(R(a)),b=a.e()?this.children.remove(b):this.children.Ja(b,a),null===this.value&&b.e()?lg:new jg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(G(a));return b?b.get(R(a)):null};
function pg(a,b,c){if(b.e())return c;var d=G(b);b=pg(a.children.get(d)||lg,R(b),c);d=b.e()?a.children.remove(d):a.children.Ja(d,b);return new jg(a.value,d)}function qg(a,b){return rg(a,S,b)}function rg(a,b,c){var d={};a.children.Ba(function(a,f){d[a]=rg(f,b.k(a),c)});return c(b,a.value,d)}function sg(a,b,c){return tg(a,b,S,c)}function tg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=G(b);return(a=a.children.get(e))?tg(a,R(b),c.k(e),d):null}
function ug(a,b,c){if(!b.e()){var d=!0;a.value&&(d=c(S,a.value));!0===d&&(d=G(b),(a=a.children.get(d))&&vg(a,R(b),S.k(d),c))}}function vg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=G(b);return(a=a.children.get(e))?vg(a,R(b),c.k(e),d):lg}function Xf(a,b){wg(a,S,b)}function wg(a,b,c){a.children.Ba(function(a,e){wg(e,b.k(a),c)});a.value&&c(b,a.value)}function xg(a,b){a.children.Ba(function(a,d){d.value&&b(a,d.value)})};function yg(){this.qa={}}h=yg.prototype;h.e=function(){return Bd(this.qa)};h.Xa=function(a,b,c){var d=a.source.fc;if(null!==d)return d=v(this.qa,d),x(null!=d,"SyncTree gave us an op for an invalid query."),d.Xa(a,b,c);var e=[];A(this.qa,function(d){e=e.concat(d.Xa(a,b,c))});return e};h.Jb=function(a,b,c,d,e){var f=a.Da(),g=v(this.qa,f);g||(c=(g=c.xa(d))?null:c.ce(e),d=new Uf(d,e,g,c),g=new gg(a,d),this.qa[f]=g);g.Jb(b);a=g;(f=X(a.ha))?(d=Lf(a.ld,ig,a.ha,S),b=dg(a.le,d,f,b?[b]:a.ya)):b=[];return b};
h.hb=function(a,b,c){var d=a.Da(),e=[],f=[],g=null!=zg(this);if("default"===d){var k=this;A(this.qa,function(a,d){f=f.concat(a.hb(b,c));a.e()&&(delete k.qa[d],wc(a.U.w)||e.push(a.U))})}else{var l=v(this.qa,d);l&&(f=f.concat(l.hb(b,c)),l.e()&&(delete this.qa[d],wc(l.U.w)||e.push(l.U)))}g&&null==zg(this)&&e.push(new O(a.g,a.path));return{mg:e,Pf:f}};function Ag(a){return Ka(xd(a.qa),function(a){return!wc(a.U.w)})}h.za=function(a){var b=null;A(this.qa,function(c){b=b||c.za(a)});return b};
function Bg(a,b){if(wc(b.w))return zg(a);var c=b.Da();return v(a.qa,c)}function zg(a){return Ad(a.qa,function(a){return wc(a.U.w)})||null};function Cg(){this.V=lg;this.ra=[];this.Ec=-1}
function Dg(a,b){var c=Pa(a.ra,function(a){return a.Xd===b});x(0<=c,"removeWrite called with nonexistent writeId.");var d=a.ra[c];a.ra.splice(c,1);for(var e=!1,f=!1,g=!1,k=a.ra.length-1;!e&&0<=k;){var l=a.ra[k];k>=c&&Eg(l,d.path)?e=!0:!f&&d.path.contains(l.path)&&(k>=c?f=!0:g=!0);k--}e||(f||g?Fg(a):d.Oa?a.V=a.V.remove(d.path):A(d.children,function(b,c){a.V=a.V.remove(d.path.k(c))}));c=d.path;if(og(a.V,c)){if(g)return c;x(e,"Must have found a shadow");return null}return c}h=Cg.prototype;
h.Ob=function(a){var b=og(this.V,a);if(b){var c=b.value;a=T(b.path,a);return c.da(a)}return null};
h.xa=function(a,b,c,d){var e,f;if(c||d)return e=this.V.subtree(a),!d&&e.e()?b:d||null!==b||null!==e.value?(e=Gg(this.ra,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Xd)))&&(b.path.contains(a)||a.contains(b.path))},a),f=b||K,Xf(e,function(a,b){f=f.L(a,b)}),f):null;if(e=og(this.V,a))return b=T(e.path,a),e.value.da(b);e=this.V.subtree(a);return e.e()?b:b||e.value?(f=b||K,Xf(e,function(a,b){f=f.L(a,b)}),f):null};
h.ce=function(a,b){var c=!1,d=K,e=this.Ob(a);if(e)return e.P()||e.ca(L,function(a,b){d=d.I(a,b)}),d;if(b)return d=b,xg(this.V.subtree(a),function(a,b){d=d.I(a,b)}),d;xg(this.V.subtree(a),function(a,b){c=!0;d=d.I(a,b)});return c?d:null};h.Ya=function(a,b,c,d){x(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.k(b);if(og(this.V,a))return null;a=this.V.subtree(a);if(a.e())return d.da(b);var e=d.da(b);Xf(a,function(a,b){e=e.L(a,b)});return e};
h.de=function(a,b,c,d,e,f){var g;a=this.V.subtree(a);a.value?g=a.value:b&&(g=b,Xf(a,function(a,b){g=g.L(a,b)}));if(g){b=[];g=g.Wd(f);a=H(f);e=e?g.Sb(c,f):g.rb(c,f);for(f=U(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=U(e);return b}return[]};function Eg(a,b){return a.Oa?a.path.contains(b):!!zd(a.children,function(c,d){return a.path.k(d).contains(b)})}function Fg(a){a.V=Gg(a.ra,Hg,S);a.Ec=0<a.ra.length?a.ra[a.ra.length-1].Xd:-1}function Hg(a){return a.visible}
function Gg(a,b,c){for(var d=lg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path,k;f.Oa?(c.contains(g)?(k=T(c,g),f=f.Oa):(k=S,f=f.Oa.da(T(g,c))),d=Ig(d,k,f)):d=Jg(d,f.path,f.children)}}return d}function Ig(a,b,c){var d=og(a,b);if(d){var e=d.value,d=d.path;b=T(d,b);c=e.L(b,c);a=pg(a,d,new jg(c))}else a=pg(a,b,new jg(c));return a}
function Jg(a,b,c){var d=og(a,b);if(d){var e=d.value,d=d.path,f=T(d,b),g=e;A(c,function(a,b){g=g.L(f.k(b),a)});a=pg(a,d,new jg(g))}else A(c,function(c,d){a=pg(a,b.k(d),new jg(c))});return a}function Kg(a,b){this.Gb=a;this.Ib=b}h=Kg.prototype;h.Ob=function(){return this.Ib.Ob(this.Gb)};h.xa=function(a,b,c){return this.Ib.xa(this.Gb,a,b,c)};h.ce=function(a){return this.Ib.ce(this.Gb,a)};h.Ya=function(a,b,c){return this.Ib.Ya(this.Gb,a,b,c)};
h.de=function(a,b,c,d,e){return this.Ib.de(this.Gb,a,b,c,d,e)};h.k=function(a){return new Kg(this.Gb.k(a),this.Ib)};function Lg(a,b,c){this.type=Qf;this.source=a;this.path=b;this.Oa=c}Lg.prototype.Mc=function(a){return this.path.e()?new Lg(this.source,S,this.Oa.B(a)):new Lg(this.source,R(this.path),this.Oa)};function Mg(a,b){this.type=Sf;this.source=Ng;this.path=a;this.sf=b}Mg.prototype.Mc=function(){return this.path.e()?this:new Mg(R(this.path),this.sf)};function Og(a,b){this.type=Vf;this.source=a;this.path=b}Og.prototype.Mc=function(){return this.path.e()?new Og(this.source,S):new Og(this.source,R(this.path))};function Pg(a,b,c){this.type=Rf;this.source=a;this.path=b;this.children=c}Pg.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new P(a)),a.e()?null:a.value?new Lg(this.source,S,a.value):new Pg(this.source,S,a);x(G(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new Pg(this.source,R(this.path),this.children)};var Qf=0,Rf=1,Sf=2,Vf=3;function Qg(a,b,c,d){this.$e=a;this.Ze=b;this.fc=c;this.wf=d;x(!d||b,"Tagged queries must be from server.")}var Ng=new Qg(!0,!1,null,!1),Rg=new Qg(!1,!0,null,!1);function Sg(a){this.ma=lg;this.Bb=new Cg;this.Zc={};this.gc={};this.Fc=a}h=Sg.prototype;h.Fa=function(a,b,c,d){var e=this.Bb,f=d;x(c>e.Ec,"Stacking an older write on top of newer ones");n(f)||(f=!0);e.ra.push({path:a,Oa:b,Xd:c,visible:f});f&&(e.V=Ig(e.V,a,b));e.Ec=c;return d?Tg(this,new Lg(Ng,a,b)):[]};
h.ae=function(a,b,c){var d=this.Bb;x(c>d.Ec,"Stacking an older merge on top of newer ones");d.ra.push({path:a,children:b,Xd:c,visible:!0});d.V=Jg(d.V,a,b);d.Ec=c;b=mg(b);return Tg(this,new Pg(Ng,a,b))};h.Ea=function(a,b){b=b||!1;var c=Dg(this.Bb,a);return null==c?[]:Tg(this,new Mg(c,b))};h.Sa=function(a,b){return Tg(this,new Lg(Rg,a,b))};h.$d=function(a,b){var c=mg(b);return Tg(this,new Pg(Rg,a,c))};
function Ug(a,b,c,d){d=Cd(a.Zc,"_"+d);if(null!=d){var e=Vg(d);d=e.path;e=e.fc;b=T(d,b);c=new Lg(new Qg(!1,!0,e,!0),b,c);return Wg(a,d,c)}return[]}function Xg(a,b,c,d){if(d=Cd(a.Zc,"_"+d)){var e=Vg(d);d=e.path;e=e.fc;b=T(d,b);c=mg(c);c=new Pg(new Qg(!1,!0,e,!0),b,c);return Wg(a,d,c)}return[]}
h.Jb=function(a,b){var c=a.path,d=null,e=!1;ug(this.ma,c,function(a,b){var f=T(a,c);d=b.za(f);e=e||null!=zg(b);return!d});var f=this.ma.get(c);f?(e=e||null!=zg(f),d=d||f.za(S)):(f=new yg,this.ma=this.ma.set(c,f));var g=null;if(!d){var k=!1,g=K;xg(this.ma.subtree(c),function(a,b){var c=b.za(S);c&&(k=!0,g=g.I(a,c))});k||(g=null)}var l=null!=Bg(f,a);if(!l&&!wc(a.w)){var m=Yg(a);x(!(m in this.gc),"View does not exist, but we have a tag");var r=Zg++;this.gc[m]=r;this.Zc["_"+r]=m}m=f.Jb(a,b,new Kg(c,this.Bb),
d,g);l||e||(f=Bg(f,a),m=m.concat($g(this,a,f)));return m};
h.hb=function(a,b,c){var d=a.path,e=this.ma.get(d),f=[];if(e&&("default"===a.Da()||null!=Bg(e,a))){f=e.hb(a,b,c);e.e()&&(this.ma=this.ma.remove(d));e=f.mg;f=f.Pf;b=-1!==Pa(e,function(a){return wc(a.w)});var g=sg(this.ma,d,function(a,b){return null!=zg(b)});if(b&&!g&&(d=this.ma.subtree(d),!d.e()))for(var d=ah(d),k=0;k<d.length;++k){var l=d[k],m=l.U,l=bh(this,l);this.Fc.Le(m,ch(this,m),l.qd,l.H)}if(!g&&0<e.length&&!c)if(b)this.Fc.Od(a,null);else{var r=this;Ja(e,function(a){a.Da();var b=r.gc[Yg(a)];
r.Fc.Od(a,b)})}dh(this,e)}return f};h.xa=function(a,b){var c=this.Bb,d=sg(this.ma,a,function(b,c){var d=T(b,a);if(d=c.za(d))return d});return c.xa(a,d,b,!0)};function ah(a){return qg(a,function(a,c,d){if(c&&null!=zg(c))return[zg(c)];var e=[];c&&(e=Ag(c));A(d,function(a){e=e.concat(a)});return e})}function dh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!wc(d.w)){var d=Yg(d),e=a.gc[d];delete a.gc[d];delete a.Zc["_"+e]}}}
function $g(a,b,c){var d=b.path,e=ch(a,b);c=bh(a,c);b=a.Fc.Le(b,e,c.qd,c.H);d=a.ma.subtree(d);if(e)x(null==zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=qg(d,function(a,b,c){if(!a.e()&&b&&null!=zg(b))return[hg(zg(b))];var d=[];b&&(d=d.concat(La(Ag(b),function(a){return a.U})));A(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Fc.Od(c,ch(a,c));return b}
function bh(a,b){var c=b.U,d=ch(a,c);return{qd:function(){return(b.ab()||K).hash()},H:function(b,f){if("ok"===b){if(f&&"object"===typeof f&&u(f,"w")){var g=v(f,"w");ea(g)&&0<=Ia(g,"no_index")&&z("Using an unspecified index. Consider adding "+('".indexOn": "'+c.w.m.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}if(d){var k=c.path;if(g=Cd(a.Zc,"_"+d))var l=Vg(g),g=l.path,l=l.fc,k=T(g,k),k=new Og(new Qg(!1,!0,l,!0),k),g=Wg(a,g,k);else g=[]}else g=Tg(a,new Og(Rg,
c.path));return g}g="Unknown Error";"too_big"===b?g="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?g="Client doesn't have permission to access the desired data.":"unavailable"==b&&(g="The service is unavailable");g=Error(b+": "+g);g.code=b.toUpperCase();return a.hb(c,null,g)}}}function Yg(a){return a.path.toString()+"$"+a.Da()}
function Vg(a){var b=a.indexOf("$");x(-1!==b&&b<a.length-1,"Bad queryKey.");return{fc:a.substr(b+1),path:new P(a.substr(0,b))}}function ch(a,b){var c=Yg(b);return v(a.gc,c)}var Zg=1;function Wg(a,b,c){var d=a.ma.get(b);x(d,"Missing sync point for query tag that we're tracking");return d.Xa(c,new Kg(b,a.Bb),null)}function Tg(a,b){return eh(a,b,a.ma,null,new Kg(S,a.Bb))}
function eh(a,b,c,d,e){if(b.path.e())return fh(a,b,c,d,e);var f=c.get(S);null==d&&null!=f&&(d=f.za(S));var g=[],k=G(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var m=d?d.B(k):null,k=e.k(k),g=g.concat(eh(a,l,c,m,k));f&&(g=g.concat(f.Xa(b,e,d)));return g}function fh(a,b,c,d,e){var f=c.get(S);null==d&&null!=f&&(d=f.za(S));var g=[];c.children.Ba(function(c,f){var m=d?d.B(c):null,r=e.k(c),s=b.Mc(c);s&&(g=g.concat(fh(a,s,f,m,r)))});f&&(g=g.concat(f.Xa(b,e,d)));return g};function gh(a){this.Q=a;this.Qa=Ld(a);this.Z=new Te;this.zd=1;this.S=new xe(this.Q,q(this.Cd,this),q(this.Ad,this),q(this.Ee,this));this.ug=Md(a,q(function(){return new Id(this.Qa,this.S)},this));this.pc=new Fc;this.qe=new Se;var b=this;this.ud=new Sg({Le:function(a,d,e,f){d=[];e=b.qe.Wc.da(a.path);e.e()||(d=b.ud.Sa(a.path,e),setTimeout(function(){f("ok")},0));return d},Od:ba});hh(this,"connected",!1);this.ea=new Pe;this.T=new tf(a,q(this.S.T,this.S),q(this.S.Pe,this.S),q(this.Be,this));this.jd=0;
this.re=null;this.M=new Sg({Le:function(a,d,e,f){Be(b.S,a,e,d,function(d,e){var l=f(d,e);Xe(b.Z,a.path,l)});return[]},Od:function(a,d){var e=b.S,f=a.path.toString(),g=a.Da();e.f("Unlisten called for "+f+" "+g);if(De(e,f,g)&&e.ia){var k=Dc(a);e.f("Unlisten on "+f+" for "+g);f={p:f};d&&(f.q=k,f.t=d);e.wa("n",f)}}})}h=gh.prototype;h.toString=function(){return(this.Q.Cb?"https://":"http://")+this.Q.host};h.name=function(){return this.Q.yb};
function ih(a){var b=new P(".info/serverTimeOffset");a=a.qe.Wc.da(b).N()||0;return(new Date).getTime()+a}function jh(a){a=a={timestamp:ih(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}h.Cd=function(a,b,c,d){this.jd++;var e=new P(a);b=this.re?this.re(a,b):b;a=[];d?c?(b=fd(b,function(a){return J(a)}),a=Xg(this.M,e,b,d)):(b=J(b),a=Ug(this.M,e,b,d)):c?(d=fd(b,function(a){return J(a)}),a=this.M.$d(e,d)):(d=J(b),a=this.M.Sa(e,d));d=e;0<a.length&&(d=kh(this,e));Xe(this.Z,d,a)};
h.Ad=function(a){hh(this,"connected",a);!1===a&&lh(this)};h.Ee=function(a){var b=this;Cb(a,function(a,d){hh(b,d,a)})};h.Be=function(a){hh(this,"authenticated",a)};function hh(a,b,c){b=new P("/.info/"+b);c=J(c);var d=a.qe;d.Wc=d.Wc.L(b,c);c=a.ud.Sa(b,c);Xe(a.Z,b,c)}
h.Db=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Cg:c});var e=jh(this);b=J(b,c);var e=If(b,e),f=this.zd++,e=this.M.Fa(a,e,f,!0);Ue(this.Z,e);var g=this;this.S.put(a.toString(),b.N(!0),function(b,c){var e="ok"===b;e||z("set at "+a+" failed: "+b);e=g.M.Ea(f,!e);Xe(g.Z,a,e);mh(d,b,c)});e=nh(this,a);kh(this,e);Xe(this.Z,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=jh(this),f={};A(b,function(a,b){d=!1;var c=J(a);f[b]=If(c,e)});if(d)kb("update() called with empty data.  Don't do anything."),mh(c,"ok");else{var g=this.zd++,k=this.M.ae(a,f,g);Ue(this.Z,k);var l=this;Ke(this.S,a.toString(),b,function(b,d){x("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");var e="ok"===b;e||z("update at "+a+" failed: "+b);var e=l.M.Ea(g,!e),f=a;0<e.length&&(f=kh(l,a));Xe(l.Z,f,e);mh(c,b,d)});
b=nh(this,a);kh(this,b);Xe(this.Z,a,[])}};function lh(a){a.f("onDisconnectEvents");var b=jh(a),c=[];Re(Hf(a.ea,b),S,function(b,e){c=c.concat(a.M.Sa(b,e));var f=nh(a,b);kh(a,f)});a.ea=new Pe;Xe(a.Z,S,c)}h.Ce=function(a,b){var c=this;this.S.Ce(a.toString(),function(d,e){"ok"===d&&Qe(c.ea,a);mh(b,d,e)})};function oh(a,b,c,d){var e=J(c);Fe(a.S,b.toString(),e.N(!0),function(c,g){"ok"===c&&a.ea.ic(b,e);mh(d,c,g)})}
function ph(a,b,c,d,e){var f=J(c,d);Fe(a.S,b.toString(),f.N(!0),function(c,d){"ok"===c&&a.ea.ic(b,f);mh(e,c,d)})}function qh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(kb("onDisconnect().update() called with empty data.  Don't do anything."),mh(d,"ok")):He(a.S,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=J(c[l]);a.ea.ic(b.k(l),m)}mh(d,e,f)})}function Bc(a,b,c){c=".info"===G(b.path)?a.ud.Jb(b,c):a.M.Jb(b,c);Cc(a.Z,b.path,c)}h.tb=function(){this.S.tb()};h.kc=function(){this.S.kc()};
h.Me=function(a){if("undefined"!==typeof console){a?(this.Nd||(this.Nd=new Hd(this.Qa)),a=this.Nd.get()):a=this.Qa.get();var b=Ma(yd(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Ne=function(a){Gd(this.Qa,a);this.ug.uf[a]=!0};h.f=function(a){kb("r:"+this.S.id+":",arguments)};function mh(a,b,c){a&&Fb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function rh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new O(a,b);g.zb("value",f);c={path:b,update:c,H:d,status:null,lf:hb(),Qe:e,rf:0,Vd:function(){g.bc("value",f)},Yd:null,sa:null,fd:null,gd:null,hd:null};d=a.M.xa(b,void 0)||K;c.fd=d;d=c.update(d.N());if(n(d)){Tb("transaction failed: Data returned ",d);c.status=1;e=Gc(a.pc,b);var k=e.ta()||[];k.push(c);Hc(e,k);"object"===typeof d&&null!==d&&u(d,".priority")?(k=v(d,".priority"),x(Rb(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.M.xa(b)||K).O().N();e=jh(a);d=J(d,k);e=If(d,e);c.gd=d;c.hd=e;c.sa=a.zd++;c=a.M.Fa(b,e,c.sa,c.Qe);Xe(a.Z,b,c);sh(a)}else c.Vd(),c.gd=null,c.hd=null,c.H&&(a=new C(c.fd,new O(a,c.path),L),c.H(null,!1,a))}function sh(a,b){var c=b||a.pc;b||th(a,c);if(null!==c.ta()){var d=uh(a,c);x(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&vh(a,c.path(),d)}else c.pd()&&c.ca(function(b){sh(a,b)})}
function vh(a,b,c){for(var d=La(c,function(a){return a.sa}),e=a.M.xa(b,d)||K,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];x(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.rf++;var k=T(b,g.path),d=d.L(k,g.gd)}d=d.N(!0);a.S.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(a.M.Ea(c[f].sa));if(c[f].H){var g=c[f].hd,k=new O(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new C(g,k,L)))}c[f].Vd()}th(a,Gc(a.pc,b));sh(a);Xe(a.Z,b,e);for(f=0;f<d.length;f++)Fb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(z("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Yd=d;kh(a,b)}},e)}function kh(a,b){var c=wh(a,b),d=c.path(),c=uh(a,c);xh(a,c,d);return d}
function xh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=La(b,function(a){return a.sa}),g=0;g<b.length;g++){var k=b[g],l=T(c,k.path),m=!1,r;x(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,r=k.Yd,e=e.concat(a.M.Ea(k.sa,!0));else if(1===k.status)if(25<=k.rf)m=!0,r="maxretry",e=e.concat(a.M.Ea(k.sa,!0));else{var s=a.M.xa(k.path,f)||K;k.fd=s;var y=b[g].update(s.N());n(y)?(Tb("transaction failed: Data returned ",y),l=J(y),"object"===typeof y&&null!=y&&u(y,
".priority")||(l=l.ib(s.O())),s=k.sa,y=jh(a),y=If(l,y),k.gd=l,k.hd=y,k.sa=a.zd++,Qa(f,s),e=e.concat(a.M.Fa(k.path,y,k.sa,k.Qe)),e=e.concat(a.M.Ea(s,!0))):(m=!0,r="nodata",e=e.concat(a.M.Ea(k.sa,!0)))}Xe(a.Z,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].Vd,Math.floor(0)),b[g].H&&("nodata"===r?(k=new O(a,b[g].path),d.push(q(b[g].H,null,null,!1,new C(b[g].fd,k,L)))):d.push(q(b[g].H,null,Error(r),!1,null))))}th(a,a.pc);for(g=0;g<d.length;g++)Fb(d[g]);sh(a)}}
function wh(a,b){for(var c,d=a.pc;null!==(c=G(b))&&null===d.ta();)d=Gc(d,c),b=R(b);return d}function uh(a,b){var c=[];yh(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function yh(a,b,c){var d=b.ta();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.ca(function(b){yh(a,b,c)})}function th(a,b){var c=b.ta();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Hc(b,0<c.length?c:null)}b.ca(function(b){th(a,b)})}
function nh(a,b){var c=wh(a,b).path(),d=Gc(a.pc,b);Kc(d,function(b){zh(a,b)});zh(a,d);Jc(d,function(b){zh(a,b)});return c}
function zh(a,b){var c=b.ta();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(x(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Yd="set"):(x(1===c[g].status,"Unexpected transaction status in abort"),c[g].Vd(),e=e.concat(a.M.Ea(c[g].sa,!0)),c[g].H&&d.push(q(c[g].H,null,Error("set"),!1,null))));-1===f?Hc(b,null):c.length=f+1;Xe(a.Z,b.path(),e);for(g=0;g<d.length;g++)Fb(d[g])}};function Ah(){this.jc={}}ca(Ah);Ah.prototype.tb=function(){for(var a in this.jc)this.jc[a].tb()};Ah.prototype.interrupt=Ah.prototype.tb;Ah.prototype.kc=function(){for(var a in this.jc)this.jc[a].kc()};Ah.prototype.resume=Ah.prototype.kc;function Bh(a){var b=this;this.tc=a;this.Qd="*";lf()?this.Hc=this.sd=cf():(this.Hc=window.opener,this.sd=window);if(!b.Hc)throw"Unable to find relay frame";df(this.sd,"message",q(this.cc,this));df(this.sd,"message",q(this.hf,this));try{Ch(this,{a:"ready"})}catch(c){df(this.Hc,"load",function(){Ch(b,{a:"ready"})})}df(window,"unload",q(this.eg,this))}function Ch(a,b){b=t(b);lf()?a.Hc.doPost(b,a.Qd):a.Hc.postMessage(b,a.Qd)}
Bh.prototype.cc=function(a){var b=this,c;try{c=ua(a.data)}catch(d){}c&&"request"===c.a&&(ef(window,"message",this.cc),this.Qd=a.origin,this.tc&&setTimeout(function(){b.tc(b.Qd,c.d,function(a,c){b.If=!c;b.tc=void 0;Ch(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Bh.prototype.eg=function(){try{ef(this.sd,"message",this.hf)}catch(a){}this.tc&&(Ch(this,{a:"error",d:"unknown closed window"}),this.tc=void 0);try{window.close()}catch(b){}};Bh.prototype.hf=function(a){if(this.If&&"die"===a.data)try{window.close()}catch(b){}};var Y={Rf:function(){Yd=Pd=!0}};Y.forceLongPolling=Y.Rf;Y.Sf=function(){Zd=!0};Y.forceWebSockets=Y.Sf;Y.rg=function(a,b){a.g.S.Ke=b};Y.setSecurityDebugCallback=Y.rg;Y.Me=function(a,b){a.g.Me(b)};Y.stats=Y.Me;Y.Ne=function(a,b){a.g.Ne(b)};Y.statsIncrementCounter=Y.Ne;Y.jd=function(a){return a.g.jd};Y.dataUpdateCount=Y.jd;Y.Vf=function(a,b){a.g.re=b};Y.interceptServerData=Y.Vf;Y.bg=function(a){new Bh(a)};Y.onPopupOpen=Y.bg;Y.pg=function(a){Ye=a};Y.setAuthenticationServer=Y.pg;function Z(a,b){this.Sc=a;this.Ca=b}Z.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);F("Firebase.onDisconnect().cancel",1,a,!0);this.Sc.Ce(this.Ca,a||null)};Z.prototype.cancel=Z.prototype.cancel;Z.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);$b("Firebase.onDisconnect().remove",this.Ca);F("Firebase.onDisconnect().remove",1,a,!0);oh(this.Sc,this.Ca,null,a)};Z.prototype.remove=Z.prototype.remove;
Z.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);$b("Firebase.onDisconnect().set",this.Ca);Sb("Firebase.onDisconnect().set",a,!1);F("Firebase.onDisconnect().set",2,b,!0);oh(this.Sc,this.Ca,a,b)};Z.prototype.set=Z.prototype.set;
Z.prototype.Db=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);$b("Firebase.onDisconnect().setWithPriority",this.Ca);Sb("Firebase.onDisconnect().setWithPriority",a,!1);Wb("Firebase.onDisconnect().setWithPriority",2,b);F("Firebase.onDisconnect().setWithPriority",3,c,!0);ph(this.Sc,this.Ca,a,b,c)};Z.prototype.setWithPriority=Z.prototype.Db;
Z.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);$b("Firebase.onDisconnect().update",this.Ca);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.onDisconnect().update",a);F("Firebase.onDisconnect().update",2,b,!0);qh(this.Sc,
this.Ca,a,b)};Z.prototype.update=Z.prototype.update;var $={};$.rc=xe;$.DataConnection=$.rc;xe.prototype.tg=function(a,b){this.wa("q",{p:a},b)};$.rc.prototype.simpleListen=$.rc.prototype.tg;xe.prototype.Nf=function(a,b){this.wa("echo",{d:a},b)};$.rc.prototype.echo=$.rc.prototype.Nf;xe.prototype.interrupt=xe.prototype.tb;$.zf=ie;$.RealTimeConnection=$.zf;ie.prototype.sendRequest=ie.prototype.wa;ie.prototype.close=ie.prototype.close;
$.Uf=function(a){var b=xe.prototype.put;xe.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){xe.prototype.put=b}};$.hijackHash=$.Uf;$.yf=Ca;$.ConnectionTarget=$.yf;$.Da=function(a){return a.Da()};$.queryIdentifier=$.Da;$.Wf=function(a){return a.g.S.ua};$.listens=$.Wf;var Dh=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);x(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);x(20===c.length,"NextPushId: Length should be 20.");
return c}}();function O(a,b){var c,d,e;if(a instanceof gh)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=ub(arguments[0]);c=d.vg;"firebase"===d.domain&&tb(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||tb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.Cb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Ca(d.host,d.Cb,c,"ws"===d.scheme||"wss"===d.scheme);d=new P(d.Pc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Qb(c.yb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Pb.test(e)));if(f)throw Error(E("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Ah)e=b;else if(p(b))e=Ah.Qb(),c.Gd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=Ah.Qb();f=c.toString();var g=v(e.jc,f);g||(g=new gh(c),e.jc[f]=g);c=g}M.call(this,c,d,oc,!1)}na(O,M);var Eh=O,Fh=["Firebase"],Gh=aa;Fh[0]in Gh||!Gh.execScript||Gh.execScript("var "+Fh[0]);for(var Hh;Fh.length&&(Hh=Fh.shift());)!Fh.length&&n(Eh)?Gh[Hh]=Eh:Gh=Gh[Hh]?Gh[Hh]:Gh[Hh]={};O.prototype.name=function(){z("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};O.prototype.name=O.prototype.name;
O.prototype.key=function(){D("Firebase.key",0,0,arguments.length);var a;this.path.e()?a=null:(a=this.path,a=a.aa<a.n.length?a.n[a.n.length-1]:null);return a};O.prototype.key=O.prototype.key;O.prototype.k=function(a){D("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof P))if(null===G(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Zb("Firebase.child",b)}else Zb("Firebase.child",a);return new O(this.g,this.path.k(a))};O.prototype.child=O.prototype.k;
O.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new O(this.g,a)};O.prototype.parent=O.prototype.parent;O.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};O.prototype.root=O.prototype.root;
O.prototype.toString=function(){D("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.g.toString();else{a=this.parent().toString()+"/";var b=this.key();a+=encodeURIComponent(String(b))}return a};O.prototype.toString=O.prototype.toString;O.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);$b("Firebase.set",this.path);Sb("Firebase.set",a,!1);F("Firebase.set",2,b,!0);this.g.Db(this.path,a,null,b||null)};O.prototype.set=O.prototype.set;
O.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);$b("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Vb("Firebase.update",a);F("Firebase.update",2,b,!0);if(u(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.g.update(this.path,a,b||null)};O.prototype.update=O.prototype.update;O.prototype.Db=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);$b("Firebase.setWithPriority",this.path);Sb("Firebase.setWithPriority",a,!1);Wb("Firebase.setWithPriority",2,b);F("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.g.Db(this.path,a,b,c||null)};O.prototype.setWithPriority=O.prototype.Db;
O.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);$b("Firebase.remove",this.path);F("Firebase.remove",1,a,!0);this.set(null,a)};O.prototype.remove=O.prototype.remove;
O.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);$b("Firebase.transaction",this.path);F("Firebase.transaction",1,a,!1);F("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(E("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);rh(this.g,this.path,a,b||null,c)};O.prototype.transaction=O.prototype.transaction;
O.prototype.qg=function(a,b){D("Firebase.setPriority",1,2,arguments.length);$b("Firebase.setPriority",this.path);Wb("Firebase.setPriority",1,a);F("Firebase.setPriority",2,b,!0);this.g.Db(this.path.k(".priority"),a,null,b)};O.prototype.setPriority=O.prototype.qg;O.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);$b("Firebase.push",this.path);Sb("Firebase.push",a,!0);F("Firebase.push",2,b,!0);var c=ih(this.g),c=Dh(c),c=this.k(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
O.prototype.push=O.prototype.push;O.prototype.fb=function(){$b("Firebase.onDisconnect",this.path);return new Z(this.g,this.path)};O.prototype.onDisconnect=O.prototype.fb;O.prototype.T=function(a,b,c){z("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);ac("Firebase.auth",a);F("Firebase.auth",2,b,!0);F("Firebase.auth",3,b,!0);zf(this.g.T,a,{},{remember:"none"},b,c)};O.prototype.auth=O.prototype.T;
O.prototype.Pe=function(a){D("Firebase.unauth",0,1,arguments.length);F("Firebase.unauth",1,a,!0);Af(this.g.T,a)};O.prototype.unauth=O.prototype.Pe;O.prototype.ne=function(){D("Firebase.getAuth",0,0,arguments.length);return this.g.T.ne()};O.prototype.getAuth=O.prototype.ne;O.prototype.ag=function(a,b){D("Firebase.onAuth",1,2,arguments.length);F("Firebase.onAuth",1,a,!1);Nb("Firebase.onAuth",2,b);this.g.T.zb("auth_status",a,b)};O.prototype.onAuth=O.prototype.ag;
O.prototype.Zf=function(a,b){D("Firebase.offAuth",1,2,arguments.length);F("Firebase.offAuth",1,a,!1);Nb("Firebase.offAuth",2,b);this.g.T.bc("auth_status",a,b)};O.prototype.offAuth=O.prototype.Zf;O.prototype.Df=function(a,b,c){D("Firebase.authWithCustomToken",2,3,arguments.length);ac("Firebase.authWithCustomToken",a);F("Firebase.authWithCustomToken",2,b,!1);cc("Firebase.authWithCustomToken",3,c,!0);zf(this.g.T,a,{},c||{},b)};O.prototype.authWithCustomToken=O.prototype.Df;
O.prototype.Ef=function(a,b,c){D("Firebase.authWithOAuthPopup",2,3,arguments.length);bc("Firebase.authWithOAuthPopup",1,a);F("Firebase.authWithOAuthPopup",2,b,!1);cc("Firebase.authWithOAuthPopup",3,c,!0);Ef(this.g.T,a,c,b)};O.prototype.authWithOAuthPopup=O.prototype.Ef;
O.prototype.Ff=function(a,b,c){D("Firebase.authWithOAuthRedirect",2,3,arguments.length);bc("Firebase.authWithOAuthRedirect",1,a);F("Firebase.authWithOAuthRedirect",2,b,!1);cc("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.g.T;Cf(d);var e=[sf],f=af(c);"anonymous"===a||"firebase"===a?B(b,V("TRANSPORT_UNAVAILABLE")):(Ba.set("redirect_client_options",f.ed),Df(d,e,"/auth/"+a,f,b))};O.prototype.authWithOAuthRedirect=O.prototype.Ff;
O.prototype.Gf=function(a,b,c,d){D("Firebase.authWithOAuthToken",3,4,arguments.length);bc("Firebase.authWithOAuthToken",1,a);F("Firebase.authWithOAuthToken",3,c,!1);cc("Firebase.authWithOAuthToken",4,d,!0);p(b)?(bc("Firebase.authWithOAuthToken",2,b),Bf(this.g.T,a+"/token",{access_token:b},d,c)):(cc("Firebase.authWithOAuthToken",2,b,!1),Bf(this.g.T,a+"/token",b,d,c))};O.prototype.authWithOAuthToken=O.prototype.Gf;
O.prototype.Cf=function(a,b){D("Firebase.authAnonymously",1,2,arguments.length);F("Firebase.authAnonymously",1,a,!1);cc("Firebase.authAnonymously",2,b,!0);Bf(this.g.T,"anonymous",{},b,a)};O.prototype.authAnonymously=O.prototype.Cf;
O.prototype.Hf=function(a,b,c){D("Firebase.authWithPassword",2,3,arguments.length);cc("Firebase.authWithPassword",1,a,!1);dc("Firebase.authWithPassword",a,"email");dc("Firebase.authWithPassword",a,"password");F("Firebase.authAnonymously",2,b,!1);cc("Firebase.authAnonymously",3,c,!0);Bf(this.g.T,"password",a,c,b)};O.prototype.authWithPassword=O.prototype.Hf;
O.prototype.je=function(a,b){D("Firebase.createUser",2,2,arguments.length);cc("Firebase.createUser",1,a,!1);dc("Firebase.createUser",a,"email");dc("Firebase.createUser",a,"password");F("Firebase.createUser",2,b,!1);this.g.T.je(a,b)};O.prototype.createUser=O.prototype.je;O.prototype.Ie=function(a,b){D("Firebase.removeUser",2,2,arguments.length);cc("Firebase.removeUser",1,a,!1);dc("Firebase.removeUser",a,"email");dc("Firebase.removeUser",a,"password");F("Firebase.removeUser",2,b,!1);this.g.T.Ie(a,b)};
O.prototype.removeUser=O.prototype.Ie;O.prototype.ee=function(a,b){D("Firebase.changePassword",2,2,arguments.length);cc("Firebase.changePassword",1,a,!1);dc("Firebase.changePassword",a,"email");dc("Firebase.changePassword",a,"oldPassword");dc("Firebase.changePassword",a,"newPassword");F("Firebase.changePassword",2,b,!1);this.g.T.ee(a,b)};O.prototype.changePassword=O.prototype.ee;
O.prototype.Je=function(a,b){D("Firebase.resetPassword",2,2,arguments.length);cc("Firebase.resetPassword",1,a,!1);dc("Firebase.resetPassword",a,"email");F("Firebase.resetPassword",2,b,!1);this.g.T.Je(a,b)};O.prototype.resetPassword=O.prototype.Je;O.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);Ah.Qb().tb()};O.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);Ah.Qb().kc()};
function qb(a,b){x(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?ob=q(console.log,console):"object"===typeof console.log&&(ob=function(a){console.log(a)})),b&&Ba.set("logging_enabled",!0)):a?ob=a:(ob=null,Ba.remove("logging_enabled"))}O.enableLogging=qb;O.ServerValue={TIMESTAMP:{".sv":"timestamp"}};O.SDK_VERSION="2.0.6";O.INTERNAL=Y;O.Context=Ah;O.TEST_ACCESS=$;})();

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/--/g, '\u2014')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function() {
      var out, err;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

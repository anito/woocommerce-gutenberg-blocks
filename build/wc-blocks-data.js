this.wc=this.wc||{},this.wc.wcBlocksData=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=21)}([function(e,t){!function(){e.exports=this.wp.dataControls}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.data}()},,function(e,t,r){var n=r(18),o=r(19),c=r(20);e.exports=function(e){return n(e)||o(e)||c()}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.i18n}()},,function(e,t){!function(){e.exports=this.wp.url}()},,function(e,t,r){var n=r(15),o=r(16),c=r(17);e.exports=function(e,t){return n(e)||o(e,t)||c()}},,,function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getRoute",(function(){return y})),r.d(n,"getRoutes",(function(){return m}));var o={};r.r(o),r.d(o,"receiveRoutes",(function(){return x}));var c={};r.r(c),r.d(c,"getRoute",(function(){return T})),r.d(c,"getRoutes",(function(){return C}));var i={};r.r(i),r.d(i,"getCollection",(function(){return U})),r.d(i,"getCollectionError",(function(){return Y})),r.d(i,"getCollectionHeader",(function(){return z})),r.d(i,"getCollectionLastModified",(function(){return W}));var u={};r.r(u),r.d(u,"receiveCollection",(function(){return re})),r.d(u,"__experimentalPersistItemToCollection",(function(){return ne})),r.d(u,"receiveCollectionError",(function(){return oe})),r.d(u,"receiveLastModified",(function(){return ce}));var a={};r.r(a),r.d(a,"getCollection",(function(){return de})),r.d(a,"getCollectionHeader",(function(){return ve}));var s={};r.r(s),r.d(s,"getValueForQueryKey",(function(){return je})),r.d(s,"getValueForQueryContext",(function(){return we}));var f={};r.r(f),r.d(f,"setQueryValue",(function(){return Se})),r.d(f,"setValueForQueryContext",(function(){return Re}));var l=r(3),p=r(0),d="wc/store/schema",v=r(11),h=r.n(v),O=r(5),b=r.n(O),g=r(7),y=Object(l.createRegistrySelector)((function(e){return function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=e(d).hasFinishedResolution("getRoutes",[r]),i="";if((t=t.routes)[r]?t[r][n]||(i=Object(g.sprintf)("There is no route for the given resource name (%s) in the store",n)):i=Object(g.sprintf)("There is no route for the given namespace (%s) in the store",r),""!==i){if(c)throw new Error(i);return""}var u=j(t[r][n],o);if(""===u&&c)throw new Error(Object(g.sprintf)("While there is a route for the given namespace (%s) and resource name (%s), there is no route utilizing the number of ids you included in the select arguments. The available routes are: (%s)",r,n,JSON.stringify(t[r][n])));return u}})),m=Object(l.createRegistrySelector)((function(e){return function(t,r){var n=e(d).hasFinishedResolution("getRoutes",[r]),o=t.routes[r];if(!o){if(n)throw new Error(Object(g.sprintf)("There is no route for the given namespace (%s) in the store",r));return[]}var c=[];for(var i in o)c=[].concat(b()(c),b()(Object.keys(o[i])));return c}})),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=(e=Object.entries(e)).find((function(e){var r=h()(e,2)[1];return t.length===r.length})),n=r||[],o=h()(n,2),c=o[0],i=o[1];return c?0===t.length?c:w(c,i,t):""},w=function(e,t,r){return t.forEach((function(t,n){e=e.replace("{".concat(t,"}"),r[n])})),e},E="RECEIVE_MODEL_ROUTES";function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wc/blocks";return{type:E,routes:e,namespace:t}}var S=r(2),R=r.n(S),_=R.a.mark(T),P=R.a.mark(C);function T(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.select)(d,"getRoutes",e);case 2:case"end":return t.stop()}}),_)}function C(e){var t,r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.apiFetch)({path:e});case 2:return t=n.sent,r=t&&t.routes?Object.keys(t.routes):[],n.next=6,x(r,e);case 6:case"end":return n.stop()}}),P)}var A=function(e,t){return(t=t.replace("".concat(e,"/"),"")).replace(/\/\(\?P\<[a-z_]*\>\[\\*[a-z]\]\+\)/g,"")},k=function(e){var t=e.match(/\<[a-z_]*\>/g);return Array.isArray(t)&&0!==t.length?t.map((function(e){return e.replace(/<|>/g,"")})):[]},N=function(e,t){return Array.isArray(t)&&0!==t.length?(t.forEach((function(t){var r="\\(\\?P<".concat(t,">.*?\\)");e=e.replace(new RegExp(r),"{".concat(t,"}"))})),e):e},I=r(6);function D(e,t){return Object(I.has)(e,t)}function L(e,t,r){return Object(I.setWith)(Object(I.clone)(e),t,r,I.clone)}var M=Object(l.combineReducers)({routes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.routes,o=t.namespace;return r===E&&n.forEach((function(t){var r=A(o,t);if(r&&r!==o){var n=k(t),c=N(t,n);D(e,[o,r,c])||(e=L(e,[o,r,c],n))}})),e}});Object(l.registerStore)(d,{reducer:M,actions:o,controls:p.controls,selectors:n,resolvers:c});var F=r(1),q=r.n(F),H="wc/store/collections",V=[],Q=r(9),J=function(e){var t=e.state,r=e.namespace,n=e.resourceName,o=e.query,c=e.ids,i=e.type,u=void 0===i?"items":i,a=e.fallback,s=void 0===a?V:a;return D(t,[r,n,c=JSON.stringify(c),o=null!==o?Object(Q.addQueryArgs)("",o):"",u])?t[r][n][c][o][u]:s},K=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:V;return J({state:e,namespace:t,resourceName:r,query:n,ids:o,type:"headers",fallback:void 0})},U=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:V;return J({state:e,namespace:t,resourceName:r,query:n,ids:o})},Y=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:V;return J({state:e,namespace:t,resourceName:r,query:n,ids:o,type:"error",fallback:null})},z=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:V,i=K(e,r,n,o,c);return i&&i.get?i.has(t)?i.get(t):void 0:null},W=function(e){return e.lastModified||0},B="RECEIVE_COLLECTION",X="RESET_COLLECTION",G="ERROR",Z="RECEIVE_LAST_MODIFIED",$="INVALIDATE_RESOLUTION_FOR_STORE",ee=R.a.mark(ne),te=window.Headers||null;function re(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{items:[],headers:te},c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return{type:c?X:B,namespace:e,resourceName:t,queryString:r,ids:n,response:o}}function ne(e,t,r){var n,o,c,i,u=arguments;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=u.length>3&&void 0!==u[3]?u[3]:{},o=b()(r),a.next=4,Object(p.select)(d,"getRoute",e,t);case 4:if(c=a.sent){a.next=7;break}return a.abrupt("return");case 7:return a.next=9,Object(p.apiFetch)({path:c,method:"POST",data:n,cache:"no-store"});case 9:if(!(i=a.sent)){a.next=14;break}return o.push(i),a.next=14,re(e,t,"",[],{items:o,headers:te},!0);case 14:case"end":return a.stop()}}),ee)}function oe(e,t,r,n,o){return{type:"ERROR",namespace:e,resourceName:t,queryString:r,ids:n,response:{items:[],headers:te,error:o}}}function ce(e){return{type:Z,timestamp:e}}te=te?new te:{get:function(){},has:function(){}};var ie=r(14),ue=r.n(ie),ae={API_FETCH_WITH_HEADERS:function(e){var t=e.path;return new Promise((function(e,r){ue()({path:t,parse:!1}).then((function(t){t.json().then((function(r){e({items:r,headers:t.headers})}))})).catch((function(e){r(e)}))}))}},se=R.a.mark(pe),fe=R.a.mark(de),le=R.a.mark(ve);function pe(e){var t;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(p.select)(H,"getCollectionLastModified");case 2:if(t=r.sent){r.next=8;break}return r.next=6,Object(p.dispatch)(H,"receiveLastModified",e);case 6:r.next=13;break;case 8:if(!(e>t)){r.next=13;break}return r.next=11,Object(p.dispatch)(H,"invalidateResolutionForStore");case 11:return r.next=13,Object(p.dispatch)(H,"receiveLastModified",e);case 13:case"end":return r.stop()}}),se)}function de(e,t,r,n){var o,c,i,u,a,s;return R.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Object(p.select)(d,"getRoute",e,t,n);case 2:if(o=f.sent,c=Object(Q.addQueryArgs)("",r),o){f.next=8;break}return f.next=7,re(e,t,c,n);case 7:return f.abrupt("return");case 8:return f.prev=8,f.next=11,{type:"API_FETCH_WITH_HEADERS",path:o+c};case 11:if(i=f.sent,u=i.items,a=void 0===u?void 0:u,!((s=i.headers)&&s.get&&s.has("last-modified"))){f.next=18;break}return f.next=18,pe(parseInt(s.get("last-modified"),10));case 18:return f.next=20,re(e,t,c,n,{items:a,headers:s});case 20:f.next=26;break;case 22:return f.prev=22,f.t0=f.catch(8),f.next=26,oe(e,t,c,n,f.t0);case 26:case"end":return f.stop()}}),fe,null,[[8,22]])}function ve(e,t,r,n,o){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t,r,n,o].filter((function(e){return void 0!==e})),e.next=3,p.select.apply(void 0,[H,"getCollection"].concat(b()(c)));case 3:case"end":return e.stop()}}),le)}function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){q()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===Z)return t.timestamp===e.lastModified?e:Oe({},e,{lastModified:t.timestamp});if(t.type===$)return{};var r=t.type,n=t.namespace,o=t.resourceName,c=t.queryString,i=t.response,u=t.ids?JSON.stringify(t.ids):"[]";switch(r){case B:if(D(e,[n,o,u,c]))return e;e=L(e,[n,o,u,c],i);break;case X:case G:e=L(e,[n,o,u,c],i)}return e};function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object(l.registerStore)(H,{reducer:be,actions:u,controls:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){q()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},p.controls,{},ae),selectors:i,resolvers:a});var ye=H,me=function(e,t){return void 0===e[t]?null:e[t]},je=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=me(e,t);return null===o?n:void 0!==(o=JSON.parse(o))[r]?o[r]:n},we=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=me(e,t);return null===n?r:JSON.parse(n)},Ee="SET_QUERY_KEY_VALUE",xe="SET_QUERY_CONTEXT_VALUE",Se=function(e,t,r){return{type:Ee,context:e,queryKey:t,value:r}},Re=function(e,t){return{type:xe,context:e,value:t}};function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){q()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=r.type,o=r.context,c=r.queryKey,i=r.value,u=me(t,o);switch(n){case Ee:var a=null!==u?JSON.parse(u):{};a[c]=i,u!==(e=JSON.stringify(a))&&(t=Pe({},t,q()({},o,e)));break;case xe:u!==(e=JSON.stringify(i))&&(t=Pe({},t,q()({},o,e)))}return t};Object(l.registerStore)("wc/store/query-state",{reducer:Te,actions:f,selectors:s});r.d(t,"SCHEMA_STORE_KEY",(function(){return"wc/store/schema"})),r.d(t,"COLLECTIONS_STORE_KEY",(function(){return ye})),r.d(t,"QUERY_STATE_STORE_KEY",(function(){return"wc/store/query-state"})),r.d(t,"API_BLOCK_NAMESPACE",(function(){return"wc/blocks"}))}]);
this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={10:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([586,2,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},100:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(4),c=Object(n.createElement)("img",{src:o.p+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},11:function(e,t){!function(){e.exports=this.React}()},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},13:function(e,t){!function(){e.exports=this.moment}()},14:function(e,t){!function(){e.exports=this.wp.editor}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},24:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(12),o=r.n(n),c=r(22),i=r.n(c),u=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},26:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},27:function(e,t,r){"use strict";r.d(t,"g",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"f",(function(){return O})),r.d(t,"a",(function(){return m})),r.d(t,"h",(function(){return y}));var n=r(6),o=r.n(n),c=r(9),i=r(7),u=r.n(i),a=r(5),s=r(4);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,l=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.g?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(s.d.products,d({},a,{},u))];return s.g&&r.length&&l.push(Object(c.addQueryArgs)(s.d.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return d({},e,{parent:0})}))})).catch((function(e){throw e}))},b=function(e){return u()({path:"".concat(s.d.products,"/").concat(e)})},f=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{per_page:s.h?100:-1,orderby:s.h?"count":"name",order:s.h?"desc":"asc",search:n})];return s.h&&r.length&&o.push(Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},g=function(e){return u()({path:"".concat(s.d.categories,"/").concat(e)})},h=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/categories"),d({per_page:-1},e))})},O=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/").concat(e,"/variations"),{per_page:-1})})},m=function(){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes"),{per_page:-1})})},y=function(e){return u()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},28:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(26));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(e,t){!function(){e.exports=this.wp.components}()},321:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(12),i=r.n(c),u=r(22),a=r.n(u),s=r(17),l=r.n(s),d=r(18),p=r.n(d),b=r(16),f=r.n(b),g=r(19),h=r.n(g),O=r(20),m=r.n(O),y=r(10),j=r.n(y),w=r(0),v=r(5),_=r(21),k=(r(2),r(4)),P=r(27),E=r(24);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=Object(_.createHigherOrderComponent)((function(e){var t=function(t){h()(u,t);var r,n,c=(r=u,function(){var e,t=j()(r);if(S()){var n=j()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m()(this,e)});function u(){var e;return l()(this,u),(e=c.apply(this,arguments)).state={list:[],loading:!0},e.setError=e.setError.bind(f()(e)),e.debouncedOnSearch=Object(v.debounce)(e.onSearch.bind(f()(e)),400),e}return p()(u,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(P.g)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,r=this.props.selected;Object(P.g)({selected:r,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:(n=a()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)(t);case 2:r=e.sent,this.setState({list:[],loading:!1,error:r});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){var t=this,r=this.state,n=r.error,c=r.list,i=r.loading;return Object(w.createElement)(e,o()({},this.props,{error:n,products:c,isLoading:i,onSearch:k.g?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),u}(w.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=C},337:function(e,t,r){},34:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t,r){"use strict";r.d(t,"n",(function(){return g})),r.d(t,"o",(function(){return h})),r.d(t,"i",(function(){return O})),r.d(t,"k",(function(){return m})),r.d(t,"a",(function(){return y})),r.d(t,"j",(function(){return j})),r.d(t,"m",(function(){return w})),r.d(t,"c",(function(){return v})),r.d(t,"l",(function(){return _})),r.d(t,"b",(function(){return k})),r.d(t,"g",(function(){return P})),r.d(t,"h",(function(){return E})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return C})),r.d(t,"p",(function(){return x})),r.d(t,"d",(function(){return M}));var n=r(6),o=r.n(n),c=r(7),i=r.n(c),u=r(37);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},d=s({},l,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(u)()(wcSettings))?wcSettings:{});function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=d.hasOwnProperty(e)?d[e]:t;return r(n,t)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}d.currency=s({},l.currency,{},d.currency),d.locale=s({},l.locale,{},d.locale);var f=p("storeApiNonce");i.a.use((function(e,t){if(function(e){var t=e.url||e.path;return!(!t||!e.method||"GET"===e.method)&&null!==/wc\/store\//.exec(t)}(e)){var r=e.headers||{};e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{"X-WC-Store-API-Nonce":f})}return t(e,t)})),i.a.setNonce=function(e){var t=null==e?void 0:e.get("X-WC-Store-API-Nonce");t&&(f=t)};p("currentUserIsAdmin",!1);var g=p("reviewRatingsEnabled",!0),h=p("showAvatars",!0),O=p("max_columns",6),m=p("min_columns",1),y=p("default_columns",3),j=p("max_rows",6),w=p("min_rows",1),v=p("default_rows",3),_=p("min_height",500),k=p("default_height",500),P=(p("placeholderImgSrc",""),p("thumbnail_size",300),p("isLargeCatalog")),E=p("limitTags"),S=(p("hasProducts",!0),p("hasTags",!0)),C=p("homeUrl",""),x=(p("couponsEnabled",!0),p("shippingEnabled",!0),p("taxesEnabled",!0),p("displayShopPricesIncludingTax",!1),p("displayCartPricesIncludingTax",!1),p("productCount",0),p("attributes",[]),p("isShippingCalculatorEnabled",!0),p("isShippingCostHidden",!1),p("wcBlocksAssetUrl","")),A=(p("shippingCountries",{}),p("allowedCountries",{}),p("shippingStates",{}),p("allowedStates",{}),p("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),D=p("storePages",{shop:A,cart:A,checkout:A,privacy:A,terms:A}),M=(D.shop.permalink,D.checkout.id,D.checkout.permalink,D.privacy.permalink,D.privacy.title,D.terms.permalink,D.terms.title,D.cart.id,D.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories"),metaProducts:"".concat("/wc/blocks","/product-meta"),metas:"".concat("/wc/blocks","/metas")})},44:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(3));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(s({},r,{button:!n}))}}))}},48:function(e,t){!function(){e.exports=this.ReactDOM}()},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t){!function(){e.exports=this.wp.viewport}()},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),o=r(8),c=r.n(o),i=r(68),u=r.n(i),a=r(4);function s(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,d=r.products,p=r.columns||a.a,b=r.rows||a.c,f=new Map;switch(f.set("limit",b*p),f.set("columns",p),c&&c.length&&(f.set("category",c.join(",")),i&&"all"===i&&f.set("cat_operator","AND")),n&&n.length&&(f.set("terms",n.map((function(e){return e.id})).join(",")),f.set("attribute",n[0].attr_slug),o&&"all"===o&&f.set("terms_operator","AND")),l&&("price_desc"===l?(f.set("orderby","price"),f.set("order","DESC")):"price_asc"===l?(f.set("orderby","price"),f.set("order","ASC")):"date"===l?(f.set("orderby","date"),f.set("order","DESC")):f.set("orderby",l)),t){case"woocommerce/product-best-sellers":f.set("best_selling","1");break;case"woocommerce/product-top-rated":f.set("orderby","rating");break;case"woocommerce/product-on-sale":f.set("on_sale","1");break;case"woocommerce/product-new":f.set("orderby","date"),f.set("order","DESC");break;case"woocommerce/handpicked-products":if(!d.length)return"";f.set("ids",d.join(",")),f.set("limit",d.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g,h="[products",O=s(f);try{for(O.s();!(g=O.n()).done;){var m=u()(g.value,2);h+=" "+m[0]+'="'+m[1]+'"'}}catch(e){O.e(e)}finally{O.f()}return h+="]"}(t,e))}}},57:function(e,t){!function(){e.exports=this.wp.hooks}()},586:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r(23),i=r(4),u=r(64),a=r(610),s=Object(n.createElement)(a.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"})),l=(r(337),r(17)),d=r.n(l),p=r(18),b=r.n(p),f=r(19),g=r.n(f),h=r(20),O=r.n(h),m=r(10),y=r.n(m),j=r(14),w=r(3),v=(r(2),r(44)),_=r(29),k=r(321),P=r(28),E=function(e){var t=e.error,r=e.onChange,c=e.onSearch,i=e.selected,u=e.products,a=e.isLoading,s={clear:Object(o.__)("Clear all products","woo-gutenberg-products-block"),list:Object(o.__)("Products","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(o.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(e){return Object(o.sprintf)(Object(o._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e)},updated:Object(o.__)("Product search results updated.","woo-gutenberg-products-block")};return t?Object(n.createElement)(P.a,{error:t}):Object(n.createElement)(_.a,{className:"woocommerce-products",list:u,isLoading:a,selected:u.filter((function(e){var t=e.id;return i.includes(t)})),onSearch:c,onChange:r,messages:s})};E.defaultProps={selected:[],products:[],isLoading:!0};var S=Object(k.a)(E),C=r(67),x=r(100);function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=function(e){g()(c,e);var t,r=(t=c,function(){var e,r=y()(t);if(A()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return O()(this,e)});function c(){return d()(this,c),r.apply(this,arguments)}return b()(c,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,c=t.columns,u=t.contentVisibility,a=t.orderby,s=t.alignButtons;return Object(n.createElement)(j.InspectorControls,{key:"inspector"},Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(w.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:c,onChange:function(e){return r({columns:e})},min:i.k,max:i.i}),Object(n.createElement)(w.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:s?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return r({alignButtons:!s})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.a,{settings:u,onChange:function(e){return r({contentVisibility:e})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(C.a,{setAttributes:r,value:a})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(S,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({products:t})}})))}},{key:"renderEditMode",value:function(){var e=this.props,t=e.attributes,r=e.debouncedSpeak,c=e.setAttributes;return Object(n.createElement)(w.Placeholder,{icon:Object(n.createElement)(u.a,{srcElement:s}),label:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(n.createElement)(S,{selected:t.products,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));c({products:t})}}),Object(n.createElement)(w.Button,{isDefault:!0,onClick:function(){c({editMode:!1}),r(Object(o.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name,c=e.setAttributes,i=t.editMode;return t.isPreview?x.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(j.BlockControls,null,Object(n.createElement)(w.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(w.Disabled,null,Object(n.createElement)(j.ServerSideRender,{block:r,attributes:t})))}}]),c}(n.Component),M=Object(w.withSpokenMessages)(D),T=r(52);Object(c.registerBlockType)("woocommerce/handpicked-products",{title:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(u.a,{srcElement:s}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{align:{type:"string"},columns:{type:"number",default:i.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{align:{type:"string"},columns:{type:"number",default:i.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},save:Object(T.a)("woocommerce/handpicked-products")}],edit:function(e){return Object(n.createElement)(M,e)},save:function(){return null}})},59:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},60:function(e,t){!function(){e.exports=this.wp.date}()},64:function(e,t,r){"use strict";var n=r(6),o=r.n(n),c=r(35),i=r.n(c),u=r(11);r(2);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(u.isValidElement)(t)&&Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},66:function(e,t){!function(){e.exports=this.wp.dom}()},67:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},71:function(e,t){},73:function(e,t){},74:function(e,t){},75:function(e,t){},76:function(e,t){},9:function(e,t){!function(){e.exports=this.wp.url}()}});
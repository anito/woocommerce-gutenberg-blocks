this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={17:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([587,2,0,1]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.url}()},11:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),metaProducts:"".concat("/wc/blocks","/product-meta"),metas:"".concat("/wc/blocks","/metas"),categories:"".concat("/wc/blocks","/products/categories")}},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},13:function(e,t){!function(){e.exports=this.React}()},20:function(e,t){!function(){e.exports=this.moment}()},22:function(e,t){!function(){e.exports=this.wp.editor}()},23:function(e,t){!function(){e.exports=this.wp.compose}()},26:function(e,t){!function(){e.exports=this.wp.blocks}()},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(12),o=r.n(n),c=r(24),i=r.n(c),u=function(){var e=i()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},28:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},29:function(e,t,r){"use strict";r.d(t,"g",(function(){return d})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return O})),r.d(t,"b",(function(){return h})),r.d(t,"f",(function(){return j})),r.d(t,"a",(function(){return m})),r.d(t,"h",(function(){return w}));var n=r(8),o=r.n(n),c=r(10),i=r(9),u=r.n(i),a=r(5),s=r(7),l=r(11);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,b=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.f?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},b=[Object(c.addQueryArgs)(l.a.products,p({},a,{},u))];return s.f&&r.length&&b.push(Object(c.addQueryArgs)(l.a.products,{catalog_visibility:"any",status:"publish",include:r})),b}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(b.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return p({},e,{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return u()({path:"".concat(l.a.products,"/").concat(e)})},f=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("".concat(l.a.products,"/tags"),{per_page:s.g?100:-1,orderby:s.g?"count":"name",order:s.g?"desc":"asc",search:n})];return s.g&&r.length&&o.push(Object(c.addQueryArgs)("".concat(l.a.products,"/tags"),{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},O=function(e){return u()({path:"".concat(l.a.categories,"/").concat(e)})},h=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/categories"),p({per_page:-1},e))})},j=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/").concat(e,"/variations"),{per_page:-1})})},m=function(){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/attributes"),{per_page:-1})})},w=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.a.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(28));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},36:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},41:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(7),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-meta","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:n.a},rows:{type:"number",default:n.c},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},42:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(3));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(s({},r,{button:!n}))}}))}},44:function(e,t,r){"use strict";var n=r(14),o=r.n(n),c=r(0),i=r(1),u=r(5),a=(r(2),r(31)),s=r(3),l=r(12),b=r.n(l),p=r(24),d=r.n(p),g=r(15),f=r.n(g),O=r(16),h=r.n(O),j=r(17),m=r.n(j),w=r(18),y=r.n(w),v=r(21),_=r.n(v),k=r(19),P=r.n(k),E=r(23),S=r(29),C=r(27),x=Object(E.createHigherOrderComponent)((function(e){return function(t){function r(){var e;return f()(this,r),(e=m()(this,y()(r).apply(this,arguments))).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(_()(e)),e}return P()(r,t),h()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(S.b)({show_review_count:this.props.showReviewCount||!1}).then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=d()(b.a.mark((function t(r){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(r);case 2:n=t.sent,e.setState({categories:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),r}(c.Component)}),"withCategories"),A=r(30),D=(r(99),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,b=e.onOperatorChange,p=e.operator,d=e.selected,g=e.isSingle,f=e.showReviewCount,O={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(A.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return Object(u.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",t.review_count,"woo-gutenberg-products-block"),l,t.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),l,t.count),p=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",t.count,"woo-gutenberg-products-block"),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:p,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:g}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:p,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});D.defaultProps={operator:"any",isSingle:!1};t.a=x(D)},46:function(e,t){!function(){e.exports=this.ReactDOM}()},48:function(e,t){!function(){e.exports=this.wp.viewport}()},49:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(3)),u=r(7);t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,s=e.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,u.j,u.h);a({columns:Object(c.isNaN)(t)?"":t})},min:u.j,max:u.h}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(c.clamp)(e,u.l,u.i);a({rows:Object(c.isNaN)(t)?"":t})},min:u.l,max:u.i}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t,r){"use strict";var n=r(0),o=r(6),c=r.n(o),i=r(65),u=r.n(i),a=r(7);r.d(t,"a",(function(){return s}));var s=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,s=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:s},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,s=r.orderby,l=r.products,b=r.columns||a.a,p=r.rows||a.c,d=new Map;switch(d.set("limit",p*b),d.set("columns",b),c&&c.length&&(d.set("category",c.join(",")),i&&"all"===i&&d.set("cat_operator","AND")),n&&n.length&&(d.set("terms",n.map((function(e){return e.id})).join(",")),d.set("attribute",n[0].attr_slug),o&&"all"===o&&d.set("terms_operator","AND")),s&&("price_desc"===s?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===s?(d.set("orderby","price"),d.set("order","ASC")):"date"===s?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",s)),t){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";d.set("ids",l.join(",")),d.set("limit",l.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g="[products",f=!0,O=!1,h=void 0;try{for(var j,m=d[Symbol.iterator]();!(f=(j=m.next()).done);f=!0){var w=u()(j.value,2);g+=" "+w[0]+'="'+w[1]+'"'}}catch(e){O=!0,h=e}finally{try{f||null==m.return||m.return()}finally{if(O)throw h}}return g+="]"}(t,e))}}},54:function(e,t){!function(){e.exports=this.wp.hooks}()},56:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},561:function(e,t,r){},57:function(e,t){!function(){e.exports=this.wp.date}()},587:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r.n(n),c=r(0),i=r(1),u=r(26),a=r(5),s=r(61),l=r(3),b=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),Object(c.createElement)("circle",{cx:"6.5",cy:"6.5",r:"1.5"}),Object(c.createElement)("path",{d:"M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"})),p=r(15),d=r.n(p),g=r(16),f=r.n(g),O=r(17),h=r.n(O),j=r(18),m=r.n(j),w=r(19),y=r.n(w),v=r(22),_=(r(2),r(42)),k=r(49),P=r(44),E=r(64),S=r(98),C=function(){return Object(c.createElement)(l.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:b}),label:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),className:"wc-block-product-on-sale"},Object(i.__)("This block shows on-sale products. There are currently no discounted products in your store.","woo-gutenberg-products-block"))},x=function(e){function t(){return d()(this,t),h()(this,m()(t).apply(this,arguments))}return y()(t,e),f()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,o=t.catOperator,u=t.columns,a=t.contentVisibility,s=t.rows,b=t.orderby,p=t.alignButtons;return Object(c.createElement)(v.InspectorControls,{key:"inspector"},Object(c.createElement)(l.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(k.a,{columns:u,rows:s,alignButtons:p,setAttributes:r})),Object(c.createElement)(l.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(_.a,{settings:a,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(l.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{setAttributes:r,value:b})),Object(c.createElement)(l.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(P.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:o,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?S.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(l.Disabled,null,Object(c.createElement)(v.ServerSideRender,{block:r,attributes:t,EmptyResponsePlaceholder:C})))}}]),t}(c.Component),A=(r(561),r(50)),D=r(41);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(u.registerBlockType)("woocommerce/product-on-sale",{title:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:b}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products currently on sale.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:B({},D.a,{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(D.b,"woocommerce/product-on-sale"),transform:function(e){return Object(u.createBlock)("woocommerce/product-on-sale",e)}}]},deprecated:[{attributes:B({},D.a,{orderby:{type:"string",default:"date"}}),save:Object(A.a)("woocommerce/product-on-sale")}],edit:function(e){return Object(c.createElement)(x,e)},save:function(){return null}})},61:function(e,t,r){"use strict";var n=r(8),o=r.n(n),c=r(37),i=r.n(c),u=r(0);r(2);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(u.isValidElement)(t)&&Object(u.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c))}},63:function(e,t){!function(){e.exports=this.wp.dom}()},64:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},68:function(e,t){},7:function(e,t,r){"use strict";r.d(t,"m",(function(){return o})),r.d(t,"n",(function(){return c})),r.d(t,"h",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"a",(function(){return a})),r.d(t,"i",(function(){return s})),r.d(t,"l",(function(){return l})),r.d(t,"c",(function(){return b})),r.d(t,"k",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"f",(function(){return g})),r.d(t,"g",(function(){return f})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return h})),r.d(t,"o",(function(){return j}));var n=r(4),o=Object(n.getSetting)("reviewRatingsEnabled",!0),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),u=Object(n.getSetting)("min_columns",1),a=Object(n.getSetting)("default_columns",3),s=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),b=Object(n.getSetting)("default_rows",3),p=Object(n.getSetting)("min_height",500),d=Object(n.getSetting)("default_height",500),g=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),f=Object(n.getSetting)("limitTags"),O=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),h=Object(n.getSetting)("homeUrl",""),j=(Object(n.getSetting)("shopUrl",""),Object(n.getSetting)("checkoutUrl",""),Object(n.getSetting)("couponsEnabled",!0),Object(n.getSetting)("displayPricesIncludingTaxes",!1),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),Object(n.getSetting)("wcBlocksAssetUrl",""));Object(n.getSetting)("shippingCountries",{}),Object(n.getSetting)("allowedCountries",{}),Object(n.getSetting)("shippingCounties",{}),Object(n.getSetting)("allowedCounties",{})},70:function(e,t){},71:function(e,t){},72:function(e,t){},73:function(e,t){},9:function(e,t){!function(){e.exports=this.wp.apiFetch}()},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(7),c=Object(n.createElement)("img",{src:o.o+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress","cacheIdentifier":"0921bf65-vue-loader-template"}!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"content\"},[_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('p',[_vm._v(\"浏览器将CORS请求分成两类：简单请求和非简单请求。\")]),_vm._v(\" \"),_c('p',[_vm._v(\"满足下列条件，属于简单请求：\")]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_c('p',[_vm._v(\"不同时满足上面两个条件属于非简单请求。\")]),_vm._v(\" \"),_vm._m(3),_vm._v(\" \"),_c('p',[_vm._v(\"服务器需要将响应头加上下面几项\")]),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_vm._m(7),_vm._v(\" \"),_vm._m(8),_vm._v(\" \"),_vm._m(9),_vm._v(\" \"),_vm._m(10),_vm._v(\" \"),_vm._m(11),_vm._v(\" \"),_vm._m(12),_vm._v(\" \"),_c('p',[_vm._v(\"该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法\")]),_vm._v(\" \"),_vm._m(13),_vm._v(\" \"),_c('p',[_vm._v(\"该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段。\")]),_vm._v(\" \"),_vm._m(14),_vm._v(\" \"),_vm._m(15),_vm._v(\" \"),_vm._m(16),_vm._v(\" \"),_c('p',[_vm._v(\"支持的HTTP请求方法多，但JSONP支持老式浏览器。\")]),_vm._v(\" \"),_c('p',[_vm._v(\"参考文章：\"),_c('a',{attrs:{\"href\":\"http://www.ruanyifeng.com/blog/2016/04/cors.html\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"跨域资源共享 CORS 详解 阮一峰\"),_c('OutboundLink')],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{\"id\":\"跨域资源共享-cors\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#跨域资源共享-cors\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 跨域资源共享 CORS\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('blockquote',[_c('p',[_vm._v(\"允许浏览器向跨源服务器发出 XHR请求。浏览器发现请求跨源，就自动添加一些附加的头信息，有时还会多出一次附加的请求，但是对用户透明。实现CORS的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('p',[_vm._v(\"请求方法是以下三种方法之一：HEAD，GET，POST\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"HTTP的头信息不超出以下几种字段：Accept，Accept-Language，Content-Language，Last-Event-ID\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Content-Type：只限于三个值\"),_c('code',[_vm._v(\"application/x-www-form-urlencoded\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"multipart/form-data\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"text/plain\")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"简单请求\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#简单请求\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 简单请求\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v(\"Access-Control-Allow-Origin: http://xxx.com\\n\"),_c('ul',[_c('li',[_vm._v(\"要么是请求时的origin字段的值，要么是*表示任意域名。\")])])]),_vm._v(\" \"),_c('li',[_vm._v(\"Access-Control-Allow-Credentials: true\\n\"),_c('ul',[_c('li',[_vm._v(\"是否允许发送Cookie，客户端也要设置\"),_c('code',[_vm._v(\"withCredentials\")]),_vm._v(\" 属性。且设置此项时 \"),_c('code',[_vm._v(\"Access-Control-Allow-Origin\")]),_vm._v(\"不能为*\")])])]),_vm._v(\" \"),_c('li',[_vm._v(\"Access-Control-Expose-Headers: FooBar\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"XMLHttpRequest\")]),_vm._v(\"对象的\"),_c('code',[_vm._v(\"getResponseHeader()\")]),_vm._v(\"方法只能拿到6个基本字段：\"),_c('code',[_vm._v(\"Cache-Control\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"Content-Language\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"Content-Type\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"Expires\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"Last-Modified\")]),_vm._v(\"、\"),_c('code',[_vm._v(\"Pragma\")]),_vm._v(\"。如果想拿到其他字段，就必须在\"),_c('code',[_vm._v(\"Access-Control-Expose-Headers\")]),_vm._v(\"里面指定。\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Content-Type: text/html; charset=utf-8\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"非简单请求\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#非简单请求\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 非简单请求\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"非简单请求是那种对服务器有特殊要求的请求，比如请求方法是\"),_c('code',[_vm._v(\"PUT\")]),_vm._v(\"或\"),_c('code',[_vm._v(\"DELETE\")]),_vm._v(\"，或者\"),_c('code',[_vm._v(\"Content-Type\")]),_vm._v(\"字段的类型是\"),_c('code',[_vm._v(\"application/json\")]),_vm._v(\"。\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为\\\"预检\\\"请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的\"),_c('code',[_vm._v(\"XMLHttpRequest\")]),_vm._v(\"请求，否则就报错。\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"请求\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#请求\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 请求\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"\\\"预检\\\"请求用的请求方法是\"),_c('code',[_vm._v(\"OPTIONS\")]),_vm._v(\"，表示这个请求是用来询问的。\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"头信息里面，关键字段是\"),_c('code',[_vm._v(\"Origin\")]),_vm._v(\"，表示请求来自哪个源。\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"除了\"),_c('code',[_vm._v(\"Origin\")]),_vm._v(\"字段，\\\"预检\\\"请求的头信息包括两个特殊字段。\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v(\"（1）Access-Control-Request-Method\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v(\"（2）Access-Control-Request-Headers\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"响应\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#响应\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 响应\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('p',[_vm._v(\"Access-Control-Allow-Origin 同简单请求，每次回应必定包含\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"响应头的其他字段\")])]),_vm._v(\" \"),_c('li',[_c('div',{staticClass:\"language-http extra-class\"},[_c('pre',{pre:true,attrs:{\"class\":\"language-http\"}},[_c('code',[_c('span',{pre:true,attrs:{\"class\":\"token header-name keyword\"}},[_vm._v(\"Access-Control-Allow-Methods:\")]),_vm._v(\" GET, POST, PUT\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token header-name keyword\"}},[_vm._v(\"Access-Control-Allow-Headers:\")]),_vm._v(\" X-Custom-Header\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token header-name keyword\"}},[_vm._v(\"Access-Control-Allow-Credentials:\")]),_vm._v(\" true     \\t\\t同简单请求\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token header-name keyword\"}},[_vm._v(\"Access-Control-Max-Age:\")]),_vm._v(\" 1728000      \\t\\t\\t\\t\\t预检请求的有效期\\n\")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v(\"与JSONP比较\")])])}]\n\n\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E8%B7%A8%E5%9F%9F%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB_CORS.md?/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress%22,%22cacheIdentifier%22:%220921bf65-vue-loader-template%22%7D!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2");

/***/ }),

/***/ "./docs/js/一些概念/跨域资源共享 CORS.md":
/*!*************************************!*\
  !*** ./docs/js/一些概念/跨域资源共享 CORS.md ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./跨域资源共享 CORS.md?vue&type=template&id=29b0c340& */ \"./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340&\");\n/* harmony import */ var _usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E8%B7%A8%E5%9F%9F%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB_CORS.md?");

/***/ }),

/***/ "./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340&":
/*!********************************************************************!*\
  !*** ./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./跨域资源共享 CORS.md?vue&type=template&id=29b0c340& */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\\\",\\\"cacheIdentifier\\\":\\\"0921bf65-vue-loader-template\\\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/一些概念/跨域资源共享 CORS.md?vue&type=template&id=29b0c340&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_CORS_md_vue_type_template_id_29b0c340___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E8%B7%A8%E5%9F%9F%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB_CORS.md?");

/***/ })

}]);
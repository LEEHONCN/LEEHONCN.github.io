(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress","cacheIdentifier":"0921bf65-vue-loader-template"}!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"content\"},[_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_c('p',[_vm._v(\"将代码植入到其它用户使用的页面中\")]),_vm._v(\" \"),_c('p',[_vm._v(\"措施：\")]),_vm._v(\" \"),_vm._m(3),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_c('p',[_vm._v(\"XSRF 站向某站后端发出请求，某站的管理员进入XSRF站时，就会执行请求。\")]),_vm._v(\" \"),_c('p',[_vm._v(\"措施：\")]),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{\"href\":\"https://eplover.github.io/pages/2017/04/06/cso.html\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"Web 安全之 XSS、CSRF 和 JWT\"),_c('OutboundLink')],1)])]),_vm._v(\" \"),_c('li',[_c('p',[_c('a',{attrs:{\"href\":\"https://juejin.im/post/5d04ab0b518825166f36ba62\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"xss和csrf攻击的那些事儿\"),_c('OutboundLink')],1)])])])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{\"id\":\"前端安全\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#前端安全\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" 前端安全\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"xss（跨站脚本攻击）\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#xss（跨站脚本攻击）\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" XSS（跨站脚本攻击）\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v(\"反射型：通过url参数给网页注入恶意代码\")]),_vm._v(\" \"),_c('li',[_vm._v(\"存储型：将攻击脚本写入数据库，每次从数据库中调用，用户便会受到攻击。\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('p',[_vm._v(\"在响应头里设置(\"),_c('code',[_vm._v(\"X-XXS-Protection,1\")]),_vm._v(\")，用浏览器自带拦截\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"转义字符内容\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"转义<\"),_c('code',[_vm._v(\"&lt;\")]),_vm._v(\"和>\"),_c('code',[_vm._v(\"&gt;\")]),_vm._v(\"避免节点内容被篡改\")]),_vm._v(\" \"),_c('li',[_vm._v(\"转义 双引号\"),_c('code',[_vm._v(\"&quto;\")]),_vm._v(\"，单引号\"),_c('code',[_vm._v(\"&#39;\")]),_vm._v(\"，空格 \"),_c('code',[_vm._v(\"&#32\")]),_vm._v(\"(如果代码都有写引号，则空格是不需要转义的)\")]),_vm._v(\" \"),_c('li',[_vm._v(\"转义斜杆\"),_c('code',[_vm._v(\"\\\\\\\\\")]),_vm._v(\"，避免js内容被注释\")])])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"富文本内容过滤\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"xsrf（跨站请求伪造）\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#xsrf（跨站请求伪造）\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" XSRF（跨站请求伪造）\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('p',[_vm._v(\"禁止第三方网站带cookie\"),_c('code',[_vm._v(\"res.setHeader('Set-Cookie','sameSite=strict')\")])])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"每次用户发起请求，都使用验证码，不过体验不好\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"在页面中设置token\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"当referer来源不是本网站时，拒绝请求\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v(\"参考文章：\")])])}]\n\n\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8.md?/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress%22,%22cacheIdentifier%22:%220921bf65-vue-loader-template%22%7D!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2");

/***/ }),

/***/ "./docs/js/一些概念/前端安全.md":
/*!******************************!*\
  !*** ./docs/js/一些概念/前端安全.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./前端安全.md?vue&type=template&id=0db6969f& */ \"./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f&\");\n/* harmony import */ var _usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8.md?");

/***/ }),

/***/ "./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f&":
/*!*************************************************************!*\
  !*** ./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./前端安全.md?vue&type=template&id=0db6969f& */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\\\",\\\"cacheIdentifier\\\":\\\"0921bf65-vue-loader-template\\\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/一些概念/前端安全.md?vue&type=template&id=0db6969f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_md_vue_type_template_id_0db6969f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/js/%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5/%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8.md?");

/***/ })

}]);
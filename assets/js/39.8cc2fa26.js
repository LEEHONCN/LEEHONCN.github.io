(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress","cacheIdentifier":"0921bf65-vue-loader-template"}!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"content\"},[_c('h1',{attrs:{\"id\":\"async-和-await\"}},[_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#async-和-await\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\" async 和 await\")]),_vm._v(\" \"),_c('p',[_vm._v(\"如果一个函数加上 \"),_c('code',[_vm._v(\"async\")]),_vm._v(\" ,那么该函数就会返回一个 \"),_c('code',[_vm._v(\"Promise\")]),_vm._v(\" 并且是 \"),_c('code',[_vm._v(\"resolve\")]),_vm._v(\" 状态的。\")]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"await\")]),_vm._v(\" 只能在 \"),_c('code',[_vm._v(\"async\")]),_vm._v(\" 函数内部使用\")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"sleep 函数\")])]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"await\")]),_vm._v(\" 会等待 sleep函数 \"),_c('code',[_vm._v(\"resolve\")]),_vm._v(\" 才会执行同步方法。\")]),_vm._v(\" \"),_c('div',{staticClass:\"language-js extra-class\"},[_c('pre',{pre:true,attrs:{\"class\":\"language-js\"}},[_c('code',[_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"function\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"sleep\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"{\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"return\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"new\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token class-name\"}},[_vm._v(\"Promise\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token parameter\"}},[_vm._v(\"resolve\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token operator\"}},[_vm._v(\"=>\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"{\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"setTimeout\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token operator\"}},[_vm._v(\"=>\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"{\")]),_vm._v(\"\\n      console\"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\".\")]),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"log\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token string\"}},[_vm._v(\"'finish'\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_vm._v(\"\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"resolve\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token string\"}},[_vm._v(\"\\\"sleep\\\"\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\";\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"}\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\",\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token number\"}},[_vm._v(\"2000\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\";\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"}\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\";\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"}\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"async\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"function\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"test\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"{\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"let\")]),_vm._v(\" value \"),_c('span',{pre:true,attrs:{\"class\":\"token operator\"}},[_vm._v(\"=\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token keyword\"}},[_vm._v(\"await\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"sleep\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\";\")]),_vm._v(\"\\n  console\"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\".\")]),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"log\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token string\"}},[_vm._v(\"\\\"object\\\"\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\";\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"}\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token function\"}},[_vm._v(\"test\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\"(\")]),_c('span',{pre:true,attrs:{\"class\":\"token punctuation\"}},[_vm._v(\")\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token comment\"}},[_vm._v(\"// finish\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"token comment\"}},[_vm._v(\"// object\")]),_vm._v(\"\\n\")])])]),_c('p',[_c('strong',[_vm._v(\"与 Promise 比较：\")])]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Promise 的 API 导致原始代码的语义变得不那么清晰。\")])]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"与Generator比较：\")])]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"生成器只有配合自动执行器，才能够使用\")]),_vm._v(\" \"),_c('li',[_vm._v(\"而 \"),_c('code',[_vm._v(\"async\")]),_vm._v(\" 封装了 生成器和自动执行器，使得代码清晰，代码量少。\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"**缺点：**在于滥用 \"),_c('code',[_vm._v(\"await\")]),_vm._v(\" 可能会导致性能问题，因为 \"),_c('code',[_vm._v(\"await\")]),_vm._v(\" 会阻塞代码，\")])])}]\n\n\n\n//# sourceURL=webpack:///./docs/js/ES6/async_%E5%92%8C_await.md?/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress%22,%22cacheIdentifier%22:%220921bf65-vue-loader-template%22%7D!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!/usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!/usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2");

/***/ }),

/***/ "./docs/js/ES6/async 和 await.md":
/*!**************************************!*\
  !*** ./docs/js/ES6/async 和 await.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async 和 await.md?vue&type=template&id=99a7ae6a& */ \"./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a&\");\n/* harmony import */ var _usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/js/ES6/async_%E5%92%8C_await.md?");

/***/ }),

/***/ "./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a&":
/*!*********************************************************************!*\
  !*** ./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{\"cacheDirectory\":\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"0921bf65-vue-loader-template\"}!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib??ref--1-1!../../../../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js??ref--1-2!./async 和 await.md?vue&type=template&id=99a7ae6a& */ \"../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"../../../usr/local/lib/node_modules/vuepress/node_modules/.cache/vuepress\\\",\\\"cacheIdentifier\\\":\\\"0921bf65-vue-loader-template\\\"}!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/cache-loader/dist/cjs.js?!../../../usr/local/lib/node_modules/vuepress/node_modules/vue-loader/lib/index.js?!../../../usr/local/lib/node_modules/vuepress/lib/webpack/markdownLoader.js?!./docs/js/ES6/async 和 await.md?vue&type=template&id=99a7ae6a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _cache_loader_cacheDirectory_usr_local_lib_node_modules_vuepress_node_modules_cache_vuepress_cacheIdentifier_0921bf65_vue_loader_template_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_usr_local_lib_node_modules_vuepress_node_modules_cache_loader_dist_cjs_js_ref_1_0_usr_local_lib_node_modules_vuepress_node_modules_vue_loader_lib_index_js_ref_1_1_usr_local_lib_node_modules_vuepress_lib_webpack_markdownLoader_js_ref_1_2_async_await_md_vue_type_template_id_99a7ae6a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/js/ES6/async_%E5%92%8C_await.md?");

/***/ })

}]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/bootstrap.scss */ \"./src/scss/bootstrap.scss\");\n/* harmony import */ var _scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ \"./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ \"./node_modules/@fortawesome/fontawesome-free/js/solid.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ \"./node_modules/@fortawesome/fontawesome-free/js/regular.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ \"./node_modules/@fortawesome/fontawesome-free/js/brands.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ekko_lightbox_dist_ekko_lightbox_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ekko-lightbox/dist/ekko-lightbox.min.js */ \"./node_modules/ekko-lightbox/dist/ekko-lightbox.min.js\");\n/* harmony import */ var ekko_lightbox_dist_ekko_lightbox_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ekko_lightbox_dist_ekko_lightbox_min_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var jcarousel_dist_jquery_jcarousel_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jcarousel/dist/jquery.jcarousel.min.js */ \"./node_modules/jcarousel/dist/jquery.jcarousel.min.js\");\n/* harmony import */ var jcarousel_dist_jquery_jcarousel_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jcarousel_dist_jquery_jcarousel_min_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/scripts.js */ \"./src/js/scripts.js\");\n/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_scripts_js__WEBPACK_IMPORTED_MODULE_10__);\n// CSS\n\n//import './scss/materialize.scss';\n\n\n\n\n\n\n\n\n\n// JavaScript\nvar $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\n//import 'materialize-css/dist/js/materialize.min.js'\n // include Popper\n // EKKO Lightbox\n //JCarousel\n //Slick Slider\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {// Tooltip\n$('[data-toggle=\"tooltip\"]').tooltip();\n\n// Tooltip mobile\n$(\"span[title]\").click(function () {\n    var $title = $(this).find(\".title\");\n    if (!$title.length) {\n      $(this).append('<span class=\"title\">' + $(this).attr(\"title\") + '</span>');\n    } else {\n      $title.remove();\n    }\n});\n\n// EKKO Lightbox\n$(document).on('click', '[data-toggle=\"lightbox\"]', function(event) {\n  event.preventDefault();\n  $(this).ekkoLightbox();\n});\n\n// Change class after scrolling\n$(function() {\n  //caches a jQuery object containing the header element\n  var header = $(\".normalHeader\");\n  $(window).scroll(function() {\n      var scroll = $(window).scrollTop();\n      if (scroll >= 500) {\n          header.removeClass('normalHeader').addClass(\"changedHeader\");\n      } else {\n          header.removeClass(\"changedHeader\").addClass('normalHeader');\n      }\n  });\n});\n\n// TO-TOP BTN\n$(function() {\n  //caches a jQuery object containing the header element\n  var header = $(\".noTop\");\n  $(window).scroll(function() {\n      var scroll = $(window).scrollTop();\n      if (scroll >= 800) {\n          header.removeClass('noTop').addClass(\"toTop\");\n      } else {\n          header.removeClass(\"toTop\").addClass('noTop');\n      }\n  });\n});\n\n// TOGGLER MENU\nconst toggler = document.querySelector('.menu__toggler');\nconst menu    = document.querySelector('.menu');\n/*\n * Toggles on and off the 'active' class on the menu\n * and the toggler button.\n */\ntoggler.addEventListener('click', () => {\n  toggler.classList.toggle('active');\n  menu.classList.toggle('active');\n});\n\n//Slick Slider\n$(document).ready(function(){\n    $('.slider_default').slick({\n        prevArrow:\"<img class='a-left control-c prev slick-prev' src='../images/arrow-left.svg'>\",\n        nextArrow:\"<img class='a-right control-c next slick-next' src='../images/arrow-right.svg'>\",\n        autoplay: true,\n        dots: true,\n        infinite: true,\n        speed: 300,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        arrows: true,\n        responsive: [\n          {\n            breakpoint: 1024,\n            settings: {\n              slidesToShow: 2,\n              slidesToScroll: 1,\n            },\n          },\n          {\n            breakpoint: 480,\n            settings: {\n              centerMode: true,\n              slidesToShow: 1,\n              slidesToScroll: 1,\n              arrows: false,\n            },\n          },\n          // You can unslick at a given breakpoint now by adding:\n          // settings: \"unslick\"\n          // instead of a settings object\n        ],\n    })\n\n    $('.slider_instagram').slick({\n        prevArrow:\"<img class='a-left control-c prev slick-prev' src='../images/arrow-left.svg'>\",\n        nextArrow:\"<img class='a-right control-c next slick-next' src='../images/arrow-right.svg'>\",\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        autoplaySpeed: 2000,\n    });\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ }),

/***/ "./src/scss/bootstrap.scss":
/*!*********************************!*\
  !*** ./src/scss/bootstrap.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/bootstrap.scss?");

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:9000 ./src/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/l.favilla/Repositories/modello/webpack-quickstarter/src/MarketingFactory/AppBundle/Resources/public/html/node_modules/webpack-dev-server/client/index.js?http://localhost:9000 */\"./node_modules/webpack-dev-server/client/index.js?http://localhost:9000\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/approximation.js":
/*!******************************!*\
  !*** ./src/approximation.js ***!
  \******************************/
/*! exports provided: approximation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"approximation\", function() { return approximation; });\n/**\r\n *\r\n * @param data - [{x: xVal, y: yVal}, {}]\r\n */\r\nfunction approximation(data, ) {\r\n    // code here\r\n\r\n    return 1;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcm94aW1hdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHByb3hpbWF0aW9uLmpzPzBlODAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBkYXRhIC0gW3t4OiB4VmFsLCB5OiB5VmFsfSwge31dXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwcm94aW1hdGlvbihkYXRhLCApIHtcclxuICAgIC8vIGNvZGUgaGVyZVxyXG5cclxuICAgIHJldHVybiAxO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/approximation.js\n");

/***/ }),

/***/ "./src/dataset.json":
/*!**************************!*\
  !*** ./src/dataset.json ***!
  \**************************/
/*! exports provided: points, default */
/***/ (function(module) {

eval("module.exports = {\"points\":[{\"x\":-2,\"y\":5},{\"x\":-1,\"y\":-2},{\"x\":0,\"y\":4},{\"x\":1,\"y\":-7},{\"x\":2,\"y\":2}]};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YXNldC5qc29uLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dataset.json\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataset */ \"./src/dataset.json\");\nvar _dataset__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dataset */ \"./src/dataset.json\", 1);\n/* harmony import */ var _lagrange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lagrange */ \"./src/lagrange.js\");\n/* harmony import */ var _approximation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approximation */ \"./src/approximation.js\");\n/* harmony import */ var _node_modules_chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/chart.js/dist/Chart */ \"./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var _node_modules_chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst points = _dataset__WEBPACK_IMPORTED_MODULE_0__.points;\r\nconst res = Object(_lagrange__WEBPACK_IMPORTED_MODULE_1__[\"lagrange\"])(points, 1.5, 5);\r\n\r\nconsole.log(`Value of f(1.5) = ${res}`);\r\n\r\nfunction fillTable($el) {\r\n    const xPoints = points.map(i => i.x);\r\n    const yPoints = points.map(i => i.y);\r\n    let content = '';\r\n\r\n    content += xPoints.reduce((prev, curr, index) => { //handling X row\r\n        if(index === 0) {\r\n            prev += `<tr><th>X</th><td>${curr}</td>`;\r\n\r\n            return prev\r\n        }\r\n\r\n        if(index === xPoints.length - 1) {\r\n            prev += `<td>${curr}</td></tr>`;\r\n\r\n            return prev\r\n        }\r\n\r\n\r\n        prev += `<td>${curr}</td>`;\r\n\r\n        return prev;\r\n    }, '');\r\n\r\n    content += yPoints.reduce((prev, curr, index) => { //handling Y row\r\n        if(index === 0) {\r\n            prev += `<tr><th>Y</th><td>${curr}</td>`;\r\n\r\n            return prev\r\n        }\r\n\r\n        if(index === xPoints.length - 1) {\r\n            prev += `<td>${curr}</td></tr>`;\r\n\r\n            return prev\r\n        }\r\n\r\n\r\n        prev += `<td>${curr}</td>`;\r\n\r\n        return prev;\r\n    }, '');\r\n\r\n    return $el.innerHTML = content;\r\n}\r\n\r\nfunction interpolate() {\r\n    const x = Number(document.getElementsByName('lagrange-input')[0].value);\r\n    const $result = document.getElementById('interpolate-result');\r\n    const res = Object(_lagrange__WEBPACK_IMPORTED_MODULE_1__[\"lagrange\"])(points, x, 5);\r\n\r\n    return $result.innerText = `Value of f(${x}) = ${res}`;\r\n}\r\n\r\nfunction approximate() {\r\n    const x = Number(document.getElementsByName('approximation-input')[0].value);\r\n    const $result = document.getElementById('approximate-result');\r\n    const res = Object(_approximation__WEBPACK_IMPORTED_MODULE_2__[\"approximation\"])(points, x, 5);\r\n\r\n    return $result.innerText = `Value of f(${x}) = ${res}`;\r\n}\r\n\r\nfunction displayLineChart($ctx) {\r\n    new _node_modules_chart_js_dist_Chart__WEBPACK_IMPORTED_MODULE_3___default.a($ctx, {\r\n        type: 'line',\r\n        data: {\r\n            labels: points.map(i => i.x),\r\n            datasets: [{\r\n                label: 'points',\r\n                data: points.map(i => i.y),\r\n                borderColor: \"#3e95cd\",\r\n                fill: false\r\n            }]\r\n        },\r\n        options: {\r\n            title: {\r\n                display: true,\r\n                text: 'Numeric dataset'\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const $tBody = document.getElementById('data-table');\r\n    const $lagrange = document.getElementById('interpolate');\r\n    const $approxButton = document.getElementById('approximate');\r\n    const $ctx = document.getElementById(\"chart\");\r\n\r\n    $lagrange.addEventListener('click', interpolate);\r\n    $approxButton.addEventListener('click', approximate);\r\n\r\n\r\n    // init\r\n    fillTable($tBody);\r\n    displayLineChart($ctx);\r\n\r\n}, false);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGFzZXQnO1xyXG5pbXBvcnQgeyBsYWdyYW5nZSB9IGZyb20gXCIuL2xhZ3JhbmdlXCI7XHJcbmltcG9ydCB7IGFwcHJveGltYXRpb24gfSBmcm9tIFwiLi9hcHByb3hpbWF0aW9uXCI7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9ub2RlX21vZHVsZXMvY2hhcnQuanMvZGlzdC9DaGFydCc7XHJcblxyXG5cclxuY29uc3QgcG9pbnRzID0gZGF0YS5wb2ludHM7XHJcbmNvbnN0IHJlcyA9IGxhZ3JhbmdlKHBvaW50cywgMS41LCA1KTtcclxuXHJcbmNvbnNvbGUubG9nKGBWYWx1ZSBvZiBmKDEuNSkgPSAke3Jlc31gKTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxUYWJsZSgkZWwpIHtcclxuICAgIGNvbnN0IHhQb2ludHMgPSBwb2ludHMubWFwKGkgPT4gaS54KTtcclxuICAgIGNvbnN0IHlQb2ludHMgPSBwb2ludHMubWFwKGkgPT4gaS55KTtcclxuICAgIGxldCBjb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29udGVudCArPSB4UG9pbnRzLnJlZHVjZSgocHJldiwgY3VyciwgaW5kZXgpID0+IHsgLy9oYW5kbGluZyBYIHJvd1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHByZXYgKz0gYDx0cj48dGg+WDwvdGg+PHRkPiR7Y3Vycn08L3RkPmA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5kZXggPT09IHhQb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBwcmV2ICs9IGA8dGQ+JHtjdXJyfTwvdGQ+PC90cj5gO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcmV2ICs9IGA8dGQ+JHtjdXJyfTwvdGQ+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCAnJyk7XHJcblxyXG4gICAgY29udGVudCArPSB5UG9pbnRzLnJlZHVjZSgocHJldiwgY3VyciwgaW5kZXgpID0+IHsgLy9oYW5kbGluZyBZIHJvd1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHByZXYgKz0gYDx0cj48dGg+WTwvdGg+PHRkPiR7Y3Vycn08L3RkPmA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW5kZXggPT09IHhQb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBwcmV2ICs9IGA8dGQ+JHtjdXJyfTwvdGQ+PC90cj5gO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcmV2ICs9IGA8dGQ+JHtjdXJyfTwvdGQ+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCAnJyk7XHJcblxyXG4gICAgcmV0dXJuICRlbC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZSgpIHtcclxuICAgIGNvbnN0IHggPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2xhZ3JhbmdlLWlucHV0JylbMF0udmFsdWUpO1xyXG4gICAgY29uc3QgJHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcnBvbGF0ZS1yZXN1bHQnKTtcclxuICAgIGNvbnN0IHJlcyA9IGxhZ3JhbmdlKHBvaW50cywgeCwgNSk7XHJcblxyXG4gICAgcmV0dXJuICRyZXN1bHQuaW5uZXJUZXh0ID0gYFZhbHVlIG9mIGYoJHt4fSkgPSAke3Jlc31gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHByb3hpbWF0ZSgpIHtcclxuICAgIGNvbnN0IHggPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2FwcHJveGltYXRpb24taW5wdXQnKVswXS52YWx1ZSk7XHJcbiAgICBjb25zdCAkcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcHJveGltYXRlLXJlc3VsdCcpO1xyXG4gICAgY29uc3QgcmVzID0gYXBwcm94aW1hdGlvbihwb2ludHMsIHgsIDUpO1xyXG5cclxuICAgIHJldHVybiAkcmVzdWx0LmlubmVyVGV4dCA9IGBWYWx1ZSBvZiBmKCR7eH0pID0gJHtyZXN9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxpbmVDaGFydCgkY3R4KSB7XHJcbiAgICBuZXcgQ2hhcnQoJGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGxhYmVsczogcG9pbnRzLm1hcChpID0+IGkueCksXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdwb2ludHMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9pbnRzLm1hcChpID0+IGkueSksXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjM2U5NWNkXCIsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdOdW1lcmljIGRhdGFzZXQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgJHRCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEtdGFibGUnKTtcclxuICAgIGNvbnN0ICRsYWdyYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcnBvbGF0ZScpO1xyXG4gICAgY29uc3QgJGFwcHJveEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHByb3hpbWF0ZScpO1xyXG4gICAgY29uc3QgJGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIik7XHJcblxyXG4gICAgJGxhZ3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW50ZXJwb2xhdGUpO1xyXG4gICAgJGFwcHJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcHJveGltYXRlKTtcclxuXHJcblxyXG4gICAgLy8gaW5pdFxyXG4gICAgZmlsbFRhYmxlKCR0Qm9keSk7XHJcbiAgICBkaXNwbGF5TGluZUNoYXJ0KCRjdHgpO1xyXG5cclxufSwgZmFsc2UpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/lagrange.js":
/*!*************************!*\
  !*** ./src/lagrange.js ***!
  \*************************/
/*! exports provided: lagrange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lagrange\", function() { return lagrange; });\n/**\r\n *\r\n * @param data - [{x: xVal, y: yVal}, {}]\r\n * @param x - points value to be obtained\r\n * @param n - known data points\r\n */\r\nfunction lagrange(data, x, n) {\r\n    let result = 0;\r\n\r\n    for (let i = 0; i < n; ++i) {\r\n\r\n        let term = data[i].y;\r\n\r\n        for (let j = 0; j < n; ++j) {\r\n            if (j !== i) {\r\n                term = term * (x - data[j].x) / (data[i].x - data[j].x);\r\n            }\r\n        }\r\n\r\n        result += term;\r\n    }\r\n\r\n    return result;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFncmFuZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFncmFuZ2UuanM/ZjNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQHBhcmFtIGRhdGEgLSBbe3g6IHhWYWwsIHk6IHlWYWx9LCB7fV1cclxuICogQHBhcmFtIHggLSBwb2ludHMgdmFsdWUgdG8gYmUgb2J0YWluZWRcclxuICogQHBhcmFtIG4gLSBrbm93biBkYXRhIHBvaW50c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhZ3JhbmdlKGRhdGEsIHgsIG4pIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XHJcblxyXG4gICAgICAgIGxldCB0ZXJtID0gZGF0YVtpXS55O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47ICsraikge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdGVybSA9IHRlcm0gKiAoeCAtIGRhdGFbal0ueCkgLyAoZGF0YVtpXS54IC0gZGF0YVtqXS54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IHRlcm07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lagrange.js\n");

/***/ })

/******/ });
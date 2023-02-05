"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU12QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBLEdBQUc7QUFFMUQsSUFBSUcsSUFBeUIsRUFBY0QsT0FBT0QsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGUtYXBwLXByaXNtYS8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjsgXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const { title , content  } = req.body;\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.create({\n            data: {\n                title,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"note created\"\n        });\n    } catch (error) {\n        console.log(\"failure\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDN0UsTUFBTSxFQUFDQyxNQUFLLEVBQUVDLFFBQU8sRUFBQyxHQUFHSCxJQUFJSSxJQUFJO0lBRWpDLElBQUc7UUFDQyxNQUFNTiwyREFBa0IsQ0FBQztZQUNyQlMsTUFBTTtnQkFDRkw7Z0JBQ0FDO1lBQ0o7UUFDSjtRQUNBRixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVE7UUFBYztJQUNoRCxFQUFFLE9BQU9DLE9BQU07UUFDWEMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGUtYXBwLXByaXNtYS8uL3BhZ2VzL2FwaS9jcmVhdGUudHM/ZjJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHt0aXRsZSwgY29udGVudH0gPSByZXEuYm9keVxuXG4gICAgdHJ5e1xuICAgICAgICBhd2FpdCBwcmlzbWEubm90ZS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6J25vdGUgY3JlYXRlZCd9KVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsdXJlXCIpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJub3RlIiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create.ts"));
module.exports = __webpack_exports__;

})();
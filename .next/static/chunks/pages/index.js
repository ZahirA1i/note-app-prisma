/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fzahirali%2FDesktop%2Fnote-app-prisma%2Fpages%2Findex.tsx&page=%2F!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fzahirali%2FDesktop%2Fnote-app-prisma%2Fpages%2Findex.tsx&page=%2F! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnphaGlyYWxpJTJGRGVza3RvcCUyRm5vdGUtYXBwLXByaXNtYSUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZWNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fzahirali%2FDesktop%2Fnote-app-prisma%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { notes  } = param;\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        title: \"\",\n        content: \"\",\n        id: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const refreshData = ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(router.asPath);\n    };\n    async function create(data) {\n        try {\n            fetch(\"http://localhost:3000/api/create\", {\n                body: JSON.stringify(data),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                method: \"POST\"\n            }).then(()=>{\n                setForm({\n                    title: \"\",\n                    content: \"\",\n                    id: \"\"\n                });\n                refreshData();\n            });\n        } catch (error) {\n            console.log(404);\n        }\n    }\n    async function deleteNote(id) {\n        try {\n            fetch(\"https://localhost:3000/api/note/\".concat(id), {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                method: \"DELETE\"\n            }).then(()=>{\n                refreshData();\n            });\n        } catch (error) {\n            console.log(404);\n        }\n    }\n    const handleSubmit = async (data)=>{\n        try {\n            create(data);\n        } catch (error) {\n            console.log(404);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center font-bold text-2x1 mt-4\"\n            }, void 0, false, {\n                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    handleSubmit(form);\n                },\n                className: \"w-auto min-w[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Title\",\n                        value: form.title,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                title: e.target.value\n                            }),\n                        className: \"border-2 rounded border-gray=600 p-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Content\",\n                        value: form.content,\n                        onChange: (e)=>setForm({\n                                ...form,\n                                content: e.target.value\n                            }),\n                        className: \"border-2 rounded border-gray=600 p-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white rounded p-1\",\n                        children: \"Add+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: note.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: note.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteNote(note.id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        }, note.id, false, {\n                            fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zahirali/Desktop/note-app-prisma/pages/index.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VJUZEas+B4nv5ii/5G9H1Qy4LMI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi9saWIvcHJpc21hJ1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuaW50ZXJmYWNlIE5vdGVze1xuICBub3Rlczoge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgY29udGVudDogc3RyaW5nXG4gIH1bXVxufVxuXG5cbmludGVyZmFjZSBGb3JtRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7bm90ZXN9OiBOb3Rlcykge1xuXG4gIGNvbnN0W2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8Rm9ybURhdGE+KHt0aXRsZTogJycsIGNvbnRlbnQ6JycsIGlkOicnfSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCByZWZyZXNoRGF0YSA9ICgpID0+IHtcbiAgICBSb3V0ZXIucmVwbGFjZShyb3V0ZXIuYXNQYXRoKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKGRhdGE6IEZvcm1EYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NyZWF0ZScgLHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0Rm9ybSh7dGl0bGU6ICcnLCBjb250ZW50OiAnJywgaWQ6Jyd9KVxuICAgICAgICByZWZyZXNoRGF0YSgpXG4gICAgICB9ICAgXG4gICAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coNDA0KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVOb3RlKGlkOiBzdHJpbmcpe1xuICAgIHRyeSB7XG4gICAgICBmZXRjaChgaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbm90ZS8ke2lkfWAse1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOidERUxFVEUnXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVmcmVzaERhdGEoKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coNDA0KTtcbiAgICB9XG4gIH1cblxuXG5cblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChkYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjcmVhdGUoZGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coNDA0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtMngxIG10LTRcIj48L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhhbmRsZVN1Ym1pdChmb3JtKVxuICAgICAgfX0gY2xhc3NOYW1lPVwidy1hdXRvIG1pbi13WzI1JV0gbWF4LXctbWluIG14LWF1dG8gc3BhY2UteS02IGZsZXggZmxleC1jb2wgaXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RpdGxlJ1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm0udGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtKHsuLi5mb3JtLCB0aXRsZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQgYm9yZGVyLWdyYXk9NjAwIHAtMVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29udGVudCdcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNvbnRlbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGb3JtKHsuLi5mb3JtLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZCBib3JkZXItZ3JheT02MDAgcC0xXCJcbiAgICAgICAgLz5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHAtMVwiPkFkZCs8L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7bm90ZXMubWFwKG5vdGUgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25vdGUuaWR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+e25vdGUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57bm90ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShub3RlLmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgbm90ZXMgPSBhd2FpdCBwcmlzbWEubm90ZS5maW5kTWFueSh7XG4gICAgc2VsZWN0OiB7XG4gICAgICB0aXRsZTogdHJ1ZSxcbiAgICAgIGlkOnRydWUsXG4gICAgICBjb250ZW50OiB0cnVlXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5vdGVzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiUm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJIb21lIiwibm90ZXMiLCJmb3JtIiwic2V0Rm9ybSIsInRpdGxlIiwiY29udGVudCIsImlkIiwicm91dGVyIiwicmVmcmVzaERhdGEiLCJyZXBsYWNlIiwiYXNQYXRoIiwiY3JlYXRlIiwiZGF0YSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwidGhlbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZU5vdGUiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidWwiLCJtYXAiLCJub3RlIiwibGkiLCJoMyIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fzahirali%2FDesktop%2Fnote-app-prisma%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
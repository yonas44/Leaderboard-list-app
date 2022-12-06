/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(black, white);\n  width: 70%;\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.home-bg {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  z-index: 3;\n  transition: all 1s;\n}\n\n.up {\n  top: -100%;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  margin: auto auto;\n  width: 600px;\n  height: 400px;\n  transition: 0.2s;\n  border-radius: 20px;\n  backdrop-filter: blur(8px);\n}\n\n.home h2 {\n  font-size: 52px;\n  font-style: italic;\n  font-weight: 700;\n}\n\n#first-btn {\n  font-size: 20px;\n  padding: 10px 20px;\n  border: none;\n  color: white;\n  font-weight: 500;\n  border-radius: 10px;\n  transition: all 0.5s;\n  background-color: rgba(128, 127, 127, 0.5);\n}\n\n#first-btn:hover {\n  background-color: white;\n  color: black;\n}\n\nh1 {\n  width: 80%;\n  display: none;\n  font-size: 60px;\n  margin: auto auto 60px auto;\n}\n\n.container {\n  display: grid;\n  border-radius: 10px;\n  width: 80%;\n  margin: 0 auto auto auto;\n  grid-template-columns: 4fr 3fr;\n}\n\n.dashboard {\n  scale: 0;\n  padding: 20px 7%;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(50%);\n  gap: 40px;\n  z-index: 2;\n}\n\n.animate {\n  scale: 1;\n  animation: out 1s 0.5s forwards;\n}\n\n.list-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.list-title h3 {\n  font-size: 32px;\n}\n\n.list-title button {\n  border: none;\n  padding: 0 10px;\n  margin-right: 20px;\n  border-radius: 5px;\n}\n\n.list-title button:hover {\n  background-color: red;\n  color: white;\n}\n\n.lists {\n  display: none;\n  overflow: auto;\n  max-height: 300px;\n}\n\n.on {\n  display: block !important;\n}\n\ntable {\n  width: 100%;\n}\n\ntable tr {\n  height: 30px;\n}\n\ntable tr:nth-child(even) {\n  background-color: #f2f2f2;\n  border-collapse: collapse;\n}\n\n.message {\n  display: none;\n  background: lightblue;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 20px;\n  border-radius: 10px;\n  border-top-right-radius: 0;\n}\n\n.message span {\n  color: red;\n  font-weight: 700;\n  font-style: italic;\n}\n\n.form {\n  padding: 20px 7%;\n  transform: translateX(-50%);\n  transition: background 0.5s;\n  opacity: 0;\n}\n\n@keyframes out {\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.form h3 {\n  font-size: 28px;\n  margin-bottom: 40px;\n}\n\nform {\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n\ninput {\n  border: none;\n  border-bottom: 1px solid black;\n  background: transparent;\n  outline: none;\n  height: 30px;\n}\n\ninput[type=submit] {\n  padding: 10px;\n  border: none;\n  height: initial;\n  width: fit-content;\n  margin-left: auto;\n  border-radius: 10px;\n}\n\n#submit:hover {\n  color: white;\n  font-weight: 700;\n}\n\n.bg {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.651);\n}\n\nfooter {\n  padding: 10px 0;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,yCAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,aAAA;EACA,UAAA;EACA,kBAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,0BAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,0CAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;AACF;;AAEA;EACE,UAAA;EACA,aAAA;EACA,eAAA;EACA,2BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,UAAA;EACA,wBAAA;EACA,8BAAA;AACF;;AAEA;EACE,QAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,0BAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,QAAA;EACA,+BAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;EACE,yBAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,qBAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,0BAAA;AACF;;AAEA;EACE,UAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,gBAAA;EACA,2BAAA;EACA,2BAAA;EACA,UAAA;AACF;;AAEA;EACE;IACE,UAAA;IACA,wBAAA;EACF;AACF;AAEA;EACE,eAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,SAAA;EACA,sBAAA;AAAF;;AAGA;EACE,YAAA;EACA,8BAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,YAAA;EACA,gBAAA;AAAF;;AAGA;EACE,mBAAA;EACA,4CAAA;AAAF;;AAGA;EACE,eAAA;EACA,cAAA;AAAF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(black, white);\r\n  width: 70%;\r\n  height: 100vh;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.home-bg {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  display: flex;\r\n  z-index: 3;\r\n  transition: all 1s;\r\n}\r\n\r\n.up {\r\n  top: -100%;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  margin: auto auto;\r\n  width: 600px;\r\n  height: 400px;\r\n  transition: 0.2s;\r\n  border-radius: 20px;\r\n  backdrop-filter: blur(8px);\r\n}\r\n\r\n.home h2 {\r\n  font-size: 52px;\r\n  font-style: italic;\r\n  font-weight: 700;\r\n}\r\n\r\n#first-btn {\r\n  font-size: 20px;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 500;\r\n  border-radius: 10px;\r\n  transition: all 0.5s;\r\n  background-color: rgba(128, 127, 127, 0.5);\r\n}\r\n\r\n#first-btn:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\nh1 {\r\n  width: 80%;\r\n  display: none;\r\n  font-size: 60px;\r\n  margin: auto auto 60px auto;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  border-radius: 10px;\r\n  width: 80%;\r\n  margin: 0 auto auto auto;\r\n  grid-template-columns: 4fr 3fr;\r\n}\r\n\r\n.dashboard {\r\n  scale: 0;\r\n  padding: 20px 7%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(50%);\r\n  gap: 40px;\r\n  z-index: 2;\r\n}\r\n\r\n.animate {\r\n  scale: 1;\r\n  animation: out 1s 0.5s forwards;\r\n}\r\n\r\n.list-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.list-title h3 {\r\n  font-size: 32px;\r\n}\r\n\r\n.list-title button {\r\n  border: none;\r\n  padding: 0 10px;\r\n  margin-right: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.list-title button:hover {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\n.lists {\r\n  display: none;\r\n  overflow: auto;\r\n  max-height: 300px;\r\n}\r\n\r\n.on {\r\n  display: block !important;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntable tr {\r\n  height: 30px;\r\n}\r\n\r\ntable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.message {\r\n  display: none;\r\n  background: lightblue;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.message span {\r\n  color: red;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n.form {\r\n  padding: 20px 7%;\r\n  transform: translateX(-50%);\r\n  transition: background 0.5s;\r\n  opacity: 0;\r\n}\r\n\r\n@keyframes out {\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.form h3 {\r\n  font-size: 28px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  gap: 15px;\r\n  flex-direction: column;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  border-bottom: 1px solid black;\r\n  background: transparent;\r\n  outline: none;\r\n  height: 30px;\r\n}\r\n\r\ninput[type='submit'] {\r\n  padding: 10px;\r\n  border: none;\r\n  height: initial;\r\n  width: fit-content;\r\n  margin-left: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n#submit:hover {\r\n  color: white;\r\n  font-weight: 700;\r\n}\r\n\r\n.bg {\r\n  border-radius: 10px;\r\n  background-color: rgba(255, 255, 255, 0.651);\r\n}\r\n\r\nfooter {\r\n  padding: 10px 0;\r\n  margin: 0 auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/lists.js":
/*!******************************!*\
  !*** ./src/modules/lists.js ***!
  \******************************/
/***/ ((module) => {

/* eslint-disable max-classes-per-file */
class Entry {
  constructor(name, score) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.user = name;
    this.score = score;
  }
}

class Lists {
  constructor() {
    this.store = [];
  }
}

module.exports = { Entry, Lists };


/***/ }),

/***/ "./src/modules/loadList.js":
/*!*********************************!*\
  !*** ./src/modules/loadList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

const loadLists = async (lists) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${"Ow87Fue6mXhbZTDEmKae"}/scores`)
    .then((res) => res.json())
    .then((data) => {
      lists = data.result.sort((a, b) => b.score - a.score);
      return lists;
    });

  const listSection = document.querySelector('.lists');
  listSection.classList.add('on');
  const message = document.querySelector('.message');
  message.classList.remove('on');
  const scoreHolder = document.querySelector('.score-holder');
  while (scoreHolder.hasChildNodes()) {
    scoreHolder.removeChild(scoreHolder.firstChild);
  }
  lists.map((list) => {
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    tableData.innerHTML = `${list.user}: ${list.score}`;
    tableRow.appendChild(tableData);
    scoreHolder.appendChild(tableRow);
    return lists;
  });
};

exports.loadLists = loadLists;


/***/ }),

/***/ "./src/modules/pushTask.js":
/*!*********************************!*\
  !*** ./src/modules/pushTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

const pushTask = async (entry) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ow87Fue6mXhbZTDEmKae/scores',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
};

exports.pushTask = pushTask;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const { Lists, Entry } = __webpack_require__(/*! ./modules/lists.js */ "./src/modules/lists.js");
const { loadLists } = __webpack_require__(/*! ./modules/loadList.js */ "./src/modules/loadList.js");
const { pushTask } = __webpack_require__(/*! ./modules/pushTask.js */ "./src/modules/pushTask.js");

const list = new Lists();

const form = document.querySelector('.input');
const message = document.querySelector('.message');
message.classList.toggle('on');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const entry = new Entry(name, score);
  if (name.trim() !== '') {
    pushTask(entry);
    setTimeout(() => {
      loadLists(list.store);
    }, 1000);
    form.reset();
  } else {
    alert('Please enter a valid Name, thank you!');
  }
});

// Event listener for the refresh button

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  loadLists(list.store);
});

// Change background for form and dashborad section

const dashboardSection = document.querySelector('.dashboard');
const formSection = document.querySelector('.form');
dashboardSection.addEventListener('click', () => {
  dashboardSection.classList.add('bg');
  formSection.classList.remove('bg');
});
formSection.addEventListener('click', () => {
  dashboardSection.classList.remove('bg');
  formSection.classList.add('bg');
});

// Event listener for home button

const homeBG = document.querySelector('.home-bg');
const homeBtn = document.querySelector('#first-btn');
const title = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
  title.classList.add('on');
  homeBG.classList.add('up');
  dashboardSection.classList.add('animate');
  formSection.classList.add('animate');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCLFFBQVEsZUFBZSxFQUFFLG1CQUFPLENBQUMsa0RBQW9CO0FBQ3JELFFBQVEsWUFBWSxFQUFFLG1CQUFPLENBQUMsd0RBQXVCO0FBQ3JELFFBQVEsV0FBVyxFQUFFLG1CQUFPLENBQUMsd0RBQXVCOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/MjMzNCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9sb2FkTGlzdC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3B1c2hUYXNrLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYmxhY2ssIHdoaXRlKTtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhvbWUtYmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB6LWluZGV4OiAzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4udXAge1xcbiAgdG9wOiAtMTAwJTtcXG59XFxuXFxuLmhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW46IGF1dG8gYXV0bztcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uaG9tZSBoMiB7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jZmlyc3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI3LCAxMjcsIDAuNSk7XFxufVxcblxcbiNmaXJzdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmgxIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNjBweCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDNmcjtcXG59XFxuXFxuLmRhc2hib2FyZCB7XFxuICBzY2FsZTogMDtcXG4gIHBhZGRpbmc6IDIwcHggNyU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgZ2FwOiA0MHB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmFuaW1hdGUge1xcbiAgc2NhbGU6IDE7XFxuICBhbmltYXRpb246IG91dCAxcyAwLjVzIGZvcndhcmRzO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC10aXRsZSBoMyB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5saXN0LXRpdGxlIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5saXN0LXRpdGxlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLm9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50YWJsZSB0ciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi5tZXNzYWdlIHNwYW4ge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBhZGRpbmc6IDIwcHggNyU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG91dCB7XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG4uZm9ybSBoMyB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5iZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxRQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYmxhY2ssIHdoaXRlKTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtYmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbn1cXHJcXG5cXHJcXG4udXAge1xcclxcbiAgdG9wOiAtMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBtYXJnaW46IGF1dG8gYXV0bztcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZmlyc3QtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI3LCAxMjcsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbiNmaXJzdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDNmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZCB7XFxyXFxuICBzY2FsZTogMDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNyU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGUge1xcclxcbiAgc2NhbGU6IDE7XFxyXFxuICBhbmltYXRpb246IG91dCAxcyAwLjVzIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSBoMyB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxlIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXRpdGxlIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saXN0cyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ciB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHNwYW4ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNyU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG91dCB7XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBoMyB7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IGluaXRpYWw7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUxKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuY2xhc3MgRW50cnkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzY29yZSkge1xuICAgIG5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICB0aGlzLnVzZXIgPSBuYW1lO1xuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgfVxufVxuXG5jbGFzcyBMaXN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcmUgPSBbXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRW50cnksIExpc3RzIH07XG4iLCJjb25zdCBsb2FkTGlzdHMgPSBhc3luYyAobGlzdHMpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vc2NvcmVzYClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBsaXN0cyA9IGRhdGEucmVzdWx0LnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcbiAgICAgIHJldHVybiBsaXN0cztcbiAgICB9KTtcblxuICBjb25zdCBsaXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuICBsaXN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdvbicpO1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xuICBjb25zdCBzY29yZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1ob2xkZXInKTtcbiAgd2hpbGUgKHNjb3JlSG9sZGVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHNjb3JlSG9sZGVyLnJlbW92ZUNoaWxkKHNjb3JlSG9sZGVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGxpc3RzLm1hcCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHRhYmxlRGF0YS5pbm5lckhUTUwgPSBgJHtsaXN0LnVzZXJ9OiAke2xpc3Quc2NvcmV9YDtcbiAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZURhdGEpO1xuICAgIHNjb3JlSG9sZGVyLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICByZXR1cm4gbGlzdHM7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5sb2FkTGlzdHMgPSBsb2FkTGlzdHM7XG4iLCJjb25zdCBwdXNoVGFzayA9IGFzeW5jIChlbnRyeSkgPT4ge1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvT3c4N0Z1ZTZtWGhiWlRERW1LYWUvc2NvcmVzJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyeSksXG4gICAgfSk7XG59O1xuXG5leHBvcnRzLnB1c2hUYXNrID0gcHVzaFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgeyBMaXN0cywgRW50cnkgfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9saXN0cy5qcycpO1xuY29uc3QgeyBsb2FkTGlzdHMgfSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9sb2FkTGlzdC5qcycpO1xuY29uc3QgeyBwdXNoVGFzayB9ID0gcmVxdWlyZSgnLi9tb2R1bGVzL3B1c2hUYXNrLmpzJyk7XG5cbmNvbnN0IGxpc3QgPSBuZXcgTGlzdHMoKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpO1xuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG5tZXNzYWdlLmNsYXNzTGlzdC50b2dnbGUoJ29uJyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKS52YWx1ZTtcbiAgY29uc3QgZW50cnkgPSBuZXcgRW50cnkobmFtZSwgc2NvcmUpO1xuICBpZiAobmFtZS50cmltKCkgIT09ICcnKSB7XG4gICAgcHVzaFRhc2soZW50cnkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbG9hZExpc3RzKGxpc3Quc3RvcmUpO1xuICAgIH0sIDEwMDApO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgTmFtZSwgdGhhbmsgeW91IScpO1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSByZWZyZXNoIGJ1dHRvblxuXG5jb25zdCByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcbnJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxvYWRMaXN0cyhsaXN0LnN0b3JlKTtcbn0pO1xuXG4vLyBDaGFuZ2UgYmFja2dyb3VuZCBmb3IgZm9ybSBhbmQgZGFzaGJvcmFkIHNlY3Rpb25cblxuY29uc3QgZGFzaGJvYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQnKTtcbmNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmRhc2hib2FyZFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRhc2hib2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYmcnKTtcbiAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYmcnKTtcbn0pO1xuZm9ybVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRhc2hib2FyZFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYmcnKTtcbiAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYmcnKTtcbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgaG9tZSBidXR0b25cblxuY29uc3QgaG9tZUJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYmcnKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtYnRuJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdvbicpO1xuICBob21lQkcuY2xhc3NMaXN0LmFkZCgndXAnKTtcbiAgZGFzaGJvYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gIGZvcm1TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
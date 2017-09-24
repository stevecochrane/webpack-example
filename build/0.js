webpackJsonp([0],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(43);

exports.default = "Hello from lazy";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(42)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-3!../node_modules/postcss-loader/lib/index.js??ref--1!./lazy.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-3!../node_modules/postcss-loader/lib/index.js??ref--1!./lazy.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(undefined);
// imports


// module
exports.push([module.i, "body {\n\tcolor: #00f;\n}\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=0.js.map
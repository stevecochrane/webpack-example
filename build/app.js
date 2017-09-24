webpackJsonp([1],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var _component = __webpack_require__(37);

var _component2 = _interopRequireDefault(_component);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.body.appendChild((0, _component2.default)());

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello world";

	var element = document.createElement("div");
	element.innerHTML = text;
	element.onclick = function () {
		__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 40)).then(function (lazy) {
			element.textContent = lazy.default;
		});
	};
	return element;
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[18]);
//# sourceMappingURL=app.js.map
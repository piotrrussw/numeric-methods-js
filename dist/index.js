"use strict";

var _dataset = _interopRequireDefault(require("./dataset"));

var _lagrange = require("./lagrange");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var points = _dataset.default.points;
var res = (0, _lagrange.lagrange)(points, 1.5, 5);
console.log("Value of f(1.5) = ".concat(res));
//# sourceMappingURL=index.js.map
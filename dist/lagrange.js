"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lagrange = lagrange;

/**
 *
 * @param data - [{x: xVal, y: yVal}, {}]
 * @param x - points value to be obtained
 * @param n - known data points
 */
function lagrange(data, x, n) {
  var result = 0;

  for (var i = 0; i < n; ++i) {
    var term = data[i].y;

    for (var j = 0; j < n; ++j) {
      if (j !== i) {
        term = term * (x - data[j].x) / (data[i].x - data[j].x);
      }
    }

    result += term;
  }
}
//# sourceMappingURL=lagrange.js.map
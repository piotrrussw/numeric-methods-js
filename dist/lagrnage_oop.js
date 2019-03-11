"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lagrange =
/*#__PURE__*/
function () {
  /**
   * At least 2 points are needed to interpolate something
   * @param arr - array of objects { x: xVal, y: yVal }
   */
  function Lagrange(arr) {
    _classCallCheck(this, Lagrange);

    this.xs = arr.map(function (p) {
      return p.x;
    }); // [x1, x2, x3]

    this.ys = arr.map(function (p) {
      return p.y;
    }); // [y1, y2, y3]

    this.ws = [];

    this._updateWeights();
  }
  /**
   * @private
   */


  _createClass(Lagrange, [{
    key: "_updateWeights",
    value: function _updateWeights() {
      for (var j = 0; j < this.xs.length; ++j) {
        var w = 1;

        for (var i = 0; i < this.xs.length; ++i) {
          i !== j ? w *= this.xs[j] - this.xs[i] : null;
        }

        this.ws[j] = 1 / w;
      }
    }
    /**
     * Calculate L(x)
     * @param x
     * @returns {*}
     */

  }, {
    key: "valueOf",
    value: function valueOf(x) {
      var b = 0;
      var c = 0;

      for (var i = 0; i < this.xs.length; ++i) {
        if (x !== this.xs[i]) {
          b += this.ws[i] / (x - this.xs[i]) * this.ys[i];
          c += this.ws[i] / (x - this.xs[i]);
        } else {
          return this.ys[i];
        }
      }

      return b / c;
    }
  }]);

  return Lagrange;
}();

exports.default = Lagrange;
//# sourceMappingURL=lagrnage_oop.js.map
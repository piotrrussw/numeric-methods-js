export default class Lagrange {

    /**
     * At least 2 points are needed to interpolate something
     * @param arr - array of objects { x: xVal, y: yVal }
     */
    constructor(arr) {
        this.xs = arr.map(p => p.x); // [x1, x2, x3]
        this.ys = arr.map(p => p.y); // [y1, y2, y3]
        this.ws = [];
        this._updateWeights();
    }

    /**
     * @private
     */
    _updateWeights() {
        for (let j = 0; j < this.xs.length; ++j) {
            let w = 1;

            for (let i = 0; i < this.xs.length; ++i) {
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
    valueOf(x) {
        let b = 0;
        let c = 0;

        for (let i = 0; i < this.xs.length; ++i) {
            if (x !== this.xs[i]) {
                b += (this.ws[i] / (x - this.xs[i])) * this.ys[i];
                c += this.ws[i] / (x - this.xs[i]);
            } else {
                return this.ys[i];
            }
        }

        return b / c;
    }
}

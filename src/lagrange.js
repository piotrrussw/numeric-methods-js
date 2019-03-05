/**
 *
 * @param data - [{x: xVal, y: yVal}, {}]
 * @param x - points value to be obtained
 * @param n - known data points
 */
export function lagrange(data, x, n) {
    let result = 0;

    for (let i = 0; i < n; ++i) {

        let term = data[i].y;

        for (let j = 0; j < n; ++j) {
            if (j !== i) {
                term = term * (x - data[j].x) / (data[i].x - data[j].x);
            }
        }

        result += term;
    }
}

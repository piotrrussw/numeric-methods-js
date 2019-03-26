/**
 *
 * @param coefficients
 * @param n
 * @param x
 */
export function horner(coefficients, n, x) {
    let res = coefficients[0];

    for (let i = 1; i <= n; ++i) {
        res = res * x + Number(coefficients[i]);
    }

    return res;
}

/**
 *
 * @param data
 * @param n
 * @returns {*}
 */
export function newtonDividedDiff(data, n) {
    let y = data.map(i => [i.y, 0]);
    const x = data.map(i => i.x);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            y[j][i] = (y[j][i - 1] - y[j + 1][i - 1]) / (x[j] - x[i + j]);
        }
    }

    return y.map(i => i[1]);
}

/**
 * Recursive horner implementation
 * @param data - Array of Objects [{x, y}]
 * @param coefficients - newton calculated coefficients
 * @param n
 * @param x
 * @returns {*}
 */
export function generalizedHorner( data, coefficients, n, x) {
    let res = data[0];

    for (let i = 1; i < n; ++i) {
        res = res * (x - coefficients[i]) + Number(data[i]);
    }

    return res;
}

/**
 *
 * @param coefficients
 * @param n
 * @param x
 */
export function newtonToNatural(coefficients, n, x) {
    let y = coefficients.map(i => [i, 0]);

    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            y[j][i] = y[j][i - 1] - y[j - 1][i - 1] * x;
        }
    }

    return y.map(i => i[1]);
}

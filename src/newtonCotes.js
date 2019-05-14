/**
 * @param coefficients - Array of coefficients desc order
 * @param x
 * @returns {number}
 */
function f(coefficients, x) {
    const length = coefficients.length;

    return coefficients.reduce((prev, curr, index) => {
        prev += curr * (x ** (length - (index + 1)));

        return prev;
    }, 0);
}

/**
 * @param coefficients
 * @param x1
 * @param x2
 * @param n
 * @returns {number}
 */
function newtonCotes(coefficients, x1, x2, n) {
    const width = (x2 - x1) / n;
    let area = 0;

    for (let i = 0; i < n; ++i) {
        const a = x1 + i * width;
        const b = x1 + (i + 1) * width;

        area = area + ((b - a) / 6.0) * (f(coefficients, a) + 4.0 * f(coefficients, (a + b) / 2.0) + f(coefficients, b));
    }

    return area;
}

console.log(newtonCotes([5, -12, 7, -3], 2, 6, 10));

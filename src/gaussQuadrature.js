/**
 * @param coefficients
 * @param n
 * @param x
 * @returns {*}
 */
function horner(coefficients, n, x) {
    if (n === 0) return coefficients[n];

    return horner(coefficients, n - 1, x) * x + coefficients[n];
}

/**
 * @param coefficients
 * @param A - array A
 * @param X - array X
 * @param start
 * @param n
 * @returns {number}
 */
function gaussQuadrature(coefficients, A, X, start, n) {
    let Y = new Array(n + 1);
    const a = -2;
    const b = 2;
    const c = -1;
    const d = 1;
    const alpha = (b - a) / (d - c);
    const beta = (a * d - b * c) / (d - c);

    for (let i = 0; i <= n; i++) {
        const ti = alpha * X[start+i] + beta;

        Y[i] = horner(coefficients, 4, ti);
    }

    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += A[start + i] * Y[i];
    }

    return alpha * sum;
}

const coefficients = [0.4, 5, -6, -2, 55];
const A = [1, 1, 0.555555, 0.888888, 0.555555, 0.347855, 0.652145, 0.652145, 0.347855, 0.236927, 0.478629, 0.568889, 0.478629, 0.236927];
const X = [-0.577350, 0.577350, -0.774597, 0, 0.774597, -0.861136, -0.339981, 0.339981, 0.861136, -0.906180, -0.538469, 0, 0.538469, 0.906180];

console.log(gaussQuadrature(coefficients, A, X, 0, 1));
console.log(gaussQuadrature(coefficients, A, X, 2, 2));
console.log(gaussQuadrature(coefficients, A, X, 5, 3));
console.log(gaussQuadrature(coefficients, A, X, 9, 4));

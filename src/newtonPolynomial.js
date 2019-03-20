const coefficients = [2, -6, 2, -1];

/**
 *
 * @param coefficients
 * @param n
 * @param x
 */
function horner(coefficients, n, x) {
    let res = coefficients[0];

    for (let i = 1; i <= n; ++i) {
        res = res * x + Number(coefficients[i]);
    }

    return res;
}

/**
 * Recursive horner implementation
 * @param coefficients
 * @param n
 * @param x
 * @returns {*}
 */
function recursiveHorner(coefficients, n, x) {
    if(n === 0) {
        return coefficients[0];
    }

    return x * recursiveHorner(coefficients, n - 1, x) + Number(coefficients[n]);
}

/**
 *
 * @param coefficients - {Array}
 * @param n - {Number}
 * @param x - {Number}
 * @returns {Array}
 */
function newtonCoefficientCalculation(coefficients, n, x) {
    const newtonPolynomial = coefficients.map(i => horner(coefficients, i, n));
    let ret = [1, newtonPolynomial[1]];

    for (let i = 2; i < n; ++i) {
        const tmp = 2 * newtonCoefficientCalculation(newtonPolynomial, n - 1, x)
            - newtonCoefficientCalculation(coefficients, n - 2, x);

        ret.push(tmp);
    }

    return ret;
}

console.log(horner(coefficients, 3, 3));
console.log(recursiveHorner(coefficients, 3, 3));
console.log(coefficients);
console.log(newtonCoefficientCalculation(coefficients, 4, 3));

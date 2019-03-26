const data = [
    {
        x: -2,
        y: 5
    },
    {
        x: -1,
        y: -2
    },
    {
        x: 0,
        y: 4
    },
    {
        x: 1,
        y: -7
    },
    {
        x: 2,
        y: 2
    }
];

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
 *
 * @param data
 * @param n
 * @returns {*}
 */
function newtonDividedDiff(data, n) {
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
function recursiveHorner(data, coefficients, n, x) {
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
function newtonToNatural(coefficients, n, x) {
    let y = coefficients.map(i => [i, 0]);

    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j >= i; j--) {
            y[j][i] = y[j][i - 1] - y[j - 1][i - 1] * x;
        }
    }

    return y.map(i => i[1]);
}


const newtonCoefficients = newtonDividedDiff(data, 5);
const x = data.map(i => i.x);
const y = data.map(i => i.y);

console.log('x: ' + data.map(i => i.x).join(', '));
console.log('y: ' + data.map(i => i.y).join(', '));

console.log('horner: ' + horner(x, 4, 0));
console.log('newtonCoefficients: ' + newtonCoefficients.join(', '));
console.log('horner generalized: ' + recursiveHorner(x, newtonCoefficients, 5, 0));
console.log(newtonToNatural(newtonCoefficients, 5, 0));

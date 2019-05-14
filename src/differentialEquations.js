/**
 * @param T
 * @returns {number}
 */
function temperature(T) {
    const alpha = -1E-12;
    const beta = 0;

    return alpha * ((T ** 4) - beta);
}

/**
 * @param y0
 * @param a
 * @param b
 * @param n
 * @param f
 * @returns {*}
 */
function euler(y0, a, b, n, f) {
    const h = (b - a) / n;

    for (let i = 0; i < n; i++) {
        y0 += h * f(y0);
        a += h;
    }

    return y0;
}


/**
 * @param y0
 * @param a
 * @param b
 * @param n
 * @param f
 * @returns {*}
 */
function heun(y0, a, b, n, f) {
    const h = (b - a) / n;

    for (let i = 0; i < n; i++) {
        y0 += 1 / 2 * h * (f(y0) + f(y0 + h * f(y0)));
        a += h;
    }

    return y0;
}

/**
 * @param y0
 * @param a
 * @param b
 * @param n
 * @param f
 * @returns {*}
 */
function modifiedEuler(y0, a, b, n, f) {
    const h = (b - a) / n;

    for (let i = 0; i < n; i++) {
        y0 += h * f(y0 + 1 / 2 * h * f(y0));
        a += h;
    }

    return y0;
}

/**
 * @param y
 * @param h
 * @param f
 * @returns {number}
 */
function phi(y, h, f) {
    const k1 = f(y);
    const k2 = f(y + 1. / 2 * k1);
    const k3 = f(y + 1. / 2 * k2);
    const k4 = f(y + h * k3);

    return 1. / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
}

function rungeKutty(y0, a, b, n, f) {
    const h = (b - a) / n;

    for (let i = 0; i < n; i++) {
        y0 += h * phi(y0, h, f);
        a += h;
    }

    return y0;
}

console.log("Euler: ", euler(1200, 0, 300, 100, temperature));
console.log("Heun: ", heun(1200, 0, 300, 100, temperature));
console.log("Modified Euler: ", modifiedEuler(1200, 0, 300, 100, temperature));
console.log("Runge-Kutty: ", rungeKutty(1200, 0, 300, 100, temperature));

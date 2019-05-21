const EPS0 = 0.000000000001; // accuracy for comparision within 0
const EPSX = 0.000000000001; // accuracy for square root appointment

// TESTING FUNCTIONS
const f1 = x => x ** 3 + x ** 2 - 3 * x - 3;
const f2 = x => x ** 2 - 2;
const f3 = x => Math.sin((x ** 2)) - x ** 2;

/**
 * @param a
 * @param b
 * @param f
 * @param max - maximum loop iterations
 * @returns {*}
 */
function newtonRaphson(a, b, f, max = 64) {
    let x0, f0, f1, f2;

    f1 = f(a);
    f2 = f(b);

    while (max && (Math.abs(a - b) > EPSX)) {
        if (Math.abs(f1 - f2) < EPS0) {
            return false;
        }

        x0 = a - f1 * (a - b) / (f1 - f2);
        f0 = f(x0);

        if (Math.abs(f0) < EPS0) break;

        b = a;
        f2 = f1;
        a = x0;
        f1 = f0;

        if (!(--max)) {
            return false;
        }
    }

    if (max) {
        return x0;
    }
}

/**
 * @param a
 * @param b
 * @param f
 * @returns {*}
 */
function regulaFalsi(a, b, f) {
    let x0,x1,fa,fb,f0;

    fa = f(a);
    fb = f(b);
    x1 = a;
    x0 = b;

    if (fa * fb > 0) {
      return false;
    }

    while (Math.abs(x1 - x0) > EPSX) {
        x1 = x0;
        x0 = a - fa * (b - a) / (fb - fa);
        f0 = f(x0);

        if (Math.abs(f0) < EPS0) break;

        if (fa * f0 < 0) {
            b = x0;
            fb = f0;
        } else {
            a = x0;
            fa = f0;
        }
    }

    return x0;
}

/**
 * @param a
 * @param b
 * @param f
 * @returns {*}
 */
function pegaz(a, b, f) {
    let x0,x1,fa,fb,f0;

    fa = f(a);
    fb = f(b);
    x1 = a;
    x0 = b;

    if (fa * fb > 0) {
        return false;
    }

    while (Math.abs(x1 - x0) > EPSX) {
        x1 = x0;
        x0 = a - fa * (b - a) / (fb - fa);
        f0 = f(x0);

        if (Math.abs(f0) < EPS0) break;

        if (fa * f0 < 0) {
            b = x0;
            fb = f0;
        } else {
            a = x0;
            fa = f0;
        }
    }

    return x0;
}

/**
 * @param a
 * @param b
 * @param f
 * @returns {*}
 */
function bisection(a, b, f) {
    let x0,fa,fb,f0;

    fa = f(a);
    fb = f(b);

    if (fa * fb > 0) {
        return false;
    }

    while (Math.abs(a - b) > EPSX) {
        x0 = (a + b) / 2; f0 = f(x0);

        if(Math.abs(f0) < EPS0) break;

        if (fa * f0 < 0) {
            b = x0;
        } else {
            a = x0;
            fa = f0;
        }
    }

    return x0;
}

// // 0)
// console.log('newtonRaphson: ', newtonRaphson(1, 2, f, 64));
// console.log('regulaFalsi: ', regulaFalsi(1, 2, f));
// console.log('pegaz: ', pegaz(1, 2, f));
// console.log('bisection: ', bisection(1, 2, f));

// 1)
console.log('\nFunction 1: x3 + x2 - 3x - 3 = 0\n');
console.log('newtonRaphson: ', newtonRaphson(1, 2, f1, 64));
console.log('regulaFalsi: ', regulaFalsi(1, 2, f1));
console.log('pegaz: ', pegaz(1, 2, f1));
console.log('bisection: ', bisection(1, 2, f1));

// 2)
console.log('\nFunction 2: x2 - 2 = 0\n');
console.log('newtonRaphson: ', newtonRaphson(0, 2, f2, 64));
console.log('regulaFalsi: ', regulaFalsi(0, 2, f2));
console.log('pegaz: ', pegaz(0, 2, f2));
console.log('bisection: ', bisection(0, 2, f2));

// 3)
console.log('\nFunction 3: sin(x2) = 0\n');
console.log('newtonRaphson: ', newtonRaphson(-0.4, 1, f3, 64));
console.log('regulaFalsi: ', regulaFalsi(-0.4, 1, f3));
console.log('pegaz: ', pegaz(-0.4, 1, f3));
console.log('bisection: ', bisection(-0.4, 1, f3));

console.log('f3: ', f3(-1), f3(1));

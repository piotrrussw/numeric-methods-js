/**
 *
 * @param a - {Array}
 * @param b - {Array}
 * @returns {number}
 */
export function dotProduct(a,b) {
    const lim = Math.min(a.length, b.length);
    let n = 0;

    for (let i = 0; i < lim; i++) {
        n += a[i] * b[i];
    }

    return n;
}

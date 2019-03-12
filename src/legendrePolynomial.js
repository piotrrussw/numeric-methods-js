/**
 *
 * @param k - polynomial level
 * @param x - point
 */
export function legendrePolynomial(k, x) {
    switch (k) {
        case 0:
            return 1.0;
        case 1:
            return x;
        default:
            return ((((2 * k - 1) / k) * x) * legendrePolynomial(k - 1, x)) - (((k - 1) / k) * legendrePolynomial(k - 2, x))
    }
}

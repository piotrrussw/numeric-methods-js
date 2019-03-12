import { dotProduct } from "./dotProduct";
import { legendrePolynomial } from "./legendrePolynomial";

/**
 * @param data - dataset
 * @param x - approximation point
 */
export function approximation(data, x) {
    const length = data.length;
    const f = data.map(item => item.y);
    let result = 0;

    for (let j = 0; j < length; ++j) {
        const fj = data.map(item => legendrePolynomial(j, item.x));
        const fx = legendrePolynomial(j, x);

        result += ((dotProduct(f, fj)) / (dotProduct(fj, fj))) * fx;
    }

    return result;
}

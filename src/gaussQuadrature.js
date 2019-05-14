function horner( tab, n, x) {
    if (n === 0) return tab[n];

    return horner(tab, n - 1, x) * x + tab[n];
}

function gaussQuadrature( tabWsp, tabA, tabX, start, n) {
    let tabY = new Array(n + 1);
    let a = -2;
    let b = 2;
    let c = -1;
    let d = 1;
    let alpha = (b - a) / (d - c);
    let beta = (a * d - b * c) / (d - c);

    for (let i = 0; i <= n; i++) {
        const ti = alpha * tabX[start+i] + beta;

        tabY[i] = horner(tabWsp, 4, ti);
    }

    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += tabA[start + i] * tabY[i];
    }

    return alpha * sum;
}

const tabA = [1, 1, 0.555555, 0.888888, 0.555555, 0.347855, 0.652145, 0.652145, 0.347855, 0.236927, 0.478629, 0.568889, 0.478629, 0.236927];
const tabWsp = [0.4, 5, -6, -2, 55];
const tabX = [-0.577350, 0.577350, -0.774597, 0, 0.774597, -0.861136, -0.339981, 0.339981, 0.861136, -0.906180, -0.538469, 0, 0.538469, 0.906180];

console.log(gaussQuadrature(tabWsp, tabA, tabX, 0, 1));
console.log(gaussQuadrature(tabWsp, tabA, tabX, 2, 2));
console.log(gaussQuadrature(tabWsp, tabA, tabX, 5, 3));
console.log(gaussQuadrature(tabWsp, tabA, tabX, 9, 4));

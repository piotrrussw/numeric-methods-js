/**
 * @param i
 * @param n - length of Array
 * @param v
 * @returns {Array}
 */
function arrayFill(i, n, v) {
    let a = [];

    for (let i = 0; i < n; i++) {
        a.push(v);
    }

    return a;
}

function eliminate(n, A, X, EPS = 0.0000000001) {
    for (let i = 0; i < n - 1; i++) {
        let k = 0;

        for (k = i, j = i + 1; j < n; j++) {
            if (Math.abs(A[i][X[k]]) < Math.abs(A[i][X[j]])) {
                k = j;
            }
        }

        const tmp = X[k];
        X[k] = X[i];
        X[i] = tmp;

        if (Math.abs(A[i][X[i]]) < EPS) {
            return false;
        }

        for (let j = i + 1; j < n; j++) {
            const m = -A[j][X[i]] / A[i][X[i]];

            for (let k = i + 1; k <= n; k++) {
                A[j][X[k]] += m * A[i][X[k]];
            }
        }
    }

    return true;
}

/**
 * Gaussian elimination
 * @param A matrix
 * @param x vector
 * @return array x solution vector
 */
function gauss(A, x) {
    // Just make a single matrix
    for (let i = 0; i < A.length; i++) {
        A[i].push(x[i]);
    }

    const n = A.length;

    for (let i = 0; i < n; i++) {
        let maxEl = A[i][i];
        let maxRow = i;

        for (let k = i + 1; k < n; k++) {
            if (A[k][i] > maxEl) {
                maxEl = A[k][i];
                maxRow = k;
            }
        }

        // Swap maximum row with current row (column by column)
        for (let k = i; k < n + 1; k++) {
            const tmp = A[maxRow][k];

            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (let k = i + 1; k < n; k++) {
            const c = -A[k][i] / A[i][i];

            for (let j = i; j < n + 1; j++) {
                i === j
                    ? A[k][j] = 0
                    : A[k][j] += c * A[i][j];
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = arrayFill(0, n, 0);

    for (let i = n - 1; i > -1; i--) {
        x[i] = A[i][n] / A[i][i];

        for (let k= i - 1; k > -1; k--) {
            A[k][n] -= A[k][i] * x[i];
        }
    }

    return x;
}

/** TESTS **/

// 1)
console.log('1) \n x + y = 10\n 2x + y = 16');
console.log(' res: ', gauss([[1, 1], [2, 1]], [10, 16]));


// 2)
console.log(`\n2) 
 4x1 - 2x2 + 4x3 - 2x4 = 8
 3x1 + x2 + 4x3 + 2x4 = 7
 2x1 + 4x2 + 2x3 + x4 = 10
 2x1 - 2x2 + 4x3 + 2x4 = 2
`);
console.log(' res: ', gauss([[4, -2, 4, -2], [3, 1, 4, 2], [2, 4, 2, 1], [2, -2, 4, 2]], [8, 7, 10, 2]));


// 3)
console.log(`\n3) 
 1x1 - 3x2 + 4x3 + 6.8x4 + 9x5 = 74.64
 -3x1 + 2x2 + 4.6x3 + 6.3x4 - 10x5 = -40.26
 2x1 - 1x2 + 2.8x3 - 8.4x4 - 5x5 = -2.32
 -6x1 + 2x2 + 7x3 - 0.5x4 - 0.9x5 = 12.6
 5x1 - 2x2 - 0.5x3 + 12x4 - 4x5 = -8.9
`);

// 4)
console.log(' res: ', gauss(
    [[1, -3, 4, 6.8, 9],
        [-3, 2, 4.6, 6.3, -10],
        [2, -1, 2.8, -8.4, -5],
        [-6, 2, 7, -0.5, -0.9],
        [5, -2, -0.5, 12, -4]], [74.67, -40.26, -2.32, 12.6, -8.9])
);

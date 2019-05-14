function arrayFill(i, n, v) {
    let a = [];

    for (let i = 0; i < n; i++) {
        a.push(v);
    }

    return a;
}

/**
 * Gaussian elimination
 * @param A matrix
 * @param x vector
 * @return array x solution vector
 */
function gauss(A, x) {

    let i, k, j;

    // Just make a single matrix
    for (i=0; i < A.length; i++) {
        A[i].push(x[i]);
    }

    const n = A.length;

    for (i=0; i < n; i++) {
        let maxEl = Math.abs(A[i][i]);
        let maxRow = i;

        for (k=i+1; k < n; k++) {
            if (Math.abs(A[k][i]) > maxEl) {
                maxEl = Math.abs(A[k][i]);
                maxRow = k;
            }
        }

        // Swap maximum row with current row (column by column)
        for (k = i; k < n + 1; k++) {
            const tmp = A[maxRow][k];

            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (k = i + 1; k < n; k++) {
            const c = -A[k][i]/A[i][i];

            for (j = i; j < n + 1; j++) {
                i===j
                    ? A[k][j] = 0
                    : A[k][j] += c * A[i][j];
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = arrayFill(0, n, 0);

    for (i = n - 1; i > -1; i--) {
        x[i] = A[i][n] / A[i][i];

        for (k= i - 1; k > -1; k--) {
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

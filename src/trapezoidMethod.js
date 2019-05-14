import quadrature from './datasets/qudrature';

const coefficients = [55, -2, -6, 5, 0.4];
const pointsY = quadrature.points.map(({ y }) => y);

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


function calculate(coefficients, points) { // Calculate horner for each point
    return points.map(e => {
        return horner(coefficients, coefficients.length - 1, e);
    });
}


function isNearEnough(element, points) {
    let newIndex = 0;

    points.forEach((point,index)=> {
        if (element >= (point) && element <= (point + 0.1)){
            newIndex = index;
        }
    });

    if (newIndex) return newIndex;

    points.map((point,index)=> {
        if(element >= (point ) && element <= (point + 0.5)){
            newIndex = index;
        }

    });

    if (newIndex) return newIndex;
    //If not find so close point
    points.map((point,index)=>{
        if(element >= (point) && element <= (point + 2)){
            newIndex=index;
        }
    });

    return 0;
}

export function calculateQuadratureNewtonCotesSimpson(coefficients, points) {
    const hornerResult = calculate(coefficients, points);
    let result = 0;

    points.forEach((e,index)=> {
        if (index <= points.length - 2) {
            const el = ((points[index] + points[index+1]) / 2);
            const res = isNearEnough(el, points);
            const incIndex = +index + 1;

            result += ((points[incIndex] - e) / 6) * (hornerResult[index] + (4 * hornerResult[res]) + hornerResult[incIndex]);
        }
    });

    return result;
}

export function calculateQuadratureNewtonCotes(coefficients, points) {
    const hornerResult = calculate(coefficients, points);
    let quadratureResult = 0;

    points.forEach((e,index) => {
        const incIndex = +index + 1;

        if (index <= points.length - 2) {
            quadratureResult += ((points[incIndex] - e) / 2) * (hornerResult[index] + hornerResult[incIndex])
        }
    });

    return quadratureResult;
}

export function calculateQuadrature(coefficients, points) {
    const hornerResult = calculate(coefficients, points);
    let quadratureResult = 0;

    points.forEach((e,index)=> {
        const incIndex = +index +1;

        if (index<=points.length-2) {
            return quadratureResult += (((points[incIndex] - e) / 2) * hornerResult[index]+((points[incIndex]-points[index]) / 2) * hornerResult[incIndex])
        }
    });

    return quadratureResult;
}

console.log('quadratureNewtonCotesSimpson', calculateQuadratureNewtonCotesSimpson(coefficients, pointsY));
console.log('quadratureNewtonCotes', calculateQuadratureNewtonCotes(coefficients, pointsY));
console.log('quadratureNewtonCotes', calculateQuadrature(coefficients, pointsY));

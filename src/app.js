// TESTING FILE

import data from './datasets/dataset';
import { approximation } from "./approximation";
import { horner, generalizedHorner, newtonToNatural, newtonDividedDiff } from "./newton";
// import { calculateQuadrature, calculateQuadratureNewtonCotes, calculateQuadratureNewtonCotesSimpson } from "./trapezoidMethod";
import quadrature from './datasets/qudrature';
const points = quadrature.points.map(({ y }) => y);
const coefficients = [55, -2, -6, 5, 0.4];

//
// const points = data.points;
//
// const newtonCoefficients = newtonDividedDiff(points, 5);
// const x = points.map(i => i.x);
//
// console.log('x: ' + points.map(i => i.x).join(', '));
// console.log('y: ' + points.map(i => i.y).join(', '));
//
// console.log('horner: ' + horner(x, 4, 0));
// console.log('newtonCoefficients: ' + newtonCoefficients.join(', '));
// console.log('horner generalized: ' + generalizedHorner(x, newtonCoefficients, 5, 0));
// console.log(newtonToNatural(newtonCoefficients, 5, 0));


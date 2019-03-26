import data from './dataset';
import { approximation } from "./approximation";
import { horner, generalizedHorner, newtonToNatural, newtonDividedDiff } from "./newton";


const points = data.points;

const newtonCoefficients = newtonDividedDiff(points, 5);
const x = points.map(i => i.x);

console.log('x: ' + points.map(i => i.x).join(', '));
console.log('y: ' + points.map(i => i.y).join(', '));

console.log('horner: ' + horner(x, 4, 0));
console.log('newtonCoefficients: ' + newtonCoefficients.join(', '));
console.log('horner generalized: ' + generalizedHorner(x, newtonCoefficients, 5, 0));
console.log(newtonToNatural(newtonCoefficients, 5, 0));

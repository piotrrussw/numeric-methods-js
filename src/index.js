import data from './dataset';
import { lagrange } from "./lagrange";


const points = data.points;
const res = lagrange(points, 1.5, 5);

console.log(`Value of f(1.5) = ${res}`);

import Lagrange from './lagrange';
import data from './dataset';

const lagrange = new Lagrange(data.points);

console.log(lagrange.valueOf(8));

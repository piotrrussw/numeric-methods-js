import data from './dataset';
import { lagrange } from "./lagrange";
import { approximation } from "./approximation";
import Chart from '../node_modules/chart.js/dist/Chart';


const points = data.points;
const res = lagrange(points, 1.5, 5);

console.log(`Value of f(1.5) = ${res}`);

function fillTable($el) {
    const xPoints = points.map(i => i.x);
    const yPoints = points.map(i => i.y);
    let content = '';

    content += xPoints.reduce((prev, curr, index) => { //handling X row
        if(index === 0) {
            prev += `<tr><th>X</th><td>${curr}</td>`;

            return prev
        }

        if(index === xPoints.length - 1) {
            prev += `<td>${curr}</td></tr>`;

            return prev
        }


        prev += `<td>${curr}</td>`;

        return prev;
    }, '');

    content += yPoints.reduce((prev, curr, index) => { //handling Y row
        if(index === 0) {
            prev += `<tr><th>Y</th><td>${curr}</td>`;

            return prev
        }

        if(index === xPoints.length - 1) {
            prev += `<td>${curr}</td></tr>`;

            return prev
        }


        prev += `<td>${curr}</td>`;

        return prev;
    }, '');

    return $el.innerHTML = content;
}

function interpolate() {
    const x = Number(document.getElementsByName('lagrange-input')[0].value);
    const $result = document.getElementById('interpolate-result');
    const res = lagrange(points, x, 5);

    return $result.innerText = `Value of f(${x}) = ${res}`;
}

function approximate() {
    const x = Number(document.getElementsByName('approximation-input')[0].value);
    const $result = document.getElementById('approximate-result');
    const res = approximation(points, x, 5);

    return $result.innerText = `Value of f(${x}) = ${res}`;
}

function displayLineChart($ctx) {
    new Chart($ctx, {
        type: 'line',
        data: {
            labels: points.map(i => i.x),
            datasets: [{
                label: 'points',
                data: points.map(i => i.y),
                borderColor: "#3e95cd",
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Numeric dataset'
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const $tBody = document.getElementById('data-table');
    const $lagrange = document.getElementById('interpolate');
    const $approxButton = document.getElementById('approximate');
    const $ctx = document.getElementById("chart");

    $lagrange.addEventListener('click', interpolate);
    $approxButton.addEventListener('click', approximate);


    // init
    fillTable($tBody);
    displayLineChart($ctx);

}, false);

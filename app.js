import operation from './number.js' ;
let sol = operation.numberValue();
console.log(sol);

let sol1 = operation.indexValue();
console.log(sol1);

const  datas= sol;
const labels = sol1;
console.log(datas);
console.log(labels);
const data = {
    labels: labels,
    datasets: [{
    label: `Sequence Funtion daraset x = 0.2468
    f(x)=2*x^2 -1`,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: datas
    }]
};
console.log(data);
const config = {
    type: 'line',
    data: data,
    options: {}
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);




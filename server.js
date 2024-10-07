const { add, subtract } = require('./math');

let a = 1;
let b = 2;
let c = add(a,b);
let d = subtract(b,a);

console.log(c,d);
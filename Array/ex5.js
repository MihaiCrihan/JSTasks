let arr = [1, 2, 3];

const square = (x) => x * x;

const convert = (fn, array) => array.map(fn)

console.log(convert(square, arr));
console.log(arr)

//const convert = (fn, array) => array.map(value => fn(value)) pentru 1+parametru

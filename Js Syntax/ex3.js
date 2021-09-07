const a = 11133311;
const b = 520;
const c = 1222320;

let max = a;
let min = a;

// Math.max(a,b,c)
// Math.min(a,b,c)

max = b > max ? b : c > max ? c : a > max ? a : max;
min = b < min ? b : c < min ? c : a < min ? a : min;

// if (b > max) {
//     max = b;
// }
// if (c > max) {
//     max = c;
// }
// if (min > b) {
//     min = b;
// }
// if (min > c) {
//     min = c;
// }


console.log(max)
console.log(min)

const a = 11111;
const b = 520;
const c = 1220;

let max = a;
let min = a;

// TODO intr-un rind

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (min > b) {
    min = b;
}
if (min > c) {
    min = c;
}


console.log(max)
console.log(min)

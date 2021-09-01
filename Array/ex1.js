//for, while, do … while
//for in
// for of
// forEach
// map

const numbers = [9 ,2 ,4 ,6 ,7 ,6];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.log("-----------1---------");

let i = 0;
while (i < numbers.length) {
    console.log(numbers[i])
    i ++
}

console.log("----------2----------");
let x= 0;

do {
    console.log(numbers[x])
    x++;
} while (x < numbers.length);

console.log("-----------3---------");

for (const numbersKey in numbers) {
    console.log(numbers[numbersKey])
}

console.log("----------4----------");

for (const number of numbers) {
    console.log(number)
}

console.log("-----------5---------");

numbers.forEach(item => console.log(item));

console.log("-----------6---------");

numbers.map(value => console.log(value))
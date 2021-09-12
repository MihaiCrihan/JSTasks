const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.splice((Math.floor(numbers.length) / 2), 1, 0, 0, 0);

console.log(numbers)
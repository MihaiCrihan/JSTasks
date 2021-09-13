const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;

for (const salariesKey in salaries) {
    sum += salaries[salariesKey];
}
console.log(sum);

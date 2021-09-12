const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const extract = (from, to) => numbers.map((value, index) => {
        if (index >= from && index < to) {
            return value
        }
    }
).filter(Number)

console.log(extract(2, 5));
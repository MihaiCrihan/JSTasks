// точки и вернет массив из точек у которых координаты указаны правильно.
//     [[1, 2], [3, 4]]

let number = [
    [1, 2],
    [3, 4],
    [null, 4],
    [3, undefined]
]
//todo de cautat cum de facut singur idee nu am 
const isNumber = () => {
    for (let [index, argument] of number.entries()) {
                console.log(index,argument)
        // for (const argumentElement of argument) {
        //
        // }
        argument.every(value => {
            if (!value) {
                number.splice(index, 1)
            }
        })
    }
};
const sampleArray2 = [ 0, -1, -30, 5];

const areNumber = (number, index) => {
    if (number > 0 ) {
        return number
    } else {
        sampleArray2.splice(index, 1)
console.log(sampleArray2);
    }
}
console.log(sampleArray2.every(areNumber)); // returns true

// console.log(number
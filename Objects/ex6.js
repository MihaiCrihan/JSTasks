// точки и вернет массив из точек у которых координаты указаны правильно.
//     [[1, 2], [3, 4]]

let coordinates = [
        [1, 2],
        [3, 4],
        [null,  4],
        [3, undefined]
]
const checkCoordinates = (array) => {
    return array.filter(item => item[0] && item[1])
};

console.log(checkCoordinates(coordinates))

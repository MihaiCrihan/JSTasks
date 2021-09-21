// точки и вернет массив из точек у которых координаты указаны правильно.
//     [[1, 2], [3, 4]]

let coordonates = [
        [1, 2],
        [3, 4],
        [null,  4],
        [3, undefined]
]
//todo de cautat cum de facut singur idee nu am
const checkCoordonates = (array) => {
    return array.filter(item => item[0] && item[1])
};

console.log(checkCoordonates(coordonates))

// точки и вернет массив из точек у которых координаты указаны правильно.
//     [[1, 2], [3, 4]]

const number = [
    [1, 2],
    [3, 4],
    [null, 4],
    [3, undefined]
]

number.forEach((item, index) => {
    for (let i = 0; i < item.length; i++) {
        if (item[i]) {
            console.log(item);
        } else {
            delete item[i]
        }
        console.log(item[i])
    }
})

console.log(number)
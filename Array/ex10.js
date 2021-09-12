// Задан массив [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]
// Напишите функцию uniqueSorted, которая удалит дубликаты из массива
// и вернет отсортированный по возрастанию массив из уникальных значений
//     [0, 1, 2,  3, 4, 5, 6, 7, 8, 9]

const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1]

const uniqueSorted = (array) => {
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        while (array[i] === array[i + 1])
            array.splice(i, 1)
    }
    console.log(array)
}

//каюсь это что ниже слизал с инэта та что выше моя


// const uniqueSorted = (array) => {
//     return array.sort().filter(function(item, pos, ary) {
//         return !pos || item !== ary[pos - 1];
//     });
// }
uniqueSorted(array);
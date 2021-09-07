//Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.

const dividers = (number) => {
    for (let i = 1; i <= (number / 2); i++){
        if (!(number % i)) {
            console.log(i)
        }
    }
        console.log(number)
}
dividers(120)

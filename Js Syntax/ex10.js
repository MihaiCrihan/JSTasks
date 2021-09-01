//Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.

const dividers = (number) => {
    for (let i = 0; i <= (number / 2); i++){
        if ((number % i) === 0 ) {   // !(number % i) am facut asa dar apare si 0 dar impartirea la 0 nu are sens
            console.log(i)
        }
    }
        console.log(number)
}
dividers(120)

//Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.

const dividers = (number) => {
    for (let i = 0; i <= number; i++){
        if ((number % i) === 0 ) {   // !(number % i) am facut asa dar apare si 0 dar impartirea la 0 nu are sens
            console.log(i)
        }
    }
}
dividers(120)

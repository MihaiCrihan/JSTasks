//Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

const age = Math.floor(Math.random() * 100);
console.log("Random age number = " + age)

if (!(age > 14 && age < 90)) {
    console.log("Diapazon 1")
}

console.log("-----------------------------------------")

if (age > 90 || age < 14 ) {
    console.log("Diapazon")
}
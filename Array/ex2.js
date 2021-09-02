//Написать следующие функции обработки этого массива:
//     считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
//     выводит учеников со у которых средняя оценка < 5
//     находит учеников с максимальной и минимальной оценкой
//     сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
//     выводит тех учеников чья средняя оценка больше средней оценки всего класса

const studentsInfo = [
    {
        name: "Ion",
        marks: [10, 10, 10, 9, 8],
    },
    {
        name: "Petru",
        marks: [9, 9, 9, 9, 8],
    },
    {
        name: "Igor",
        marks: [10, 7, 9, 3, 8],
    },
    {
        name: "Tu",
        marks: [5, 17, 9, 10, 8],
    }
]

const average = () => {
    let average = 0;
    for (const studentsInfoElement of studentsInfo) {
        for (let i = 0; i <= studentsInfoElement.marks.length; i++ ) {
            average += studentsInfoElement.marks[i]
            console.log(average)
        }
    }
}
average();


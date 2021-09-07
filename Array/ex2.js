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
        name: "Igoras",
        marks: [5, 1, 4, 0, 2],
    }
]

const average = () => {
    for (const student of studentsInfo) {
        console.log(student.marks.reduce((total, current) => total + current)/student.marks.length);
    }
}

const studentsWithNegativeMarks = () => {
    for (const student of studentsInfo) {
        const markAverage = student.marks.reduce((total, current) => total + current)/student.marks.length;
        if (markAverage < 5) {
            console.log(student.name + " = " + markAverage );
        }
    }
}

const studentsWithMinMAxMArks = () => {
    console.log(Math.max.apply(Math,studentsInfo.map(student => student.marks.reduce((a, b) => a + b) / student.marks.length)));
    console.log(Math.min.apply(Math,studentsInfo.map(student => student.marks.reduce((a, b) => a + b) / student.marks.length)));
}

average();
studentsWithNegativeMarks();
studentsWithMinMAxMArks();


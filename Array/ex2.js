//Написать следующие функции обработки этого массива:
//   +  считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
//   +  выводит учеников со у которых средняя оценка < 5
//   +  находит учеников с максимальной и минимальной оценкой
//   +  сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
//   +  выводит тех учеников чья средняя оценка больше средней оценки всего класса

const studentsInfo = [
    {
        name: "Ion",
        marks: [10, 10, 10, 9, 8],
    },
    {
        name: "Petru",
        marks: [5, 1, 4, 3, 2],
    },
    {
        name: "Igor",
        marks: [10, 7, 9, 3, 8],
    },
    {
        name: "Ana",
        marks: [9, 9, 9, 9, 8],
    }
]

const average = () => {
    for (const student of studentsInfo) {
        const markAverage = student.marks.reduce((total, current) => total + current) / student.marks.length;
        console.log(student.name + " = " + markAverage);
    }
}

const studentsWithNegativeMarks = () => {
    for (const student of studentsInfo) {
        const markAverage = student.marks.reduce((total, current) => total + current) / student.marks.length;
        if (markAverage < 5) {
            console.log(student.name + " = " + markAverage);
        }
    }
}

const studentsWithMinMaxMarks = (studentsInfo) => {
    let minMark = {
        name: '',
        mark: 10
    }
    let maxMark = {
        name: '',
        mark: 0
    }
    for (const student in studentsInfo) {
        if (studentsInfo.hasOwnProperty(student)) { 
            const min = Math.min(...studentsInfo[student].marks);
            const max = Math.max(...studentsInfo[student].marks);
            if (min < minMark.mark) {
                minMark = {
                    name: studentsInfo[student].name,
                    mark: min
                }
            }
            if (max > maxMark.mark) {
                maxMark = {
                    name: studentsInfo[student].name,
                    mark: max
                }
            }
        }
    }

    console.log(minMark.name + " = " + minMark.mark)
    console.log(maxMark.name + " = " + maxMark.mark)
}

const sortMark = () => {
    const sortedArray = []
    for (const student of studentsInfo) {
        const markAverage = student.marks.reduce((total, current) => total + current) / student.marks.length;
        sortedArray.push(markAverage)
    }
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] < sortedArray[i + 1]) {
            [sortedArray[i + 1], sortedArray[i]] = [sortedArray[i], sortedArray[i + 1]]
        }
    }
    console.log(sortedArray)

}

const maxMarkFromGroupAverage = () => {
    const totalAverage = []
    for (const student of studentsInfo) {
        const markAverage = student.marks.reduce((total, current) => total + current) / student.marks.length;
        totalAverage.push(markAverage)
        const classAverage = totalAverage.reduce((marks, current) => marks + current) / totalAverage.length
        if (markAverage >= classAverage) {
            console.log(student.name + " = " + markAverage)
        }
    }
}

average();
console.log("\n")
studentsWithNegativeMarks();
console.log("\n")
studentsWithMinMaxMarks(studentsInfo);
console.log("\n")
sortMark();
console.log("\n")
maxMarkFromGroupAverage();

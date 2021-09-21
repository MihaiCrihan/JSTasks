const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
}

const changeKeyValueOrder = (obj) => {
    for (let value in Object.keys(obj)) {
        console.log(value)
    }
}
changeKeyValueOrder(weekDays)


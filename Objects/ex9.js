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
    for (const objKey in obj) {
        console.log(obj)
    }
}

changeKeyValueOrder(weekDays)
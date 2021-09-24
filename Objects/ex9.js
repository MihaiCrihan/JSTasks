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
    for (const [key, value] of Object.entries(obj)) {
        obj[key] = value
        obj[value] = key
        delete weekDays[key]
    }
        console.log(obj)
}
changeKeyValueOrder(weekDays)


const sumInputNumbers = () => {
    const  numbers = []
    while (true) {
        const promptValue = prompt("Enter number to sum it = ")

        if (promptValue === "" || promptValue === null) break;
        numbers.push(Number(promptValue))
    }

    const numberSum = numbers.reduce((x , y) => x + y)

    console.log(numberSum)
    return numberSum
}

sumInputNumbers()

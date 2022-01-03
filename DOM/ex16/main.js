document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("input")
    input.focus()

    input.addEventListener('keydown', (event) => {
        //todo refactor
        const key = event.key;
        console.log(key)
        input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    });
})


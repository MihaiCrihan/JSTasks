document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("input")
    input.focus()

    input.addEventListener("focusout", () => {
        if (!isNaN(input.value)) {
            console.log("number")
        } else {
            console.log("not number")
            input.value = ""
        }
    })
})
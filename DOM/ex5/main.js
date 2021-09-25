document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("input")
    const increase = document.getElementById("increase")
    const decrease = document.getElementById("decrease")

    increase.onclick = () => {
        input.setAttribute("value", `${++input.value}`)
        if (Number(input.value) >= 9) {
            increase.style.display = "none"
        } else {
            decrease.style.display = "block"
            increase.style.display = "block"
        }
    }


    decrease.onclick = () => {
        input.setAttribute("value", `${--input.value}`)
        if (Number(input.value) === 0) {
            decrease.style.display = "none"
        } else {
            decrease.style.display = "block"
            increase.style.display = "block"
        }
    }
})
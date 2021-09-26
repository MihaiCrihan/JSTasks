document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelectorAll('.link')
    link.forEach(value => {
        if (value.innerText.includes("htt", 0)) {
            value.style.color = "red"
        }
    })
})
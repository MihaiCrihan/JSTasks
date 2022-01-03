document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById("elem")
    const padding = Number(window.getComputedStyle(elem).getPropertyValue('padding').slice(0, 2) * 2)

    elem.addEventListener("click", () => {
        alert(elem.clientWidth)
        elem.style.width = Number(elem.clientWidth) * 2 - padding + "px"
    })
})


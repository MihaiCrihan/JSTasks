document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById("elem")
    let previousElement = elem.previousElementSibling

    console.log(previousElement.innerHTML)
    previousElement.innerHTML += "!"
})
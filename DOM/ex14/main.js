document.addEventListener('DOMContentLoaded', () => {
    const child = document.getElementById("child")
    const deleteButton = document.getElementById("removeChild")

    deleteButton.addEventListener("click", () => {
        child.remove()
    })

})
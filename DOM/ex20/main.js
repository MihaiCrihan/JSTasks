document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById("tableBody")
    const input = document.getElementById("input")
    const addBtn = document.getElementById("add")

    addBtn.addEventListener("click", () => {
        tableBody.innerHTML += ` <tr> <td>${input.value}</td> <td> <button class=closeBtn>X</button></td></tr>`;
    });

    const length = tableBody.children.length;

    document.body.addEventListener("DOMSubtreeModified", () => {
    const closeBtn = document.querySelectorAll(".closeBtn")
        console.log(closeBtn)
        for (const closeBtnElement of closeBtn) {
            closeBtnElement.addEventListener("click", () => {
                closeBtnElement.parentElement.parentElement.remove()
                console.log(closeBtnElement.parentElement.parentElement);
            })
        }
    })
})


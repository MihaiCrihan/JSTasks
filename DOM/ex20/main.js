document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById("tableBody")
    const input = document.getElementById("input")
    const addBtn = document.getElementById("add")
    const closeBtn = document.querySelectorAll(".closeBtn")

    addBtn.addEventListener("click", () => {
        tableBody.innerHTML += ` <tr> <td>${input.value}</td> <td> <button class=closeBtn>X</button></td></tr>`;
    });

    const length = tableBody.children.length;

    document.body.addEventListener("DOMSubtreeModified", () => {
        console.log(closeBtn)
        for (const closeBtnElement of closeBtn) {
            closeBtnElement.addEventListener("click", () => {
                console.log(closeBtnElement.parentElement.parentElement);
            })
        }
    })
})


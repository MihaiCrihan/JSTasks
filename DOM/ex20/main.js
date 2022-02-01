document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById("tableBody");
    const input = document.getElementById("input");
    const addBtn = document.getElementById("add");

    input.focus();
    addBtn.addEventListener("click", () => {
        if (input.value) {
            tableBody.innerHTML += ` <tr> <td>${input.value}</td> <td> <button class=closeBtn>X</button></td></tr>`;
            input.value = '';
        }
        input.focus();
    });

    document.body.addEventListener("DOMSubtreeModified", () => {
        const closeBtn = document.querySelectorAll(".closeBtn");
        for (const closeBtnElement of closeBtn) {
            closeBtnElement.addEventListener("click", () => {
                closeBtnElement.parentElement.parentElement.remove();
            })
        }
    })
})


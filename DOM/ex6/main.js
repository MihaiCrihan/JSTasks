//Добавить в страницу таблицу 8*8. При помощи JS кода закрасить цвет фона чтобы получилась шахматная доска.
// Использовать querySelector*
document.addEventListener('DOMContentLoaded', () => {
    const desk = document.getElementById("desk")
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // const div = document.createElement("div");
            // div.appendChild(document.createTextNode(`div`));
            // desk.appendChild(div);
        }
    }
    for (let i = 0; i < 8; i++) {
        let start = i % 2 === 0 ? 0 : 1; // if row is even then start with white otherwise start with black;
        for (let j = 0; j < 8; j++) {
            const div = document.createElement('div');
            div.classList.add(start === 1 ? "black" : "white");
            desk.appendChild(div);
            start = start === 1 ? 0 : 1;
        }
    }

})

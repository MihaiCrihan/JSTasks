document.addEventListener('DOMContentLoaded', () => {
    const ol = document.getElementById('orderedList')
    let iterate = 0;
    let id = setInterval(frame, 400);
    function frame() {
        if (iterate === 20) {
            clearInterval(id);
        } else {
            iterate++;
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`Four ${iterate}`));
            ol.appendChild(li);
            if (!(iterate % 2)) {
                li.style.background = "green"
            } else {
                li.style.background = "purple"
            }
        }
    }
})
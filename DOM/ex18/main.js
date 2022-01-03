document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById("player")
    const player2 = document.getElementById("player2")
    const block2 = document.getElementById("block2")
    let top = 0;
    let left = 0;
    let top2 = block2.offsetTop;
    let left2 = block2.offsetLeft;
    player2.style.top = top2 + "px"
    player2.style.left = left2 + "px"

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        switch (key) {
            case 'ArrowLeft':
                left = left - 15
                break;
            case 'ArrowRight':
                left = left + 15
                break;
            case 'ArrowUp':
                top = top - 15
                break;
            case 'ArrowDown':
                top = top + 15
                break;
            case 'a':
                if (left2 > block2.getBoundingClientRect().left) {
                    left2 = left2 - 15
                }
                break;
            case 'd':
                if (left2 < block2.getBoundingClientRect().right - player2.clientWidth) {
                    left2 = left2 + 15
                }
                break;
            case 'w':
                if (top2 > 0) {
                    top2 = top2 - 15
                }
                break;
            case 's':
                if (top2 < block2.clientHeight - player2.clientHeight) {
                    top2 = top2 + 15
                }
                break;
        }
        player.style.top = top + "px"
        player.style.left = left + "px"
        player2.style.top = top2 + "px"
        player2.style.left = left2 + "px"
    })
})


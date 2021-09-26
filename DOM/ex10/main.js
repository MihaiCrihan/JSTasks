document.addEventListener('DOMContentLoaded', () => {
    const centerBall = () => {
        const ball = document.getElementById("ball");
        ball.style.position = "relative";
        ball.style.left = "50%";
        ball.style.top = "50%";
        ball.style.transform = "translate(-50%, -50%)";
    }

    const topLeftBall = () => {
        const ball = document.getElementById("ball");
        ball.style.position = "relative";
        ball.style.left = "0";
        ball.style.top = "0";
    }

    const bottomLeftBall = () => {
        const ball = document.getElementById("ball");
        ball.style.position = "relative";
        ball.style.left = "0";
        ball.style.top = "100%";
        ball.style.transform = "translate(0, -100%)";
    }

    const bottomRightBall = () => {
        const ball = document.getElementById("ball");
        ball.style.position = "relative";
        ball.style.left = "100%";
        ball.style.top = "100%";
        ball.style.transform = "translate(-100%, -100%)";
    }

    const topRightBall = () => {
        const ball = document.getElementById("ball");
        ball.style.position = "relative";
        ball.style.left = "100%";
        ball.style.top = "0";
        ball.style.transform = "translate(-100%, 0)";
    }


    bottomRightBall()
})
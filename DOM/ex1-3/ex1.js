document.addEventListener('DOMContentLoaded', () => {

    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        document.body.style.backgroundColor = "green";
    }, 3000);

    document.getElementById("orange").onclick = () => {
        document.body.style.backgroundColor = "orange";
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const child = document.getElementById("child")
    const parentLeft = document.getElementById("parent-left")
    const parentRight = document.getElementById("parent-right")

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const drop = (ev) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    parentLeft.addEventListener('drop', () => {
        drop();
    })

    parentRight.addEventListener('drop', () => {
        drop();
    })

    parentRight.addEventListener('ondragover', () => {
        allowDrop()
    })

    parentLeft.addEventListener('ondragover', () => {
        allowDrop();
    });

    child.addEventListener('ondragstart', () => {
        drag()
    })

    child.ondragstart = () => {
        return false;
    };

})


document.addEventListener('DOMContentLoaded', () => {
    const child = document.getElementById("child")
    let currentDroppable = null;

    child.onmousedown = function(event) {

        let shiftX = event.clientX - child.getBoundingClientRect().left;
        let shiftY = event.clientY - child.getBoundingClientRect().top;

        child.style.position = 'absolute';
        child.style.zIndex = 10;
        document.body.append(child);


        const moveAt = (pageX, pageY) => {
            child.style.left = pageX - shiftX + 'px';
            child.style.top = pageY - shiftY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        const onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);

            child.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            child.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable !== droppableBelow) {
                if (currentDroppable) { // null если мы были не над droppable до этого события
                    // (например, над пустым пространством)
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
                    // (например, только что покинули droppable)
                    enterDroppable(currentDroppable);
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        child.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            child.onmouseup = null;
        };

    };

    const enterDroppable = (elem) => {
        elem.style.background = 'red !important';
    }

    const leaveDroppable = (elem) => {
        elem.style.background = '';
    }

    child.ondragstart = () => {
        return false;
    };

})


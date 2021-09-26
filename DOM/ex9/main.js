document.addEventListener('DOMContentLoaded', () => {
    const showNotification = (options) => {
                const alert = document.createElement("div")
                alert.style.top = `${options.top}px`;
                alert.style.right = `${options.right}px`;
                alert.innerText = `${options.message}`;
                alert.classList.add(`${options.className}`, 'alert')
                document.body.appendChild(alert);
                setTimeout(() => {
                    document.body.removeChild(alert);
                },1500)


    }
    showNotification({
        top: 10, // 10px от верхней границы окна (по умолчанию 0px)
        right: 10, // 10px от правого края окна (по умолчанию 0px)
        message: "Hello!", // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
    });

})
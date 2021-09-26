document.addEventListener('DOMContentLoaded', () => {
    const elem = document.getElementById('elem');

    console.log(elem.firstChild.nextSibling.innerText);
    console.log(elem.childNodes[0].nextSibling.innerText);
})
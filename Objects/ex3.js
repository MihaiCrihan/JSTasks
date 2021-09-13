const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const multiplyNumeric = () => {
    for (const menuKey in menu) {
        if (typeof menu[menuKey] == 'number') {
            menu[menuKey] *= 2
        }
    }
    console.log(menu)
}
multiplyNumeric();
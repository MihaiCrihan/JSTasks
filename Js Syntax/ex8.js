//Напишите код который проверит правильность username и password и выводит следующие сообщения:
//Привет, если совпадает username и password
//Неправильный пароль если username введен правильно а пароль нет
//Неправильный username, если введен неправильный username
//Ошибка Валидации, если ничего не введено
//PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)

const username = "Cronix";
const password = "test123";

const newUsername = "";
const newPassword = "";

if (username === newUsername && password === newPassword) {
    alert("Привет")
}  else if (username === newUsername ) {
    alert("Неправильный пароль")
} else if (password === newPassword) {
    alert("Неправильный username")
}  else if (!newPassword && !newUsername) {
    alert("Ошибка Валидации")
}


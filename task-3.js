let message;
let psw = prompt('Password');
const ADMIN_PASSWORD = 'admin';

if (psw === null) {
  message = 'Отменено пользователем!';
} else if (psw === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
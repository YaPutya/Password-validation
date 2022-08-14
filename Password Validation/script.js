let psw = document.getElementById('psw');
let toggleBtn = document.getElementById('toggleBtn');

let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digital = document.getElementById('number');
let specialSymbol = document.getElementById('special');
let minLength = document.getElementById('length');

function checkPassword(data) {
  const lower = new RegExp('(?=.*[a-z, а-я])');
  const upper = new RegExp('(?=.*[A-Z, А-Я])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#$%^&*])');
  const length = new RegExp('(?=.{8,})');

  // Проверка строчных
  if (lower.test(data)) {
    lowerCase.classList.add('valid');
  } else {
    lowerCase.classList.remove('valid');
  }

  // Проверка Заглавных
  if (upper.test(data)) {
    upperCase.classList.add('valid');
  } else {
    upperCase.classList.remove('valid');
  }

  // Проверка цифр
  if (number.test(data)) {
    digital.classList.add('valid');
  } else {
    digital.classList.remove('valid');
  }

  // Проверка спец символов
  if (special.test(data)) {
    specialSymbol.classList.add('valid');
  } else {
    specialSymbol.classList.remove('valid');
  }

  // Проверка количества символов
  if (length.test(data)) {
    minLength.classList.add('valid');
  } else {
    minLength.classList.remove('valid');
  }
}

// Показать / скрыть пароль
toggleBtn.onclick = function () {
  if (psw.type === 'password') {
    psw.setAttribute('type', 'text');
    toggleBtn.classList.add('hide');
  } else {
    psw.setAttribute('type', 'password');
    toggleBtn.classList.remove('hide');
  }
};

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє
// його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті
// data-length. // 6
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже
// додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");
const maxLength = Number(input.dataset.length);

input.addEventListener("blur", lengthValidation);

function lengthValidation() {
  if (input.value.length === maxLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.add("valid");
  }
}
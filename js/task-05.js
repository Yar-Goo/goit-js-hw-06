// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// 1. створити змінні для інпуту і спану
// 2. повісити на інпут слухача подій
// 3. зв'язати текст спану зі значенням інпуту

const input = document.querySelector("#name-input");
const welcomeSpan = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  welcomeSpan.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    welcomeSpan.textContent = "Anonymous";
  }
}
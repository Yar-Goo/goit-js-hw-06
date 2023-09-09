// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по
// кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 1. знайти кнопку і повісити на неї слухача подій
// 2. при натиску на кнопку має виконуватись функція getRandomHexColor
// і результат рандому записується в спан
// 3. міняється колір боді

const changeColorBtn = document.querySelector(".change-color");
const colorNameSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  colorNameSpan.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorNameSpan.textContent;
});

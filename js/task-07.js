// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font-size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const spanChanges = document.querySelector("#text");

spanChanges.style.fontSize = input.value + "px";

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanChanges.style.fontSize = event.currentTarget.value + "px";
}
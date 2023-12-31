// 1: Порахує і виведе в консоль кількість категорій в
// ul#categories,  тобто елементів li.item

const categoriesList = document.querySelector("#categories");
const itemsList = categoriesList.children;
    console.log("Number of categories: ", itemsList.length);


// 2: Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).

const itemsListArray = [...itemsList];

itemsListArray.forEach(function (item) {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.querySelectorAll("li").length);
});

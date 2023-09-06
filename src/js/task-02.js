const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// 1. створити змінну, яка буде зберіг. для ul
  const ingredientsListEl = document.querySelector("#ingredients");

// 2. написати функцію, яка буде повертати масив такої довжини як і масив рядків (map)
  const ingredientsItems = ingredients.map((ingredient) => {
// 3. створювати на кожній ітерації li
  const ingredientItemEl = document.createElement("li");
// 4. в li вставляти textContent ітерації
  ingredientItemEl.textContent = ingredient;
// 5. додавати клас item
  ingredientItemEl.classList = "item";
// console.log(ingredientItemEl);

  return ingredientItemEl;
  });

// 6. додасть усі елементи в змінну ul
// (там масив, тому треба рест)
ingredientsListEl.append(...ingredientsItems);
//console.log(ingredientsListEl);
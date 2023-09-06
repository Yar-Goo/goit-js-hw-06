//Лічильник складається зі спану і кнопок, 
//які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//<div id="counter">
  //<button type="button" data-action="decrement">-1</button>
  //<span id="value">0</span>
  //<button type="button" data-action="increment">+1</button>
//</div>

//Створи змінну counterValue, в якій буде зберігатися
//поточне значення лічильника та ініціалізуй її значенням 0.

//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this.value = initialValue;
  this.step = step;

  this.refs = this.getRefs(rootSelector);
  this.bindEvents();
};

CounterPlugin.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.value = refs.container.querySelector("#value");

  return refs;
};

CounterPlugin.prototype.bindEvents = function () {
  this.refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.updateValueUI();
  });
  this.refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this.refs.value.textContent = this.value;
};

CounterPlugin.prototype.increment = function () {
  this.value += this.step;
};

CounterPlugin.prototype.decrement = function () {
  this.value -= this.step;
};

const counter = new CounterPlugin({ rootSelector: "#counter", step: 1 });
console.log(counter);
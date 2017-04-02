
var id = document.getElementById('app');

var className = document.getElementsByClassName('class-name')[0];
var q = document.getElementsByClassName('q');

console.log(id);
console.log(className);
console.log(q);

/**
 * Нативная поддержка как jq
 * @type {Element}
 */
var app = document.querySelector('#app');

console.log(app);

/**
 * Выберет только первый элемент
 * @type {Element}
 */
var qq = document.querySelector('.q');

console.log(qq);

/**
 * Выбрать все элементы
 * @type {NodeList}
 */
var qqAll = document.querySelectorAll('.q');

console.log(qqAll);

var element = document.querySelector('.test > h1');

console.log(element);
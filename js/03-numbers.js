/*Парс числа  Number.parseFloat Number.parseInt*/
let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(typeof result);

let elementHeight = '200.74';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

// метод числа работа с деньгами

let salary = 1300.16472;
salary = Number(salary.toFixed(2));
// salary = Number(salary);
console.log(salary);

// Привиденние преобразование к числу

let quantity = '30';
let value = 'Эту строчку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value));

// Обьект Math
// возвидение в степень

// console.log(Math.PI);

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// console.log(result);

// аналог функции степени

// console.log(2 ** 5);


//  Напиши скрипт который просит пользователя ввести число в степень,
//      и возводит число в эту степень и выводит результат в консоль

// 1. попросить ввести число и сохранить в переменную
let base = prompt('Давай число');
base = Number(base);

console.log(base);

// 2. попросить ввести степень и сохранить в переменную
let power = prompt('Давай степень');
power = Number(power);

console.log(power);
// 3. возводит число в эту степень и выводит результат в консоль

// let result = base ** power;

// console.log(result);

// генерим псевдослучайные числа

// console.log(Math.random());
//Math.random() * (max - min) +min
// console.log(Math.random() * (max - min) + min);

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);
// Math.round - округляет

//пример изминения цвета боди

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;



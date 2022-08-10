//Оператор ветвления if


//Оператор ветвления if...else
//Оператор ветвления else ...if...


// Тернарный оператор

const balance = -1000;
// let massege;

// if (balance > 0) {
//     massege = 'Позитивный баланс';
// } else {
//     massege = 'Негативный баланс';
// }

const massege = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(massege);

const salary = 100;

if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('Уровень 3');
} else {
    console.log('Уровень 4')
}

// console.log(salary);

//Блочные области видимости переменных

if (true) {
    const a = 5;

    console.log(5);
}
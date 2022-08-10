// Цикл for

// for (инициализация; условие; пост - выражение) {

// }
// for (let i = 0; i < 5; i += 1 ) {
//     console.log(i);
// }

// Pre-increment (++a)  и Past-increment (a++)
// for (let i = 0; i < 5; i++ ) {
//     console.log(i);
// }


// Напиши скрипт который подсчитывает общую сумму зарплат работников
// Кол-во работников хранится в переменной employees
//Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывети в консоль

// сделать переменные
const minSalary = 500;
const maxSalary = 5000;
const employees = 6;
let totalSalary = 0;

// перебрать работников у цикле

// for (let i = 1; i <= employees; i += 1) {
//     //сгенирить случ зп
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`ЗП работника номе ${i} - ${salary}`);

//     // прибавить к тотал

//     totalSalary += salary;
// }

//  console.log('totalSalary:', totalSalary);


//Напиши скрипт который подсчитывает сумму  всех четырёх чисел
// которые входят в диапазон чисел в переменных от min до max
// Например если min=9 и max=5, то диапазон 0-5, и в нем два чётных числа - 2 и 4
// их сумма 6

const min = 6;
const max = 13;
let total = 0;

//фор от мин до макс с шагом в 1
for (let i = min; i <= max; i += 1) {
    
//проверяем остаток от деления
    // console.log(i);
    if (i % 2 !== 0) {
        console.log('Не чётное: ', i);
        continue;
    }
// пишем сумму
    console.log('чётное: ', i);

    total += 1;
}




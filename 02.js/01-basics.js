//Знакомство с масивом
//- Обьявление
//- Индексация
//- Длина
// -Индекс последнего элемента
// - Переопределение

// 'Mango', 'Kiwi', 'Poly', 'Ajax'

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.table(friends);

// console.log(friends[7]);
// friends[1] = 'bfjsfjs';

// console.log(friends);


// const lastIndex = friends.length - 1;
// console.log(lastIndex);



// Передача по ссылке и по значению
// - Примитивы и сложные типы
// - Ссылочное равенство (referential equality)


// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

let a = [1, 2, 3];
let b = a;

// console.log(a);
// console.log(b);

// a[0]= 1000;

// console.log(a);
// console.log(b);


// Перебор (итерация) массива
// - for - если нужен индекс или нужно изменить элемент массива
// - for..of - если индекс не нужен и в массиве ничего менять

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);


// for (let i = 0; i <= friends.length - 1; i += 1) {
//     console.log(friends[i]);
// }

for (const friend of friends) { 
    console.log(friend);
}

// console.table(friends);



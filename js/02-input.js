// Ввод пользователя
// Методы window.confirm() window.prompt()

// Хотите продлить подписку

const shouldRenew = confirm("Хотите продлить подписку?") ;
console.log(shouldRenew);

// Введите кол-во товаров

const quantity = prompt('Введите кол-во товаров') ;
console.log(quantity);

// всегда выводит строку, если необходимо число применяем кнструктор

// let quantity = prompt('Введите кол-во товаров');
// quantity = Number(quantity)
// console.log(quantity);
// console.log(typeof quantity);
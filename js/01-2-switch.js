//Напиши скрипт выбора стоимости отеля по кол-ву звёзд
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

//Если в переменной stsrs что-то кроме чисел 1-5, вывести строку
// 'Такого количества звезд нет'

// const start = 8;
// let price;

// if (start === 1) {
//     price = 20;
// } else if (start === 2) {
//     price = 30;
// } else if (start === 3) {
//     price = 50;
// } else if (start === 4) {
//     price = 70;
// } else if (start === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }

// switch (start) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }

// console.log(price);



// Напиши скрипт выбора стоимости отеля по кол-ву звёзд
// 1,2 - 20$, 3,4 - 30$, 5 - 120$

const start = 4;
let price;

// if (start === 1 || start === 2) {
//     price = 20;
// } else if (start === 3 || start === 4) {
//     price = 30;
// } else if (start === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }

// console.log(price);

switch (start) {
    case 1:
    case 2:
        price = 20;
        break;
    case 3:
    case 4:
        price = 50;
        break;
    case 5:
        price = 120;
        break;
    default:
        console.log('Такого количества звезд нет');
}
// console.log(price);



//Напиши скрипт выбора опции доставки товара.
// Опция храниться в переменной option:
// 1 - самовывоз, 2 - курьер, 3 почтв

// В переменной massage  сщщбщение в зависимости от опции
// 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
// 'Курьер доставит заказ завтра с 9:00 до 18:00'
// 'Посылка будет отправлена сегодня'
// 'Вам перезвонит менеджер'

const option = 5;
let message = '';

switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
    default:
        message = 'Вам перезвонит менеджер';
}

console.log(message);
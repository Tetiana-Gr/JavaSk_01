// Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 1];

// сделать переменную total до цикла

let total = 0;

// перебрать масив

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += +cart[i];
// }

//или
for (const value of cart) {
    total += value;
}

console.log('Total:', total);
//каждый элемент приплюсовать к total
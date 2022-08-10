//Длина строчки, свойство lenght

const message = 'В этой строке 26 символов.';

// console.log(message.length);

//Конкатенация строк

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

//Задание Нпиши скрипт который выведет строку в формате:
//Гость x y поселяеться в z номер q
// подставьте вместо x y z q значение переменной

const room = 716;
const type = 'VIP';

const welcomeMsg = `Гость ${firstName} ${lastName} поселяеться в ${type} номер ${room}`;

console.log(welcomeMsg);

//шаблонные строки template strings

const quantity = 30;
const orderMsg = `Вы заказываете ${quantity} холодильников`;

console.log(orderMsg);


//нормализация с методом toLowerCase()
//Что ищем?
const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();

console.log(normalizedBrand);

//slice() кусок строки


//Поиск в строке с методом incLudes()

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const strings1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!'
const strings2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const strings3 = 'Рекламная компания #fatlivesmatter';

console.log(strings1.includes(blacklistedWord1));
console.log(strings1.includes(blacklistedWord2));

console.log(strings2.includes(blacklistedWord2));

const normalizedString2 = strings2.toLowerCase();

console.log(normalizedString2.includes(blacklistedWord2));
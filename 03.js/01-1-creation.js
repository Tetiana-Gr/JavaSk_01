// Обьекты(делаем плейлист музыки: имя, рейтинг, треки, кол - во треков
// - Литерал обьекта
//     - Свойста, ключи(имя) и значение
//  -Как отключить обьект от области видимости

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['trek-1', 'trek-2', 'trek-3'],
//     trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//     console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//     return { a: 5 };
// };
// console.log(rtfm());

// Доступ к свойство
//     - Obj.key
//     - obj [`key`]
//     - Отсутствующие свойства

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['trek-1', 'trek-2', 'trek-3'],
    trackCount: 3,
};

// console.log(playlist.rating);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist['rating']);

// console.log(playlist[propertyName]);

//     Короткая запись свойства

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    username,
    email,
};

// console.log(signupData);

//     Вычисляемые свойства
// input name = color value tomato

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};
    
// console.log(colorPickerData);

//ссылочный тип {} === {}

console.log([] === []);

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a);

console.log(a);
console.log(b);

//масивы и функции это обьекты

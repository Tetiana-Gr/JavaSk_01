// Делаем slug в URLL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов

// - Нормализируем строку
//     - Разбиваем по словам
// - Сшиваем в строку с разделителями

// Должно получиться top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React Framework';

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
console.log(words);

const slug = words.join('-');
console.log(slug);

// или так перечисление методов

const slug1 = title.toLowerCase().split(' ').join('-'); 
console.log(slug1);




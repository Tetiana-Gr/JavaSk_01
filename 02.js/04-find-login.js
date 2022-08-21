// напиши скрипт поиска логина
// - Если логина нет, вывести сообщение "Пользователь [логин] не найден"
// - Если нашли логин, вывести сообщение "Пользователь [логин] найден"

// - Сначала через for
// -Потом через for...of
// - Логика break
// - Метод includes() с тернарным оператором

const logins = ['m4ngoDone', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginTofFind = 'poly1scute';
// let message = '';


// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginTofFind) {
//         message = `Пользователь ${loginTofFind} найден`;
//         break
//     }

//      message = `Пользователь ${loginTofFind} не найден`;
// }

///ИЛИ ТАК

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginTofFind}: `, login === loginTofFind);

//     if (login === loginTofFind) {
//         console.log('!!!!');
//         message = `Пользователь ${loginTofFind} найден`;
//         break
//     }

//      message = `Пользователь ${loginTofFind} не найден`;
// }


// console.log(message);

// ИЛИ так

const message = logins.includes(loginTofFind) ? `Пользователь ${loginTofFind} найден` : `Пользователь ${loginTofFind} не найден`;

console.log(message);
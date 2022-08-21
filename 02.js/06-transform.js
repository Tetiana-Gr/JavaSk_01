//Напиши скрипт, который обьединяет все элементы массива в одно строковое значение
// Элементов может быть произвольное кол-во
// пусть элементы масива в строке будут разделены запятой
// сначала через for
// потом через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

//или проще так

const string = friends.join('--');
console.log(string);


//должно получиться 'Mango,Poly,Kiwi,Ajax'
// Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяються).

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {

    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

  console.log(smallestNumber);


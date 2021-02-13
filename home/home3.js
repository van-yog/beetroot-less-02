/*
 * Создать функцию filter(arr, fn), которая
 *  - принимает в качестве аргументов массив arr и функцию fn
 *  - возвращает новый массив, который содержит только те элементы arr,  для которых fn возвращает true.
 */

const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, fn) {
  let filtered = [];

  arr.forEach((elem) => fn(elem) && filtered.push(elem));

  return filtered;
}

// Проверка - вернуть массив с элементами значение которых больше 50
const filteredArr = filter(arr, (item) => item > 50);

console.log(filteredArr); //   [66, 55]]

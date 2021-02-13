/*
 Todo:
Функция subtract возвращает разность двух чисел a - b
Реализовать функцию, которая
- принимает в аргумент функцию add
- возвращает разность  b - a
*/

function subtract(a, b) {
  return a - b;
}

function reverce(fn) {
  return (a, b) => fn(b, a);
}

/* ====== usage  ====== */

const fn = reverce(subtract);
console.log(fn(10, 5));

/* 
Todo:  Реализовать функцию которая бы при клике на любой
из элементов box присваивала стиль background-color: red
*/
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

// Каррирование
const curry = (fn) => {
  return (...args) => {
    return fn.bind(null, ...args);
  };
};

function fn(el, ev, color) {
  el.addEventListener(ev, (e) => (e.target.style.backgroundColor = color));
}

const curryFn = curry(fn);
console.log(curryFn);

const b1 = curryFn(box1);

b1("click", "red");
b1("mouseover", "yellow");
b1("mouseout", "transparent");

const b2 = curryFn(box2, "click");
b2("purple");

const b3 = curryFn(box3, "click", "blue");
b3();

// Тоже рабочий код с другой реализацией.
// function fn(el) {
//   return (ev) => {
//     return (color) => {
//       el.addEventListener(ev, (e) => (e.target.style.backgroundColor = color));
//     };
//   };
// }

// // usage
// const b1 = fn(box1);

// b1("mouseover")("red");
// b1("mouseout")("transparent");

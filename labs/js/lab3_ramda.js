import { curry, __ } from "ramda";

/* 
Todo:  Реализовать функцию которая бы при клике на любой
из элементов box присваивала стиль background-color: red
*/
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

// Каррирование

const fn = curry((el, ev, color) => {
  el.addEventListener(ev, (e) => (e.target.style.backgroundColor = color));
});

const boxPurple = fn(__, "mouseover", __);
boxPurple(box1, "green");
boxPurple(box3, "yellow");
boxPurple(box2, "red");

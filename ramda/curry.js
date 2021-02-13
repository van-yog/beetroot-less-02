import { curry, pipe, pluck, uniq } from "ramda";

/* 
- получить ids стандартным способом   
- получить свойство объекта через curry функцию  - get   
- показать каррирование map, как пример - getNames    
https://swapi.dev/api/films    -> results, titles  
*/

const users = [
  { id: 1, name: "Bill", age: 20 },
  { id: 2, name: "Rachel", age: 30 },
  { id: 3, name: "Tom", age: 30 },
  { id: 4, name: "Jeck", age: 20 },
  { id: 5, name: "Ashley", age: 40 },
  { id: 6, name: "John", age: 30 },
];

const get = curry((prop, ob) => ob[prop]);
const map = curry((fn, arr) => arr.map(fn));

// const getAges = map(get("age"));
const getItems = pipe(pluck, uniq);

console.log(getItems("age", users));

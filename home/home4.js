/*
1. В элемент select вывести сгруппированные options 

надо делать следующие шаги
- из массива объектов получить массив свойств, 
  например массив содержащий все возраста   
- из массива возрастов получить массив их уникальных значений 
- сортировка полученного массива
- создание массива с элементами options
- вывод в select

Задачу реализовать с использованием  pipe или  composition 

Клиентский код должен иметь возможность переопределять 
свойство объектов users, которое нужно группировать 
         name, age или depratment 
и выводить в элемент select
!!! При этом бизнес-логика не должна меняться   
*/

/*  =============== Data =============  */

let users = [
  { id: 1, name: "John", age: "20", department: "HR" },
  { id: 2, name: "Sasha", age: "30", department: "Marketing" },
  { id: 3, name: "Bill", age: "40", department: "Finance" },
  { id: 4, name: "Ashley", age: "20", department: "IT" },
  { id: 5, name: "Rachel", age: "40", department: "IT" },
  { id: 6, name: "Tom", age: "30", department: "HR" },
  { id: 7, name: "Steve", age: "30", department: "Marketing" },
  { id: 8, name: "Jim", age: "40", department: "IT" },
  { id: 9, name: "Willy", age: "20", department: "Finance" },
];

const products = [
  { id: 1, title: "Panasonic", price: 50 },
  { id: 2, title: "Samsung", price: 34 },
  { id: 3, title: "Grundic", price: 40 },
  { id: 4, title: "Electrolux", price: 34 },
  { id: 4, title: "Samsung", price: 50 },
  { id: 4, title: "Panasonic", price: 40 },
];

/*  Business logics */
const getProp = () => {};
const groupedItems = () => {};
const sortBy = () => {};
const getOpts = () => {};

const pipe = () => {};

/* =========== client code ===============  */
const usersSelect = document.getElementById("users-select");


//  Usage:
// getProps может принимать department, age, name, price, title
/* 
const userFn = pipe(getProp("department"), groupedItems, sortBy, getOpts);
const productFn = pipe(getProp("price"), groupedItems, sortBy, getOpts);

const usersOpts = userFn(users);
const productsOpts = productFn(products);

usersSelect.innerHTML = usersOpts.join("");
productsSelect.innerHTML = productsOpts.join("");
 */

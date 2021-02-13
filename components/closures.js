function fn() {
  return "Hello";
}
console.log(fn());

/* ===== closures features */
/* 
1. В замыкания попадают только те сущности на которые
ссылается внутренняя функци 
*/
/*
function test() {
  const a = 5;
  const b = 10;
  return function () {
    debugger;
    console.log(`${a}`);
  };
}
const fn = test();
fn();
*/

/* 
2. В замыкания также попадают аргументы функций 
Между вызовами функций данные в замыкании не уничтожаются 
 */
/*
function fn(greeting) {
   return function (firstName) {
      console.log(`${greeting} ${firstName}`);
   };
}
*/

/* 
3. Даже если мы уничтожим внешнюю функцию, замыкание будет работать
*/
/*
function fn(greeting) {
   return function (firstName) {
      console.log(`${greeting} ${firstName}`);
   };
}
 */

/*
4. В замыкания также входят функции родительского LE,
которые вызываются в  возвращаемой функции
*/
/* 
function fn() {
   const firstName = "Bill";
   function inner() {
      return "Hello " + firstName;
   }
   return function () {
      console.log(inner());
   };
}

const f = fn();
f();
*/


/* 
5. Пример замыкания функции на глобальную переменную
*/
/* 
let out;
function fn() {
   out = function (name) {
   console.log(`Hello ${name}`);
   };
}

out("Bill"); // Error - почему ? 
*/
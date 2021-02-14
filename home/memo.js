/* 
Есть функция fact котороя проводит сложные вычисления
Хотелось бы кешировать результаты выполнения этой функции, то есть 

- первый вызов - функция проводит вычисления и результат запоминается в кеше 
- повторный вызов функции -  результат возвращается из кеша
  
Задание  - написать функцию memo которая будет мемоизировать результат 
*/

const fetchItem = (id, ob) => {
  let start = new Date().getTime();
  while (new Date().getTime() - start < 1000);
  return { id, ...ob };
};

const memo = (f) => {
  let cashe = new Set();
  return (...arg) => (!cashe[arg] && (cashe[arg] = f(...arg))) || cashe[arg];
};

const memoFetchItem = memo(fetchItem);

let res;
console.time("NO_CACHE");
res = memoFetchItem(5, { name: "Bill" });
console.timeEnd("NO_CACHE");
console.log("RES: ", res);

console.log("\n");

console.time("FROM_CACHE");
res = memoFetchItem(5, { name: "Bill" });
console.timeEnd("FROM_CACHE");
console.log("res from cache: ", res);

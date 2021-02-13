/* 
В массив сохранили 3 функции. Но вызов каждой из них 
выводит результат = 3
Задача - исправить код так , чтобы вывод был таким 
fn[0](); -> 0
fn[1](); -> 1
fn[2](); -> 3
❗❗❗ Данную задачу решить с использованием ES 5 (то есть без let)
*/

function buildFunctions() {
  let out = [];
  for (var i = 0; i < 3; i++) {
    out.push(
      (function (j) {
        return () => console.log(j);
      })(i)
    );
  }
  return out;
}
const fn = buildFunctions();

// console.log(fn);

fn[0]();
fn[1]();
fn[2]();

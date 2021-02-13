/* 
 Задачи
1. С помощью debugger проанализировать почему получается
так что при клике на любой элемент li мы в alert() получаем цифру5
а по логике должны получать номер элемента на который кликнули

2. С помощью замыкания сделать так, чтобы при клике на элемент
   li получали его номер (let НЕ ИСПОЛЬЗОВАТЬ)
   
3. Выполнить задачу 2 но при этом используя объявление
   итерационной переменной через let 
*/

const list = document.getElementById("list"),
  els = list.getElementsByTagName("li");

for (var i = 0, len = els.length; i < len; i++) {
  els[i].onclick = ((i) => {
    return () => alert(++i);
  })(i);
}

function alertOnClick(i) {
  return function () {
    debugger;
    console.log(i);
  };
}

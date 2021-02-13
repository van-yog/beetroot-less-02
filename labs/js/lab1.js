/* 
Есть кнопка. Надо установить, был ли уже клик по ней или нет.
Как правило для этого создается объект, и в этом
объекте можно фиксировать состояние кнопки  - например присваивать
свойству объекта clicked = true
Но в данном случае при обработке события this указывает не на объект а на button

ЗАДАЧА - написать свою функцию bind котоая бы меняла this при обработке события.
*/

const ob = {
  clicked: false,

  click: function () {
    this.clicked = true;
    alert("Button is clicked");
    console.log(ob.clicked);
  },
};
const b = document.getElementById("btn");
b.addEventListener("click", ob.click);

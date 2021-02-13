/* 
В языках программировани Java, C# есть такое понятие как
перегрузка функцийи методов  
Это возможность определять несколько функций с одним и тем
же именем, но с разными параметрами.
В JavaScript одним из способов, является такой 

🖍 сначала создаем объект, а затем в него вводим методы
    под одним и тем же именем но отличающиеся своими функциями
   в каждом случае перегрузки.Например

const ob = {};
addMeth(ob, "print", function () {});
addMeth(ob, "print", function (a) {});
addMeth(ob, "print", function (a, b) {});

Задача - используя замыканий написать функцию addMeth которая будет
для каждой перегрузки  создавать отдельную анонимную функции 
*/

function addMeth(ob, name, fn) {
  let id = fn.length;

  ob.hasOwnProperty("arrFn")
    ? (ob.arrFn[id] = fn)
    : ((ob.arrFn = []), (ob.arrFn[id] = fn));

  ob[name] = function (...rest) {
    return this.arrFn[rest.length].call(this, ...rest);
  };
}

/*  =========== Usage =======  */
const persons = {
  artists: ["Paul McCartney", "Justin Bieber", "Kelly Minogue"],
};

addMeth(persons, "print", function () {
  return this.artists;
});

addMeth(persons, "print", function (name) {
  return this.artists.filter((artist) => artist.indexOf(name) === 0);
});

addMeth(persons, "print", function (first, last) {
  return this.artists.filter((artist) => artist === first + " " + last);
});

console.log(persons.print());
console.log(persons.print("Paul"));
console.log(persons.print("Justin", "Bieber"));

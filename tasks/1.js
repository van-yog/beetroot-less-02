/*  В этом коде засоряется глобальная область  переменной  lang
Как с помощью замыканий сделать так, чтобы избавиться от 
глобальной переменной lang в глобальной области ? 
====== usage 
const bill = greet("Bill");
bill("en");
bill("es");
*/

function lang(language) {
  return function (name) {
    if (language === "en") {
      console.log(`Hello ${name}`);
    }
    if (language === "es") {
      console.log(`Hola ${name}`);
    }
  };
}

const greatEn = lang("en");
greatEn("Bill");

const greatEs = lang("es");
greatEs("Rodrigo");

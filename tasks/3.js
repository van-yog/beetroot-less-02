import { curry } from "ramda";
/* Todo:
Есть 3 логгера, которые выводят разные заголовки и текст сообщений
Задача - реализовать такую же функциональность выполняемую одной функцией  
---- usage
    log("Message 1");
    log("Message 2");
    log("Message 3"); 
*/
const log = curry((title) => (msg) => console.log(`${title}: ${msg}`));

const log1 = log("Error");
log1("Message 1");
log1("Message 2");
log1("Message 3");

const log2 = log("Warning");
log2("Message 4");
log2("Message 5");

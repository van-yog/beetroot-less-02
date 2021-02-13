import { sort, sortWith, prop, ascend, descend } from "ramda";
const users = [
  { name: "Bill", age: 31, height: 165 },
  { name: "Sally", age: 29, height: 173 },
  { name: "Tom", age: 32, height: 163 },
  { name: "Fill", age: 28, height: 161 },
  { name: "Ashley", age: 29, height: 167 },
  { name: "Pete", age: 29, height: 166 },
  { name: "Bill", age: 37, height: 178 },
];

/* Провести сортировку по height, age, name одновременно 
{ sort, sortWith, prop, ascend, descend }
*/

const sortUsers = sortWith([ascend(prop("age")), descend(prop("height"))]);

console.log(sortUsers(users));

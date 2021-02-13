import { sort, head, prop, pipe } from "ramda";
/* Найти игрока с наибольшим  score */

const players = [
  { name: "Bill", score: 4 },
  { name: "Tom", score: 5 },
  { name: "Julia", score: 2 },
  { name: "John", score: 4 },
  { name: "Dashley", score: 6 },
];

const sortByScrore = sort((a, b) => b.score - a.score);
const sortByName = sort((a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);

const getName = prop("name");

const getTopPlayer = pipe(sortByName, head, getName);

console.log(getTopPlayer(players));

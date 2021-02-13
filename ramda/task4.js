import { compose, tail, split, map, fromPairs, pipe } from "ramda";
/* Показать композицию функций */
/* { compose, tail, split, map, fromPairs } */

const qs = "?name=Bill&surname=Geitz&age=66";

// const parseQs = compose(fromPairs, map(split("=")), split("&"), tail);
const parseQs = pipe(tail, split("&"), map(split("=")), fromPairs);

console.log(parseQs(qs));

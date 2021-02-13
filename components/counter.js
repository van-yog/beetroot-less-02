function makeCounter(start, step) {
  return () => (start += step);
}

let counter = makeCounter(5, 2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCounter(0, 10);
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

function mult(item, division) {
  return () => (item *= division);
}

let umnozhenie = mult(2, 2);
console.log(umnozhenie());
console.log(umnozhenie());
console.log(umnozhenie());

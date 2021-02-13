const curry = (fn) => {
  return (...args) => {
    return fn.bind(null, ...args);
  };
};

const title = "BEETROOT ACADEMY Ivan Kharchenko";

/* todo -> перевести строку в нижний регистр */
const split = curry((sep, str) => str.split(sep));
const join = curry((sep, arr) => arr.join(sep));
const map = curry((fn, arr) => arr.map(fn));
const toLower = (x) => x.toLowerCase();
const toUpper = (x) => x.toUpperCase();

// В compose функции выполняются по принципу стека ( первый пришел, последний вышел)
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
// В pipe функции выполняются по принципу очереди ( первый зашел, первый вышел)
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const slugify = compose(join("-"), map(toLower), split(" "));
const slugify2 = pipe(split(" "), map(toUpper), join("--"));

// const slugify = join(" ")(map(toLower)(split(" ")(title)));

// const splittedText = split(" ")(title);
// const mappedText = map(toLower)(splittedText);
// const out = join(" ")(mappedText);

console.log(slugify(title));
console.log(slugify2(title));

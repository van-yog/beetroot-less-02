const curry = (fn) => {
  return (...args) => {
    return fn.bind(null, ...args);
  };
};

const pipe = (f) => f;

const split = curry((separator, string) => string.split(separator));
const join = curry((separator, arr) => arr.join(separator));
const map = curry((fn, arr) => arr.map(fn));
const toLower = (x) => x.toLowerCase();

const slugify = pipe(split(" "), map(toLower), join("-"));

console.log(slugify("Beetroot Arademy"));

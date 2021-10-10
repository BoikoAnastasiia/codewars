const addOne = a => a + 1;
const multTwo = b => b * 2;

const compose =
  (...functions) =>
  val =>
    functions.reduceRight((prev, fn) => fn(prev), val);

console.log(compose(addOne, multTwo, addOne, addOne)(2));

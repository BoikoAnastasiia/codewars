// const ensureIsArray = source => (Array.isArray(source) ? source : [source]);

// console.log(ensureIsArray([1, 2]));
// console.log(Array.of({ 1: '2', 3: '3' }));

//  Should return value using provided field path
//  @param {*} source object or array to get value from
//  @param {*} path string | number array or string like: some.field.path.array.1

// const example = { a: { b: { c: [1, 2, 3] } } };

// const get = (source, path) =>
//   typeof path === 'string'
//     ? path.split('.').reduce((obj, index) => obj[index], source)
//     : path.reduce((obj, index) => obj[index], source);

// console.log(get(example, 'a.b.c.1'));

// get(example, 'a.b.c'); /* [1,2,3] */
// get(example, 'a.b.c.1'); /* 2 */
// get(example, ['a', 'b', 'c']); /* [1,2,3] */

/**
 * Should deep compare objects and ensure all nested fields are equal
 * @param {object} a
 * @param {object} b
 
 *
 * deepEqual(a, b) -> true
 * deepEqual(a, c) -> false
 * deepEQual(a, d) -> false
 */

// const a = { field: { nested: 'value' } };
// const b = { field: { nested: 'value' } };
// const c = { field: { nested: 'value1' } };
// const d = { field: { nested: 'value', other: 'field' } };

// const deepEqual = (a, b) => {
//   return JSON.stringify(a) == JSON.stringify(b);
// };

// console.log(deepEqual(a, d));
//
/**
 * Should decorate function to add params count validation
 * @param {number | number[]} count could be a number or [number, number] to specify min and max params count
 * @param {function} func
 */
// const withParamsCountValidation = (count, func) => {
//   if (typeof count === 'number' && func.arguments.length !== count.length) {
//     new Error`You should pass no more than ${count} parameters`();
//   }
//   if (
//     Array.isArray(count) &&
//     count.length === 2 &&
//     func.arguments.length >= count[0] &&
//     func.arguments.length <= count[1]
//   ) {
//     true;
//   }
//   new Error`You should pass at least ${count[0]} and no more than ${count[1]} parameters`();
// };

const withParamsCountValidation = (count, func) => {
  function checkFunc() {
    func.apply(null, arguments);
    return [...arguments];
  }
  if (typeof count === 'number' && checkFunc().length !== count.length) {
    new Error`You should pass no more than ${count} parameters`();
  }
  if (
    Array.isArray(count) &&
    count.length === 2 &&
    checkFunc().length >= count[0] &&
    checkFunc().length <= count[1]
  ) {
    true;
  }
  new Error`You should pass at least ${count[0]} and no more than ${count[1]} parameters`();
};

console.log(returnArguments(1, 4, 5));

/**
 * Should return flatten array
 * Should flatten deep nested arrays as well
 * @param {*} source array to flatten
 * const example = [1,2,[1,2,3],4]
 * flatten(example) -> [1,2,1,2,3,4]
 */

// const example = [
//   1,
//   2,
//   'wdwdww',
//   [1, 'adawdddddddad', 3, [1, 'awdadawaw', 3]],
//   1,
//   2,
//   3,
//   [1, 2, 3],
// ];
// const flatten = source => {
//   return JSON.stringify(source)
//     .toString()
//     .match(/\d/gi)
//     .map(el => +el);
// };

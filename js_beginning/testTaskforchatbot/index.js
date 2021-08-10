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

/**
 * Should decorate function to add params count validation
 * @param {number | number[]} count could be a number or [number, number] to specify min and max params count
 * @param {function} func
 */
const withParamsCountValidation = (count, func) => {};

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

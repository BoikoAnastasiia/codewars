// const ensureIsArray = source => (Array.isArray(source) ? source : [source]);

// console.log(ensureIsArray([1, 2]));
// console.log(Array.of({ 1: '2', 3: '3' }));

//  Should return value using provided field path
//  @param {*} source object or array to get value from
//  @param {*} path string | number array or string like: some.field.path.array.1

const example = { a: { b: { c: [1, 2, 3] } } };

const get = (source, path) => {
  const normilizedPath = path.toString().match(/[a-z\d]/gi);
  for (let i = 0; i < normilizedPath.length; i++) {
    console.log(normilizedPath[i]);
  }
  //   for (things in source) {
  //     console.log(things);
  //   }
};

// console.log(example['a']['b']['c']);
console.log(get(example, 'a.b.c'));

// get(example, 'a.b.c'); /* [1,2,3] */
// get(example, 'a.b.c.1'); /* 2 */
// get(example, ['a', 'b', 'c']); /* [1,2,3] */

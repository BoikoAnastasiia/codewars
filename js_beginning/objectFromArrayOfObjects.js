const data = [
  { name: 'foo', type: 'fizz', val: 9 },
  { name: 'boo', type: 'buzz', val: 3 },
  { name: 'bar', type: 'fizz', val: 4 },
  { name: 'car', type: 'buzz', val: 7 },
];

const reduced = data.reduce((acc, item, index) => {
  acc[index] = item;
  return acc;
}, {});

console.log(reduced);

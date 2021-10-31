const min = (arr, toReturn) =>
  toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

console.log(min([1, 2, 3, 4, 5], 'index'));

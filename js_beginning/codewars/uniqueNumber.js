function findUnique(arr) {
  return arr.find(value => arr.indexOf(value) === arr.lastIndexOf(value)) || -1;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); //6
// console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2])); //1

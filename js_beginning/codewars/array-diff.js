function arrayDiff(a, b) {
  if (a.length == 0 || b.lenght == 0) {
    return a;
  }
  return a.reduce((acc, number, index, array) => {
    for (let i = 0; i < b.length; i++) {
      if (a.includes(b[i])) {
        acc.splice(acc.indexOf(b[i]), 1);
      }
    }
    return acc;
  }, a);
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); //[1,3]
// console.log(arrayDiff([], [4, 5]));
// console.log(arrayDiff([1, 8, 2], []));

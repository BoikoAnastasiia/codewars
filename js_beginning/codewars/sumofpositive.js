function positiveSum(arr) {
  return arr.filter(el => el >= 0).length > 0
    ? arr.filter(el => el >= 0).reduce((acc, el) => acc + el)
    : 0;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
// assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
// assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
// assert.strictEqual(positiveSum([]), 0);
// assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
// assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);

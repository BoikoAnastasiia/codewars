const arr = [1, 2, 3];

const fn1 = arguments => (arguments = []);
fn1(arr);

console.log(arr.length); // 3

const fn2 = arr => (arr.length = 0);
fn2(arr);

console.log(arr.length); //0

let arr2 = [6, 5, 4];
arr2 = [];
console.log(arr2.length);

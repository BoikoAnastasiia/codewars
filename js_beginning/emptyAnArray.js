fn1 = function (arr) {
  arr = [];
};

var fn2 = function (arr) {
  arr.length = 0;
};

var arr1 = [1, 2, 3];
var arr2 = [5, 6, 7];

fn1(arr1);
fn2(arr2);

console.log(arr1.length, arr2.length); // 3 0

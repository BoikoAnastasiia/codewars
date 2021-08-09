const arr1 = [1, 2, 3];

const fn1 = function (arr) {
  arr = [];
  console.log(arr1 == arr);
};

fn1(arr1);

console.log(arr1.length); // 3

//////////////////////////////////////

// const fn2 = function (str) {
//   str = 'sssssssssssssssssssssssssss';
// };

// const str = '222';
// fn2(str);

// console.log(str.length); // 3

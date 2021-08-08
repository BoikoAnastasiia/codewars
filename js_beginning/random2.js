// function myFunc() {
//   console.log(myFunc.message);
// }
// myFunc.message = 'Hi John';

// myFunc();

// var scope = 'global';

// function f() {
//   console.log(scope);
//   var scope = 'local';
//   console.log(scope);
// }

// f();
// console.log(null >= 0);
// console.log(null == null);
// const g = (w = a = ~~2.1337);
// const s = x => y => z => (x << y) << z;

// console.log(s(w)(a)(g));

// var arr = [0, 1, 2, 3];
// console.log(arr.reduce());

// console.log((1, 5 - 1) * 2);
// console.log(1, 5 - 1);

var Employee = {
  company: 'xyz',
};
var emp1 = Object.create(Employee);
console.log(emp1);
// delete emp1.company;
// console.log(emp1.company);

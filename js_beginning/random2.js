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
const g = (w = a = ~~2.1337);
const s = x => y => z => (x << y) << z;

console.log(s(w)(a)(g));

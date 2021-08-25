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

// var Employee = {
//   company: 'xyz',
// };
// var emp1 = Object.create(Employee);
// console.log(emp1);
// delete emp1.company;
// console.log(emp1.company);
// (function (foo) {
//   return typeof foo.bar;
// })({ foo: { bar: 1 } });

// function go(foo) {
//   return typeof foo.bar;
// }

// const a = { foo: { bar: 1 } };

// console.log(go(a));
// (function f(f) {
//   return typeof f();
// })(function () {
//   return 1;
// });

// var foo = {
//   bar: function () {
//     return this.baz;
//   },
//   baz: 1,
// };
// (function () {
//   return typeof arguments[0]();
// })(foo.bar);

// var foo = {
//   bar: function () {
//     return this.baz;
//   },
//   baz: 1,
// };
// typeof foo.bar();

// (function f() {
//   function f() {
//     return 1;
//   }
//   return f();
//   function п() {
//     return 2;
//   }
// })();

with (function (x, undefined) {}) length;

'use strict'
var x = 10
delete x
// console.log(x)
console.log({} + {})
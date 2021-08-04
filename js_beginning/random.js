// String(15);
// console.log(String(15) === '15');
// var arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr.element = 'c';
// console.log(arr.length);
// function log() {
//   var args = Array.prototype.slice.call(arguments);
//   args.unshift('world');
//   console.log.apply(console, args);
// }

// a = false;
// b = 'string';
// c = [];
// console.log(((c && [a]) || [b])[0]);
// var a = 1;
// var b = 1,
//   c = 1;
// console.log((a === b) === c);

// function Animal() {}
// Animal.prototype.val = 3;

// var cat = new Animal();
// var dog = new Animal();

// cat.val++;
// dog.val--;

// console.log(cat.val, dog.val);
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// const member = new Person('Lydia', 'Hallie');

// console.log(member.getFullName());

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //   getFullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
}
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const member = new Person('Lydia', 'Hallie');

console.log(member.getFullName());

// In ES6 the 'class' keyword allows using classic OOP class definitions from other languages like
// Java and C#, which act as syntatic sugar to Javascripts prototyping

// ES6 class
class PersonES6 {
  // Classes always use implicit 'use strict'
  //'use strict'

  constructor(name) {
    this.name = name
  }

  // A nice advantage of this syntax is that functions are contained within the class so its clear
  // it relates to the class. Also note no 'function' keyword
  sayName() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// ...is equivalent to ES5 constructor function
function PersonES5(name) {
  this.name = name;
}
PersonES5.prototype.sayName = function() {
  console.log(`Hello, my name is ${this.name}`);
}

var p_es6 = new PersonES6('Alice');
p_es6.sayName();

var p_es5 = new PersonES5('Bob');
p_es5.sayName();

// __proto__ property allows access to the prototype of the object's class
console.log(p_es6.__proto__ === PersonES6.prototype);
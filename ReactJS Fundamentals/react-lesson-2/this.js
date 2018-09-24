'use strict'

// No classes in Javascript - it a prototype language
// We simulate classes with constructor functions, for example:
function Person(name, age) {
  // Implicit when called with 'new' keyword
  //this = {};

  this.name = name;
  this.age = age;

  // You don't want to define methods inside of constructor functions, because even though it'll
  // work correctly, we're going to run into major performance issues with it. This is because each
  // instance of the object has its own copy of the funciton
  // this.sayName = function() {
  //   console.log('Hello, my name is ' + this.name);
  // }

  // Implicit when called with 'new'
  //return this;
}

// The 'new' keyword causes the function to be treated as a 'constructor function', which sets
// the 'this' keyword within the function
var p1 = new Person('Adrienne', 24);
console.log(p1);

// The correct way to define a function on the object is to use the prototype, so that each object
// shares a copy of the function
Person.prototype.sayName = function() {
  // In a function definition on a prototype, this keyword is 'dynamically scoped' - its set
  // dynamically to the object calling the function
  console.log('Hello, my name is ' + this.name);
}

// When calling a property (value or function property) on a object, Javascript first search the
//  object itself and then the prototype:
console.log('p1.name =>', p1.name); // 'name' property found on p1 object
p1.sayName();                       // sayName function found on Person.prototype. Javascript
                                    // dynamically sets 'this' to p1 within the sayName function body

// In Javascript, functions are first class values so they can be used in any context and and
// passed around like objects and other values.
var sayName = p1.sayName; // Assigns the sayName function to the variable 'sayName' (note no parenthesis)
console.log('sayName =>', sayName);

sayName(); // Parenthesis invokes function. Since the function is not invoked against an object and
           // there is no 'new' key word, 'this' is undefined when executing the function, and so
           // error "Cannot read property 'name' of undefined" error occurs
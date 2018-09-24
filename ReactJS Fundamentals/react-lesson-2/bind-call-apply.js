'use strict'

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function(greeting) {
  console.log(greeting + ', my name is ' + this.name);
}

var p1 = new Person('Joe', 18);
p1.sayName('Hello');

var sayName = p1.sayName;
//sayName(); // TypeError: Cannot read property 'name' of undefined

// Invokes the sayName function. 1st arguments sets 'this' and subsequent arguments are passed
// to function as arguments.
sayName.call(p1, 'Gutten tag');

// Invokes the sayName function. Like 'call' but expects arguments in an array as the 2nd argument
sayName.apply(p1, ['Hola'])

// Binds the given object and arguments to the sayName function, and returns object that when
// invoked without arguments, calls the original sayName function as though called with the arguments
// that were passed to 'bind'
var sayNameWithArguments = sayName.bind(p1, 'Bonjour');
sayNameWithArguments();
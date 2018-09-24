// ES6 introduces arrow function that is shorter way of defining a function

var numbers = [1, 2, 3, 4];

// ES5
var numbers2 = numbers.map(function(number) {
  return number * 2;
});

// ES6, form 1, must be used for 0, 2 or more arguments
numbers.map((number) => {
  return number * 2;
});
numbers.map(() => {
  return 2;
});
numbers.map((number, index) => {
  return number * 2;
});

// ES6, form 2, when only 1 parameter
numbers.map(number => {
  return number + 2
});

// ES6, form 3, when only one liner expression (note no braces and implicit return)
numbers.map(number => number * 2);

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.sayNameTimed = function() {
  setTimeout(function() {
    console.log(`My name is ${this.name}`); // this is undefined
  }, 1000);
}

var p1 = new Person('Dan');
p1.sayNameTimed();

Person.prototype.sayNameTimed2 = function() {
  setTimeout(() => {
    console.log(`My name is ${this.name}`); // When using arrow function this is set to object
  }, 1000);
}

var p1 = new Person('Dan');
p1.sayNameTimed2();
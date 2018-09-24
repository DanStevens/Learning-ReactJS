// Variable length argument functions in ES5
function add_es5() {
  // This is needed because arguments is array-like but not an array
  var result = Array.prototype.reduce.call(arguments, function(memo, value) {
    return memo + value
  });
  return result;
}

console.log(add_es5(2, 3, 4));

// Variable length argument functions in ES6, using 'rest' operator (...)
function add_es6(...values) {
  // values is an array
  return values.reduce(function(memo, value) {
    return memo + value;
  });
}

console.log(add_es6(2, 3, 4));

// Another example of variable length argument functions in ES6
function talk(greeting, farewell, ...names) {
  names.forEach(function(name) {
    console.log(`${greeting}, ${name}!`);
    console.log(`${farewell}, ${name}!`);
  });
}

talk('Hello', 'Goodbye', 'Alice', 'Bob', 'Charlie');

// Using ... within a function call is the 'spread' operator -  takes an array and spreads it out
// to individual arguments to a function call
var args = ['Hello', 'Goodbye', 'Alice', 'Bob', 'Charlie'];
talk(...args);
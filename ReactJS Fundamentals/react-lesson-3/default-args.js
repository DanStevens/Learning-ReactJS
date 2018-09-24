// Default arguments in ES5
function add_es5(x, y) {
  if (y === undefined) {
    y = 5;
  }

  return x + y;
}

// Default arguments in ES6
function add_es6(x, y=5) {
  return x + y;
}

console.log(add_es5(2));
console.log(add_es6(3));
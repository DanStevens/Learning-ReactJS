// Destructuring is converting an array into multiple variables

var arr = [1, 2, 3, 4];

// ES5
var a_es5 = arr[0];
var d_es5 = arr[2]
console.log(`a_es5 => ${a_es5}`);
console.log(`d_es5 => ${d_es5}`);

// ES6
var [a_es6, , d_es6, ] = arr;
console.log('a_es6 =>', a_es6);
console.log('d_es6 =>', d_es6);

// Swaping two variables in ES5
var a = 1, b = 2;
var tmp = a;
a = b;
b = tmp;
console.log(`a => ${a};`, `b => ${b}`);

// Swapping two variables in ES6
[a, b] = [b, a];
console.log(`a => ${a};`, `b => ${b}`);


// ES6 Destructuring works with objects
var dog = {
  name: 'sparky',
  age: 5,
  toys: ['rope', 'bone']
}

// Maps object properties to named variables
var {name: dogName, age: dogAge} = dog;
console.log(`dogName => ${dogName};`, `dogAge => ${dogAge};`);

// Maps object properties to variables with the same name as the property
var {name, toys} = dog;
console.log(`name => ${name};`, `toys => ${toys}`);

// Nested destrucuting is also supported in ES6
var {name, toys: [firstToy, secondToy]} = dog;
console.log(`name => ${name};`, `firstToy => ${firstToy};`, `secondToy => ${secondToy}`);
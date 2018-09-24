var numbers = [1, 2, 3, 4];

console.log("Traditional imperitive iteration using 'for' loop:");
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Functional iteration using 'forEach':")
numbers.forEach(function(number) {
  console.log(number);
});

console.log("Converting values using 'map':")
var doubledNumbers = numbers.map(function(number) {
  return number * 2
});
console.log('doubledNumbers =>', doubledNumbers);

console.log("Including values using 'filter':")
var evenNumbers = numbers.filter(function(number) {
  return number % 2 == 0
});
console.log('evenNumbers =>', evenNumbers);

console.log("Chaining functions:")
var doubleEvenNumbers = numbers.filter(function(number) {
  return number % 2 == 0
}).map(function(number) {
  return number * 2
});
console.log('doubleEvenNumbers =>', doubleEvenNumbers);

console.log("Sum numbers using 'reduce':")
var sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number
}, 0);
console.log('sum =>', sum);
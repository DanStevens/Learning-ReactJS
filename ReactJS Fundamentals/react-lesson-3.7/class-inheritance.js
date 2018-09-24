// Object inheritance syntax is much easier with ES6 classes

class Creature {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

class Person extends Creature {
  constructor(name, job) {
    super(name);
    this.job = job;
  }
}

var p1 = new Person('Bob', 'Programmer');
console.log(p1.name);
console.log(p1.job);
p1.sayName();
// Moving
// You have the following classes.

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat extends Person {
  constructor(name) {
    super(name);
  }

  gait() {
    return "saunters";
  }
}

class Cheetah extends Person{
  constructor(name) {
    super(name);
  }

  gait() {
    return "runs";
  }
}

// You need to modify the code so that this works:

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

Object.assign(Person.prototype, walkMixin);

// omitted code
let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// You are only allowed to write one new method to do this


// Using the code from the previous exercise, add a constructor method that logs to the console I'm a cat! when a new Cat object is initialized.


class Cat {
  constructor(str) {
    console.log(`${str}`);
  }
}

let kitty = new Cat("I'm a cat!"); // I'm a cat

/*
When we define a class we usually need to use a constructor function within the class. some classes need a constructor method to create new classes with the certain values 
*/
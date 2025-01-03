// Hello, Chloe!
// Using the following code, add an instance method named rename that renames kitty when invoked.

class Cat {
  constructor(name) {
    this.name = name;
  }

  rename(name) {
    this.name = name;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe


// Expected output:

// Sophie
// Chloe
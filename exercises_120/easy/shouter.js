// Shouter
// Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Person exposes method greeting which when called logs the provided greeting text. Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.


class Person {
  greeting(text) {
    return text;
  }
}

class Shouter extends Person {
  greeting(text) {
    return super.greeting(text.toUpperCase());
  }
}


let person = new Person();
let shouter = new Shouter();

console.log(person.greeting("Hello. It's very nice to meet you.")); // Hello. It's very nice to meet you
console.log(shouter.greeting("Hello my friend.")); // HELLO MY FRIEND.

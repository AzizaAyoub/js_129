// What Will This Do?
// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // ByeBye
console.log(thing.dupData()); // HelloHello

/*
The above code first will log ByeBye and HelloHello to the console. 

In the Something class we defined two methods:

dupData instance: method which will return string HelloHello 
dupData static: method whcih will return string ByeBye

We invoked the instance method on thing which contains an instance object returned by class Something. 

We invoked the static method on Something class which we can't invoke it on the instances. We should invoke the static methods on the class itself. 
*/
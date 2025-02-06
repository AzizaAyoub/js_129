// Refactoring Vehicles
// Consider the following classes:

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 4;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Motorcycle extends Car {
  constructor(make, model) {
    super(make, model);
  }
}



class Truck extends Car {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
}


// Refactor these classes so they all use a common superclass, and inherit behavior as needed.

let car = new Car('Toyota', 'Corolla');
console.log(car.info());
console.log(car.getWheels());

let motorcycle = new Motorcycle('Yamaha', 'YZF-R3');
console.log(motorcycle.getWheels());
console.log(motorcycle.info());

let truck = new Truck('For', 'Ranger');
console.log(truck.getWheels());
console.log(truck.info());
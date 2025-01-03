// Towable (part 1)
// Using the following code, create a towMixin mixin that contains a method named tow that returns I can tow a trailer! when invoked. Include the mixin in the Truck class.


class Truck {}

let towMixin = {
  tow() {
    console.log(`I can tow a trailer!`); 
  }
}

class Car extends Truck{}

let truck = new Truck();
Object.assign(truck, towMixin);
truck.tow();

// Expected output:
// I can tow a trailer!

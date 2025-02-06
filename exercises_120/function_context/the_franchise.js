// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object. Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};

console.log(franchise.allMovies());

/*
The franchise object is initialized with a name property and an allMovies method. 
Inside allMovies, the map method is called on an array of numbers, intending to concatenate each number with the franchise name.

However, the callback function inside map is a regular function (not an arrow function), which means that the this keyword inside it does not inherit the this value from allMovies. 
Instead, it refers to the global object (or undefined in strict mode). Since the global object does not have a name property, this.name evaluates to undefined, causing the output to be an array of 'undefined 1', 'undefined 2', and 'undefined 3'.

To fix this issue, we can:
1. Use an arrow function for the callback, as arrow functions inherit the this value from their surrounding lexical scope.
2. Use the second argument of the map method to explicitly bind this.

Corrected versions:

Solution 1: Using an arrow function

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => this.name + ' ' + number);
  },
};

console.log(franchise.allMovies());

Solution 2: Using the second argument of map to bind 'this'

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this); // Passing 'this' as the second argument to map
  },
};

console.log(franchise.allMovies());
*/
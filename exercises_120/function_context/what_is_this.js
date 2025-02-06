// What is This?
// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
the this keyword outside of function refers to the global object, in this example the this keyword refers to global object. Since global object doesn't initialize firstName and lastName name properties, it returns undefine so undefine + undefine resulting is NaN. 
*/
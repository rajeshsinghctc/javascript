
/*
Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:
refernse w3school

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/

// function prototype
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

var a = new Person('rajesh', 'singh');
console.log(a.nationality); // English
console.log(a.name()); // Rajesh Singh
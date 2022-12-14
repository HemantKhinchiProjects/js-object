export function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    x = 2;
    y = 5;
    console.log(x + y);
  };
}
// this is populor method to create object in developer comunity but both are similor
// this is ES 6 feature if user call without new using thenit will throw error
function PersonN(firstName, lastName) {
  if (!new.target) {
    throw Error('Cannot be called without the new keyword');
  }

  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}
let personk = new PersonN('John', 'Doe');
console.log(personk);

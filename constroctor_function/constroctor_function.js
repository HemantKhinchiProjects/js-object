// constructor function
export function Circle(radius) {
  (this.radius = radius),
    (this.location = function () {
      x = 2;
      y = 5;
      console.log(x + y);
    });
}
const const_circle = new Circle(5);
console.log(const_circle);
document.querySelector('.fec').innerHTML = circle1.location(
  const_circle.location()
);

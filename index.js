// Import stylesheets
import './style.css';
// Import javascript file
import { greet, message } from './utils.js';
// importing factory function
import {
  car_details,
  deketedata,
  deletedata,
} from './factory_function/factory_function.js';
// importing constroctor function
import { Circle } from './constroctor_function/constroctor_function.js';
//predifine
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1> <div class="space-0"></div><div class="fuc-fun">fectory function example result :<span class="fec"></span></div><div>Delete data Example <span id="dData"></span></div>`;

// Write Javascript code!
let radius = 1;
let x = 1;
let y = 5;

// all collection in object
//object-oriented Programming (oop)
const shape = {
  radius: 1,

  location: {
    x: 2,
    y: 5,
  },
  isVisible: true,
  draw: function (x, y) {
    return x * y;
  },
  move: function (x, y) {
    return this.location.x * this.location.y;
  },
};
document.querySelector('.space-0').innerHTML = shape.draw(5, 9); //drow method

//Note: //if is a function is a part of an object in the programming term it call a method

//difrant way to create an object
//factory function
const createCircle = (radius, isVisible) => {
  return {
    // radius: radius,//in the morden javascript if key and value same then only pass key name
    radius: radius,
    isVisible: isVisible,
    location() {
      x = 3;
      y = 5;
      return x + y;
    },
    draw(x, y) {
      return x * y;
    },
    move(x, y) {
      return this.location.x * this.location.y;
    },
  };
};
//let circle1 = createCircle(7);
let circle1 = createCircle();

console.log(circle1.location());
document.querySelector('.fec').innerHTML = circle1.location(); //drow method

let carOne = car_details('Tata', '140 kmp', 'Red');
//console.log(carOne);
let carTwo = car_details('Maruti', '140 kmp', 'White');
//console.log(carTwo);
//expand Object
let marger = { ...carOne, coloe: 'yellow', carTwo }; // spred oprator
//console.log(marger);
let dMarger = deketedata(marger);
//console.log(dMarger);
console.log(`-----------------------------------------`);
const myJSON = JSON.stringify(marger).replace(':', ' ').trim('<br/> ');
let xyz = deletedata(marger);
document.querySelector('#dData').innerHTML = myJSON;

const greet_scaler = greet('Scaler');
console.log(greet_scaler); // Hello, Scaler
console.log(message); // How you doing?
//constroctor
const const_circle = new Circle(5);
console.log(const_circle);

document.querySelector('.fec').innerHTML = circle1.location(
  const_circle.location()
);

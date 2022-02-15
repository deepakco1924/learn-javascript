'use strict';
const booking = [];
//default parameters
const createBooking = function (flightName, numPassengers = 1, price = 199) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 2229;
  const currentBooking = {
    flightName,
    numPassengers,
    price,
  };
  console.log(currentBooking);
  booking.push(currentBooking);
};
createBooking('LH123');
createBooking('LH231', 10);
const flight = 'Lh342';
const jonas = {
  name: 'jonas schmedtmanas',
  passport: 23423423434,
};
//pass by value and reference
//passing a primitve variable it just copy
//when pass object it possed by reference
const checkIn = function (flighNum, passengers) {
  flighNum = 'lH999';
  passengers.name = 'mr.' + passengers.name;
  if (passengers.passport === 23423423434) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};
// checkIn(flight, jonas);
console.log(flight, jonas);
const newPassport = function (person) {
  const newperson = Object({}, person);
  newperson.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
// checkIn(flight, jonas);

//javascript is pass by value not by reference

//first class and high order functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return first.toUpperCase() + ' ' + others.join(' ').toLowerCase();
};
//higher order
const transformer = function (str, fn) {
  const ans = fn(str);
  console.log(ans);
};
console.log(oneWord('the MAN in asdafSEHNIooda adfajiOH'));
const ans = upperFirstWord('jdjad IHIH noihnda HOHoih ohiha');
console.log(ans);
transformer('JavsCript is best!', upperFirstWord);
transformer('javscipot is rate i', oneWord);

const high5 = function () {
  console.log('my hero');
};
// document.body.addEventListener('click', high5);
// addEventListener is higher order functions and high5 is callback functions

//callback functions is user for level of abstractions
//abstractions means hide of details working

//functions returing functions
const great = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const newGreat = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greaterHey = great('hey');
greaterHey('deepak pal');
great('hello')('jonas');
newGreat('hey')('babu');

//

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};
lufthansa.book(239, 'jonaschmedatan');
lufthansa.book(569, 'john smith');
console.log(lufthansa);

const euroWings = {
  name: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const newBook = lufthansa.book;
//how to manyualy tell js about the this keyword
newBook.call(euroWings, 23, 'sarah williams');
console.log(euroWings);
//manually set the the keword of eurwiings
newBook.call(lufthansa, 239, 'marry copper');
console.log(lufthansa);
const Swiss = {
  name: 'Swiss',
  iataCode: 'Lx',
  bookings: [],
};
newBook.call(Swiss, 3234, 'deepak pal');
console.log(Swiss);

//apply method exactly same things
const flightdata = [23432, 'rajan pal'];
newBook.apply(Swiss, flightdata);
console.log(Swiss);
const answerquestion = function () {
  console.log(`the flight name is ${this.name}`);
};
answerquestion.call(Swiss);
answerquestion.call(euroWings);
answerquestion.call(lufthansa);

//bind methods
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial functions
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

//cooding challege
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
poll.displayResults = function (type) {
  if (typeof type === 'string') {
    const ans = `Poll results are `;
    for (const item of this.answers) {
      ans += `${item}, `;
    }
    console.log(ans);
  } else {
    console.log(this.answers);
  }
};
poll.displayResults = function (type) {
  if (type === 'string') {
    let ans = `Poll results are `;
    for (const item of this.answers) {
      ans += `${item}, `;
    }
    console.log(ans);
  } else {
    console.log(this.answers);
  }
};
poll.registerNewAnswer = function () {
  let ans = prompt(
    'What is your favourite programming language?\n0: JavaScript\n 1: Python\n2:Rust\n 3: C++\n(Write option number)'
  );
  console.log(this);
  ans = Number(ans);
  if (typeof ans === 'number' && ans >= 0 && ans <= 3) {
    this.answers[ans]++;
    this.displayResults.call(this, ['string']);
  }
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
  console.log('this will never run again');
})();
(() => console.log('we have to back'))();

const sercureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = sercureBooking();
booker();
booker();
console.dir(booker);
//in order to make closure don need to make nested functions
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 23);
  };
};
g();
f();
h();
f(); // no acces to a
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n}`);
    console.log(`ther are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait}seconds`);
};
// boardPassengers(100, 3);

//setTimeout have access to baodpassengers
//beacuse it created in boardpassengers
//this is closures

//closures have priority over scope chain
const perGroup = 1000;
// boardPassengers(180, 3);
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
console.log(this);

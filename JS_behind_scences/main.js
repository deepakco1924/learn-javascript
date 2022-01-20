'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printage() {
    const output = `${firstName},you are ${age} ,born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var str = `oh ,and you'are a millianal,${firstName}`;
      console.log(str);
    }
  }
  printage();

  return age;
}
// const firstName = 'Deepak';
// calcAge(1991);
// console.log(firstName);

var sum = add_two_number(2, 6);
console.log(sum);
function add_two_number(a, b) {
  return a + b;
}

console.log(surname);
var surname = 'pal';
//hoisting and TDZ
//hoisting is nothing but using variables before they declare
//var is hoistd and functinal declearation
//arrow and function experssion also when declare with var
//let and const are not hoisted
console.log(this);
const find_ans = (birthYear) => {
  const age = 2037 - birthYear;
  console.log(this);
  return age;
};
find_ans(323);

const jonas = {
  firstName: 'Jonas',
  birthYear: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  },
  greet: () => console.log(`hey ${this.firstName}`),
};
console.log(this);
jonas.greet();

let general_add = function (a, b) {
  console.log(arguments);
};
general_add(2, 3, 5);
general_add(2, 3, 2, 2, 21);

let myage = 30;
let oldage = myage;
myage = 31;
console.log(myage, oldage);
const me = {
  name: 'jonas',
  age: 30,
};
const friend = me;
friend.age = 28;
console.log(friend);
console.table(me);

let lastname = 'pal';
let oldname = lastname;
lastname = 'jain';
console.log(lastname, oldname);

const jessica = {
  firstName: 'Jessica',
  lastname: 'Williams',
  age: 27,
  family: ['rahul', 'atri', 'sonu'],
};
const marriedJessica = jessica;
marriedJessica.lastname = 'devis';
console.log('before marriage :', jessica);
console.log('After marrige', marriedJessica);

//copying the objects
//it works on the first level
//it create a shallow copy
//if object under object it will work
const newJessica = Object.assign({}, jessica);
newJessica.lastname = 'pal';
console.log(jessica, newJessica);
newJessica.family[1] = 'rajan';

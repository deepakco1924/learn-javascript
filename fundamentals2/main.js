"use strict";
//let srict  mode
//it frobids to do some tasks
//it show ceartain errro  without strict moded it will no  show
let hasDriverLicense = false;
const passTest = true;
if (passTest) {
  //   hasDriversicense = true;
  hasDriverLicense = true;
}
if (hasDriverLicense) console.log("i can drive");
console.log("deepak");
// const interface = "deepak";
// console.log(interface);

//funcations from here
function logger() {
  console.log("my Name is Deepak Pal");
}
// logger();
// logger();
function fruitProcessor(apples, oranges) {
  return `we have ${apples}  apples and ${oranges} oranges in basket`;
}

let first = fruitProcessor(12, 10);
let second = fruitProcessor(9, 10);
console.log(first, "\n", second);

//different ways to write functions
// above are function decelaration

//down are function expression
const findage = function (birthYear) {
  return 2022 - birthYear;
};
let currentyear = 1999;
console.log(findage(currentyear));

//function arrow
//just one parament one liner
const calcage = (birthYear) => 2037 - birthYear;
const yearsUntilRetirement = (birthYear, retirementage) => {
  let currentage = 2037 - birthYear;
  let retirement = retirementage - currentage;
  return retirement;
};

console.log(calcage(currentyear));
let yearRemain = yearsUntilRetirement(currentyear, 65);
console.log(`remaining year are ${yearRemain}`);

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitMachine(apples, oranges) {
  let first = cutFruitPieces(apples);
  let second = cutFruitPieces(oranges);
  const juice = `we get apples pices ${first} and oranges peices as ${second}`;
  return juice;
}
console.log(fruitMachine(10, 20));

//coding challenge 1
const calcavg = (a, b, c) => (a + b + c) / 3;
const dolphines = calcavg(85, 54, 41);
const kolas = calcavg(23, 34, 27);
const checkwinner = (avgdolphines, avgkaolas) => {
  if (avgdolphines >= 2 * avgkaolas) {
    return `dolphines win (${avgdolphines} vs ${avgkaolas})`;
  } else if (avgkaolas >= 2 * avgdolphines) {
    return `kaolas win (${avgkaolas} vs ${avgdolphines});`;
  }
  return `draw kaolas ${avgkaolas} and dolphines ${avgdolphines}`;
};
const winner = checkwinner(dolphines, kolas);
console.log(winner);

//now we learn about the array now onwards
const frinds = ["michele", "deepak", "rajan", "pushparaj"];
console.log(frinds);
const year = new Array(1991, "aertew", 122, 342, 233);
console.log(year);
frinds[2] = "dry parker";
console.log(frinds);

//making the array all about the deepak pal
const country = "india";
const deepak_pal = ["deepak", "pal", 1991, "chandigarh", country, frinds];
console.log(deepak_pal);

const years = [1998, 1967, 2010, 2018, 2002];
const age1 = findage(years[0]);
const age2 = findage(years[1]);
const age3 = findage(years[2]);
const age4 = findage(years[3]);
const age5 = findage(years[4]);
console.log(age1, age2, age3, age4, age5);

deepak_pal.push("maths learns");
console.log(deepak_pal);

deepak_pal.unshift("monika");
console.log(deepak_pal);
deepak_pal.push("pushparajinsane");
console.log(deepak_pal);
deepak_pal.pop();
console.log(deepak_pal);
deepak_pal.shift();
console.log(deepak_pal);
console.log(deepak_pal.indexOf("pal"));
console.log(deepak_pal.includes("pardhan"));

//coding challenge
const calcautetip = (bill) => {
  if (bill > 50 && bill < 300) return bill * 0.15;
  return bill * 0.2;
};
const bills = [125, 555, 44];
const tip = [
  calcautetip(bills[0]),
  calcautetip(bills[1]),
  calcautetip(bills[2]),
];
const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(tip);
console.log(total);

//time to learn the objects
//store the propeties of singles entity
//it is key value pairs
const jonas = {
  firstName: "deepak",
  middleName: "singh",
  lastName: "Pal",
  birthYear: 1971,
  job: "coder",
  hasDriverLicense: true,
  friends: ["monika", "kanishka", "steven"],
  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getsummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "NO"} driver's license`;
  },
};
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas["firstName"]);
// const propertytoshow = prompt("enter the property");
// console.log(jonas[propertytoshow]);
jonas.location = "india";
jonas["fatherName"] = "ram kishore pal";

console.log(jonas);

//challege
//jonas has three frineds but kanishka is best friend
const challegelitteral = `${jonas.firstName} has ${jonas.friends.length} friends  and his best friend is called ${jonas.friends[1]}`;
console.log(challegelitteral);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas.getsummary());

//coding challege 3
const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI) {
  console.log(`mark BMi is (${mark.BMI}) higher than john (${john.BMI})`);
} else {
  console.log(`john BMi is (${john.BMI}) higher than mark (${mark.BMI})`);
}

//now from here we learn about the looping
for (let index = 0; index < years.length; index++) {
  const element = years[index];
  console.log("current year is ", element);
}
for (let index = 0; index < 10; index++) {
  console.log(`lifting the weight of repetation ${index + 1}`);
}
console.log(deepak_pal);
let types = [];
for (let i = 0; i < deepak_pal.length; i++) {
  types.push(typeof deepak_pal[i]);
}
console.log(types);
let rep = 10;
while (rep <= 20) {
  console.log("current repititon number is ", rep);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log("you wrote the dice number is ", dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log("the last number is ", dice);

//coding challenge 4
const newbills = [22, 295, 176, 440, 105, 10, 1100, 86, 52];
const newtips = [];
const newtotal = [];
for (let i = 0; i < newbills.length; i++) {
  newtips.push(calcautetip(newbills[i]));
  newtotal.push(newbills[i] + newtips[i]);
}
console.log(newtips, newtotal);
const findaverge = (elements) => {
  let sum = 0;
  for (let i = 0; i < elements.length; i++) {
    sum += elements[i];
  }
  return sum / elements.length;
};
console.log(findaverge(newbills));

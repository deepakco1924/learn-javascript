let main = "deepak";
if (main == "deepak") {
  //   alert("javscirpt is awesome");
  console.log("javscirpt is awesome");
}
let v = 40 + 4 + 2 + 10 - 20; //making first variable
// console.log(v);
// let firstName = "Deepak";
// console.log(firstName);
// let last_name = "pal";
// console.log(last_name);
// let middle = "sharma";
// console.log(middle);

//data types
let rate = false;
console.log(rate);
console.log(typeof rate);
console.log(typeof "rate");
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);

//define data types
//const inroduce in ES6;
//but var is old way of define variable

lastname = "smithman";
console.log(lastname, typeof lastname);
console.log(typeof lastname);
//operators
//operators transfrom values or varbiles

//maths operators
const now = 2016;
let birthyear = 1991;
const ageJones = now - birthyear;
const ageSarah = now - 2010;
const man = now / 2; //give decimals or floating number
console.log(ageJones, ageSarah, man);
const myName = "deepak";
const myLast = "pal";
console.log(myName + " " + myLast);
let x = 10;
x += 10;
console.log(x);

//comparision operators
console.log(ageJones >= ageSarah);
//coding challege
// console.log("first challenge");
// let markHeight = 1.88;
// let markMass = 95;
// let johnHeight = 1.76;
// let JohnMass = 85;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = JohnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
// console.log(johnBMI, markBMI);

// string
//
const firstname = "deepak pal";
const jonas = "I'm " + firstname + ", a " + ageJones;
console.log(jonas);
const jonasNew = `${ageJones} is the \n age of ${firstname}`;
console.log(jonasNew);

//if else statement
const age = 82;
const isOldENoug = age >= 18;
if (isOldENoug) {
  console.log("we can issue licence👌 ");
} else {
  console.log("we can't issue licence");
}
//second coding challenge
let markHeight = 1.88;
let markMass = 95;
let johnHeight = 1.76;
let JohnMass = 85;
let markBMI = markMass / markHeight ** 2;
let johnBMI = JohnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI}!)`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's!(${markBMI})`);
}

//type conversion and coercian
//type coercian works if operation between two differnt types then JS works behind convert  one of the type to another one so that operation will happen
const inputYear = "1991";
console.log(Number(inputYear) + 18);
const mystring = "jonas";
console.log(Number(mystring));
console.log(typeof NaN);
console.log(String(23), typeof String(23));
const val = Number(true);
console.log(typeof val, val);

//falsy and truthy
//falsy -> 0,'',undefined,null,Nan,false,
//truthy ->everything else are truthy and {}
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean({}));
const money = -2;
if (money) {
  console.log("done spend it all;");
} else if (money > 0 && money < 3) {
  console.log("get playstation");
} else {
  console.log("you should get a job");
}

let height;
if (height) {
  console.log("YAY hiegith is difned");
} else {
  console.log("hieght is undefined");
}

const age2 = "18";
if (age2 === 18) {
  console.log("you will get the license");
}

const inputfavirate = Number(prompt("enter the number"));
console.log(inputfavirate, typeof inputfavirate);
if (inputfavirate !== "23") {
  console.log("favorite is not greate");
}

//logical operator
//AND and OR and NOT are basic operators
//challenge second
const averagescore1 = (97 + 112 + 101) / 3;
const averagescore2 = (109 + 95 + 106) / 3;
let team = -1;
if (averagescore1 > averagescore2) {
  if (averagescore1 >= 100) {
    team = 1;
  }
} else if (averagescore2 > averagescore1) {
  if (averagescore2 >= 100) {
    team = 2;
  }
} else {
  if (averagescore2 >= 100 && averagescore1 >= 100) {
    team = 0;
  }
}
if (team == -1) {
  console.log(
    `NO team wins Team1 (${averagescore1}) and Team2(${averagescore2})`
  );
} else {
  console.log(
    `team ${team} is won score Team1(${averagescore1}) and Team2(${averagescore2})`
  );
}

//coding challege 4
let bill = 275;
let tip = bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;
console.log(
  `the bill was ${bill} and tip was ${tip} and tootal value is ${bill + tip}`
);

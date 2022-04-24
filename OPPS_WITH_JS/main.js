"use strict";

//lear aobut
//abstraction : hiding data from user for which it is releveant for him
//encapsulation : for security resoon ,this prevent from external code to chnage state of inner state
//inheritance : extendiing the parent  class by child class ,giving hearirichanl sturcutres
//polymorphism : child can overwrite the parent inherated functins or code

//js follow protoypial inheritance
//how do we crate prototype
//1.constructor functions
//2. ES6 classes
//3.object.create()

const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.age = 21;
  this.calCage = function () {
    return 2037 - this.birthYear;
  };
};
const jonas = new person("Jonas", 1991);
console.log(jonas);
const matilla = new person("matilla", 2000);
console.log(matilla);
const x = 23;
//1.new {} is created;
//2.functions is called this={}
//3.{} linket to prototype
//4. functions automaticcallly return {}
console.log(jonas instanceof person);
console.log(x instanceof person);

//prototype

//we can make the objects
person.prototype.ishandsome = function () {
  return `yes we are hero ${this.birthYear}`;
};

//to check the protype
console.log(person.prototype.isPrototypeOf(jonas));

const arr = [12, 2, 2, 3];
const h1 = document.querySelector("h1");
console.dir(h1);

const car = function (carName, speed) {
  this.Name = carName;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`new speed of ${this.Name} is ${this.speed}`);
};
car.prototype.bracke = function () {
  this.speed -= 10;
  console.log(`new speed of ${this.Name} is ${this.speed}`);
};
const bmw = new car("BMW", 120);
const mercedes = new car("Mercedes", 95);
bmw.accelerate();
bmw.accelerate();
bmw.bracke();
mercedes.accelerate();
mercedes.accelerate();

//Es6 classes
//class expressions
//const person=class{

//}
//class declerations
class personCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //all after constructor it come to prototype
  calCage() {
    console.log(2037 - this.birthYear);
  }
}
personCL.prototype.great = function () {
  console.log(`hey ${this.firstName}`);
};
const jessica = new personCL("jessica", 1991);

//class are not hoisted
//2.class are first class citizens //pass them functions and reture them from functions
//3. classes are executed in strict mode

//setters and getters
const account = {
  owner: "Jonas",
  movements: [1200, 2, 2, 32, 232],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

//static methods are for the class itself
//it use for rough work or data configuration and this keyword under static methods point to consutrunct function and class

//object create
const Personproto = {
  calCage() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(Personproto);
//here manually link object to prototype

steven.Name = "deepak";
steven.birthYear = 1999;
class newCar {
  constructor(name, speed) {
    this.carname = name;
    this.speed = speed * 1.6;
  }
  get speeUs() {
    return `current speed is ${this.speed / 1.6}mi/h`;
  }
  set speeUs(speed) {
    this.speed = speed * 1.6;
  }
  get accelerate() {
    this.speed += 10;
  }
  bracke() {
    this.speed -= 10;
  }
}
const newbmw = new newCar("ford", 120);

console.log(newbmw);
newbmw.accelerate;
console.log(newbmw);

//inheritance  between the claseses

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calCage = function () {
//   console.log(2037 - this.birthYear);
// };
// const student = function (firstName, birthYear, course) {
//   //   this.firstName = firstName;
//   //   this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// student.prototype = Object.create(Person.prototype);
// student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstName} and my course is ${this.course}`);
// };

// const mike = new student("Mike", 2020, "computer science");
// mike.introduce();
// console.log(mike);
// mike.calCage();

//inhertance between the classes
class student extends personCL {
  //extends links the studen persosonal
  constructor(fullname, birthYear, course) {
    //alwasy need to happen first
    super(fullname, birthYear);
    this.course = course;
  }
}

const personproto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calCage() {
    console.log(`my age is ${2037 - this.birthYear}`);
  },
};
const studentproto = Object.create(personproto);
studentproto.init = function (firstName, birthYear, course) {
  personproto.init.call(this, firstName, birthYear);
  this.course = course;
};
studentproto.intro = function () {
  console.log(`my name is ${this.firstName} and my course is ${this.course}`);
};
const jay = Object.create(studentproto);
jay.init("deepak", 1999, "CS");
console.log(jay);

//encapsulations
//means methods and data be private

// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  _name = "deepak pal";
  schoolname = "government";
  #married = false;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }
  #getname() {
    console.log("we are thanks to you");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
class smallaccount extends Account {
  constructor(owner, currency, pin) {
    super(owner, currency, pin);
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));
const rajan = new smallaccount("deepak", "US", 2222);
console.log(rajan);
console.log(rajan.schoolname);

class CarCLcar {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  bracke() {
    this.speed -= 10;
    console.log(`${this.make} is goining with ${this.speed}`);
  }
}
class evclcar extends CarCLcar {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 10;
    console.log(`the speed of ${this.make} is ${this.speed}`);
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`now the battery charge is ${this.#charge}%`);
  }
}

const carname = new evclcar("Rivian", 120, 23);
carname.accelerate();
carname.chargeBattery(40);
carname.bracke();

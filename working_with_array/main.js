'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (element, index) {
    const type = element > 0 ? 'deposit' : 'withdrawal';
    const html = `
       <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
   
      <div class="movements__value">${element}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

function computeusername(user) {
  const username = user
    .split(' ')
    .map(function (ele) {
      return ele[0].toLowerCase();
    })
    .join('');
  return username;
}

accounts.forEach(function (element) {
  element.username = computeusername(element.owner);
});
console.log(accounts);
console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(0, 2));
// console.log(arr.slice(-2));

// // console.log(arr.splice(2));
// // console.log(arr);

// //to remove the last element fron the array use arr.splice(-1);
// arr.splice(1, 2, 'm');
// console.log(arr);

// //
// let arr2 = ['j', 'r', 'm', 'o', 'a'];
// arr2.reverse();
// console.log(arr2);
// for (let ele of arr) {
//   console.log(`element number is ${ele}`);
// }

// movements.forEach((element, index) => {
//   if (element > 0) {
//     console.log(` ${index + 1} you deposit the money of Rs.${element}`);
//   } else {
//     console.log(`${index + 1} you withdraw money of Rs.${Math.abs(element)}`);
//   }
// });
// currencies.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });
// const newSet = new Set(['ECU', 'IND', 'USA', 'GBU']);
// newSet.forEach(function (value, key) {
//   console.log(`${key} :${value}`);
// });

/////////////////////////////////making our app from here /////////////////////////////////////

function checkdogs(dogsJulia, dogsKate) {
  const correctJulia = dogsJulia.slice(1, -2);
  const finalDogs = correctJulia.concat(dogsKate);
  console.log(correctJulia);
  finalDogs.forEach(function (element, index) {
    if (element >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${element} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
}

checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
const euroTousd = 1.1;
const movementsUSD = movements.map(function (element) {
  return element * euroTousd;
});
const anothermovementUsd = movements.map(ele => ele * euroTousd);
// console.log(anothermovementUsd);
console.log(movements);
console.log(movementsUSD);
let val = 1232.2312;
console.log(val.toPrecision(3));
const movementsDescription = movements.map((mov, index, arr) => {
  if (mov > 0) {
    return `you deposit the money of price ${mov}`;
  } else {
    return `you withdrawal the money of price ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription);
const deposits = movements.filter(function (element) {
  return element > 0;
});
const withdrawls = movements.filter(function (element) {
  return element < 0;
});
const newwithdrawsl = movements.filter(ele => ele > 0);
console.log(withdrawls);
console.log(newwithdrawsl);
console.log(deposits);
//make the shallow copy of the original movements arraay
const despositsum = movements.reduce(function (acc, element, index, arr) {
  return acc + element;
}, 0);
console.log(`the total sum of despostion is ${despositsum}`);

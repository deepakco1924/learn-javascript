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
// displayMovements(account1.movements);

const calcDisplaysummary = function (account) {
  const incomes = account.movements
    .filter(ele => ele > 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outincomes = account.movements
    .filter(ele => ele < 0)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumOut.textContent = `${Math.abs(outincomes)}€`;

  const interestMoney = account.movements
    .filter(ele => ele > 0)
    .map(ele => (ele * account.interestRate) / 100)
    .filter(ele => ele >= 1)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumInterest.textContent = `${interestMoney}€`;
};
// calcDisplaysummary(account1);
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
// console.log(accounts);
// console.log(containerMovements.innerHTML);

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, ele) {
    return acc + ele;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};
const updateUI = function () {
  displayMovements(currentaccount.movements);
  calcDisplaysummary(currentaccount);
  calcPrintBalance(currentaccount);
};

//invent handleers here
let currentaccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('login');
  currentaccount = accounts.find(
    ele => ele.username === inputLoginUsername.value
  );
  console.log(currentaccount);
  if (currentaccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome to customes;
    labelWelcome.textContent = `Welcome back, ${
      currentaccount.owner.split(' ')[0]
    }`;
    //clear the input fiwel
    inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.value = '';
    containerApp.style.opacity = '1';
    updateUI();
  }
});

//tranfer function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const tranferaccount = accounts.find(
    ele => ele.username === inputTransferTo.value
  );
  const balance = currentaccount.balance;
  const amount = Number(inputTransferAmount.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    balance >= amount &&
    tranferaccount?.username !== currentaccount.username
  ) {
    tranferaccount.movements.push(amount);
    currentaccount.movements.push(-amount);
    //now update current ui;
    updateUI();
    console.log(tranferaccount);
    console.log(currentaccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentaccount.movements.some(ele => ele >= amount * 0.1)) {
    currentaccount.movements.push(amount);
    updateUI();
  }
});
let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  if (isSorted) {
    isSorted = false;
    displayMovements(currentaccount.movements);
  } else {
    isSorted = true;
    const newarray = [...currentaccount.movements];
    newarray.sort((a, b) => a - b);
    displayMovements(newarray);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentaccount.username === inputCloseUsername.value &&
    currentaccount.pin === Number(inputClosePin.value)
  ) {
    //if the account usernname and pin is same then make close the fucking account
    const i = accounts.findIndex(
      ele => ele.username === currentaccount.username
    );
    //make the username and pin exactly same as currentaccountnumbers
    accounts.splice(i, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
// calcPrintBalance(account1.movements);
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
const calcAvergaHumanAge = function (arr) {
  const humanage = arr.map(function (ele) {
    if (ele <= 2) {
      return 2 * ele;
    } else {
      return 16 + ele * 4;
    }
  });
  const correctedHumanAge = humanage.filter(function (ele) {
    return ele >= 18;
  });
  const avergaHumnanAge = correctedHumanAge.reduce((acc, ele) => acc + ele, 0);
  const ans = avergaHumnanAge / correctedHumanAge.length;
  console.log(ans);
};
const newCalcAveregHumanAge = function (arr) {
  const ans = arr
    .map(ele => (ele <= 2 ? 2 * ele : 16 + 4 * ele))
    .filter(ele => ele >= 18)
    .reduce((acc, ele, index, arr) => acc + ele / arr.length, 0);
  console.log(ans);
};
calcAvergaHumanAge([5, 2, 4, 1, 15, 8, 3]);
newCalcAveregHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAvergaHumanAge([16, 6, 10, 5, 6, 1, 4]);
newCalcAveregHumanAge([16, 6, 10, 5, 6, 1, 4]);
const firstWithdrawls = [1, 3, 2, 343, 2].find(ele => ele < 0);
console.log(firstWithdrawls);

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();

const newArray = Array.from({ length: 8 }, () => 4);
console.log(newArray);
const z = Array.from({ length: 10 }, (cur, index) => index + 1);
console.log(z);

const dicearray = Array.from({ length: 100 }, (ele, index) => {
  return Math.trunc(Math.random() * 6) + 1;
});
console.log(dicearray);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI);
  console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});

const bankDespositSum = accounts
  .map(ele => ele.movements)
  .flat()
  .filter(ele => ele > 0)
  .reduce((acc, ele) => acc + ele, 0);
console.log(bankDespositSum);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(sums);
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(ele => {
  ele.recommendedFood = ele.weight ** 0.75 * 28;
});
console.log(dogs);
dogs.forEach((ele, index) => {
  if (ele.owners.includes('Sarah')) {
    console.log(index);
    const food = ele.curFood;
    if (food < ele.recommendedFood * 0.9) {
      console.log(`Sarah dog is eating too low`);
    } else if (food > ele.recommendedFood * 1.1) {
      console.log(`sarah dog eating  too much`);
    } else {
      console.log('sarah dog eating normal');
    }
  }
});
let eatingTooMuch = [];
let eatingTooLow = [];
dogs.forEach((ele, index) => {
  const food = ele.curFood;
  if (food < ele.recommendedFood * 0.9) {
    eatingTooLow.push(...ele.owners);
  } else if (food > ele.recommendedFood * 1.1) {
    eatingTooMuch.push(...ele.owners);
  }
});
console.log(eatingTooLow);
console.log(eatingTooMuch);
console.log(eatingTooLow.join(' and ') + ` dogs eating to Little!`);
console.log(eatingTooMuch.join(' and ') + ` dogs eating to Much!`);
const isdogdispline = dogs.some(
  ele =>
    ele.curFood > ele.recommendedFood * 0.9 &&
    ele.curFood < ele.recommendedFood * 1.1
);
const newdogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(newdogs);
console.log(dogs);
newdogs[0].curFood = 0;
console.log(dogs);

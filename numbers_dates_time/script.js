'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const days = ['Today', 'Yesterday'];
const formateCUR = function (mov, local, cur) {
  const formateMove = new Intl.NumberFormat(local, {
    style: 'currency',
    currency: cur,
  }).format(mov);
  return formateMove;
};
const calcDaysPassed = (date1, date2) => {
  return Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const currentDate = new Date(acc.movementsDates[i]);
    const passed = calcDaysPassed(currentDate, new Date());
    console.log(currentDate);
    const date = `${currentDate.getDate()}`.padStart(2, 0);
    const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    const year = `${currentDate.getFullYear()}`;
    const displaydate = passed < 2 ? days[passed] : `${passed} days ago`;
    const formateMove = formateCUR(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displaydate}</div>
        <div class="movements__value">${formateMove}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${formateCUR(
    acc.balance,
    acc.local,
    acc.currency
  )}`;
};
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(ele => {
    const node = ele.querySelector('.movements__type');
    if (node.classList.contains('movements__type--deposit')) {
      ele.style.backgroundImage =
        'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)';
    }
  });
});

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, globaltimer;
//fake it

const now = new Date();
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const date = `${now.getDate()}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const minutes = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${date}/${month}/${year},${hour}:${minutes}`;
labelDate.textContent = new Intl.DateTimeFormat('ko-KR').format(new Date());

const startLogOutTimer = function () {
  //set time to 5min
  let timer = 300;
  const tick = function () {
    //in each call print the reamining time to
    let min = `${Math.floor(timer / 60)}`.padStart(2, 0);
    let sec = `${timer % 60}`.padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (timer === 0) {
      clearInterval(logouttimer);
      labelWelcome.textContent = `Login to get started`;

      containerApp.style.opacity = 0;
    }
    timer--;
  };
  //call the timer every seconds;
  tick();
  const logouttimer = setInterval(tick, 1000);
  return logouttimer;
};
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    if (globaltimer) clearInterval(globaltimer);
    globaltimer = startLogOutTimer();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI

    updateUI(currentAccount);
    clearInterval(globaltimer);
    globaltimer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    clearInterval(globaltimer);
    globaltimer = startLogOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    clearInterval(globaltimer);
    labelWelcome.textContent = 'Login to get started';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// let a = 9;
// let b = 19;
// let x = Math.trunc(Math.random() * (b - a) + 1) + a;
// while (x != a) {
//   console.log(x);
//   x = Math.trunc(Math.random() * (b - a)) + a;/+

//   +
// }
// const x = 1232.231232;
// console.log(x.toFixed(0));
// const rate = 2 ** 63 + 100;
// console.log(rate);
// const number = BigInt(10000203213213232132323);
// console.log(number);
// const currentdate = new Date();
// console.log(currentdate);
// const future = new Date(2032, 1, 13);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getHours());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getMonth());

const future = new Date(2015, 10, 19, 15, 10);
const daysPassed = (date1, date2) => {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
};
console.log(daysPassed(new Date(2023, 3, 14), new Date(2023, 3, 24)));

const numberHave = 232321.232;
console.log(new Intl.NumberFormat('en-US').format(numberHave));
const ingeridents = ['spinach', 'olives'];
const firstimer = setTimeout(
  function (ing1, ing2) {
    console.log(`pizza have ingeridents are ${ing1} and ${ing2}`);
  },
  3000,
  ...ingeridents
);
if (ingeridents.includes('spinach')) {
  clearTimeout(firstimer);
}
console.log('we are wating...');
setInterval(function () {
  const date = new Date();
  console.log(
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(date)
  );
}, 5000);

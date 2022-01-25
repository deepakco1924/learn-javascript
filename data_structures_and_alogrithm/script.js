'use strict';

//from here we learn about the arrays
const restaurant = {
  restaurantname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your declicisn pasta ,${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainindgredient, ...othersing) {
    console.log(mainindgredient);
    console.log(othersing);
  },
};

const Indianrestaurant = {
  restaurantName: 'Valcano piazza',
  location: 'mano vihar,near bandra,mumbai',
  categories: ['vegetarian', 'non-vegetarian', 'chinease', 'italian', 'franch'],
  starterMenu: ['panner tikka', 'burger', 'noodles', 'manchurian'],
  maincourse: ['shai panner', 'rooti', 'daliya', 'chole sbzi'],
};

//destructring
const arr = [1, 2, 4, 5];
let [a, b, c] = arr;
console.log(a, b, c);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//swapping the two varibles
[main, secondary] = [secondary, main];
console.log(main, secondary);
let [startfood, mainfood] = restaurant.order(0, 1);
console.log(startfood, mainfood);

//what happend if neested array
const nested = [2, 4, [5, 6, 6], 6, 8];
let [a1, , [b1, c1, d1]] = nested;
console.log(a1, b1, c1, d1);

//now we destructer the objects
//now we make the array
const {
  restaurantname: firstname,
  openingHours: hours,
  categories: tags,
  menu: food = [],
} = restaurant;
console.log(firstname, hours, tags, food);

const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: firsttime = 10, close: lasttime = 22 },
} = hours;
console.log(firsttime, lasttime);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole,32',
  mainindex: 2,
  starterindex: 2,
});

//spreed operator;
const arr2 = [7, 8, 12, 9];
const arr1 = arr2;
arr1[0] = 100;
console.log(arr2, arr1);
const badnewarray = [1, 2, arr2[0], arr2[1], arr2[2], arr2[3]];
console.log(badnewarray);
const newarray = [1, 2, ...arr2];
console.log(...newarray);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//making the shallow copies of two array
const mainMenucopy = [...restaurant.mainMenu];
//joint two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables are array ,set ,maps,string ,not objects
const str = 'jonas schmedetan';
const letters = [...str, ' ', 's'];
console.log(letters);
// const ingredients = [
//   prompt('lets make pasta'),
//   prompt('lets make pasta'),
//   prompt('lets make pasta'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
const newrestuarant = {
  ...restaurant,
  founder: 'deepak pal',
  foundationYear: 2000,
};

console.log(newrestuarant);
//this is first level copy only it shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.restaurantname = 'aroma';
restaurantCopy.starterMenu[0] = 'burger';
console.log(restaurant);
console.log(restaurantCopy);

//restpattern and parameters
//exact the same as spreed operators
//it just pack the eleements in one

//spread ,because on right side of =
const arr3 = [1, 2, 3, ...arr2, 4, 20];
const [a2, b2, ...c2] = [1, 2, 3, 4, 5];
c2[0] = 10000;
console.log(arr3);
console.log(a2, b2, c2);

const { sat, ...weekday } = restaurant.openingHours;
console.log(weekday);

const add = function (...arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(add(1, 2, 3), add(1, 2, 3, 4, 5));
restaurant.orderPizza('mushorroms', 'onion', 'olvies', 'spinach');
restaurant.orderPizza('nuts');

//shortcircutiing
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 32 || null);

// const guest = restaurant.numguest ? restaurant.numguest : 10;
// console.log(guest);
restaurant.numguest = 100;
let val = restaurant.numguest || 20;
console.log(val);
val = console.log(' ' || undefined || null);
console.log(val);

//and opertators
//returns first falsy value
console.log(0 && 'jonas');

//nullish :null and undefined (not 0  or "")
const guestcorrect = restaurant.numguest ?? 10;
console.log(guestcorrect);

//coding challegnge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
  printGoals: function (...names) {
    console.log(`number of players are ${names.length}`);
    names.forEach((element) => {
      console.log(element);
    });
  },
};
const player1 = [...game.players[0]];
const player2 = [...game.players[1]];
console.log(player1, player2);
const [gk, ...feildPlayers] = player1;
console.log(feildPlayers);
const allPlayers = [...player1, ...player2];
const players1final = [...player1, 'thiago', 'countinho', 'perisic'];
console.log(players1final);
const {
  odds: { team1, draw, team2 },
} = game;
// console.log(first, second, third);
game.printGoals('rajan', 'deepak', 'ramesh', 'sajan');
const ans = `teams who wins match is ${team1 > team2 ? 'team2' : 'team1'}`;
console.log(ans);

//new ways for looping
const newarrayMenu = [...restaurant.mainMenu];
for (const item of newarrayMenu) {
  console.log(item);
}
for (const item of newarrayMenu.entries()) {
  console.log(item);
}
//arryanme.entries()give the array of two  value, index and element
for (const [i, item] of newarrayMenu.entries()) {
  console.log(i, item);
}

//enchanced object literals
//let say obeject outside of objects
const timing = {
  fri: {
    open: 3,
    close: 5,
  },
  thu: {
    open: 6,
    close: 9,
  },
  mon: {
    open: 10,
    close: 10,
  },
};

const Newrestaurant = {
  restaurantname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your declicisn pasta ,${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainindgredient, ...othersing) {
    console.log(mainindgredient);
    console.log(othersing);
  },
  timing, //getting outiside of the object
};

console.log(Newrestaurant);

const days = ['mon', 'tue', 'thur'];
const secondrestaurant = {
  restaurantname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    [days[0]]: {
      open: 12,
      close: 22,
    },
    [days[1]]: {
      open: 11,
      close: 23,
    },
    [days[2]]: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your declicisn pasta ,${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainindgredient, ...othersing) {
    console.log(mainindgredient);
    console.log(othersing);
  },
};
console.log(secondrestaurant);

//object chaining
//exactly the hours
console.log(secondrestaurant.openingHours.fri);
console.log(secondrestaurant.openingHours?.fri?.open);

console.log(
  secondrestaurant.orderPasta?.('alo', 'began', 'kalu') ?? 'method is not exist'
);
// const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
const users = [];
console.log(users[0]?.name ?? 'user array is empty');

//looping throught to objects
//keys
for (const day of Object.keys(timing)) {
  console.log(day);
}

const values = Object.values(timing);
console.log(values);

const pair = Object.entries(timing);
console.log(pair);
for (const [key, { open, close }] of pair) {
  console.log(key, open, close);
}

const gamesecond = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, j] of gamesecond.scored.entries()) {
  console.log(`Goal ${i + 1}: ${j}`);
}
function calcavg(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  sum = sum / arr.length;
  return sum;
}
const valuesodd = Object.values(gamesecond.odds);
console.log(calcavg(valuesodd));
const property = Object.entries(gamesecond.odds);
for (const [x, y] of property) {
  console.log(`Odd of ${gamesecond[x] ?? 'draw'} : ${y}`);
}
function find_times(name, arr) {
  let cnt = 0;
  for (const item of arr) {
    if (item === name) cnt++;
  }
  return cnt;
}
const scorers = {};
for (const item of gamesecond.scored) {
  scorers[item] = find_times(item, gamesecond.scored);
}
console.log(scorers);

//set is contains uniques values only//in
const orderset = new Set([100, 'rajan', 2, 3, 5, 3, 3, 3, 42, 21, 5, 2]);
console.log(orderset);
//orderset.size();
console.log(orderset.size);
//has property check the include of not
console.log(orderset.has(21));
//insert element using add
orderset.add('garlic bread');
console.log(orderset);
orderset.delete(3);
console.log(orderset);
console.log(orderset.entries());
console.log('from here');
for (const item of orderset) {
  console.log(item);
}
//main apllication fo set is remove the duplicates of elements in array
const staff = ['waiter', 'chef', 'waiter', 'Mangger', 'chef', 'waiter'];
const newstaff = [...new Set(staff)];
console.log(newstaff);

//map in js
const rest = new Map();
rest.set('name', 'classico Italiano');
console.log(rest);
rest.set(1, 'frirenze italy');
rest.set(2, 'lisbon ,portuge');
console.log(rest);
rest.set('catogories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
console.log(rest.get('name'));
const time = 21;
console.log(rest.get(time));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// rest.set([1, 2], 'Test');
const arr5 = [1, 2];
rest.set(arr5, 'test');
console.log(rest);
console.log(rest.get(arr5));

const questions = new Map([
  ['question', 'what is the best programming langueage in world'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascipt'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(questions);

//converting obejects to map
console.log(Object.entries(timing));
const hourseMap = new Map(Object.entries(timing));
console.log(hourseMap);
//maps are iterapble
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(key, value);
  }
}
// const answer = Number(prompt('enter your choice'));
// if (questions.get('correct') === answer) {
//   console.log(questions.get(true));
// } else {
//   console.log(questions.get(false));
// }

const maparray = [...questions];
console.log(maparray);
const maparraykeys = [...questions.keys()];
const maparrayvalues = [...questions.values()];
console.log(maparrayvalues);

//which data strucutres you should use
//sources of data
// program itself
//from the ui(user of data)
//external sources
//array or set
//map and objects

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
for (const [item, value] of gameEvents.entries()) {
  if (item <= 45) {
    console.log(`first half ${value}`);
  } else {
    console.log(`second half ${value}`);
  }
}

//now we learn about the strings
const airline = 'TAP Air Portugal';
const plan = 'A320';
console.log(plan[1]);
//reading the length
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
//check string present in the string if no return -1

console.log(airline.indexOf('Portugal'));
//slice method same as string.substr(index,number) in c++
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));

const lastindex = airline.lastIndexOf(' ');
console.log(airline.slice(lastindex + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//
const checkMiddleSeat = function (seat) {
  //B and e are middle seat
  const char = seat.slice(-1);
  if (char === 'E' || char === 'B') {
    console.log('seat is middle');
    return;
  }
  console.log('corner seat');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
//string is primitive but it has methods
//that ususly objects have
//what js do it turn string into object beghind the scene  js make new String("string name "); and when opertation done js convert back to primitve string

//lets continue with simple methods
console.log(airline.toLowerCase()); //convert to tolowe case
console.log(airline.toUpperCase()); //convert to upper case
const passenger = 'jOnAS'; //it should like Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//comparing email
const emial = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.IO \n';
const lowerEmial = loginEmail.toLowerCase();
console.log(lowerEmial);
const trimmedEmail = lowerEmial.trim(); //remove the white spaces from prefix and suffix
const normalised = loginEmail.toLowerCase().trim();
console.log(normalised);

const priceGb = '288,97₤';
const priceUs = priceGb.replace('₤', '$').replace(',', '.');
console.log(priceUs);

const announcement =
  'All passengers come to bording door 23. Boarding door  23!';
console.log(announcement.replace('door', 'gate').replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//boolean methods
const plane = ' A320neo';
console.log(plan.includes('A32'));
console.log(plan.startsWith('A3')); //down to  leading zeros

//practive exercise
const checkBaggage = function (items) {
  const newitem = items.toLowerCase();
  if (newitem.includes('knife') || newitem.includes('gun')) {
    console.log('YOu are NOt allower on board');
  } else {
    console.log('welcome to board');
  }
};
checkBaggage('i have a laptop,some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
const [beginname, endingname] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', beginname, endingname.toUpperCase()].join(' '); //join method is oppisve of split
const capitilizaName = function (name) {
  const newName = name.toLowerCase().split(' ');
  console.log(newName);
  for (let index = 0; index < newName.length; index++) {
    newName[index] = newName[index][0].toUpperCase() + newName[index].slice(1);
  }
  const normalised = newName.join(' ');
  return normalised;
};
console.log(newName);
console.log(capitilizaName('jonas deepak pal'));

//padding the string
//means adding the certain characters to make the desired length
const message = 'GO to gate 23';
console.log(message.padStart(25, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const n = str.length;
  const newstr = str.slice(-4).padStart(n, '*');
  console.log(newstr);
};
maskCreditCard(8898748230238);
maskCreditCard('3234723847287837283');

//now we learn about the repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(4)); //rrepeating the same string again and again
const planesInLine = function (n) {
  console.log(`There are ${n} planes in waiting\n`.repeat(n));
};
planesInLine(2);
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const convetCamedCase = function (arr) {
  const ans = [];
  for (const item of arr) {
    const finded = item.toLowerCase().split('_');
    for (let index = 1; index < finded.length; index++) {
      finded[index] = finded[index][0].toUpperCase() + finded[index].slice(1);
    }
    ans.push(finded.join(''));
  }
  let nval = -1e9;
  console.log(nval);
  for (let index = 0; index < ans.length; index++) {
    nval = Math.max(nval, ans[index].length);
  }
  nval += 5;
  for (let index = 0; index < ans.length; index++) {
    console.log(ans[index].padEnd(nval, ' '), '🎁'.repeat(index + 1));
  }
};

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const listnames = text.split('\n');
  console.log(listnames);
  convetCamedCase(listnames);
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const newflight = flights.split('+');
console.log(newflight);
const finalAns = [];
for (const item of newflight) {
  const currentFlight = item.split(';');
  console.log(currentFlight);
  const currentans = [];
  currentans.push(currentFlight[0].replaceAll('_', ' ').trim());
  currentans.push('from');
  currentans.push(currentFlight[1].slice(0, 3).toUpperCase());
  currentans.push('to');
  currentans.push(currentFlight[2].slice(0, 3).toUpperCase());
  currentans.push(`(${currentFlight[3].replace(':', 'h')})`);
  finalAns.push(currentans.join(' '));
}
// for (const item of finalAns) {
//   console.log(item);
// }

for (const item of newflight) {
  const [type, from, to, time] = item.split(';');
  const output = `${type.replaceAll('_', ' ').trim()} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toLocaleUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output);
}

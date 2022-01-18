'use strict';
// const x = 12;
// if (x === 12) console.log('we are awesome');
// const calcAge = birthyear => 2027 - birthyear;
// //snippet
// console.log(calcAge(300));
// console.log('i am honest boy');

// //let solve question
// const temperatur = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //find the temperature amplitude
// //
// let minval = 1e9;
// let maxval = -1e9;
// for (let i = 0; i < temperatur.length; i++) {
//   if (typeof temperatur[i] == 'number')
//     maxval = Math.max(maxval, temperatur[i]);
//   if (typeof temperatur[i] == 'number')
//     minval = Math.min(minval, temperatur[i]);
// }
// let ans = Math.abs(maxval - minval);
// console.log(maxval, minval, 'the answer is ', ans);
// const newtemp = [1, -3, 2, 4, 5, 'error'];
// temperatur.push(...newtemp);
// console.log(temperatur);

// const measureKelvin = function () {
//   const measurment = {
//     type: 'temperature',
//     unit: 'celcius',
//     value: Number(prompt('enter the value')),
//   };
//   console.log(measurment.value);
//   console.table(measurment);
//   const kelvin = measurment.value + 273.16;
//   console.log('the answer in kelvin is', kelvin);
// };
//first idetify the bug
// measureKelvin();
const calctemp = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let a = 0;
  let b = 0;
  for (let i = 0; i < temp.length; i++) {
    const ele = temp[i];
    if (typeof ele !== 'number') continue;
    a = Math.max(a, ele);
    b = Math.min(b, ele);
  }
  console.log(a, b);
  return a - b;
};
console.log('the answer is ', calctemp([3, 5, 1], [9, 4, 5]));
//coding challenge
const find_ans = arr => {
  let ans = '';
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    ans += `...${ele}C in ${i + 1} days`;
  }
  return ans;
};
console.log(find_ans([17, 21, 23]));

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//asychronous code is non bloacking in nature means execution is continusly executing and call back functions works in background
//what is api
//api stands for application prorgramming interface
//it basicaly peice of software which is used by another software to comumincation apllications each other
//type of api dom api,geolocation api,weather api,own class api,online api->acatulay host in web api

//AJAX asynchronous js and xmal allows to communicate remote web severse in ans asyncrhous way with ajax we call for data from web servers dyanmically
const getCountrydata = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    console.log(this, 'this pointing here');
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = ` <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} Million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
const rendercountry = function (data) {
  const html = ` <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} Million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
console.log();
// getCountrydata('canada');
// getCountrydata('china');
// getCountrydata('pakistan');
// // getCountrydata('india');
// getCountrydata('afghanistan');
// getCountrydata('nepal');
// getCountrydata('bhutan');
// console.log('here we start');
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   'https://api.open-meteo.com/v1/forecast?latitude=24.4764&longitude=54.3705&hourly=snow_depth,direct_radiation,winddirection_80m,soil_temperature_54cm,soil_moisture_1_3cm'
// );
// request.send();
// request.addEventListener('load', function () {
//   console.log(this.responseText);
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
// });

//how web works
//client------>web servers
//client<---------web servers

//callback hell
//when we hae nested callback functioons
// const country = 'portugal';
// const request = fetch(`https://restcountries.com/v2/name/${country}`);
// console.log(request);
// promise an object that is used as placeholder for the future result of an asynchorounous operation
//or  a container for a fulture value ,a container for any asynochroulysl deliverred value

// what are the advantages of using promises
//  we no need to depend upont the evernts and callback fuctios for the asychorououse opertion
//save from the callback hell we use chaining of promises

//lifcyle of promises
// pending ->async task ->consume->fullfilled or rejected
const promisecountrydata = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      function (response) {
        if (response.ok == false) throw new Error('country not found');
        return response.json();
      },
      err => alert(err)
    )
    .then(function (data) {
      rendercountry(data[0]);
    })
    .catch(err => alert(err))
    .finally(() => {
      //this function works alqya f
    });
};
promisecountrydata('portugal');
btn.addEventListener('click', function () {
  promisecountrydata('protugal');
});
const whereAmi = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (response.ok == false) throw new Error('location not found');
      return response.json();
    })
    .then(data => {
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('country not found');
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err.message);
    });
};
function geolocationfinder() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log([latitude, longitude]);
      whereAmi(latitude, longitude);
    });
  } else {
    alert('locations is not found');
  }
}
// geolocationfinder();
// whereAmi(52.508, 13.381);
// whereAmi(19.037, 72.873);
// whereAmi(40.7128, 74.006);

//event loop check call stack is empty ,
//then it put code from call back quue to call stack to executed
//promises have microstask queue ,this have priority overt calll back queue

//making own promises
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You win a lottery');
//   } else {
//     reject('404 page not found');
//   }
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//promisifying the set timout
const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};
wait(4)
  .then(() => {
    console.log('we wai for 4 sec');
    return wait(2);
  })
  .then(() => {
    console.log('we we wai 3');
  });

//promisifying api
navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position);
  },
  err => {
    console.log(err);
  }
);
const getpostions = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};
getpostions()
  .then(res => console.log(res))
  .catch(err => console.log(err));
let cimg;

const imgcontainer = document.querySelector('.images');

const createimage = function (imgpath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgpath;
    cimg = img;
    img.addEventListener('load', function () {
      imgcontainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};
// createimage('img/img-1.jpg')
//   .then(img => {
//     return wait(5);
//   })
//   .then(() => {
//     cimg.style.display = 'none';
//     return createimage('img/img-2.jpg');
//   })
//   .then(img => {
//     return wait(3);
//   })
//   .then(() => {
//     cimg.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

//consuming promises with asyn and wait
const wheremycurrenpostion = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    //await stop the until fetch not complete it run ibn backgorund does not block main threat
    if (res.ok == false) throw new Error('country not found');
    const data = await res.json();
    console.log(data);
    return `you are in the country ${country}`;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
// console.log('first');
// wheremycurrenpostion('portugal').then(city => {
//   console.log(city);
// });
(async function () {
  try {
    const city = await wheremycurrenpostion('india');
    console.log(city);
  } catch (err) {
    console.error(err.message);
  }
})();
//eventhrough if in aync function but promise return will still fulifiles to get the error we rethrow error
//try and cacthc method to error handling

//promises running in parallel
const getjson = function (path) {
  return fetch(path).then(res => {
    if (res.ok == false) throw new error('somthing went wrong!');
    return res.json();
  });
};
const getcountries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getjson(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getjson(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getjson(`https://restcountries.com/v2/name/${c3}`);
    const data = await Promise.all([
      getjson(`https://restcountries.com/v2/name/${c1}`),
      getjson(`https://restcountries.com/v2/name/${c2}`),
      getjson(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    // console.log(data1.capital, data2.capital, data3.capital);
    console.log(data.map(d => d[0].capital));
    //if one promise reject other all rejects
  } catch (err) {
    console.log(err);
  }
};
getcountries('portugal', 'canada', 'tanzania');
//promise combinatiors
//promise.race();
(async function () {
  const response = await Promise.race([
    getjson(`https://restcountries.com/v2/name/portugal`),
    getjson(`https://restcountries.com/v2/name/canada`),
    getjson(`https://restcountries.com/v2/name/tanzania`),
  ]);
  console.log(response);
})();

const timeout = function (s) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error('request to long'));
    }, s * 1000);
  });
};
Promise.race([
  getjson(`https://restcountries.com/v2/name/tanzania`),
  timeout(3),
])
  .then(res => {
    console.log(res[0]);
  })
  .catch(err => {
    console.log(err);
  });

//promise.allSettled //it return all results which are rejtedt or fullfilled
//promise any return first full fill promise butt work with reject or ignore it
const loadall = async function (imgarr) {
  try {
    const imags = imgarr.map(async ele => await createimage(ele));
    const imgele = await Promise.all(imags);
    console.log(imgele);
    imgele.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};
loadall(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document);
const allbtn = document.getElementsByTagName('button');
console.log(allbtn);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we are for you bro <button class="btn btn-close-cookie">GOt it!</button>';
console.log(message);
console.log(header);
// header.prepend(message);
// header.append(message.cloneNode(true));
message.style.backgroundColor = '#37383d';
console.log(document.querySelectorAll('[alt]'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1cords = section1.getBoundingClientRect(); //it gives the coordinate of selected element
  console.log(s1cords);
  console.log(e.target.getBoundingClientRect());
  console.log('page pos ', window.pageXOffset, window.pageYOffset);
  console.log(
    'page viweport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrooling to sections1
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//events is kind of signal which changes the view of page
//hover ,click ,scroll etc.
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   //mousenter is kind of hover effect in css

//   alert('you are reading the headings');

//   //we can remove listner
//   // h1.removeEventListener("mouseenter",//here is functions name);
// });

//events propagation
const randomint = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`;
};
console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('link');
  console.log(this);
  // this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('link');
  // this.style.backgroundColor = randomColor();
  // e.stopPropagation();
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log('link');
    // this.style.backgroundColor = randomColor();
  },
  false
);

//page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//learning about DOM tranversing in practice
const section = document.querySelector('#section--1');
console.log(section.querySelectorAll('div'));

// You can traverse in three directions:

// Downwards
// Sideways
// Upwards

// There are two methods to traverse downwards:

// querySelector or querySelectorAll
// children

// There are two methods to traverse upwards:

// parentElement
// closest

// There are three methods to traverse sideways:

// nextElementSibling
// previousElementSibling
// Combining parentElement, children, and index.

const tabparent = document.querySelector('.operations__tab-container');
// tabparent.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(e.target);
//   if (
//     e.target.classList.contains('btn') &&
//     !e.target.classList.contains('operations__tab--active')
//   ) {
//     tabparent.querySelectorAll('button').forEach(function (ele) {
//       console.log(ele);
//       if (ele.classList.contains('operations__tab--active')) {
//         ele.classList.remove('operations__tab--active');
//       }
//     });
//     e.target.classList.add('operations__tab--active');
//     //now remove from the div data also
//   }
// });

const tabs = document.querySelectorAll('.operations__tab');
const operationContent = document.querySelectorAll('.operations__content');
tabparent.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (clicked && !clicked.classList.contains('operations__tab--active')) {
    tabs.forEach(function (ele) {
      ele.classList.remove('operations__tab--active');
    });
    clicked.classList.add('operations__tab--active');
    //now we have to add corresponding data to answer
    operationContent.forEach(function (ele) {
      ele.classList.remove('operations__content--active');
    });
    const idNumber = clicked.getAttribute('data-tab');
    // console.log(idNumber);
    operationContent.forEach(function (ele) {
      if (ele.classList.contains(`operations__content--${idNumber}`)) {
        ele.classList.add('operations__content--active');
      }
    });
  }
});

//fadding the nav bar
const nav = document.querySelector('.nav');
const handleover = function (e) {
  console.log(this);
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    logo.style.opacity = this[0];
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this[0];
      }
    });
  }
};
// nav.addEventListener('mouseover', function (e) {
//   handleover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleover(e, 1);
// });
//we call handler functions with arguments using this keywords and event
nav.addEventListener('mouseover', handleover.bind([0.4, 'deepak', 'pal']));
nav.addEventListener('mouseout', handleover.bind([1]));

//sticky navigations
// const initalcord = section1.getBoundingClientRect();
// // console.log(initalcord);
// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);
//   if (window.scrollY > initalcord.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//intersections overserver api;
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

//now we start sticky
const headercallback = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting == false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const navheight = nav.getBoundingClientRect().height;
const headerobserver = new IntersectionObserver(headercallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
});
headerobserver.observe(header);

//revealling sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(ele => {
  sectionObserver.observe(ele);
  // ele.classList.add('section--hidden');
});

//lazy loading imgages
const imgtargets = document.querySelectorAll('img[data-src]');
const imgcallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgobserver = new IntersectionObserver(imgcallback, {
  root: null,
  threshold: '0.2',
  rootMargin: '200px',
  behavior: 'smooth',
});
imgtargets.forEach(ele => {
  imgobserver.observe(ele);
});

//sliders;

const slides = document.querySelectorAll('.slide');
const intializeSlides = function () {
  slides.forEach((s, i) => {
    s.setAttribute('style', `transform:translateX(${100 * i}%)`);
  });
};
const leftbtn = document.querySelector('.slider__btn--left');
const rightbtn = document.querySelector('.slider__btn--right');
const slideslength = slides.length;
let currentSlideNumber = 0;

intializeSlides();

const adctivateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const nextslide = function () {
  if (currentSlideNumber < slideslength - 1) {
    slides.forEach((s, i) => {
      const oldval = s.computedStyleMap().get('transform')[0].x.value;
      const newval = oldval - 100;
      s.setAttribute('style', `transform:translateX(${newval}%)`);
    });
    currentSlideNumber++;
    adctivateDot(currentSlideNumber);
  } else {
    intializeSlides();
    currentSlideNumber = 0;
    adctivateDot(0);
  }
};
rightbtn.addEventListener('click', function (e) {
  e.preventDefault();
  nextslide();
});
const prevslide = function () {
  if (currentSlideNumber > 0) {
    slides.forEach((s, i) => {
      const oldval = s.computedStyleMap().get('transform')[0].x.value;
      const newval = oldval + 100;
      s.setAttribute('style', `transform:translateX(${newval}%)`);
    });
    currentSlideNumber--;
    adctivateDot(currentSlideNumber);
  }
};
leftbtn.addEventListener('click', function (e) {
  e.preventDefault();
  prevslide();
});
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key == 'ArrowRight') {
    nextslide();
  } else if (e.key == 'ArrowLeft') {
    prevslide();
  }
});

const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
void adctivateDot(0);
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    currentSlideNumber = slide;
    slides.forEach((s, i) => {
      s.setAttribute('style', `transform:translateX(${100 * (i - slide)}%)`);
      adctivateDot(currentSlideNumber);
    });
  }
});
window.addEventListener('beforeunload', function (e) {
  // e.preventDefault();
  e.returnValue = '';
});

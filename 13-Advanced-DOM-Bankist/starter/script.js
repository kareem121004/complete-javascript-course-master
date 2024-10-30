'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(open => open.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  const s1Coordinates = section1.getBoundingClientRect(); // coordinates
  // console.log(s1Coordinates);
  // console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);  // x , y

  // Scrolling

  // window.scrollTo(
  //   s1Coordinates.left + window.pageXOffset,
  //   s1Coordinates.top + window.pageYOffset
  // );

  // Smooth Scrolling

  // window.scrollTo({
  //   left: s1Coordinates.left + window.pageXOffset,
  //   top: s1Coordinates.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (ele, idx) {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     // const id = this.getAttribute('href');
//     // const section = document.querySelector(id);
//     const section = document.getElementById(`section--${idx + 1}`);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// better solution using bubbling

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;
  // Active Tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu Fade Animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////

// Sticky Navigation

// const coord = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > coord.top) nav.classList.add('sticky');
//   else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky Navigation : Intersection Observer API

// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const headerCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(headerCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////

// Reveal Section

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // guard
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////

// lazy loading images

const imgTarget = document.querySelectorAll('img[data-src]');
// const imgTarget1 = document.querySelectorAll('.lazy-img');
const imgLoading = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.getAttribute('data-src');

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgLoading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => {
  imgObserver.observe(img);
});

///////////////////////////////////////

// Slider

const sliding = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0,
    maxSlide = slides.length;

  // slider.style.transform = `scale(0.4) translateX(-800px)`;
  // slider.style.overflow = 'visible';

  const createDots = function () {
    slides.forEach(function (_, idx) {
      const html = `<button class="dots__dot" data-slide="${idx}"></button>`;
      dotContainer.insertAdjacentHTML('beforeend', html);
    });
  };

  const activateSlide = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(d => d.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateSlide(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      goToSlide(e.target.getAttribute('data-slide'));
      activateSlide(e.target.getAttribute('data-slide'));
    }
  });
};

sliding();

///////////////////////////////////////
/*
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));
console.log(document.querySelectorAll('.btn'));

// Creating
// .insertAdjacentHTMl

// Method 1
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.insertAdjacentElement('afterbegin', message);
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)); // copy message to display it more than once

// header.before(message); // sibling of the header but before it
// header.after(message); // sibling of the header but after it

// Method 2
// const html = `<div class="cookie-message"> karim adel mohamed </div>`;
// header.insertAdjacentHTML('afterbegin', html);

// Deleting Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // recent way
    // message.parentElement.removeChild(message); // old way
  });

// Styles

message.style.backgroundColor = 'navy';
message.style.width = '120%';
// message.style.setProperty('color', 'red');

console.log(message.style.color); // None can't access sheet ele
console.log(message.style.backgroundColor); // navy

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 114px

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.designer); // undefined

console.log(logo.getAttribute('designer')); // karim
console.log(logo.getAttribute('src'));

logo.alt = 'minimal logo';
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('data-version-number'));
console.log(logo.dataset.versionNumber);


const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('U hovered over the ele');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = alertH1;



const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomRGB = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRGB();
  console.log('LINK', e.target, e.currentTarget); // target = the element that we clicked, currentTarget = current element
  console.log(e.currentTarget === this); // true

  // stop propagation or bubbling
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRGB();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRGB();
  console.log('NAV', e.target, e.currentTarget);
});



// DOM Traversing
const h1 = document.querySelector('h1');
console.log(h1);

// going downwards: child

console.log(h1.querySelectorAll('.highlight')); // child of h1
console.log(h1.childNodes); // all the children of h1
console.log(h1.children); // the element children of h1
h1.firstElementChild.style.color = 'blue';
h1.lastElementChild.style.color = 'orangered';

// going upwards: child
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header')); // the closest parent

h1.closest('.header').style.background = 'yellow';
h1.closest('h1').style.color = 'red';

// going sideways: siblings

// we can only get the previous and next Siblings ,but there is a trick
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// trick

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (ele) {
  if (ele !== h1) ele.style.transform = 'scale(0.5)';
});


*/

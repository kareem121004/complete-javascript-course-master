'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

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
///////////////////////////////////////
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
*/

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
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

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `
We use 🍪 for improved functionality and analytics.
<button class='btn btn--close--cookie'>Got it!</button>
`;

header.append(message);
// header.prepend(message.cloneNode(true));
// header.after(message)

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', () => message.remove());

message.style.backgroundColor = '#37383d';
header.style.padding = `0px`;
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).width);

// CHANGING CUSTOM CSS PROPERTY
// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'Beautiful minimalist logo!';

// non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute(`designer`));
// logo.setAttribute(`company`, `Pitos Company`);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

///////////////////
// SMOOTH SCROLLING
document.querySelector(`.nav__links`).addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector(`h1`);

// going downwards - childs
// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `yellow`;

// going upwards - parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(`.header`).style.background = 'var(--gradient-secondary)';
// h1.closest(`h1`).style.background = 'var(--gradient-primary)';

// going sideways - siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// tabbed components
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);
  // guard clause
  if (!clicked) return;
  // actve tab
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);
  // activate content area
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

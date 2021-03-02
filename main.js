'use strict';

const rightMenu = document.querySelector('.header__right');
rightMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

 scrollIntoView(link);

});

const columnMenu = document.querySelector('.footer__column');
columnMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

 scrollIntoView(link);

});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionsClass.indexOf(selector)]);
};

//arrow

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY < headerHeight / 2) {
    arrowDown.classList.add('visible');
  } else {
    arrowDown.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('.team__intro');
});

arrowDown.addEventListener('click', () => {
  scrollIntoView('.footer__column');
});
'use strict';

let counter = 0;

function myFunction() {
  counter++;
  const menu = document.getElementById('menu');
  menu.classList.toggle('menu_active');
  const menuButton = document.getElementById('menu_button');
  menuButton.classList.toggle('menu_button_active');
  const signInButton = document.getElementById('sign_in_button');
  const freeTrialButton = document.getElementById('free_trial_button');
  const logo_img = document.getElementById('logo_img');
  const before = document.getElementById('before');
  const after = document.getElementById('after');
  const elements = [signInButton, freeTrialButton, logo_img, before, after];
  if (counter % 2) {
    for (const element of elements) {
      element.style.position = 'unset';
      menuButton.style.right = '30px';
    }
  } else {
    for (const element of elements) {
      element.style.position = 'absolute';
      menuButton.style.right = '-45px';
    }
  }
};

const add = value => value + '</li>';

const list = document.getElementById('listOfShows');

const items = list.innerHTML.split('</li>').map(add);

window.addEventListener('load', () => {
  list.innerHTML = items.slice(0, 5).join('');
});

let first = 0;

let numOfElements = 5;

const leftButton = document.getElementById('leftButton');

const rightButton = document.getElementById('rightButton');

rightButton.addEventListener('click', () => {
  if (first < 10 - numOfElements) {
    first++;
    list.innerHTML = items.slice(first, first + numOfElements).join('');
  }
});

leftButton.addEventListener('click', () => {
  if (first > 0) {
    first--;
    list.innerHTML = items.slice(first, first + numOfElements).join('');
  }
});

const change = () => {
  const element = document.getElementById(logos[count]);
  const px1 = element.style.height;
  const px2 = element.style.paddingBottom;
  const height = Number(px1.substr(0, px1.length - 2));
  const pad = Number(px2.substr(0, px2.length - 2));
  if (window.innerWidth > 1280) {
    if (!smaller && height < 200) {
      const newHeight = height + 0.5;
      element.style.height = newHeight.toString() + 'px';
      element.style.paddingBottom = String(pad - 0.5) + 'px';
    }
    if (height >= 200) smaller++;
    if (smaller && height > 150) {
      const newHeight = height - 0.5;
      element.style.height = newHeight.toString() + 'px'
      element.style.paddingBottom = String(pad + 0.5) + 'px';
    }
    if (smaller && height <= 150) {
      smaller--;
      count++;
    }
    if (count > 6) count = 0;
  }
  else {
    for (const value of logos) {
      document.getElementById(value).style.height = '80px';
      document.getElementById(value).style.paddingBottom = '20px';
    }
  }
  requestAnimationFrame(change);
};

let previousWidth = innerWidth;

const check = () => {
  if (previousWidth < 1280 && window.innerWidth >= 1280) {
    for (const val of logos) {
      document.getElementById(val).style.height = '150px';
      document.getElementById(val).style.paddingBottom = '50px';
    }
  }
  if (window.innerWidth < 870) numOfElements = 2;
  else numOfElements = 5;
  if (first > 5 && window.innerWidth >= 870) list.innerHTML = items.slice(5, 5 + numOfElements).join('');
  else list.innerHTML = items.slice(first, first + numOfElements).join('');
  previousWidth = window.innerWidth;
  requestAnimationFrame(check);
}

const logos = ['wb', 'hbo', 'dc', 'as', 'cw', 'tnt', 'tbs'];

for (const val of logos) {
  document.getElementById(val).style.height = '150px';
  document.getElementById(val).style.paddingBottom = '50px';
}

let smaller = 0;
let count = 0;

requestAnimationFrame(change);
requestAnimationFrame(check);

let previous = 0;

window.addEventListener('scroll', () => {
  if (!(counter % 2)) {
    if (previous > this.scrollY) {
      document.getElementById('logo_img').style.position = 'fixed';
      document.getElementById('before').style.position = 'fixed';
      document.getElementById('after').style.position = 'fixed';
    }
    else {
      document.getElementById('logo_img').style.position = 'absolute';
      document.getElementById('before').style.position = 'absolute';
      document.getElementById('after').style.position = 'absolute';
    }
  }
  previous = this.scrollY;  
});

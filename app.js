//Paint range input when document loads and input changes
const rangeInput = document.getElementById('input-range');
const radioBtn = document.querySelector('.radio-btn');
const toggler = document.querySelector('.toggle');
const viewCount = document.getElementById('viewcount');
const price = document.getElementById('price');
let toggled = false;

const calculateDiscount = function () {
  !toggled ? (price.textContent = (+viewCount.textContent * 0.16).toFixed(2)) : (price.textContent = (+viewCount.textContent * 0.16 * 0.75).toFixed(2));
};

const slider = function () {
  let value = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
  rangeInput.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`;
  viewCount.textContent = rangeInput.value;
  calculateDiscount();
};

rangeInput.addEventListener('input', slider);
document.addEventListener('load', slider());

//TOGGLE BUTTON
const toToggle = function (e) {
  e.preventDefault();
  toggler.classList.toggle('toggled');
  toggled = !toggled;
  calculateDiscount();
};

radioBtn.addEventListener('click', toToggle);

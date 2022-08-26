"use strict";

var whiteButton = document.getElementById("white");
var greenButton = document.getElementById("green");
var darkMode = document.getElementsByClassName("dark-img");
var lightMode = document.getElementsByClassName("light-img");
var body = document.body;
var className = document.body.className;
var theme = localStorage.getItem('theme');

if (theme) {
  body.classList.replace(className, theme);
  className = theme;
}

greenButton.onclick = function () {
  body.classList.replace(className, 'green');
  className = 'green';
  localStorage.setItem('theme', 'green');
  greenButton.style.display = 'none';
  whiteButton.style.display = 'block';
};

whiteButton.onclick = function () {
  body.classList.replace(className, 'white');
  className = 'white';
  localStorage.setItem('theme', 'white');
  whiteButton.style.display = 'none';
  greenButton.style.display = 'block';
};
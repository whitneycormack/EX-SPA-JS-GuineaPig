
var header = document.getElementById("page-header");
var pageTitle = document.getElementById("page-title");
var section = document.getElementsByClassName("article-section");
var keypressInput = document.getElementById("keypress-input");
var outputTarget = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var hulkify = document.getElementById("hulkify");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");
var buttons = document.getElementsByClassName("buttons");

for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("click", (function(event) {
    outputTarget.innerHTML = `You clicked on the ${event.currentTarget.innerHTML} section`;
  }));
}

pageTitle.addEventListener("mouseover", (function(event) {
  outputTarget.innerHTML = `You moved your mouse over the header!`;
}));

pageTitle.addEventListener("mouseout", (function(event) {
  outputTarget.innerHTML = `You left me!`;
}));

keypressInput.addEventListener("keyup", (function(event) {
  outputTarget.innerHTML = keypressInput.value;
}));

addColor.addEventListener("click", (function(event) {
  guineaPig.classList.toggle("blue");
}));

hulkify.addEventListener("click", (function(event) {
  guineaPig.classList.toggle("hulkify");
}));

addBorder.addEventListener("click", (function(event) {
  guineaPig.classList.toggle("captured");
}));

addRounding.addEventListener("click", (function(event) {
  guineaPig.classList.toggle("round");
}));

section[0].classList.add("bold");

section[section.length - 1].classList.add("italics");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].classList.add("block");
};





document.addEventListener("DOMContentLoaded", () => {

const mainContent = document.querySelector(".main-content");
const changeColors = document.getElementById("changeColors");


//Create and append color boxes
for (let index = 0; index < 20; index++) {
const colorBox = document.createElement("div");
colorBox.classList.add("color-box");
mainContent.appendChild(colorBox);
}
//button
changeColors.addEventListener("click", (event) => {
event.preventDefault();
showNewColors();
});

const showNewColors = () => {
const allColorBoxes = document.querySelectorAll(".color-box");
allColorBoxes.forEach((box) => {
const newCode = randomCode();
box.style.backgroundColor ="#" + newCode;
box.innerText = "#" + newCode;
});
}

const randomCode = () => {
const characters = "0123456789abcdef";
const codeLength = 6;
let randomColor = "";
for (let index = 0; index < codeLength; index++) {
const randomNumber = Math.floor(Math.random() * characters.length);

randomColor += characters[randomNumber];
//console.log(randomColor);
}
  return randomColor;
};
  // Initial call to show colors
  showNewColors();
});
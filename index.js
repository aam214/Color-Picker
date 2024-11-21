document.addEventListener("DOMContentLoaded", () => {

const mainContent = document.querySelector(".main-content");
const changeColors = document.getElementById("changeColors");

for (let index = 0; index < 20; index++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  mainContent.appendChild(colorBox);
}

const allColorBoxes = document.querySelectorAll(".color-box");
//console.log(allColorNumbers);
showColors();

changeColors.addEventListener("submit", (event) => {
  event.preventDefault();
  showColors();
});

function showColors() {
allColorBoxes.forEach((colorNumber) => {
const newCode = randomCode();
colorNumber.style.backgroundColor ="#" + newCode;
colorNumber.innerText = "#" + newCode;
});
}

function randomCode() {
  const characters = "0123456789abcdef";
  const codeLength = 6;
  let randomColor = "";
  for (let index = 0; index < codeLength; index++) {
  const randomNumber = Math.floor(Math.random() * characters.length);

  randomColor += characters.substring(randomNumber, randomNumber +1);
   //console.log(randomColor);
  }
  return randomColor;
}
});
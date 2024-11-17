document.addEventListener("DOMContentLoaded", () => {

  const mainContent = document.querySelector(".main-content");

for (let index = 0; index < 10; index++) {
  const colorNumber = document.createElement("div");
  colorNumber.classList.add("color-number");
  mainContent.appendChild(colorNumber);
}

const allColorNumbers = document.querySelectorAll("color-number");
console.log(colorNumberBoxes);

function showColors() {

}
randomCode();

function randomCode() {
  const characters = "0123456789abcdef";
  const codeLength = 6;
  let randomColor = "";
  for (let index = 0; index < codeLength; index++) {
  const randomNumber = Math.floor(Math.random() * characters.length);

  randomColor += characters.substring(randomNumber, randomNumber +1);
   console.log(randomColor);
  }}
});
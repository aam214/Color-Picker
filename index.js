document.addEventListener("DOMContentLoaded", () => {
const mainContent = document.querySelector(".main-content");

for (let index = 0; index < 10; index++) {
  const colorNumber = document.createElement("div");
  colorNumber.classList.add("color-number");
  mainContent.appendChild(colorNumber);
}
});
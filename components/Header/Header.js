import "./Header.css";

const template = () => `
<div class="colorMode">
<button id="changeColor">🎨</button>
</div>
`;

const changeColor = () => {
  let number = "0123456789ABCDEF";
  let change = "#";
  for (let i = 0; i < 6; i++) {
    change += number[Math.floor(Math.random() * 16)];
  }
  return change;
};

const addListeners = () => {
  document.querySelector("#changeColor").addEventListener("click", () => {
    document.body.style.background = changeColor();
  });
};

export const PrintTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};

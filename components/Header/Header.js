import "./Header.css";
import { initContent } from "../../main";
const template = () => `
<div class="colorMode">
<button type="button" id="back" class="atras"> ⬅️         
Back</button>
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

const back = () => {
  const backBtn = document.querySelector("#back");
  backBtn.addEventListener("click", () => {
    document.querySelector("#app").innerHTML = "";
    initContent("Hub_Games");
  });
};

export const PrintTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
  back();
};

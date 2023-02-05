import "./Ahorcado.css";
import { initContent } from "../../main";

export const template = () => `
<div class="container">
    <div class="game">
        <div class="imagen">
        <img    src="https://res.cloudinary.com/dy4mossqz/image/upload/v1675616663/img/ahorcado6_wctiu8.png" alt="Ahorcado vacio">
        </div>
        <div class="respuestas">
        </div>
    </div>
    
    <div class="letras"></div>
</div>

`;

let letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "W",
  "x",
  "y",
  "z",
];

const buttonsLetter = () => {
  const buttons = document.querySelector(".letras");
  for (const letra of letras) {
    const btn = document.createElement("button");
    const text = document.createTextNode(letra);
    btn.appendChild(text);
    buttons.appendChild(btn);
    btn.addEventListener("click", () => {});
  }
};

let respuestas = ["perro", "vaca", "gato", "conejo"];

let respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];

const letterSpan = () => {
  for (let i = 0; i < respuesta.length; i++) {
    const div = document.querySelector(".respuestas");
    const spans = document.createElement("span");
    const text = document.createTextNode(respuesta[i]);
    spans.appendChild(text);
    div.appendChild(spans);
  }
};

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  buttonsLetter();
  letterSpan();
};

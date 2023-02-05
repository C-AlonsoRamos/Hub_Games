import "./Game_PPT.css";
import { initContent } from "../../main";

export const template = () => `

<div class="container">
    
    <div class="contenedor">
      <div class="nav">
        <button type="button" id="newPlay">play again</button>
      </div>
      <div class="game">
        
        <div class="player1">
            <button type="button" id="piedra" class="piedra">🪨</button>
            <button type="button" id="papel" class="papel">🧻</button>
            <button type="button" id="tijera" class="tijera">✂️</button>
        </div>
        <div class="result">
            <div  id ="res1"class="result1"></div>
            <div id="res2" class="result2"></div>
        </div>
        <div class="player2">
        <button type="button" id="piedra1" class="piedra1">🪨</button>
        <button type="button" id="papel1" class="papel">🧻</button>
        <button type="button" id="tijera1" class="tijera">✂️</button>
        </div>
      </div>
      <div class="winner"></div>
    
    </div>
</div>

`;
let player1 = [];
let player2 = [];

const comparation = () => {
  if (
    (player1 == 1 && player2 == 1) ||
    (player1 == 2 && player2 == 2) ||
    (player1 == 3 && player2 == 3)
  ) {
    document.querySelector(".winner").innerHTML = `¡ Habeis empatado !`;
    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 3) ||
    (player1 == 2 && player2 == 1) ||
    (player1 == 3 && player2 == 2)
  ) {
    document.querySelector(".winner").innerHTML = `¡ Winner player1 🏆 !`;
    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 2) ||
    (player1 == 2 && player2 == 3) ||
    (player1 == 3 && player2 == 1)
  ) {
    document.querySelector(".winner").innerHTML = `¡ Winner player2 🏆 !`;
    player1 = [];
    player2 = [];
  }
};

const piedra = () => {
  player1 = [];
  document.querySelector("#piedra").addEventListener("click", () => {
    document.querySelector("#res1").innerHTML = `🪨`;
    player1.push(1);
    comparation();
  });
};

const papel = () => {
  player1 = [];
  document.querySelector("#papel").addEventListener("click", () => {
    document.querySelector("#res1").innerHTML = `🧻`;
    player1.push(2);
    comparation();
  });
};

const tijera = () => {
  player1 = [];
  document.querySelector("#tijera").addEventListener("click", () => {
    document.querySelector("#res1").innerHTML = `✂️`;
    player1.push(3);
    comparation();
  });
};

const piedra1 = () => {
  player2 = [];
  document.querySelector("#piedra1").addEventListener("click", () => {
    document.querySelector("#res2").innerHTML = `🪨`;
    player2.push(1);
    comparation();
  });
};

const papel1 = () => {
  player2 = [];
  document.querySelector("#papel1").addEventListener("click", () => {
    document.querySelector("#res2").innerHTML = `🧻`;
    player2.push(2);
    comparation();
  });
};

const tijera1 = () => {
  player2 = [];
  document.querySelector("#tijera1").addEventListener("click", () => {
    document.querySelector("#res2").innerHTML = `✂️`;
    player2.push(3);
    comparation();
  });
};

const btnPlay = () => {
  document
    .querySelector("#newPlay")
    .addEventListener("click", () => PrintTemplate());
};

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  piedra();
  papel();
  tijera();
  piedra1();
  papel1();
  tijera1();
  btnPlay();
};

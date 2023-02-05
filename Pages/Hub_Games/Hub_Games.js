import "./Hub_Games.css";
import { PrintTemplate as loginTemplate } from "../Login/Login";
import { initContent } from "../../main";

let name;
const template = () => `
<section class="home">
  <div class="nav"> 
  <button type="button" id="logout" class="exit">⬅️ EXIT</button>
    <p>Bienvenido a tu sala de juegos : ${name}</p>
   
  </div>
  <div class="games">
    <a href="#" id ="poke">PokeApi</a>
    <a href="#" id="ppt">Game PPT</a>
    <a href="#" id="ahorcado">Ahorcado</a>
    <a href="#"></a>
  </div>
  
</section>

`;

const resset = () => {
  document.querySelector("#logout").addEventListener("click", () => {
    localStorage.removeItem("user");

    initContent(loginTemplate());
  });
};

const poke = () => {
  document.querySelector("#poke").addEventListener("click", () => {
    initContent("PokeApi");
  });
};

const pptGame = () => {
  document.querySelector("#ppt").addEventListener("click", () => {
    initContent("Game_ppt");
  });
};

const ahorcadoGame = () => {
  document.querySelector("#ahorcado").addEventListener("click", () => {
    initContent("Game_Ahorcado");
  });
};

export const PrintTemplate = () => {
  name = localStorage.getItem("user");
  document.querySelector("#app").innerHTML = template();
  resset();
  poke();
  pptGame();
  ahorcadoGame();
};

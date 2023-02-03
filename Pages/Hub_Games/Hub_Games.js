import "./Hub_Games.css";
import { PrintTemplate as loginTemplate } from "../Login/Login";
import { initContent } from "../../main";

let name;
const template = () => `
<section class="home">
  <div>
    <p>Bienvenido a HUB_GAMES : ${name}</p>
    <button type="button" id="logout">⬅️ EXIT</button>
  </div>
  <div class="games">
    <a href="#" id ="poke">PokeApi</a>
    <a href="#"></a>
    <a href="#"></a>
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

export const PrintTemplate = () => {
  name = localStorage.getItem("user");
  document.querySelector("#app").innerHTML = template();
  resset();
  poke();
};

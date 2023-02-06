import "./Login.css";
import { initContent } from "../../main";

const home = () => {
  const back = document.querySelector(".atras");
  back.style.display = "none";
};

const template = () => `
<section class="login">
<h1>hub-games</h1>
<label for="nombre">Introduce tu nombre</label>
<input type="text" id="nombre" placeholder="Escribe aquí tu nombre">
<button id="loginBtn" >👌 Al vicio!!</button>
</section>
`;

const addListeners = () => {
  const loginBtn = document.querySelector("#loginBtn");
  const nombre = document.querySelector("#nombre");
  loginBtn.addEventListener("click", () => {
    localStorage.setItem("user", nombre.value);
    if (nombre.value) {
      initContent("Hub_Games");
    }
  });
};

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
  home();
};

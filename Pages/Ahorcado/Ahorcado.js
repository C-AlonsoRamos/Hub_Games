import "./Ahorcado.css";
import { initContent } from "../../main";

const home = () => {
  const back = document.querySelector(".atras");
  back.style.display = "block";
};

export const template = () => `
<div class="container">
    <div class="game">
        
        <div class="imagen">
        <img    src="../../public/img/0.png" alt="Ahorcado vacio" id="imagenes">
        </div>
        <div class="res"> 
          <div class="opciones">
          <button  type="button" id="btnRandon">nueva palabra</button>
          </div>
          <div class="respuestas"></div>
          <div class="winner"></div>
        </div>
        
    </div>
    
    <div class="letras"></div>
    <div class="newGame"></div>
</div>

`;
//inicializo las variables en 0:
let aciertos = 0;
let fallos = 0;

let respuestas = ["perro", "vaca", "gato", "conejo"];

let respuesta;
// recupero el boton randon y al hacer click me tapa el btn, y los btns del teclado los activa,
const respuestasbtn = () => {
  const btnrespuestas = document.querySelector("#btnRandon");
  btnrespuestas.addEventListener("click", () => {
    btnrespuestas.disabled = true;
    const teclado = document.querySelectorAll(".allbtns");
    for (const item of teclado) {
      item.disabled = false;
    }
    // inicializo los fallos y aciertos a 0 cada vez que empiece el juego.
    aciertos = 0;
    fallos = 0;
    // creamos la respuesta de manera randon y al recorrer esa palabra creamos un span por cada letra que contiene la palabra.
    respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    for (let i = 0; i < respuesta.length; i++) {
      const div = document.querySelector(".respuestas");
      const spans = document.createElement("span");
      div.appendChild(spans);
    }
  });
};
// array con todas las letras para despues crear los botones.
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
// recorremos las letras y por cada una creo un boton con una clase y el valor de esa letra.
const buttonsLetter = () => {
  for (const letra of letras) {
    const buttons = document.querySelector(".letras");
    const btn = document.createElement("button");
    btn.classList.add("allbtns");
    const text = document.createTextNode(letra);
    btn.appendChild(text);
    buttons.appendChild(btn);
    btn.disabled = true; // aqui las letras salen tapadas
    // añadimos un ev click a todos los btns y recuperamos todos los span
    btn.addEventListener("click", () => {
      const allspan = document.querySelectorAll("span");
      btn.disabled = true;
      let letra = btn.innerHTML.toLowerCase();
      let acierto = false; // acierto se inicializa en false para poder hacer las comparaciones.
      for (let i = 0; i < respuesta.length; i++) {
        //recorremos la palabra randon por sus letras.
        if (letra == respuesta[i]) {
          //y si la letra del btn coincide con una letra de la palabra randon
          allspan[i].innerHTML = letra; //se añade esa letra al span correspondiente.
          acierto = true; //acierto se pone en true y se suma uno a aciertos.
          aciertos++;
        }
      }
      if (acierto == false) {
        // si acierto es igual a false se suma 1 a fallos y cambiamos la imagen del ahorcado.
        fallos++;
        const img = document.querySelector("#imagenes");
        let src = `../../public/img/${fallos}.png`;
        img.src = src;
      }

      if (fallos == 6) {
        // si los fallos llegan a 6 pierdes. y te traes todos los btns de la letras y se tapan para no poder pinchar mas.
        const winner = document.querySelector(".winner");
        winner.innerHTML = `¡HAS PERDIDO, PAQUETE!`;
        const allbtns = document.querySelectorAll(".allbtns");
        for (const btn of allbtns) {
          btn.disabled = true;
        }
        const divBtn = document.querySelector(".newGame"); // recuperamos el btn que hemos creado para limpiar el juego pone los fallos a 0 y pinta todo el juego de nuevo
        const btnNew = document.createElement("button");
        btnNew.textContent = "volver a jugar";
        btnNew.classList.add("newGameBtn");
        divBtn.appendChild(btnNew);
        btnNew.addEventListener("click", () => {
          fallos = 0;
          PrintTemplate();
        });
      }
      /*si los aciertos es igual a la cantidad de letras que tiene la palabra randon devuelve victoria y recuperamos todos los btns y los tapamos 
para no poder pincharlos . y tambien traemos el btn que hemos creado para volver a jugar no pondria los aciertos a 0 y nos pinta el juego de nuevo */
      if (aciertos == respuesta.length) {
        const winner = document.querySelector(".winner");
        winner.innerHTML = `¡HAS GANADO, MAKINA!`;
        const allbtns = document.querySelectorAll(".allbtns");
        for (const btn of allbtns) {
          btn.disabled = true;
        }
        const divBtn = document.querySelector(".newGame");
        const btnNew = document.createElement("button");
        btnNew.textContent = "volver a jugar";
        btnNew.classList.add("newGameBtn");
        divBtn.appendChild(btnNew);
        btnNew.addEventListener("click", () => {
          aciertos = 0;
          PrintTemplate();
        });
      }
    });
  }
};

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  buttonsLetter();
  respuestasbtn();
  home();
};

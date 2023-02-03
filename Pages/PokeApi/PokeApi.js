import "./PokeApi.css";
import { initContent } from "../../main";
let mapPoked;
let types = [
  "grass",
  "fire",
  "water",
  "bug",
  "normal",
  "poison",
  "electric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon",
];
const template = () => `
<section>
  <div class="nav">
    <h1>PokeApi</h1>
    <button type="button" id="back" > ⬅️         
    Back</button>
  </div>
  <div class="search">
    <button type="button" id="buscar">Buscador</button>
    <input type="text" id="buscador" placeholder="Search........"/>
  </div>
  <div id="tipos"></div>  
  <div id="container" class="poke"></div>
</section>

`;
const pokemons = [];
const getPokemons = async () => {
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const info = await data.json();
    pokemons.push(info);
  }
  mapPokemons(pokemons);
};

const mapPokemons = (pokemonsList) => {
  mapPoked = pokemonsList.map((pokemon) => ({
    image: pokemon.sprites.other.dream_world.front_default,
    name: pokemon.name,
    type1: pokemon.types[0].type.name,
    expe: pokemon.base_experience,
  }));

  printPokemons(mapPoked);
};

const printPokemons = (pokemons) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
  <img src=${pokemon.image} alt=${pokemon.name}>
  <h2>${pokemon.name}</h2>
  <p>${pokemon.type1}</p>
  <p>${pokemon.expe}</p>
  `;
    container.appendChild(figure);
  }
};

const back = () => {
  document.querySelector("#back").addEventListener("click", () => {
    initContent("Hub_Games");
  });
};

const addListener = () => {
  const btnSearch = document.querySelector("#buscar");
  const inputSearch = document.querySelector("#buscador");

  btnSearch.addEventListener("click", () =>
    filterPokemon(mapPoked, inputSearch.value)
  );
};

const filterPokemon = (pokemons, value) => {
  const filterPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value.toLowerCase())
  );

  printPokemons(filterPokemons);
};

const filterAllPokemon = (array, type) => {
  const filter = array.filter((typed) => typed.type === type);
  printPokemons(filter);
};

const allBtnTypes = () => {
  const div = document.querySelector("#tipos");

  for (const type of types) {
    const btn = document.createElement("button");
    const text = document.createTextNode(`${type}`);
    btn.appendChild(text);
    btn.classList.add(`${type}`);
    div.appendChild(btn);

    btn.addEventListener("click", () => {
      filterAllPokemon(mapPoked, `${type}`);
    });
  }
};

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  back();
  getPokemons();
  addListener();
  allBtnTypes();
};

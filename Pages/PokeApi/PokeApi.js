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
// Creamos el template que va a ser pintado :
const template = () => `
<section class="seccion">
  <div class="nav">
    <img src="https://res.cloudinary.com/dy4mossqz/image/upload/v1675452297/img/pokemon_1_ijosts.png">
  </div>
  <div class="search">
    <button type="button" id="buscar" class="btn"><img src="https://res.cloudinary.com/dy4mossqz/image/upload/v1675453762/img/pokeball_pfivbp.png">
    </button>
    <input type="text" id="buscador" 
     class="busca"placeholder="Search........"/>
  </div>
  <div id="tipos" class="clases">
  <button  type="button" id="allPoke" class="all">All</button>
  </div>  
  <div id="container" class="poke"></div>
</section>

`;

// Hacemos el fech para recuperar la informacion de la Api y se lo metemos a la constante pokemons:

const getPokemons = async () => {
  const pokemons = [];
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const info = await data.json();
    pokemons.push(info);
  }
  mapPokemons(pokemons);
};

// Hacemos el mapeo para tener los datos que queremos pintar :
const mapPokemons = (pokemonsList) => {
  mapPoked = pokemonsList.map((pokemon) => ({
    image: pokemon.sprites.other.dream_world.front_default,
    name: pokemon.name,
    type1: pokemon.types[0].type.name,
    expe: pokemon.base_experience,
  }));

  printPokemons(mapPoked);
};

// Creamos la función que va a pintar los datos que queremos :
const printPokemons = (pokemons) => {
  console.log("objeto pintado", pokemons);
  const container = document.querySelector("#container");
  container.innerHTML = "";
  console.log(container);
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    figure.classList.add(`${pokemon.type1}`);
    figure.innerHTML = `
  <img src=${pokemon.image} alt=${pokemon.name}>
  <h2>${pokemon.name}</h2>
  <p>Type: ${pokemon.type1}</p>
  <p>Power: ${pokemon.expe}</p>
  `;
    container.appendChild(figure);
  }
};

// Botón para devolver todos los pokemon:
const allPokemons = () => {
  const btn = document.querySelector("#allPoke");
  document.querySelector("#container");
  container.innerHTML = "";
  btn.addEventListener("click", () => printPokemons(mapPoked));
};

// Botones con sus eventos y su filtro por tipo :

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

const filterAllPokemon = (array, type) => {
  const filtered = array.filter((el) => el.type1 === type);

  printPokemons(filtered);
};

// Boton del buscador , su evento y su filtro :

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

// Llamamos a todas las funciones que vamos a pintar en el main :

export const PrintTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getPokemons();
  allPokemons();
  allBtnTypes();
  addListener();
};

import "./style.css";
import { PrintTemplate as headerTemplate } from "./components/Header/Header";
import { PrintTemplate as loginTemplate } from "./Pages/Login/Login";
import { PrintTemplate as hub_GamesTemplate } from "./Pages/Hub_Games/hub_Games";
import { PrintTemplate as PokeApiTemplate } from "./Pages/PokeApi/PokeApi";
import { PrintTemplate as pptTemplate } from "./Pages/Games_PPT/Game_PPT";
import { PrintTemplate as ahorcadoTemplate } from "./Pages/Ahorcado/Ahorcado";

export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? hub_GamesTemplate() : loginTemplate();
      break;
    case "Hub_Games":
      hub_GamesTemplate();
      break;
    case "PokeApi":
      PokeApiTemplate();
      break;
    case "Game_ppt":
      pptTemplate();
      break;
    case "Game_Ahorcado":
      ahorcadoTemplate();
      break;
  }
};

headerTemplate();
initContent();

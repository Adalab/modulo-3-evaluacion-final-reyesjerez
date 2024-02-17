import { useState, useEffect } from "react";

import "../scss/App.scss";

import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";

import { fetchCharacters } from "../services/fetch";

function App() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    fetchCharacters().then((data) => setCharactersData(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <main>
        <Filters></Filters>
        <CharactersList charactersData={charactersData}></CharactersList>
      </main>
    </div>
  );
}

export default App;

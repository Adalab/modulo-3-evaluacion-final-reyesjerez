import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import "../scss/App.scss";

import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import Footer from "./Footer";

import { fetchCharacters } from "../services/fetch";
import { get, includes, set } from "../services/localStorage";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [charactersData, setCharactersData] = useState(get("characters", []));

  useEffect(() => {
    if (!includes("characters"))
      fetchCharacters().then((data) => {
        setCharactersData(data);
        set("characters", data);
      });
    else {
    }
  }, []);

  const findCharacter = (id) => {
    return charactersData.find((character) => character.id === id);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              // <Filters/>
              <CharactersList charactersData={charactersData}></CharactersList>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

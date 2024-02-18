import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import "../scss/App.scss";

import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";

import { fetchCharacters } from "../services/fetch";
import { get, includes, set } from "../services/localStorage";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [charactersData, setCharactersData] = useState(get("characters", []));

  const [filterName, setFilterName] = useState("");

  const [filterHouse, setFilterHouse] = useState(get("house") || "gryffindor");

  useEffect(() => {
    if (!includes("characters"))
      fetchCharacters().then((data) => {
        setCharactersData(data);
        set("characters", data);
        set("house", filterHouse);
      });
    else {
      set("house", filterHouse);
    }
  }, [filterHouse]);

  const findCharacter = (id) => {
    return charactersData.find((character) => character.id === id);
  };

  const changeFilterName = (name) => {
    setFilterName(name);
  };

  const changeFilterHouse = (house) => {
    if (house === "all") {
      setFilterHouse("");
    } else {
      setFilterHouse(house);
    }
  };

  const filteredByName = charactersData.filter((character) =>
    character.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const filteredByHouseAndName = filteredByName.filter((character) =>
    character.house.toLowerCase().includes(filterHouse.toLowerCase())
  );

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  changeFilterName={changeFilterName}
                  filterName={filterName}
                  changeFilterHouse={changeFilterHouse}
                  filterHouse={filterHouse}
                />
                <CharactersList
                  charactersData={filteredByHouseAndName}
                  filterName={filterName}
                ></CharactersList>
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

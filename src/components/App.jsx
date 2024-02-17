import "../scss/App.scss";

import Header from "./Header";
import Filters from "./Filters";
import CharactersList from "./CharactersList";

import characters from "../data/data.json";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Filters></Filters>
        <CharactersList characters={characters}></CharactersList>
      </main>
    </div>
  );
}

export default App;

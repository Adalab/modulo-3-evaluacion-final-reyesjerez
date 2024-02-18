import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function charactersList({ charactersData, filterName }) {
  const charactersHtml = charactersData.map((character) => {
    return (
      <li className="character__item" key={character.id}>
        <CharacterCard
          name={character.name}
          image={character.image}
          house={character.house}
          species={character.species}
          id={character.id}
        ></CharacterCard>
      </li>
    );
  });

  if (charactersData.length === 0) {
    return (
      <p className="result">
        No hemos encontrado ningún personaje que coincida con: {filterName}.
      </p>
    );
  } else {
    return <ul className="character__list">{charactersHtml}</ul>;
  }
}

charactersList.propTypes = {
  charactersData: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default charactersList;

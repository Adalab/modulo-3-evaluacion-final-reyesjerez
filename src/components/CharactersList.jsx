import CharacterCard from "./CharacterCard";

function charactersList({ charactersData }) {
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
  return <ul className="character__list">{charactersHtml}</ul>;
}

export default charactersList;

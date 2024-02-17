import CharacterCard from "./CharacterCard";

function charactersList({ characters }) {
  const charactersList = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        house={character.house}
        species={character.species}
        id={character.id}
      ></CharacterCard>
    );
  });
  return <ul className="character__list">{charactersList}</ul>;
}

export default charactersList;

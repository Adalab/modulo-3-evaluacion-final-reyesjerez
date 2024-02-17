import imageRavenclaw from "../images/houses/ravenclaw.gif";
import imageGryffindor from "../images/houses/gryffindor.gif";

function CharacterCard({ name, image, house, species }) {
  return (
    <>
      <img
        className="character__item__img"
        src={image || imageGryffindor}
        alt={name}
      />
      <h3 className="character__item__name">{name}</h3>
      <p>House: {house}.</p>
      <p>Especie: {species}.</p>
    </>
  );
}

export default CharacterCard;

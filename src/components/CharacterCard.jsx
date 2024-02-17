import { Link } from "react-router-dom";

import imageRavenclaw from "../images/houses/ravenclaw.gif";
import imageGryffindor from "../images/houses/gryffindor.gif";

function CharacterCard({ name, image, house, species, id }) {
  return (
    <Link className="character__item" to={"/character/" + id}>
      <img
        className="character__item__img"
        src={image || imageGryffindor}
        alt={name}
      />
      <h3 className="character__item__name">{name}</h3>
      <p className="character__item__text">House: {house}.</p>
      <p className="character__item__text">Especie: {species}.</p>
    </Link>
  );
}

export default CharacterCard;

import { Link } from "react-router-dom";

import ravenclaw from "../images/houses/ravenclaw.gif";
import gryffindor from "../images/houses/gryffindor.gif";
import slytherin from "../images/houses/slytherin.gif";
import hufflepuff from "../images/houses/hufflepuff.gif";

function CharacterCard({ name, image, house, species, id }) {
  return (
    <Link className="character__item" to={"/character/" + id}>
      <img
        className="character__item__img"
        src={
          house === "Gryffindor"
            ? image || gryffindor
            : house === "Slytherin"
            ? image || slytherin
            : house === "Hufflepuff"
            ? image || hufflepuff
            : image || ravenclaw
        }
        alt={name}
      />
      <h3 className="character__item__name">{name}</h3>
      <p className="character__item__text">House: {house}.</p>
      <p className="character__item__text">Especie: {species}.</p>
    </Link>
  );
}

export default CharacterCard;

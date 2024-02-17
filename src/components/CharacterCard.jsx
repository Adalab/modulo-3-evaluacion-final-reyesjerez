import { Link } from "react-router-dom";

import ravenclaw from "../images/houses/ravenclaw.gif";
import gryffindor from "../images/houses/gryffindor.gif";
import slytherin from "../images/houses/slytherin.gif";
import hufflepuff from "../images/houses/hufflepuff.gif";

function CharacterCard({ name, image, house, species, id }) {
  if (house === "Gryffindor") {
    return (
      <Link className="character__item" to={"/character/" + id}>
        <img
          className="character__item__img"
          src={image || gryffindor}
          alt={name}
        />
        <h3 className="character__item__name">{name}</h3>
        <p className="character__item__text">House: {house}.</p>
        <p className="character__item__text">Especie: {species}.</p>
      </Link>
    );
  } else if (house === "Ravenclaw") {
    return (
      <Link className="character__item" to={"/character/" + id}>
        <img
          className="character__item__img"
          src={image || ravenclaw}
          alt={name}
        />
        <h3 className="character__item__name">{name}</h3>
        <p className="character__item__text">House: {house}.</p>
        <p className="character__item__text">Especie: {species}.</p>
      </Link>
    );
  } else if (house === "Slytherin") {
    return (
      <Link className="character__item" to={"/character/" + id}>
        <img
          className="character__item__img"
          src={image || slytherin}
          alt={name}
        />
        <h3 className="character__item__name">{name}</h3>
        <p className="character__item__text">House: {house}.</p>
        <p className="character__item__text">Especie: {species}.</p>
      </Link>
    );
  } else if (house === "Hufflepuff") {
    return (
      <Link className="character__item" to={"/character/" + id}>
        <img
          className="character__item__img"
          src={image || hufflepuff}
          alt={name}
        />
        <h3 className="character__item__name">{name}</h3>
        <p className="character__item__text">House: {house}.</p>
        <p className="character__item__text">Especie: {species}.</p>
      </Link>
    );
  }
}

export default CharacterCard;

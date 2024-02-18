import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ravenclaw from "../images/houses/ravenclaw.gif";
import gryffindor from "../images/houses/gryffindor.gif";
import slytherin from "../images/houses/slytherin.gif";
import hufflepuff from "../images/houses/hufflepuff.gif";

import rv from "../images/houses/rv.jpeg";
import gr from "../images/houses/gr.jpeg";
import sl from "../images/houses/sl.jpeg";
import hf from "../images/houses/hf.jpeg";

function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const character = findCharacter(params.id);

  return (
    <>
      <h3 className="detail__name">
        Información detallada de {character.name}
      </h3>
      <div className="detail">
        <section>
          <img
            className="detail__house"
            src={
              character.house === "Gryffindor"
                ? gr
                : character.house === "Slytherin"
                ? sl
                : character.house === "Hufflepuff"
                ? hf
                : rv
            }
          ></img>
          <img
            className="detail__img"
            src={
              character.house === "Gryffindor"
                ? character.image || gryffindor
                : character.house === "Slytherin"
                ? character.image || slytherin
                : character.house === "Hufflepuff"
                ? character.image || hufflepuff
                : character.image || ravenclaw
            }
            alt="Foto de "
          />
        </section>
        <section className="detail__container">
          <h5 className="detail__title">
            Nombre: <span className="detail__text">{character.name}</span>
          </h5>

          <h5 className="detail__title">
            Nombres alternativos:
            <span className="detail__text">
              {character.alternate_names || "No tiene nombres alternativos"}
            </span>
          </h5>

          <h5 className="detail__title">
            Género: <span className="detail__text">{character.gender}</span>
          </h5>
          <h5 className="detail__title">
            Fecha de nacimiento:{" "}
            <span className="detail__text">{character.dateOfBirth}</span>
          </h5>
          <h5 className="detail__title">
            Vivo:{" "}
            <span className="detail__text">
              {character.alive ? "Si" : "No"}
            </span>
          </h5>
          <h5 className="detail__title">
            Especie: <span className="detail__text">{character.species}</span>
          </h5>
          <h5 className="detail__title">
            Casa: <span className="detail__text">{character.house}</span>
          </h5>
          <h5 className="detail__title">
            Categoría de mago:{" "}
            <span className="detail__text">
              {" "}
              {character.wizard ? "Si" : "No"}
            </span>
          </h5>
          <Link className="button" to="/">
            Volver
          </Link>
        </section>
      </div>
    </>
  );
}

export default CharacterDetail;

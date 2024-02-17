import { useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const character = findCharacter(params.id);

  return (
    <div className="detail">
      <h3>Información detallada de {character.name}</h3>
      <img src={character.image} alt="Foto de " />
      <h4 className="detail__name">Nombre::</h4>
      <p className="detail__name__text">{character.name}</p>
      <h5 className="detail__name__title">Nombres alternativos:</h5>
      <p className="detail__name__text">{character.alternate_names}</p>
      <h5 className="detail__name__title">Género:</h5>
      <p className="detail__name__text">{character.gender}</p>
      <h5 className="detail__name__title">Fecha de nacimiento:</h5>
      <p className="detail__name__text">{character.dateOfBirth}</p>
      <p className="detail__name__text"></p>
      <h5 className="detail__name__title">Vivo:</h5>
      <p className="detail__name__text">{character.alive}</p>
      <h5 className="detail__name__title">Especie:</h5>
      <p className="detail__name__text">{character.species}</p>
      <h5 className="detail__name__title">Casa:</h5>
      <p className="detail__name__text">{character.house}</p>
      <h5 className="detail__name__title">Categoría de mago:</h5>
      <p className="detail__name__text">{character.wizard}</p>
    </div>
  );
}

export default CharacterDetail;

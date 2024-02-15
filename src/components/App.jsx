import "../scss/App.scss";

import image from "../images/houses/ravenclaw.gif";
import hogwartsLogo from "../images/hogwarts_castle.jpeg";

function App() {
  return (
    <div>
      <header className="header">
        <img className="header__img" src={hogwartsLogo} alt="Hogwarts' Logo" />
        <h1 className="header__title">CONOCE TODOS LOS PERSONAJES</h1>
      </header>
      <main>
        <form className="form">
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="character">
              Escribe un personaje:
            </label>
            <input type="text" id="character" placeholder="Buscar personaje" />
          </fieldset>

          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="house">
              {" "}
              Elija su casa fav:
            </label>
            <select name="house" id="houe">
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select>
          </fieldset>
        </form>
        <article>
          <ul className="character__list">
            <li className="character__item">
              <img
                className="character__item__img"
                src={image}
                alt="Foto del primer personaje"
              />
              <h3 className="character__item__name">Nombre primer personaje</h3>
              <p>House: Slytherin</p>
              <p>Especie: humano.</p>
            </li>
            <li className="character__item">
              <img
                className="character__item__img"
                src={image}
                alt="Foto del primer personaje"
              />
              <h3 className="character__item__name">Nombre primer personaje</h3>
              <p>House: Slytherin</p>
              <p>Especie: humano.</p>
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;

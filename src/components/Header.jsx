import hogwartsLogo from "../images/hogwarts_castle.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__img" src={hogwartsLogo} alt="Hogwarts' Logo" />
      </Link>
      <h1 className="header__title">CONOCE TODOS LOS PERSONAJES</h1>
    </header>
  );
}

export default Header;

import hogwartsLogo from "../images/hogwarts_castle.jpeg";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={hogwartsLogo} alt="Hogwarts' Logo" />
      <h1 className="header__title">CONOCE TODOS LOS PERSONAJES</h1>
    </header>
  );
}

export default Header;

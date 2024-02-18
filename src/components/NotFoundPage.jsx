import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <p className="notfound"> ERROR: Página no encontrada.</p>
      <Link className="button__notfound" to="/">
        Volver
      </Link>
    </>
  );
}

export default NotFoundPage;

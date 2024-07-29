import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
     <div>
    <a className="navbar-brand" href="#">
      <img src="https://img.freepik.com/vector-gratis/fondo-instagram-colores-degradados_23-2147823814.jpg" alt="Logo" width="30" height="24" className=" logo d-inline-block align-text-top" />
      PROYECTO INDAGAR
    </a>
    </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Quiénes somos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Publicaciones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Multimedia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

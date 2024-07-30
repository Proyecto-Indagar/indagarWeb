import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
      <div>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="60" height="50" className="logo d-inline-block align-text-top" />
          <span className="navbar-">PROYECTO INDAGAR</span>
        </NavLink>
      </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            Quiénes somos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts" className="nav-link">
            Publicaciones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/multimedia" className="nav-link" aria-disabled="true">
            Multimedia
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact" className="nav-link" aria-disabled="true">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


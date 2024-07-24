import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {

  

  return (
    <nav className="navbar container-fluid">
     <div>
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="60" height="50" className=" logo d-inline-block align-text-top" />
      <span className="navbar-">PROYECTO INDAGAR</span>
    </a>
    </div>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/quienes-somos">
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

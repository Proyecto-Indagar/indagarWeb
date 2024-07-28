import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Proyecto Indagar</h5>
            <p>
              Proyecto Indagar es una ONG dedicada a la investigación y difusión de conocimientos en diversas áreas científicas y sociales.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: contacto@proyectoindagar.org</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Proyecto Indagar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

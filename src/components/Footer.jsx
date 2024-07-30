import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Proyecto Indagar</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p><a href='mailto:contacto@proyectoindagar.org'>contacto@indagar.org</a></p>
            <p><a href='tel:+59179797979'>+591 79797979</a></p>
            <p>Cochabamba Av. X Nº 1 esq. Calle Y</p>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="ri-facebook-fill" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-fill" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-twitter-fill" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-youtube-fill" />
                </a>
              </li>
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

// src/components/App.jsimport React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Posts from "./Components/Posts";
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Asegúrate de importar el CSS

const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Navbar en la parte superior */}
      <div className="overlay" /> {/* Capa negra sobrepuesta */}
      <div className="container">
        <div className="text-center">
          <div className="row">
            <div className="col">
              <div className="row">

              <div className="col-6">
              <h1>
                  TERRITORIOS INDIGENAS: UN POTENCIAL PARA UNA TRANSFORMACIÓN
                  SOSTENIBLE Y JUSTA DEL SISTEMA ALIMENTARIO
                </h1>
                </div>
                <div className="col-6">
                 
                </div>

              </div>
              <div className="row">
                <div className="col-6">
                  <button type="button" className="w-100 btn btn-light">
                    QUÉ HACEMOS
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="w-100 btn btn-success">
                    CONTACTANOS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE PUBLICACIONES */}
        <div>
          <Posts />
        </div>

        <div>
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default App;

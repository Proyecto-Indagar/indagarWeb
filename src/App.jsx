// 1. Importar React y otros módulos necesarios
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Posts from "./Components/Posts";
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Crear el componente App
const App = () => {
  // 3. Retornar JSX
  return (
    <div className="App">
      <div class="overlay">
      <Navbar />
           <div class="container">
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col contenido1 ">
              <div className="row">
                TERRITORIOS INDIGENAS: UN POTENCIAL PARA UNA TRANSFORMACIÓN
                SOSTENIBLE Y JUSTA DEL SISTEMA ALIMENTARIO
              </div>

              <div className="row">
                <div className="col-6">
                  <button type="button" className="w-100 btn btn-light ">
                    Light
                  </button>
                </div>

                <div className="col-6">
                  <button type="button" className="w-100 btn btn-success">
                    Success
                  </button>
                </div>
              </div>
            </div>

            <div className="col"></div>
          </div>
        </div>
      </div>

      {/* SECCION DE PUBLICACIONES */}
      <Posts />
    </div>
      </div>
     


    </div>
  );
};

// 4. Exportar el componente
export default App;

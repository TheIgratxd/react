
import { useNavigate } from "react-router-dom";
import "./App.css";

function Equipment() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Llamar a tu API para cerrar sesión
    // await fetch('/api/logout', { method: 'POST' });
    
    // Limpiar token si lo usas
    localStorage.removeItem('token');
    navigate("/");
  };
  return (
    <>
      <header>
        <img
          className="banner"
          src="/Banner_RCA.png"
          alt=""
          style={{ backgroundSize: "cover" }}
        />
      </header>
      <button className="btn-derecha" onClick={handleLogout}>
        <span className="icono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            viewBox="0 0 24 24"
          >
            <rect
              x="2"
              y="4"
              width="13"
              height="16"
              rx="2"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M9 12h11m0 0l-3-3m3 3l-3 3"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="texto">
          CERRAR
          <br />
          SESIÓN
        </span>
      </button>
      <main>
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>Perfil de Usuario</h1>
        <div className="centrar">
          <div className="datos">
            <table className="datos_usuario">
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <strong>No. Empleado: </strong>12345
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Nombres: </strong>Alejandro
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Apellidos: </strong>Rodríguez Perez
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Puesto: </strong>Secretario
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Área: </strong>1
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Correo: </strong>alejandro123@gmail.com
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Teléfono: </strong>55 1234 1234
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Extensión: </strong>1234
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Piso: </strong>5
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="boton_añadir">
          <a href="work-equipment.html">
            <button className="boton_accesar">Añadir equipo</button>
          </a>
        </div>
        <h2 className="sub" style={{ textAlign: "center" }}>
          Equipo de escritorio
        </h2>
        <table className="equipo">
          <thead>
            <tr className="encabezado">
              <th>No. Serie Equipo</th>
              <th>Modelo Monitor</th>
              <th>No. Serie Monitor</th>
              <th>No. Serie Teclado</th>
              <th>No. Serie Mouse</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>1234</td>
              <td>
                <a href="desktop-edit.html">
                  <button className="Acciones">Editar</button>
                </a>
                <a href="desktop-unregister.html">
                  <button className="Acciones">Dar de baja</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="sub" style={{ textAlign: "center" }}>
          Equipo de Laptop
        </h2>
        <table className="equipo">
          <thead>
            <tr className="encabezado">
              <th>No. Serie Equipo</th>
              <th>No. Serie cargador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>1234</td>
              <td>
                <a href="laptop-edit.html">
                  <button className="Acciones">Editar</button>
                </a>
                <a href="laptop-unregister.html">
                  <button className="Acciones">Dar de baja</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <br />
    </>
  );
}

export default Equipment;

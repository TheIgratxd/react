import { useNavigate } from "react-router-dom";

function ButtonDesktopD3() {
  const navigate = useNavigate();

  const handleAddEquipment = () => {
    navigate("/add-desktop");
  };
  return (
    <div
      className="tabla-boton"
      onClick={handleAddEquipment}
      style={{ cursor: "pointer" }}
    >
      <table className="datos_usuario">
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top", paddingRight: "20px" }}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Perfil: </strong>D3
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Marca: </strong>Dell
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Modelo: </strong>DESC SS3
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Ram: </strong>8GB
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Disco externo: </strong>N/A
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="img-equipo"
                        src="https://ss628.liverpool.com.mx/xl/1145799895.jpg"
                        alt="Equipo"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ButtonDesktopD3;

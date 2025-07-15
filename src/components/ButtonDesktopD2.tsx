import { useNavigate } from "react-router-dom";

function ButtonDesktop() {
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
                      <strong>Perfil: </strong>D2
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
                        src="https://pconemexico.com.mx/cdn/shop/files/1_02f79acb-82ac-4ab6-856a-08532f0d99fd.webp?v=1709307359"
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

export default ButtonDesktop;

interface UserData {
  empleado: string;
  nombres: string;
  apellidos: string;
  puesto: string;
  area: string;
  correo: string;
  telefono: string;
  extension: string;
  piso: string;
}

interface UserProfileProps {
  userData: UserData;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  return (
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
                        <strong>No. Empleado: </strong>
                        {userData.empleado}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Nombres: </strong>
                        {userData.nombres}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Apellidos: </strong>
                        {userData.apellidos}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Puesto: </strong>
                        {userData.puesto}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Área: </strong>
                        {userData.area}
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
                        <strong>Correo: </strong>
                        {userData.correo}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Teléfono: </strong>
                        {userData.telefono}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Extensión: </strong>
                        {userData.extension}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Piso: </strong>
                        {userData.piso}
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
  );
};

export default UserProfile;

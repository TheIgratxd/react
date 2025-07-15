import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import EquipmentTable from "../components/EquipmentTable";
import Button from "../components/Button";
import "./../App.css";

function Equipment() {
  const navigate = useNavigate();

  // Datos del usuario (en el futuro vendrán de la BD)
  const userData = {
    empleado: "12345",
    nombres: "Alejandro",
    apellidos: "Rodríguez Perez",
    puesto: "Secretario",
    area: "1",
    correo: "alejandro123@gmail.com",
    telefono: "55 1234 1234",
    extension: "1234",
    piso: "5",
  };

  // Datos de equipos (en el futuro vendrán de la BD)
  const desktopData = [
    {
      id: "1",
      "No. Serie Equipo": "1234",
      "Modelo Monitor": "1234",
      "No. Serie Monitor": "1234",
      "No. Serie Teclado": "1234",
      "No. Serie Mouse": "1234",
    },
  ];

  const laptopData = [
    {
      id: "1",
      "No. Serie Equipo": "1234",
      "No. Serie cargador": "1234",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleAddEquipment = () => {
    navigate("/add-equipment");
  };

  const handleEditEquipment = (id: string) => {
    // TODO: Navegar a formulario de editar equipo
    console.log("Editar equipo:", id);
  };

  const handleDeleteEquipment = (id: string) => {
    // TODO: Eliminar equipo
    console.log("Eliminar equipo:", id);
  };

  return (
    <>
      <Header bannerSrc="/Banner_RCA.png" onLogout={handleLogout} />
      <main>
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>Perfil de Usuario</h1>
        <UserProfile userData={userData} />
        <div className="boton_añadir">
          <Button className="boton_accesar" onClick={handleAddEquipment}>
            Añadir equipo
          </Button>
        </div>
        <EquipmentTable
          title="Equipo de escritorio"
          headers={[
            "No. Serie Equipo",
            "Modelo Monitor",
            "No. Serie Monitor",
            "No. Serie Teclado",
            "No. Serie Mouse",
          ]}
          data={desktopData}
          onEdit={handleEditEquipment}
          onDelete={handleDeleteEquipment}
        />
        <EquipmentTable
          title="Equipo de Laptop"
          headers={["No. Serie Equipo", "No. Serie cargador"]}
          data={laptopData}
          onEdit={handleEditEquipment}
          onDelete={handleDeleteEquipment}
        />
      </main>
      <br />
    </>
  );
}

export default Equipment;

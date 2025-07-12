import Button from "./Button";

interface EquipmentItem {
  id: string;
  [key: string]: string | number;
}

interface EquipmentTableProps {
  title: string;
  headers: string[];
  data: EquipmentItem[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const EquipmentTable: React.FC<EquipmentTableProps> = ({
  title,
  headers,
  data,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <h2 className="sub" style={{ textAlign: "center" }}>
        {title}
      </h2>
      <table className="equipo">
        <thead>
          <tr className="encabezado">
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{item[header] || "N/A"}</td>
              ))}
              <td>
                <Button
                  className="Acciones"
                  onClick={() => onEdit && onEdit(item.id)}
                >
                  Editar
                </Button>
                <Button
                  className="Acciones"
                  onClick={() => onDelete && onDelete(item.id)}
                >
                  Dar de baja
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EquipmentTable;

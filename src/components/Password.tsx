import PasswordInput from "./PasswordInput";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface PasswordProps {
  register?: boolean;
  onSubmit?: (password: string, confirmPassword?: string) => void;
}

const Password: React.FC<PasswordProps> = ({ register = false, onSubmit }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (register) {
      // Llamar la función del padre si existe
      if (onSubmit) {
        onSubmit(password);
      }
    } else {
      // Llamar la función del padre si existe
      if (onSubmit) {
        onSubmit(password, confirmPassword);
      }
    }

    navigate("/equipment");
  };

  if (register) {
    // Solo mostrar el campo de contraseña si es registro
    return (
      <form onSubmit={handleLogin}>
        <PasswordInput
          placeholder="CONTRASEÑA"
          value={password}
          onChange={setPassword}
          icon="/logo_candado.jpeg"
          id="password-field"
          name="Contraseña"
          required
        />
        <Button type="submit" value="login" className="boton_accesar">
          ACCESAR
        </Button>
      </form>
    );
  } else {
    // Mostrar ambos campos de contraseña para registro
    return (
      <form onSubmit={handleLogin}>
        <PasswordInput
          placeholder="CONTRASEÑA"
          value={password}
          onChange={setPassword}
          icon="/logo_candado.jpeg"
          id="password-field"
          name="Contraseña"
          required
        />
        <br />
        <PasswordInput
          placeholder="CONFIRMAR CONTRASEÑA"
          value={confirmPassword}
          onChange={setConfirmPassword}
          icon="/logo_candado.jpeg"
          id="confirm-password-field"
          name="Confirmar Contraseña"
          required
        />
        <Button type="submit" value="register" className="boton_accesar">
          REGISTRAR
        </Button>
      </form>
    );
  }
};

export default Password;

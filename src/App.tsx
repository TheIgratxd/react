import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./components/InputField";
import PasswordInput from "./components/PasswordInput";
import Button from "./components/Button";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/equipment");
  };

  return (
    <>
      <div className="split-container">
        <section className="split left">
          <div className="split-content">
            <Logo
              src="/WhatsApp Image 2025-06-12 at 2.57.59 PM.jpeg"
              alt="Image"
              className="logo-izquierda"
            />
          </div>
        </section>
        <section className="split right">
          <header className="split-header">
            <div className="logo-container">
              <Logo
                src="/hacienda-condusef.jpeg"
                alt="logo"
                className="logo-header"
              />
            </div>
          </header>
          <div className="split-content">
            <h1>Registro Computo Arrendado</h1>
            <br />
            <form onSubmit={handleLogin}>
              <InputField
                type="text"
                placeholder="USUARIO"
                value={username}
                onChange={setUsername}
                icon="/logo_persona.jpeg"
                id="usuario-input"
                name="Usuario"
                required
              />
              <br />
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
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

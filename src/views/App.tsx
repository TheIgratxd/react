import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Logo from "../components/Logo";
import "./../App.css";
import Password from "../components/Password";

function App() {
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const usuario: string = "Diego";
  let registeryes: boolean = false;

  if (username === usuario) {
    registeryes = true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setShowPassword(true);
    }
  };

  const handlePasswordSubmit = (password: string, confirmPassword?: string) => {
    console.log("Datos recibidos en App:");
    console.log("Username:", username);
    console.log("Password:", password);
    if (confirmPassword) {
      console.log("Confirm Password:", confirmPassword);
    }
    // Aquí puedes hacer lo que necesites con los datos
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
            <form onSubmit={handleSubmit}>
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
              {!showPassword && (
                <Button type="submit" value="login" className="boton_accesar">
                  ACCESAR
                </Button>
              )}
            </form>
            {showPassword && (
              <div>
                <Password
                  register={registeryes}
                  onSubmit={handlePasswordSubmit}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

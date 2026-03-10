import "./Login.css";
import { useState } from "react";
import api from "./Services/api";
import { useAuth } from "./AuthContext";

const Login = ({chVista}) => {

  const { login } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credenciales = {
      username: usuario,
      password: password
    };

    try {

      const response = await api.post("/auth/login", credenciales);

      if (response.data.token) {

        login(response.data.token);
        alert("Autenticación Autorizada");
        chVista("Inicio");

      } else {

        alert("Autenticación no Autorizada");


      }

    } catch (error) {

      alert("Error en autenticación");
      console.error("Error:", error);

    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <label>Usuario</label>
        <input
          type="text"
          name="usuario"
          placeholder="Ingresa tu usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button type="submit">Ingresar</button>
        <button type="button">Cancelar</button>
      </div>

      <div>
        <p>¿Olvidaste tu contraseña? Recordar contraseña</p>
        <p>¿No tienes cuenta? Registrar</p>
      </div>
    </form>

  );
};

export default Login;
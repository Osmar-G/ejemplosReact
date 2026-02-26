import React,{ useState} from "react";
import api from "./Services/api.js";
import './Contacto.css';

function FormContacto() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {username, email, password};
    try {
        const respuesta = await api.post("/users", nuevoUsuario);
        console.log("Usuario registrado:", respuesta.data);
        alert('Usuario registrado exitosamente');
    } catch (error) {
        console.error("Error al registrar usuario:", error);
    }
}
  return (
    <div className="contacto-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escribe tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mensaje">Contraseña</label>
        <input
          type="password"
          id="mensaje"
          name="mensaje"
          
          placeholder="Escribe tu contraseña aquí..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormContacto;


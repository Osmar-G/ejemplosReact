import React,{ useEffect, useState} from "react";
import api from "./Services/api.js";
import './Contacto.css';
import Usuarios from "./Usuarios.jsx";

function FormContacto({ usuarioEditando, limpiarSeleccion, onActualizacionExitosa}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (usuarioEditando) {
      setUsername(usuarioEditando.username);
      setEmail(usuarioEditando.email);
      setPassword(usuarioEditando.password);
    } else {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  }, [usuarioEditando]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {username, email, password};
    try {
      if(usuarioEditando){
      const respuesta = await api.put(`/users/${usuarioEditando.id}`, nuevoUsuario);
      console.log("Usuario actualizado:", respuesta.data);
      alert('Usuario actualizado exitosamente');
      setUsername("");
      setEmail("");
      setPassword("");
      }else{
      const respuesta = await api.post("/users", nuevoUsuario);
        console.log("Usuario registrado:", respuesta.data);
        alert('Usuario registrado exitosamente');
      }
      setUsername("");
      setEmail("");
      setPassword("");
      if(onActualizacionExitosa) onActualizacionExitosa();
        
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        alert('Error al registrar usuario');
    }
}
  return (
    <div className="contacto-form">
      <h2>Registro de Usuario</h2>
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


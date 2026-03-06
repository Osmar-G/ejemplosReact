import { useState, useEffect } from "react";
import api from "./Services/api.js";
import "./Usuarios.css";
import FormContacto from "./Contacto.jsx";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const response = await api.get("/users");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const handleEliminar = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsuarios(usuarios.filter((u) => u.id !== id));
      alert("Usuario eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const handleEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="tabla-container">
      <FormContacto 
        usuarioEditando={usuarioSeleccionado}
        limpiarSeleccion={() => setUsuarioSeleccionado(null)}
        onActualizacionExitosa={obtenerUsuarios}
      />

      <h2>Lista de Usuarios</h2>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>
                <button
                  className="btn editar"
                  onClick={() => handleEditar(usuario)}
                >
                  Editar
                </button>
                <button
                  className="btn eliminar"
                  onClick={() => handleEliminar(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
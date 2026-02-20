import { useState, useEffect } from "react";
import api from "./Services/api.js"; 

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    obtenerUsuarios();
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  if (usuarios.length === 0) return <p>No hay usuarios para mostrar</p>;

  return (
    <div>
      <h2>Nuestros Usuarios</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
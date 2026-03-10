import './body.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Inicion from './Inicio.jsx';
import Acerca from './AcercaDe.jsx';
import FormContacto from './Contacto.jsx';
import Sucursal from './Sucursales.jsx';
import Usuarios from './Usuarios.jsx';
import Carrito from './Carrito.jsx';
import RegistrarProductos from './RegistrarProductos.jsx';
import Login from './Login.jsx';
import api from './Services/api.js';
import Categorias from './Categorias.jsx';

function Body({ vista, chVista }) {

  const vistas = {
    Inicio: <Inicion />,
    AcercaDe: <Acerca />,
    Productos: <Productos />,
    Contacto: <FormContacto />,
    Sucursales: <Sucursal />,
    Usuarios: <Usuarios />,
    Carritos: <Carrito />,
    Categorias: <Categorias />,
    Login: <Login chVista={chVista} />
  };

  return (
    <div>
      {vistas[vista] || <Inicion />}
    </div>
  );
}

function Productos() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const obtenerProductos = async () => {
    try {

      const response = await api.get('/products');
      setProductos(response.data);

    } catch (error) {

      console.error("Error al obtener productos:", error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleEliminar = async (id) => {

    try {

      await api.delete(`/products/${id}`);

      setProductos(productos.filter((p) => p.id !== id));

      alert("Producto eliminado exitosamente");

    } catch (error) {

      console.error("Error al eliminar producto:", error);

    }

  };

  const handleEditar = (producto) => {
    setProductoSeleccionado(producto);
  };

  if (loading) return <p>Cargando productos...</p>;

  return (

    <div className="productos-section">

      <RegistrarProductos
        productoEditando={productoSeleccionado}
        limpiarSeleccion={() => setProductoSeleccionado(null)}
        onActualizacionExitosa={obtenerProductos}
      />

      <h2 className="productos-title">
        Nuestros Autos Destacados
      </h2>

      <div className="productos-grid">

        {productos.map((producto) => (

          <Tarjeta
            key={producto.id}
            producto={producto}
            onEliminar={handleEliminar}
            onEditar={handleEditar}
          />

        ))}

      </div>

    </div>

  );

}

function Tarjeta({ producto, onEliminar, onEditar }) {

  return (

    <div className="galeria-card">

      <img src={producto.image} alt={producto.title} />

      <h3>{producto.title}</h3>

      <p><strong>Precio:</strong> ${producto.price}</p>

      <p><strong>Descripción:</strong> {producto.description}</p>

      <p><strong>Categoría:</strong> {producto.category}</p>

      <div className="botones-card">

        <button
          className="btn-editar"
          onClick={() => onEditar(producto)}
        >
          Editar
        </button>

        <button
          className="btn-eliminar"
          onClick={() => onEliminar(producto.id)}
        >
          Eliminar
        </button>

      </div>

    </div>

  );

}

Tarjeta.propTypes = {
  producto: PropTypes.object.isRequired,
  onEliminar: PropTypes.func.isRequired,
  onEditar: PropTypes.func.isRequired
};

Body.propTypes = {
  vista: PropTypes.string.isRequired,
  chVista: PropTypes.func.isRequired
};

export default Body;
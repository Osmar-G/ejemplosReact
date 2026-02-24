import './body.css';
import PropTypes from 'prop-types';
import Inicion from './Inicio.jsx';
import Acerca from './AcercaDe.jsx';
import FormContacto from './Contacto.jsx';
import Sucursal from './Sucursales.jsx';
import Usuarios from './Usuarios.jsx';
import Carrito from './Carrito.jsx';
import api from './Services/api.js';
import { useState, useEffect } from 'react';
import RegistrarProductos from './RegistrarProductos.jsx';

function Body({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Sucursales: <Sucursales />,
    Usuarios: <Usuarios />,
    Carritos: <Carrito />
  };

  return (
    <div>
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function Inicio() {
  return <Inicion />;
}

function AcercaDe() {
  return <Acerca />;
}

function Contacto() {
  return <FormContacto />;
}

function Sucursales() {
  return <Sucursal />;
}
function Carritos() {
  return <Carrito />;
}


function Productos() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    
    <div className="productos-section">
      <RegistrarProductos />
      <h2 className="productos-title">Nuestros Autos Destacados</h2>
      <div className="productos-grid">

        {productos.map((producto) => (
          <Tarjeta
            key={producto.id}
            titulo={producto.title}
            src={producto.image}
            precio={producto.price}
            descripcion={producto.description}
            categoria={producto.category}
          />
        ))}
      </div>
    </div>
  );
}

function Tarjeta({ titulo, src, precio, descripcion, categoria }) {
  return (
    <div className="galeria-card">
      <img src={src} alt={titulo} />
      <h3>{titulo}</h3>
      <p><strong>Precio:</strong> ${precio}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
    </div>
  );
}

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  descripcion: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired
};

Body.propTypes = {
  vista: PropTypes.string.isRequired
};

export default Body;
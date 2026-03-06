import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "./Services/api.js";
import "./RegistrarProductos.css";
function RegistrarProductos({ productoEditando, limpiarSeleccion, onActualizacionExitosa }) {

  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });

  // Cuando seleccionas un producto para editar
  useEffect(() => {
    if (productoEditando) {
      setProducto({
        title: productoEditando.title || "",
        price: productoEditando.price || "",
        description: productoEditando.description || "",
        image: productoEditando.image || "",
        category: productoEditando.category || ""
      });
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const limpiarFormulario = () => {
    setProducto({
      title: "",
      price: "",
      description: "",
      image: "",
      category: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (productoEditando) {
        // Actualizar producto
        await api.put(`/products/${productoEditando.id}`, producto);
        alert("Producto actualizado correctamente");
      } else {
        // Crear producto
        await api.post("/products", producto);
        alert("Producto registrado correctamente");
      }

      // Actualizar lista de productos
      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }

      limpiarFormulario();

      if (limpiarSeleccion) {
        limpiarSeleccion();
      }

    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <div className="form-productos">

      <h2>
        {productoEditando ? "Editar Producto" : "Registrar Producto"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Nombre del producto"
          value={producto.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={producto.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={producto.image}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={producto.category}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={producto.description}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {productoEditando ? "Actualizar Producto" : "Registrar Producto"}
        </button>

      </form>
    </div>
  );
}

RegistrarProductos.propTypes = {
  productoEditando: PropTypes.object,
  limpiarSeleccion: PropTypes.func,
  onActualizacionExitosa: PropTypes.func
};

export default RegistrarProductos;
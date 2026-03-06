import React, { useState, useEffect } from "react";
import api from "./Services/api.js";
import "./AgregarCarrito.css";

function FormCarrito() {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    obtenerCarritos();
  }, []);

  const obtenerCarritos = async () => {
    try {
      const res = await api.get("/carts");
      setCarritos(res.data);
    } catch (error) {
      console.error("Error al obtener carritos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoCarrito = {
      userId: Number(userId),
      products: [
        {
          productId: Number(productId),
          quantity: Number(quantity),
        },
      ],
    };

    try {
      const res = await api.post("/carts", nuevoCarrito);
      setCarritos([...carritos, res.data]);

      setUserId("");
      setProductId("");
      setQuantity("");

      alert("Carrito creado");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // eliminar todo el carrito
  const eliminarCarrito = async (id) => {
    const confirmar = window.confirm("¿Eliminar todo el carrito?");
    if (!confirmar) return;

    try {
      await api.delete(`/carts/${id}`);
    } catch (error) {
      console.error("Error en API, se eliminará visualmente");
    }

    setCarritos(carritos.filter((c) => c.id !== id));
  };

  // eliminar producto del carrito
  const eliminarProducto = (cartId, productId) => {
    const nuevosCarritos = carritos.map((carrito) => {
      if (carrito.id === cartId) {
        return {
          ...carrito,
          products: carrito.products.filter(
            (p) => p.productId !== productId
          ),
        };
      }
      return carrito;
    });

    setCarritos(nuevosCarritos);
  };

  // editar cantidad
  const editarCantidad = (cartId, productId, nuevaCantidad) => {
    const nuevosCarritos = carritos.map((carrito) => {
      if (carrito.id === cartId) {
        return {
          ...carrito,
          products: carrito.products.map((p) =>
            p.productId === productId
              ? { ...p, quantity: nuevaCantidad }
              : p
          ),
        };
      }
      return carrito;
    });

    setCarritos(nuevosCarritos);
  };

  return (
    <div className="carrito-form">
      <h2>Crear Carrito</h2>

      <form onSubmit={handleSubmit}>
        <label>ID Usuario</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <label>ID Producto</label>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />

        <label>Cantidad</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button type="submit">Crear Carrito</button>
      </form>

      <h2>Lista de Carritos</h2>

      {carritos.map((carrito) => (
        <div key={carrito.id} className="carrito-item">
          <h3>Carrito #{carrito.id}</h3>
          <p>Usuario: {carrito.userId}</p>

          <button
            className="btn-eliminar-carrito"
            onClick={() => eliminarCarrito(carrito.id)}
          >
            Eliminar carrito
          </button>

          {carrito.products.map((producto) => (
            <div key={producto.productId} className="producto-item">
              <p>Producto: {producto.productId}</p>

              <input
                type="number"
                value={producto.quantity}
                onChange={(e) =>
                  editarCantidad(
                    carrito.id,
                    producto.productId,
                    Number(e.target.value)
                  )
                }
              />

              <button
                className="btn-eliminar"
                onClick={() =>
                  eliminarProducto(carrito.id, producto.productId)
                }
              >
                Eliminar producto
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FormCarrito;
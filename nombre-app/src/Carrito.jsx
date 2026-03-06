import { useState, useEffect } from "react";
import api from "./Services/api.js";
import FormCarrito from "./AgregarCarrito.jsx";
import "./Carrito.css";

function Carrito() {

  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerCarritos();
  }, []);

  const obtenerCarritos = async () => {
    try {

      const cartResponse = await api.get("/carts");
      const cartsData = cartResponse.data;

      const carritosConProductos = await Promise.all(

        cartsData.map(async (carrito) => {

          const productosCompletos = await Promise.all(

            carrito.products.map(async (item) => {

              const productResponse = await api.get(`/products/${item.productId}`);

              return {
                ...productResponse.data,
                quantity: item.quantity
              };

            })

          );

          return {
            ...carrito,
            products: productosCompletos
          };

        })

      );

      setCarritos(carritosConProductos);

    } catch (error) {

      console.error("Error al obtener carritos:", error);

    } finally {

      setLoading(false);

    }
  };

  // eliminar producto del carrito
  const eliminarProducto = (cartId, productId) => {

    const nuevosCarritos = carritos.map(carrito => {

      if (carrito.id === cartId) {

        return {
          ...carrito,
          products: carrito.products.filter(p => p.id !== productId)
        };

      }

      return carrito;

    });

    setCarritos(nuevosCarritos);

  };

  // editar cantidad
  const editarCantidad = (cartId, productId, cantidad) => {

    const nuevosCarritos = carritos.map(carrito => {

      if (carrito.id === cartId) {

        return {
          ...carrito,
          products: carrito.products.map(p =>
            p.id === productId ? { ...p, quantity: cantidad } : p
          )
        };

      }

      return carrito;

    });

    setCarritos(nuevosCarritos);

  };

  // eliminar carrito completo
  const eliminarCarrito = async (id) => {

    const confirmar = window.confirm("¿Eliminar todo el carrito?");
    if (!confirmar) return;

    try {

      await api.delete(`/carts/${id}`);

    } catch (error) {

      console.error("Error al eliminar en API, se eliminará visualmente");

    }

    setCarritos(carritos.filter(c => c.id !== id));

  };

  if (loading) return <p>Cargando carritos...</p>;

  return (

    <div className="carrito-container">

      <FormCarrito />

      <h2>🛒 Todos los Carritos</h2>

      {carritos.map((carrito) => (

        <div key={carrito.id} className="carrito">

          <div className="carrito-header">

            <h3>Carrito ID: {carrito.id}</h3>

            <button
              className="btn-eliminar-carrito"
              onClick={() => eliminarCarrito(carrito.id)}
            >
              Eliminar carrito
            </button>

          </div>

          {carrito.products.map((producto) => (

            <div key={producto.id} className="carrito-item">

              <img src={producto.image} alt={producto.title} />

              <div>

                <h4>{producto.title}</h4>

                <p>Precio: ${producto.price}</p>

                <label>Cantidad:</label>

                <input
                  type="number"
                  min="1"
                  value={producto.quantity}
                  onChange={(e) =>
                    editarCantidad(
                      carrito.id,
                      producto.id,
                      Number(e.target.value)
                    )
                  }
                />

              </div>

              <button
                className="btn-eliminar"
                onClick={() => eliminarProducto(carrito.id, producto.id)}
              >
                Eliminar
              </button>

            </div>

          ))}

        </div>

      ))}

    </div>

  );

}

export default Carrito;
import { useState, useEffect } from "react";
import api from "./Services/api.js";
import FormCarrito from "./AgregarCarrito.jsx";
import "./Carrito.css";

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const cartResponse = await api.get("/carts");
        const cartsData = cartResponse.data;

        
        const carritosConProductos = await Promise.all(
          cartsData.map(async (carrito) => {
            const productosCompletos = await Promise.all(
              carrito.products.map(async (item) => {
                const productResponse = await api.get(
                  `/products/${item.productId}`
                );

                return {
                  ...productResponse.data,
                  quantity: item.quantity,
                };
              })
            );

            return {
              ...carrito,
              products: productosCompletos,
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

    obtenerCarritos();
  }, []);

  if (loading) return <p>Cargando carritos...</p>;

  return (
    <div className="carrito-container">
      <FormCarrito />
      <h2>🛒 Todos los Carritos</h2>

      {carritos.map((carrito) => (
        <div key={carrito.id} className="carrito">
          <h3>Carrito ID: {carrito.id}</h3>

          {carrito.products.map((producto) => (
            <div key={producto.id} className="carrito-item">
              <img src={producto.image} alt={producto.title} />
              <div>
                <h4>{producto.title}</h4>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio: ${producto.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Carrito;
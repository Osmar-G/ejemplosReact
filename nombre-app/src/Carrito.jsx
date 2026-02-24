import { useState, useEffect } from "react";
import api from "./Services/api.js";
import "./Carrito.css";

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerCarrito = async () => {
      try {
        
        const cartResponse = await api.get("/carts/1");

        const productosDelCarrito = cartResponse.data.products;

        
        const productosCompletos = await Promise.all(
          productosDelCarrito.map(async (item) => {
            const productResponse = await api.get(`/products/${item.productId}`);
            return {
              ...productResponse.data,
              quantity: item.quantity,
            };
          })
        );

        setCarrito(productosCompletos);
      } catch (error) {
        console.error("Error al obtener carrito:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCarrito();
  }, []);

  if (loading) return <p>Cargando carrito...</p>;

  return (
    <div className="carrito-container">
      <h2>🛒 Mi Carrito</h2>

      {carrito.map((producto) => (
        <div key={producto.id} className="carrito-item">
          <img src={producto.image} alt={producto.title} />
          <h4>{producto.title}</h4>
          <p>Cantidad: {producto.quantity}</p>
          <p>Precio: ${producto.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Carrito;
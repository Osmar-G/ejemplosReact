import React,{ useState} from "react";
import api from "./Services/api.js";
import "./RegistrarProductos.css";
function RegistrarProductos() {
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [image, setImage] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoProducto = {title, price, description, category, image};
    try {
        const respuesta = await api.post("/products", nuevoProducto);
        console.log("Producto registrado:", respuesta.data);
        alert('Producto registrado exitosamente');
    } catch (error) {
        console.error("Error al registrar producto:", error);
    }
}
return (
    <div className="registro-container">
        <h2>Registrar Producto</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título del producto"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Registrar Producto</button>
        </form>
    </div>
)
}
export default RegistrarProductos;
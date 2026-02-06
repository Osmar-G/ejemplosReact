import './Contacto.css';
function FormContacto() {
    return (
        <div className="contacto">
            <h2>Contacto</h2>

            <form>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                />

                <label htmlFor="correo">Correo electrónico</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="tu@email.com"
                    required
                />

                <label htmlFor="asunto">Asunto</label>
                <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Consulta sobre autos deportivos"
                    required
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    placeholder="Escribe tu mensaje..."
                    required
                ></textarea>

                <button type="submit">Enviar mensaje</button>
            </form>
        </div>
    );
}

export default FormContacto;
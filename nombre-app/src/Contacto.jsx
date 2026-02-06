import './Contacto.css';

function FormContacto() {
  return (
    <div className="contacto-form">
      <h2>Contacto</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escribe tu nombre"
        />

        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tuemail@ejemplo.com"
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="4"
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormContacto;


import { useState } from "react";
import Encabezado from "./Encabezado";
// import Expresiones from "./expresiones";
import Body from './Body';
import Informacion from "./Informacion";
import Footer from "./footer";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Body vista={vista} />
      <Informacion name="Osmar" />
      <Footer />
    </div>
  );
}

export default App;
import  './App.css';
import { useState } from "react";
import Encabezado from "./Encabezado";
// import Expresiones from "./expresiones";
import Body from './Body';
import Promos from "./Promos";
import Footer from "./footer";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Body vista={vista} />
      
      <Footer />
    </div>
  );
}

export default App;
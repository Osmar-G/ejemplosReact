import  './App.css';
import { useState } from "react";
import Encabezado from "./Encabezado";
// import Expresiones from "./expresiones";
import Body from './Body';
import MapaGeolocalizacion from './MapaGeolocalizacion';
import Footer from "./footer";
import { AuthProvider } from './AuthContext';

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <AuthProvider>
      <Encabezado cambiarVista={setVista} />
      <Body vista={vista} />
      <MapaGeolocalizacion />
     </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
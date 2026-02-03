import Encabezado from "./Encabezado";
// import Expresiones from "./expresiones";
import Body from './Body';
import Informacion from "./Informacion";
import Footer from "./footer";
function App(){
  return(
   <div>
    <Encabezado />
    
    <Body />
    <Informacion name='Osmar'/>
    <Footer />
   </div>
  ) 
}

export default App;
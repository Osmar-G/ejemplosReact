import Encabezado from "./Encabezado";
import Expresiones from "./expresiones";
import Body, { Footer } from './body';
function App(){
  return(
   <div>
    <Encabezado />
    <Expresiones />
    <Body />
    <Footer />
    
   </div>
  ) 
}

export default App;
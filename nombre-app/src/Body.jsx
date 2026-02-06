import './body.css';
import Inicion from './Inicio.jsx';
import porsche from "./assets/gt3.png";
import lamborghini from "./assets/lambo.png";
import lancer from "./assets/evo.png";
import Acerca from './AcercaDe.jsx';
import FormContacto from './Contacto.jsx';
import Sucursal from './Sucursales.jsx';
function Body({vista}){
  const vistas={
    "Inicio": <Inicio />,
    "AcercaDe": <AcercaDe />,
    "Productos": <Productos />, 
    "Contacto": <Contacto />,
    "Sucursales": <Sucursales />
  }
    return(
        
        <div className="card">
          {vistas[vista] || <Inicio />}
        
        </div>
    
    );
    
}  
function Inicio(){
  return <Inicion />;
}
function AcercaDe(){
  return <Acerca />;
}
function Productos(){
  return (
    
     <div className='card'>
      <Tarjeta name='Porsche' src={porsche}/>
        <Tarjeta name='Lamborghini' src={lamborghini}/>
        <Tarjeta name='Lancer' src={lancer}/>
      </div>
   
    
      );
      
}
function Contacto(){
  return <FormContacto />;
}
function Sucursales(){
  return <Sucursal />;
}

function Tarjeta(props){
  return (
    <div className="card1">
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Body;

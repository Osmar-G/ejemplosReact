import './body.css';
import porsche from "./assets/porsche.jpg";
import lamborghini from "./assets/lamborghini.jpg";
import lancer from "./assets/lancer.jpg";
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
  return (
    
     <div className='card'>
      <Tarjeta name='Porsche' src={porsche}/>
        <Tarjeta name='Lamborghini' src={lamborghini}/>
        <Tarjeta name='Lancer' src={lancer}/>
      </div>
   
    
      );
      }
function AcercaDe(){
  return <h2>Acerca De Nosotros</h2>;
}
function Productos(){
  return <h2>Nuestros Productos</h2>;
}
function Contacto(){
  return <h2>Contacto</h2>;
}
function Sucursales(){
  return <h2>Nuestras Sucursales</h2>;
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

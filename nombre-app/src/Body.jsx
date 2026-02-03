import './body.css';
import porsche from "./assets/porsche.jpg";
import lamborghini from "./assets/lamborghini.jpg";
import lancer from "./assets/lancer.jpg";
function Body(){
    return(
        
        <div className="card">
        <Tarjeta name='Porsche' src={porsche}/>
        <Tarjeta name='Lamborghini' src={lamborghini}/>
        <Tarjeta name='Lancer' src={lancer}/>
        </div>
    
    );
    
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

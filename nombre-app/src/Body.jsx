import './body.css';
import porsche from "./assets/porsche.jpg";
import lamborghini from "./assets/lamborghini.jpg";
import lancer from "./assets/lancer.jpg";
function Body(){
    return(
        
        <div className="card">
            <div className="card1">
                <img src={porsche} alt="Porsche" />
                <p>Ejemplo de card</p>
            </div>
            <div className="card1">
                <img src={lamborghini} alt="Lamborghini" />
                <p>Ejrmplo de card</p>
            </div>
            <div className="card1">
                <img src={lancer} alt="Lancer Evolution" />
                <p>Ejrmplo de card</p>
            </div>

           
        </div>
    
    );
    
}

export default Body;

import Mapa from "./Mapa";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Promos() {
    return (
        <div>
            <Mapa lat={20.27663846986147}
             lng={-97.96362794025488} nombre="Sucursal Ciudad de México" 
            />
        </div>
    );
}
export default Promos;
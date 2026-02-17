import logo from "./assets/logoPorsche.png";
import facebook from "./assets/fb.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import linkedin from "./assets/linkedln.png";
import whatsapp from "./assets/wt.png";
import PropTypes from 'prop-types';
import './encabezado.css';
import Clima from "./Clima";

function Encabezado({cambiarVista}) {
    return (
        <header className="encabezado">
            <Logotipo />
            <Menu cambiarVista={cambiarVista}/>
            <Redes />
           
        </header>
    );
}

function Logotipo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logotipo de la Aplicación" />
        </div>
    );
}

function Menu({cambiarVista}) {
    return (
        <nav className="menu">
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes() {
    return (
        <div className="redes">
            <ul>
                <li className="facebook"><img src={facebook} alt="Facebook" /></li>
                <li className="whatsapp"><img src={whatsapp} alt="WhatsApp" /></li>
                <li className="instagram"><img src={instagram} alt="Instagram" /></li>
                <li className="youtube"><img src={youtube} alt="YouTube" /></li>
                <li className="linkedin"><img src={linkedin} alt="LinkedIn" /></li>
            </ul>
            <Clima />
        </div>
    );
}
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired,
};
Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired,
};

export default Encabezado;

import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import linkedin from "./assets/linkedln.png";
import whatsapp from "./assets/whatsapp.png";
import './encabezado.css';

function Encabezado() {
    return (
        <header className="encabezado">
            <Logotipo />
            <Menu />
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

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
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
        </div>
    );
}

export default Encabezado;

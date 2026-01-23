import logo from "./assets/logo.png";
function Encabezado() {
    return <div>
        <Logotipo />
        <Menu />
        <Redes />
    </div>
}

function Logotipo(){
    return(
        <div>
            <img src={logo} alt="Logotipo de la Aplicación" />
        </div>
    )
}
function Menu(){
    return(
        <div>
            
                <ul>
                    <li>Inicio</li>
                    <li>Acerca de</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Sucursales</li>
                </ul>
            
        </div>
    )
}
function Redes(){
    return(
        <div>
            <ul>
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    )
}
export default Encabezado;

import './Sucursales.css';
function Sucursal() {
    return (
        <div className="sucursales">
            <h2>Nuestras Sucursales</h2>

            <div className="sucursal">
                <h3>Sucursal Ciudad de México</h3>
                <p>📍 Av. Reforma #123, CDMX</p>
                <p>📞 Tel: 55 1234 5678</p>
                <p>⏰ Horario: Lun - Sáb | 9:00 am - 7:00 pm</p>
            </div>

            <div className="sucursal">
                <h3>Sucursal Guadalajara</h3>
                <p>📍 Av. Vallarta #450, Guadalajara</p>
                <p>📞 Tel: 33 9876 5432</p>
                <p>⏰ Horario: Lun - Vie | 9:00 am - 6:00 pm</p>
            </div>

            <div className="sucursal">
                <h3>Sucursal Monterrey</h3>
                <p>📍 Av. Constitución #800, Monterrey</p>
                <p>📞 Tel: 81 2468 1357</p>
                <p>⏰ Horario: Lun - Sáb | 10:00 am - 8:00 pm</p>
            </div>
        </div>
    );
}

export default Sucursal;
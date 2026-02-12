import './Sucursales.css';

function Sucursal() {
    const sedes = [
        { 
            nombre: "Sucursal Ciudad de México", 
            direccion: "Av. Reforma #123, CDMX", 
            telefono: "55 1234 5678",
            horario: "Lun - Sáb | 9:00 am - 7:00 pm",
            lat: 20.27663846986147,
            lng: -97.96362794025488
        },
        { 
            nombre: "Sucursal Guadalajara", 
            direccion: "Av. Vallarta #450, Guadalajara", 
            telefono: "33 9876 5432",
            horario: "Lun - Vie | 9:00 am - 6:00 pm",
            lat: 20.2644334178573 ,
            lng: -97.96234305322963
        },
        { 
            nombre: "Sucursal Monterrey", 
            direccion: "Av. Constitución #800, Monterrey", 
            telefono: "81 2468 1357",
            horario: "Lun - Sáb | 10:00 am - 8:00 pm",
            lat: 20.286529271740346, 
            lng: -97.95461597116446
        }
    ];

    return (
        <div className="sucursales-section">
            <h2>Nuestras Sucursales</h2>

            {sedes.map((sucursal, index) => (
                <div key={index} className="sucursal-card">
                    <h3>{sucursal.nombre}</h3>
                    <p>📍 {sucursal.direccion}</p>
                    <p>📞 Tel: {sucursal.telefono}</p>
                    <p>⏰ Horario: {sucursal.horario}</p>
                    
                    
                    <div className="map-container">
                        <iframe
                            title={`map-${index}`}
                            src={`https://www.google.com/maps?q=${sucursal.lat},${sucursal.lng}&hl=es;z=14&output=embed`}
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sucursal;


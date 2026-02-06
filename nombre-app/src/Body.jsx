import './body.css';
import PropTypes from 'prop-types';
import Inicion from './Inicio.jsx';
import porsche from "./assets/gt3.png";
import lamborghini from "./assets/lambo.png";
import bmw from "./assets/bmw.png";
import mclaren from "./assets/mclaren.png";
import mercedes from "./assets/mercedes.png";
import corvette from "./assets/corvette.png";
import Acerca from './AcercaDe.jsx';
import FormContacto from './Contacto.jsx';
import Sucursal from './Sucursales.jsx';

function Body({ vista }) {
  const vistas = {
    "Inicio": <Inicio />,
    "AcercaDe": <AcercaDe />,
    "Productos": <Productos />,
    "Contacto": <Contacto />,
    "Sucursales": <Sucursales />
  };

  return (
    <div>
      {vistas[vista] || <Inicio />}
    </div>
  );
}


function Inicio() { 
  return <Inicion />;
}


function AcercaDe() { 
  return <Acerca />;
}


function Contacto() { 
  return <FormContacto />;
}


function Sucursales() { 
  return <Sucursal />;
}


function Productos() {
  const autos = [
    { name: 'Porsche 911 GT3', src: porsche, potencia: '510 HP', velocidad: '318 km/h' },
    { name: 'Lamborghini Huracán', src: lamborghini, potencia: '610 HP', velocidad: '325 km/h' },
    { name: 'BMW M4', src: bmw, potencia: '480 HP', velocidad: '250 km/h' },
    { name: 'McLaren 720S', src: mclaren, potencia: '720 HP', velocidad: '341 km/h' },
    { name: 'Mercedes AMG GT', src: mercedes, potencia: '577 HP', velocidad: '310 km/h' },
    { name: 'Chevrolet Corvette C8', src: corvette, potencia: '495 HP', velocidad: '312 km/h' }
  ];

  return (
    <div className="productos-section">
      <h2 className="productos-title">Nuestros Autos Destacados</h2>
      <div className="productos-grid">
        {autos.map((auto, index) => (
          <Tarjeta
            key={index}
            name={auto.name}
            src={auto.src}
            potencia={auto.potencia}
            velocidad={auto.velocidad}
          />
        ))}
      </div>
    </div>
  );
}


function Tarjeta({ src, name, potencia, velocidad }) {
  return (
    <div className="galeria-card">
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>Potencia: {potencia}</p>
      <p>Velocidad máxima: {velocidad}</p>
    </div>
  );
}


Tarjeta.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  potencia: PropTypes.string.isRequired,
  velocidad: PropTypes.string.isRequired,
};

Body.propTypes = {
  vista: PropTypes.string.isRequired,
};

export default Body;

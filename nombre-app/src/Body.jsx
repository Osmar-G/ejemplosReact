import './body.css';
import PropTypes from 'prop-types';
import Inicion from './Inicio.jsx';
import porsche from "./assets/gt3.png";
import lamborghini from "./assets/lambo.png";
import bmw from "./assets/bmw.png";
import mclaren from "./assets/mclaren.png";
import mercedes from "./assets/mercedes.png";
import corvette from "./assets/corvette.png";
import audir8 from "./assets/audir8.png";
import ferrari488 from "./assets/ferrari488.png";
import gtr35 from "./assets/r35.png";
import teslaplaid from "./assets/teslaplaid.png";
import chiron from "./assets/chiron.png";
import mclarenp1 from "./assets/mclarenp1.png";
import hellcat from "./assets/hellcat.png";
import gt500 from "./assets/gt500.png";
import huayra from "./assets/huayra.png";
import jesko from "./assets/jesko.png";
import Acerca from './AcercaDe.jsx';
import FormContacto from './Contacto.jsx';
import Sucursal from './Sucursales.jsx';

function Body({ vista }) {
  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Contacto: <Contacto />,
    Sucursales: <Sucursales />
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
    { name: 'Chevrolet Corvette C8', src: corvette, potencia: '495 HP', velocidad: '312 km/h' },

    { name: 'Ferrari 488 GTB', src: ferrari488, potencia: '661 HP', velocidad: '330 km/h' },
    { name: 'Audi R8 V10', src: audir8, potencia: '610 HP', velocidad: '330 km/h' },
    { name: 'Nissan GT-R R35', src: gtr35, potencia: '565 HP', velocidad: '315 km/h' },

    { name: 'Tesla Model S Plaid', src: teslaplaid, potencia: '1020 HP', velocidad: '322 km/h' },
   { name: 'Dodge Challenger SRT Hellcat', src: hellcat, potencia: '717 HP', velocidad: '320 km/h' },
  { name: 'Ford Mustang Shelby GT500', src: gt500, potencia: '760 HP', velocidad: '290 km/h' },

     { name: 'Pagani Huayra BC', src: huayra, potencia: '791 HP', velocidad: '383 km/h' },
  { name: 'Koenigsegg Jesko', src: jesko, potencia: '1600 HP', velocidad: '482 km/h' },
  { name: 'Aston Martin Valkyrie', src: 'valkyrie', potencia: '1160 HP', velocidad: '402 km/h' },

    { name: 'Bugatti Chiron', src: chiron, potencia: '1500 HP', velocidad: '420 km/h' },
    { name: 'Mazda RX-7 FD', src: 'rx7', potencia: '280 HP', velocidad: '250 km/h' },
    { name: 'McLaren P1', src: mclarenp1, potencia: '903 HP', velocidad: '350 km/h' }
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
  velocidad: PropTypes.string.isRequired
};

Body.propTypes = {
  vista: PropTypes.string.isRequired
};

export default Body;
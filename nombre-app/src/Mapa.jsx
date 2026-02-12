import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '1000px'
};

function Mapa({ lat, lng, nombre }) {

  const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
});


  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando el mapa...</div>;

  const center = { lat, lng };

  return (
    <>
      <h3>{nombre}</h3>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

export default Mapa;

import { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer
} from '@react-google-maps/api';

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);
  const [directions, setDirections] = useState(null);

  const destino = { lat: 19.4326, lng: -99.1332 };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error('Error al obtener la ubicación:', error),
      { enableHighAccuracy: true }
    );
  }, []);

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {ubicacion && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={ubicacion}
          zoom={14}
        >
          <Marker position={ubicacion} label="Yo" />
          <Marker position={destino} label="Destino" />

          {!directions && (
            <DirectionsService
              options={{
                origin: ubicacion,
                destination: destino,
                travelMode: 'DRIVING',
              }}
              callback={directionsCallback}
            />
          )}

          {directions && (
            <DirectionsRenderer directions={directions} />
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapaGeolocalizacion;

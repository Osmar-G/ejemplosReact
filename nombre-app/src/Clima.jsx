import { useEffect, useState } from "react";
import "./Clima.css";

function Clima() {
  const [clima, setClima] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const lat = 20.442070542233562;
  const lng = -97.76084699523086;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => {
        setClima(data);
      })
      .catch((err) => console.log("Error : ", err));
  }, []);

  return (
    <div className="divClima">
      {clima ? (
        <>
          <p>
            {clima.name} - 🌡️Temperatura: {clima.main.temp}°C - 💧Humedad:{" "}
            {clima.main.humidity}%
          </p>
          <p>{clima.weather[0].description}</p>
        </>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
}

export default Clima;

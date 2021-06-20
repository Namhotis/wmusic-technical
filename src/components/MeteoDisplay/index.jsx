import React, { useEffect } from 'react'

import './index.scss'
import { infos } from '../../data'

const MeteoDisplay = ({ appState, setAppState }) => {
  const getMeteoAPI = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setAppState({
          ...appState,
          temperature: res.main.temp,
          weather: res,
        });
      })
      .catch((err) => console.log(err));
  }

  const checkRain = () => {
    // If any of the weather is rain, we set rain
    let rain = appState.weather.weather.filter((item) => item.main === "Rain").length > 0 ? 1 : 0;

    setAppState({
      ...appState,
      rain
    });
  }

  const handleCurrentTime = () => {
    setAppState({
      ...appState,
      temps:
        appState?.rain === 1
          ? "rain"
          : appState?.temperature < 15
          ? "cold"
          : "sun",
    });
  }

  useEffect(() => getMeteoAPI(), [])
  useEffect(() => {
    appState.weather && checkRain()
    handleCurrentTime();
  }, [appState.weather]);

  return (
    <section className="meteoDisplay">
      <p>Température à Paris : {appState.temperature} degrés</p>
      {infos && appState?.temps && (
        <>
          <p>{infos[appState?.temps].text}</p>
          <img
            src={infos[appState?.temps].icon}
            className="weatherIcon"
            alt=""
          />
        </>
      )}
    </section>
  );
}

export default MeteoDisplay

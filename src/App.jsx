import React, { useState, useEffect } from "react";
import TopButtons from "./components/topButtons";
import Inputs from "./components/inputs";
import LocationAndTime from "./components/LocationAndTime";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherDataFormatted from "./services/weatherService";

function App() {

  const [query, setQuery] = useState({q:'cairo'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [err, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const getWeather = async () => {
    try {
      const data = await getWeatherDataFormatted({ ...query, units });
      setWeather(data);
      setError(null); 
    } catch (error) {
      console.error(`Error fetching weather: ${err.message}`);
      if (err.cod === 429) {
        setError('Too many requests. Please try again later.');
      } else {
        setError('Invalid city name or other error. Please try again.');
      }
      setWeather(null); 
    }
  };

  useEffect(() => {getWeather()}, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-600 to-blue-700';
    if(units === 'metric') {
      if(weather.currentTemp > 40) return 'from-orange-600 to-red-800';
      if(weather.currentTemp > 30) return 'from-yellow-600 to-orange-700';
      if(weather.currentTemp > 20) return 'from-green-400 to-blue-500';
      if(weather.currentTemp > 10) return 'from-cyan-200 to-blue-500';
    } else {
      if(weather.currentTemp > 104) return 'from-orange-600 to-red-800';
      if(weather.currentTemp > 86) return 'from-yellow-600 to-orange-700';
      if(weather.currentTemp > 68) return 'from-green-400 to-blue-500';
      if(weather.currentTemp > 50) return 'from-cyan-200 to-blue-500';
    }
  }

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className={`mx-auto  max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
    shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units} setError={setError}/>

      {weather && (
        <>
          <LocationAndTime weather={weather}/>
          <TemperatureAndDetails weather={weather} unit={units}/>
          <Forecast title='3 hour step forecast' data={weather.hourly}/>
          <Forecast title='daily forecast' data={weather.daily}/>
        </>  
      )}
    </div>
  )
}

export default App

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    setWeatherData(city)
  };

  return (
    <div style={{ margin: -8}} className="App">
      <SearchBar onSearch={handleSearch} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [response, setResponse] = useState("");

  const handleSearch = async (city) => {
    if(!city){
      setResponse('the city does not exist!')
    }
    setWeatherData(city)
  };

  return (
    <div style={{ margin: -8}} className="App">
      <SearchBar onSearch={handleSearch} />
      {!weatherData && <Typography variant="h6" sx={{color: 'red', mt:1}}>{response}</Typography> }
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Container, Box, IconButton, InputBase, Paper } from '@mui/material';
import { fetchWeatherData } from '../actions/weatherActions';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await fetchWeatherData(city);
    onSearch(data);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <img src="/assets/images/weather02-512.webp" alt="weather" height="300" />
      </Box>

      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter city"
          inputProps={{ 'aria-label': 'enter city' }}
          onChange={(e) => setCity(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBar;

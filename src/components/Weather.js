import React from 'react';
import WeatherParameter from './WeatherParameter';
import { Grid } from '@mui/material';

const Weather = ({ data }) => {
  return (
      <Grid sx={{mt:2}} container spacing={3} >
        {
          data.map(({ label, value, image }) => (
            <WeatherParameter key={label} label={label} value={value} image={image} />
          ))
        }
      </Grid>
  );
};

export default Weather;

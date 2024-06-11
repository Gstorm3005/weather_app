import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function WeatherParameter({ label, value, image }) {
  return (
    <Grid item xs={12} sm={6} md={3} container justifyContent="center">
      <Card sx={{ minWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ width: 50, height: 50, margin: '16px auto' }} // Adjust the size here
            image={`/assets/images/${image}`}
            alt={label}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
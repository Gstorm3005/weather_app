import axios from 'axios';

export const fetchWeatherData = async (city) => {
  const apiKey = '6a1db07cf7f54b4490784829241106';
  const url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const { temp_c, condition, wind_kph, humidity, pressure_mb, uv, cloud, vis_km } = response.data.current;
    const modifiedResponse = [
      {
        label: "Temperature",
        value: `${temp_c} °C`,
        image: "icone_temperature.png"
      },
      {
        label: "Condition",
        value: condition.text,
        image: "icone_condition.png"
      },
      {
        label: "Wind Speed",
        value: `${wind_kph} km/h`,
        image: "icone_wind.png"
      },
      {
        label: "Humidity",
        value: humidity,
        image: "icone_humidity.png"
      },
      {
        label: "Pressure",
        value: `${pressure_mb} mb`,
        image: "icone_pressure.png"
      },
      {
        label: "UV index",
        value: uv,
        image: "icone_uv.png"
      },
      {
        label: "Cloud Cover",
        value: cloud,
        image: "icone_cloud.png"
      },
      {
        label: "Visibility",
        value: vis_km,
        image: "icone_visibility.png"
      },
    ];

    console.log(modifiedResponse);
    return modifiedResponse;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

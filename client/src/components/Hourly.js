import React from "react";
import Container from "./Container";
import Scroll from "./Scroll";
import Hour from "./Boxes/Hour";

export default props => {
  const weather = props.weather;

  const hourlyWeather = weather.data.map(hour => (
    <Hour
      key={hour.time}
      time={hour.time}
      summary={hour.summary}
      temp={hour.temperature}
      humidity={hour.humidity}
      windSpeed={hour.windSpeed}
    />
  ));

  return (
    <Container title="Hourly">
      <Scroll>{hourlyWeather}</Scroll>
    </Container>
  );
};

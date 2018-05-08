import React from "react";
import Container from "./Container";
import Scroll from "./Scroll";
import Box from "./Boxes/DoW";

export default props => {
  const weather = props.weather;
  const dailyWeather = weather.data.map(day => (
    <Box
      key={day.time}
      time={day.time}
      high={day.temperatureHigh}
      highTime={day.temperatureHighTime}
      low={day.temperatureLow}
      lowTime={day.temperatureLowTime}
      summary={day.summary}
      humidity={day.humidity}
      precipProbability={day.precipProbability}
      windSpeed={day.windSpeed}
    />
  ));
  return (
    <Container title="Daily">
      <h3>{weather.summary}</h3>
      <Scroll>{dailyWeather}</Scroll>
    </Container>
  );
};

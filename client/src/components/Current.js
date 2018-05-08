import React from "react";
import Container from "./Container";
import Scroll from "./Scroll";
import CurrentBox from "./Boxes/CurrentBox";
import _ from "underscore";
import getTime from "../utils/timeConverter";
export default props => {
  const {
    cloudCover,
    humidity,
    pressure,
    summary,
    temperature,
    time,
    windSpeed
  } = props.weather;

  var attrs = {
    "Cloud Coverage": cloudCover,
    Humidity: humidity,
    Preassure: pressure,
    Temperature: temperature,
    "Wind Speed": windSpeed
  };

  attrs = _.pairs(attrs);

  const renderAttributes = attrs.map(attr => (
    <CurrentBox key={attr[0]} name={attr[0]} val={attr[1]} />
  ));

  return (
    <Container className="current" title="Current">
      <div className="timeAndSummary">
        <h3>{getTime(time)}</h3>
        <h3>Status: {summary}</h3>
      </div>
      <Scroll>{renderAttributes}</Scroll>
    </Container>
  );
};

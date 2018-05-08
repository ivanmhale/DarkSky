import React from "react";
import getTime from "../../utils/timeConverter";

export default props => {
  let humidity = props.humidity*100;
  humidity = humidity.toFixed(2);
  return (
    <li className="box">
      <h3>{getTime(props.time)}</h3>
      <h4>Status: <i>{props.summary}</i></h4>
      <h4>Temperature: {props.temp}&#176; F</h4>
      <h4>Humidity: {humidity}%</h4>
      <h4>WindSpeed: {props.windSpeed} MPH</h4>
    </li>
  );
};

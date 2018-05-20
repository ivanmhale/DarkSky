import React from "react";
import getTime from "../../utils/timeConverter";
import getDate from "../../utils/getDate";
import Skycon from "./Skycon";

export default props => {
  let humidity = props.humidity * 100;
  humidity = humidity.toFixed(2).slice(0,-3);
  return (
    <li className="box">
      <h3>{getTime(props.time)}</h3>
      <h3>{getDate(props.time)}</h3>
      <h4>
        Status: <i>{props.summary}</i>
      </h4>
      <Skycon icon={props.icon} />
      <h4>Temperature: {props.temp}&#176; F</h4>
      <h4>Humidity: {humidity}%</h4>
      <h4>WindSpeed: {props.windSpeed} MPH</h4>
    </li>
  );
};

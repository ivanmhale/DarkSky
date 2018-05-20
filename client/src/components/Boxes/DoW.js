import React from "react";
import Skycon from './Skycon';
import getTime from "../../utils/timeConverter";

export default props => {
  var timestamp = props.time;
  var a = new Date(timestamp * 1000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var dayOfWeek = days[a.getDay()];

  let humidity = props.humidity*100;
  humidity = humidity.toFixed(2).slice(0,-3);

  let precipProbability = props.precipProbability*100;
  precipProbability = precipProbability.toFixed(2).slice(0,-3);

  return (
    <li className="box">
      <h3>{dayOfWeek}</h3>
      <h4>Status: <i>{props.summary}</i></h4>
      <Skycon icon={props.icon}/>
      <h4>
        High: {props.high}&#176; F around {getTime(props.highTime)}
      </h4>
      <h4>
        Low: {props.low}&#176; F around {getTime(props.lowTime)}
      </h4>
      <h4>Humidity: {humidity}%</h4>
      <h4>Percipitation: {precipProbability}%</h4>
      <h4>Wind Speed: {props.windSpeed} MPH</h4>
    </li>
  );
};

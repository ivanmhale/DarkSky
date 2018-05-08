import React from "react";

export default props => {
  let val = props.val;
  if (props.name === "Cloud Coverage" || props.name === "Humidity") {
    val = val * 100;
  }

  val = val.toFixed(2);
  let unit;
  switch (props.name) {
    case "Cloud Coverage":
      unit = "%";
      break;
    case "Humidity":
      unit = "%";
      break;
    case "Preassure":
      unit = " mb";
      break;
    case "Temperature":
      unit = " " + String.fromCharCode("0176") + "F";
      break;
    case "Wind Speed":
      unit = " MPH";
      break;
    default:
      return;
  }
  return (
    <li className="box">
      <h3>{props.name}</h3>
      <h3>
        {val}
        {unit}
      </h3>
    </li>
  );
};

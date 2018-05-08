import React from "react";

export default props => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

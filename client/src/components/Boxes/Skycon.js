import React from 'react';
import Skycons from "skycons-component";

const Skycon = props => {
  return (
    <div>
      <Skycons
        animate={true}
        style={{ width: 64, height: 64 }}
        icon={props.icon}
      />
    </div>
  );
};

export default Skycon;

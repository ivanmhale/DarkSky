import React from "react";

export default props => {
  return (
    <div className="menu">
      <button onClick={this.props.getByCoords.bind(this)}>
        Get weather by your current location
      </button>
      <button onClick={this.toggleForm}>Get weather by city search</button>
      <form action="">
        <input
          type="text"
          placeholder="Enter a city name"
          value={this.state.cityName}
          onChange={e => this.setState({ cityName: e.target.value })}
        />
        <button onClick={this.getBySearch.bind(this)}>Submit</button>
      </form>
    </div>
  );
};

import React, { Component } from "react";
import { weatherByCoords } from "../actions";
import { connect } from "react-redux";

import Spinner from "./Spinner";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

class App extends Component {
  state = {
    latitude: "",
    longitude: "",
    error: false,
    showWeather: false
  };

  getByCoords() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.props.weatherByCoords(pos.coords);
      },
      err => {
        console.log(err);
      }
    );

    this.setState({
      showWeather: true
    });
  }

  getBySearch(e) {
    e.preventDefault();
    if (
      this.state.latitude.match(/[a-z]/i) ||
      this.state.longitude.match(/[a-z]/i)
    ) {
      return this.setState({
        error: true
      });
    }

    this.props.weatherByCoords({
      latitude: this.state.latitude,
      longitude: this.state.longitude
    });
    this.setState({
      showWeather: true
    });
  }

  updateLat = e => {
    this.setState({ latitude: e.target.value });
  };

  updateLon = e => {
    this.setState({ longitude: e.target.value });
  };

  renderComponents() {
    if (this.state.error) {
      document
        .getElementById("errorMessage")
        .classList.add("activeErrorMessage");
    }

    if (this.state.showWeather) {
      if (this.state.showWeather && !this.props.weather) {
        return <Spinner />;
      } else {
        // return <Chart />;
        return (
          <div className="chart">
            {this.renderLink()}
            <Current weather={this.props.weather.currently} />
            <Hourly weather={this.props.weather.hourly} />
            <Daily weather={this.props.weather.daily} />
          </div>
        );
      }
    }
    // return <Menu />;

    var lat = document.getElementById("latitude");
    var lng = document.getElementById("longitude");

    if (this.state.latitude && lat) {
      lat.classList.add("hasVal");
    }
    if (this.state.longitude && lng) {
      lng.classList.add("hasVal");
    }

    return (
      <div className="menu">
        <div className="getByLocation">
          <h1>Get weather by your current location</h1>
          <button className="button" onClick={this.getByCoords.bind(this)}>
            Go
          </button>
        </div>

        <div className="getByInput">
          <h1>...or enter coordinates</h1>
          <h3>
            <i>In degrees North and East, respectively.</i>
          </h3>
          <div id="latitude" className="inputField">
            <p>Latitude</p>
            <input
              type="text"
              value={this.state.latitude}
              onChange={e => this.updateLat(e)}
            />
          </div>
          <div id="longitude" className="inputField">
            <p>Longitude</p>
            <input
              type="text"
              value={this.state.longitude}
              onChange={e => this.updateLon(e)}
            />
          </div>
          <div className="bottom">
            <button
              className="button"
              disabled={!this.state.latitude || !this.state.longitude}
              onClick={this.getBySearch.bind(this)}
            >
              Go
            </button>
            <p id="errorMessage">No letters or weird characters.</p>
          </div>
        </div>
      </div>
    );
  }

  renderLink() {
    if (!this.props.weather) {
      return (
        <a className="link link_1" href="https://darksky.net/poweredby/">
          Powered by Dark Sky
        </a>
      );
    }

    return (
      <a className="link link_2" href="https://darksky.net/poweredby/">
        Powered by Dark Sky
      </a>
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderComponents()}
        {this.renderLink()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    weatherByCoords: position => dispatch(weatherByCoords(position))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

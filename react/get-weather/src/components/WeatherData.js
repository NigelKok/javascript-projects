import React, { Component } from "react";

export class WeatherData extends Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}

        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.temperature && (
          <p>
            Temperature: {this.props.temperature} {"\u00b0"}C
          </p>
        )}
        {this.props.humidity && <p>Humidity: {this.props.humidity} %</p>}
      </div>
    );
  }
}

export default WeatherData;

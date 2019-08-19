import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter city name here" />

        <button>Get Weather Details</button>
      </form>
    );
  }
}

export default Form;

import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";

const API_KEY = "Insert Key Here;

export class App extends Component {
  state = {
    city: "",
    country: "",
    description: "",
    temperature: "",
    humidity: ""
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (data.cod === "404") {
      console.log("error");
    } else {
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: Math.round((data.main.temp - 273.15) * 100) / 100,
        humidity: data.main.humidity
      });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <WeatherData
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          humidity={this.state.humidity}
          temperature={this.state.temperature}
        />
      </div>
    );
  }
}

export default App;

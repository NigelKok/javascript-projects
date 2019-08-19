import React, { Component } from "react";
import "./Input.css";

export class Input extends Component {
  render() {
    return <div className="input">{this.props.input}</div>;
  }
}

export default Input;

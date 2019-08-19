import React, { Component } from "react";
import "./Button.css";

export class EqualButton extends Component {
  render() {
    return (
      <div className="button" onClick={this.props.compute}>
        {this.props.children}
      </div>
    );
  }
}

export default EqualButton;

import React, { Component } from "react";
import "./Button.css";

export class ClearButton extends Component {
  render() {
    return (
      <div className="button" onClick={this.props.reset}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;

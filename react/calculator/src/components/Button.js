import React, { Component } from "react";
import "./Button.css";

export class Button extends Component {
  submitChild = e => {
    e.preventDefault();

    if (
      this.props.children == "+" ||
      this.props.children == "-" ||
      this.props.children == "/" ||
      this.props.children == "*"
    ) {
      this.props.addOperator(this.props.children);
    } else {
      this.props.addNum(this.props.children);
    }
  };

  operatorStyle = () => {
    return {
      background:
        this.props.children == "+" ||
        this.props.children == "-" ||
        this.props.children == "/" ||
        this.props.children == "*"
          ? "#FFA500"
          : ""
    };
  };

  render() {
    return (
      <div
        style={this.operatorStyle()}
        onClick={this.submitChild}
        className="button"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;

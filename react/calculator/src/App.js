import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import EqualButton from "./components/EqualButton";

export class App extends Component {
  state = {
    input: "",
    operator: "",
    operatorState: "off",
    previousInput: ""
  };

  addNum = num => {
    if (this.state.operatorState === "on") {
      // Clear input and transfer input to previousInput
      this.state.previousInput = this.state.input;
      this.state.input = "";
    }

    if (num === ".") {
      this.setState({
        input: this.state.input.includes(".")
          ? this.state.input
          : this.state.input + num,
        operator: this.state.operator,
        operatorState: "off",
        previousInput: this.state.previousInput
      });
    } else {
      this.setState({
        input: this.state.input + num,
        operator: this.state.operator,
        operatorState: "off",
        previousInput: this.state.previousInput
      });
    }
  };

  addOperator = op => {
    if (this.state.operator === "+") {
      this.setState({
        input: (
          parseFloat(this.state.input) + parseFloat(this.state.previousInput)
        ).toString(),
        operator: op,
        operatorState: "on",
        previousInput: ""
      });
    } else if (this.state.operator === "-") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) + parseFloat(this.state.input)
        ).toString(),
        operator: op,
        operatorState: "on",
        previousInput: ""
      });
    } else if (this.state.operator === "*") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) * parseFloat(this.state.input)
        ).toString(),
        operator: op,
        operatorState: "on",
        previousInput: ""
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) / parseFloat(this.state.input)
        ).toString(),
        operator: op,
        operatorState: "on",
        previousInput: ""
      });
    } else if (this.state.operator === "") {
      this.setState({
        input: this.state.input,
        operator: op,
        operatorState: "on",
        previousInput: this.state.input
      });
    }
  };

  reset = () => {
    this.setState({
      input: "",
      operator: "",
      operatorState: "off",
      previousInput: ""
    });
  };

  compute = () => {
    if (this.state.operator === "+") {
      this.setState({
        input: (
          parseFloat(this.state.input) + parseFloat(this.state.previousInput)
        ).toString(),
        operator: "",
        operatorState: "off",
        previousInput: ""
      });
    } else if (this.state.operator === "-") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) + parseFloat(this.state.input)
        ).toString(),
        operator: "",
        operatorState: "off",
        previousInput: ""
      });
    } else if (this.state.operator === "*") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) * parseFloat(this.state.input)
        ).toString(),
        operator: "",
        operatorState: "off",
        previousInput: ""
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input: (
          parseFloat(this.state.previousInput) / parseFloat(this.state.input)
        ).toString(),
        operator: "",
        operatorState: "off",
        previousInput: ""
      });
    } else if (this.state.operator === "") {
      this.setState({
        input: this.state.input,
        operator: "",
        operatorState: "off",
        previousInput: this.state.input
      });
    }
  };

  render() {
    return (
      <div className="flex-container">
        <Input
          previousInput={this.state.previousInput}
          input={this.state.input}
          operator={this.state.operator}
        />

        <div className="flex-row">
          <Button addNum={this.addNum}>7</Button>
          <Button addNum={this.addNum}>8</Button>
          <Button addNum={this.addNum}>9</Button>
          <Button addOperator={this.addOperator}>/</Button>
        </div>

        <div className="flex-row">
          <Button addNum={this.addNum}>4</Button>
          <Button addNum={this.addNum}>5</Button>
          <Button addNum={this.addNum}>6</Button>
          <Button addOperator={this.addOperator}>*</Button>
        </div>

        <div className="flex-row">
          <Button addNum={this.addNum}>1</Button>
          <Button addNum={this.addNum}>2</Button>
          <Button addNum={this.addNum}>3</Button>
          <Button addOperator={this.addOperator}>+</Button>
        </div>

        <div className="flex-row">
          <Button addNum={this.addNum}>.</Button>
          <Button addNum={this.addNum}>0</Button>
          <EqualButton compute={this.compute}>=</EqualButton>
          <Button addOperator={this.addOperator}>-</Button>
        </div>

        <div className="flex-row">
          <ClearButton reset={this.reset}>Clear</ClearButton>
        </div>
      </div>
    );
  }
}

export default App;

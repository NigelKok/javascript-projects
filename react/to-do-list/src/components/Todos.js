import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        delTodo={this.props.delTodo}
        markComplete={this.props.markComplete}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;

import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Axios from "axios";

export class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => this.setState({ todos: res.data })
    );
  }

  //Delete item
  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  addTodo = title => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  delTodo={this.delTodo}
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

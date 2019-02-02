import React, { Component } from 'react';
import uuid from 'uuid';
import SimpleStorage from 'react-simple-storage';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import AddTodoForm from '../components/AddTodoForm';
import Todos from '../components/Todos';

class App extends Component {
  state = {
    todos: [],
  };

  handleCompleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  handleRemoveTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  };

  handleAddTodo = (todo) => {
    const newTodo = {
      id: uuid.v4(),
      title: todo,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <Header />
        <main>
          <AddTodoForm handleAddTodo={this.handleAddTodo} />
          <Todos
            todos={this.state.todos}
            handleCompleteTodo={this.handleCompleteTodo}
            handleRemoveTodo={this.handleRemoveTodo}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

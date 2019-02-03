import React, { Component } from 'react';
import uuid from 'uuid';
import SimpleStorage from 'react-simple-storage';
import { arrayMove } from 'react-sortable-hoc';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import AddTodoForm from '../components/AddTodoForm';
import Todos from '../components/Todos';

class App extends Component {
  state = {
    todos: [],
  };

  handleCompleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };

  handleRemoveTodo = (id) => {
    const confirmRemoveTodo = window.confirm('Delete todo ?');
    if (confirmRemoveTodo) {
      this.setState(prevState => ({
        todos: [...prevState.todos.filter(todo => todo.id !== id)],
      }));
    }
  };

  handleAddTodo = (todo) => {
    const newTodo = {
      id: uuid.v4(),
      title: todo,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleEditTodo = (id) => {
    const editedTodo = window.prompt('Edit this todo', '');
    if (editedTodo) {
      this.setState(prevState => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = editedTodo;
          }
          return todo;
        }),
      }));
    }
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ todos }) => ({
      todos: arrayMove(todos, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <Header />
        <main>
          <div className="container">
            <AddTodoForm handleAddTodo={this.handleAddTodo} />
            <Todos
              todos={this.state.todos}
              handleCompleteTodo={this.handleCompleteTodo}
              handleRemoveTodo={this.handleRemoveTodo}
              handleEditTodo={this.handleEditTodo}
              onSortEnd={this.onSortEnd}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

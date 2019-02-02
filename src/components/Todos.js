import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return (
      <div className="container">
        <div>
          {this.props.todos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              handleCompleteTodo={this.props.handleCompleteTodo}
              handleRemoveTodo={this.props.handleRemoveTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;

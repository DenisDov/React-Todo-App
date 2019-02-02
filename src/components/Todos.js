import React, { Component } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return (
      <div className="container">
        <TodosHolder>
          {this.props.todos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              handleCompleteTodo={this.props.handleCompleteTodo}
              handleRemoveTodo={this.props.handleRemoveTodo}
            />
          ))}
        </TodosHolder>
      </div>
    );
  }
}

export default Todos;

const TodosHolder = styled.div`
  margin-bottom: 30px;
`;

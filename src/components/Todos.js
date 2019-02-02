import React, { Component } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    const {
      todos,
      handleCompleteTodo,
      handleRemoveTodo,
      handleEditTodo,
    } = this.props;
    return (
      <div className="container">
        <TodosHolder>
          {todos.length ? (
            todos.map(item => (
              <TodoItem
                key={item.id}
                todo={item}
                handleCompleteTodo={handleCompleteTodo}
                handleRemoveTodo={handleRemoveTodo}
                handleEditTodo={handleEditTodo}
              />
            ))
          ) : (
            <StyledEmptyComponent>
              Add your first todo above
            </StyledEmptyComponent>
          )}
        </TodosHolder>
      </div>
    );
  }
}

export default Todos;

const TodosHolder = styled.div`
  margin-bottom: 30px;
`;
const StyledEmptyComponent = styled.div`
  text-align: center;
`;

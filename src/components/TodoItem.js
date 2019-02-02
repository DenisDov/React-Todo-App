import React, { Component } from 'react';
import styled from 'styled-components';

class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <StyledTodoItem completed={completed}>
        <input
          type="checkbox"
          id={id}
          onChange={() => this.props.handleCompleteTodo(id)}
          checked={completed}
        />
        <StyledTodoLabel htmlFor={id} completed={completed}>
          {title}
        </StyledTodoLabel>
        <StyledCross onClick={() => this.props.handleRemoveTodo(id)}>
          ✕
        </StyledCross>
      </StyledTodoItem>
    );
  }
}

export default TodoItem;

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: ${props => (props.completed ? 'yellow' : 'white')};
  transition: background-color 200ms;
  border-bottom: 1px solid #ddd;
  &:hover {
    span {
      opacity: 1;
    }
  }
  input[type='checkbox'] {
    margin-right: 0;
  }
`;
const StyledTodoLabel = styled.label`
  flex: 1;
  padding: 20px 5px;
  user-select: none;
  cursor: pointer;
  text-decoration: ${props => props.completed && 'line-through'};
`;
const StyledCross = styled.span`
  cursor: pointer;
  padding: 8px 3px;
  opacity: 0;
  &:hover {
    background: white;
  }
`;

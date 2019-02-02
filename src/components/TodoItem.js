import React, { Component } from 'react';
import styled from 'styled-components';

class TodoItem extends Component {
  render() {
    // console.log('props', this.props.todo);
    const { id, title, completed } = this.props.todo;
    return (
      <StyledTodoItem>
        <input
          type="checkbox"
          id={id}
          onChange={() => this.props.handleCompleteTodo(id)}
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
  background-color: #ddd;
  transition: background-color 200ms;
  border-bottom: 1px solid white;
  &:hover {
    background-color: #ccc;
  }
`;
const StyledTodoLabel = styled.label`
  flex: 1;
  padding: 20px 0;
  user-select: none;
  cursor: pointer;
  text-decoration: ${props => props.completed && 'line-through'};
`;
const StyledCross = styled.span`
  cursor: pointer;
  padding: 8px 3px;
  &:hover {
    background: white;
  }
`;

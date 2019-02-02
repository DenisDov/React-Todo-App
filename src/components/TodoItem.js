import React from 'react';
import styled from 'styled-components';

const TodoItem = ({
  todo: { id, title, completed },
  handleCompleteTodo,
  handleRemoveTodo,
  handleEditTodo,
}) => (
  <StyledTodoItem completed={completed}>
    <input
      type="checkbox"
      id={id}
      onChange={() => handleCompleteTodo(id)}
      checked={completed}
    />
    <StyledTodoLabel htmlFor={id} completed={completed}>
      {title}
    </StyledTodoLabel>
    <StyledEdit type="button" onClick={() => handleEditTodo(id)}>
      ✎
    </StyledEdit>
    <StyledCross onClick={() => handleRemoveTodo(id)}>✕</StyledCross>
  </StyledTodoItem>
);

export default TodoItem;

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: ${props => (props.completed ? 'yellow' : 'white')};
  transition: background-color 200ms;
  border-bottom: 1px solid #ddd;
  &:hover {
    span,
    button {
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
const StyledEdit = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px 3px;
  opacity: 0;
  margin-right: 5px;
  &:hover {
    background: #f9f9f9;
  }
  &:focus {
    outline: none;
  }
`;
const StyledCross = styled.span`
  cursor: pointer;
  padding: 8px 3px;
  opacity: 0;
  &:hover {
    background: #f9f9f9;
  }
`;

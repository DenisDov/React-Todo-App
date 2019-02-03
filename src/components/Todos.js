import React, { Component } from 'react';
import styled from 'styled-components';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';

import TodoItem from './TodoItem';

const SortableContainer = sortableContainer(({ children }) => (
  <TodosHolder>{children}</TodosHolder>
));
const SortableItem = sortableElement(({ ...props }) => <TodoItem {...props} />);

class Todos extends Component {
  render() {
    const {
      todos,
      handleCompleteTodo,
      handleRemoveTodo,
      handleEditTodo,
      onSortEnd,
    } = this.props;
    return (
      <SortableContainer pressDelay={200} onSortEnd={onSortEnd}>
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <SortableItem
              key={item.id}
              index={index}
              todo={item}
              handleCompleteTodo={handleCompleteTodo}
              handleRemoveTodo={handleRemoveTodo}
              handleEditTodo={handleEditTodo}
            />
          ))
        ) : (
          <StyledEmptyComponent>Add your first todo above</StyledEmptyComponent>
        )}
        {todos.length > 0 && (
          <StyledTip>Hold and sort todo if you need</StyledTip>
        )}
      </SortableContainer>
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
const StyledTip = styled.p`
  color: #6c757d;
`;

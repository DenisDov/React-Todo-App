import React, { Component } from 'react';
import styled from 'styled-components';

class AddTodoForm extends Component {
  state = {
    todo: '',
  };

  handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTodo(this.state.todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    console.log('s', this.state);
    return (
      <div className="container">
        <h1>TODO</h1>
        <StyledForm onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="add todo here"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={this.state.todo === ''}>
            Add Todo
          </button>
        </StyledForm>
      </div>
    );
  }
}

export default AddTodoForm;

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 1.5em;
  input {
    font-size: 16px;
    flex: 1;
    border-radius: 2px 0 0 2px;
    border: 1px solid #ddd;
    border-right: 0;
    padding: 1em 0.75em;
    &:focus {
      outline: none;
    }
  }
  button {
    font-size: 16px;
    -webkit-appearance: button;
    border-radius: 0 2px 2px 0;
    border: 1px solid #007bff;
    padding: 1em 0.75em;
    background-color: #007bff;
    color: white;
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.8;
    }
  }
`;

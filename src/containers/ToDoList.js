import React from 'react';
import ToDo from '../components/ToDo';
import { connect } from 'react-redux';
import { isCompleted } from '../actions';

const ToDoList = ({todos, isCompleted}) => {
  const displayTodos = todos.map(todo => {
    return (
      <ToDo
        {...todo}
        key={todo.id}
        isCompleted={isCompleted}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
});


export default connect(mapStateToProps, {isCompleted})(ToDoList);
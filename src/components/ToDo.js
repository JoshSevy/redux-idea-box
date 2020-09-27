import React from 'react';

const ToDo = ({ id, todo, completed, isCompleted }) => {
  return (
    <li 
      className={(completed) ? "completed": "not-completed"}
      onClick={() => isCompleted(id)}
    >
    {todo}
    </li>
  )
}



export default ToDo;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

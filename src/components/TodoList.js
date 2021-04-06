import { List } from '@material-ui/core';

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, removeTodo }) => (
  <List>
    {todos.map((todo) => (
      <Todo
        key={todo && todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    ))}
  </List>
);

export default TodoList;

import React, { useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  addTodo,
  removeTodo,
  setFilter,
  setTodoStatus
} from '../../store/actions/todosActions';
import { getVisibleTodos } from '../../store/selectors/todosSelectors';

const Todos = (props: any) => {
  const [value, setValue] = useState('');
  const todos = useSelector(state => getVisibleTodos(state));
  const dispatch = useDispatch();

  const onAddTodo = (key: any) => {
    if (value == '' || (key && key !== 'Enter')) return;

    dispatch(addTodo(value));
    setValue('');
  };

  const onSetTodoStatus = (index: number) => dispatch(setTodoStatus(index));
  const onSetFilter = (filter: string) => dispatch(setFilter(filter));

  return (
    <div className="wrapper">
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyUp={event => onAddTodo(event.key)}
      />

      <button className="add-button" onClick={() => onAddTodo(null)}>
        Add Todo
      </button>

      <ul className="list">
        {todos.map((todo, index) => (
          <li
            className={todo.isCompleted ? 'completed-todo-item' : ''}
            key={Math.random()}
            onClick={() => onSetTodoStatus(index)}
          >
            {todo.name}
          </li>
        ))}
      </ul>

      <div className="filter-buttons">
        <button onClick={() => onSetFilter('all')}>All</button>
        <button onClick={() => onSetFilter('completed')}>Completed</button>
        <button onClick={() => onSetFilter('active')}>Active</button>
      </div>
    </div>
  );
};

export default Todos;

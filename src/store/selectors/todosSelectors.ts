import { createSelector } from 'reselect';
import { ITodoItem } from '../interfaces';

const getAllTodos = (state: any) => {
  return state.todos.allTodos;
};

const getVisibilityFilter = (state: any) => {
  return state.todos.visibilityFilter;
};

export const getVisibleTodos = createSelector(
  [getAllTodos, getVisibilityFilter],
  (todos: Array<ITodoItem>, visibilityFilter: string) => {
    switch (visibilityFilter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(item => item.isCompleted);
      case 'active':
        return todos.filter(item => !item.isCompleted);
      default:
        return todos;
    }
  }
);

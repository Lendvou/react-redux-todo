import {
  ADD_TODO,
  REMOVE_TODO,
  SET_FILTER,
  SET_TODO_STATUS
} from '../actionTypes';

export const addTodo = (name: string) => ({ type: ADD_TODO, payload: name });

export const removeTodo = (index: number) => ({
  type: REMOVE_TODO,
  payload: index
});

export const setFilter = (visibilityFilter: string) => ({
  type: SET_FILTER,
  payload: visibilityFilter
});

export const setTodoStatus = (index: number) => ({
  type: SET_TODO_STATUS,
  payload: index
});

import {
  ADD_TODO,
  REMOVE_TODO,
  SET_FILTER,
  SET_TODO_STATUS
} from '../actionTypes';
import { ITodoItem, IAction } from '../interfaces';
import { combineReducers } from 'redux';

interface TodosPayload extends IAction {
  payload?: number | string;
}

interface FilterPayload extends IAction {
  payload: string;
}

const allTodos = (state: Array<ITodoItem> = [], action: TodosPayload) => {
  switch (action.type) {
    case ADD_TODO:
      if (typeof action.payload === 'string')
        return state.concat({
          name: action.payload,
          isCompleted: false
        });
      else
        return state
    case REMOVE_TODO:
      return state.filter((el, index) => index !== action.payload);
    case SET_TODO_STATUS:
      const oldState = [...state];
      let item = oldState.find((todo, index) => index === action.payload);
      if (item) {
        item.isCompleted = item.isCompleted ? false : true;
        // item = {
        //   ...item,
        //   isCompleted: item.isCompleted ? false : true
        // }
      }
      return oldState;
    default:
      return state;
  }
};

const visibilityFilter = (state: string = 'all', action: FilterPayload) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allTodos,
  visibilityFilter
});

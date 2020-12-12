import {BaseAction} from './types';

export const ADD_TODO = 'ADD_TODO';

interface BaseTodoAction extends BaseAction {
  type: 'ADD_TODO';
}

interface AddTodo extends BaseTodoAction {
  payload: {
    title: string;
  };
}

export function addTodo(title: string): AddTodo {
  return {
    type: ADD_TODO,
    payload: {
      title,
    },
  };
}

export type TodoAction = AddTodo;

import {TodoPriority} from 'types/states';
import {BaseAction} from './types';

export const ADD_TODO = 'ADD_TODO';

interface BaseTodoAction extends BaseAction {
  type: 'ADD_TODO';
}

interface AddTodo extends BaseTodoAction {
  payload: {
    title: string;
    priority?: TodoPriority;
    dueTo?: Date;
  };
}

export function addTodo(
  title: string,
  priority?: TodoPriority,
  dueTo?: Date,
): AddTodo {
  return {
    type: ADD_TODO,
    payload: {
      title,
      priority: priority || 'medium',
      dueTo: dueTo || new Date(),
    },
  };
}

export type TodoAction = AddTodo;

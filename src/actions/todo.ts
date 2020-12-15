import {TodoPriority} from 'types/states';
import {BaseAction} from './types';

export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';

interface BaseTodoAction extends BaseAction {
  type: 'ADD_TODO' | 'DONE_TODO';
}

export interface AddTodo extends BaseTodoAction {
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

export interface DoneTodoItem extends BaseTodoAction {
  payload: {
    id: number;
  };
}

export function doneTodo(id: number): DoneTodoItem {
  return {
    type: DONE_TODO,
    payload: {
      id,
    },
  };
}

export type TodoAction = AddTodo | DoneTodoItem;

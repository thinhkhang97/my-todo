import {TodoPriority} from 'types/states';
import {BaseAction} from './types';

export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const RESTORE_TODO = 'RESTORE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

interface BaseTodoAction extends BaseAction {
  type:
    | 'ADD_TODO'
    | 'DONE_TODO'
    | 'DELETE_TODO'
    | 'RESTORE_TODO'
    | 'UPDATE_TODO';
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

export interface DeleteTodoItem extends BaseTodoAction {
  payload: {
    id: number;
  };
}

export function deleteTodo(id: number): DeleteTodoItem {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}

export interface RestoreTodoItem extends BaseTodoAction {
  payload: {
    id: number;
  };
}

export function restoreTodo(id: number): RestoreTodoItem {
  return {
    type: RESTORE_TODO,
    payload: {
      id,
    },
  };
}

export interface UpdateTodoItem extends BaseTodoAction {
  payload: {
    id: number;
    title: string;
    priority: TodoPriority;
    dueTo: Date;
  };
}

export function updateTodo(
  id: number,
  title: string,
  priority?: TodoPriority,
  dueTo?: Date,
): UpdateTodoItem {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      title,
      priority: priority || 'medium',
      dueTo: dueTo || new Date(),
    },
  };
}

export type TodoAction =
  | AddTodo
  | DoneTodoItem
  | DeleteTodoItem
  | RestoreTodoItem
  | UpdateTodoItem;

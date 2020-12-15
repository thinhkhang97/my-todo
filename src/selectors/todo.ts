import {Store, TodoItem} from 'types/states';

export const getListTodo = (state: Store): TodoItem[] =>
  state.todoList.filter((todo: TodoItem): boolean => !todo.done);

export const getDoneList = (state: Store): TodoItem[] =>
  state.todoList.filter((todo: TodoItem): boolean => todo.done);

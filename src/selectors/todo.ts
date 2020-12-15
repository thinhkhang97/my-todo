import {Store, TodoItem} from 'types/states';

export const getListTodo = (state: Store): TodoItem[] => state.todoList;

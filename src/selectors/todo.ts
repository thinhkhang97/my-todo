import {Store, TodoItem, TodoPriority} from 'types/states';

const priorityMapValue = {
  high: 3,
  medium: 2,
  low: 1,
};

function sortTodoListByPriority(todoList: TodoItem[]): TodoItem[] {
  return todoList.sort((a: TodoItem, b: TodoItem): number => {
    return priorityMapValue[b.priority] - priorityMapValue[a.priority];
  });
}

export const getListTodo = (state: Store): TodoItem[] =>
  sortTodoListByPriority(
    state.todoList.filter((todo: TodoItem): boolean => !todo.done),
  );

export const getDoneList = (state: Store): TodoItem[] =>
  sortTodoListByPriority(
    state.todoList.filter((todo: TodoItem): boolean => todo.done),
  );

export type TodoPriority = 'high' | 'medium' | 'low';

export interface TodoItem {
  id: number;

  title: string;

  done: boolean;

  priority: TodoPriority;

  dueTo: Date;

  createdDate: Date;
}

export interface TodoList {
  [key: string]: TodoItem;
}

export interface Store {
  todoList: TodoList;
}

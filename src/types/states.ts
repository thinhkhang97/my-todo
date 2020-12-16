export type TodoPriority = 'high' | 'medium' | 'low';

export interface TodoItem {
  id: number;

  title: string;

  done: boolean;

  priority: TodoPriority;

  dueTo: Date;

  createdDate: Date;
}

export interface Store {
  todoList: TodoItem[];
}

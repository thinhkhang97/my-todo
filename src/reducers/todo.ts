import {TodoAction} from 'actions/todo';
import {TodoItem, TodoPriority} from 'types/states';

const defaultState: TodoItem[] = [
  createNewTodo(0, 'Item 0'),
  createNewTodo(1, 'Item 1'),
  createNewTodo(2, 'Item 2'),
  createNewTodo(3, 'Item 3'),
  createNewTodo(4, 'Item 4'),
];

let id = 0;

function createNewTodo(
  id: number,
  title: string,
  dueTo: Date = new Date(),
  done: boolean = false,
  priority: TodoPriority = 'medium',
): TodoItem {
  return {id, title, done, priority, dueTo, createdDate: new Date()};
}

export function TodoReducer(
  state: TodoItem[] = defaultState,
  action: TodoAction,
): TodoItem[] {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      return [...state, createNewTodo(id, action.payload.title)];
    default:
      return state;
  }
}

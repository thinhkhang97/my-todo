import {TodoAction} from 'actions/todo';
import {TodoItem, TodoPriority} from 'types/states';

const defaultState: TodoItem[] = [];

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

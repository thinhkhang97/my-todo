import {TodoAction} from 'actions/todo';
import {TodoItem, TodoList, TodoPriority} from 'types';

const defaultState = {};

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
  state: TodoList = defaultState,
  action: TodoAction,
): TodoList {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      return {
        ...state,
        [id]: createNewTodo(id, action.payload.title),
      };
    default:
      return state;
  }
}

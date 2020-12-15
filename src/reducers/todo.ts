import {TodoAction} from 'actions/todo';
import {TodoItem, TodoPriority} from 'types/states';

const defaultState: TodoItem[] = [];

function createNewTodo(
  id: number,
  title: string,
  dueTo: Date = new Date(),
  priority: TodoPriority = 'medium',
  done: boolean = false,
): TodoItem {
  return {id, title, done, priority, dueTo, createdDate: new Date()};
}

export function TodoReducer(
  state: TodoItem[] = defaultState,
  action: TodoAction,
): TodoItem[] {
  switch (action.type) {
    case 'ADD_TODO':
      const lastId = state[state.length - 1] ? state[state.length - 1].id : 0;
      return [
        ...state,
        createNewTodo(
          lastId + 1,
          action.payload.title,
          action.payload.dueTo,
          action.payload.priority,
        ),
      ];
    default:
      return state;
  }
}

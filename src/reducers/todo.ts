import {TodoAction, AddTodo, DoneTodoItem} from 'actions/todo';
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
      const addTodoAction = action as AddTodo;
      const lastId = state[state.length - 1] ? state[state.length - 1].id : 0;
      return [
        ...state,
        createNewTodo(
          lastId + 1,
          addTodoAction.payload.title,
          addTodoAction.payload.dueTo,
          addTodoAction.payload.priority,
        ),
      ];
    case 'DONE_TODO':
      const doneAction = action as DoneTodoItem;
      const index = state.findIndex(
        (todo: TodoItem): boolean => todo.id === doneAction.payload.id,
      );
      if (index < 0) {
        return state;
      }
      state[index].done = true;
      return [...state];
    default:
      return state;
  }
}

import {
  TodoAction,
  AddTodo,
  DoneTodoItem,
  DeleteTodoItem,
  RestoreTodoItem,
  UpdateTodoItem,
} from 'actions/todo';
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
    case 'DELETE_TODO':
      const deleteAction = action as DeleteTodoItem;
      return state.filter(
        (todo: TodoItem): boolean => todo.id !== deleteAction.payload.id,
      );
    case 'RESTORE_TODO':
      const restoreAction = action as RestoreTodoItem;
      const todoIndex = state.findIndex(
        (todo: TodoItem): boolean => todo.id === restoreAction.payload.id,
      );
      if (todoIndex < 0) {
        return state;
      }
      state[todoIndex].done = false;
      return [...state];
    case 'UPDATE_TODO':
      const updateAction = action as UpdateTodoItem;
      const updateTodoIndex = state.findIndex(
        (todo: TodoItem): boolean => todo.id === updateAction.payload.id,
      );
      if (updateTodoIndex < 0) {
        return state;
      }
      state[updateTodoIndex].title = updateAction.payload.title;
      state[updateTodoIndex].priority = updateAction.payload.priority;
      state[updateTodoIndex].dueTo = updateAction.payload.dueTo;
      return [...state];
    default:
      return state;
  }
}

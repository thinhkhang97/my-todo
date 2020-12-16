import {connect} from 'react-redux';
import {Store, TodoItem} from 'types/states';
import {TodoList} from 'components/todo-list';

const mapStateToProps = (state: Store): {data: TodoItem[]} => {
  const {todoList} = state;
  const incompletedTasks = todoList.filter(
    (todo: TodoItem): boolean => !todo.done,
  );
  return {
    data: incompletedTasks,
  };
};

export default connect(mapStateToProps)(TodoList);

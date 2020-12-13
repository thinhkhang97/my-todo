import {connect} from 'react-redux';
import {Store, TodoItem} from 'types/states';
import {TodoList} from 'components/todo-list';

const mapStateToProps = (state: Store): {data: TodoItem[]} => {
  const {todoList} = state;
  return {
    data: todoList,
  };
};

export default connect(mapStateToProps)(TodoList);

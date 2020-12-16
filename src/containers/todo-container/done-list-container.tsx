import {connect} from 'react-redux';
import {Store, TodoItem} from 'types/states';
import {DoneList} from 'components/done-list';

const mapStateToProps = (state: Store): {data: TodoItem[]} => {
  const {todoList} = state;
  return {
    data: todoList,
  };
};

export default connect(mapStateToProps)(DoneList);

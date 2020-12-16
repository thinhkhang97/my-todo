import {connect, ConnectedProps} from 'react-redux';
import {
  CreateTodoModal,
  CreateTodoModalProps,
} from 'components/create-todo-modal';
import {addTodo} from 'actions/todo';

const connector = connect(null, {onCreate: addTodo});

type ConnectorType = ConnectedProps<typeof connector>;

type Props = {} & CreateTodoModalProps & ConnectorType;

export default connector(CreateTodoModal);

import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {Store, TodoList} from 'types';

const mapStateToProps = (state: Store): {todoList: TodoList} => {
  const {todoList} = state;
  return {
    todoList,
  };
};

const connector = connect(mapStateToProps);

type typeOfConnector = ConnectedProps<typeof connector>;

type Props = {} & typeOfConnector;

function TodoContainer(props: Props): ReactElement {
  const {todoList} = props;
  console.log(todoList);
  return (
    <View>
      <Text>Container</Text>
    </View>
  );
}

export default connector(TodoContainer);

import React, {ReactElement, useCallback, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {PlusIcon} from 'components/icons';
import {Colors} from 'assets/color';
import {CreateTodoModal} from 'components/create-todo-modal';
import {TodoList} from 'components/todo-list';
import {useDispatch, useSelector} from 'react-redux';
import {getListTodo} from 'selectors/todo';
import {addTodo} from 'actions/todo';
import {TodoPriority} from 'types/states';

interface Props {}
export function TodoTab(props: Props): ReactElement {
  const [visibleCreateModal, setCreateVisibleCreateModal] = useState(false);
  const todoList = useSelector(getListTodo);
  const dispatch = useDispatch();
  const onPressCreate = useCallback((): void => {
    setCreateVisibleCreateModal(true);
  }, []);
  const onCloseCreateModal = useCallback((): void => {
    setCreateVisibleCreateModal(false);
  }, []);
  const onCreateTodo = useCallback(
    ({
      title,
      priority,
      dueTo,
    }: {
      title: string;
      priority: TodoPriority;
      dueTo: Date;
    }): void => {
      dispatch(addTodo(title, priority, dueTo));
      setCreateVisibleCreateModal(false);
    },
    [],
  );
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TodoList data={todoList} />
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity
            style={styles.circleContainer}
            onPress={onPressCreate}>
            <PlusIcon color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <CreateTodoModal
        visible={visibleCreateModal}
        onClose={onCloseCreateModal}
        onCreate={onCreateTodo}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: Colors.blue1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

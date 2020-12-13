import React, {ReactElement, useCallback, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoList} from 'containers/todo-container';
import {PlusIcon} from 'components/icons';
import {Colors} from 'assets/color';
import {CreateTodoModal} from 'containers/create-todo';

interface Props {}
export function TodoTab(props: Props): ReactElement {
  const [visibleCreateModal, setCreateVisibleCreateModal] = useState(false);
  const onPressCreate = useCallback((): void => {
    setCreateVisibleCreateModal(true);
  }, []);
  const onCloseCreateModal = useCallback((): void => {
    setCreateVisibleCreateModal(false);
  }, []);
  return (
    <View style={styles.container}>
      <TodoList />
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.circleContainer}
          onPress={onPressCreate}>
          <PlusIcon color={Colors.white} />
        </TouchableOpacity>
      </View>
      <CreateTodoModal
        visible={visibleCreateModal}
        onClose={onCloseCreateModal}
      />
    </View>
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

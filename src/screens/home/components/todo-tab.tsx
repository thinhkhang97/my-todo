import React, {ReactElement} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoList} from 'containers/todo-container';
import {PlusIcon} from 'components/icons';
import {Colors} from 'assets/color';

interface Props {}
export function TodoTab(props: Props): ReactElement {
  return (
    <View style={styles.container}>
      <TodoList />
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.circleContainer}>
          <PlusIcon color={Colors.white} />
        </TouchableOpacity>
      </View>
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

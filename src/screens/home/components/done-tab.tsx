import React, {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import {DoneList} from 'containers/todo-container';

interface Props {}
export function DoneTab(props: Props): ReactElement {
  return (
    <View style={styles.container}>
      <DoneList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, {ReactElement, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'assets/color';
import {useDispatch, useSelector} from 'react-redux';
import {getDoneList} from 'selectors/todo';
import {DoneList} from 'components/done-list';
import {deleteTodo, restoreTodo} from 'actions/todo';

interface Props {}
export function DoneTab(props: Props): ReactElement {
  const doneList = useSelector(getDoneList);
  const dispatch = useDispatch();
  const onDelete = useCallback((id: number) => {
    dispatch(deleteTodo(id));
  }, []);
  const onRestore = useCallback((id: number) => {
    dispatch(restoreTodo(id));
  }, []);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <DoneList data={doneList} onDelete={onDelete} onRestore={onRestore} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

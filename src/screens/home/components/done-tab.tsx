import React, {ReactElement, useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from 'assets/color';
import {useSelector} from 'react-redux';
import {getDoneList} from 'selectors/todo';
import {DoneList} from 'components/done-list';

interface Props {}
export function DoneTab(props: Props): ReactElement {
  const doneList = useSelector(getDoneList);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <DoneList data={doneList} />
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

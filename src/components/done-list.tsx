import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement, useCallback} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';
import {NoSearchResult} from './svgs';
import {TodoItem} from './todo-item';

interface Props {
  data: ITodoItem[];
}

export const DoneList = (props: Props): ReactElement => {
  const {data} = props;
  const renderItem = useCallback(
    ({item}: {item: ITodoItem}): ReactElement => <TodoItem data={item} />,
    [],
  );
  const emptyComponent = (
    <View style={styles.emptyContainer}>
      <NoSearchResult />
      <Text style={[CharacterStyles.text, {marginTop: 16}, styles.emptyText]}>
        You have nothing to do
      </Text>
      <Text style={[CharacterStyles.text, styles.emptyText]}>
        Create new things for a challenge day
      </Text>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.container}
      ListEmptyComponent={emptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    marginTop: 64,
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.gray2,
  },
});

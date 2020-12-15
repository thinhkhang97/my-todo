import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement, useCallback} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';
import {DocumentEmpty} from './svgs';
import {TodoItem} from './todo-item';

interface Props {
  data: ITodoItem[];
  onDone?: (id: number) => void;
}

export const TodoList = (props: Props): ReactElement => {
  const {data, onDone} = props;
  const renderItem = useCallback(
    ({item}: {item: ITodoItem}): ReactElement => (
      <TodoItem
        key={`item.id`}
        data={item}
        onDone={(id: number): void => onDone && onDone(id)}
      />
    ),
    [data],
  );
  const emptyComponent = (
    <View style={styles.emptyContainer}>
      <DocumentEmpty />
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
      extraData={data}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emptyContainer: {
    marginTop: 64,
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.gray2,
  },
});

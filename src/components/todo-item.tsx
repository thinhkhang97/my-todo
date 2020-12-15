import React, {ReactElement, useState} from 'react';

import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';
import {HIT_SLOP} from 'utils/system';
import {getDateTimeString} from 'utils/time';
import {EllipsisVIcon} from './icons';
import {PriorityBadge} from './priority-badge';
import {TodoItemModal} from './todo-item-modal';

interface Props {
  data: ITodoItem;
  onDone?: (id: number) => void;
}

export const TodoItem = (props: Props): ReactElement => {
  const {data, onDone} = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <TouchableOpacity onPress={(): void => onDone && onDone(data.id)}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.rightTopContainer}>
              <Text
                style={[
                  CharacterStyles.title,
                  styles.title,
                  data.done && {color: Colors.gray2},
                ]}>
                {data.title}
              </Text>
              <PriorityBadge priority={data.priority} />
            </View>
            <TouchableOpacity
              hitSlop={HIT_SLOP}
              onPress={(): void => setShowModal(true)}>
              <EllipsisVIcon size={10} color={Colors.gray3} />
            </TouchableOpacity>
          </View>
          <View style={styles.footContainer}>
            <Text
              style={[
                CharacterStyles.smallItalicText,
                styles.dueTo,
              ]}>{`Due to: ${getDateTimeString(data.dueTo)}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TodoItemModal
        visible={showModal}
        onClose={(): void => setShowModal(false)}
        done={data.done}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footContainer: {},
  rightTopContainer: {
    flexDirection: 'row',
  },
  title: {
    marginRight: 4,
    color: Colors.gray3,
  },
  dueTo: {
    color: Colors.green1,
  },
});

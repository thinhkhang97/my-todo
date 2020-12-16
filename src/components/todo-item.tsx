import React, {ReactElement, useCallback, useMemo, useState} from 'react';

import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';
import {HIT_SLOP, WIDTH} from 'utils/system';
import {EllipsisVIcon} from './icons';
import {PriorityBadge} from './priority-badge';
import {TodoItemModal} from './todo-item-modal';
import {IndicatorTime} from './indicator-time';

interface Props {
  data: ITodoItem;
  onDone?: (id: number) => void;
  onDelete?: (id: number) => void;
  onRestore?: (id: number) => void;
  onEdit?: (data: ITodoItem) => void;
}

export const TodoItem = (props: Props): ReactElement => {
  const {data, onDone, onDelete, onRestore, onEdit} = props;
  const [showModal, setShowModal] = useState(false);
  const translateX = new Animated.Value(0);
  const onDoneItem = () => {
    Animated.timing(translateX, {
      toValue: WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start((): void => onDone && onDone(data.id));
  };
  const onRestoreItem = () => {
    Animated.timing(translateX, {
      toValue: -WIDTH,
      duration: 300,
      useNativeDriver: false,
    }).start((): void => {
      setShowModal(false);
      onRestore && onRestore(data.id);
    });
  };
  return (
    <React.Fragment>
      <TouchableOpacity disabled={data.done} onPress={onDoneItem}>
        <Animated.View style={[styles.container, {transform: [{translateX}]}]}>
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
            <IndicatorTime deadline={data.dueTo} />
          </View>
        </Animated.View>
      </TouchableOpacity>
      <TodoItemModal
        visible={showModal}
        onClose={(): void => setShowModal(false)}
        onDelete={(): void => {
          setShowModal(false);
          onDelete && onDelete(data.id);
        }}
        done={data.done}
        onRestore={onRestoreItem}
        onEdit={(): void => {
          setShowModal(false);
          onEdit && onEdit(data);
        }}
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

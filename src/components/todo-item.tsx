import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';
import {HIT_SLOP} from 'utils/system';
import {EllipsisVIcon} from './icons';
import {PriorityBadge} from './priority-badge';

interface Props {
  data: ITodoItem;
}

export const TodoItem = (props: Props): ReactElement => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rightTopContainer}>
          <Text style={[CharacterStyles.title, styles.title]}>
            {data.title}
          </Text>
          <PriorityBadge priority={data.priority} />
        </View>
        <TouchableOpacity hitSlop={HIT_SLOP}>
          <EllipsisVIcon size={10} color={Colors.gray3} />
        </TouchableOpacity>
      </View>
      <View style={styles.footContainer}>
        <Text
          style={[
            CharacterStyles.smallItalicText,
            styles.dueTo,
          ]}>{`Due to: 3:14 10/12/2020`}</Text>
      </View>
    </View>
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

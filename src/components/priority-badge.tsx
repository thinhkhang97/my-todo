import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import {Fonts} from 'assets/fonts';
import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PRIORITY_STYLE} from 'utils/system';

interface Props {
  priority: 'high' | 'medium' | 'low';
}

export function PriorityBadge(props: Props): ReactElement {
  const {priority} = props;
  const priorityData = PRIORITY_STYLE[priority];
  if (!priorityData) {
    return <React.Fragment />;
  }
  const {title, style} = priorityData;
  return (
    <View style={[styles.container, {backgroundColor: style.backgroundColor}]}>
      <Text style={[styles.title, {color: style.color}]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 8,
  },
});

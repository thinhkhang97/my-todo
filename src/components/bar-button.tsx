import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import {Fonts} from 'assets/fonts';
import React, {ReactElement} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableProps} from 'react-native-svg';

interface Props extends TouchableProps {
  title: string;
}

export const BarButton = (props: Props): ReactElement => {
  const {title} = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.disabled && {backgroundColor: Colors.gray1},
      ]}
      {...props}>
      <Text
        style={[
          CharacterStyles.text,
          styles.title,
          props.disabled && {color: Colors.gray2},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue1,
    paddingVertical: 4,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.MontserratMedium,
  },
});

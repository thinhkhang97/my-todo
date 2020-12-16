import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface Props {
  title: string;
}

export function Header(props: Props): ReactElement {
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text style={[CharacterStyles.screenTitle, styles.title]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue1,
    padding: 16,
  },
  title: {
    color: Colors.white,
  },
});

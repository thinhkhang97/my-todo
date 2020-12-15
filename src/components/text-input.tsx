import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement} from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

interface Props extends TextInputProps {}

export const TextInput = (props: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={[CharacterStyles.text, styles.textInput, props.style]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: Colors.gray2,
    borderWidth: 1,
  },
  textInput: {
    includeFontPadding: false,
    paddingVertical: 0,
  },
});

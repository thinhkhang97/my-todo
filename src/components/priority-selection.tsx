import React, {ReactElement, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {TodoPriority} from 'types/states';
import {PRIORITY_STYLE} from 'utils/system';
import {CharacterStyles} from 'assets/character-styles';

interface Props {
  selectedPriority: TodoPriority;
  onChange?: (priority: TodoPriority) => void;
}

export const PrioritySelection = (props: Props): ReactElement => {
  const {onChange, selectedPriority} = props;
  const onChangePriority = useCallback((priority: TodoPriority): void => {
    onChange && onChange(priority);
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(PRIORITY_STYLE).map(
        (key: string): ReactElement => {
          const priority = PRIORITY_STYLE[key];
          return (
            <TouchableWithoutFeedback
              key={key}
              onPress={(): void => onChangePriority(key as TodoPriority)}>
              <View style={styles.itemContainer}>
                <View
                  style={[
                    styles.circle,
                    {borderColor: priority.style.color},
                    key === selectedPriority && {
                      backgroundColor: priority.style.color,
                    },
                  ]}
                />
                <Text
                  style={[
                    CharacterStyles.bigTitle,
                    {color: priority.style.color},
                    styles.title,
                  ]}>
                  {priority.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 8,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
  title: {
    marginLeft: 8,
    textTransform: 'capitalize',
  },
});

import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {TodoItem as ITodoItem} from 'types/states';

interface Props {
  data: ITodoItem;
}

export const TodoItem = (props: Props): ReactElement => {
  const {data} = props;
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

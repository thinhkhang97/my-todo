import React, {ReactElement} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {addTodo} from 'actions/todo';
import {Todo} from 'containers';

const mapDispatchToProps = {
  addTodo,
};

const connector = connect(null, mapDispatchToProps);

type Props = {} & ConnectedProps<typeof connector>;

let i = 1;

const Home = (props: Props): ReactElement => {
  const {addTodo} = props;
  const onAdd = () => {
    addTodo(`Item ${i}`);
    i++;
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'Montserrat'}}>Hello world</Text>
        <Todo />
        <Button onPress={onAdd} title="Add"></Button>
      </View>
    </SafeAreaView>
  );
};

export default connector(Home);

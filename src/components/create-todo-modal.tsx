import {Colors} from 'assets/color';
import React, {ReactElement} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal, {SlideAnimation} from 'react-native-modals';
import {HEIGHT, WIDTH} from 'utils/system';

export interface CreateTodoModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate?: (title: string) => void;
}

export const CreateTodoModal = (props: CreateTodoModalProps): ReactElement => {
  const {visible, onCreate, onClose} = props;
  return (
    <Modal
      visible={visible}
      modalAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
        })
      }
      style={styles.container}
      width={WIDTH}
      height={HEIGHT}
      onHardwareBackPress={() => {
        onClose && onClose();
        return true;
      }}>
      <SafeAreaView style={{backgroundColor: Colors.blue1}}>
        <TouchableOpacity
          onPress={(): void => {
            onCreate && onCreate('New item');
            onClose();
          }}>
          <View style={{backgroundColor: 'red', padding: 16}}>
            <Text>Create</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    margin: 0,
    padding: 0,
  },
});

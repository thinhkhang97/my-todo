import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {TodoPriority} from 'types/states';
import {HEIGHT, WIDTH} from 'utils/system';
import {BarButton} from './bar-button';
import {TimesIcon} from './icons';
import {PrioritySelection} from './priority-selection';
import {TextInput} from './text-input';

export interface CreateTodoModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate?: (title: string) => void;
}

export const CreateTodoModal = (props: CreateTodoModalProps): ReactElement => {
  const {visible, onCreate, onClose} = props;
  const [task, setTaskText] = useState('');
  const [priority, setPriority] = useState('medium' as TodoPriority);
  return (
    <Modal isVisible={visible} style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <TimesIcon color={Colors.blue1} size={24} />
          </TouchableOpacity>
          <Text style={[CharacterStyles.screenTitle, styles.modalTitle]}>
            Todo
          </Text>
          <View style={{width: 24}} />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[CharacterStyles.sectionTitle, styles.sectionTitle]}>
            Things to do
          </Text>
          <TextInput
            placeholder="Your task"
            onChangeText={setTaskText}
            autoFocus
          />
          <Text
            style={[
              CharacterStyles.sectionTitle,
              styles.sectionTitle,
              {marginTop: 24},
            ]}>
            Priority
          </Text>
          <PrioritySelection
            selectedPriority={priority}
            onChange={setPriority}
          />
        </View>
        <View style={styles.footerContainer}>
          <BarButton
            title="Create todo"
            onPress={(): void => onCreate && onCreate(task)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: WIDTH,
  },
  contentContainer: {
    backgroundColor: Colors.white,
    height: HEIGHT,
    ...Platform.select({
      android: {
        paddingTop: 16,
      },
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  footerContainer: {
    paddingHorizontal: 16,
    minHeight: 48,
  },
  modalTitle: {
    color: Colors.blue1,
  },
  sectionTitle: {
    marginVertical: 8,
    color: Colors.gray3,
  },
  closeIcon: {},
});

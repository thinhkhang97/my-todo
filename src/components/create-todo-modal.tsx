import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement, useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {TodoPriority} from 'types/states';
import {WIDTH} from 'utils/system';
import {BarButton} from './bar-button';
import {TimesIcon} from './icons';
import {PrioritySelection} from './priority-selection';
import {TextInput} from './text-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getDateTimeString} from 'utils/time';

export interface CreateTodoModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate?: (data: {
    title: string;
    priority: TodoPriority;
    dueTo: Date;
  }) => void;
}

export const CreateTodoModal = (props: CreateTodoModalProps): ReactElement => {
  const {visible, onCreate, onClose} = props;
  const [task, setTaskText] = useState('');
  const [priority, setPriority] = useState('medium' as TodoPriority);
  const [dueTo, setDueTo] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleConfirm = useCallback((date: Date) => {
    setShowDatePicker(false);
    setDueTo(date);
  }, []);
  const handleCancel = useCallback(() => setShowDatePicker(false), []);
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
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.sectionContainer}>
            <Text style={[CharacterStyles.sectionTitle, styles.sectionTitle]}>
              Things to do
            </Text>
            <TextInput
              placeholder="Your task"
              onChangeText={setTaskText}
              autoFocus
              maxLength={120}
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
            <Text
              style={[
                CharacterStyles.sectionTitle,
                styles.sectionTitle,
                {marginTop: 24},
              ]}>
              Due to
            </Text>
            <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
              <View style={styles.datePickerContainer}>
                <Text style={[CharacterStyles.text, styles.dueToText]}>
                  {getDateTimeString(dueTo)}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.footerContainer}>
            <BarButton
              title="Create todo"
              onPress={(): void =>
                onCreate && onCreate({title: task, priority, dueTo})
              }
            />
          </View>
        </ScrollView>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="datetime"
          minimumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
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
    flex: 1,
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
    marginTop: 32,
  },
  modalTitle: {
    color: Colors.blue1,
  },
  sectionTitle: {
    marginVertical: 8,
    color: Colors.gray3,
  },
  closeIcon: {},
  datePickerContainer: {
    flexDirection: 'row',
  },
  dueToText: {
    borderRadius: 12,
    borderColor: Colors.gray2,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

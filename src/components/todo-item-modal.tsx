import {CharacterStyles} from 'assets/character-styles';
import {Colors} from 'assets/color';
import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {WIDTH} from 'utils/system';
import {PenIcon, TrashIcon} from './icons';

interface Props {
  visible: boolean;
  onClose: () => void;
  done?: boolean;
}

export const TodoItemModal = (props: Props): ReactElement => {
  const {visible, onClose, done} = props;
  return (
    <Modal
      isVisible={visible}
      style={styles.container}
      onBackdropPress={onClose}>
      <SafeAreaView style={styles.contentContainer}>
        <TouchableOpacity>
          {!done ? (
            <View style={[styles.itemContainer, {paddingTop: 24}]}>
              <PenIcon />
              <View style={styles.itemContentContainer}>
                <Text style={[CharacterStyles.bigTitle]}>Edit</Text>
                <Text style={[CharacterStyles.smallText]}>
                  Update todo, priority and due to time
                </Text>
              </View>
            </View>
          ) : (
            <View style={[styles.itemContainer, {paddingTop: 24}]}>
              <PenIcon />
              <View style={styles.itemContentContainer}>
                <Text style={[CharacterStyles.bigTitle]}>Restore</Text>
                <Text style={[CharacterStyles.smallText]}>
                  Mark state of the task to uncompleted
                </Text>
              </View>
            </View>
          )}
          <View style={styles.itemContainer}>
            <TrashIcon color={Colors.red2} />
            <View style={styles.itemContentContainer}>
              <Text style={[CharacterStyles.bigTitle, styles.deleteText]}>
                Delete
              </Text>
              <Text style={[CharacterStyles.smallText, styles.deleteText]}>
                Delete the todo and you will never get it back
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: WIDTH,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
  },
  closeIcon: {},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  itemContentContainer: {
    marginLeft: 16,
  },
  deleteText: {
    color: Colors.red2,
  },
});

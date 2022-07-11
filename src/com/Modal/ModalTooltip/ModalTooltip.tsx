import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import styles from './styles';

interface Props {
  testID?: string;
  visible: boolean;
  children: React.ReactNode;
  close: () => void;
}

function Tooltip({ testID, visible, close, children }: Props): JSX.Element {
  return (
    <Modal
      isVisible={visible}
      style={styles.view}
      swipeDirection="down"
      onSwipeComplete={close}
      testID={testID || 'modalTooltip'}
    >
      <View style={[styles.modalContainer, { height: 'auto' }]}>
        <View style={styles.actionContainer} testID="actionContainer">
          <TouchableOpacity
            style={styles.touchable}
            onPress={close}
            testID="closeButton"
          >
            <Ionicons
              name="ios-close"
              size={24}
              color="grey"
              style={styles.close}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer} testID="bodyContainer">
          {children}
        </View>
      </View>
    </Modal>
  );
}

export default Tooltip;

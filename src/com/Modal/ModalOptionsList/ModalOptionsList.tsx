import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

export interface Option {
  title: string;
  onPress: () => void;
}

interface Props {
  testID?: string;
  visible: boolean;
  options: Array<Option>;
  close: () => void;
}

function ModalOptionsList({
  testID,
  visible,
  options,
  close,
}: Props): JSX.Element {
  const renderOptions = () => {
    return options.map(({ title, onPress }: Option, index) => {
      let buttonStyle;

      if (options.length === 1) {
        buttonStyle = [
          styles.stackedButton,
          styles.stackedButtonTop,
          styles.stackedButtonBottom,
        ];
      } else {
        switch (index) {
          case 0:
            buttonStyle = [styles.stackedButton, styles.stackedButtonTop];
            break;
          case options.length - 1:
            buttonStyle = [styles.stackedButton, styles.stackedButtonBottom];
            break;
          default:
            buttonStyle = styles.stackedButton;
        }
      }

      return (
        <TouchableWithoutFeedback onPress={onPress} key={title}>
          <View style={buttonStyle}>
            <Text style={styles.buttonTitle}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.view}
      swipeDirection="down"
      onSwipeComplete={close}
      testID={testID || 'modalTooltip'}
    >
      <View style={styles.modalContainer}>
        <View style={styles.bodyContainer} testID="bodyContainer">
          <View style={styles.optionsContainer}>{renderOptions()}</View>

          <TouchableWithoutFeedback onPress={close} testID="closeButton">
            <View style={styles.close}>
              <Text style={styles.buttonTitle}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
}

export default ModalOptionsList;

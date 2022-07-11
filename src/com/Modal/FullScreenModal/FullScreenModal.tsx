import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import i18n from 'i18n-js';

import styles from './styles';

export const modalAnimTiming = 450;
const backdropAnimTiming = modalAnimTiming + 100;

export interface ModalRef {
  isModalVisible: boolean;
  open: () => void;
  close: () => void;
}

interface Props {
  title?: string;
  children: React.ReactNode;
  isVisible?: boolean;
  submittable?: boolean;
  renderDoneButton?: boolean;
  renderCloseButton?: boolean;
  testID?: string;
  onSend?(): void;
  onShow?(): void;
  onValidate?(): void;
  onClose?(): void;
}

const FullScreenModal = forwardRef<ModalRef, Props>(
  (
    {
      title,
      children,
      isVisible = false,
      submittable = false,
      renderDoneButton = true,
      renderCloseButton = true,
      testID = 'fullScreenModal',
      onSend,
      onShow,
      onValidate,
      onClose,
    },
    ref,
  ) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(isVisible);

    // Expose `open()` method to perent components
    useImperativeHandle(
      ref,
      () => ({
        isModalVisible,
        open() {
          setModalVisible(true);
        },
        close() {
          setModalVisible(false);
        },
      }),
      [isModalVisible],
    );

    const close = () => {
      if (onClose) {
        onClose();
      } else {
        setModalVisible(false);
      }
    };

    const onPressDone = () => {
      if (submittable && onSend) {
        onSend();
        close();
      } else if (onValidate) {
        onValidate();
      } else {
        close();
      }
    };

    return (
      <View>
        <Modal
          testID={testID}
          isVisible={isModalVisible}
          onSwipeComplete={close}
          onModalShow={onShow}
          animationInTiming={modalAnimTiming}
          animationOutTiming={modalAnimTiming}
          backdropTransitionInTiming={backdropAnimTiming}
          backdropTransitionOutTiming={backdropAnimTiming}
          style={styles.modal}
        >
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              {renderCloseButton && (
                <View style={styles.headerCloseContainer}>
                  <TouchableOpacity onPress={close}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.headerTitleContainer} testID="modalTitle">
                <Text style={styles.headerTitleText}>{title}</Text>
              </View>

              <View style={styles.headerActionContainer}>
                {renderDoneButton && (
                  <TouchableOpacity onPress={onPressDone}>
                    <Text style={styles.headerActionText}>
                      {i18n.t('common.done')}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={styles.mainContainer}>{children}</View>
          </View>
        </Modal>
      </View>
    );
  },
);

export default FullScreenModal;

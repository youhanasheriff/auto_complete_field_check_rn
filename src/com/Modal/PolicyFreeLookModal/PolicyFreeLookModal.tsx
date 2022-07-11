/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text, Image } from 'react-native';
import i18n from 'i18n-js';
import ModalTooltip from '../ModalTooltip/ModalTooltip';
import Theme from '../../../constants/Theme';
import ButtonSpinner from '../../ButtonSpinner/ButtonSpinner';
import { CommonContentfulType } from '../../../types/product';
import styles from './styles';

interface Props {
  freeLookPeriodDetails: CommonContentfulType;
  visible: boolean;
  onClose: () => void;
}

export default function PolicyFreeLookModal({
  freeLookPeriodDetails,
  visible = false,
  onClose,
}: Props): JSX.Element {
  return (
    <ModalTooltip
      testID="freeLookTooltipModal"
      visible={visible}
      close={onClose}
    >
      <View style={Theme.modalContainer} testID="freeLookPeriodContainer">
        <View style={styles.freeLookModalContentContainer}>
          <View style={styles.freeLookPeriodImageContainer}>
            <Image
              style={styles.freeLookPeriodImage}
              source={{ uri: freeLookPeriodDetails.imageUrl }}
            />
          </View>
          <Text style={styles.sectionTitle}>{freeLookPeriodDetails.title}</Text>
          <Text style={styles.freeLookModalDescription}>
            {freeLookPeriodDetails.description}
          </Text>
        </View>
        <ButtonSpinner
          title={i18n.t('common.ok')}
          onPress={onClose}
          testID="okButton"
        />
      </View>
    </ModalTooltip>
  );
}

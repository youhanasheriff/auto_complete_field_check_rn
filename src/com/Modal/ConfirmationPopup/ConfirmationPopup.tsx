/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import ModalTooltip from '../ModalTooltip/ModalTooltip';
import Theme from '../../../constants/Theme';
import ButtonSpinner from '../../ButtonSpinner/ButtonSpinner';

interface Props {
  title: string;
  subtitle: string;
  submitLabel: string;
  cancelLabel: string;
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
  isSubmitting?: boolean;
  image?: JSX.Element;
}

export default function ConfirmationPopup({
  title,
  subtitle,
  submitLabel,
  cancelLabel,
  onSubmit,
  onCancel,
  visible = false,
  isSubmitting = false,
  onClose,
  image,
}: Props): JSX.Element {
  return (
    <ModalTooltip visible={visible} close={onClose} testID="confirmationModal">
      <View style={Theme.modalContainer}>
        <View style={Theme.modalHeader}>
          {image}
          <Text style={Theme.modalTitle}>{title}</Text>
          <Text style={Theme.modalSubtitle}>{subtitle}</Text>
        </View>
        <View>
          <ButtonSpinner
            testID="confirmButton"
            title={submitLabel}
            onPress={onSubmit}
            isLoading={isSubmitting}
          />
          <ButtonSpinner
            testID="cancelButton"
            secondary
            title={cancelLabel}
            onPress={onCancel}
            disabled={isSubmitting}
          />
        </View>
      </View>
    </ModalTooltip>
  );
}

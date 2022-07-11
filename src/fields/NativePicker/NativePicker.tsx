import React, { useState } from 'react';
import {
  TextInputProps,
  View,
  Platform,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import { FormikHandlers, useField } from 'formik';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
// import useReplyOptions from '../../hooks/useReplyOptions';
import LabelWithTooltip from '../Tooltip/LabelWithTooltip';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles, {
  defaultPickerStyle,
  errorPickerStyle,
  disabledPickerStyle,
} from './styles';
import { DropdownOnChangeTooltipText, subLabel } from '../../types/formConfig';
import ModalTooltip from '../../com/Modal/ModalTooltip/ModalTooltip';
import ButtonSpinner from '../../com/ButtonSpinner/ButtonSpinner';

interface itemType {
  label: string;
  value: string;
}

interface Props extends TextInputProps {
  field: {
    name: string;
    value: string;
  };
  items: Array<itemType>;
  form: {
    setFieldValue: (name: string, value: string) => void;
    handleChange: FormikHandlers['handleChange'];
  };
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  subLabel?: subLabel;
  inline?: boolean;
  onClose?: () => void;
  disabled?: boolean;
  tooltip?: string;
  pickerStyle?: PickerStyle;
  onChangeTooltipText?: DropdownOnChangeTooltipText;
}

/* eslint-disable react/jsx-props-no-spreading */
function NativePicker({
  field: { name, value },
  form: { handleChange, setFieldValue },
  items,
  label,
  subLabel,
  onClose = () => null,
  inline,
  tooltip,
  disabled = false,
  labelStyle,
  pickerStyle,
  onChangeTooltipText,
}: Props): JSX.Element {
  // const replyOptions = useReplyOptions(dataSource);
  const [field, meta] = useField(name || '');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getStyles = () => {
    const errorStyle =
      meta.error && meta.touched
        ? errorPickerStyle
        : { ...defaultPickerStyle, ...pickerStyle };
    const pickerDisabledStyle = pickerStyle ? styles.pickerDisabledStyle : {};
    const { inputAndroid, inputIOS } = disabledPickerStyle;
    const disabledStyle = disabled
      ? {
          inputAndroid: { ...inputAndroid, ...pickerDisabledStyle },
          inputIOS: { ...inputIOS, ...pickerDisabledStyle },
        }
      : {};

    return { ...errorStyle, ...disabledStyle };
  };

  const openModal = () => {
    if (onChangeTooltipText) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 300);
    }
  };

  const renderModal = () => {
    if (!onChangeTooltipText) return null;

    return (
      <ModalTooltip visible={isModalOpen} close={() => setIsModalOpen(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{onChangeTooltipText.title}</Text>

          {onChangeTooltipText?.text.map(text => (
            <Text style={styles.modalText} key={text}>
              {text}
            </Text>
          ))}

          <ButtonSpinner
            title={onChangeTooltipText.cta}
            onPress={() => setIsModalOpen(false)}
            testID="okButton"
          />
        </View>
      </ModalTooltip>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {!inline && label && (
        <LabelWithTooltip
          label={label}
          subLabel={subLabel}
          name={name}
          tooltip={tooltip}
          labelStyle={labelStyle}
        />
      )}

      <RNPickerSelect
        value={value}
        touchableWrapperProps={{ testID: `RN_picker_select-${name}` }}
        onValueChange={async (value: string) => {
          setFieldValue(name, value);
          handleChange(name);

          // On IOS while scrolling itself the value will update
          // so we dont want to call the onClose function everytime
          if (Platform.OS !== 'ios') {
            openModal();
            onClose();
          }
        }}
        // The onClose only works on ios
        onClose={() => {
          openModal();
          onClose();
        }}
        items={items}
        style={getStyles()}
        Icon={() => <AntDesign name="caretdown" size={12} color={Colors.d40} />}
        placeholder={{
          label: '',
          value: null,
        }}
        disabled={disabled}
        useNativeAndroidPickerStyle={false}
      />
      <ErrorMessage name={name} />

      {renderModal()}
    </View>
  );
}

NativePicker.defaultProps = {
  inline: false,
};

export default NativePicker;

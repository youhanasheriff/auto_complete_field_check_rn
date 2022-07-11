import React from 'react';
import { TextInputProps, View } from 'react-native';
import { FormikHandlers, useField } from 'formik';
import useReplyOptions, {
  ReplyOption,
  ReplyOptionValue,
} from '../../../hooks/useReplyOptions';
import RadioGroup from './RadioGroup';
import LabelWithTooltip from '../Tooltip/LabelWithTooltip';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './styles';
import { subLabel } from '../../../types/formConfig';

interface Props extends TextInputProps {
  field: {
    name: string;
    value: string;
  };
  dataSource: string;
  form: {
    errors: any;
    touched: any;
    setFieldValue: (name: string, value: ReplyOptionValue) => void;
    handleChange: FormikHandlers['handleChange'];
  };
  label?: string;
  subLabel?: subLabel;
  updateValue: (name: string) => void;
  disabled?: boolean;
  tooltip?: string;
  items: Array<ReplyOption>;
}

/* eslint-disable react/jsx-props-no-spreading */
function RadioButtonGroup({
  field: { name, value },
  form: { errors, touched, handleChange, setFieldValue },
  dataSource,
  label,
  updateValue,
  subLabel,
  tooltip,
  disabled = false,
  items,
}: Props): JSX.Element {
  let nestedArrayError = null;
  const splittedName = name.split('.');
  const replyOptions = useReplyOptions(dataSource);
  const [field, meta] = useField(name);

  if (splittedName.length > 1) {
    if (
      errors[splittedName[0]]?.[splittedName[1]] &&
      touched[splittedName[0]]?.[splittedName[1]]
    ) {
      nestedArrayError =
        errors[splittedName[0]][splittedName[1]][splittedName[2]][
          splittedName[3]
        ];
    }
  }

  const onPressRadioButton = async (newValue: ReplyOptionValue) => {
    // Dont remove the await even though it says to remove.
    // Because the setFieldValue wont set the value immediately
    await setFieldValue(name, newValue);
    handleChange(name);
    if (updateValue) updateValue(name);
  };

  return (
    <View style={styles.container}>
      {label && (
        <LabelWithTooltip
          subLabel={subLabel}
          label={label}
          name={name}
          tooltip={tooltip}
        />
      )}
      <RadioGroup
        radioButtons={(dataSource ? replyOptions : items) || []}
        onPress={onPressRadioButton}
        containerStyle={meta.error || nestedArrayError ? styles.error : {}}
        selectedValue={value}
        disabled={disabled}
      />
      <ErrorMessage name={name} />
    </View>
  );
}

export default RadioButtonGroup;

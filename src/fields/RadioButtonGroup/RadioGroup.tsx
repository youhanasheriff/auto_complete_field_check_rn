/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ReplyOption } from '../../../hooks/useReplyOptions';
import { RadioGroupProps } from '../../../types/radioButtonGroup';
import RadioButton from './RadioButton';

export default function RadioGroup({
  containerStyle,
  layout = 'column',
  onPress,
  radioButtons,
  selectedValue,
  disabled,
}: RadioGroupProps): JSX.Element {
  const [radioButtonsLocal, setRadioButtonsLocal] = useState<ReplyOption[]>([]);

  useEffect(() => {
    setRadioButtonsLocal(radioButtons);
  }, [radioButtons, selectedValue]);

  return (
    <View style={[{ flexDirection: layout }, containerStyle]}>
      {radioButtonsLocal.map(button => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={onPress}
          selected={selectedValue?.toString() === button.value}
          disabled={disabled}
        />
      ))}
    </View>
  );
}

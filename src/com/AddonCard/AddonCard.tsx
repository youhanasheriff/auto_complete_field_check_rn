/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FormikProvider } from 'formik';

import styles, { pickerStyle } from './styles';
import Spacers from '../../constants/Spacers';
import NativePicker from '../../fields/NativePicker/NativePicker';
import RadioButton from '../../fields/RadioButtonGroup/RadioButton';

export interface Addon {
  id: string;
  title: string;
  description: string;
  value:
    | number
    | {
        label: string;
        value: number;
        price: number;
      }[];
  selectedValue?: number;
}

const addonTitleCase = (title: string): string => {
  const textArray = title.split(' ');
  let capitalizedText = '';
  const conjunctions = ['the', 'of', 'a', 'to', 'in'];
  for (let i = 0; i < textArray.length; i++) {
    if (!conjunctions.includes(textArray[i])) {
      capitalizedText += `${
        textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1)
      } `;
    } else {
      capitalizedText += `${textArray[i]} `;
    }
  }
  return capitalizedText.trim();
};

interface RadioButton {
  borderColor?: string;
  color?: string;
  iconColor?: string;
  containerStyle?: Record<string, unknown>;
  disabled?: boolean;
  id?: number | string;
  label?: string;
  labelStyle?: Record<string, unknown>;
  layout?: 'row' | 'column';
  size?: number;
}

interface itemType {
  label: string;
  data: {
    label: string;
    value: string;
  }[];
}

interface Props {
  name: string;
  title: string;
  description: string;
  price: number | undefined;
  dropDownData?: itemType;
  onClick: (value: any[]) => void;
  onClose?: (value: string) => void;
  radioButton?: RadioButton;
  selectedAddon: Addon[];
  addOn: Addon;
  formik: any;
  placeholder?: string;
}

const AddonCard: React.FC<Props> = ({
  name,
  title,
  description,
  price,
  dropDownData,
  onClick,
  onClose,
  radioButton,
  selectedAddon,
  addOn,
  placeholder,
  ...rest
}) => {
  const isSelected =
    selectedAddon.filter(item => item.id === name).length !== 0;
  const onPress = () => {
    const getValue = (value: number | any[]) =>
      Array.isArray(value) ? value[0].value : value;
    if (isSelected) {
      const temp = selectedAddon
        .filter(item => item.id !== name)
        .map(item => ({
          id: item.id,
          value: getValue(item.selectedValue || item.value),
          selectedValue: getValue(item.selectedValue || item.value),
          title: item.title,
        }));
      onClick(temp);
    } else {
      onClick([
        ...selectedAddon,
        {
          id: addOn.id,
          value: addOn.value,
          title: addOn.title,
          selectedValue: getValue(addOn.selectedValue || addOn.value),
        },
      ]);
    }
  };

  const getPrice = (getFormikValue = false) => {
    let formikValue =
      rest.formik.values['packagesAndAddons.packages-and-addons']?.[
        'add-ons'
      ]?.[name] ?? 0;

    const price = Array.isArray(addOn.value)
      ? addOn.value.filter(data => data.value === formikValue)[0]?.price || 0
      : addOn.value;

    if (Array.isArray(addOn.value) && formikValue === 0)
      formikValue = addOn.value[0].value;

    if (getFormikValue) return formikValue;

    if (Array.isArray(addOn.value) && price === 0) {
      return Number.parseInt(`${addOn.value[0].price}`, 10).toString();
    }

    return Number.parseInt(`${price}`, 10).toString();
  };

  return (
    <View
      style={[
        styles.wrapper,
        isSelected ? styles.border : styles.borderUnselected,
      ]}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{addonTitleCase(title)}</Text>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
        {Boolean(dropDownData) && (
          <FormikProvider value={rest.formik}>
            <NativePicker
              {...rest}
              form={{
                setFieldValue: rest.formik.setFieldValue,
                handleChange: rest.formik.handleChange,
              }}
              field={{
                name: `['packagesAndAddons.packages-and-addons'].add-ons.${name}`,
                value:
                  rest.formik.values['packagesAndAddons.packages-and-addons']?.[
                    'add-ons'
                  ]?.[name] || getPrice(true),
              }}
              inline
              labelStyle={{ ...styles.description, ...styles.paddingTop }}
              pickerStyle={pickerStyle}
              label={dropDownData?.label}
              items={dropDownData?.data || []}
              onClose={() => {
                if (onClose) onClose(name);
              }}
              // defaultValue={(() => {
              //   if (Array.isArray(addOn.value)) {
              //     return addOn.value[0].value.toString();
              //   }
              //   return '0';
              // })()}
              disabled={!isSelected}
            />
          </FormikProvider>
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>${price?.toFixed(2) || getPrice()}</Text>
        </View>
      </TouchableOpacity>
      {isSelected && (
        <RadioButton
          {...radioButton}
          containerStyle={{
            ...styles.radioButtonContainer,
            ...radioButton?.containerStyle,
          }}
          size={radioButton?.size || Spacers.spacing04}
          value=""
          onPress={onPress}
          selected={isSelected}
        />
      )}
    </View>
  );
};

export default AddonCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Autocomplete, {
  AutocompleteProps,
} from 'react-native-autocomplete-input';

import { FormikHandlers } from 'formik/dist/types';
import { useField } from 'formik';
import styles from './styles';
import { subLabel } from '../../../types/formConfig';
import LabelWithTooltip from '../Tooltip/LabelWithTooltip';
import Colors from '../../../constants/Colors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Theme from '../../../constants/Theme';

interface Props extends AutocompleteProps<any> {
  data: any[];
  field: {
    name: string;
    value: string;
  };
  form: {
    handleChange: FormikHandlers['handleChange'];
    handleBlur: FormikHandlers['handleBlur'];
    setFieldValue: (name: string, value: string) => void;
  };
  leftIcon?: React.ReactElement<unknown>;
  rightIcon?: React.ReactElement<unknown>;
  label?: string;
  subLabel?: subLabel;
  inline?: boolean;
  disabled?: boolean;
  displayText?: string;
  tooltip?: string;
  placeholder?: string;
  fetchData?: (query: string) => Promise<any>;
  updateValue?: () => void;
}

const screenHeight = Dimensions.get('screen').height;

const debounce = (
  callback?: (query: string) => Promise<any>,
  timeGap = 1000,
) => {
  let timer: NodeJS.Timeout;

  return (query: string) => {
    if (timer) clearTimeout(timer);

    if (!callback) return;

    timer = setTimeout(() => {
      callback(query);
    }, timeGap);
  };
};

const AutoSuggestionField: React.FC<Props> = ({
  field: { name, value },
  form: { handleBlur, handleChange, setFieldValue },
  leftIcon,
  rightIcon,
  inline,
  label,
  tooltip,
  subLabel,
  disabled,
  data,
  placeholder,
  displayText = 'label',
  updateValue,
  fetchData,
  ...rest
}) => {
  const [, meta] = useField(name);
  const componentRef = useRef<View>(null);
  const [renderAtTop, setRenderAtTop] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState<any>(null);

  const [input, setInput] = useState('');

  const fetchDataDebounce = useCallback(debounce(fetchData, 300), []);

  const results = () => {
    if (fetchData) return data;

    return data.filter((item: any) =>
      !input
        ? data
        : item?.[displayText]?.toLowerCase().includes(input.toLowerCase()),
    );
  };

  const setDropdownBoxPosition = () => {
    componentRef.current?.measure((x, y, w, h, pageX, pageY) => {
      if (screenHeight / pageY > 2.5) {
        setRenderAtTop(false);
      } else {
        setRenderAtTop(true);
      }
    });
  };

  return (
    <View ref={componentRef} style={styles.mainContainer}>
      {!inline && label && (
        <LabelWithTooltip
          label={label}
          subLabel={subLabel}
          name={name}
          tooltip={tooltip}
        />
      )}
      <Autocomplete
        {...rest}
        data={input.length ? results() : []}
        autoCapitalize="none"
        autoCorrect={false}
        hideResults={useMemo(
          () => !showSuggestion || !input,
          [input, showSuggestion],
        )}
        inputContainerStyle={[
          styles.inputContainer,
          inline ? Theme.inlineInput : {},
          meta.error && meta.touched ? styles.error : {},
          disabled ? styles.disabledInputContainer : {},
        ]}
        renderTextInput={props => (
          <>
            {leftIcon && (
              <View testID={`icon-${name}`} style={styles.leftIcon}>
                {leftIcon}
              </View>
            )}
            <TextInput
              {...props}
              testID={name}
              style={[
                styles.input,
                { width: rightIcon ? '90%' : '100%' },
                disabled ? styles.disabledInput : {},
              ]}
              placeholderTextColor={Colors.d20}
              underlineColorAndroid="transparent"
              value={value}
              onChangeText={async text => {
                setInput(text);
                setShowSuggestion(true);
                await setFieldValue(name, text);
                handleChange(name);
                await fetchDataDebounce(text);
                setDropdownBoxPosition();
              }}
              onBlur={e => {
                setShowSuggestion(false);
                handleBlur(name)(e);
              }}
              placeholder={placeholder || ''}
              editable={!disabled}
            />
            {rightIcon && <View testID={`icon-${name}`}>{rightIcon}</View>}
          </>
        )}
        focusable
        flatListProps={{
          keyExtractor: item => item.value,
          renderItem: ({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  setInput('');
                  await setFieldValue(name, item[displayText] ?? '');
                  setShowSuggestion(false);
                  if (updateValue) updateValue();
                }}
              >
                <Text style={styles.listItems}>{item[displayText]}</Text>
              </TouchableOpacity>
            );
          },
        }}
        listContainerStyle={[
          styles.listContainer,
          renderAtTop ? { bottom: 60 } : { top: 60 },
        ]}
      />
      <ErrorMessage name={name} />
    </View>
  );
};

export default AutoSuggestionField;

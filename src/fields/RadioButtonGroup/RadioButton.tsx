import React from 'react';
import { PixelRatio, Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RadioButtonProps } from '../../types/radioButtonGroup';
import styles, { radioButtonContainer } from './styles';
import Colors from '../../constants/Colors';
import Spacers from '../../constants/Spacers';

const defaultLabelStyle = {
  color: Colors.d40,
};

export default function RadioButton({
  borderColor = Colors.n40,
  color = Colors.black,
  iconColor = Colors.white,
  containerStyle,
  disabled = false,
  label,
  labelStyle = styles.radioLabelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 20,
  value,
  renderIcon,
}: RadioButtonProps): JSX.Element {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = { flexDirection: 'row' };
  let margin: any = { marginLeft: 10 };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  const handlePress = (): void => {
    if (!disabled && onPress) {
      onPress(value);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        radioButtonContainer,
        orientation,
        styles.borderStyle,
        containerStyle,
        {
          backgroundColor: disabled ? Colors.n30 : null,
        },
      ]}
      testID={`radio-${label}`}
      disabled={disabled}
    >
      <View
        style={[
          styles.radioButtonBorder,
          {
            borderColor: selected ? color : borderColor,
            borderWidth,
            width: sizeFull,
            height: sizeFull,
            borderRadius: sizeHalf,
          },
        ]}
      >
        {selected && (
          <View
            style={{
              backgroundColor: color,
              borderRadius: sizeHalf,
            }}
          >
            <Feather
              name="check"
              size={size - Spacers.space4}
              color={iconColor}
            />
          </View>
        )}
      </View>
      {Boolean(label) && (
        <Text
          style={[margin, labelStyle, { color: disabled ? Colors.n50 : color }]}
        >
          {label}
        </Text>
      )}

      <View style={styles.icon}>{renderIcon && renderIcon()}</View>
    </Pressable>
  );
}

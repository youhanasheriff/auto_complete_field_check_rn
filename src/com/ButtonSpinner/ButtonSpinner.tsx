import React from 'react';
import {
  TouchableWithoutFeedback,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/Colors';
import Theme from '../../constants/Theme';

interface Props {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  onPressIn?: () => void;
  activityIndicatorColor?: string;
  secondary?: boolean;
  testID?: string;
  overrideStyles?: any;
  icon?: JSX.Element;
}

function ButtonSpinner({
  title = 'Hello',
  isLoading = false,
  disabled = false,
  onPress,
  onPressIn = () => null,
  activityIndicatorColor = colors.white,
  secondary = false,
  testID = 'buttonSpinner',
  overrideStyles = {},
  icon,
}: Props): JSX.Element {
  const renderIndicator = () => {
    return <ActivityIndicator color={activityIndicatorColor} />;
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text
          style={[
            secondary ? Theme.secondaryButtonTitle : Theme.primaryButtonTitle,
            disabled ? Theme.disabledButtonTitle : {},
          ]}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPress}
        disabled={isLoading || disabled}
        onPressIn={onPressIn}
        testID={testID}
      >
        <View
          style={[
            {
              ...(secondary ? Theme.secondaryButton : Theme.primaryButton),
              ...overrideStyles,
            },
            disabled ? Theme.disabledButton : {},
          ]}
        >
          {isLoading ? renderIndicator() : renderTitle()}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default ButtonSpinner;

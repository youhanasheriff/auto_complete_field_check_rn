import { ReplyOption, ReplyOptionValue } from '../hooks/useReplyOptions';

export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  iconColor?: string;
  containerStyle?: Record<string, unknown>;
  disabled?: boolean;
  id?: number | string;
  label?: string;
  labelStyle?: Record<string, unknown>;
  layout?: 'row' | 'column';
  onPress?: (value: ReplyOptionValue) => void;
  selected?: boolean;
  size?: number;
  value: ReplyOptionValue;
  renderIcon?: () => void;
};

export type RadioGroupProps = {
  containerStyle?: Record<string, unknown>;
  layout?: 'row' | 'column';
  onPress: (value: ReplyOptionValue) => void;
  selectedValue?: string;
  disabled?: boolean;
  radioButtons: ReplyOption[];
};

import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Spacers from '../../constants/Spacers';
import Theme from '../../constants/Theme';
import Typography from '../../constants/Typography';

const pickerInputStyles = {
  backgroundColor: Colors.white,
  marginTop: Spacers.spacing02,
  marginBottom: Spacers.spacing02,
  ...Theme.input,
  ...Theme.inputTypograpphy,
};

const iconContainer = {
  top: 21,
  marginTop: Spacers.spacing01,
  marginRight: Spacers.spacing04,
};

const errorPicker = {
  ...pickerInputStyles,
  borderColor: Colors.r50,
};

const disabledPicker = {
  ...pickerInputStyles,
  backgroundColor: Colors.d10,
  borderColor: Colors.d10,
  opacity: 0.6,
};

export const defaultPickerStyle = StyleSheet.create({
  inputIOS: pickerInputStyles,
  inputAndroid: pickerInputStyles,
  iconContainer,
});

export const errorPickerStyle = StyleSheet.create({
  inputIOS: errorPicker,
  inputAndroid: errorPicker,
  iconContainer,
});

export const disabledPickerStyle = StyleSheet.create({
  inputIOS: disabledPicker,
  inputAndroid: disabledPicker,
});

export default StyleSheet.create({
  mainContainer: {
    marginBottom: Spacers.spacing04,
  },
  fieldLabel: {
    ...Theme.bold,
    color: Colors.slateGrey,
  },
  error: {
    borderColor: Colors.r50,
  },
  errorMessage: {
    color: Colors.error,
    fontSize: 12,
    fontWeight: '300',
    paddingBottom: Spacers.spacing04,
  },
  modalContainer: {
    paddingTop: Spacers.spacing04,
  },
  modalTitle: {
    ...Typography.heading2,
    textAlign: 'center',
    marginBottom: Spacers.spacing05,
  },
  modalText: {
    ...Typography.heading3,
    marginBottom: Spacers.spacing04,
    color: Colors.d30,
  },
  pickerDisabledStyle: {
    marginBottom: -1 * Spacers.spacing03,
  },
});

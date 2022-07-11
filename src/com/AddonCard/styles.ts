import { StyleSheet } from 'react-native';

import CommonStyles from '../../constants/CommonStyles';
import Spacers from '../../constants/Spacers';
import Theme from '../../constants/Theme';
import Typography from '../../constants/Typography';
import Colors from '../../constants/Colors';

const pickerInputStyles = {
  ...Theme.input,
  ...Theme.inputTypograpphy,
  backgroundColor: Colors.white,
  marginTop: Spacers.spacing02,
  marginBottom: -1 * Spacers.spacing03,
  borderColor: Colors.black,
};
export const pickerStyle = StyleSheet.create({
  inputAndroid: pickerInputStyles,
  inputIOS: pickerInputStyles,
});

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: Spacers.spacing02,
    marginBottom: Spacers.spacing05,
    ...CommonStyles.boxShadow,
  },
  border: {
    borderRadius: Spacers.spacing02,
    borderColor: Colors.black,
    borderWidth: Spacers.space2 - 1,
  },
  borderUnselected: {
    borderRadius: Spacers.spacing02,
    borderColor: 'transparent',
    borderWidth: Spacers.space2 - 1,
  },
  container: {
    padding: Spacers.spacing04,
  },
  title: {
    ...Typography.heading5,
    lineHeight: Spacers.spacing06,
    fontWeight: '700',
  },
  description: {
    ...Typography.caption,
    color: Colors.slateGrey,
    lineHeight: Spacers.spacing05,
  },
  bottomContainer: {
    padding: Spacers.spacing04,
    borderTopWidth: Spacers.space2 - 1,
    borderTopColor: Colors.lightGrey,
    flexDirection: 'row-reverse',
  },
  price: {
    ...Typography.heading5,
    fontWeight: '700',
  },
  radioButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    height: 0,
  },
  paddingTop: {
    paddingTop: Spacers.spacing01,
  },
});

export default styles;

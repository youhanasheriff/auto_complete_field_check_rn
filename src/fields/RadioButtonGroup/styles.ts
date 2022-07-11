import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Spacers from '../../constants/Spacers';
import Typography from '../../constants/Typography';
// import Theme from '../../constants/Theme';

export const radioButtonContainer = {
  alignItems: 'center',
  marginVertical: Spacers.spacing02,
};

export default StyleSheet.create({
  error: {
    borderColor: Colors.r40,
  },
  radioButtonBorder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: Spacers.spacing03,
  },
  radioLabelStyle: {
    ...Typography.body2,
    lineHeight: Typography.body2.fontSize, // to match the height of the input
    paddingTop: Spacers.spacing01,
  },
  borderStyle: {
    borderColor: Colors.n30,
    borderWidth: Spacers.space2,
    height: Spacers.spacing08,
    paddingVertical: Spacers.spacing03,
    paddingHorizontal: Spacers.spacing03,
    borderRadius: Spacers.space6,
  },
  labelWithUrl: {
    ...Typography.caption2,
    color: Colors.trueBlue,
    paddingTop: Spacers.space4,
  },
  icon: {
    marginLeft: 'auto',
  },
});

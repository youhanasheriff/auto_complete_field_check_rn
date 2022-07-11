import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import Spacers from '../../constants/Spacers';
import Typography from '../../constants/Typography';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fieldLabel: {
    ...Typography.heading3,
    marginRight: Spacers.spacing01,
  },
  fieldSubLabel: {
    ...Typography.caption2,
    color: Colors.n50,
  },
  subLabelText: {
    padding: Spacers.spacing02,
  },
  tooltipContainer: {
    alignItems: 'center',
    paddingVertical: Spacers.spacing01,
  },
  tooltipIcon: {
    color: Colors.white,
  },
  maxHeight: {
    height: '100%',
  },
  loaderCenter: {
    top: windowHeight / 2 - Spacers.spacing11,
    alignItems: 'center',
  },
  loaderSize: {
    height: 100,
    width: 100,
  },
});

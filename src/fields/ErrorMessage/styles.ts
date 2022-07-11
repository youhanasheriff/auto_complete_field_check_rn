import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Spacers from '../../constants/Spacers';
import Typography from '../../constants/Typography';

export default StyleSheet.create({
  errorMessage: {
    ...Typography.caption2,
    color: Colors.r50,
    paddingBottom: Spacers.spacing02,
  },
});

import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Spacers from '../../../constants/Spacers';
import Theme from '../../../constants/Theme';
import Typography from '../../../constants/Typography';

const freeLookPeriodIconSize = 100;

export default StyleSheet.create({
  sectionTitle: {
    ...Typography.heading3,
    paddingVertical: Spacers.spacing03,
  },
  freeLookModalContentContainer: {
    alignItems: 'center',
    marginBottom: Spacers.spacing05,
  },
  freeLookModalDescription: {
    ...Theme.centerAlign,
    ...Typography.body2,
    color: Colors.d30,
  },
  freeLookPeriodImageContainer: {
    ...Theme.centerAlign,
    overflow: 'hidden',
    borderRadius: freeLookPeriodIconSize / 2,
  },
  freeLookPeriodImage: {
    width: freeLookPeriodIconSize,
    height: freeLookPeriodIconSize,
  },
});

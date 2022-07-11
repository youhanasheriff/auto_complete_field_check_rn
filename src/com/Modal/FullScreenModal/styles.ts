import { Platform, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Spacers from '../../../constants/Spacers';
import Typography from '../../../constants/Typography';

const centerBottomAlign = {
  alignItems: 'center',
  justifyContent: 'flex-end',
};

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  modal: {
    margin: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: Spacers.spacing02,
    alignItems: 'center',
    justifyContent: 'center',
    ...(Platform.OS === 'ios'
      ? {
          marginTop: Spacers.spacing08,
        }
      : {
          marginTop: Spacers.spacing02,
        }),
  },
  headerCloseContainer: {
    position: 'absolute',
    top: 2,
    left: Spacers.spacing04,
  },
  headerTitleContainer: {
    ...centerBottomAlign,
  },
  headerActionContainer: {
    position: 'absolute',
    right: Spacers.spacing04,
    top: 0,
  },
  headerActionText: {
    ...Typography.heading5,
  },
  headerTitleText: {
    ...Typography.heading3,
  },
  close: {
    marginLeft: Spacers.spacing04,
  },
  mainContainer: {
    flex: 1,
  },
});

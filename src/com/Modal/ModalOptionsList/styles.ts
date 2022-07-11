import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Spacers from '../../../constants/Spacers';
import Theme from '../../../constants/Theme';
import Typography from '../../../constants/Typography';

export default StyleSheet.create({
  modalContainer: {
    height: 'auto',
  },
  bodyContainer: {
    paddingHorizontal: Spacers.spacing04,
    paddingBottom: Spacers.spacing05,
    zIndex: 1,
    elevation: 1,
  },
  actionContainer: {
    position: 'absolute',
    top: Spacers.spacing04,
    left: Spacers.spacing04,
    zIndex: 2,
    elevation: 2,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  optionsContainer: {
    marginBottom: Spacers.spacing04,
  },
  buttonTitle: {
    ...Typography.heading3,
    color: Colors.d40,
  },
  stackedButton: {
    ...Theme.primaryButton,
    borderRadius: 0,
    marginTop: 0,
    backgroundColor: Colors.lineGrey,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
  },
  stackedButtonTop: {
    borderTopLeftRadius: Spacers.spacing02,
    borderTopRightRadius: Spacers.spacing02,
  },
  stackedButtonBottom: {
    borderBottomLeftRadius: Spacers.spacing02,
    borderBottomRightRadius: Spacers.spacing02,
    borderBottomWidth: 0,
  },
  close: {
    ...Theme.primaryButton,
    backgroundColor: Colors.white,
    marginTop: 0,
  },
});

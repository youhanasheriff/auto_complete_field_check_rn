import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import CommonStyles from '../../../constants/CommonStyles';
import Spacers from '../../../constants/Spacers';
import Theme from '../../../constants/Theme';

export default StyleSheet.create({
  mainContainer: {
    marginBottom: Spacers.spacing04,
    zIndex: 9,
  },
  inputContainer: {
    ...Theme.input,
    alignItems: 'stretch',
    overflow: 'hidden',
    backgroundColor: Colors.white,
    marginTop: Spacers.spacing02,
    marginBottom: Spacers.spacing02,
  },
  listContainer: {
    position: 'absolute',
    zIndex: 9,
    maxHeight: 250,
    borderRadius: Spacers.spacing02,
    padding: Spacers.spacing02,
    width: '100%',
    backgroundColor: Colors.snowWhite,
    ...CommonStyles.boxShadow,
  },
  listItems: {
    height: Spacers.spacing08,
    padding: Spacers.spacing02,
    borderRadius: Spacers.spacing02,
  },
  input: {
    ...Theme.inputTypograpphy,
    height: '100%',
  },
  error: {
    borderColor: Colors.r50,
  },
  disabledInputContainer: {
    backgroundColor: Colors.n30,
    borderColor: Colors.n30,
  },
  disabledInput: {
    color: Colors.d40,
    opacity: 0.6,
  },
  leftIcon: {
    marginRight: Spacers.spacing02,
  },
});

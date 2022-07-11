import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Spacers from '../../../constants/Spacers';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodyContainer: {
    padding: Spacers.space24,
    zIndex: 1,
    elevation: 1,
  },
  actionContainer: {
    position: 'absolute',
    top: Spacers.space16,
    left: Spacers.space16,
    zIndex: 2,
    elevation: 2,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  touchable: {
    marginTop: -10,
    marginLeft: -10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 25,
    paddingRight: 25,
  },
  close: {},
});

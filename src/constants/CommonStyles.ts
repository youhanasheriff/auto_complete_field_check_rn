import { Platform, StyleSheet } from 'react-native';
import Spacers from './Spacers';
import Typography from './Typography';
import Colors from './Colors';
import Theme from './Theme';

export default StyleSheet.create({
  buttonTitle: {
    ...Typography.heading3,
    color: Colors.d40,
  },
  optionsContainer: {
    marginBottom: Spacers.spacing04,
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
  boxShadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: Colors.n30,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 3.84,
        }
      : {
          shadowColor: Colors.n50,
          elevation: 4,
        },
  headerStyle: {
    shadowColor: Colors.n60,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  addressAutoCompleteContainer: {
    zIndex: 1,
  },
  bgAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  searchBar: {
    backgroundColor: Colors.d10,
  },
  searchBarInputStyle: {
    ...Theme.inputTypograpphy,
  },
  primaryLink: {
    ...Typography.heading4,
    color: Colors.r40,
    textAlign: 'center',
    fontWeight: '600',
  },
  alternateLinkContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Spacers.spacing04,
    justifyContent: 'center',
  },
});

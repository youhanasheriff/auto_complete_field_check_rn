import { StyleSheet } from 'react-native';
import Spacers from '../../constants/Spacers';
import Theme from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingRight: Spacers.spacing02,
    paddingBottom: Spacers.spacing01,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    height: Spacers.space54,
    width: '100%',
    marginTop: Spacers.spacedefault,
  },
  buttonText: {
    ...Theme.bold,
    fontSize: 20,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

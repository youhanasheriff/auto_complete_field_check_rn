import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import Spacers from '../../../constants/Spacers';
import Typography from '../../../constants/Typography';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    position: 'relative',
  },
  containerStyle: {
    margin: 0,
    borderWidth: 0,
    backgroundColor: Colors.snowWhite,
    marginTop: Spacers.spacing02,
  },
  flatListStyle: {
    paddingBottom: Spacers.space24,
  },
  otherContainer: {
    marginHorizontal: Spacers.space24,
  },
  otherInput: {
    padding: Spacers.space12,
    paddingTop: Spacers.space12,
    backgroundColor: Colors.white,
    borderColor: Colors.darkLineGrey,
    borderWidth: 1,
    borderRadius: 4,
    height: 140,
    marginBottom: Spacers.space24,
  },
  textStyle: {
    ...Typography.body2,
  },
});

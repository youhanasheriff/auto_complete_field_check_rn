import { StyleSheet } from 'react-native';
import Spacers from './Spacers';
import Typography from './Typography';
import Colors from './Colors';
import { styleConstants } from './AppConstants';

const button = {
  style: {
    height: 54,
    borderRadius: styleConstants.buttonRadius,
    width: '100%',
    marginTop: Spacers.spacing04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.heading3,
  },
} as const; // https://stackoverflow.com/questions/46710747/type-string-is-not-assignable-to-type-inherit-initial-unset-fixe

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: Spacers.space12,
  },
  primaryButton: {
    ...button.style,
    backgroundColor: Colors.r40,
  },
  primaryButtonTitle: {
    ...button.title,
    color: Colors.white,
  },
  secondaryButton: {
    ...button.style,
    borderColor: Colors.r40,
    borderWidth: 2,
  },
  secondaryButtonTitle: {
    ...button.title,
    color: Colors.r40,
  },
  disabledButton: {
    ...button.style,
    backgroundColor: Colors.d10,
    borderColor: Colors.d10,
  },
  disabledButtonTitle: {
    ...button.title,
    color: Colors.d20,
  },
  bold: {
    fontWeight: styleConstants.bold,
  },
  primaryText: {
    ...Typography.heading5,
  },
  defaultText: {
    ...Typography.body2,
  },
  smallText: {
    fontSize: styleConstants.smallTextSize,
  },
  input: {
    alignItems: 'center',
    height: styleConstants.inputHeight,
    borderRadius: styleConstants.inputRadius,
    borderWidth: 2,
    borderColor: Colors.d20,
    paddingHorizontal: Spacers.spacing04,
  },
  inputTypograpphy: {
    ...Typography.body2,
    lineHeight: Typography.body2.fontSize, // to match the height of the input
  },
  inlineInput: {
    marginVertical: Spacers.spacing02,
  },
  centerAlign: {
    textAlign: 'center',
  },
  modalContainer: {
    paddingTop: 0,
    paddingVertical: Spacers.space24,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: Spacers.spacing05,
  },
  modalTitle: {
    ...Typography.heading2,
    marginVertical: Spacers.spacing03,
  },
  modalSubtitle: {
    ...Typography.body2,
    textAlign: 'center',
    color: Colors.n50,
  },
  secondaryText: {
    color: Colors.slateGrey,
  },
});

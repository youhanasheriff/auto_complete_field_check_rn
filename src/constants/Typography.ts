import Spacers from './Spacers';
import Colors from './Colors';

const mainColor = {
  color: Colors.d40,
};

const headingDefaults = {
  ...mainColor,
  lineHeight: Spacers.space48,
};

const headlineCommons = {
  ...mainColor,
  fontFamily: 'Raleway900Black',
};

export default {
  /**
   * TODO: Remove old constants once we have applied Vanilla design tokens to all components.
   */
  body: {
    fontSize: 16,
    color: Colors.slateGrey,
  },
  h1: {
    fontSize: 40,
    ...headingDefaults,
  },
  h2: {
    fontSize: 34,
    ...headingDefaults,
  },
  h3: {
    fontSize: 28,
    ...headingDefaults,
  },
  h4: {
    fontSize: 22,
    ...headingDefaults,
  },

  /**
   * Vanilla Design System Typography
   * Reference: https://www.figma.com/file/08KltylXjWHcyGEhWzfPXy/Vanilla-Design-System?node-id=9%3A433
   */
  headline1: {
    ...headlineCommons,
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.85,
  },
  heading2: {
    ...headlineCommons,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.06,
  },
  heading3: {
    ...mainColor,
    fontFamily: 'FilsonSoftBold',
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.04,
  },
  heading4: {
    ...mainColor,
    fontFamily: 'FilsonSoftBold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  },
  heading5: {
    ...mainColor,
    fontFamily: 'FilsonSoftBold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  },
  heading6: {
    ...mainColor,
    fontFamily: 'FilsonSoftBold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  body1: {
    ...mainColor,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  },
  body2: {
    ...mainColor,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  },
  caption: {
    ...mainColor,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  caption2: {
    ...mainColor,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  footnote: {
    ...mainColor,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0,
  },
  errorText: {
    color: Colors.r50,
    fontFamily: 'FilsonSoftRegular',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
  },
};

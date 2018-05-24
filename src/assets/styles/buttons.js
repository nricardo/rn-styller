import { StyleSheet } from 'react-native-web';

import SHARED from 'assets/styles/common';
import { COLORS } from 'assets/styles/_variables';

/**
 * Buttons
 * --------------------------------------------------------------------------
 */
const DEFAULTS = {
  bgColor: '#777',
  radius: 20,
};

const getBtnBgColor = (type) => {
  switch (type) {
    case 'primary':
      return COLORS.$primary;
    case 'secondary':
      return COLORS.$secondary;
    case 'info':
      return COLORS.$info;
    case 'danger':
      return COLORS.$danger;
    case 'warning':
      return COLORS.$warning;
    default:
      return DEFAULTS.bgColor;
  }
};

const _Button = (props) => {
  const { color, type, radius } = Object.assign({}, DEFAULTS, props);

  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color ? color : getBtnBgColor(type),
    borderRadius: radius,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: DEFAULTS.bgColor,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
  };
};

export default (props) => StyleSheet.create({
  Button: _Button(props),
});

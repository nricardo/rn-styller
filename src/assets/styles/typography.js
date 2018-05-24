import { StyleSheet } from 'react-native-web';

import SHARED from 'assets/styles/common';
import { COLORS } from 'assets/styles/_variables';

/**
 * Typography
 * --------------------------------------------------------------------------
 */
// const DEFAULTS = {
//   color: COLORS.$primary,
//   size: 16,
//   bold: false,
//   muted: false,
//   decoration: 'none',
// };

const _Text = (props) => {
  const {
    // colors...
    color = undefined,
    muted = false,
    primary = false,
    secondary = false,
    info = false,
    success = false,
    danger = false,
    warning = false,

    // font stuff...
    size = 16,

    // text transforms...
    bold = false,
    decoration = 'none',
  } = props; //Object.assign({}, DEFAULTS, props);

  // define color to apply
  let _color = COLORS.$primary;
  if (muted) _color = COLORS.$muted;
  if (primary) _color = COLORS.$primary;
  if (secondary) _color = COLORS.$secondary;
  if (info) _color = COLORS.$info;
  if (success) _color = COLORS.$success;
  if (danger) _color = COLORS.$danger;
  if (warning) _color = COLORS.$warning;

  return {
    // inject shared styles
    ...SHARED(props),

    // define base styles for this component
    color: color ? color : _color,
    fontFamily: 'Roboto',
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    textDecorationLine: decoration,
  };
};

const _Heading = (props) => {
  props = Object.assign({}, {
    bold: true,
    size: 24,
  }, props);
  return _Text(props);
};

export default (props) => StyleSheet.create({
  Text: _Text(props),
  Heading: _Heading(props),
});

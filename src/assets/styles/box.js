import { StyleSheet } from 'react-native-web';
import SHARED from 'assets/styles/common';

/**
 * @function Boxes
 * @description Defines styles (mainly flexbox stuff) used for layouts.
 * --------------------------------------------------------------------------
 */
const DEFAULTS = {};

const _Box = (props) => {
  const { border, center, full, row, wrap } = Object.assign({}, DEFAULTS, props);

  return {
    // inject shared styles
    ...SHARED(props),

    // define base styles for this component
    borderColor: border,
    borderWidth: border ? 1 : 0,
    flex: full ? 1 : 0,
    flexDirection: row ? 'row' : 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: center ? 'center' : null,
    justifyContent: center ? 'center' : null,
  };
};

export default (props) => StyleSheet.create({
  Box: _Box(props),
});

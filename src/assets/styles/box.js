import SHARED from 'assets/styles/common';
import { COLORS } from 'assets/styles/_variables';

/**
 * @function Boxes
 * @description Defines styles (mainly flexbox stuff) used for layouts.
 * --------------------------------------------------------------------------
 */
export default (props = {}) => {
  const {
    center = undefined,
    color = undefined,
    full = false,
    row = false,
    type = undefined,
    wrap = false,
  } = props;

  return {
    // inject shared styles
    ...SHARED(props),

    // define base styles for this component
    backgroundColor: color || COLORS[`$${type}`] || 'transparent',
    flex: full ? 1 : 0,
    flexDirection: row ? 'row' : 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: center ? 'center' : null,
    justifyContent: center ? (row ? 'space-between' : 'center') : null,
  };
};

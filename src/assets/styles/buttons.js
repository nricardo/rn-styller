import SHARED from 'assets/styles/common';
import { COLORS } from 'assets/styles/_variables';

/**
 * Buttons
 * --------------------------------------------------------------------------
 */
export default (props = {}) => {
  const {
    color = undefined,
    disabled = false,
    rounded = 4,
    shadow = false,
    type = 'default',
  } = props;

  return {
    // inject shared styles
    ...SHARED({
      ...props,

      // common props
      ph: 10, pv: 6, // default paddings
    }),

    // define base styles for this component
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: disabled ? COLORS[`$disabled`] : COLORS[`$${type}`],
    borderRadius: rounded,
  };
};

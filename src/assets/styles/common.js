import { StyleSheet } from 'react-native-web';

/**
 * Common styles
 *
 * Define styles that are applied across all components (e.g. they are shared).
 * These incluse things like scaffholding, layout and other common properties.
 * ------------------------------------------------------------------------------
 */
export default (props = {}) => {
  const {
    b, bt, bb, bl, br, // borders
    m, mt, mb, ml, mr, mh, mv, // margins
    p, pt, pb, pl, pr, ph, pv, // paddings
    disabled = false,
    shadow = false, // shadows on/off
  } = props;

  return {
    // borders...
    borderTopColor: bt || b,
    borderTopWidth: bt || b ? 1 : 0,
    borderLeftColor: bl || b,
    borderLeftWidth: bl || b ? 1 : 0,
    borderRightColor: br || b,
    borderRightWidth: br || b ? 1 : 0,
    borderBottomColor: bb || b,
    borderBottomWidth: bb || b ? 1 : 0,

    // margins...
    marginTop: mt || mv || m,
    marginLeft: ml || mh || m,
    marginRight: mr || mh || m,
    marginBottom: mb || mv || m,

    // paddings...
    paddingTop: pt || pv || p,
    paddingLeft: pl || ph || p,
    paddingRight: pr || ph || p,
    paddingBottom: pb || pv || p,

    // shadows...
    shadowColor: shadow && !disabled ? '#777' : null,
    shadowRadius: shadow && !disabled ? 2 : 0,
    shadowOffset: shadow && !disabled ? { width: 1, height: 1 } : null,
  }
};

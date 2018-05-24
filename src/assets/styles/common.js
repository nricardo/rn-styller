import { StyleSheet } from 'react-native-web';

/**
 * Common styles
 *
 * Define styles that are applied across all components (e.g. they are shared).
 * These incluse things like scaffholding, layout and other common properties.
 * ------------------------------------------------------------------------------
 */
export default (props) => {
  const {
    m, mt, mb, ml, mr,
    p, pt, pb, pl, pr,
  } = Object.assign({}, props);

  return {
    // margins...
    marginTop: m ? m : mt,
    marginLeft: m ? m : ml,
    marginRight: m ? m : mr,
    marginBottom: m ? m : mb,

    // paddings...
    paddingTop: p ? p : pt,
    paddingLeft: p ? p : pl,
    paddingRight: p ? p : pr,
    paddingBottom: p ? p : pb,
  }
};

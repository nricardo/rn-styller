import { StyleSheet } from 'react-native-web';

import SHARED from 'assets/styles/common';
import { COLORS } from 'assets/styles/_variables';

/**
 * Typography
 * --------------------------------------------------------------------------
 */
const Text = (props) => {
  const {
    // colors...
    color = undefined,

    // font stuff...
    size = 16,

    // text transforms...
    bold = false,
    decoration = 'none',

    // type of text...
    type = 'primary',
  } = props;

  return {
    // inject shared styles
    ...SHARED(props),

    // define base styles for this component
    color: color || COLORS[`$${type}`]|| COLORS[`$primary`],
    fontFamily: 'Roboto',
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    textDecorationLine: decoration,
  };
};

const Heading = (props) => {
  props = Object.assign({}, {
    bold: true,
    size: 24,
  }, props);

  return Text(props);
};

export {
  Text,
  Heading,
};

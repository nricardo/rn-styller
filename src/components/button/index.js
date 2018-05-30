import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-web';

// import styller HOC
import styller from 'components/styller';

// import local styles
import styles from './styles';

class Button extends React.Component {

  render() {
    return <TouchableOpacity {...this.props} />;
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default styller(styles)(Button);

import React from 'react';
import { TouchableOpacity } from 'react-native-web';

// import default button styles
import styller from 'components/styller';
import styles from 'assets/styles/buttons';

class Button extends React.Component {
  render() {
    return <TouchableOpacity {...this.props} />;
  }
}

export default styller(styles)(Button);

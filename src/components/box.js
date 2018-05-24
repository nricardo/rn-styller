import React from 'react';
import { View } from 'react-native-web';

// import default button styles
import styller from 'components/styller';
import styles from 'assets/styles/box';

class Box extends React.Component {
  render() {
    return <View {...this.props} />;
  }
}

export default styller(styles)(Box);

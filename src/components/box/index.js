import React from 'react';
import { View } from 'react-native-web';

// import styller HOC
import styller from 'components/styller';

// import local styles
import styles from './styles';

class Box extends React.Component {
  render() {
    return <View {...this.props} />;
  }
}

export default styller(styles)(Box);

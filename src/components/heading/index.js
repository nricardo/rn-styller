import React from 'react';
import { Text } from 'react-native-web';

// import styller HOC
import styller from 'components/styller';

// import local styles
import styles from './styles';

class Heading extends React.Component {
  render() {
    return <Text {...this.props} />;
  }
}

export default styller(styles)(Heading);

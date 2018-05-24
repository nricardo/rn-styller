import React from 'react';
import { Text } from 'react-native-web';

// import default typography styles
import styller from 'components/styller';
import typography from 'assets/styles/typography';

class Heading extends React.Component {
  render() {
    return <Text {...this.props} />;
  }
}

export default styller(typography)(Heading);

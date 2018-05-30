import React from 'react';
import { Text } from 'react-native-web';

// import styller HOC
import styller from 'components/styller';

// import local styles
import styles from './styles';

export default styller(styles)(Text);

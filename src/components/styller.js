import React, { Component } from 'react';
import { StyleSheet } from 'react-native-web';

const styller = (styles) => (StylledComponent) => (
  class extends Component {
    render() {
      const { style, ...props } = this.props;

      console.log('Rendering "%s" component...', StylledComponent.name);

      return (
        <StylledComponent style={[styles(props), style]} {...props} />
      );
    }
  }
);

export default styller;

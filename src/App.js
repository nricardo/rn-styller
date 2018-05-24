import React, { Component } from 'react';
import { Button as RNB, Image } from 'react-native-web';

import { Box, Button, Counter, Heading, Text } from './components';

const COUNTER_INIT = 2048;

export default class App extends Component {
  state = { count: 0, disabled: true };

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  toggleCounter() {
    const { count } = this.state;
    this.setState({ count: count === 0 ? COUNTER_INIT : 0, disabled: true });
  }

  componentWillMount() {
    this.logo = <Image
      // resizeMode="cover"
      source={{
        uri: 'http://via.placeholder.com/50x50',
        height: 50, width: 50,
      }} />;
  }

  render() {
    const { count } = this.state;

    return (
      <Box full="true" p={20}>

        <Box center="true" m={20}>
          <Heading size={48}>Welcome to Styller</Heading>
          <RNB color="red" title="PRESS ME" onPress={() => this.toggleCounter()} disabled={this.state.disabled} />
          <Counter target={count} total={COUNTER_INIT} color="red" size={75} onDone={() => this.setState({ disabled: false })} />
        </Box>

        <Box row="true">
          <Box full="true">
            <Heading mb={10} decoration="underline" muted="true">Typography</Heading>
            <Text>Normal Text</Text>
            <Text bold="true">This text is bold!</Text>
            <Text secondary="true">Text in secondary color!!</Text>
            <Text info="true">Some information text..</Text>
            <Text success="true" bold="true">Awesome! You did it...</Text>
            <Text danger="true" bold="true">ERROR: something fishy here!!</Text>
            <Text warning="true">This needs your attention ASAP!</Text>
          </Box>

          <Box full="true">
            <Heading mb={10} decoration="underline" muted="true">Buttons</Heading>
            <Box row="true" wrap="true">
              <Button type="primary"><Text color="white">BUTTON</Text></Button>
              <Button type="secondary" radius={5}><Text color="white">OK</Text></Button>
              <Button type="info" radius={5}><Text color="white">INFO</Text></Button>
              <Button type="danger" radius={5}><Text color="white">DANGER!</Text></Button>
              <Button type="warning" radius={5}><Text color="white">!WARNING</Text></Button>
            </Box>
          </Box>
        </Box>

      </Box>
    );
  }
}

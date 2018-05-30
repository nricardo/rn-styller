import React, { Component } from 'react';
import { Image } from 'react-native-web';

import { Box, Button, Counter, Heading, Text } from './components';

const COUNTER_INIT = 2048;

export default class App extends Component {
  state = { count: 0, disabled: true };

  toggleCounter() {
    const { count } = this.state;
    this.setState({ count: count === 0 ? COUNTER_INIT : 0 });
  }

  componentWillMount() {
    setInterval(() => this.setState({ disabled: !this.state.disabled }), 1000);
  }

  render() {
    const { count, disabled } = this.state;

    return (
      <Box full="true" p={20}>

        <Box center="true" m={20}>
          <Heading size={48}>Welcome to Styller</Heading>
          <Button type="danger" shadow="true" onPress={() => this.toggleCounter()} disabled={disabled}>
            <Text bold="true" size={14} color="white">{disabled ? 'COUNTING...' : 'RESET ME!'}</Text>
          </Button>
          {/* <Counter target={count} total={COUNTER_INIT} size={75} onDone={() => this.setState({ disabled: false })} /> */}
        </Box>

        {/* <Box row="true">
          <Box full="true">
            <Heading mb={10} decoration="underline" muted="true">Typography</Heading>
            <Text>Normal Text</Text>
            <Text bold="true">This text is bold!</Text>
            <Text type="secondary">Text in secondary color!!</Text>
            <Text type="info">Some information text..</Text>
            <Text type="success" bold="true">Awesome! You did it...</Text>
            <Text type="danger" bold="true">ERROR: something fishy here!!</Text>
            <Text type="warning">This needs your attention ASAP!</Text>
          </Box>

          <Box full="true">
            <Heading mb={10} decoration="underline" muted="true">Buttons</Heading>
            <Box row="true" wrap="true">
              <Button m={10} shadow="true"><Text color="white">DEFAULT</Text></Button>
              <Button m={10} shadow="true" type="primary"><Text color="white">BUTTON</Text></Button>
              <Button m={10} shadow="true" type="secondary"><Text color="white">OK</Text></Button>
              <Button m={10} shadow="true" type="info"><Text color="white">INFO</Text></Button>
              <Button m={10} shadow="true" type="success"><Text color="white">SUCCESS</Text></Button>
              <Button m={10} shadow="true" type="danger"><Text color="white">DANGER!</Text></Button>
              <Button m={10} shadow="true" type="warning"><Text color="white">!WARNING</Text></Button>
            </Box>
          </Box>
        </Box> */}

      </Box>
    );
  }
}

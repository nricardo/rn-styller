import React from 'react';
import { Animated, Easing } from 'react-native-web';

import Text from './text';

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { count: this.props.total };
    this.counter = new Animated.Value(this.props.total);

    this.counter.addListener(({ value }) => {
      value = Math.round(value);
      this.setState({ count: value });
    });
  }

  doCounterAnimation(target) {
    Animated.timing(this.counter, {
      toValue: target,
      duration: 2500,
      easing: Easing.inOut(Easing.back()),
    }).start(() => this.props.onDone());
  }

  componentWillReceiveProps({ target = 0 }) {
    if (this.state.count === target) return;
    this.doCounterAnimation(target);
  }

  componentWillMount() {
    this.doCounterAnimation(this.props.target);
  }

  render() {
    const { onDone, ...props } = this.props;
    return (
      <Text {...props}>{this.state.count}</Text>
    );
  }
}

export default Counter;

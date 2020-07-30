import * as React from 'react';
import { View, Text, Button } from 'react-native';

import HiGlobal from '../utils/HiGlobal';

export default class LineComponent extends React.Component {
  state = {
    name: 'LineComponent',
  };

  handleSetState = data => {
    this.setState(data);
  };

  componentDidMount() {
    HiGlobal['LineComponent'] = this;
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

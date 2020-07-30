import * as React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';

import LineComponent from '../components/Line';

import HiGlobal from '../utils/HiGlobal';
import hiEval from '../utils/HiEval';

export default class DetailsScreen extends React.Component {
  state = {
    choosedId: 1,
    result: 0,
  };

  handlePress = () => {
    // eslint-disable-next-line no-eval
    const evalJson = {
      componentId: 'LineComponent',
      func: {
        name: 'handleSetState',
        params: {
          name: 'hello',
        },
      },
    };
    const stringJson =
      '{"componentId":"LineComponent","func":{"name":"handleSetState","params":{"name":"hello"}}}';
    hiEval(stringJson);
    // hiEval(JSON.stringify(evalJson));
  };

  changeState = () => {
    HiGlobal['LineComponent'].setState({ name: 'hehe' });
  };

  // eslint-disable-next-line no-eval
  creatEl = () => eval(React.createElement(Text, {}, 'hello word'));

  renderView = () => {
    const { choosedId } = this.state;
    const { navigation } = this.props;
    switch (choosedId) {
      case 1:
        return (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>View One</Text>
            {this.creatEl()}
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
              title="Go back to first screen in stack"
              onPress={this.handlePress}
            />
            <LineComponent />
            <Button title="Change Global" onPress={this.handlePress} />
          </View>
        );
      case 2:
        return (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>View Two</Text>
          </View>
        );
      default:
        return '';
    }
  };

  render() {
    const { choosedId } = this.state;
    const { navigation } = this.props;
    navigation.setOptions({
      title: 'No title',
    });
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
        {this.renderView()}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 84,
            backgroundColor: '#fff',
          }}>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ choosedId: 1 })}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: choosedId === 1 ? '#4885ed' : '#999',
                }}>
                TabOne
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ choosedId: 2 })}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: choosedId === 2 ? '#4885ed' : '#999',
                }}>
                TabTwo
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

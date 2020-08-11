import * as React from 'react';
import { View, Text, Button } from 'react-native';

import AppScreen from './AppScreen';
import mockPageData from '../mock/mockPageData.json';

import HiGlobal from '../utils/HiGlobal';
import { injectPageEl } from '../utils/RouterJump';

export default class PanelScreen extends React.Component {
  state = {
    page: {},
    gId: '',
  };

  UNSAFE_componentWillMount() {
    const { navigation, route } = this.props;
    console.log('navigation', this.props.navigation);
    // console.log('data==>', mockPageData[route.name]);
    console.log(route.name, 'UNSAFE_componentWillMount');
    const page = mockPageData[route.name];
    navigation.setOptions({
      title: route.name,
    });
    this.setState({ page });
    if (page && page.id) {
      HiGlobal[page.id] = this;
      injectPageEl(page.id);
    }
  }

  componentWillUnmount() {
    const { route } = this.props;
    console.log(route.name, 'componentWillUnmount');
  }

  jumpPage = (name, data) => {
    const { navigation } = this.props;
    navigation.push(name, data);
  };

  render() {
    const { page } = this.state;
    const { navigation, route } = this.props;
    return (
      <View>
        <Text>{route.name}</Text>
        <Button
          title={
            route.params
              ? route.params.from === 'Detail'
                ? 'Go to Details... again'
                : `from ${route.params.from} to Details`
              : 'Go to Details'
          }
          onPress={() =>
            navigation.push('Detail', {
              from: route.name,
            })
          }
        />
        {page && 'appScreen' in page && <AppScreen page={page.appScreen} />}
      </View>
    );
  }
}

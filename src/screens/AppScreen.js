import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { findCompByClass } from '../utils/ComponentUtil';

export default class AppScreen extends React.Component {
  state = {
    page: this.props.page,
  };

  UNSAFE_componentWillMount() {
    console.log('AppScreen', this.props.page);
  }

  render() {
    const { page } = this.state;
    return (
      <View>
        {page.items.map((panel, index) => {
          const PanelComp = findCompByClass(panel.$class);
          return (
            <View key={panel.id || index}>
              <PanelComp data={panel} />
            </View>
          );
        })}
      </View>
    );
  }
}

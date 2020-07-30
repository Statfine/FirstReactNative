import * as React from 'react';
import { View, Text, Button } from 'react-native';

import HiGlobal from '../utils/HiGlobal';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{HiGlobal.name}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

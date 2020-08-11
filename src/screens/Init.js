import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RootMock from '../routes/mockIndex';
import routesData from '../mock/mockRoutes.json';

export default function InitRoot() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setVisible(true), 3000);
  }, []);
  console.log('init App', visible);
  if (!visible)
    return (
      <View style={styles.View}>
        <Text>Wellcome</Text>
      </View>
    );
  return <RootMock router={routesData} />;
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

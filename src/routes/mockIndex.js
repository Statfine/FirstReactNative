import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PanelScreen from '../screens/PanelScreen';

import routesData from '../mock/mockRoutes.json';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator headerMode="none">
      {routesData.tab.page.map(p => (
        <Stack.Screen
          key={p.name}
          name={p.name}
          component={PanelScreen}
          options={{ title: p.title }}
        />
      ))}
    </Tab.Navigator>
  );
};

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routesData.tab.name}
        screenOptions={{ gestureEnabled: false }}>
        {routesData.page.map(p => (
          <Stack.Screen
            key={p.name}
            name={p.name}
            component={PanelScreen}
            options={{ title: p.title }}
          />
        ))}
        {routesData.tab.page.map(p => (
          <Stack.Screen
            key={p.name}
            name={p.name}
            component={PanelScreen}
            options={{ title: p.title }}
          />
        ))}
        <Stack.Screen name={routesData.tab.name} component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

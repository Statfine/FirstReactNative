import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNav"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={DetailsScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ user: 'details' }}
        />
        <Stack.Screen name="TabNav" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

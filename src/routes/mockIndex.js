import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PanelScreen from '../screens/PanelScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = ({ router }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      {router.tab.map(p => (
        <Stack.Screen
          key={p.name}
          name={p.name}
          component={PanelScreen}
          options={{
            tabBarLabel: p.title,
            title: p.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const TabScreenTwo = ({ route }) => {
  const {
    params: { router },
  } = route;
  return (
    <Tab.Navigator
      initialRouteName={router.initialRouteName}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      {router.pages.map(p => (
        <Stack.Screen
          key={p.name}
          name={p.name}
          component={PanelScreen}
          options={{
            tabBarLabel: p.title,
            title: p.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

function RootStack({ router }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name={router.tab.name}
          component={() => <TabScreen router={router} />}
        />
        {router.page.map(p => (
          <Stack.Screen
            key={p.name}
            name={p.name}
            component={PanelScreen}
            options={{ title: p.title }}
          />
        ))}
        {router.tab.page.map(p => (
          <Stack.Screen
            key={p.name}
            name={p.name}
            component={PanelScreen}
            options={{ title: p.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootStackTwo({ router }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={router.initialRouteName}
        screenOptions={{ gestureEnabled: false }}>
        {router.pages.map(r => {
          if (r.type === 'tab') {
            return (
              <Stack.Screen
                key={r.name}
                name={r.name}
                initialParams={{ router: r }}
                component={TabScreenTwo}
              />
            );
          }
          if (r.type === 'page') {
            return (
              <Stack.Screen
                key={r.page.name}
                name={r.page.name}
                component={PanelScreen}
                options={{ title: r.page.title }}
              />
            );
          }
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackTwo;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PrivateHeaderStackComponent} from './Private';
import {PublicHeaderStackComponent} from './Public';

const RootStack = createStackNavigator();

export const App = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        key="Public"
        name="Public"
        component={PublicHeaderStackComponent}
      />
      <RootStack.Screen
        key="Private"
        name="Private"
        component={PrivateHeaderStackComponent}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

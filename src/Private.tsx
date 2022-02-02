/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from '@gungnir/gungnir/modules/Texts';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, View} from 'react-native';
import {Header} from './Header';

const HomeScreen = ({navigation}: StackScreenProps<any>) => (
  <View
    style={{
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 200,
      margin: 15,
    }}>
    <Text>Private Home</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Profile modal"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Settings modal"
    />
    <Button
      onPress={() => navigation.navigate('Public')}
      title="Public stack"
    />
  </View>
);
const NotificationsScreen = () => <Text>Private Notifications</Text>;
const ProfileModal = () => <Text>Private Profile</Text>;
const SettingsModal = () => <Text>Private Settings</Text>;

const PrivateBottomTabsStack = createBottomTabNavigator();
const PrivateBottomTabsStackComponent = () => {
  return (
    <PrivateBottomTabsStack.Navigator
      initialRouteName="Home"
      // tabBar={props => <BottomTabs {...props} />}
      backBehavior="history"
      screenOptions={{headerShown: false}}>
      <PrivateBottomTabsStack.Screen
        key="Home"
        name="Home"
        component={HomeScreen}
      />
      <PrivateBottomTabsStack.Screen
        key="Notifications"
        name="Notifications"
        component={NotificationsScreen}
      />
    </PrivateBottomTabsStack.Navigator>
  );
};

const PrivateHeaderStack = createStackNavigator();
export const PrivateHeaderStackComponent = () => {
  return (
    <PrivateHeaderStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <Header stackName="Private" {...props} />,
      }}>
      <PrivateHeaderStack.Screen
        name="BottomTabs"
        component={PrivateBottomTabsStackComponent}
      />
      <PrivateHeaderStack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <PrivateHeaderStack.Screen
          key="Profile"
          name="Profile"
          component={ProfileModal}
        />
        <PrivateHeaderStack.Screen
          key="Settings"
          name="Settings"
          component={SettingsModal}
        />
      </PrivateHeaderStack.Group>
    </PrivateHeaderStack.Navigator>
  );
};

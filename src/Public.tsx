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
    <Text>Public Home</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Profile modal"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Settings modal"
    />
    <Button
      onPress={() => navigation.navigate('Private')}
      title="Private stack"
    />
  </View>
);
const NotificationsScreen = () => <Text>Public Notifications</Text>;
const ProfileModal = () => <Text>Public Profile</Text>;
const SettingsModal = () => <Text>Public Settings</Text>;

const PublicBottomTabsStack = createBottomTabNavigator();
const PublicBottomTabsStackComponent = () => {
  return (
    <PublicBottomTabsStack.Navigator
      initialRouteName="Home"
      // tabBar={props => <BottomTabs {...props} />}
      backBehavior="history"
      screenOptions={{headerShown: false}}>
      <PublicBottomTabsStack.Screen
        key="Home"
        name="Home"
        component={HomeScreen}
      />
      <PublicBottomTabsStack.Screen
        key="Notifications"
        name="Notifications"
        component={NotificationsScreen}
      />
    </PublicBottomTabsStack.Navigator>
  );
};

const PublicHeaderStack = createStackNavigator();
export const PublicHeaderStackComponent = () => {
  return (
    <PublicHeaderStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <Header stackName="Public" {...props} />,
      }}>
      <PublicHeaderStack.Screen
        name="BottomTabs"
        component={PublicBottomTabsStackComponent}
      />
      <PublicHeaderStack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <PublicHeaderStack.Screen
          key="Profile"
          name="Profile"
          component={ProfileModal}
        />
        <PublicHeaderStack.Screen
          key="Settings"
          name="Settings"
          component={SettingsModal}
        />
      </PublicHeaderStack.Group>
    </PublicHeaderStack.Navigator>
  );
};

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from '@gungnir/gungnir/modules/Texts';
import {View} from 'react-native';

type HeaderProps = {
  stackName: 'Public' | 'Private';
};

export const Header = ({stackName}: HeaderProps) => {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: '#28D503',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{stackName} stack</Text>
    </View>
  );
};

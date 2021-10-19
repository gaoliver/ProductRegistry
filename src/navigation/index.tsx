import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamList } from '../utils/types';
import StackNavigation from './StackNavigation';

const Stack = createStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

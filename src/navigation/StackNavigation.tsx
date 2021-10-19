import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  useRoute
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamList } from '../utils/types';
import HomeScreen from '../screens/HomeScreen';
import MainHeader from '../components/MainHeader';

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  const route: RouteProp<StackParamList, 'Home'> = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  return (
    <>
      <MainHeader title={routeName} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

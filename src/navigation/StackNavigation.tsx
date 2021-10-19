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
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  const route: RouteProp<StackParamList, 'Home'> = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  const name = routeName === 'Profile' ? routeName : null;

  return (
    <>
      <MainHeader title={name} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

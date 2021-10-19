import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  useRoute
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack';

import { StackParamList } from '../utils/types';
import HomeScreen from '../screens/HomeScreen';
import MainHeader from '../components/MainHeader';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import LimitHeader from '../components/LimitHeader';

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={MainStackNavigation} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
};

type MainNavigationProps = StackNavigationProp<StackParamList, 'Home'>;
type MainStackProps = { navigation: MainNavigationProps };

const MainStackNavigation = ({ navigation }: MainStackProps) => {
  const route: RouteProp<StackParamList, 'Home'> = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);
  const name = routeName === 'Profile' ? routeName : null;

  const onProfilePress = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <MainHeader title={name} onPress={onProfilePress} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

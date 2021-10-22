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
import { useSelector } from 'react-redux';

import { MainParamList, StackParamList } from '../utils/types';
import HomeScreen from '../screens/HomeScreen';
import MainHeader from '../components/MainHeader';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { ApplicationReducer } from '../redux/reducers';

const Stack = createStackNavigator<StackParamList>();
const MainStack = createStackNavigator<MainParamList>();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainHome"
      >
        <Stack.Screen name="MainHome" component={MainStackNavigation} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
};

type MainNavigationProps = StackNavigationProp<MainParamList, "Home">;
type MainStackProps = { navigation: MainNavigationProps };

const MainStackNavigation = ({ navigation }: MainStackProps) => {
  const { user } = useSelector((state: ApplicationReducer) => state.userReducer)
  const route: RouteProp<MainParamList, 'Home'> = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);
  const name = routeName === 'Profile' ? routeName : null;

  const onProfilePress = () => {
    navigation.navigate('Home', { screen: user ? "Profile" : "Login" });
  };

  return (
    <>
      <MainHeader title={name} onPress={onProfilePress} />
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Product" component={ProductScreen} />
      </MainStack.Navigator>
    </>
  );
};

export default StackNavigation;

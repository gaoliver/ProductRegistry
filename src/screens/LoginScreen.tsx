import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { StackParamList } from '../utils/types';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const LoginScreen = ({ navigation }: IProps) => {
  const styles = StyleSheet.create({
    content: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {}
  });

  return (
    <MainContainer>
      <LimitHeader title="Login" />
      <MainContent>
        <Text>Login</Text>
      </MainContent>
    </MainContainer>
  );
};

export default LoginScreen;

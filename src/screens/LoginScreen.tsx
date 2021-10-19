import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';

const LoginScreen = () => {
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

const styles = StyleSheet.create({});

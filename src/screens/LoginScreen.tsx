import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { IVerifyField, StackParamList } from '../utils/types';
import MainTextInput from '../components/MainTextInput';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

interface ILoginValues {
  email: string;
  password: string;
}

interface IWarning {
  email: IVerifyField;
  password: IVerifyField;
}

const LoginScreen = ({ navigation }: IProps) => {
  const [login, setLogin] = useState<ILoginValues>({
    email: '',
    password: ''
  });
  const [warning, setWarning] = useState<IWarning>({
    email: IVerifyField.empty,
    password: IVerifyField.empty
  });

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const verifyFields = () => {
    let emailOk = false;
    let passwordOk = false;

    if (login.email === '') {
      IVerifyField.wrong;
      setWarning({ ...warning, email: IVerifyField.wrong });
      emailOk = false;
    }
    if (login.password === '') {
      IVerifyField.wrong;
      setWarning({ ...warning, password: IVerifyField.wrong });
      passwordOk = false;
    }

    if (emailOk && passwordOk) {
      console.warn('Passed!');
    }
  };

  const styles = StyleSheet.create({
    content: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '80%',
      height: 300,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#ddd',
      elevation: 3,
      shadowOffset: {
        height: 0,
        width: 0
      },
      shadowRadius: 3,
      shadowOpacity: 0.3
    }
  });

  return (
    <MainContainer>
      <LimitHeader title="Login" />
      <MainContent contentStyle={styles.content}>
        <View style={styles.form}>
          <MainTextInput
            value={login.email}
            label="E-mail"
            inputRef={emailRef}
            status={warning.email}
            onChangeText={(text) => setLogin({ ...login, email: text })}
            inputProps={{
              autoCompleteType: 'email',
              textContentType: 'emailAddress',
              keyboardType: 'email-address',
              returnKeyType: 'next',
              onSubmitEditing: () => passwordRef.current.focus()
            }}
          />
          <MainTextInput
            value={login.password}
            label="Senha"
            inputRef={passwordRef}
            status={warning.password}
            onChangeText={(text) => setLogin({ ...login, password: text })}
            inputProps={{
              secureTextEntry: true,
              returnKeyType: 'done'
            }}
          />
        </View>
      </MainContent>
    </MainContainer>
  );
};

export default LoginScreen;

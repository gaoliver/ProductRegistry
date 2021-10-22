import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { IVerifyField, StackParamList } from '../utils/types';
import MainTextInput from '../components/MainTextInput';
import MainButton from '../components/MainButton';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const SignUpScreen = ({ navigation }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailWarning, setEmailWarning] = useState<IVerifyField>();
  const [passwordWarning, setPasswordWarning] = useState<IVerifyField>();

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const verifyEmail = () => {
    setEmailWarning(IVerifyField.empty);
  };
  const verifyPassword = () => {
    setPasswordWarning(IVerifyField.empty);
  };

  const verifyFields = () => {
    let emailOk;
    let passwordOk;

    if (email === '') {
      setEmailWarning(IVerifyField.wrong);
      emailOk = false;
    } else {
      emailOk = true;
    }

    if (password === '') {
      setPasswordWarning(IVerifyField.wrong);
      passwordOk = false;
    } else {
      passwordOk = true;
    }

    if (emailOk && passwordOk) {
      console.warn('Passed!');
    }
  };

  const styles = StyleSheet.create({
    content: {
      paddingTop: 150,
      alignItems: 'center'
    },
    form: {
      width: '80%',
      height: 235,
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
    },
    buttonsField: {
      width: '100%',
      marginTop: 10
    }
  });

  return (
    <MainContainer>
      <LimitHeader title="Sign Up" />
      <MainContent contentStyle={styles.content}>
        <View style={styles.form}>
          <MainTextInput
            value={email}
            label="E-mail"
            inputRef={emailRef}
            status={emailWarning}
            onChangeText={(text) => setEmail(text)}
            inputProps={{
              onBlur: verifyEmail,
              autoCompleteType: 'email',
              textContentType: 'emailAddress',
              keyboardType: 'email-address',
              returnKeyType: 'next',
              autoCapitalize: "none",
              onSubmitEditing: () => passwordRef.current.focus()
            }}
          />
          <MainTextInput
            value={password}
            label="Senha"
            inputRef={passwordRef}
            status={passwordWarning}
            onChangeText={(text) => setPassword(text)}
            inputProps={{
              onBlur: verifyPassword,
              secureTextEntry: true,
              returnKeyType: 'done'
            }}
          />
          <View style={styles.buttonsField}>
            <MainButton text="Login" onPress={verifyFields} />
          </View>
        </View>
      </MainContent>
    </MainContainer>
  );
};

export default SignUpScreen;

import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { IVerifyField, StackParamList } from '../utils/types';
import MainTextInput from '../components/MainTextInput';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';
import MainBox from '../components/MainBox';
import CheckboxInput from '../components/CheckboxInput';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const LoginScreen = ({ navigation }: IProps) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

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
      setTimeout(() => {
        console.warn('Login realizado!');
      }, 3000);
    }
  };

  const handleRememberAccount = () => {
    if (remember) {
      setRemember(false);
    } else {
      setRemember(true);
    }
  };

  const styles = StyleSheet.create({
    content: {
      paddingTop: 150,
      alignItems: 'center'
    },
    buttonsField: {
      width: '100%',
      marginTop: 10
    },
    signUp: {
      alignSelf: 'center'
    }
  });

  return (
    <MainContainer>
      <LimitHeader title="Login" />
      <MainContent contentStyle={styles.content}>
        <MainBox>
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
              autoCapitalize: 'none',
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
            <MainButton text="Login" onPress={verifyFields} isLoading={loading} />
            <CheckboxInput
              label="Lembrar-se"
              style={{ marginTop: 15, marginBottom: 25 }}
              checked={remember}
              onPress={handleRememberAccount}
            />
            <Text style={styles.signUp}>
              Ainda não tem conta?{' '}
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={{ color: Colors.light.links }}
              >
                Cadastre-se
              </Text>
              .
            </Text>
          </View>
        </MainBox>
      </MainContent>
    </MainContainer>
  );
};

export default LoginScreen;

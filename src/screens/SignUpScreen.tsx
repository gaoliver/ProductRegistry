import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { IVerifyField, StackParamList, UserModel } from '../utils/types';
import MainTextInput from '../components/MainTextInput';
import MainButton from '../components/MainButton';
import MainBox from '../components/MainBox';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const SignUpScreen = ({ navigation }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [confirmPsswd, setconfirmPsswd] = useState('');

  const [nameWarning, setNameWarning] = useState<IVerifyField>();
  const [emailWarning, setEmailWarning] = useState<IVerifyField>();
  const [passwordWarning, setPasswordWarning] = useState<IVerifyField>();
  const [confirmPsswdWarning, setConfirmPsswdWarning] =
    useState<IVerifyField>();

  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const confirmPsswdRef = useRef<any>(null);

  const verifyName = () => {
    setNameWarning(IVerifyField.empty);
  };
  const verifyEmail = () => {
    setEmailWarning(IVerifyField.empty);
  };
  const verifyPassword = () => {
    setPasswordWarning(IVerifyField.empty);
  };

  const verifyConfirmPsswd = () => {
    setConfirmPsswdWarning(IVerifyField.empty);
  };

  const verifyFields = () => {
    let nameOk;
    let emailOk;
    let passwordOk;
    let confirmPsswdOk;

    if (user.name === '') {
      setNameWarning(IVerifyField.wrong);
      nameOk = false;
    } else {
      nameOk = true;
    }

    if (user.email === '') {
      setEmailWarning(IVerifyField.wrong);
      emailOk = false;
    } else {
      emailOk = true;
    }

    if (user.password === '') {
      setPasswordWarning(IVerifyField.wrong);
      passwordOk = false;
    } else {
      passwordOk = true;
    }

    if (confirmPsswd === '') {
      setConfirmPsswdWarning(IVerifyField.wrong);
      confirmPsswdOk = false;
    } else {
      confirmPsswdOk = true;
    }

    if (emailOk && passwordOk && nameOk && confirmPsswdOk) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.warn('Conta criada!');
      }, 3000);
    }
  };

  const styles = StyleSheet.create({
    content: {
      paddingTop: 100,
      alignItems: 'center'
    },
    buttonsField: {
      width: '100%',
      marginTop: 10
    }
  });

  return (
    <MainContainer>
      <LimitHeader title="Cadastro" />
      <MainContent contentStyle={styles.content}>
        <MainBox>
          <MainTextInput
            value={user.name}
            label="Name"
            inputRef={nameRef}
            status={nameWarning}
            onChangeText={(text) => setUser({ ...user, name: text })}
            inputProps={{
              onBlur: verifyName,
              autoCompleteType: 'name',
              textContentType: 'name',
              returnKeyType: 'next',
              autoCapitalize: 'none',
              onSubmitEditing: () => emailRef.current.focus()
            }}
          />
          <MainTextInput
            value={user.email}
            label="E-mail"
            inputRef={emailRef}
            status={emailWarning}
            onChangeText={(text) => setUser({ ...user, email: text })}
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
            value={user.password}
            label="Senha"
            inputRef={passwordRef}
            status={passwordWarning}
            onChangeText={(text) => setUser({ ...user, password: text })}
            inputProps={{
              onBlur: verifyPassword,
              secureTextEntry: true,
              returnKeyType: 'done'
            }}
          />
          <MainTextInput
            value={confirmPsswd}
            label="Confirmar senha"
            inputRef={confirmPsswdRef}
            status={confirmPsswdWarning}
            onChangeText={(text) => setconfirmPsswd(text)}
            inputProps={{
              onBlur: verifyConfirmPsswd,
              secureTextEntry: true,
              returnKeyType: 'done'
            }}
          />
          <View style={styles.buttonsField}>
            <MainButton
              text="Finish"
              onPress={verifyFields}
              isLoading={loading}
            />
          </View>
        </MainBox>
      </MainContent>
    </MainContainer>
  );
};

export default SignUpScreen;

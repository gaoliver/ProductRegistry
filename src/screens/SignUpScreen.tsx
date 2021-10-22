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
  const [user, setUser] = useState<UserModel>({
    name: '',
    email: '',
    password: '',
    avatar: ''
  });
  const [confirmPsswd, setconfirmPsswd] = useState('');

  const [nameWarning, setNameWarning] = useState<IVerifyField>();
  const [emailWarning, setEmailWarning] = useState<IVerifyField>();
  const [passwordWarning, setPasswordWarning] = useState<IVerifyField>();

  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const verifyName = () => {
    setNameWarning(IVerifyField.empty);
  };
  const verifyEmail = () => {
    setEmailWarning(IVerifyField.empty);
  };
  const verifyPassword = () => {
    setPasswordWarning(IVerifyField.empty);
  };

  const verifyFields = () => {
    let nameOk;
    let emailOk;
    let passwordOk;

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

    if (emailOk && passwordOk && nameOk) {
      console.warn('Account created!');
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
    }
  });

  return (
    <MainContainer>
      <LimitHeader title="Sign Up" />
      <MainContent contentStyle={styles.content}>
        <MainBox>
          <MainTextInput
            value={user.name}
            label="Name"
            inputRef={nameRef}
            status={nameWarning}
            onChangeText={(text) => setUser({ ...user, name: text })}
            inputProps={{
              onBlur: verifyEmail,
              autoCompleteType: 'name',
              textContentType: "name",
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
          <View style={styles.buttonsField}>
            <MainButton text="Finish" onPress={verifyFields} />
          </View>
        </MainBox>
      </MainContent>
    </MainContainer>
  );
};

export default SignUpScreen;

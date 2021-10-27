import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import * as userActions from '../redux/actions/userActions';
import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import {
  IVerifyField,
  RequesterResponseModel,
  StackParamList,
  UserModel
} from '../utils/types';
import MainTextInput from '../components/MainTextInput';
import MainButton from '../components/MainButton';
import MainBox from '../components/MainBox';
import requester from '../service/requester';
import services from '../service/service';
import { useDispatch } from 'react-redux';
import AlertBox from '../components/AlertBox';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const SignUpScreen = ({ navigation }: IProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [networkError, setNetworkError] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [confirmPsswd, setconfirmPsswd] = useState('');

  const [emailValidator, setEmailValidator] = useState('');
  const [confirmPsswdValidator, setConfirmPsswdValidator] = useState('');

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

  const handleLogin = async () => {
    const { userLogin } = services;
    const options = {
      data: { email: user.email, password: user.password },
      headers: { 'Content-Type': 'application/json' }
    };
    const result: RequesterResponseModel = await requester(userLogin, options);

    if (result.success) {
      dispatch(userActions.getUserProfile(result.data));
      navigation.replace('Profile');
    } else {
      console.warn('Erro');
      console.log(result.error);
    }
  };

  const handleCreateUser = async () => {
    setLoading(true);

    const { userSignUp } = services;
    const options = {
      data: user,
      headers: { 'Content-Type': 'application/json' }
    };
    const result: RequesterResponseModel = await requester(userSignUp, options);

    if (result.success) {
      handleLogin();
    } else {
      console.warn('Erro');
      console.log(result.data);
      if (result.data?.message?.includes('email')) {
        setEmailValidator('Este e-mail já está cadastrado.');
        setEmailWarning(IVerifyField.wrong);
      } else if (result.error.toLowerCase().includes('network')) {
        setNetworkError(true);
      }
    }

    setLoading(false);
  };

  const verifyFields = () => {
    let nameOk;
    let emailOk;
    let passwordOk;
    let confirmPsswdOk;

    setNameWarning(IVerifyField.empty);
    setEmailWarning(IVerifyField.empty);
    setPasswordWarning(IVerifyField.empty);
    setConfirmPsswdWarning(IVerifyField.empty);

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
    }
    if (confirmPsswd !== user.password) {
      setConfirmPsswdWarning(IVerifyField.wrong);
      setConfirmPsswdValidator('As senhas devem ser iguais.');
      confirmPsswdOk = false;
    } else {
      confirmPsswdOk = true;
    }

    if (emailOk && passwordOk && nameOk && confirmPsswdOk) {
      handleCreateUser();
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
            warningMessage={emailValidator}
            onChangeText={(text) => {
              setUser({ ...user, email: text });
              setEmailValidator('');
              setEmailWarning(IVerifyField.empty);
            }}
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
            warningMessage={confirmPsswdValidator}
            onChangeText={(text) => {
              setconfirmPsswd(text);
              setConfirmPsswdValidator('');
              setConfirmPsswdWarning(IVerifyField.empty);
            }}
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

      <AlertBox
        isVisible={networkError}
        title="Erro ao cadastrar"
        message="Ocorreu um erro ao tentar cadastrar. Verifique sua internet e tente novamente."
        hideButton="both"
        onDismiss={() => setNetworkError(false)}
      />
    </MainContainer>
  );
};

export default SignUpScreen;

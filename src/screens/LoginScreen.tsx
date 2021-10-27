import React, { useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import * as userActions from '../redux/actions/userActions';
import LimitHeader from '../components/LimitHeader';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import {
  IVerifyField,
  RequesterResponseModel,
  StackParamList
} from '../utils/types';
import MainTextInput from '../components/MainTextInput';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';
import MainBox from '../components/MainBox';
import CheckboxInput from '../components/CheckboxInput';
import services from '../service/service';
import requester from '../service/requester';
import AlertBox from '../components/AlertBox';

interface IProps {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
}

const LoginScreen = ({ navigation }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [modalLogged, setModalLogged] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [emailValidator, setEmailValidator] = useState('');
  const [passwordValidator, setPasswordValidator] = useState('');

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

  const verifyFields = async () => {
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
      setLoading(true);

      const { userLogin } = services;
      const options = {
        data: { email: email, password: password },
        headers: { 'Content-Type': 'application/json' }
      };
      const result: RequesterResponseModel = await requester(
        userLogin,
        options
      );

      if (result.success) {
        dispatch(userActions.getUserProfile(result.data));
        setModalLogged(true);
        navigation.replace('Profile');
      } else {
        console.warn('Erro');
        console.log(result.error);
        if (result.data?.validation?.body?.message?.includes('email')) {
          setEmailValidator('E-mail inválido.');
          setEmailWarning(IVerifyField.wrong);
        } else if (result.data?.message?.includes('Incorrect')) {
          setEmailValidator('E-mail ou senha inválidos.');
          setPasswordValidator('E-mail ou senha inválidos.');
          setEmailWarning(IVerifyField.wrong);
          setPasswordWarning(IVerifyField.wrong);
        } else if (result.error.toLowerCase().includes('network')) {
          setNetworkError(true)
        }
      }

      setLoading(false);
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
            warningMessage={emailValidator}
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
            warningMessage={passwordValidator}
            onChangeText={(text) => setPassword(text)}
            inputProps={{
              onBlur: verifyPassword,
              secureTextEntry: true,
              returnKeyType: 'done'
            }}
          />
          <View style={styles.buttonsField}>
            <MainButton
              text="Login"
              onPress={verifyFields}
              isLoading={loading}
            />
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

      <AlertBox
        isVisible={modalLogged}
        message="Usuário logado com sucesso!"
        hideButton="both"
        onDismiss={() => setModalLogged(false)}
      />
      <AlertBox
        isVisible={networkError}
        title="Erro ao conectar"
        message="Verifique sua conexão com a internet e tente novamente."
        hideButton="both"
        onDismiss={() => setNetworkError(false)}
      />
    </MainContainer>
  );
};

export default LoginScreen;

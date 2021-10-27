import { Footer } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../redux/actions/userActions';
import LimitHeader from '../components/LimitHeader';
import MainBox from '../components/MainBox';
import MainButton from '../components/MainButton';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import Colors from '../constants/Colors';
import { ApplicationReducer } from '../redux';
import { RequesterResponseModel, ScreenNavigationProp } from '../utils/types';
import requester from '../service/requester';
import services from '../service/service';

const ProfileScreen = ({ navigation }: ScreenNavigationProp) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(
    (state: ApplicationReducer) => state.userReducer?.user
  );

  const translator = {
    id: user?.user?.id ? user.user.id : '',
    name: user?.user?.name ? user.user.name : '',
    email: user?.user?.email ? user.user.email : ''
  };

  const handleLogout = () => {
    setLoading(true);
    dispatch(userActions.getUserProfile(undefined));
    setLoading(false);
    return navigation.navigate('MainHome');
  };

  const handleDeleteAccount = async () => {
    setLoading(true);

    const config = {
      data: undefined,
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    }
    const service = {
      ...services.userDelete(translator.id)
    };
    console.log(service);
    const result: RequesterResponseModel = await requester(service, config);

    if (result.success) {
      dispatch(userActions.getUserProfile(undefined));
      navigation.navigate('MainHome');
    } else {
      console.warn(result.data);
    }
    setLoading(false);
  };

  const styles = StyleSheet.create({
    boxContainer: {
      alignItems: 'flex-start',
      minHeight: 0,
      width: '100%',
      marginTop: 10
    },
    infoArea: {
      width: '100%'
    },
    infoLabel: {
      color: Colors.light.text,
      marginBottom: 5
    },
    textDataContainer: {
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: Colors.light.background
    },
    textData: {
      color: Colors.light.text
    },
    footer: {
      height: 100,
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 20,
      justifyContent: 'space-evenly'
    }
  });

  return (
    <MainContainer>
      <LimitHeader title={translator.name} />
      <MainContent>
        <MainBox boxStyle={[styles.boxContainer, { marginTop: 0 }]}>
          <View style={styles.infoArea}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <View style={styles.textDataContainer}>
              <Text style={styles.textData}>{translator.name}</Text>
            </View>
          </View>
          <View style={[styles.infoArea, { marginTop: 30 }]}>
            <Text style={styles.infoLabel}>E-mail:</Text>
            <View style={styles.textDataContainer}>
              <Text style={styles.textData}>{translator.email}</Text>
            </View>
          </View>
        </MainBox>
        <MainBox boxStyle={styles.boxContainer}>
          <MainButton
            text="Excluir conta"
            type="other"
            color={Colors.colors.accent}
            onPress={handleDeleteAccount}
          />
        </MainBox>
      </MainContent>
      <Footer style={styles.footer}>
        <MainButton text="Editar" />
        <MainButton
          text="Sair"
          type="accent"
          isLoading={loading}
          onPress={handleLogout}
        />
      </Footer>
    </MainContainer>
  );
};

export default ProfileScreen;

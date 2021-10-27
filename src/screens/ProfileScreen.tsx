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
import { ScreenNavigationProp } from '../utils/types';

const ProfileScreen = ({ navigation }: ScreenNavigationProp) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(
    (state: ApplicationReducer) => state.userReducer?.user?.user
  );

  const translator = {
    name: user?.name ? user.name : '',
    email: user?.email ? user.email : ''
  };

  const handleLogout = () => {
    setLoading(true);
    dispatch(userActions.getUserProfile(undefined));
    setLoading(false);
    return navigation.navigate('MainHome');
  };

  const styles = StyleSheet.create({
    boxContainer: {
      alignItems: 'flex-start',
      minHeight: 0,
      width: '100%'
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
        <MainBox boxStyle={styles.boxContainer}>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import LimitHeader from '../components/LimitHeader';
import MainBox from '../components/MainBox';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import Colors from '../constants/Colors';
import { ApplicationReducer } from '../redux';
import { UserModel } from '../utils/types';

const ProfileScreen = () => {
  const user = useSelector(
    (state: ApplicationReducer) => state.userReducer?.user?.user
  );

  const translator = {
    name: user?.name ? user.name : '',
    email: user?.email ? user.email : ''
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
    </MainContainer>
  );
};

export default ProfileScreen;

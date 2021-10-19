import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Body, Header, Left, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { NavigationProp } from '../utils/types';

interface Props {
  title?: string;
}

const MainHeader = ({ title, ...props }: Props) => {
  const logo = require('../../assets/adaptive-icon.png');
  const navigation = useNavigation<NavigationProp>();

  const onProfilePress = () => {
    navigation.navigate('Profile');
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: Colors.colors.primary
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    logo: {
      width: 45,
      height: 75
    },
    sides: {
      flex: 0.18,
      marginHorizontal: 10
    },
    searchBar: {
      width: '100%',
      height: 40
    },
    inputStyleSearchBar: {
      textAlign: 'left',
      fontSize: 15,
      paddingLeft: 0,
      paddingRight: 0
    }
  });

  return (
    <Header
      style={styles.header}
      androidStatusBarColor={Colors.colors.primary}
      {...props}
    >
      <Left style={styles.sides}>
        <Image source={logo} style={styles.logo} />
      </Left>

      <Body>
        <Searchbar
          value=""
          placeholder="Pesquisa seu produto"
          style={styles.searchBar}
          inputStyle={styles.inputStyleSearchBar}
        />
      </Body>

      <Right style={styles.sides}>
        <FontAwesome
          name="user-circle-o"
          size={40}
          color={Colors.light.accentText}
          onPress={onProfilePress}
        />
      </Right>
    </Header>
  );
};

export default MainHeader;

import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Body, Header, Left, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

interface IMainHeaderProps {
  title?: string | null;
  onPress: () => void;
}

const translator = (props: IMainHeaderProps) => ({
  title: props.title ? props.title : '',
  onPress: props.onPress ? props.onPress : () => {}
});

const MainHeader = (props: IMainHeaderProps) => {
  const {title, onPress} = translator(props)
  const logo = require('../../assets/adaptive-icon.png');

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
    },
    screenTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.light.accentText
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
        {!title ? (
          <Searchbar
            value=""
            placeholder="Pesquisa seu produto"
            style={styles.searchBar}
            inputStyle={styles.inputStyleSearchBar}
          />
        ) : (
          <Text style={styles.screenTitle}>{title}</Text>
        )}
      </Body>

      <Right style={styles.sides}>
        <FontAwesome
          name="user-circle-o"
          size={40}
          color={Colors.light.accentText}
          onPress={onPress}
        />
      </Right>
    </Header>
  );
};

export default MainHeader;

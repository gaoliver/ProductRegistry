import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Body, Header, Left, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

// Componentes
import Colors from '../constants/Colors';

interface Props {
    title?: string;
}

const MainHeader = ({ title, ...props }: Props) => {
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
        }
    });

    return (
        <Header
            style={styles.header}
            androidStatusBarColor={Colors.colors.primary}
            {...props}
        >
            {/* Esquerda */}
            <Left style={styles.sides}>
                <Image source={logo} style={styles.logo} />
            </Left>

            {/* Centro */}
            <Body>
                <Searchbar
                    value=""
                    placeholder="Pesquisa seu produto"
                    style={styles.searchBar}
                    inputStyle={styles.inputStyleSearchBar}
                />
            </Body>

            {/* Direita */}
            <Right style={styles.sides}>
                <FontAwesome
                    name="user-circle-o"
                    size={40}
                    color={Colors.light.accentText}
                />
            </Right>
        </Header>
    );
};

export default MainHeader;

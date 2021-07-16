import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Body, Header, Left, Right } from 'native-base';

interface Props {
    theme: any;
    title?: string;
}

const HeaderScreen = ({ theme, title, ...props }: Props) => {
    return (
        <Header
            style={{ backgroundColor: theme.accent }}
            androidStatusBarColor={theme.accent}
            {...props}
        >
            <Left></Left>
            <Body>
                <Text style={{ ...styles.title, color: theme.background }}>
                    {title}
                </Text>
            </Body>
            <Right></Right>
        </Header>
    );
};

export default HeaderScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

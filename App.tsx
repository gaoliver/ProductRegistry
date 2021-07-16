import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appearance, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Body, Container, Content, Header, Left, Right } from 'native-base';

import { dark, light } from './src/constants/colors';
import HeaderScreen from './src/components/HeaderScreen';

export default function App() {
    const [theme, setTheme] = useState(light);

    const changeTheme = () => {
        if (theme === light) {
            setTheme(dark);
        } else {
            setTheme(light);
        }
    };

    return (
        <Container>
            {/* Header */}
            <HeaderScreen theme={theme} title="Product Registry" />
            {/* Screen body */}
            <Content
                contentContainerStyle={{
                    ...styles.container,
                    backgroundColor: theme.background
                }}
            >
                {/* Screen text */}
                <Text style={{ color: theme.primary }}>
                    Let's start coding!
                </Text>
                {/* Theme button */}
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: theme.primary }}
                    onPress={changeTheme}
                >
                    {/* Text button */}
                    <Text
                        style={{ color: theme.background, fontWeight: 'bold' }}
                    >
                        Press to theme
                    </Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 20,
        borderRadius: 5
    }
});

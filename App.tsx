import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Appearance, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Body, Container, Content, Header, Left, Right } from 'native-base';

import { colors } from './src/constants/colors';
import MainHeader from './src/components/MainHeader';

export default function App() {

    return (
        <Container>
            {/* Header */}
            <MainHeader title="Product Registry" />
            {/* Screen body */}
            <Content
                contentContainerStyle={{
                    ...styles.container,
                    backgroundColor: colors.background
                }}
            >
                {/* Screen text */}
                <Text style={{ color: colors.primary }}>
                    Let's start coding!
                </Text>
                {/* colors button */}
                <TouchableOpacity
                    style={{ ...styles.button, backgroundColor: colors.primary }}
                >
                    {/* Text button */}
                    <Text
                        style={{ color: colors.background, fontWeight: 'bold' }}
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

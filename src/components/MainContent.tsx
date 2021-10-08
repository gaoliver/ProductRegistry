import { Content } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const MainContent: React.FC = ({ children }) => {
    const styles = StyleSheet.create({
        content: {
            flex: 1
        }
    });
    return <Content contentContainerStyle={styles.content}>{children}</Content>;
};

export default MainContent;

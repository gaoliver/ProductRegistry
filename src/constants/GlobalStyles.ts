import { StyleSheet } from 'react-native';
import { colors } from './colors';

const GlobalStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    content: {
        flex: 1,
    }
});

export default GlobalStyle;

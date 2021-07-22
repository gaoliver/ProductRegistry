import React, { useEffect, useState } from 'react';
import { Appearance, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    Body,
    Container,
    Content,
    Header,
    Left,
    Right,
    View
} from 'native-base';

// Componentes
import MainHeader from '../components/MainHeader';
import GlobalStyle from '../constants/GlobalStyles';
import ProductList from '../components/ProductList';
import HttpService from '../service/HttpService';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    // Obter lista de produtos
    useEffect(() => {
        HttpService.list('products').then((data) => setProducts(data));
    }, []);

    return (
        <Container style={GlobalStyle.container}>
            {/* Header */}
            <MainHeader title="Product Registry" />
            {/* Screen body */}
            <Content contentContainerStyle={GlobalStyle.content}>
                {/* Separador */}
                <View style={{ width: 10, height: 5 }} />

                {/* Lista de produtos */}
                <ProductList products={products} />
            </Content>
        </Container>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        padding: 20,
        borderRadius: 5
    }
});
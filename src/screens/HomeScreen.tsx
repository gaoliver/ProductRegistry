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
import { useDispatch, useSelector } from 'react-redux';

// Componentes
import MainHeader from '../components/MainHeader';
import GlobalStyle from '../constants/GlobalStyles';
import ProductList from '../components/ProductList';
import HttpService from '../service/requester';
import { ApplicationReducer, getListProducts } from '../redux';
import services from '../service/service';
import requester from '../service/requester';

const HomeScreen = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const listProducts = useSelector(
        (state: ApplicationReducer) => state.productReducer.listProducts
    );

    const getProducts = async () => {
        setLoading(true);

        const { getListProducts: service } = services;
        const result = await requester(service);

        console.log(listProducts);
        dispatch(getListProducts(result));

        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container style={GlobalStyle.container}>
            <MainHeader title="Product Registry" />
            <Content contentContainerStyle={GlobalStyle.content}>
                <View style={{ width: 10, height: 5 }} />
                <ProductList products={listProducts} />
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

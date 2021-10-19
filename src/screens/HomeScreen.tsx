import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Componentes
import MainHeader from '../components/MainHeader';
import ProductList from '../components/ProductList';
import { ApplicationReducer, getListProducts } from '../redux';
import services from '../service/service';
import requester from '../service/requester';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';

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
    dispatch(getListProducts(result));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <MainContent loadingIndicator={loading} loadAction={getProducts}>
        <ProductList products={listProducts} />
      </MainContent>
    </MainContainer>
  );
};

export default HomeScreen;

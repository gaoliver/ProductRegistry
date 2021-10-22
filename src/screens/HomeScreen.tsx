import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductList from '../components/ProductList';
import { ApplicationReducer, getListProducts } from '../redux';
import services from '../service/service';
import requester from '../service/requester';
import MainContainer from '../components/MainContainer';
import MainContent from '../components/MainContent';
import { MainNavigationProp, RequesterResponseModel } from '../utils/types';

interface IHomeProps {
  navigation: MainNavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const listProducts = useSelector(
    (state: ApplicationReducer) => state.productReducer.listProducts
  );

  const getProducts = async () => {
    setLoading(true);
    const { getListProducts: service } = services;
    const result: RequesterResponseModel = await requester(service);
    dispatch(getListProducts(result.data));
    setLoading(false);
  };

  const onPressProduct = () => {
    navigation.navigate('Product');
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainContainer>
      <MainContent loadingIndicator={loading} loadAction={getProducts}>
        <ProductList products={listProducts} onPress={onPressProduct} />
      </MainContent>
    </MainContainer>
  );
};

export default HomeScreen;

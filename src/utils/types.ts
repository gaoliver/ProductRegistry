import { StackNavigationProp } from '@react-navigation/stack';

export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export type RequesterServiceModel = {
  method: RequesterMethodEnum;
  endpoint: string;
};

export type ProductModel = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type NavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type StackParamList = {
  Home: undefined;
  Login: undefined;
  SignIn: undefined;
  Profile: undefined;
  EditProfile: undefined;
  MyProducts: undefined;
  Product: undefined;
  Menu: undefined;
  CreateProduct: undefined;
  EditProduct: undefined;
};

export enum IVerifyField {
  'empty',
  'wrong',
  'ok'
}

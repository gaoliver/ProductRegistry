import { NavigatorScreenParams } from '@react-navigation/native';
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

export type UserModel = {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type NavigationProp = StackNavigationProp<StackParamList, 'MainHome'>;
export type MainNavigationProp = StackNavigationProp<MainParamList, 'Home'>;

export type StackParamList = {
  MainHome: MainParamList;
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  EditProfile: undefined;
  MyProducts: undefined;
  Menu: undefined;
  CreateProduct: undefined;
  EditProduct: undefined;
};

export type MainParamList = {
  Home: NavigatorScreenParams<StackParamList>;
  Product: undefined;
};

export enum IVerifyField {
  'empty',
  'wrong',
  'ok'
}

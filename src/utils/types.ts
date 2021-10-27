import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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

export type RequesterResponseModel = {
  success: boolean;
  status?: number;
  error: any;
  data: any;
};

export type RequesterOptionsModel = {
  data?: any;
  headers?: any;
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
  user: {
    id?: string;
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    createdAt?: string;
    updatedAt?: string;
  };
  token: string;
};

export type NavigationProp = StackNavigationProp<StackParamList, 'MainHome'>;
export type MainNavigationProp = StackNavigationProp<MainParamList, 'Home'>;
export type ScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export type StackParamList = {
  MainHome: MainParamList | undefined;
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

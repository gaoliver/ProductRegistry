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

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  Product: undefined;
};

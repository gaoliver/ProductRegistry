import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
  userLogin: RequesterServiceModel;
  userSignUp: RequesterServiceModel;
  getListProducts: RequesterServiceModel;
}

const services: Services = {
  userLogin: {
    method: RequesterMethodEnum.POST,
    endpoint: 'login'
  },
  userSignUp: {
    method: RequesterMethodEnum.POST,
    endpoint: 'users'
  },
  getListProducts: {
    method: RequesterMethodEnum.GET,
    endpoint: 'products'
  }
};

export default services;

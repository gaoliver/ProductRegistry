import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
  userLogin: RequesterServiceModel;
  userSignUp: RequesterServiceModel;
  userDelete(userId: string): RequesterServiceModel;
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
  userDelete(userId) {
    return {
      method: RequesterMethodEnum.DELETE,
      endpoint: `users/${userId}`
    };
  },
  getListProducts: {
    method: RequesterMethodEnum.GET,
    endpoint: 'products'
  }
};

export default services;

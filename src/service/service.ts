import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
  userLogin: RequesterServiceModel;
  getListProducts: RequesterServiceModel;
}

const services: Services = {
  userLogin: {
    method: RequesterMethodEnum.POST,
    endpoint: 'login'
  },
  getListProducts: {
    method: RequesterMethodEnum.GET,
    endpoint: 'products'
  }
};

export default services;

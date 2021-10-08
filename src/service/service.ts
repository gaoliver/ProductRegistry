import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
    getListProducts: RequesterServiceModel;
}

const services: Services = {
    getListProducts: {
        method: RequesterMethodEnum.GET,
        endpoint: 'products'
    }
};

export default services;

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import _, { result } from 'lodash';

import {
  RequesterOptionsModel,
  RequesterResponseModel,
  RequesterServiceModel
} from '../utils/types';

const requester: any = async (
  service: RequesterServiceModel,
  options: RequesterOptionsModel = {
    data: undefined,
    headers: {}
  }
) => {
  const { endpoint, method } = service;
  const config: AxiosRequestConfig = {
    method: method,
    baseURL: 'http://localhost:3001',
    url: endpoint,
    data: options.data,
    headers: options.headers
  };

  return axios
    .request(config)
    .then((response: AxiosResponse) => {
      const result: RequesterResponseModel = {
        data: response.data,
        status: response.status,
        success: true,
        error: null
      };
      console.log(result);
      return result;
    })
    .catch((error: AxiosError) => {
      // Retry attempts
      // if (attempt <= maxRetry) {
      //   const retryService = {
      //     ...service,
      //     attempt: attempt + 1
      //   };
      //   return requester(retryService, options);
      // }
      const result: RequesterResponseModel = {
        success: false,
        status: error.response?.status,
        error: error.message,
        data: error.response?.data,
      };
      return result;
    });
};

export default requester;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import baseConfig from './config/axiosrc';

// define request params that should be a key value pair
export interface Params<T> {
  [key: string]: T;
}

function createInstance (params?: Params<object>, timeout?: number): AxiosInstance {
  if (params !== undefined) baseConfig.params = params;
  if (timeout !== undefined) baseConfig.timeout = timeout;

  const instance = axios.create(baseConfig);
  requstInterceptor(instance);
  responseInterceptor(instance);

  return instance;
}

function requstInterceptor (instance: AxiosInstance): void {
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  });
}

function responseInterceptor (instance: AxiosInstance): void {
  instance.interceptors.response.use((response: AxiosResponse) => {
    console.log(response);
    return response;
  });
}

function requestGet (url: string, params?: Params<object>): Promise<void | AxiosResponse<any>> {
  return createInstance(params)
    .get(url)
    .catch((error: Error) => {
      errorHandler(error);
    })
    .finally(() => {
      doFinally();
    });
}

function requestPost (url: string, params?: Params<object>): Promise<void | AxiosResponse<any>> {
  return createInstance(params)
    .post(url)
    .catch((error: Error) => {
      errorHandler(error);
    })
    .finally(() => {
      doFinally();
    });
}

function errorHandler (error: Error): void {
  console.log(error);
};

function doFinally (): void {
  console.log('finally');
}

export interface AxiosHandlerStatic {
  requestGet (url: string, params?: Params<any>): Promise<void | AxiosResponse<any>>;
  requestPost (url: string, params?: Params<any>): Promise<void | AxiosResponse<any>>;
}

const axiosHandler: AxiosHandlerStatic = {
  requestGet: requestGet,
  requestPost: requestPost
};

export { AxiosResponse };
export default axiosHandler;

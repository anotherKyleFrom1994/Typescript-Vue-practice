// 默认利用axios的cancelToken进行防重复提交。
// 如需允许多个提交同时发出。则需要在请求配置config中增加 neverCancel 属性，并设置为true
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import baseConfig from './axiosrc';

// define AJAX params that should be a key value pair
interface Params {
  [key: string]: any
}

function createInstance (params ? : Params, timeout ? : number) {
  if (params !== undefined) baseConfig.params = params;
  if (timeout !== undefined) baseConfig.timeout = timeout;

  const instance = axios.create(baseConfig);
  requstInterceptor(instance);
  responseInterceptor(instance);

  return instance;
}

function requstInterceptor (instance: AxiosInstance) {
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  });
}

function responseInterceptor (instance: AxiosInstance) {
  instance.interceptors.response.use((response: AxiosResponse) => {
    console.log(response);
    return response;
  });
}

export function requestGet (url: string, params ? : Params) {
  return createInstance(params)
    .get(url)
    .catch((error: Error) => {
      errorHandler(error);
    })
    .finally(() => {
      doFinally();
    });
}

export function requestPost (url: string, params ? : Params) {
  return createInstance(params)
    .post(url)
    .catch((error: Error) => {
      errorHandler(error);
    })
    .finally(() => {
      doFinally();
    });
}

function errorHandler (error: Error) {
  console.log(error);
};

function doFinally () {
  console.log('finally');
}

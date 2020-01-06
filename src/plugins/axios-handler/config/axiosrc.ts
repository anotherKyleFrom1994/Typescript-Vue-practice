import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {};

if (process.env.NODE_ENV === 'development') {
  config.baseURL = 'https://some-domain.com/api/';
  config.timeout = 1000;
  config.headers = { 'X-Custom-Header': 'foobar' };
}

if (process.env.NODE_ENV === 'prodction') {
  config.baseURL = 'https://some-domain.com/api/';
  config.timeout = 1000;
  config.headers = { 'X-Custom-Header': 'foobar' };
}

export default config;

// 默认利用axios的cancelToken进行防重复提交。
// 如需允许多个提交同时发出。则需要在请求配置config中增加 neverCancel 属性，并设置为true
import axios from 'axios';
import baseConfig from './axiosrc';
import { Vue } from 'vue-property-decorator';
// define AJAX params that should be a key value pair
interface params {
  [key: string]: any
}

function createInstance (params ? : params, timeout ? : number) {
  if (params !== undefined) baseConfig.params = params;
  if (timeout !== undefined) baseConfig.timeout = timeout;

  return axios.create(baseConfig);
}

export function requestGet (url: string, params ? : params) {
  return createInstance(params).get(url);
}

export function requestPost (url: string, params ? : params) {
  return createInstance(params).post(url);
}

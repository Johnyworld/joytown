import axios from 'axios';
import { apiLog } from './apiLog';

/**
 * 전체 API 요청을 총괄하는 API Pipeline 입니다.
 * api.js 파일에서만 이 함수에 접근할 수 있습니다.
 */
const request = async (method, url, payload) => {
  apiLog.req(method, url, payload);
  try {
    const res = await axios({
      method,
      url,
      [method === 'GET' ? 'params' : 'data']: payload,
    });
    apiLog.res(method, url, res);
    return res;
  } catch (err) {
    apiLog.err(method, url, err.response.data);
    return err.response.data;
  }
};

export default request;

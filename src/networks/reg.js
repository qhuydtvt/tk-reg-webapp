import axios from 'axios';
import { REG_API } from 'statics';
import { fieldsNotEmpty } from 'utils';

export function postRegistration(reg) {
  const request = axios.post(REG_API, reg);
  const interceptor = (response) => {
    return new Promise((resolve, reject) => {
      if(fieldsNotEmpty(response, 'data.success', 'data.reg')) {
        resolve(response.data.reg);
      } else {
        reject();
      }
    })
  };
  return request.then(interceptor);
}
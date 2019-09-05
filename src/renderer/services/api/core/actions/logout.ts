import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { BaseRequestData } from '../base-request';
import { client } from '../client';

type LogoutRequestParams = Omit<LogoutRequestData, 'action'>

class LogoutRequestData extends BaseRequestData {
  action = 'logout';
  format? = 'json';
  token: string;

  constructor(opts: LogoutRequestParams) {
    super();
    Object.assign(this, opts);
  }
}

class LogoutRequestConfig implements AxiosRequestConfig {
  method: Method = 'POST';
  data: LogoutRequestData;

  constructor(opts: LogoutRequestParams) {
    this.data = new LogoutRequestData(opts);
  }
}

export function logout(params: LogoutRequestParams): Promise<AxiosResponse<any>> {
  return client.request(new LogoutRequestConfig(params));
}

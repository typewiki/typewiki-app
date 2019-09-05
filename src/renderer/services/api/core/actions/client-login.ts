import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { BaseRequestData } from '../base-request';
import { client } from '../client';

class ClientLoginRequestData extends BaseRequestData {
  action = 'clientlogin';
  format? = 'json';

  loginRequests?: string;
  loginMessageFormat?: string;
  loginMergeRequestFields?: boolean;
  loginPreserveState?: boolean;
  loginReturnUrl: string;
  loginContinue?: boolean;
  loginToken: string;
  username: string;
  password: string;

  constructor(opts: Omit<ClientLoginRequestData, 'action'>) {
    super();
    Object.assign(this, opts);
  }
}

class ClientLoginRequestConfig implements AxiosRequestConfig {
  method: Method = 'POST';
  data: ClientLoginRequestData;

  constructor(opts: Omit<ClientLoginRequestData, 'action'>) {
    this.data = new ClientLoginRequestData(opts);
  }
}

export function clientLogin(
  config: Omit<ClientLoginRequestData, 'action'>
): Promise<AxiosResponse<any>> {
  return client.request(new ClientLoginRequestConfig(config)).then(response => {
    const {
      data: { clientlogin }
    } = response;
    switch (clientlogin.status) {
      case 'PASS': {
        return clientlogin;
      }
      case 'FAIL':
      default: {
        throw clientlogin;
      }
    }
  });
}
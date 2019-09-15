import { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { createApiClient } from './client';
import { Action } from './core/action';
import { Query } from './core/actions';

export class ApiService {
  client: AxiosInstance;

  constructor(config: Pick<AxiosRequestConfig, 'baseURL'>) {
    this.client = createApiClient(config);
  }

  action(method: Method, params: Action) {
    switch (method) {
      case 'POST':
      case 'post': {
        return this.client.post('', {
          ...params,
          format: 'json',
        });
      }
      case 'GET':
      case 'get':
      default: {
        return this.client.get('', {
          params: {
            ...params,
            format: 'json',
          },
        });
      }
    }
  }

  query(params: Omit<Query, 'action'>) {
    return this.action('get', {
      action: 'query',
      ...params,
    });
  }

  async clientLogin(credentials: { username: string; password: string }) {
    const loginToken = await this.query({
      meta: 'tokens',
      type: 'login',
    }).then(response => response.data.query.tokens.logintoken);
    return this.action('post', {
      loginToken,
      ...credentials,
      action: 'clientlogin',
      loginReturnUrl: 'http://localhost:3002',
    }).then(response => {
      const {
        data: { clientlogin },
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
}

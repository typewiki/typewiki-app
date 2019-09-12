import axios, { AxiosRequestConfig } from 'axios';
import isEmpty from 'lodash-es/isEmpty';
import * as queryString from 'query-string';
import { transformParams } from './helpers';

export function createApiClient() {
  const client = axios.create({
    baseURL: 'https://ru.wikipedia.org/w/api.php',
    withCredentials: true,
    transformRequest: (data: any) => {
      if (!isEmpty(data)) {
        return data;
      }
      // TODO: POST-requests doesn't work without next line
      return queryString.stringify(transformParams(data));
    },
  });

  client.interceptors.request.use((config: AxiosRequestConfig) => {
    if (!isEmpty(config.params)) {
      config.params = transformParams(config.params);
    }
    return config;
  });

  client.interceptors.response.use(response => {
    const {
      data: { error },
    } = response;
    if (error) {
      throw error;
    }
    return response;
  });

  return client;
};

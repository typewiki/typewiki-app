import axios, { AxiosRequestConfig } from 'axios';
import isEmpty from 'lodash-es/isEmpty';
import * as queryString from 'query-string';
import * as AxiosLogger from 'axios-logger';

import { transformParams } from './helpers';

const transformRequest = (data: any) => {
  if (isEmpty(data)) {
    return data;
  }
  // TODO: POST-requests doesn't work without next line
  return queryString.stringify(transformParams(data));
};

const handleRequestFulfilled = (config: AxiosRequestConfig) => {
  if (!isEmpty(config.params)) {
    config.params = transformParams(config.params);
  }
  return config;
};

const handleResponseFulfilled = (response: any) => {
  if (process.env.NODE_ENV !== 'production') {
    AxiosLogger.responseLogger(response);
  }
  const {
    data: { error },
  } = response;
  if (error) {
    throw error;
  }
  return response;
};

export const createApiClient = (config: Pick<AxiosRequestConfig, 'baseURL'>) => {
  const client = axios.create({
    baseURL: 'https://ru.wikipedia.org/w/api.php',
    withCredentials: true,
    transformRequest,
    ...config,
  });

  client.interceptors.request.use(handleRequestFulfilled);
  client.interceptors.response.use(handleResponseFulfilled);

  return client;
};

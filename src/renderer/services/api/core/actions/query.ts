import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { BaseRequestData } from '../base-request';
import { client } from '../client';

export type QueryRequestParams = Omit<QueryRequestData, 'action'>

export class QueryRequestData extends BaseRequestData {
  action = 'query';
  format? = 'json';
  prop?: string;
  titles?: string;
  rvProp?: string;
  rvSlots?: string;
  rvLimit?: number;
  formatVersion?: string;
  meta?: string;

  list?: string;
  usUsers?: string;
  usUserIds?: string;
  usProp?: string;

  constructor(opts: QueryRequestParams) {
    super();
    Object.assign(this, opts);
  }
}

export class QueryRequestConfig implements AxiosRequestConfig {
  method: Method = 'GET';
  params: QueryRequestData;

  constructor(opts: QueryRequestParams) {
    this.params = new QueryRequestData(opts);
  }
}

export function query(config: QueryRequestParams): Promise<AxiosResponse<any>> {
  return client.request(new QueryRequestConfig(config));
}

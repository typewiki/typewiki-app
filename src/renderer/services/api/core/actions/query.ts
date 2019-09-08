import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { BaseRequestData } from '../base-request';
import { client } from '../client';

export type QueryRequestParams = Omit<QueryRequestData, 'action'>;

export class QueryRequestData extends BaseRequestData {
  action = 'query';
  format? = 'json';
  prop?: string;
  titles?: string;

  /** Which properties to get for each revision */
  rvProp?: (
    | 'ids'
    | 'flags'
    | 'timestamp'
    | 'user'
    | 'userid'
    | 'size'
    | 'slotsize'
    | 'sha1'
    | 'slotsha1'
    | 'contentmodel'
    | 'comment'
    | 'parsedcomment'
    | 'content'
    | 'tags'
    | 'roles')[];
  /**
   * Which revision slots to return data for, when slot-related properties are included in rvprops.
   * If omitted, data from the main slot will be returned in a backwards-compatible format.
   */
  rvSlots?: 'main' | '*';
  /** Limit how many revisions will be returned. */
  rvLimit?: number | 'max';
  /** In which direction to enumerate. */
  rvDir?: 'newer' | 'older';
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

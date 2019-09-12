import { AxiosInstance, AxiosResponse } from 'axios';
import { Categories } from './queries/categories';
import { CategoryInfo } from './queries/category-info';
import { PageViews } from './queries/page-views';

export interface QueryBase {
  list?: string;
  indexPageIds?: boolean;
  export?: boolean;
  exportNowrap?: boolean;
  exportSchema?: '0.10' | '0.11';
  iwUrl?: boolean;
  continue?: string;
  rawContinue?: boolean;

  titles?: string[];
  pageIds?: number[];
  revIds?: number[];
  redirects?: boolean;
  convertTitles?: boolean;
}

export interface QueryPropBase<T extends string> extends QueryBase {
  prop: T;
}

export type Query = Categories | CategoryInfo | PageViews;

export const query = (
  client: AxiosInstance,
  { prop = 'cl' }: Categories,
): Promise<AxiosResponse<any>> =>
  client.get('', {
    params: {},
  });

import { AxiosInstance, AxiosResponse } from 'axios';
import { Categories } from './queries/props/categories';
import { CategoryInfo } from './queries/props/category-info';
import { PageViews } from './queries/props/page-views';
import { CirrusBuildDoc } from './queries/props/cirrus-build-doc';
import { CirrusDoc } from './queries/props/cirrus-doc';

export interface QueryBase {
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

export interface QueryPropBase extends QueryBase {
  prop: string;
}

export interface QueryListBase extends QueryBase {
  list: string;
}

export type Query = Categories | CategoryInfo | CirrusBuildDoc | CirrusDoc | PageViews;
export type Direction = 'ascending' | 'descending';
export type Values<T extends string> = T | T[];
export type Limit = number | 'max';
export type All = '*';

export const query = (
  client: AxiosInstance,
  { prop = 'cl' }: Categories,
): Promise<AxiosResponse<any>> =>
  client.get('', {
    params: {},
  });

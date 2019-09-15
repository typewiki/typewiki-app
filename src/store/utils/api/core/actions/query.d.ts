import { QueryBase } from './queries/query-base';
import { QueryMeta } from './queries/query-meta';
import { QueryProp } from './queries/query-prop';

export interface QueryPropBase extends QueryBase {
  prop: string;
}

export interface QueryListBase extends QueryBase {
  list: string;
}

export interface QueryMetaBase extends QueryBase {
  meta: string;
}

export type Direction = 'ascending' | 'descending';
export type Values<T extends string> = T | T[];
export type Limit = number | 'max';
export type AllValues = '*';

export type Query = QueryMeta | QueryProp;

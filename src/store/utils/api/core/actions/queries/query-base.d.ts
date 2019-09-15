import { ActionBase } from '../../action-base';

export interface QueryBase extends ActionBase {
  action: 'query';
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

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

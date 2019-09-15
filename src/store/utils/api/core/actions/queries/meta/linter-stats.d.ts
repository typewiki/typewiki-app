import { QueryMetaBase } from '../../query';

/** Get number of lint errors in each category */
export interface LinterStats extends QueryMetaBase {
  meta: 'linterstats' | 'ls';
}

import { QueryMetaBase } from '../query';

/** Query language stats. */
export interface LanguageStats extends QueryMetaBase {
  meta: 'languagestats' | 'ls';

  /** When more results are available, use this to continue. */
  lsOffset: number;

  /** Language code. */
  lsLanguage: string;
}

import { QueryMetaBase } from '../../query';

/** Query all translations for a single message. */
export interface MessageGroupStats extends QueryMetaBase {
  meta: 'messagegroupstats' | 'mgs';

  /** When more results are available, use this to continue. */
  mgsOffset: number;

  /** Message group ID. */
  mgsGroup: string;
}

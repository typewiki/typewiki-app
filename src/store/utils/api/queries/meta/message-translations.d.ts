import { QueryMetaBase } from '../../query';

/** Query all translations for a single message. */
export interface MessageTranslations extends QueryMetaBase {
  meta: 'messagetranslations' | 'mt';

  /** Full title of a known message. */
  mtTitle: string;

  /** When more results are available, use this to continue. */
  mtOffset: number;
}

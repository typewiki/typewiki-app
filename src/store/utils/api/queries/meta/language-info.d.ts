import { AllValues, QueryMetaBase, Values } from '../query';

/** Return information about available languages. */
export interface LanguageInfo extends QueryMetaBase {
  meta: 'languageinfo' | 'li';

  /** Which information to get for each language. */
  liProp?: Values<
    'code' | 'bcp47' | 'dir' | 'autonym' | 'name' | 'fallbacks' | 'variants'
  >;

  /**
   * Language codes of the languages that should be returned,
   * or * for all languages.
   */
  liCode?: AllValues | Values<string>;

  /**
   * When more results are available, use this to continue.
   */
  liContinue?: string;
}

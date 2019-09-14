import { Limit, QueryPropBase } from '../query';

/** Returns plain-text or limited HTML extracts of the given pages. */
export interface Extracts extends QueryPropBase {
  prop: 'extracts' | 'ex';

  /**
   * How many characters to return. Actual text returned might be slightly longer.
   */
  exChars: number;

  /**
   * How many sentences to return.
   */
  exSentences: number;

  /**
   * How many extracts to return.
   * (Multiple extracts can only be returned if exintro is set to true.)
   */
  exLimit?: Limit;

  /** Return only content before the first section. */
  exIntro: boolean;

  /** Return extracts as plain text instead of limited HTML. */
  exPlainText: boolean;

  /** How to format sections in plaintext mode. */
  exSectionFormat?: 'plain' | 'wiki' | 'raw';

  /** When more results are available, use this to continue. */
  exContinue: number;
}
